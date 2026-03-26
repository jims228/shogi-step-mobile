import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { parseSFEN } from "../ui/board/sfen";
import type { BoardState, HighlightSquare, PieceType } from "../ui/board/types";
import type { LessonData, LessonState, LessonStep } from "./types";
import {
  startLesson,
  submitMove,
  submitTap,
  submitQuiz,
  submitCompare,
  submitDrop,
  submitPromotion,
  advanceStep,
  selectSquare,
  selectHand,
} from "./LessonEngine";
import { canPieceMove } from "./moveValidation";

/** ms to show wrong feedback before clearing it */
const CLEAR_FEEDBACK_MS = 700;
/** ms to wait before showing opponent's auto response */
const AUTO_RESPONSE_MS = 600;

export function useLessonEngine(lessonData: LessonData) {
  const [state, setState] = useState<LessonState>(() => startLesson(lessonData));
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoResponseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current !== null) clearTimeout(feedbackTimerRef.current);
      if (autoResponseTimerRef.current !== null) clearTimeout(autoResponseTimerRef.current);
    };
  }, []);

  const currentStep: LessonStep | null =
    lessonData.steps[state.currentStepIndex] ?? null;

  const progress =
    lessonData.steps.length > 0
      ? state.currentStepIndex / lessonData.steps.length
      : 0;

  const boardState: BoardState = useMemo(
    () => parseSFEN(state.boardOverride ?? currentStep?.board_sfen ?? "9/9/9/9/9/9/9/9/9"),
    [state.boardOverride, currentStep?.board_sfen],
  );

  const highlights: HighlightSquare[] = useMemo(() => {
    const result: HighlightSquare[] = [];

    if (state.feedback) {
      const fbType = state.feedback.type === "correct" ? "correct" : "wrong";
      if (currentStep?.type === "tap_square" && currentStep.correct_square) {
        const squares = Array.isArray(currentStep.correct_square)
          ? currentStep.correct_square
          : [currentStep.correct_square];
        if (fbType === "correct") {
          for (const sq of squares) {
            result.push({ position: sq, type: "correct" });
          }
        }
      }
      if (currentStep?.type === "move" && currentStep.correct_move && "row" in currentStep.correct_move.to) {
        result.push({ position: currentStep.correct_move.to, type: fbType });
      }
      return result;
    }

    if (currentStep?.highlights) {
      for (const pos of currentStep.highlights) {
        result.push({ position: pos, type: "movable" });
      }
    }

    if (state.selectedSquare) {
      result.push({ position: state.selectedSquare, type: "lastMove" });
    }

    return result;
  }, [currentStep, state.selectedSquare, state.feedback]);

  const clearTimer = () => {
    if (feedbackTimerRef.current !== null) {
      clearTimeout(feedbackTimerRef.current);
      feedbackTimerRef.current = null;
    }
    if (autoResponseTimerRef.current !== null) {
      clearTimeout(autoResponseTimerRef.current);
      autoResponseTimerRef.current = null;
    }
  };

  /**
   * After a correct answer, if the step has auto_response,
   * show the player's move first, then after a delay show opponent's response.
   */
  const scheduleAutoResponse = useCallback((step: LessonStep) => {
    if (!step.auto_response || !step.after_response_sfen) return;
    autoResponseTimerRef.current = setTimeout(() => {
      autoResponseTimerRef.current = null;
      setState(prev => ({
        ...prev,
        boardOverride: step.after_response_sfen!,
        feedback: step.after_response_text
          ? { type: "correct", message: step.after_response_text }
          : prev.feedback,
      }));
    }, AUTO_RESPONSE_MS);
  }, []);

  const handleSquarePress = useCallback(
    (row: number, col: number) => {
      if (!currentStep || state.completed || state.failed) return;
      if (state.feedback?.type === "correct") return;
      if (state.showPromotion) return;

      const pos = { row, col };

      if (currentStep.type === "tap_square") {
        const result = submitTap(state, lessonData, pos);
        setState(result.nextState);
        clearTimer();
        if (result.correct) {
          scheduleAutoResponse(currentStep);
        } else {
          feedbackTimerRef.current = setTimeout(() => {
            feedbackTimerRef.current = null;
            setState(prev => ({ ...prev, feedback: null }));
          }, CLEAR_FEEDBACK_MS);
        }
        return;
      }

      if (currentStep.type === "move") {
        // Drop from hand
        if (state.selectedHand) {
          // Can't drop on an occupied square → deselect
          const targetPiece = boardState[row]?.[col];
          if (targetPiece) {
            setState(prev => ({ ...prev, selectedHand: null }));
            return;
          }

          // Empty square → submit drop (correct or wrong)
          const result = submitDrop(state, lessonData, state.selectedHand, pos);
          setState(result.nextState);
          clearTimer();
          if (result.correct) {
            scheduleAutoResponse(currentStep);
          } else {
            feedbackTimerRef.current = setTimeout(() => {
              feedbackTimerRef.current = null;
              setState(prev => ({ ...prev, feedback: null, selectedHand: null }));
            }, CLEAR_FEEDBACK_MS);
          }
          return;
        }

        // Select piece
        if (!state.selectedSquare) {
          const piece = boardState[row]?.[col];
          if (piece && piece.side === "sente") {
            setState(selectSquare(state, pos));
          }
          return;
        }

        // Already selected: tap same square → deselect
        if (state.selectedSquare.row === row && state.selectedSquare.col === col) {
          setState(prev => ({ ...prev, selectedSquare: null }));
          return;
        }

        // Tap another sente piece → switch selection
        const tappedPiece = boardState[row]?.[col];
        if (tappedPiece && tappedPiece.side === "sente") {
          setState(selectSquare(state, pos));
          return;
        }

        // Check if the selected piece can legally move there
        if (!canPieceMove(boardState, state.selectedSquare, pos)) {
          // Can't move there → deselect
          setState(prev => ({ ...prev, selectedSquare: null }));
          return;
        }

        // Legal move → check if correct
        const result = submitMove(state, lessonData, state.selectedSquare, pos);
        setState(result.nextState);
        clearTimer();
        if (result.correct) {
          scheduleAutoResponse(currentStep);
        } else {
          feedbackTimerRef.current = setTimeout(() => {
            feedbackTimerRef.current = null;
            setState(prev => ({ ...prev, feedback: null, selectedSquare: null }));
          }, CLEAR_FEEDBACK_MS);
        }
        return;
      }
    },
    [currentStep, state, lessonData, boardState],
  );

  const handleHandPress = useCallback(
    (pieceType: PieceType) => {
      if (!currentStep || state.completed || state.failed) return;
      if (state.feedback?.type === "correct") return;
      if (currentStep.type !== "move") return;

      if (state.selectedHand === pieceType) {
        setState(prev => ({ ...prev, selectedHand: null }));
      } else {
        setState(selectHand(state, pieceType));
      }
    },
    [currentStep, state],
  );

  const handlePromotion = useCallback(
    (promote: boolean) => {
      const result = submitPromotion(state, lessonData, promote);
      setState(result.nextState);
    },
    [state, lessonData],
  );

  const handleQuizAnswer = useCallback(
    (answerIndex: number) => {
      if (!currentStep || state.completed || state.failed) return;
      if (currentStep.type !== "quiz") return;

      const result = submitQuiz(state, lessonData, answerIndex);
      setState(result.nextState);
    },
    [currentStep, state, lessonData],
  );

  const handleCompareAnswer = useCallback(
    (answerIndex: number) => {
      if (!currentStep || state.completed || state.failed) return;
      if (currentStep.type !== "compare") return;

      const result = submitCompare(state, lessonData, answerIndex);
      setState(result.nextState);
      clearTimer();
      if (!result.correct) {
        feedbackTimerRef.current = setTimeout(() => {
          feedbackTimerRef.current = null;
          setState(prev => ({ ...prev, feedback: null }));
        }, CLEAR_FEEDBACK_MS);
      }
    },
    [currentStep, state, lessonData],
  );

  /** Deselect any selected piece/hand (e.g. when tapping outside the board). */
  const handleDeselect = useCallback(() => {
    if (state.selectedSquare || state.selectedHand) {
      setState(prev => ({ ...prev, selectedSquare: null, selectedHand: null }));
    }
  }, [state.selectedSquare, state.selectedHand]);

  const handleNext = useCallback(() => {
    clearTimer();
    if (state.completed || state.failed) return;
    setState(advanceStep(state, lessonData));
  }, [state, lessonData]);

  const restart = useCallback(() => {
    clearTimer();
    setState(startLesson(lessonData));
  }, [lessonData]);

  return {
    currentStep,
    state,
    boardState,
    highlights,
    progress,
    handleSquarePress,
    handleHandPress,
    handleDeselect,
    handlePromotion,
    handleQuizAnswer,
    handleCompareAnswer,
    handleNext,
    restart,
  };
}
