import type { LessonData } from "../../lesson/types";

export const TSUME1_OUYOU_01: LessonData = {
  id: "tsume1_ouyou_01",
  title: "1手詰め応用①",
  unit: "u6",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_75",
      type: "move",
      board_sfen: "9/7R1/2B1ks3/4s4/3P5/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
      correct_move: {
        from: { row: 2, col: 2 },
        to: { row: 1, col: 3 },
      },
      result_sfen: "9/3+B3R1/4ks3/4s4/3P5/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_76",
      type: "move",
      board_sfen: "9/7R1/2G1ks3/4s4/5P3/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 1, col: 7 },
        to: { row: 1, col: 3 },
      },
      result_sfen: "9/3+R5/2G1ks3/4s4/5P3/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_77",
      type: "move",
      board_sfen: "9/8l/6Spk/8p/9/9/9/9/9 b N 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      hand_pieces: { ke: 1 },
      correct_move: {
        from: { hand: "ke" },
        to: { row: 4, col: 7 },
      },
      result_sfen: "9/8l/6Spk/8p/7N1/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_78",
      type: "move",
      board_sfen: "7n1/7p1/8k/7P1/8N/8L/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 4, col: 8 },
        to: { row: 2, col: 7 },
      },
      result_sfen: "7n1/7p1/7+Nk/7P1/9/8L/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
  ],
};
