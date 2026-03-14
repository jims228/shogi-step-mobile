import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { parseSFEN } from "../ui/board/sfen";
import type { BoardState, HighlightSquare } from "../ui/board/types";
import type { LessonData, LessonState, LessonStep } from "./types";
import {
  startLesson,
  submitMove,
  submitTap,
  submitQuiz,
  advanceStep,
  selectSquare,
} from "./LessonEngine";

/** ms to show correct feedback before auto-advancing (move/tap_square steps) */
const AUTO_ADVANCE_MS = 600;
/** ms to show wrong feedback before clearing it (move/tap_square steps) */
const CLEAR_FEEDBACK_MS = 700;

export function useLessonEngine(lessonData: LessonData) {
  const [state, setState] = useState<LessonState>(() => startLesson(lessonData));
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clean up any pending timer on unmount
  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current !== null) clearTimeout(feedbackTimerRef.current);
    };
  }, []);

  const currentStep: LessonStep | null =
    lessonData.steps[state.currentStepIndex] ?? null;

  const progress =
    lessonData.steps.length > 0
      ? state.currentStepIndex / lessonData.steps.length
      : 0;

  const boardState: BoardState = useMemo(
    () => parseSFEN(currentStep?.board_sfen ?? "9/9/9/9/9/9/9/9/9"),
    [currentStep?.board_sfen],
  );

  const highlights: HighlightSquare[] = useMemo(() => {
    const result: HighlightSquare[] = [];

    // Show hint highlights from step data
    if (currentStep?.highlights) {
      for (const pos of currentStep.highlights) {
        result.push({ position: pos, type: "movable" });
      }
    }

    // Show selected square
    if (state.selectedSquare) {
      result.push({ position: state.selectedSquare, type: "lastMove" });
    }

    // Show correct/wrong feedback on the relevant square
    if (state.feedback) {
      const fbType = state.feedback.type === "correct" ? "correct" : "wrong";
      if (currentStep?.type === "tap_square" && currentStep.correct_square) {
        result.push({ position: currentStep.correct_square, type: fbType });
      }
      if (currentStep?.type === "move" && currentStep.correct_move) {
        result.push({ position: currentStep.correct_move.to, type: fbType });
      }
    }

    return result;
  }, [currentStep, state.selectedSquare, state.feedback]);

  const clearTimer = () => {
    if (feedbackTimerRef.current !== null) {
      clearTimeout(feedbackTimerRef.current);
      feedbackTimerRef.current = null;
    }
  };

  const handleSquarePress = useCallback(
    (row: number, col: number) => {
      if (!currentStep || state.completed || state.failed) return;
      if (state.feedback?.type === "correct") return; // auto-advance in progress

      const pos = { row, col };

      if (currentStep.type === "tap_square") {
        const result = submitTap(state, lessonData, pos);
        setState(result.nextState);
        clearTimer();
        if (result.correct) {
          // Auto-advance after showing correct feedback
          feedbackTimerRef.current = setTimeout(() => {
            feedbackTimerRef.current = null;
            setState(prev => advanceStep(prev, lessonData));
          }, AUTO_ADVANCE_MS);
        } else {
          // Auto-clear wrong feedback so user can try again
          feedbackTimerRef.current = setTimeout(() => {
            feedbackTimerRef.current = null;
            setState(prev => ({ ...prev, feedback: null }));
          }, CLEAR_FEEDBACK_MS);
        }
        return;
      }

      if (currentStep.type === "move") {
        if (!state.selectedSquare) {
          // First tap: select the piece
          const piece = boardState[row]?.[col];
          if (piece && piece.side === "sente") {
            setState(selectSquare(state, pos));
          }
          return;
        }
        // Second tap: attempt the move
        const result = submitMove(state, lessonData, state.selectedSquare, pos);
        setState(result.nextState);
        clearTimer();
        if (result.correct) {
          feedbackTimerRef.current = setTimeout(() => {
            feedbackTimerRef.current = null;
            setState(prev => advanceStep(prev, lessonData));
          }, AUTO_ADVANCE_MS);
        } else {
          feedbackTimerRef.current = setTimeout(() => {
            feedbackTimerRef.current = null;
            setState(prev => ({ ...prev, feedback: null }));
          }, CLEAR_FEEDBACK_MS);
        }
        return;
      }

      // explain / quiz: tap fires but no action needed (safe no-op)
    },
    [currentStep, state, lessonData, boardState],
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
    handleQuizAnswer,
    handleNext,
    restart,
  };
}
