import React, { useCallback, useMemo } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { getRoadmapList, NODE_TO_LESSON_ID, type RoadmapListItem, type RoadmapNode } from "../data/roadmap";
import { useProgress } from "../state/progress";
import type { RootStackParamList } from "../navigation/RootNavigator";
import { PrimaryButton, Screen } from "../ui/components";
import { theme } from "../ui/theme";

const LESSON_ICONS_IMG = require("../../assets/lesson-icons.png");
const ICON_POSITIONS = [
  { col: 0, row: 0 },
  { col: 1, row: 0 },
  { col: 0, row: 1 },
  { col: 1, row: 1 },
] as const;
const ICON_RENDER = 75;

type Props = NativeStackScreenProps<RootStackParamList, "RoadmapHome">;

const NODE_ICONS: Record<string, string> = {
  lesson: "📖",
  review: "🎯",
  battle: "⚔️",
};

export function RoadmapHomeScreen({ navigation }: Props) {
  const { progress, isLoaded } = useProgress();
  const items = useMemo(() => getRoadmapList(), []);
  const completedSet = useMemo(() => new Set(progress.completedLessonIds), [progress.completedLessonIds]);

  // Find next playable node
  const nextNodeId = useMemo(() => {
    for (const item of items) {
      if (item.type !== "node") continue;
      if (!item.node.implemented) continue;
      const lessonId = NODE_TO_LESSON_ID[item.node.id] ?? item.node.id;
      if (!completedSet.has(lessonId)) return item.node.id;
    }
    return null;
  }, [items, completedSet]);

  const offsets = useMemo(() => [-40, -20, 0, 20, 40, 20, 0, -20], []);
  let nodeIndex = 0;

  const renderItem = useCallback(
    ({ item }: { item: RoadmapListItem }) => {
      if (item.type === "unit_header") {
        return (
          <View style={styles.unitHeader}>
            <Text style={styles.unitTitle}>{item.title}</Text>
            <Text style={styles.unitTheme}>{item.theme}</Text>
          </View>
        );
      }

      const node = item.node;
      const lessonId = NODE_TO_LESSON_ID[node.id] ?? node.id;
      const done = completedSet.has(lessonId);
      const isNext = node.id === nextNodeId;
      const locked = !node.implemented && !done;

      // Use a local counter for offset calculation
      const idx = nodeIndex++;
      const dx = offsets[idx % offsets.length] ?? 0;
      const iconPos = ICON_POSITIONS[idx % ICON_POSITIONS.length];
      const coinOpacity = locked ? 0.4 : done ? 0.75 : 1;

      return (
        <View style={[styles.nodeRow, { transform: [{ translateX: dx }] }]}>
          {isNext && (
            <View style={styles.startTag}>
              <Text style={styles.startTagText}>START</Text>
            </View>
          )}

          <Pressable
            disabled={locked}
            onPress={() => {
              if (locked) return;
              navigation.navigate("LessonLaunch", { lessonId });
            }}
            hitSlop={10}
            style={({ pressed }) => ({
              width: ICON_RENDER,
              height: ICON_RENDER,
              borderRadius: 999,
              alignItems: "center" as const,
              justifyContent: "center" as const,
              opacity: coinOpacity,
              transform: pressed && !locked ? [{ scale: 0.93 }] : [],
            })}
          >
            <View style={{ width: ICON_RENDER, height: ICON_RENDER, overflow: "hidden", borderRadius: 999 }}>
              <Image
                source={LESSON_ICONS_IMG}
                style={{
                  width: ICON_RENDER * 2,
                  height: ICON_RENDER * 2,
                  marginLeft: -(iconPos.col * ICON_RENDER),
                  marginTop: -(iconPos.row * ICON_RENDER),
                }}
                resizeMode="stretch"
              />
            </View>

            {done && (
              <View style={styles.doneBadge}>
                <Text style={styles.doneBadgeText}>✓</Text>
              </View>
            )}
          </Pressable>

          <Text style={[styles.nodeTitle, locked && { color: theme.colors.textMuted }]} numberOfLines={2}>
            {node.title}
          </Text>
        </View>
      );
    },
    [completedSet, navigation, nextNodeId, offsets],
  );

  // Reset nodeIndex before each render
  nodeIndex = 0;

  return (
    <Screen style={{ backgroundColor: theme.colors.boardBg }} contentStyle={{ paddingTop: 4 }}>
      <View style={{ flex: 1 }}>
        {!isLoaded && <Text style={styles.subtle}>読み込み中...</Text>}

        <View style={styles.roadmapWrap}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.type === "unit_header" ? `header_${item.unitId}` : item.node.id}
            contentContainerStyle={{ paddingTop: theme.spacing.sm, paddingBottom: 80 }}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          />
        </View>

        <Pressable
          onPress={() => navigation.navigate("Settings")}
          style={styles.settingsBtn}
          hitSlop={10}
        >
          <Text style={styles.linkText}>設定</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  subtle: { marginTop: 6, color: theme.colors.textMuted, fontWeight: "700", textAlign: "center" },
  settingsBtn: {
    position: "absolute",
    bottom: 4,
    right: 2,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 6,
    backgroundColor: "rgba(255,255,255,0.6)",
    minHeight: 26,
    justifyContent: "center",
  },
  linkText: { fontWeight: "700", color: "#8B7355", fontSize: 11 },

  roadmapWrap: { flex: 1, marginTop: theme.spacing.xs },

  // ── Unit Header ──
  unitHeader: {
    marginHorizontal: 0,
    marginTop: 18,
    marginBottom: 6,
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: "#5D4037",
    borderRadius: theme.radius.md,
  },
  unitTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#fff",
    letterSpacing: 0.3,
  },
  unitTheme: {
    fontSize: 12,
    fontWeight: "700",
    color: "rgba(255,255,255,0.7)",
    marginTop: 3,
  },

  // ── Node ──
  nodeRow: { alignItems: "center", justifyContent: "center" },
  nodeTitle: {
    marginTop: 3,
    maxWidth: 200,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "900",
    color: "#3e2723",
    lineHeight: 18,
  },

  typeBadge: {
    position: "absolute",
    left: 2,
    top: 1,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "rgba(210,168,106,0.75)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
  },
  typeBadgeReview: { backgroundColor: "rgba(240,120,40,0.75)" },
  typeBadgeBattle: { backgroundColor: "rgba(230,90,141,0.75)" },
  typeBadgeText: { fontSize: 8 },

  doneBadge: {
    position: "absolute",
    right: -1,
    bottom: -1,
    width: 18,
    height: 18,
    borderRadius: 999,
    backgroundColor: "#6d4c41",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  doneBadgeText: { color: "#fff", fontWeight: "900", fontSize: 10 },

  startTag: {
    marginBottom: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: theme.colors.surfaceTint,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  startTagText: { fontSize: 9, fontWeight: "900", color: "#3e2723", letterSpacing: 0.3 },
});
