import React from "react";
import { StyleSheet, Text, View } from "react-native";

import type { PieceType, Side } from "./types";

/** Kanji for unpromoted pieces. */
const PIECE_KANJI: Record<PieceType, string> = {
  fu: "歩",
  ky: "香",
  ke: "桂",
  gi: "銀",
  ki: "金",
  ka: "角",
  hi: "飛",
  ou: "王",
};

/** Kanji for promoted pieces. */
const PROMOTED_KANJI: Record<string, string> = {
  fu: "と",
  ky: "杏",
  ke: "圭",
  gi: "全",
  ka: "馬",
  hi: "龍",
};

type Props = {
  piece: PieceType;
  side: Side;
  promoted: boolean;
  size: number;
};

export function Piece({ piece, side, promoted, size }: Props) {
  const isGote = side === "gote";
  const isPromoted = promoted && piece in PROMOTED_KANJI;

  let kanji: string;
  if (isPromoted) {
    kanji = PROMOTED_KANJI[piece]!;
  } else if (piece === "ou" && isGote) {
    kanji = "玉";
  } else {
    kanji = PIECE_KANJI[piece]!;
  }

  const fontSize = size * 0.6;

  return (
    <View
      style={[
        styles.wrap,
        { width: size, height: size },
        isGote && styles.gote,
      ]}
    >
      <Text
        style={[
          styles.kanji,
          { fontSize, lineHeight: fontSize * 1.2 },
          isPromoted && styles.promoted,
        ]}
      >
        {kanji}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  gote: {
    transform: [{ rotate: "180deg" }],
  },
  kanji: {
    fontWeight: "900",
    color: "#1a1a1a",
    textAlign: "center",
  },
  promoted: {
    color: "#c62828",
  },
});
