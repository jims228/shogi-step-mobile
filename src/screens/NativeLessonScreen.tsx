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
  BoardArea,
  LessonFooter,
  LESSON_FOOTER_HEIGHT,
} from "../ui/lesson";
import { LESSON_LAYOUT, LESSON_COLORS } from "../ui/lesson/lessonSpacing";
import { ShogiBoard } from "../ui/board";
import { theme } from "../ui/theme";

type Props = NativeStackScreenProps<RootStackParamList, "LessonLaunch"> & {
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
  // move/tap_square steps auto-advance — footer only needed for explain and quiz
  const showFooter =
    currentStep?.type === "explain" ||
    (currentStep?.type === "quiz" && state.feedback?.type === "correct");

  // ── Board size ──
  const boardSize = useMemo(() => {
    const h = Math.floor(boardSlotSize.h);
    // 画面幅から BoardArea パディング + 座標ラベル分のスラックを引いた上限
    const maxW = Math.floor(
      windowWidth - 8 * 2 - LESSON_LAYOUT.boardLabelSlack,
    );
    if (!h || !maxW) return 0;
    const s = Math.min(maxW, h);
    return Math.max(200, s);
  }, [boardSlotSize.h, windowWidth]);

  const onClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // Handle lesson completion (triggered by auto-advance or manual next on last step)
  React.useEffect(() => {
    if (!state.completed) return;
    if (!completedOnceRef.current) {
      completedOnceRef.current = true;
      markCompleted(lessonData.id);
    }
    const timer = setTimeout(() => navigation.goBack(), 300);
    return () => clearTimeout(timer);
  }, [state.completed, markCompleted, lessonData.id, navigation]);

  const onNext = useCallback(() => {
    handleNext();
  }, [handleNext]);

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

  // おじいちゃん: absolute配置で吹き出し・盤面から独立
  const mascotNode = useMemo(() => (
    <Animated.View
      style={[
        styles.mascotAbsolute,
        { transform: [{ scale: bounceAnim }] },
      ]}
      pointerEvents="none"
    >
      <CoachAvatar size={LESSON_LAYOUT.mascotSize} />
    </Animated.View>
  ), [bounceAnim]);

  // 吹き出しのみ（おじいちゃんは別レイヤー）
  const dialogueRowNode = useMemo(() => (
    <View style={styles.bubbleRow}>
      <View style={styles.bubbleContainer}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>{dialogueMessage}</Text>
        </View>
        <View style={styles.bubbleTail} />
      </View>
    </View>
  ), [dialogueMessage]);

  return (
    <Screen pad={false} edges={["top", "bottom", "left", "right"]}>
      <View style={styles.root}>
        <LessonHeader progress={progress} lives={state.lives} onClose={onClose} />
        <View style={styles.content}>
          {mascotNode}
          {dialogueRowNode}
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
              {boardSize > 0 && (
                <ShogiBoard
                  boardState={boardState}
                  size={boardSize}
                  highlights={highlights}
                  onSquarePress={onSquarePress}
                />
              )}
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

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.boardBg },
  content: { flex: 1, paddingBottom: LESSON_FOOTER_HEIGHT },
  boardArea: {
    flex: 1,
    minHeight: 0,
    paddingVertical: LESSON_LAYOUT.dialogueToBoardGap,
    zIndex: 10,
  },
  boardSlot: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 40,
    width: "100%",
    height: "100%",
  },
  mascotAbsolute: {
    position: "absolute",
    left: -LESSON_LAYOUT.mascotPullLeft,
    top: -15,
    width: LESSON_LAYOUT.mascotSize,
    height: LESSON_LAYOUT.mascotSize,
    zIndex: 0,
  },
  bubbleRow: {
    position: "absolute",
    top: 15,
    left: 55,
    right: 12,
    zIndex: 5,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  bubbleContainer: {
    flex: 1,
    maxWidth: "75%",
    marginTop: LESSON_LAYOUT.bubbleOffsetTop,
  },
  bubble: {
    backgroundColor: LESSON_COLORS.dialogueBg,
    borderWidth: 1,
    borderColor: LESSON_COLORS.dialogueBorder,
    borderRadius: 16,
    padding: 14,
  },
  bubbleText: {
    ...theme.typography.body,
    color: theme.colors.text,
    lineHeight: 20,
  },
  bubbleTail: {
    position: "absolute",
    left: -6,
    top: 28,
    width: 12,
    height: 12,
    backgroundColor: LESSON_COLORS.dialogueBg,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: LESSON_COLORS.dialogueBorder,
    transform: [{ rotate: "45deg" }],
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
