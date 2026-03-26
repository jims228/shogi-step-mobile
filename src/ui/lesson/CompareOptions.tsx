import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { CompareOption } from "../../lesson/types";
import { theme } from "../theme";

type CardState = "default" | "correct" | "wrong";

type Props = {
  options: CompareOption[];
  correctIndex: number;
  answered: boolean;
  selectedIndex?: number;
  onSelect: (index: number) => void;
};

export function CompareOptions({ options, correctIndex, answered, selectedIndex, onSelect }: Props) {
  return (
    <View style={styles.wrap}>
      {options.map((opt, i) => {
        let cardState: CardState = "default";
        if (answered) {
          if (i === correctIndex) cardState = "correct";
          else if (i === selectedIndex) cardState = "wrong";
        }

        return (
          <Pressable
            key={i}
            style={[
              styles.card,
              cardState === "correct" && styles.cardCorrect,
              cardState === "wrong" && styles.cardWrong,
            ]}
            onPressIn={() => !answered && onSelect(i)}
            disabled={answered}
          >
            <View style={styles.cardContent}>
              <Text style={styles.label}>{opt.label}</Text>
              {opt.description && (
                <Text style={styles.description}>{opt.description}</Text>
              )}
            </View>
            {cardState === "correct" && <Text style={styles.badge}>✓</Text>}
            {cardState === "wrong" && <Text style={styles.badge}>✗</Text>}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 16,
    paddingTop: 8,
    gap: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: theme.radius.md,
    borderWidth: 2,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
  },
  cardCorrect: {
    borderColor: "#22c55e",
    backgroundColor: "rgba(34,197,94,0.1)",
  },
  cardWrong: {
    borderColor: "#ef4444",
    backgroundColor: "rgba(239,68,68,0.1)",
  },
  cardContent: {
    flex: 1,
  },
  label: {
    ...theme.typography.body,
    fontWeight: "900",
    color: theme.colors.text,
  },
  description: {
    ...theme.typography.sub,
    color: theme.colors.textMuted,
    marginTop: 2,
  },
  badge: {
    fontSize: 20,
    fontWeight: "900",
    marginLeft: 8,
  },
});
