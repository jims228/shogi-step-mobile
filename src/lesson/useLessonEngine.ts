import { useCallback, useMemo, useState } from "react";

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
  clearSelection,
} from "./LessonEngine";

export function useLessonEngine(lessonData: LessonData) {
  const [state, setState] = useState<LessonState>(() => startLesson(lessonData));

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

  const handleSquarePress = useCallback(
    (row: number, col: number) => {
      if (!currentStep || state.completed || state.failed) return;
      if (state.feedback?.type === "correct") return; // waiting for "next"

      const pos = { row, col };

      if (currentStep.type === "tap_square") {
        const result = submitTap(state, lessonData, pos);
        setState(result.nextState);
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
        return;
      }

      // For explain/quiz types, tapping the board does nothing
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
    if (state.completed || state.failed) return;
    setState(advanceStep(state, lessonData));
  }, [state, lessonData]);

  const restart = useCallback(() => {
    setState(startLesson(lessonData));
  }, [lessonData]);

  const cancelSelection = useCallback(() => {
    setState(clearSelection(state));
  }, [state]);

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
    cancelSelection,
  };
}
