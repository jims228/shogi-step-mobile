import React, { useCallback, useMemo, useRef, useState } from "react";
import { Alert, Animated, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../navigation/RootNavigator";
import type { LessonData } from "../lesson/types";
import { useLessonEngine } from "../lesson/useLessonEngine";
import { useProgress } from "../state/progress";
import { Screen } from "../ui/components";
import { CoachAvatar, type CoachAvatarHandle } from "../ui/components/CoachAvatar";
import {
  LessonHeader,
  BoardArea,
  LessonFooter,
  LESSON_FOOTER_HEIGHT,
} from "../ui/lesson";
import { CompareOptions } from "../ui/lesson/CompareOptions";
import { LESSON_LAYOUT, LESSON_COLORS } from "../ui/lesson/lessonSpacing";
import { ShogiBoard, SenteHandBar, GoteHandBar, PromotionOverlay } from "../ui/board";
import { ArrowOverlay } from "../ui/board/ArrowOverlay";
import { parseSFENFull } from "../ui/board/sfen";
import { theme } from "../ui/theme";

type Props = NativeStackScreenProps<RootStackParamList, "LessonLaunch"> & {
  lessonData: LessonData;
};

export function NativeLessonScreen({ navigation, lessonData }: Props) {
  const { markCompleted } = useProgress();
  const completedOnceRef = useRef(false);
  const coachRef = useRef<CoachAvatarHandle>(null);
  const { width: windowWidth } = useWindowDimensions();

  const {
    currentStep,
    state,
    boardState,
    highlights,
    progress,
    handleSquarePress,
    handleHandPress,
    handleDeselect,
    handlePromotion,
    handleQuizAnswer,
    handleCompareAnswer,
    handleNext,
    restart,
  } = useLessonEngine(lessonData);

  // Track which compare option was selected (for showing ✗ on wrong)
  const [compareSelected, setCompareSelected] = useState<number | undefined>(undefined);

  const [boardSlotSize, setBoardSlotSize] = useState({ w: 0, h: 0 });

  const isLastStep = state.currentStepIndex >= lessonData.steps.length - 1;
  const nextLabel = isLastStep ? "レッスン完了！" : "次へ";
  const showFooter = state.feedback?.type === "correct";

  // ── Hand pieces (always shown) ──
  const { senteHand, goteHand } = useMemo(() => {
    if (!currentStep) return { senteHand: {}, goteHand: {} };
    const sfen = state.boardOverride ?? currentStep.board_sfen;
    const parsed = parseSFENFull(sfen);
    return {
      senteHand: currentStep.hand_pieces ?? parsed.senteHand,
      goteHand: parsed.goteHand,
    };
  }, [currentStep, state.boardOverride]);

  // ── Board size (locked after first valid calculation) ──
  const boardSizeRef = useRef(0);
  const boardSize = useMemo(() => {
    const h = Math.floor(boardSlotSize.h);
    const maxW = Math.floor(
      windowWidth - 8 * 2 - LESSON_LAYOUT.boardLabelSlack,
    );
    if (!h || !maxW) return boardSizeRef.current;
    if (boardSizeRef.current > 0) return boardSizeRef.current;
    const s = Math.min(maxW, h);
    const result = Math.max(200, s);
    boardSizeRef.current = result;
    return result;
  }, [boardSlotSize.h, windowWidth]);

  const cellSize = boardSize > 0 ? Math.floor(boardSize / 9) : 0;

  const onClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // Handle lesson completion
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
    setCompareSelected(undefined);
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

  const onSquarePress = useCallback(
    (row: number, col: number) => {
      handleSquarePress(row, col);
    },
    [handleSquarePress],
  );

  const onCompareSelect = useCallback(
    (index: number) => {
      setCompareSelected(index);
      handleCompareAnswer(index);
    },
    [handleCompareAnswer],
  );

  // ── Coach dialogue ──
  const dialogueMessage =
    state.showPromotion
      ? "成りますか？敵陣に入ると駒が強くなるぞ。"
      : state.feedback?.message ??
        currentStep?.coach_text ??
        currentStep?.instruction ??
        "問題に答えてね。";

  const bounceAnim = useRef(new Animated.Value(1)).current;

  const mascotNode = (
    <Animated.View
      style={[
        styles.mascotAbsolute,
        { transform: [{ scale: bounceAnim }] },
      ]}
      pointerEvents="none"
    >
      <CoachAvatar ref={coachRef} size={Math.floor(LESSON_LAYOUT.mascotSize * 0.9)} />
    </Animated.View>
  );

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
        <Pressable style={styles.content} onPressIn={handleDeselect}>
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
              {boardSize > 0 && cellSize > 0 && (() => {
                const HAND_BAR_H = 46;
                const GRID_LINE_H = 2.5;
                const boardTopY = HAND_BAR_H + GRID_LINE_H;
                const boardBottomY = boardTopY + boardSize;
                const senteHandY = boardBottomY + GRID_LINE_H + HAND_BAR_H / 2;
                // Ordered pieces currently in sente hand
                const PIECE_ORDER_ARR: import("../ui/board/types").PieceType[] = ["fu", "ky", "ke", "gi", "ki", "ka", "hi"];
                const senteHandPieces = PIECE_ORDER_ARR.filter(p => (senteHand[p] ?? 0) > 0);

                return (
                  <View style={styles.boardFrame}>
                    <GoteHandBar hand={goteHand} cellSize={cellSize} />
                    <View style={styles.gridLine} />
                    <View>
                      <ShogiBoard
                        boardState={boardState}
                        size={boardSize}
                        highlights={highlights}
                        selectedSquare={state.selectedSquare}
                        onSquarePress={onSquarePress}
                      />
                      <PromotionOverlay
                        visible={state.showPromotion}
                        onPromote={() => handlePromotion(true)}
                        onDecline={() => handlePromotion(false)}
                      />
                    </View>
                    <View style={styles.gridLine} />
                    <SenteHandBar
                      hand={senteHand}
                      cellSize={cellSize}
                      selectedPiece={state.selectedHand}
                      onPress={handleHandPress}
                    />
                    {/* Arrow overlay covers entire boardFrame */}
                    <ArrowOverlay
                      arrows={state.feedback ? [] : (currentStep?.arrows ?? [])}
                      cellSize={cellSize}
                      boardTopOffset={boardTopY}
                      senteHandCenterY={senteHandY}
                      senteHandPieces={senteHandPieces}
                    />
                  </View>
                );
              })()}
            </View>
          </BoardArea>

          {/* Wrong feedback — disabled for now */}

          {/* Quiz options */}
          {currentStep?.type === "quiz" && currentStep.quiz_options && !state.feedback && (
            <View style={styles.quizWrap}>
              {currentStep.quiz_options.map((option, i) => (
                <Pressable
                  key={i}
                  style={({ pressed }) => [styles.quizOption, pressed && styles.quizOptionPressed]}
                  onPressIn={() => handleQuizAnswer(i)}
                >
                  <Text style={styles.quizOptionText}>{option}</Text>
                </Pressable>
              ))}
            </View>
          )}

          {/* Compare options */}
          {currentStep?.type === "compare" && currentStep.compare_options && (
            <CompareOptions
              options={currentStep.compare_options}
              correctIndex={currentStep.compare_answer ?? 0}
              answered={state.feedback != null}
              selectedIndex={compareSelected}
              onSelect={onCompareSelect}
            />
          )}
        </Pressable>
        <LessonFooter
          nextLabel={nextLabel}
          onNext={onNext}
          disabled={!showFooter}
          successMessage={state.feedback?.type === "correct" ? state.feedback.message : undefined}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  // ── Screen structure ──
  root: { flex: 1, backgroundColor: theme.colors.boardBg },
  // content: fills between LessonHeader and LessonFooter
  content: { flex: 1, paddingBottom: LESSON_FOOTER_HEIGHT },

  // ── Board area: flex container that holds boardSlot ──
  boardArea: {
    flex: 1,
    minHeight: 0,
    zIndex: 10,
  },

  // ── boardSlot: sizes the board. Adjust paddingBottom to move board up/down ──
  boardSlot: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 0,   // ← increase to push board UP from bottom
    width: "100%",
    height: "100%",
  },

  // ── boardFrame: outer border wrapping goteHand + grid + senteHand ──
  boardFrame: {
    borderWidth: 2.5,
    borderColor: "#5D4037",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#D2A86A",
  },

  // ── gridLine: separator between hand bars and board ──
  gridLine: {
    height: 2.5,
    backgroundColor: "#5D4037",
  },

  // ── Coach character (absolute, top-left) ──
  mascotAbsolute: {
    position: "absolute",
    left: -LESSON_LAYOUT.mascotPullLeft + 15,
    top: -15,
    width: LESSON_LAYOUT.mascotSize,
    height: LESSON_LAYOUT.mascotSize,
    zIndex: 0,
  },

  // ── Speech bubble (absolute, top-right) ──
  bubbleRow: {
    position: "absolute",
    top: -20,
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

  // ── Quiz / Compare options (below board) ──
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
