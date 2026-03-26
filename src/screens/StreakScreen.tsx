import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Screen } from "../ui/components";
import { theme } from "../ui/theme";

export function StreakScreen() {
  return (
    <Screen style={{ backgroundColor: theme.colors.boardBg }}>
      <View style={styles.container}>
        <Text style={styles.emoji}>🔥</Text>
        <Text style={styles.title}>継続日数</Text>
        <Text style={styles.sub}>準備中...</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: { fontSize: 48, marginBottom: 12 },
  title: { fontSize: 20, fontWeight: "900", color: theme.colors.text },
  sub: { fontSize: 14, color: theme.colors.textMuted, marginTop: 8 },
});
