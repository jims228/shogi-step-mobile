import type { LessonData } from "../../lesson/types";

export const TSUME1_OUYOU_02: LessonData = {
  id: "tsume1_ouyou_02",
  title: "1手詰め応用②",
  unit: "u6",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_79",
      type: "move",
      board_sfen: "l+R1p5/1g7/pkn6/1pp6/9/9/9/9/9 b B 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
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
    {
      id: "tsume1_81",
      type: "move",
      board_sfen: "8k/5rR2/8P/9/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 2, col: 8 },
        to: { row: 1, col: 8 },
      },
      result_sfen: "8k/5rR1+P/9/9/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_82",
      type: "move",
      board_sfen: "9/9/7pl/7nk/6R2/8P/8+r/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 4, col: 6 },
        to: { row: 4, col: 8 },
      },
      result_sfen: "9/9/7pl/7nk/8R/8P/8+r/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
  ],
};
