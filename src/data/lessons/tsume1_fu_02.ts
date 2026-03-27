import type { LessonData } from "../../lesson/types";

export const TSUME1_FU_02: LessonData = {
  id: "tsume1_fu_02",
  title: "歩の1手詰め②",
  unit: "u5",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_65",
      type: "move",
      board_sfen: "6+B1p/8k/9/8P/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
      correct_move: {
        from: { row: 3, col: 8 },
        to: { row: 2, col: 8 },
      },
      result_sfen: "6+B1p/8k/8+P/9/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_66",
      type: "move",
      board_sfen: "8p/8k/7R1/8P/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 3, col: 8 },
        to: { row: 2, col: 8 },
      },
      result_sfen: "8p/8k/7R+P/9/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_67",
      type: "move",
      board_sfen: "9/9/7pp/8k/7P1/8P/6N2/9/8L b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 5, col: 8 },
        to: { row: 4, col: 8 },
      },
      result_sfen: "9/9/7pp/8k/7PP/9/6N2/9/8L b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_68",
      type: "move",
      board_sfen: "9/9/7pp/7nk/9/7SP/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 5, col: 8 },
        to: { row: 4, col: 8 },
      },
      result_sfen: "9/9/7pp/7nk/8P/7S1/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
  ],
};
