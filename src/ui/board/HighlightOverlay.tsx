import React from "react";
import { StyleSheet, View } from "react-native";

import type { HighlightSquare, HighlightType } from "./types";

const HIGHLIGHT_COLORS: Record<HighlightType, string> = {
  movable: "rgba(66,133,244,0.3)",
  correct: "rgba(34,197,94,0.3)",
  lastMove: "rgba(245,158,11,0.3)",
  wrong: "rgba(239,68,68,0.3)",
};

type Props = {
  highlights: HighlightSquare[];
  cellSize: number;
};

/**
 * Renders colored overlays on specified board squares.
 * Must be placed inside a container with the same size as the 9x9 grid.
 */
export function HighlightOverlay({ highlights, cellSize }: Props) {
  if (highlights.length === 0) return null;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {highlights.map((h) => (
        <View
          key={`${h.position.row}-${h.position.col}`}
          style={[
            styles.highlight,
            {
              left: h.position.col * cellSize,
              top: h.position.row * cellSize,
              width: cellSize,
              height: cellSize,
              backgroundColor: HIGHLIGHT_COLORS[h.type],
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    position: "absolute",
  },
});
