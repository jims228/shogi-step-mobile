import type { LessonData } from "../../lesson/types";

export const TSUME1_KYOU_02: LessonData = {
  id: "tsume1_kyou_02",
  title: "香の1手詰め②",
  unit: "u5",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_35",
      type: "move",
      board_sfen: "3lkl3/3b5/4G4/4L4/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 4 },
      },
      result_sfen: "3lkl3/3bG4/9/4L4/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_36",
      type: "move",
      board_sfen: "9/7l1/7p1/7nk/9/7S1/9/9/9 b L 1",
      instruction: "1手で詰ませよう！",
      coach_text: "さあ次じゃ！落ち着いて考えよう。",
      hand_pieces: { ky: 1 },
      correct_move: {
        from: { hand: "ky" },
        to: { row: 4, col: 8 },
      },
      result_sfen: "9/7l1/7p1/7nk/8L/7S1/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_37",
      type: "move",
      board_sfen: "7nk/7b1/9/9/8N/8L/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "いい調子じゃ！この問題も解けるかな？",
      correct_move: {
        from: { row: 4, col: 8 },
        to: { row: 2, col: 7 },
      },
      result_sfen: "7nk/7b1/7N1/9/9/8L/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_38",
      type: "move",
      board_sfen: "7n1/7pk/9/7P1/8N/8L/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "ラストじゃ！集中して解こう。",
      correct_move: {
        from: { row: 4, col: 8 },
        to: { row: 2, col: 7 },
      },
      result_sfen: "7n1/7pk/7+N1/7P1/9/8L/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
  ],
};
