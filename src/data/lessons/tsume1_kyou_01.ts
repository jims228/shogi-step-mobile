import type { LessonData } from "../../lesson/types";

export const TSUME1_KYOU_01: LessonData = {
  id: "tsume1_kyou_01",
  title: "香の1手詰め①",
  unit: "u4",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_31",
      type: "move",
      board_sfen: "3lkl3/9/4+P4/9/9/9/9/9/9 b L 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
      hand_pieces: { ky: 1 },
      correct_move: {
        from: { hand: "ky" },
        to: { row: 1, col: 4 },
      },
      result_sfen: "3lkl3/4L4/4+P4/9/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_32",
      type: "move",
      board_sfen: "3lkl3/7R1/9/4l4/9/9/9/9/9 b L 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      hand_pieces: { ky: 1 },
      correct_move: {
        from: { hand: "ky" },
        to: { row: 2, col: 4 },
      },
      result_sfen: "3lkl3/7R1/4L4/4l4/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_33",
      type: "move",
      board_sfen: "3gkg3/7R1/9/4N4/4L4/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 3, col: 4 },
        to: { row: 1, col: 3 },
      },
      result_sfen: "3gkg3/3+N3R1/9/9/4L4/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_34",
      type: "move",
      board_sfen: "3lkl3/3p5/9/9/4N4/4L4/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 2, col: 5 },
      },
      result_sfen: "3lkl3/3p5/5+N3/9/9/4L4/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
  ],
};
