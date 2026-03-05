import React, { useCallback, useMemo, useState } from "react";
import { Animated, FlatList, LayoutAnimation, Pressable, StyleSheet, Text, View } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { getFlatRoadmapItems, type FlatRoadmapItem } from "../data/roadmap";
import { useProgress } from "../state/progress";
import type { RootStackParamList } from "../navigation/RootNavigator";
import { Card, PrimaryButton, Screen } from "../ui/components";
import { theme } from "../ui/theme";
import { useSakuraBurst } from "../ui/effects/SakuraBurstProvider";

type Props = NativeStackScreenProps<RootStackParamList, "RoadmapHome">;

// ── Category classification by lesson ID prefix ──
type CategoryKey = "rules" | "basics" | "kiki" | "pawn_app" | "tsume" | "tesuji" | "castle" | "opening";

const CATEGORY_ORDER: CategoryKey[] = [
  "rules", "basics", "kiki", "pawn_app", "tsume", "tesuji", "castle", "opening",
];

const CATEGORY_LABELS: Record<CategoryKey, string> = {
  rules: "ルール",
  basics: "基本の駒の動き",
  kiki: "駒の効き",
  pawn_app: "歩の応用",
  tsume: "詰将棋",
  tesuji: "手筋",
  castle: "囲い",
  opening: "戦法",
};

function classifyLesson(item: FlatRoadmapItem): CategoryKey {
  const id = item.lessonId;
  if (id.startsWith("rules_")) return "rules";
  if (id.startsWith("tsume")) return "tsume";
  if (id.startsWith("tesuji_")) return "tesuji";
  if (id.startsWith("castle_")) return "castle";
  if (id.startsWith("opening_")) return "opening";
  if (id === "uki-capture") return "kiki";
  if (id.startsWith("basics_pawn_")) return "pawn_app";
  // pawn, lance, knight, silver, gold, bishop, rook, king
  return "basics";
}

type CategoryGroup = {
  key: CategoryKey;
  label: string;
  items: FlatRoadmapItem[];
};

const LESSON_BROWN = "#6d4c41";

function shortenTitle(s: string) {
  const t = (s || "").trim();
  if (!t) return "レッスン";
  const noParen = t.replace(/（.*?）/g, "").trim();
  const noPrefix = noParen.replace(/^基本の駒の動き/, "").trim();
  return noPrefix || noParen || t;
}

