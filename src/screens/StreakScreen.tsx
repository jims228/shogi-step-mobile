import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Screen } from "../ui/components";
import { theme } from "../ui/theme";
import { useProgress } from "../state/progress";

const DAY_LABELS = ["月", "火", "水", "木", "金", "土", "日"];

export function StreakScreen() {
  const { progress } = useProgress();
  const { streakCount, activeDates } = progress;

  // Check if today is active
  const today = new Date().toISOString().slice(0, 10);
  const todayActive = activeDates.includes(today);

  // Build last 7 days for the week view
  const weekDays = useMemo(() => {
    const days: { label: string; date: string; active: boolean; isToday: boolean }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const dateStr = d.toISOString().slice(0, 10);
      const dayOfWeek = d.getDay(); // 0=Sun
      const labelIdx = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Mon=0
      days.push({
        label: DAY_LABELS[labelIdx],
        date: dateStr,
        active: activeDates.includes(dateStr),
        isToday: dateStr === today,
      });
    }
    return days;
  }, [activeDates, today]);

  return (
    <Screen style={{ backgroundColor: theme.colors.boardBg }} edges={[]}>
      <View style={styles.container}>
        {/* Streak count */}
        <Text style={styles.fireEmoji}>🔥</Text>
        <Text style={styles.streakNum}>{streakCount}</Text>
        <Text style={styles.streakLabel}>日連続</Text>

        {todayActive ? (
          <Text style={styles.todayStatus}>今日もレッスン完了！</Text>
        ) : (
          <Text style={styles.todayPending}>今日のレッスンがまだだよ</Text>
        )}

        {/* Week view */}
        <View style={styles.weekRow}>
          {weekDays.map((day) => (
            <View key={day.date} style={styles.dayCol}>
              <Text style={[styles.dayLabel, day.isToday && styles.dayLabelToday]}>
                {day.label}
              </Text>
              <View
                style={[
                  styles.dayCircle,
                  day.active && styles.dayCircleActive,
                  day.isToday && !day.active && styles.dayCircleToday,
                ]}
              >
                {day.active && <Text style={styles.dayCheck}>✓</Text>}
              </View>
            </View>
          ))}
        </View>

        {/* Total stats */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNum}>{activeDates.length}</Text>
            <Text style={styles.statLabel}>学習した日数</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNum}>{progress.completedLessonIds.length}</Text>
            <Text style={styles.statLabel}>クリア済み</Text>
          </View>
        </View>
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
  fireEmoji: { fontSize: 64, marginBottom: 4 },
  streakNum: {
    fontSize: 56,
    fontWeight: "900",
    color: "#5D4037",
    lineHeight: 64,
  },
  streakLabel: {
    fontSize: 18,
    fontWeight: "800",
    color: theme.colors.textMuted,
    marginBottom: 8,
  },
  todayStatus: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4CAF50",
    marginBottom: 28,
  },
  todayPending: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FF9800",
    marginBottom: 28,
  },

  // Week view
  weekRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 32,
  },
  dayCol: {
    alignItems: "center",
    gap: 6,
  },
  dayLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: theme.colors.textMuted,
  },
  dayLabelToday: {
    color: "#5D4037",
    fontWeight: "900",
  },
  dayCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.06)",
    alignItems: "center",
    justifyContent: "center",
  },
  dayCircleActive: {
    backgroundColor: "#5D4037",
  },
  dayCircleToday: {
    borderWidth: 2,
    borderColor: "#5D4037",
  },
  dayCheck: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },

  // Stats
  statsRow: {
    flexDirection: "row",
    gap: 16,
  },
  statBox: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    minWidth: 120,
  },
  statNum: {
    fontSize: 24,
    fontWeight: "900",
    color: "#5D4037",
  },
  statLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: theme.colors.textMuted,
    marginTop: 4,
  },
});
