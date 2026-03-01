import type { Position } from "../ui/board/types";
import { MAX_LIVES } from "../ui/lesson/lessonSpacing";
import type { LessonData, LessonState, FeedbackState } from "./types";

export function startLesson(_data: LessonData): LessonState {
  return {
    currentStepIndex: 0,
    lives: MAX_LIVES,
    score: 0,
    completed: false,
    failed: false,
    selectedSquare: null,
    feedback: null,
  };
}

function posEqual(a: Position, b: Position): boolean {
  return a.row === b.row && a.col === b.col;
}

function applyCorrect(
  state: LessonState,
  data: LessonData,
): { correct: true; nextState: LessonState } {
  const step = data.steps[state.currentStepIndex];
  const feedback: FeedbackState = {
    type: "correct",
    message: step?.success_text ?? "正解！",
  };
  return {
    correct: true,
    nextState: {
      ...state,
      score: state.score + 1,
      selectedSquare: null,
      feedback,
    },
  };
}

function applyWrong(
  state: LessonState,
  data: LessonData,
): { correct: false; nextState: LessonState } {
  const step = data.steps[state.currentStepIndex];
  const nextLives = state.lives - 1;
  const feedback: FeedbackState = {
    type: "wrong",
    message: step?.fail_text ?? "不正解…もう一度！",
  };
  return {
    correct: false,
    nextState: {
      ...state,
      lives: nextLives,
      failed: nextLives <= 0,
      selectedSquare: null,
      feedback,
    },
  };
}

/**
 * Submit a move (from → to) for a "move" type step.
 */
export function submitMove(
  state: LessonState,
  data: LessonData,
  from: Position,
  to: Position,
): { correct: boolean; nextState: LessonState } {
  const step = data.steps[state.currentStepIndex];
  if (!step || step.type !== "move" || !step.correct_move) {
    return { correct: false, nextState: state };
  }

  const isCorrect =
    posEqual(from, step.correct_move.from) &&
    posEqual(to, step.correct_move.to);

  return isCorrect ? applyCorrect(state, data) : applyWrong(state, data);
}

/**
 * Submit a square tap for a "tap_square" type step.
 */
export function submitTap(
  state: LessonState,
  data: LessonData,
  position: Position,
): { correct: boolean; nextState: LessonState } {
  const step = data.steps[state.currentStepIndex];
  if (!step || step.type !== "tap_square" || !step.correct_square) {
    return { correct: false, nextState: state };
  }

  const isCorrect = posEqual(position, step.correct_square);
  return isCorrect ? applyCorrect(state, data) : applyWrong(state, data);
}

/**
 * Submit a quiz answer by index.
 */
export function submitQuiz(
  state: LessonState,
  data: LessonData,
  answerIndex: number,
): { correct: boolean; nextState: LessonState } {
  const step = data.steps[state.currentStepIndex];
  if (!step || step.type !== "quiz" || step.quiz_answer === undefined) {
    return { correct: false, nextState: state };
  }

  const isCorrect = answerIndex === step.quiz_answer;
  return isCorrect ? applyCorrect(state, data) : applyWrong(state, data);
}

/**
 * Advance to the next step. If this was the last step, mark completed.
 */
export function advanceStep(
  state: LessonState,
  data: LessonData,
): LessonState {
  const nextIndex = state.currentStepIndex + 1;
  if (nextIndex >= data.steps.length) {
    return { ...state, completed: true, feedback: null, selectedSquare: null };
  }
  return {
    ...state,
    currentStepIndex: nextIndex,
    feedback: null,
    selectedSquare: null,
  };
}

/**
 * Select a square (first tap of a two-tap move).
 */
export function selectSquare(
  state: LessonState,
  position: Position,
): LessonState {
  return { ...state, selectedSquare: position, feedback: null };
}

/**
 * Clear selection and feedback.
 */
export function clearSelection(state: LessonState): LessonState {
  return { ...state, selectedSquare: null, feedback: null };
}