export function RoadmapHomeScreen({ navigation }: Props) {
  const { progress, isLoaded } = useProgress();
  const items = useMemo(() => getFlatRoadmapItems(), []);
  const completedSet = useMemo(() => new Set(progress.completedLessonIds), [progress.completedLessonIds]);
  const sakura = useSakuraBurst();

  // Group items by category
  const groups = useMemo(() => {
    const map = new Map<CategoryKey, FlatRoadmapItem[]>();
    for (const cat of CATEGORY_ORDER) map.set(cat, []);
    for (const item of items) {
      const cat = classifyLesson(item);
      map.get(cat)!.push(item);
    }
    const result: CategoryGroup[] = [];
    for (const key of CATEGORY_ORDER) {
      const groupItems = map.get(key)!;
      if (groupItems.length > 0) {
        result.push({ key, label: CATEGORY_LABELS[key], items: groupItems });
      }
    }
    return result;
  }, [items]);

  // Accordion open/close state
  const [openSections, setOpenSections] = useState<Set<CategoryKey>>(() => new Set(["rules"]));

  const toggleSection = useCallback((key: CategoryKey) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  // Continue lesson
  const continueLessonId = useMemo(() => {
    const last = progress.lastPlayedLessonId;
    if (last && items.some((l) => l.lessonId === last && !l.locked)) return last;
    const next = items.find((l) => !l.locked && !completedSet.has(l.lessonId));
    return next?.lessonId ?? null;
  }, [completedSet, items, progress.lastPlayedLessonId]);

  const continueLesson = useMemo(() => {
    if (!continueLessonId) return null;
    return items.find((l) => l.lessonId === continueLessonId) ?? null;
  }, [continueLessonId, items]);

  const renderLessonItem = useCallback(
    (item: FlatRoadmapItem) => {
      const done = completedSet.has(item.lessonId);

      return (
        <Pressable
          key={item.lessonId}
          disabled={item.locked}
          onPressIn={(e) => {
            if (item.locked) return;
            sakura.spawn(e.nativeEvent.pageX, e.nativeEvent.pageY);
          }}
          onPress={() => navigation.navigate("LessonLaunch", { lessonId: item.lessonId })}
          style={({ pressed }) => [
            styles.lessonCard,
            item.locked && styles.lessonCardLocked,
            pressed && !item.locked && styles.lessonCardPressed,
          ]}
        >
          <View style={styles.lessonCardContent}>
            <Text
              style={[styles.lessonTitle, item.locked && styles.lessonTitleLocked]}
              numberOfLines={2}
            >
              {shortenTitle(item.title)}
            </Text>
          </View>
          {done && !item.locked ? (
            <View style={styles.doneBadge}>
              <Text style={styles.doneBadgeText}>✓</Text>
            </View>
          ) : null}
          {item.locked ? (
            <Text style={styles.lockIcon}>🔒</Text>
          ) : null}
        </Pressable>
      );
    },
    [completedSet, navigation, sakura],
  );

  const renderGroup = useCallback(
    ({ item: group }: { item: CategoryGroup }) => {
      const isOpen = openSections.has(group.key);
      const completedCount = group.items.filter((l) => completedSet.has(l.lessonId)).length;

      return (
        <View style={styles.section}>
          <Pressable
            onPress={() => toggleSection(group.key)}
            style={({ pressed }) => [styles.sectionHeader, pressed && styles.sectionHeaderPressed]}
          >
            <View style={styles.sectionHeaderLeft}>
              <Text style={styles.sectionArrow}>{isOpen ? "▼" : "▶"}</Text>
              <Text style={styles.sectionTitle}>{group.label}</Text>
              <Text style={styles.sectionCount}>{group.items.length}件</Text>
            </View>
            <Text style={styles.sectionProgress}>
              {completedCount}/{group.items.length}
            </Text>
          </Pressable>
          {isOpen ? (
            <View style={styles.sectionBody}>
              {group.items.map(renderLessonItem)}
            </View>
          ) : null}
        </View>
      );
    },
    [openSections, completedSet, toggleSection, renderLessonItem],
  );

  return (
    <Screen style={{ backgroundColor: theme.colors.boardBg }} contentStyle={{ paddingTop: 4 }}>
      <View
        style={{ flex: 1 }}
        onTouchStart={(e) => {
          sakura.spawn(e.nativeEvent.pageX, e.nativeEvent.pageY);
        }}
      >
        {!isLoaded ? <Text style={styles.subtle}>読み込み中...</Text> : null}

        {continueLesson ? (
          <Card style={styles.continueCard}>
            <Text style={styles.cardEyebrow}>つづきから</Text>
            <Text style={styles.cardTitle} numberOfLines={2}>{continueLesson.title}</Text>
            <View style={{ marginTop: theme.spacing.md }}>
              <PrimaryButton
                title="レッスンを開く"
                onPress={() => navigation.navigate("LessonLaunch", { lessonId: continueLesson.lessonId })}
                buttonStyle={styles.continueBtn}
              />
            </View>
          </Card>
        ) : null}

        <FlatList
          data={groups}
          keyExtractor={(g) => g.key}
          renderItem={renderGroup}
          contentContainerStyle={styles.listContent}
        />

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
  subtle: { marginTop: 6, color: theme.colors.textMuted, fontWeight: "700" },
  linkText: { fontWeight: "900", color: "#374151" },
  settingsBtn: {
    position: "absolute",
    bottom: theme.spacing.md,
    right: 0,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: theme.radius.md,
    backgroundColor: "rgba(255,255,255,0.75)",
    minHeight: 44,
    justifyContent: "center",
  },

  continueCard: { marginTop: 0 },
  cardEyebrow: { ...theme.typography.sub, color: theme.colors.textMuted },
  cardTitle: { marginTop: 6, fontSize: 18, fontWeight: "900", color: theme.colors.text, letterSpacing: 0.2 },
  cardSub: { marginTop: 8, color: theme.colors.textMuted, fontWeight: "700", lineHeight: 18 },
  continueBtn: { backgroundColor: "#D2A86A", borderBottomColor: "#B08A50" },

  listContent: { paddingTop: theme.spacing.sm, paddingBottom: 80 },

  // Accordion section
  section: {
    marginBottom: theme.spacing.sm,
    marginHorizontal: 4,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    overflow: "hidden",
    ...theme.shadow.card,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: theme.colors.surface,
  },
  sectionHeaderPressed: {
    backgroundColor: theme.colors.surfaceTint,
  },
  sectionHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  sectionArrow: {
    fontSize: 11,
    color: theme.colors.textMuted,
    width: 16,
  },
  sectionTitle: {
    ...theme.typography.h2,
    color: theme.colors.text,
  },
  sectionCount: {
    ...theme.typography.sub,
    color: theme.colors.textMuted,
  },
  sectionProgress: {
    ...theme.typography.sub,
    color: LESSON_BROWN,
    fontWeight: "900",
  },

  sectionBody: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    gap: 6,
  },

  // Lesson card inside accordion
  lessonCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: theme.radius.sm,
    backgroundColor: "#D2A86A",
  },
  lessonCardLocked: {
    opacity: 0.5,
  },
  lessonCardPressed: {
    opacity: 0.7,
  },
  lessonCardContent: {
    flex: 1,
  },
  lessonTitle: {
    ...theme.typography.body,
    fontWeight: "900",
    color: theme.colors.text,
  },
  lessonTitleLocked: {
    color: theme.colors.textMuted,
  },
  lessonSub: {
    ...theme.typography.sub,
    color: theme.colors.textMuted,
    marginTop: 2,
  },

  doneBadge: {
    width: 24,
    height: 24,
    borderRadius: 999,
    backgroundColor: LESSON_BROWN,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  doneBadgeText: { color: "#fff", fontWeight: "900", fontSize: 14, lineHeight: 14 },
  lockIcon: {
    fontSize: 16,
    marginLeft: 8,
  },
});
