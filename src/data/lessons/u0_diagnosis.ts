import type { LessonData } from "../../lesson/types";

export const U0_DIAGNOSIS: LessonData = {
  id: "u0_diagnosis",
  title: "スタート診断",
  unit: "u0",
  type: "review",
  reward_xp: 5,
  steps: [
    // step1: 駒の動き（基本）- 金を動かせるか
    {
      id: "diag_move",
      type: "move",
      board_sfen: "9/9/9/4p4/4G4/9/9/9/9 b - 1",
      instruction: "金で歩を取ろう！",
      coach_text: "まずは簡単な問題じゃ。\n金を動かして歩を取ってみよう。",
      arrows: [{ from: [4, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4G4/9/9/9/9/9 b P 1",
      success_text: "よくできた！\n駒の動かし方は大丈夫じゃな。",
      fail_text: "金を前に動かして歩を取ろう。",
    },
    // step2: 王手の理解 - 王手をかけられるか
    {
      id: "diag_check",
      type: "move",
      board_sfen: "4k4/9/4G4/9/9/9/9/9/9 b - 1",
      instruction: "金で王手をかけよう！",
      coach_text: "王手をかけてみよう。\n王様を取れる位置に\n金を動かすんじゃ。",
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 4 },
      },
      correct_moves_alt: [
        { from: { row: 2, col: 4 }, to: { row: 1, col: 3 } },
        { from: { row: 2, col: 4 }, to: { row: 1, col: 5 } },
      ],
      success_text: "王手じゃ！\n王手の概念はわかっておるな。",
      fail_text: "王様を取れる場所に金を動かそう。",
    },
    // step3: 持ち駒 - 駒を打てるか
    {
      id: "diag_drop",
      type: "move",
      board_sfen: "4k4/9/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って王手をかけよう！",
      coach_text: "持ち駒を使えるかな？\n金を打って王手をかけよう。",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      correct_moves_alt: [
        { from: { hand: "ki" }, to: { row: 1, col: 3 } },
        { from: { hand: "ki" }, to: { row: 1, col: 5 } },
        { from: { hand: "ki" }, to: { row: 0, col: 3 } },
        { from: { hand: "ki" }, to: { row: 0, col: 5 } },
      ],
      success_text: "持ち駒も使えるな！\nなかなかやるぞ。",
      fail_text: "手駒置き場の金をタップして、\n盤上に打とう。",
    },
    // step4: 1手詰め - 詰ませられるか
    {
      id: "diag_mate",
      type: "move",
      board_sfen: "8k/7pp/9/9/9/9/9/9/9 b G 1",
      instruction: "1手で詰ませよう！",
      coach_text: "ちょっと難しいぞ。\n1手で相手の王様を\n詰ませてみよう。",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Gk/7pp/9/9/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！\n1手詰めもわかっておるとは\nやるのう！",
      fail_text: "王様が逃げられない場所に\n金を打とう。",
    },
    // step5: 受け - 王手に対応できるか
    {
      id: "diag_defense",
      type: "move",
      board_sfen: "4K4/4g4/4G4/9/9/9/9/9/9 b - 1",
      instruction: "王手じゃ！受けよう！",
      coach_text: "王手がかかっておるぞ。\nどう対応する？",
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 4 },
      },
      correct_moves_alt: [
        { from: { row: 0, col: 4 }, to: { row: 1, col: 4 } },
        { from: { row: 0, col: 4 }, to: { row: 0, col: 3 } },
        { from: { row: 0, col: 4 }, to: { row: 0, col: 5 } },
        { from: { row: 0, col: 4 }, to: { row: 1, col: 3 } },
        { from: { row: 0, col: 4 }, to: { row: 1, col: 5 } },
      ],
      success_text: "うまく対応したな！\n受けの力もあるぞ。",
      fail_text: "王手に対応しよう。\n取る・逃げるのどちらかじゃ。",
    },
    // step6: 駒の価値 - 判断力
    {
      id: "diag_value",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "一番価値が高い駒は？",
      coach_text: "最後の問題じゃ。\n王以外で一番価値が高い駒は\nどれかな？",
      quiz_options: ["飛車", "角", "金", "銀"],
      quiz_answer: 0,
      success_text: "正解！飛車は最も価値が高いぞ。\n診断完了じゃ！\nお主のレベルがわかったぞ。\nさっそく学習を始めよう！",
      fail_text: "飛車は縦横にどこまでも動ける\n最強クラスの駒じゃ。",
    },
  ],
};
