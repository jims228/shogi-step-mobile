import type { BoardPiece, BoardState, HandPieces, PieceType } from "./types";

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

export type ParsedSFEN = {
  board: BoardState;
  senteHand: HandPieces;
  goteHand: HandPieces;
  /** @deprecated Use senteHand instead */
  hand: HandPieces;
};

/**
 * Parse a SFEN string into board state and hand pieces.
 *
 * SFEN format: "board side hand movecount"
 * Example: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b P2g 1"
 *
 * Hand pieces: uppercase = sente, lowercase = gote. Number prefix = count.
 * "-" means no hand pieces.
 */
export function parseSFENFull(sfen: string): ParsedSFEN {
  const parts = sfen.split(" ");
  const board = parseSFEN(sfen);
  const handStr = parts[2] ?? "-";
  const { sente, gote } = parseHandPieces(handStr);
  return { board, senteHand: sente, goteHand: gote, hand: sente };
}

/**
 * Parse hand pieces string from SFEN.
 * Uppercase = sente, lowercase = gote. Number prefix = count.
 * Examples: "P2Gp" → sente: { fu:1, ki:2 }, gote: { fu:1 }
 */
function parseHandPieces(handStr: string): { sente: HandPieces; gote: HandPieces } {
  if (handStr === "-") return { sente: {}, gote: {} };

  const sente: HandPieces = {};
  const gote: HandPieces = {};
  let count = 0;

  for (let i = 0; i < handStr.length; i++) {
    const ch = handStr[i]!;
    const digit = parseInt(ch, 10);
    if (!isNaN(digit)) {
      count = count * 10 + digit;
      continue;
    }
    const upper = ch.toUpperCase();
    const pieceType = SFEN_TO_PIECE[upper];
    if (pieceType) {
      const target = ch === upper ? sente : gote;
      target[pieceType] = (target[pieceType] ?? 0) + (count || 1);
    }
    count = 0;
  }

  return { sente, gote };
}

/**
 * Parse the board portion of a SFEN string into a 9x9 BoardState.
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

    while (row.length < 9) row.push(null);
    board.push(row.slice(0, 9));
  }

  while (board.length < 9) {
    board.push(Array(9).fill(null) as BoardPiece[]);
  }

  return board;
}
