import type { LessonData } from "../../lesson/types";

export const TSUME3_HISHA_01: LessonData = {
  id: "tsume3_hisha_01",
  title: "飛車の3手詰め①",
  unit: "u7",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume3_41",
      type: "move",
      board_sfen: "6g1k/8l/6R2/9/9/9/9/9/9 b - 1",
      instruction: "3手で詰ませよう！",
      coach_text: "3手詰めじゃ！\nまず1手目の王手を指そう。",
      correct_move: {
        from: { row: 2, col: 6 },
        to: { row: 0, col: 6 },
      },
      second_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 7 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_42",
      type: "move",
      board_sfen: "8k/9/6R2/9/9/9/9/9/9 b G 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { row: 2, col: 6 },
        to: { row: 2, col: 8 },
      },
      second_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 7 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_43",
      type: "move",
      board_sfen: "7nl/8k/6Ppp/9/9/9/9/9/9 b RG 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      hand_pieces: { hi: 1, ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 7 },
      },
      auto_response: { from: { row: 1, col: 8 }, to: { row: 1, col: 7 } },
      after_response_sfen: "7nl/7k1/6Ppp/9/9/9/9/9/9 b R 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { hand: "hi" },
        to: { row: 1, col: 6 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_44",
      type: "move",
      board_sfen: "3gk4/4g4/4B4/9/9/9/9/9/9 b RG 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      hand_pieces: { hi: 1, ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 5 },
      },
      auto_response: { from: { row: 0, col: 4 }, to: { row: 0, col: 5 } },
      after_response_sfen: "3g1k3/4g4/4B4/9/9/9/9/9/9 b R 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { hand: "hi" },
        to: { row: 0, col: 6 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
  ],
};
