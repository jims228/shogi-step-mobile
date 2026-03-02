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

type Props = {
  piece: PieceType;
  side: Side;
  promoted: boolean;
  size: number;
};

// Scale piece up relative to cell so the piece image fills more of the cell.
// The sprite tiles have transparent padding around the piece artwork.
const PIECE_SCALE = 1.15;

export function Piece({ piece, side, promoted, size }: Props) {
  const isGote = side === "gote";
  const isPromoted = promoted && piece in PROMOTED_COL;

  const col = isPromoted ? PROMOTED_COL[piece]! : PIECE_COL[piece];
  // row 0/1 = sente (normal/promoted), row 2/3 = gote (normal/promoted)
  const row = (isGote ? 2 : 0) + (isPromoted ? 1 : 0);

  const renderSize = size * PIECE_SCALE;
  const scale = renderSize / TILE;
  const imgW = COLS * TILE * scale;
  const imgH = ROWS * TILE * scale;
  const offset = (renderSize - size) / 2;

  return (
    <View pointerEvents="none" style={[styles.wrap, { width: size, height: size }]}>
      <Image
        source={PIECES_IMG}
        style={{
          width: imgW,
          height: imgH,
          marginLeft: -col * TILE * scale - offset,
          marginTop: -row * TILE * scale - offset,
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
