import type { LessonData } from "../../lesson/types";

export const TSUME1_OUYOU_04: LessonData = {
  id: "tsume1_ouyou_04",
  title: "1手詰め卒業",
  unit: "u7",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_95",
      type: "move",
      board_sfen: "7gk/7s1/9/9/8N/8L/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
      correct_move: {
        from: { row: 4, col: 8 },
        to: { row: 2, col: 7 },
      },
      result_sfen: "7gk/7s1/7N1/9/9/8L/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_96",
      type: "move",
      board_sfen: "7gk/7sg/6+B2/9/8N/8L/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "さあ次じゃ！落ち着いて考えよう。",
      correct_move: {
        from: { row: 4, col: 8 },
        to: { row: 2, col: 7 },
      },
      result_sfen: "7gk/7sg/6+BN1/9/9/8L/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_97",
      type: "move",
      board_sfen: "7g1/7gk/6+B2/9/8N/8L/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "いい調子じゃ！この問題も解けるかな？",
      correct_move: {
        from: { row: 4, col: 8 },
        to: { row: 2, col: 7 },
      },
      result_sfen: "7g1/7gk/6+B+N1/9/9/8L/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_98",
      type: "move",
      board_sfen: "7gl/5+RSk1/6rgp/9/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "ラストじゃ！集中して解こう。",
      correct_move: {
        from: { row: 1, col: 6 },
        to: { row: 0, col: 6 },
      },
      result_sfen: "6Sgl/5+R1k1/6rgp/9/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
  ],
};
