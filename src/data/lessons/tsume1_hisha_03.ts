import type { LessonData } from "../../lesson/types";

export const TSUME1_HISHA_03: LessonData = {
  id: "tsume1_hisha_03",
  title: "飛車の1手詰め③",
  unit: "u7",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_49",
      type: "move",
      board_sfen: "ln1+B5/1k7/p1p6/1p7/9/9/9/9/9 b R 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 1, col: 3 },
      },
      result_sfen: "ln1+B5/1k1R5/p1p6/1p7/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_50",
      type: "move",
      board_sfen: "ln7/kSR6/p8/1pp6/4b4/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 1, col: 1 },
        to: { row: 2, col: 2 },
      },
      result_sfen: "ln7/k1R6/p1+S6/1pp6/4b4/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_79",
      type: "move",
      board_sfen: "l+R1p5/1g7/pkn6/1pp6/9/9/9/9/9 b B 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      hand_pieces: { ka: 1 },
      correct_move: {
        from: { hand: "ka" },
        to: { row: 1, col: 2 },
      },
      result_sfen: "l+R1p5/1gB6/pkn6/1pp6/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_80",
      type: "move",
      board_sfen: "8k/6R2/8P/8r/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 1, col: 6 },
        to: { row: 1, col: 8 },
      },
      result_sfen: "8k/8+R/8P/8r/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
  ],
};
