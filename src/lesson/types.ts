import type { Position } from "../ui/board/types";

export type LessonStepType = "explain" | "move" | "tap_square" | "quiz";

export type LessonStep = {
  id: string;
  type: LessonStepType;
  /** SFEN string for the board position in this step. */
  board_sfen: string;
  /** Squares to highlight as hints. */
  highlights?: Position[];
  /** Instruction text shown to the user. */
  instruction: string;
  /** Coach (おじいちゃん) dialogue text. */
  coach_text?: string;
  /** Correct move for "move" type steps. */
  correct_move?: { from: Position; to: Position };
  /** Correct square for "tap_square" type steps. */
  correct_square?: Position;
  /** Answer options for "quiz" type steps. */
  quiz_options?: string[];
  /** Correct answer index (0-based) for "quiz" type steps. */
  quiz_answer?: number;
  /** Message shown on correct answer. */
  success_text?: string;
  /** Message shown on wrong answer. */
  fail_text?: string;
};

export type LessonData = {
  id: string;
  title: string;
  unit: string;
  steps: LessonStep[];
  reward_xp: number;
};

export type FeedbackState = {
  type: "correct" | "wrong";
  message: string;
} | null;

export type LessonState = {
  currentStepIndex: number;
  lives: number;
  score: number;
  completed: boolean;
  failed: boolean;
  /** Currently selected square (for two-tap move input). */
  selectedSquare: Position | null;
  /** Feedback to display after an answer. */
  feedback: FeedbackState;
};
