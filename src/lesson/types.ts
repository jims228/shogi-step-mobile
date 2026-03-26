import type { Position, MoveFrom, HandPieces, PieceType } from "../ui/board/types";

// ── Step types ──

export type LessonStepType = "move" | "tap_square" | "quiz" | "compare";

export type CompareOption = {
  label: string;
  description?: string;
  move?: { from: MoveFrom; to: Position };
};

export type LessonStep = {
  id: string;
  type: LessonStepType;
  /** SFEN string for the board position in this step. */
  board_sfen: string;
  /** Squares to highlight as hints. */
  highlights?: Position[];
  /** Arrows to draw on the board. from: [row,col] or "hand_XX" (e.g. "hand_ki") */
  arrows?: { from: [number, number] | string; to: [number, number]; color?: string }[];
  /** Instruction text shown to the user. */
  instruction: string;
  /** Coach (おじいちゃん) dialogue text. */
  coach_text?: string;

  // ── move ──
  /** Correct move for "move" type steps. from can be board position or hand piece. */
  correct_move?: { from: MoveFrom; to: Position };
  /** Whether promotion is the correct choice (true=promote, false=decline, undefined=no prompt). */
  correct_promotion?: boolean;

  // ── tap_square ──
  /** Correct square(s) for "tap_square" type steps. Single or multiple accepted. */
  correct_square?: Position | Position[];
  /** Board SFEN to show after correct answer (e.g. piece moved to tapped square). */
  result_sfen?: string;

  // ── quiz ──
  /** Answer options for "quiz" type steps. */
  quiz_options?: string[];
  /** Correct answer index (0-based) for "quiz" type steps. */
  quiz_answer?: number;

  // ── compare ──
  /** Candidate options for "compare" type steps. */
  compare_options?: CompareOption[];
  /** Correct answer index (0-based) for "compare" type steps. */
  compare_answer?: number;
  /** Explanation shown after correct compare answer (why this is right, why others are wrong). */
  why_text?: string;

  // ── hand pieces ──
  /** Override hand pieces for this step. If omitted, parsed from board_sfen. */
  hand_pieces?: HandPieces;

  // ── auto response ──
  /** Opponent's automatic response after correct answer. Shown before footer. */
  auto_response?: { from: Position; to: Position };
  /** Board SFEN after auto_response is applied. */
  after_response_sfen?: string;
  /** Coach text to show after auto_response. */
  after_response_text?: string;

  // ── second move (2nd turn within same step) ──
  /** Second move the player must make (after auto_response). */
  second_move?: { from: MoveFrom; to: Position };
  /** Arrows to show for second move. */
  second_arrows?: { from: [number, number] | string; to: [number, number]; color?: string }[];
  /** Opponent's auto response after second move. */
  second_auto_response?: { from: Position; to: Position };
  /** Board SFEN after second auto_response. */
  second_after_response_sfen?: string;
  /** Coach text after second auto_response. */
  second_after_response_text?: string;

  // ── common ──
  /** Message shown on correct answer. */
  success_text?: string;
  /** Message shown on wrong answer. */
  fail_text?: string;
  /** Show hint after N failures (default: no auto-hint). */
  hint_after_failures?: number;
};

// ── Lesson metadata ──

export type LessonType = "learn" | "guided_move" | "find_move" | "compare" | "review";
export type NodeType = "lesson" | "review" | "battle";

export type LessonData = {
  id: string;
  title: string;
  unit: string;
  type?: LessonType;
  node_type?: NodeType;
  steps: LessonStep[];
  reward_xp: number;
};

// ── Battle types (scripted) ──

export type ScriptedMove = {
  side: "player" | "opponent";
  move: { from: MoveFrom; to: Position };
  promotion?: boolean;
  /** Alternative acceptable moves for player (partial credit). */
  alternatives?: { from: MoveFrom; to: Position }[];
};

export type CoachInterrupt = {
  after_move_index: number;
  coach_text: string;
  type: "hint" | "warning" | "praise";
};

export type ReflectionCard = {
  type: "good" | "bad" | "next";
  board_sfen?: string;
  title: string;
  description: string;
};

export type BattleData = {
  id: string;
  title: string;
  unit: string;
  initial_sfen: string;
  moves: ScriptedMove[];
  coach_interrupts: CoachInterrupt[];
  reflection_cards: ReflectionCard[];
  reward_xp: number;
};

// ── Runtime state ──

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
  /** Selected hand piece type (for drop input). */
  selectedHand: PieceType | null;
  /** Feedback to display after an answer. */
  feedback: FeedbackState;
  /** Board SFEN override after a correct move (shows piece in new position). */
  boardOverride: string | null;
  /** Temporary coach text override (e.g. after auto_response before second move). */
  coachOverride: string | null;
  /** Current turn within a multi-turn step (0 = first move, 1 = second move). */
  turnIndex: number;
  /** True while waiting for opponent's auto response (block player input). */
  waitingAutoResponse: boolean;
  /** Whether promotion dialog is showing. */
  showPromotion: boolean;
  /** Pending move waiting for promotion decision. */
  pendingMove: { from: MoveFrom; to: Position } | null;
};
