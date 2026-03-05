import React, { useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { theme } from "../theme";
import { LESSON_COLORS } from "../lesson/lessonSpacing";
import { Piece } from "./Piece";
import { HighlightOverlay } from "./HighlightOverlay";
import type { BoardState, HighlightSquare } from "./types";

/** Column labels: 9 (right) to 1 (left), displayed above the board. */
const COL_LABELS = ["9", "8", "7", "6", "5", "4", "3", "2", "1"];
/** Row labels: 一 to 九, displayed to the right of the board. */
const ROW_LABELS = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];

const GRID_LINE_COLOR = "#8B7355";
const BOARD_BORDER_COLOR = "#5D4037";

type Props = {
  boardState: BoardState;
  /** Total size of the board (excluding labels). The board is always square. */
  size: number;
  highlights?: HighlightSquare[];
  onSquarePress?: (row: number, col: number) => void;
};

export function ShogiBoard({ boardState, size, highlights = [], onSquarePress }: Props) {
  const cellSize = Math.floor(size / 9);
  const boardSize = cellSize * 9;
  const labelSize = cellSize * 0.32;
  // Extra padding on left to balance right-side row labels, centering the 9x9 grid
  const rowLabelsWidth = labelSize + 3;

  const rows = useMemo(() => {
    const result: React.ReactNode[] = [];
    for (let r = 0; r < 9; r++) {
      const cells: React.ReactNode[] = [];
      for (let c = 0; c < 9; c++) {
        const bp = boardState[r]?.[c] ?? null;
        cells.push(
          <Pressable
            key={c}
            onPress={() => onSquarePress?.(r, c)}
            style={[
              styles.cell,
              {
                width: cellSize,
                height: cellSize,
                borderRightWidth: c < 8 ? StyleSheet.hairlineWidth : 0,
                borderBottomWidth: r < 8 ? StyleSheet.hairlineWidth : 0,
              },
            ]}
          >
            {bp && (
              <Piece
                piece={bp.piece}
                side={bp.side}
                promoted={bp.promoted}
                size={cellSize}
              />
            )}
          </Pressable>,
        );
      }
      result.push(
        <View key={r} style={styles.row}>
          {cells}
        </View>,
      );
    }
    return result;
  }, [boardState, cellSize, onSquarePress]);

  return (
    <View style={[styles.container, /* { paddingLeft: rowLabelsWidth } */]}>
      {/* Column labels (top) — commented out
      <View style={[styles.colLabels, { width: size }]}>
        {COL_LABELS.map((label, i) => (
          <Text key={i} style={[styles.label, { width: cellSize, fontSize: labelSize }]}>
            {label}
          </Text>
        ))}
      </View>
      */}

      <View style={styles.boardRow}>
        {/* Board grid */}
        <View
          style={[
            styles.board,
            {
              width: boardSize + 4,
              backgroundColor: LESSON_COLORS.boardSurface,
            },
          ]}
        >
          {rows}
          <HighlightOverlay highlights={highlights} cellSize={cellSize} />
        </View>

        {/* Row labels (right) — commented out
        <View style={styles.rowLabels}>
          {ROW_LABELS.map((label, i) => (
            <Text key={i} style={[styles.rowLabel, { height: cellSize, lineHeight: cellSize, fontSize: labelSize }]}>
              {label}
            </Text>
          ))}
        </View>
        */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  colLabels: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 2,
  },
  boardRow: {
    flexDirection: "row",
  },
  board: {
    borderWidth: 2,
    borderColor: BOARD_BORDER_COLOR,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: GRID_LINE_COLOR,
  },
  rowLabels: {
    marginLeft: 3,
  },
  label: {
    textAlign: "center",
    color: theme.colors.textMuted,
    fontWeight: "700",
  },
  rowLabel: {
    textAlign: "center",
    color: theme.colors.textMuted,
    fontWeight: "700",
  },
});
