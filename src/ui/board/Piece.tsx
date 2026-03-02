import React from "react";
import { Image, StyleSheet, View } from "react-native";

import type { PieceType, Side } from "./types";

const PIECES_IMG = require("../../../assets/pieces.png");

// Sprite sheet: 1040x520, 8 cols × 4 rows, each tile 130x130
const TILE = 130;
const COLS = 8;
const ROWS = 4;

// Column index for each piece type
const PIECE_COL: Record<PieceType, number> = {
  fu: 0,
  ky: 1,
  ke: 2,
  gi: 3,
  ki: 4,
  ka: 5,
  hi: 6,
  ou: 7,
};

// Promoted pieces use row 1 (sente) / row 3 (gote)
// Gold (ki) and King (ou) cannot promote
const PROMOTED_COL: Partial<Record<PieceType, number>> = {
  fu: 0,
  ky: 1,
  ke: 2,
  gi: 3,
  ka: 5,
  hi: 6,
};

/**
 * Per-piece sprite offset (in 130px tile coordinates).
 * Positive x = shift right, positive y = shift down.
 * Based on Web version PieceSprite.tsx offsets.
 */
const PIECE_OFFSETS: Record<PieceType, { x: number; y: number }> = {
  fu: { x: -5, y: 0 },
  ky: { x: -3, y: 0 },
  ke: { x: 1, y: 0 },
  gi: { x: -2, y: 0 },
  ki: { x: -4, y: 0 },
  ka: { x: -2, y: 0 },
  hi: { x: -2, y: 0 },
  ou: { x: -1, y: 0 },
};

type Props = {
  piece: PieceType;
  side: Side;
  promoted: boolean;
  size: number;
  /** Extra horizontal offset in cell-relative px (positive = right). */
  offsetX?: number;
  /** Extra vertical offset in cell-relative px (positive = down). */
  offsetY?: number;
};

// Scale piece up relative to cell so the piece image fills the cell.
// The sprite tiles have transparent padding around the piece artwork.
const PIECE_SCALE = 1.4;

export function Piece({ piece, side, promoted, size, offsetX = 0, offsetY = 0 }: Props) {
  const isGote = side === "gote";
  const isPromoted = promoted && piece in PROMOTED_COL;

  const col = isPromoted ? PROMOTED_COL[piece]! : PIECE_COL[piece];
  // row 0/1 = sente (normal/promoted), row 2/3 = gote (normal/promoted)
  const row = (isGote ? 2 : 0) + (isPromoted ? 1 : 0);

  // Per-piece default offset (in tile coords) + caller override (in cell coords)
  const defaults = PIECE_OFFSETS[piece];
  const renderSize = size * PIECE_SCALE;
  const scale = renderSize / TILE;
  const imgW = COLS * TILE * scale;
  const imgH = ROWS * TILE * scale;
  const centerOffset = (renderSize - size) / 2;

  return (
    <View pointerEvents="none" style={[styles.wrap, { width: size, height: size }]}>
      <Image
        source={PIECES_IMG}
        style={{
          width: imgW,
          height: imgH,
          marginLeft: -col * TILE * scale - centerOffset - defaults.x * scale + offsetX,
          marginTop: -row * TILE * scale - centerOffset + defaults.y * scale + offsetY,
        }}
        resizeMode="stretch"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    overflow: "hidden",
  },
});
