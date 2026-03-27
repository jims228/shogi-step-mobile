import React, { useCallback, useMemo, useRef } from "react";
import { FlatList, Image, PanResponder, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { getRoadmapList, NODE_TO_LESSON_ID, UNITS, type RoadmapListItem } from "../data/roadmap";
import { useProgress } from "../state/progress";
import type { RootStackParamList } from "../navigation/RootNavigator";
import { Screen } from "../ui/components";
import { AdBanner } from "../ui/components/AdBanner";
import { theme } from "../ui/theme";

const LESSON_ICONS_IMG = require("../../assets/lesson-icons.png");
const ICON_POSITIONS = [
  { col: 0, row: 0 },
  { col: 1, row: 0 },
  { col: 0, row: 1 },
  { col: 1, row: 1 },
] as const;
const ICON_RENDER = 75;

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function RoadmapHomeScreen() {
  const navigation = useNavigation<Nav>();
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

  const flatListRef = useRef<FlatList>(null);

  // Build unit header index map for quick scroll
  const unitHeaderIndices = useMemo(() => {
    const map: Record<string, number> = {};
    items.forEach((item, i) => {
      if (item.type === "unit_header") map[item.unitId] = i;
    });
    return map;
  }, [items]);

  const scrollToUnit = useCallback((unitId: string) => {
    const index = unitHeaderIndices[unitId];
    if (index !== undefined) {
      flatListRef.current?.scrollToIndex({ index, animated: true, viewOffset: 0 });
    }
  }, [unitHeaderIndices]);

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
    <Screen style={{ backgroundColor: theme.colors.boardBg }} edges={[]} pad={false} contentStyle={{ paddingHorizontal: theme.spacing.lg }}>
      <View style={{ flex: 1 }}>
        {!isLoaded && <Text style={styles.subtle}>読み込み中...</Text>}

        <View style={styles.roadmapWrap}>
          <FlatList
            ref={flatListRef}
            data={items}
            keyExtractor={(item) => item.type === "unit_header" ? `header_${item.unitId}` : item.node.id}
            contentContainerStyle={{ paddingBottom: 8 }}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            onScrollToIndexFailed={(info) => {
              flatListRef.current?.scrollToOffset({ offset: info.averageItemLength * info.index, animated: true });
            }}
          />

          {/* Unit jump dots — swipe/drag to scroll */}
          <DotNav units={UNITS} onSelect={scrollToUnit} />
        </View>
        <AdBanner />
      </View>
    </Screen>
  );
}

// ── Dot Navigation (swipeable) ──

function DotNav({ units, onSelect }: { units: typeof UNITS; onSelect: (id: string) => void }) {
  const containerRef = useRef<View>(null);
  const layoutRef = useRef({ y: 0, height: 0 });
  const lastIndexRef = useRef(-1);

  const hitUnit = useCallback((pageY: number) => {
    const { y, height } = layoutRef.current;
    if (height === 0) return;
    const relY = pageY - y;
    const idx = Math.floor((relY / height) * units.length);
    const clamped = Math.max(0, Math.min(units.length - 1, idx));
    if (clamped !== lastIndexRef.current) {
      lastIndexRef.current = clamped;
      onSelect(units[clamped].id);
    }
  }, [units, onSelect]);

  const panResponder = useMemo(() =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => hitUnit(e.nativeEvent.pageY),
      onPanResponderMove: (e) => hitUnit(e.nativeEvent.pageY),
      onPanResponderRelease: () => { lastIndexRef.current = -1; },
    }),
  [hitUnit]);

  return (
    <View
      ref={containerRef}
      style={styles.dotNav}
      onLayout={() => {
        containerRef.current?.measureInWindow((_x, y, _w, h) => {
          layoutRef.current = { y, height: h };
        });
      }}
      {...panResponder.panHandlers}
    >
      {units.map((unit, i) => (
        <View key={unit.id} style={styles.dotBtn}>
          <View style={styles.dot} />
          <Text style={styles.dotLabel}>{i}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  subtle: { marginTop: 6, color: theme.colors.textMuted, fontWeight: "700", textAlign: "center" },
  roadmapWrap: { flex: 1 },

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

  // ── Dot Navigation ──
  dotNav: {
    position: "absolute",
    right: -4,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    gap: 6,
  },
  dotBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#A1887F",
  },
  dotLabel: {
    fontSize: 7,
    fontWeight: "900",
    color: "#A1887F",
    marginTop: 1,
  },
});
