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
    gap: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#7c2d12",
    backgroundColor: "#fef3c7",
  },
  cardCorrect: {
    borderColor: "#22c55e",
    backgroundColor: "rgba(34,197,94,0.15)",
  },
  cardWrong: {
    borderColor: "#9ca3af",
    backgroundColor: "#e5e7eb",
    opacity: 0.6,
  },
  cardContent: {
    flex: 1,
  },
  label: {
    fontSize: 17,
    fontWeight: "900",
    color: "#7c2d12",
  },
  description: {
    fontSize: 13,
    color: "#92400e",
    marginTop: 2,
  },
  badge: {
    fontSize: 20,
    fontWeight: "900",
    marginLeft: 8,
    color: "#7c2d12",
  },
});
