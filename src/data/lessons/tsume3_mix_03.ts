import type { LessonData } from "../../lesson/types";

export const TSUME3_MIX_03: LessonData = {
  id: "tsume3_mix_03",
  title: "3手詰め 駒別おさらい③",
  unit: "u8",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume3_49",
      type: "move",
      board_sfen: "ln7/kSR6/1p1p5/p1p6/9/9/9/9/9 b - 1",
      instruction: "3手で詰ませよう！",
      coach_text: "3手詰めじゃ！\nまず1手目の王手を指そう。",
      correct_move: {
        from: { row: 1, col: 1 },
        to: { row: 2, col: 2 },
      },
      auto_response: { from: { row: 1, col: 0 }, to: { row: 2, col: 0 } },
      after_response_sfen: "ln7/2R6/kpSp5/p1p6/9/9/9/9/9 b - 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { row: 1, col: 2 },
        to: { row: 1, col: 1 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_59",
      type: "move",
      board_sfen: "k8/l1r6/p1Np5/1P7/9/9/9/9/9 b BN 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      hand_pieces: { ka: 1, ke: 1 },
      correct_move: {
        from: { hand: "ke" },
        to: { row: 2, col: 1 },
      },
      auto_response: { from: { row: 0, col: 0 }, to: { row: 1, col: 1 } },
      after_response_sfen: "9/lkr6/pNNp5/1P7/9/9/9/9/9 b B 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { hand: "ka" },
        to: { row: 0, col: 0 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_60",
      type: "move",
      board_sfen: "k8/l1p6/2Np5/p1S6/9/9/9/9/9 b BN 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      hand_pieces: { ka: 1, ke: 1 },
      correct_move: {
        from: { hand: "ke" },
        to: { row: 2, col: 1 },
      },
      auto_response: { from: { row: 0, col: 0 }, to: { row: 1, col: 1 } },
      after_response_sfen: "9/lkp6/1NNp5/p1S6/9/9/9/9/9 b B 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { hand: "ka" },
        to: { row: 0, col: 2 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
  ],
};
