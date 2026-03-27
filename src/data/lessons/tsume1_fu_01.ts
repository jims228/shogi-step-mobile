import type { LessonData } from "../../lesson/types";

export const TSUME1_FU_01: LessonData = {
  id: "tsume1_fu_01",
  title: "歩の1手詰め①",
  unit: "u4",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_61",
      type: "move",
      board_sfen: "4k4/9/4P4/4R4/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/4+P4/9/4R4/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_62",
      type: "move",
      board_sfen: "7nk/9/7pP/9/9/9/9/9/8L b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 2, col: 8 },
        to: { row: 1, col: 8 },
      },
      result_sfen: "7nk/8+P/7p1/9/9/9/9/9/8L b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_63",
      type: "move",
      board_sfen: "7nk/9/7P1/9/9/9/9/9/7L1 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 2, col: 7 },
        to: { row: 1, col: 7 },
      },
      result_sfen: "7nk/7+P1/9/9/9/9/9/9/7L1 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_64",
      type: "move",
      board_sfen: "9/8k/7P1/7+R1/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 2, col: 7 },
        to: { row: 1, col: 7 },
      },
      result_sfen: "9/7+Pk/9/7+R1/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
  ],
};
