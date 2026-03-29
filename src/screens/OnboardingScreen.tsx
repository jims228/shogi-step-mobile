import React, { useState, useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
  type NativeSyntheticEvent,
  type NativeScrollEvent,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Screen } from "../ui/components";
import { theme } from "../ui/theme";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const ONBOARDING_KEY = "hasSeenOnboarding";

const slides = [
  {
    emoji: "\u265F\uFE0F",
    title: "\u5C06\u68CB\u30B9\u30C6\u30C3\u30D7\u3078\u3088\u3046\u3053\u305D",
    body: "\u521D\u5FC3\u8005\u3067\u3082\u697D\u3057\u304F\u5B66\u3079\u308B\u5C06\u68CB\u30EC\u30C3\u30B9\u30F3\u30A2\u30D7\u30EA",
  },
  {
    emoji: "\uD83D\uDCC8",
    title: "\u30B9\u30C6\u30C3\u30D7\u30D0\u30A4\u30B9\u30C6\u30C3\u30D7\u3067\u4E0A\u9054",
    body: "\u99D2\u306E\u52D5\u304D\u304B\u3089\u8A70\u5C06\u68CB\u307E\u3067\u3001\u4E00\u6B69\u305A\u3064\u5B66\u3079\u307E\u3059",
  },
  {
    emoji: "\uD83D\uDD25",
    title: "\u6BCE\u65E5\u30B3\u30C4\u30B3\u30C4\u7D9A\u3051\u3088\u3046",
    body: "1\u65E51\u30EC\u30C3\u30B9\u30F3\u3001\u7D99\u7D9A\u304C\u4E0A\u9054\u306E\u30AB\u30AE\uFF01",
  },
];

export function OnboardingScreen({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const page = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    setCurrentPage(page);
  };

  const handleStart = async () => {
    await AsyncStorage.setItem(ONBOARDING_KEY, "true");
    onFinish();
  };

  return (
    <Screen pad={false}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.scrollView}
      >
        {slides.map((slide, i) => (
          <View key={i} style={styles.slide}>
            <Text style={styles.emoji}>{slide.emoji}</Text>
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.body}>{slide.body}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Dot indicators */}
      <View style={styles.dotsRow}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, currentPage === i && styles.dotActive]}
          />
        ))}
      </View>

      {/* Start button */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleStart}
        >
          <Text style={styles.buttonText}>{"\u59CB\u3081\u308B"}</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  slide: {
    width: SCREEN_WIDTH,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.xl,
  },
  emoji: {
    fontSize: 64,
    marginBottom: theme.spacing.lg,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    textAlign: "center",
    marginBottom: theme.spacing.md,
  },
  body: {
    ...theme.typography.body,
    color: theme.colors.textMuted,
    textAlign: "center",
    lineHeight: 22,
  },
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: theme.spacing.md,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.border,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: theme.colors.brand,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    paddingHorizontal: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  button: {
    backgroundColor: theme.colors.brand,
    paddingVertical: 16,
    borderRadius: theme.radius.md,
    alignItems: "center",
    ...theme.shadow.button,
  },
  buttonPressed: {
    backgroundColor: theme.colors.brandDark,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },
});
