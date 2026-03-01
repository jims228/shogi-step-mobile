export type PieceType = "fu" | "ky" | "ke" | "gi" | "ki" | "ka" | "hi" | "ou";

export type Side = "sente" | "gote";

export type BoardPiece = {
  piece: PieceType;
  side: Side;
  promoted: boolean;
} | null;

/** 9x9 board state. Row 0 = top (gote's side), Row 8 = bottom (sente's side). */
export type BoardState = BoardPiece[][];

export type Position = {
  row: number;
  col: number;
};

export type HighlightType = "movable" | "correct" | "lastMove" | "wrong";

export type HighlightSquare = {
  position: Position;
  type: HighlightType;
};
