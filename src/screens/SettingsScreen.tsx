import React, { useState } from "react";
import { Alert, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Screen } from "../ui/components";
import { theme } from "../ui/theme";
import { useProgress } from "../state/progress";
import { useSubscription } from "../state/subscription";
import type { RootStackParamList } from "../navigation/RootNavigator";

type Nav = NativeStackNavigationProp<RootStackParamList>;

const APP_VERSION = "1.0.0";
const PRIVACY_POLICY_URL = "https://github.com/jims228/shogi-step-mobile/blob/main/docs/privacy-policy.md";

export function SettingsScreen() {
  const { progress, reset } = useProgress();
  const navigation = useNavigation<Nav>();
  const { isPremium } = useSubscription();
  const [devTapCount, setDevTapCount] = useState(0);
  const showDevTools = devTapCount >= 7;

  return (
    <Screen style={{ backgroundColor: theme.colors.boardBg }} edges={[]}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Subscription status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>プラン</Text>
          <View style={styles.card}>
            <Text style={styles.planStatus}>
              {isPremium ? "プレミアム会員" : "無料プラン（広告あり）"}
            </Text>
            {!isPremium && (
              <Pressable style={styles.upgradeBtn} onPress={() => navigation.navigate("Paywall")}>
                <Text style={styles.upgradeBtnText}>プレミアムにアップグレード（月額290円）</Text>
              </Pressable>
            )}
          </View>
        </View>

        {/* Progress */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>学習データ</Text>
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.label}>クリア済みレッスン</Text>
              <Text style={styles.value}>{progress.completedLessonIds.length}件</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>継続日数</Text>
              <Text style={styles.value}>{progress.streakCount}日</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>学習した日数</Text>
              <Text style={styles.value}>{progress.activeDates.length}日</Text>
            </View>
          </View>
        </View>

        {/* Legal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>その他</Text>
          <View style={styles.card}>
            <Pressable
              style={styles.linkRow}
              onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}
            >
              <Text style={styles.linkText}>プライバシーポリシー</Text>
              <Text style={styles.arrow}>›</Text>
            </Pressable>

            <View style={styles.divider} />

            <Pressable
              style={styles.linkRow}
              onPress={() => Linking.openURL("mailto:shingoakito.3@gmail.com?subject=将棋ステップ お問い合わせ")}
            >
              <Text style={styles.linkText}>お問い合わせ</Text>
              <Text style={styles.arrow}>›</Text>
            </Pressable>

            <View style={styles.divider} />

            <Pressable
              style={styles.linkRow}
              onPress={() => setDevTapCount((c) => c + 1)}
            >
              <Text style={styles.label}>バージョン</Text>
              <Text style={styles.value}>{APP_VERSION}</Text>
            </Pressable>
          </View>
        </View>

        {/* Danger zone */}
        <View style={styles.section}>
          <Pressable
            style={styles.dangerBtn}
            onPress={() => {
              Alert.alert(
                "進捗をリセットしますか？",
                "全てのレッスン進捗・継続日数がリセットされます。この操作は取り消せません。",
                [
                  { text: "キャンセル", style: "cancel" },
                  { text: "リセット", style: "destructive", onPress: reset },
                ],
              );
            }}
          >
            <Text style={styles.dangerText}>進捗をリセット</Text>
          </Pressable>
        </View>

        {/* Dev tools (hidden, 7 taps on version to reveal) */}
        {showDevTools && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>開発者ツール</Text>
            <View style={styles.card}>
              <Text style={styles.label}>完了ID: {progress.completedLessonIds.join(", ") || "なし"}</Text>
              <Text style={styles.label}>最後のレッスン: {progress.lastPlayedLessonId ?? "なし"}</Text>
              <Text style={styles.label}>アクティブ日: {progress.activeDates.join(", ") || "なし"}</Text>
            </View>
          </View>
        )}

      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: theme.colors.textMuted,
    marginBottom: 8,
    marginLeft: 4,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.06)",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.text,
  },
  value: {
    fontSize: 14,
    fontWeight: "800",
    color: "#5D4037",
  },
  planStatus: {
    fontSize: 15,
    fontWeight: "800",
    color: theme.colors.text,
    marginBottom: 8,
  },
  upgradeBtn: {
    backgroundColor: "#5D4037",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  upgradeBtnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "900",
  },
  linkRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  linkText: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.text,
  },
  arrow: {
    fontSize: 18,
    fontWeight: "600",
    color: theme.colors.textMuted,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.06)",
    marginVertical: 6,
  },
  dangerBtn: {
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "rgba(220,38,38,0.08)",
    alignItems: "center",
  },
  dangerText: {
    fontWeight: "900",
    fontSize: 14,
    color: "#dc2626",
  },
});
