import type { LessonData } from "../../lesson/types";

export const TSUME1_KAKU_03: LessonData = {
  id: "tsume1_kaku_03",
  title: "角の1手詰め③",
  unit: "u7",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_59",
      type: "move",
      board_sfen: "1n7/3R5/lkp6/pp7/9/9/9/9/9 b B 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
      hand_pieces: { ka: 1 },
      correct_move: {
        from: { hand: "ka" },
        to: { row: 1, col: 0 },
      },
      result_sfen: "1n7/B2R5/lkp6/pp7/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_60",
      type: "move",
      board_sfen: "1n7/l2+R5/pk7/1pp1p4/4b4/9/9/9/9 b B 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      hand_pieces: { ka: 1 },
      correct_move: {
        from: { hand: "ka" },
        to: { row: 0, col: 3 },
      },
      result_sfen: "1n1B5/l2+R5/pk7/1pp1p4/4b4/9/9/9/9 b - 1",
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
