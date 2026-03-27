import type { LessonData } from "../../lesson/types";

export const TSUME3_OUYOU_02: LessonData = {
  id: "tsume3_ouyou_02",
  title: "3手詰め応用②",
  unit: "u8",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume3_75",
      type: "move",
      board_sfen: "5R3/5g1k1/5psp1/9/9/9/9/8L/8L b - 1",
      instruction: "3手で詰ませよう！",
      coach_text: "3手詰めじゃ！\nまず1手目の王手を指そう。",
      correct_move: {
        from: { row: 7, col: 8 },
        to: { row: 1, col: 8 },
      },
      auto_response: { from: { row: 1, col: 7 }, to: { row: 1, col: 6 } },
      after_response_sfen: "5R3/5gk1+L/5psp1/9/9/9/9/9/8L b - 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { row: 0, col: 5 },
        to: { row: 0, col: 7 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_77",
      type: "move",
      board_sfen: "3+Pg4/3Pk1+P2/3g1pB2/9/9/9/9/9/9 b R 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { row: 2, col: 6 },
        to: { row: 1, col: 5 },
      },
      auto_response: { from: { row: 0, col: 4 }, to: { row: 1, col: 5 } },
      after_response_sfen: "3+P5/3Pkg+P2/3g1p3/9/9/9/9/9/9 b R 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { hand: "hi" },
        to: { row: 0, col: 4 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_78",
      type: "move",
      board_sfen: "2n6/1+P+P6/k+b+b2p3/1n7/9/1S7/9/9/9 b 2R 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      hand_pieces: { hi: 2 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 3, col: 0 },
      },
      second_move: {
        from: { hand: "hi" },
        to: { row: 1, col: 0 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
  ],
};
