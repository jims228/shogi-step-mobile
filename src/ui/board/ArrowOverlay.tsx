import React from "react";
import { StyleSheet, View } from "react-native";

import type { PieceType } from "./types";

export type ArrowDef = {
  /** Arrow tail: [row, col] for board square, or "hand_XX" for sente hand piece (e.g. "hand_ki"). */
  from: [number, number] | string;
  /** Arrow head position [row, col] (0-indexed, board coordinates). */
  to: [number, number];
  /** Arrow color (default: amber) */
  color?: string;
};

type Props = {
  arrows: ArrowDef[];
  cellSize: number;
  /** Offset in px from top of the arrow container to the top of the 9x9 grid. */
  boardTopOffset: number;
  /** Offset in px from top of the arrow container to the center of sente hand bar. */
  senteHandCenterY: number;
  /** Ordered list of piece types displayed in sente hand bar. Used to calculate X position. */
  senteHandPieces: PieceType[];
  /** Width of the sente hand bar label ("☗ 持駒" text area). */
  handLabelWidth?: number;
};

const DEFAULT_COLOR = "#f59e0b";
const SHAFT_THICKNESS = 3;
const HEAD_SIZE = 10;
const START_RADIUS_RATIO = 0.45;

const PIECE_TYPE_MAP: Record<string, PieceType> = {
  hand_fu: "fu", hand_ky: "ky", hand_ke: "ke", hand_gi: "gi",
  hand_ki: "ki", hand_ka: "ka", hand_hi: "hi",
};

export function ArrowOverlay({
  arrows, cellSize, boardTopOffset, senteHandCenterY,
  senteHandPieces, handLabelWidth = 55,
}: Props) {
  if (arrows.length === 0 || cellSize <= 0) return null;

  const boardSize = cellSize * 9;

  function resolveFrom(from: [number, number] | string): { x: number; y: number } | null {
    if (typeof from === "string") {
      // Hand piece: e.g. "hand_ki"
      const pieceType = PIECE_TYPE_MAP[from];
      if (!pieceType) return null;
      const idx = senteHandPieces.indexOf(pieceType);
      if (idx < 0) return null;
      // Calculate X position: label width + gap + centered pieces
      const slotSize = Math.floor(cellSize * 0.95);
      const gap = 2;
      const totalPiecesWidth = senteHandPieces.length * slotSize + (senteHandPieces.length - 1) * gap;
      // Pieces are centered in the bar (after label)
      const barContentWidth = boardSize - handLabelWidth;
      const piecesStartX = handLabelWidth + (barContentWidth - totalPiecesWidth) / 2;
      const x = piecesStartX + idx * (slotSize + gap) + slotSize / 2;
      const y = senteHandCenterY;
      return { x, y };
    }
    // Board square
    const [row, col] = from;
    return {
      x: (col + 0.5) * cellSize,
      y: boardTopOffset + (row + 0.5) * cellSize,
    };
  }

  function resolveTo(to: [number, number]): { x: number; y: number } {
    const [row, col] = to;
    return {
      x: (col + 0.5) * cellSize,
      y: boardTopOffset + (row + 0.5) * cellSize,
    };
  }

  return (
    <View style={[StyleSheet.absoluteFill, { overflow: "visible" }]} pointerEvents="none">
      {arrows.map((a, i) => {
        const fromPt = resolveFrom(a.from);
        const toPt = resolveTo(a.to);
        if (!fromPt) return null;

        const color = a.color ?? DEFAULT_COLOR;
        const dx = toPt.x - fromPt.x;
        const dy = toPt.y - fromPt.y;
        const fullLen = Math.sqrt(dx * dx + dy * dy);
        if (fullLen < 1) return null;

        const ux = dx / fullLen;
        const uy = dy / fullLen;

        const startRadius = cellSize * START_RADIUS_RATIO;
        const x1 = fromPt.x + ux * startRadius;
        const y1 = fromPt.y + uy * startRadius;
        const x2 = toPt.x;
        const y2 = toPt.y;

        const shaftDx = x2 - x1;
        const shaftDy = y2 - y1;
        const shaftFullLen = Math.sqrt(shaftDx * shaftDx + shaftDy * shaftDy);
        const shaftLen = Math.max(0, shaftFullLen - HEAD_SIZE * 0.5);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const shaftMidX = x1 + ux * (shaftLen / 2);
        const shaftMidY = y1 + uy * (shaftLen / 2);

        return (
          <View key={i} style={[StyleSheet.absoluteFill, { overflow: "visible" }]} pointerEvents="none">
            <View
              style={{
                position: "absolute",
                left: shaftMidX - shaftLen / 2,
                top: shaftMidY - SHAFT_THICKNESS / 2,
                width: shaftLen,
                height: SHAFT_THICKNESS,
                backgroundColor: color,
                borderRadius: SHAFT_THICKNESS / 2,
                opacity: 0.85,
                transform: [{ rotate: `${angle}deg` }],
              }}
            />
            <View
              style={{
                position: "absolute",
                left: x2 - HEAD_SIZE / 2,
                top: y2 - HEAD_SIZE / 2,
                width: 0,
                height: 0,
                borderLeftWidth: HEAD_SIZE,
                borderTopWidth: HEAD_SIZE / 2,
                borderBottomWidth: HEAD_SIZE / 2,
                borderLeftColor: color,
                borderTopColor: "transparent",
                borderBottomColor: "transparent",
                opacity: 0.85,
                transform: [{ rotate: `${angle}deg` }],
              }}
            />
          </View>
        );
      })}
    </View>
  );
}
