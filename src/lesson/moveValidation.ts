import type { Position, BoardState, PieceType, Side } from "../ui/board/types";

/**
 * Check if a piece at `from` can move to `to` based on basic shogi movement rules.
 * Does NOT check for check/pin/etc — only piece movement patterns and blocking.
 */
export function canPieceMove(
  boardState: BoardState,
  from: Position,
  to: Position,
): boolean {
  const piece = boardState[from.row]?.[from.col];
  if (!piece) return false;

  // Can't move to a square occupied by own piece
  const target = boardState[to.row]?.[to.col];
  if (target && target.side === piece.side) return false;

  // Must be within board
  if (to.row < 0 || to.row > 8 || to.col < 0 || to.col > 8) return false;

  const dr = to.row - from.row;
  const dc = to.col - from.col;
  const adr = Math.abs(dr);
  const adc = Math.abs(dc);

  // Direction multiplier: sente moves up (negative row), gote moves down
  const forward = piece.side === "sente" ? -1 : 1;

  if (piece.promoted) {
    return canPromotedMove(piece.piece, dr, dc, adr, adc, forward, boardState, from, to);
  }

  switch (piece.piece) {
    case "fu": // 歩: 1 step forward
      return dr === forward && dc === 0;

    case "ky": // 香: any steps forward (no sideways/backward)
      if (dc !== 0) return false;
      if (dr * forward <= 0) return false; // must move forward
      return isPathClear(boardState, from, to);

    case "ke": // 桂: L-shape forward
      return dr === forward * 2 && adc === 1;

    case "gi": // 銀: forward 1 + diagonal forward 1 + diagonal backward 1
      if (adr <= 1 && adc <= 1 && !(dr === 0 && dc === 0)) {
        // Can move to: forward, diag-forward-left, diag-forward-right, diag-back-left, diag-back-right
        // Cannot move: sideways, straight back
        if (dr === forward && adc <= 1) return true; // forward + diag forward
        if (dr === -forward && adc === 1) return true; // diag backward
        return false;
      }
      return false;

    case "ki": // 金: forward, sideways, diag-forward, straight back
      if (adr <= 1 && adc <= 1 && !(dr === 0 && dc === 0)) {
        if (dr === -forward && adc === 1) return false; // diag backward NOT allowed
        return true;
      }
      return false;

    case "ka": // 角: diagonal any distance
      if (adr !== adc || adr === 0) return false;
      return isPathClear(boardState, from, to);

    case "hi": // 飛: straight any distance
      if (dr !== 0 && dc !== 0) return false;
      return isPathClear(boardState, from, to);

    case "ou": // 王: 1 step any direction
      return adr <= 1 && adc <= 1 && !(dr === 0 && dc === 0);

    default:
      return false;
  }
}

function canPromotedMove(
  piece: PieceType, dr: number, dc: number,
  adr: number, adc: number, forward: number,
  boardState: BoardState, from: Position, to: Position,
): boolean {
  switch (piece) {
    case "fu": // と金: same as 金
    case "ky": // 成香: same as 金
    case "ke": // 成桂: same as 金
    case "gi": // 成銀: same as 金
      if (adr <= 1 && adc <= 1 && !(dr === 0 && dc === 0)) {
        if (dr === -forward && adc === 1) return false;
        return true;
      }
      return false;

    case "ka": // 馬: diagonal any + 1 step orthogonal
      if (adr === adc && adr > 0) return isPathClear(boardState, from, to);
      if (adr <= 1 && adc <= 1 && !(dr === 0 && dc === 0)) return true;
      return false;

    case "hi": // 龍: straight any + 1 step diagonal
      if ((dr === 0 || dc === 0) && (dr !== 0 || dc !== 0)) return isPathClear(boardState, from, to);
      if (adr <= 1 && adc <= 1 && !(dr === 0 && dc === 0)) return true;
      return false;

    default:
      return false;
  }
}

/** Check if path between from and to is clear (for sliding pieces). */
function isPathClear(boardState: BoardState, from: Position, to: Position): boolean {
  const dr = to.row - from.row;
  const dc = to.col - from.col;
  const steps = Math.max(Math.abs(dr), Math.abs(dc));
  const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
  const stepC = dc === 0 ? 0 : dc / Math.abs(dc);

  for (let i = 1; i < steps; i++) {
    const r = from.row + stepR * i;
    const c = from.col + stepC * i;
    if (boardState[r]?.[c]) return false; // blocked
  }
  return true;
}
