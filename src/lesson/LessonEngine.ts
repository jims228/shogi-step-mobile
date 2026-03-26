import type { Position, PieceType } from "../ui/board/types";
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
    selectedHand: null,
    feedback: null,
    boardOverride: null,
    showPromotion: false,
    pendingMove: null,
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
      selectedHand: null,
      feedback,
      showPromotion: false,
      pendingMove: null,
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
      selectedHand: null,
      feedback,
      showPromotion: false,
      pendingMove: null,
    },
  };
}

// ── SFEN move helper ──

function applySfenMove(sfen: string, from: Position, to: Position): string {
  const boardPart = sfen.split(" ")[0] ?? sfen;
  const rest = sfen.substring(boardPart.length);
  const rows = boardPart.split("/");

  const grid: string[][] = [];
  for (let r = 0; r < 9; r++) {
    const row: string[] = [];
    const rowStr = rows[r] ?? "";
    for (let i = 0; i < rowStr.length; i++) {
      if (rowStr[i] === "+") {
        row.push("+" + rowStr[++i]);
      } else {
        const d = parseInt(rowStr[i]!, 10);
        if (!isNaN(d)) {
          for (let e = 0; e < d; e++) row.push("");
        } else {
          row.push(rowStr[i]!);
        }
      }
    }
    while (row.length < 9) row.push("");
    grid.push(row.slice(0, 9));
  }

  const piece = grid[from.row]![from.col]!;
  grid[from.row]![from.col] = "";
  grid[to.row]![to.col] = piece;

  const newRows: string[] = [];
  for (let r = 0; r < 9; r++) {
    let rowStr = "";
    let empty = 0;
    for (let c = 0; c < 9; c++) {
      if (grid[r]![c] === "") {
        empty++;
      } else {
        if (empty > 0) { rowStr += empty; empty = 0; }
        rowStr += grid[r]![c];
      }
    }
    if (empty > 0) rowStr += empty;
    newRows.push(rowStr);
  }
  return newRows.join("/") + rest;
}

// ── Submit handlers ──

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

  const correctFrom = step.correct_move.from;
  const isFromCorrect = "row" in correctFrom && posEqual(from, correctFrom);
  const isCorrect = isFromCorrect && posEqual(to, step.correct_move.to);

  if (isCorrect) {
    // Check if promotion prompt is needed
    if (step.correct_promotion !== undefined) {
      return {
        correct: true, // tentatively correct, awaiting promotion choice
        nextState: {
          ...state,
          showPromotion: true,
          pendingMove: { from, to },
          selectedSquare: null,
          selectedHand: null,
        },
      };
    }
    const result = applyCorrect(state, data);
    const newSfen = applySfenMove(step.board_sfen, from, to);
    result.nextState.boardOverride = newSfen;
    return result;
  }
  return applyWrong(state, data);
}

export function submitPromotion(
  state: LessonState,
  data: LessonData,
  promote: boolean,
): { correct: boolean; nextState: LessonState } {
  const step = data.steps[state.currentStepIndex];
  if (!step || !state.pendingMove || step.correct_promotion === undefined) {
    return { correct: false, nextState: state };
  }

  if (promote === step.correct_promotion) {
    const result = applyCorrect(state, data);
    if (state.pendingMove && "row" in state.pendingMove.from) {
      const newSfen = applySfenMove(step.board_sfen, state.pendingMove.from as Position, state.pendingMove.to);
      result.nextState.boardOverride = newSfen;
    }
    return result;
  }
  return applyWrong(state, data);
}

export function submitDrop(
  state: LessonState,
  data: LessonData,
  pieceType: PieceType,
  to: Position,
): { correct: boolean; nextState: LessonState } {
  const step = data.steps[state.currentStepIndex];
  if (!step || step.type !== "move" || !step.correct_move) {
    return { correct: false, nextState: state };
  }

  const correctFrom = step.correct_move.from;
  const isFromCorrect = "hand" in correctFrom && correctFrom.hand === pieceType;
  const isCorrect = isFromCorrect && posEqual(to, step.correct_move.to);

  if (isCorrect) {
    const result = applyCorrect(state, data);
    if (step.result_sfen) {
      result.nextState.boardOverride = step.result_sfen;
    }
    return result;
  }
  return applyWrong(state, data);
}

export function submitTap(
  state: LessonState,
  data: LessonData,
  position: Position,
): { correct: boolean; nextState: LessonState } {
  const step = data.steps[state.currentStepIndex];
  if (!step || step.type !== "tap_square" || !step.correct_square) {
    return { correct: false, nextState: state };
  }

  const squares = Array.isArray(step.correct_square)
    ? step.correct_square
    : [step.correct_square];
  const isCorrect = squares.some((sq) => posEqual(position, sq));
  if (isCorrect) {
    const result = applyCorrect(state, data);
    if (step.result_sfen) {
      result.nextState.boardOverride = step.result_sfen;
    }
    return result;
  }
  return applyWrong(state, data);
}

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

export function submitCompare(
  state: LessonState,
  data: LessonData,
  answerIndex: number,
): { correct: boolean; nextState: LessonState } {
  const step = data.steps[state.currentStepIndex];
  if (!step || step.type !== "compare" || step.compare_answer === undefined) {
    return { correct: false, nextState: state };
  }

  const isCorrect = answerIndex === step.compare_answer;
  if (isCorrect) {
    const result = applyCorrect(state, data);
    // Override message with why_text if available
    if (step.why_text && result.nextState.feedback) {
      result.nextState.feedback = {
        type: "correct",
        message: step.why_text,
      };
    }
    return result;
  }
  return applyWrong(state, data);
}

export function advanceStep(
  state: LessonState,
  data: LessonData,
): LessonState {
  const nextIndex = state.currentStepIndex + 1;
  if (nextIndex >= data.steps.length) {
    return { ...state, completed: true, feedback: null, selectedSquare: null, selectedHand: null, boardOverride: null, showPromotion: false, pendingMove: null };
  }
  return {
    ...state,
    currentStepIndex: nextIndex,
    feedback: null,
    selectedSquare: null,
    selectedHand: null,
    boardOverride: null,
    showPromotion: false,
    pendingMove: null,
  };
}

export function selectSquare(
  state: LessonState,
  position: Position,
): LessonState {
  return { ...state, selectedSquare: position, selectedHand: null, feedback: null };
}

export function selectHand(
  state: LessonState,
  pieceType: PieceType,
): LessonState {
  return { ...state, selectedHand: pieceType, selectedSquare: null, feedback: null };
}
