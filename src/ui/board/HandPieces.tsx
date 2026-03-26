import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { HandPieces as HandPiecesType, PieceType } from "./types";
import { Piece } from "./Piece";

const PIECE_LABELS: Record<PieceType, string> = {
  fu: "歩", ky: "香", ke: "桂", gi: "銀",
  ki: "金", ka: "角", hi: "飛", ou: "王",
};

const PIECE_ORDER: PieceType[] = ["hi", "ka", "ki", "gi", "ke", "ky", "fu"];

type Props = {
  hand: HandPiecesType;
  cellSize: number;
  selectedPiece: PieceType | null;
  onPress: (pieceType: PieceType) => void;
};

export function HandPiecesBar({ hand, cellSize, selectedPiece, onPress }: Props) {
  const entries = PIECE_ORDER
    .filter((p) => (hand[p] ?? 0) > 0)
    .map((p) => ({ piece: p, count: hand[p]! }));

  if (entries.length === 0) return null;

  const slotSize = Math.floor(cellSize * 0.9);

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>持ち駒:</Text>
      {entries.map(({ piece, count }) => {
        const isSelected = selectedPiece === piece;
        return (
          <Pressable
            key={piece}
            onPressIn={() => onPress(piece)}
            style={[styles.slot, isSelected && styles.slotSelected]}
          >
            <View style={isSelected ? styles.pieceEmphasized : undefined}>
              <Piece piece={piece} side="sente" promoted={false} size={slotSize} />
            </View>
            {count > 1 && (
              <View style={styles.countBadge}>
                <Text style={styles.countText}>{count}</Text>
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
    color: "#5D4037",
    marginRight: 4,
  },
  slot: {
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    borderRadius: 6,
  },
  slotSelected: {
    backgroundColor: "rgba(245,158,11,0.25)",
  },
  pieceEmphasized: {
    transform: [{ scale: 1.15 }],
  },
  countBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: "#E65A8D",
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  countText: {
    fontSize: 10,
    fontWeight: "900",
    color: "#fff",
  },
});
