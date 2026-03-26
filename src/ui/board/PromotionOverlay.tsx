import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { theme } from "../theme";

type Props = {
  visible: boolean;
  onPromote: () => void;
  onDecline: () => void;
};

/**
 * Promotion choice buttons overlaid on the board center.
 * The question text ("成りますか？") is shown via coach bubble, not here.
 */
export function PromotionOverlay({ visible, onPromote, onDecline }: Props) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.buttons}>
        <Pressable style={[styles.btn, styles.btnPromote]} onPressIn={onPromote}>
          <Text style={styles.btnText}>成る</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnDecline]} onPressIn={onDecline}>
          <Text style={styles.btnTextDecline}>不成</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 100,
  },
  buttons: {
    flexDirection: "row",
    gap: 16,
  },
  btn: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: theme.radius.md,
    minWidth: 90,
    alignItems: "center",
    ...theme.shadow.button,
  },
  btnPromote: {
    backgroundColor: "#F07828",
  },
  btnDecline: {
    backgroundColor: theme.colors.surface,
    borderWidth: 2,
    borderColor: theme.colors.border,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#fff",
  },
  btnTextDecline: {
    fontSize: 18,
    fontWeight: "900",
    color: theme.colors.text,
  },
});
