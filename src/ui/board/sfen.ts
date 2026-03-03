import type { BoardPiece, BoardState, PieceType } from "./types";

const SFEN_TO_PIECE: Record<string, PieceType> = {
  P: "fu",
  L: "ky",
  N: "ke",
  S: "gi",
  G: "ki",
  B: "ka",
  R: "hi",
  K: "ou",
};

/**
 * Parse the board portion of a SFEN string into a 9x9 BoardState.
 * Only the board part (before the first space) is used.
 *
 * SFEN convention:
 * - Uppercase = sente (先手), lowercase = gote (後手)
 * - '+' prefix = promoted piece
 * - Numbers = consecutive empty squares
 * - '/' separates rows (top to bottom)
 */
export function parseSFEN(sfen: string): BoardState {
  const boardPart = sfen.split(" ")[0] ?? sfen;
  const rows = boardPart.split("/");

  const board: BoardState = [];

  for (let r = 0; r < 9; r++) {
    const row: BoardPiece[] = [];
    const rowStr = rows[r] ?? "";
    let promoted = false;

    for (let i = 0; i < rowStr.length; i++) {
      const ch = rowStr[i]!;

      if (ch === "+") {
        promoted = true;
        continue;
      }

      const digit = parseInt(ch, 10);
      if (!isNaN(digit)) {
        for (let e = 0; e < digit; e++) row.push(null);
        promoted = false;
        continue;
      }

      const upper = ch.toUpperCase();
      const pieceType = SFEN_TO_PIECE[upper];
      if (pieceType) {
        const side = ch === upper ? "sente" : "gote";
        row.push({ piece: pieceType, side, promoted });
      }
      promoted = false;
    }

    // Pad to 9 columns if needed
    while (row.length < 9) row.push(null);
    board.push(row.slice(0, 9));
  }

  // Pad to 9 rows if needed
  while (board.length < 9) {
    board.push(Array(9).fill(null) as BoardPiece[]);
  }

  return board;
}
