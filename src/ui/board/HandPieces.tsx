import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { HandPieces as HandPiecesType, PieceType, Side } from "./types";
import { Piece } from "./Piece";

const PIECE_ORDER: PieceType[] = ["fu", "ky", "ke", "gi", "ki", "ka", "hi"];

type HandBarProps = {
  hand: HandPiecesType;
  side: Side;
  cellSize: number;
  label: string;
  interactive?: boolean;
  selectedPiece?: PieceType | null;
  onPress?: (pieceType: PieceType) => void;
};

function HandBar({ hand, side, cellSize, label, interactive, selectedPiece, onPress }: HandBarProps) {
  const entries = PIECE_ORDER
    .filter((p) => (hand[p] ?? 0) > 0)
    .map((p) => ({ piece: p, count: hand[p]! }));

  const slotSize = Math.floor(cellSize * 0.95);

  return (
    <View style={styles.bar}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pieces}>
        {entries.length === 0 ? (
          <Text style={styles.empty}>なし</Text>
        ) : (
          entries.map(({ piece, count }) => {
            const isSelected = interactive && selectedPiece === piece;
            return (
              <Pressable
                key={piece}
                onPressIn={interactive && onPress ? () => onPress(piece) : undefined}
                disabled={!interactive}
                style={styles.slot}
              >
                <View style={isSelected ? styles.pieceEmphasized : undefined}>
                  <Piece piece={piece} side={side} promoted={false} size={slotSize} />
                </View>
                {count > 1 && (
                  <View style={styles.countBadge}>
                    <Text style={styles.countText}>{count}</Text>
                  </View>
                )}
              </Pressable>
            );
          })
        )}
      </View>
    </View>
  );
}

type SenteHandProps = {
  hand: HandPiecesType;
  cellSize: number;
  selectedPiece: PieceType | null;
  onPress: (pieceType: PieceType) => void;
};

export function SenteHandBar({ hand, cellSize, selectedPiece, onPress }: SenteHandProps) {
  return (
    <HandBar
      hand={hand}
      side="sente"
      cellSize={cellSize}
      label="☗ 持駒"
      interactive
      selectedPiece={selectedPiece}
      onPress={onPress}
    />
  );
}

type GoteHandProps = {
  hand: HandPiecesType;
  cellSize: number;
};

export function GoteHandBar({ hand, cellSize }: GoteHandProps) {
  return (
    <HandBar
      hand={hand}
      side="gote"
      cellSize={cellSize}
      label="☖ 持駒"
    />
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 8,
    height: 46,
    backgroundColor: "#D2A86A",
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    color: "#5D4037",
    marginRight: 6,
    minWidth: 45,
  },
  pieces: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    flex: 1,
  },
  empty: {
    fontSize: 11,
    color: "#8B7355",
    fontWeight: "600",
  },
  slot: {
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
    borderRadius: 4,
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
    right: -4,
    backgroundColor: "#E65A8D",
    borderRadius: 7,
    minWidth: 14,
    height: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  countText: {
    fontSize: 9,
    fontWeight: "900",
    color: "#fff",
  },
});
