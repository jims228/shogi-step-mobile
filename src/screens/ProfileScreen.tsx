import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Screen } from "../ui/components";
import { theme } from "../ui/theme";
import { useAuth } from "../state/auth";
import { useProgress } from "../state/progress";
import type { RootStackParamList } from "../navigation/RootNavigator";

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function ProfileScreen() {
  const navigation = useNavigation<Nav>();
  const { user, isAnonymous, isSignedIn, signOut, isOffline } = useAuth();
  const { progress } = useProgress();

  const completedCount = progress.completedLessonIds.length;

  return (
    <Screen style={{ backgroundColor: theme.colors.boardBg }} edges={[]}>
      <View style={styles.container}>
        <Text style={styles.emoji}>{isSignedIn ? "👤" : "👻"}</Text>
        <Text style={styles.title}>
          {isSignedIn ? (user?.email ?? "ユーザー") : "ゲスト"}
        </Text>

        {isAnonymous && (
          <Text style={styles.guestNote}>
            アカウントを作成すると{"\n"}進捗が保存されます
          </Text>
        )}

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNum}>{completedCount}</Text>
            <Text style={styles.statLabel}>クリア済み</Text>
          </View>
        </View>

        {/* Actions */}
        {isAnonymous && !isOffline && (
          <Pressable
            onPress={() => navigation.navigate("Auth")}
            style={styles.primaryBtn}
          >
            <Text style={styles.primaryBtnText}>アカウントを作成</Text>
          </Pressable>
        )}

        {isSignedIn && (
          <Pressable onPress={signOut} style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>ログアウト</Text>
          </Pressable>
        )}

        {isOffline && (
          <Text style={styles.offlineNote}>オフラインモード</Text>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  emoji: { fontSize: 56, marginBottom: 12 },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: theme.colors.text,
  },
  guestNote: {
    fontSize: 13,
    fontWeight: "600",
    color: theme.colors.textMuted,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 8,
  },
  statsRow: {
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 24,
    gap: 16,
  },
  statBox: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 28,
  },
  statNum: {
    fontSize: 28,
    fontWeight: "900",
    color: "#5D4037",
  },
  statLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: theme.colors.textMuted,
    marginTop: 4,
  },
  primaryBtn: {
    backgroundColor: "#5D4037",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  primaryBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
  secondaryBtn: {
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: theme.colors.border,
  },
  secondaryBtnText: {
    fontSize: 14,
    fontWeight: "700",
    color: theme.colors.textMuted,
  },
  offlineNote: {
    fontSize: 12,
    color: theme.colors.textMuted,
    marginTop: 16,
  },
});
