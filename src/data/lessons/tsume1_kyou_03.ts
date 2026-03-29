import type { LessonData } from "../../lesson/types";

export const TSUME1_KYOU_03: LessonData = {
  id: "tsume1_kyou_03",
  title: "香の1手詰め③",
  unit: "u6",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_39",
      type: "move",
      board_sfen: "6+B2/8k/6pp1/8p/9/9/9/9/9 b L 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
      hand_pieces: { ky: 1 },
      correct_move: {
        from: { hand: "ky" },
        to: { row: 2, col: 8 },
      },
      result_sfen: "6+B2/8k/6ppL/8p/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_40",
      type: "move",
      board_sfen: "9/8k/6ppB/8L/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "さあ次じゃ！落ち着いて考えよう。",
      correct_move: {
        from: { row: 2, col: 8 },
        to: { row: 0, col: 6 },
      },
      result_sfen: "6+B2/8k/6pp1/8L/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_77",
      type: "move",
      board_sfen: "9/8l/6Spk/8p/9/9/9/9/9 b N 1",
      instruction: "1手で詰ませよう！",
      coach_text: "いい調子じゃ！この問題も解けるかな？",
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
      coach_text: "ラストじゃ！集中して解こう。",
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
