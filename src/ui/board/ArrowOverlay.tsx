import React from "react";
import { StyleSheet, View } from "react-native";

export type ArrowDef = {
  /** Arrow tail position [row, col] (0-indexed). */
  from: [number, number];
  /** Arrow head position [row, col] (0-indexed). */
  to: [number, number];
  /** Arrow color (default: amber) */
  color?: string;
};

type Props = {
  arrows: ArrowDef[];
  cellSize: number;
};

const DEFAULT_COLOR = "#f59e0b";
const SHAFT_THICKNESS = 3;
const HEAD_SIZE = 10;
/** Fraction of cellSize used as radius for the start point offset (circle around from-square center) */
const START_RADIUS_RATIO = 0.45;

export function ArrowOverlay({ arrows, cellSize }: Props) {
  if (arrows.length === 0 || cellSize <= 0) return null;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {arrows.map((a, i) => {
        const [fromRow, fromCol] = a.from;
        const [toRow, toCol] = a.to;
        const color = a.color ?? DEFAULT_COLOR;

        // Center of from/to squares
        const fromCx = (fromCol + 0.5) * cellSize;
        const fromCy = (fromRow + 0.5) * cellSize;
        const toCx = (toCol + 0.5) * cellSize;
        const toCy = (toRow + 0.5) * cellSize;

        const dx = toCx - fromCx;
        const dy = toCy - fromCy;
        const fullLen = Math.sqrt(dx * dx + dy * dy);
        if (fullLen < 1) return null;

        // Unit vector from → to
        const ux = dx / fullLen;
        const uy = dy / fullLen;

        // Start point: offset from center of from-square along the direction to to-square
        // Sits on the "circle" edge of the from cell, closest to the to cell
        const startRadius = cellSize * START_RADIUS_RATIO;
        const x1 = fromCx + ux * startRadius;
        const y1 = fromCy + uy * startRadius;

        // End point: center of to-square
        const x2 = toCx;
        const y2 = toCy;

        // Shaft length (from offset start to just before arrow head)
        const shaftDx = x2 - x1;
        const shaftDy = y2 - y1;
        const shaftFullLen = Math.sqrt(shaftDx * shaftDx + shaftDy * shaftDy);
        const shaftLen = Math.max(0, shaftFullLen - HEAD_SIZE * 0.5);

        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Midpoint of shaft for positioning
        const shaftMidX = x1 + ux * (shaftLen / 2);
        const shaftMidY = y1 + uy * (shaftLen / 2);

        return (
          <View key={i} style={StyleSheet.absoluteFill} pointerEvents="none">
            {/* Shaft */}
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
            {/* Arrow head */}
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
