import React, { useCallback, useMemo } from "react";
import { Alert, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../navigation/RootNavigator";
import type { LessonData } from "../lesson/types";
import { useLessonEngine } from "../lesson/useLessonEngine";
import { useProgress } from "../state/progress";
import { Screen, CoachAvatar } from "../ui/components";
import {
  LessonHeader,
  LessonFooter,
  DialogueRow,
  BoardArea,
  LESSON_FOOTER_HEIGHT,
} from "../ui/lesson";
import { ShogiBoard } from "../ui/board";
import { theme } from "../ui/theme";
import { LESSON_SPACING } from "../ui/lesson/lessonSpacing";

const MASCOT_SIZE = 210;
const MASCOT_PULL_LEFT = 30;
const MASCOT_OFFSET_Y = -8;

type Props = NativeStackScreenProps<RootStackParamList, "LessonLaunch" | "NativeLesson"> & {
  lessonData: LessonData;
};

export function NativeLessonScreen({ navigation, lessonData }: Props) {
  const { markCompleted } = useProgress();
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

  const isLastStep = state.currentStepIndex >= lessonData.steps.length - 1;
  const nextLabel = isLastStep ? "レッスン完了！" : "次へ";
  const showFooter =
    state.feedback?.type === "correct" ||
    currentStep?.type === "explain";

  const onClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onNext = useCallback(() => {
    if (state.completed || (isLastStep && state.feedback?.type === "correct")) {
      markCompleted(lessonData.id);
      navigation.goBack();
      return;
    }
    handleNext();
  }, [state, isLastStep, handleNext, markCompleted, lessonData.id, navigation]);

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

  // Board size: fill available width with minimal padding
  const boardSize = useMemo(() => {
    const pad = 8 * 2 + 16;
    return Math.max(240, Math.min(windowWidth - pad, 480));
  }, [windowWidth]);

  // Coach dialogue
  const dialogueMessage =
    state.feedback?.message ??
    currentStep?.coach_text ??
    currentStep?.instruction ??
    "問題に答えてね。";

  const characterSlot = useMemo(
    () => (
      <View style={[styles.mascotWrap, { marginLeft: -MASCOT_PULL_LEFT, marginTop: MASCOT_OFFSET_Y }]}>
        <CoachAvatar size={MASCOT_SIZE} />
      </View>
    ),
    [],
  );

  const dialogueRowNode = useMemo(
    () => (
      <DialogueRow
        message={dialogueMessage}
        characterSlot={characterSlot}
        characterWidth={MASCOT_SIZE - MASCOT_PULL_LEFT}
        style={{ paddingRight: 8, gap: 10, height: MASCOT_SIZE }}
        bubbleStyle={{ marginBottom: 80, flex: 0, alignSelf: "flex-end", maxWidth: "60%", marginLeft: -48 }}
      />
    ),
    [dialogueMessage, characterSlot],
  );

  return (
    <Screen pad={false} edges={["top", "bottom", "left", "right"]}>
      <View style={styles.root}>
        <LessonHeader progress={progress} lives={state.lives} onClose={onClose} />
        <View style={styles.content}>
          <View style={styles.topSection}>
            {dialogueRowNode}
          </View>

          <BoardArea style={styles.boardArea}>
            <View style={styles.boardSlot}>
              <ShogiBoard
                boardState={boardState}
                size={boardSize}
                highlights={highlights}
                onSquarePress={handleSquarePress}
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

        <LessonFooter
          nextLabel={nextLabel}
          onNext={onNext}
          disabled={!showFooter}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.boardBg },
  content: { flex: 1, paddingBottom: LESSON_FOOTER_HEIGHT, overflow: "visible", marginTop: -12 },
  topSection: { overflow: "visible" },
  boardArea: {
    flex: 1,
    minHeight: 0,
    paddingVertical: 0,
    paddingHorizontal: 4,
    marginTop: -60,
  },
  boardSlot: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  mascotWrap: {
    width: MASCOT_SIZE,
    height: MASCOT_SIZE,
    overflow: "hidden",
    flexShrink: 0,
  },
  feedbackWrap: {
    marginHorizontal: LESSON_SPACING.headerPaddingHorizontal,
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
    paddingHorizontal: LESSON_SPACING.headerPaddingHorizontal,
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
