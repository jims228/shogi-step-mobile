import type { LessonData } from "../../lesson/types";

export const TSUME1_FU_03: LessonData = {
  id: "tsume1_fu_03",
  title: "歩の1手詰め③",
  unit: "u7",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_69",
      type: "move",
      board_sfen: "9/9/6lpl/6pkp/9/6SPS/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
      correct_move: {
        from: { row: 5, col: 7 },
        to: { row: 4, col: 7 },
      },
      result_sfen: "9/9/6lpl/6pkp/7P1/6S1S/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_70",
      type: "move",
      board_sfen: "9/5B3/6npl/6pkp/9/6SPS/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 5, col: 7 },
        to: { row: 4, col: 7 },
      },
      result_sfen: "9/5B3/6npl/6pkp/7P1/6S1S/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_99",
      type: "move",
      board_sfen: "1n1B5/lgR6/1k1+r5/ppP6/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 1, col: 2 },
        to: { row: 2, col: 2 },
      },
      result_sfen: "1n1B5/lg7/1k+R+r5/ppP6/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_100",
      type: "move",
      board_sfen: "1n1B5/l1R6/pk7/1pp6/3r5/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 1, col: 2 },
        to: { row: 1, col: 3 },
      },
      result_sfen: "1n1B5/l2+R5/pk7/1pp6/3r5/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
  ],
};
