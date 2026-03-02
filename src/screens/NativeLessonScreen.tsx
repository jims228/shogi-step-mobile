import React, { useCallback, useMemo, useRef, useState } from "react";
import { Alert, Animated, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../navigation/RootNavigator";
import type { LessonData } from "../lesson/types";
import { useLessonEngine } from "../lesson/useLessonEngine";
import { useProgress } from "../state/progress";
import { Screen, CoachAvatar } from "../ui/components";
import {
  LessonHeader,
  DialogueRow,
  BoardArea,
  LessonFooter,
  LESSON_FOOTER_HEIGHT,
} from "../ui/lesson";
import { ShogiBoard } from "../ui/board";
import { theme } from "../ui/theme";

// ── PawnLessonRemakeScreen と同じレイアウト定数 ──
const MASCOT_SIZE = 210;
/** 画面左にはみ出す量 (正=左にずらす) */
const MASCOT_PULL_LEFT = 30;
const MASCOT_OFFSET_Y = 8;

type Props = NativeStackScreenProps<RootStackParamList, "LessonLaunch" | "NativeLesson"> & {
  lessonData: LessonData;
};

export function NativeLessonScreen({ navigation, lessonData }: Props) {
  const { markCompleted } = useProgress();
  const completedOnceRef = useRef(false);
  const { width: windowWidth } = useWindowDimensions();

  const {
    currentStep,
    state,
    boardState,
    highlights,
    progress,
    handleSquarePress,
    handleQuizAnswer,
    handleNext,
    restart,
  } = useLessonEngine(lessonData);

  const [boardSlotSize, setBoardSlotSize] = useState({ w: 0, h: 0 });

  const isLastStep = state.currentStepIndex >= lessonData.steps.length - 1;
  const nextLabel = isLastStep ? "レッスン完了！" : "次へ";
  const showFooter =
    state.feedback?.type === "correct" ||
    currentStep?.type === "explain";

  // ── Board size: PawnLessonRemakeScreen と同じロジック ──
  const boardSize = useMemo(() => {
    const h = Math.floor(boardSlotSize.h);
    // 画面幅から BoardArea の水平パディング(16*2)と右端の余白(20)を引いた上限
    const maxW = Math.floor(windowWidth - 16 * 2 - 20);
    if (!h || !maxW) return 320;
    const s = Math.min(maxW, h);
    return Math.max(240, s);
  }, [boardSlotSize.h, windowWidth]);

  const onClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onNext = useCallback(() => {
    if (state.completed || (isLastStep && state.feedback?.type === "correct")) {
      if (!completedOnceRef.current) {
        completedOnceRef.current = true;
        markCompleted(lessonData.id);
      }
      navigation.goBack();
      return;
    }
    handleNext();
  }, [state, isLastStep, handleNext, markCompleted, lessonData.id, navigation]);

  // ── Game over ──
  const onGameOver = useCallback(() => {
    Alert.alert(
      "ゲームオーバー",
      "ライフがなくなりました。もう一度挑戦しますか？",
      [
        { text: "やめる", style: "cancel", onPress: () => navigation.goBack() },
        { text: "もう一度", onPress: restart },
      ],
    );
  }, [navigation, restart]);

  React.useEffect(() => {
    if (state.failed) {
      const timer = setTimeout(onGameOver, 300);
      return () => clearTimeout(timer);
    }
  }, [state.failed, onGameOver]);

  // ── Wrap handleSquarePress with debug log ──
  const onSquarePress = useCallback(
    (row: number, col: number) => {
      if (__DEV__) console.log("[NativeLesson] squarePress", { row, col, stepType: currentStep?.type, stepIndex: state.currentStepIndex });
      handleSquarePress(row, col);
    },
    [handleSquarePress, currentStep?.type, state.currentStepIndex],
  );

  // ── Coach dialogue ──
  const dialogueMessage =
    state.feedback?.message ??
    currentStep?.coach_text ??
    currentStep?.instruction ??
    "問題に答えてね。";

  // NOTE: bounceAnim — PawnLessonRemakeScreen と同じ構造を維持
  const bounceAnim = useRef(new Animated.Value(1)).current;

  // おじいちゃん: CoachAvatar (ネイティブ Rive)
  // useMemo で安定化: isCorrect など無関係な state が変わっても再レンダーしない。
  const characterSlot = useMemo(() => (
    <Animated.View
      style={[
        styles.riveWrap,
        { marginLeft: -MASCOT_PULL_LEFT, marginTop: MASCOT_OFFSET_Y },
        { transform: [{ scale: bounceAnim }] },
      ]}
    >
      <CoachAvatar size={MASCOT_SIZE} />
    </Animated.View>
  ), [bounceAnim]);

  // dialogueMessage が変わった時だけ DialogueRow を再レンダー。
  const dialogueRowNode = useMemo(() => (
    <DialogueRow
      message={dialogueMessage}
      characterSlot={characterSlot}
      characterWidth={MASCOT_SIZE - MASCOT_PULL_LEFT}
      style={{ paddingRight: 8, gap: 10, height: MASCOT_SIZE }}
      bubbleStyle={{ marginBottom: 80, flex: 0, alignSelf: "flex-end", maxWidth: "60%", marginLeft: -48 }}
    />
  ), [dialogueMessage, characterSlot]);

  return (
    <Screen pad={false} edges={["top", "bottom", "left", "right"]}>
      <View style={styles.root}>
        <LessonHeader progress={progress} lives={state.lives} onClose={onClose} />
        <View style={styles.content}>
          <View style={styles.topSection}>
            <View style={styles.contentTopSpacer} />
            {dialogueRowNode}
          </View>
          <BoardArea style={styles.boardArea}>
            <View
              style={styles.boardSlot}
              onLayout={(e) => {
                const { width, height } = e.nativeEvent.layout;
                const w = Math.floor(width);
                const h = Math.floor(height);
                setBoardSlotSize((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
              }}
            >
              <ShogiBoard
                boardState={boardState}
                size={boardSize}
                highlights={highlights}
                onSquarePress={onSquarePress}
              />
            </View>
          </BoardArea>

          {/* Wrong feedback text (correct feedback uses the footer) */}
          {state.feedback && state.feedback.type === "wrong" && (
            <View style={[styles.feedbackWrap, styles.feedbackWrong]}>
              <Text style={styles.feedbackText}>{state.feedback.message}</Text>
            </View>
          )}

          {/* Quiz options */}
          {currentStep?.type === "quiz" && currentStep.quiz_options && !state.feedback && (
            <View style={styles.quizWrap}>
              {currentStep.quiz_options.map((option, i) => (
                <Pressable
                  key={i}
                  style={({ pressed }) => [styles.quizOption, pressed && styles.quizOptionPressed]}
                  onPress={() => handleQuizAnswer(i)}
                >
                  <Text style={styles.quizOptionText}>{option}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>
        <LessonFooter nextLabel={nextLabel} onNext={onNext} disabled={!showFooter} />
      </View>
    </Screen>
  );
}

// ── PawnLessonRemakeScreen と同じスタイル定義 ──
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.boardBg },
  content: { flex: 1, paddingBottom: LESSON_FOOTER_HEIGHT, overflow: "visible", marginTop: -12 },
  topSection: { overflow: "visible" },
  contentTopSpacer: { height: 0 },
  boardArea: {
    flex: 1,
    minHeight: 0,
    paddingVertical: 0,
    marginTop: -90,
  },
  boardSlot: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },
  riveWrap: {
    width: MASCOT_SIZE,
    height: MASCOT_SIZE,
    overflow: "hidden",
    flexShrink: 0,
  },
  feedbackWrap: {
    marginHorizontal: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: theme.radius.md,
    alignItems: "center",
  },
  feedbackWrong: {
    backgroundColor: "rgba(239,68,68,0.15)",
  },
  feedbackText: {
    ...theme.typography.body,
    fontWeight: "900",
    color: theme.colors.text,
  },
  quizWrap: {
    paddingHorizontal: 16,
    paddingTop: 8,
    gap: 10,
  },
  quizOption: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: theme.radius.md,
    borderWidth: 2,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
    alignItems: "center",
  },
  quizOptionPressed: {
    opacity: 0.7,
  },
  quizOptionText: {
    ...theme.typography.body,
    fontWeight: "900",
    color: theme.colors.text,
  },
});
