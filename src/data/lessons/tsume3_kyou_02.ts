import type { LessonData } from "../../lesson/types";

export const TSUME3_KYOU_02: LessonData = {
  id: "tsume3_kyou_02",
  title: "香の3手詰め②",
  unit: "u6",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume3_35",
      type: "move",
      board_sfen: "9/7sl/7pk/7n1/9/7S1/9/9/9 b LP 1",
      instruction: "3手で詰ませよう！",
      coach_text: "3手詰めじゃ！\nまず1手目の王手を指そう。",
      hand_pieces: { ky: 1, fu: 1 },
      correct_move: {
        from: { hand: "fu" },
        to: { row: 3, col: 8 },
      },
      auto_response: { from: { row: 2, col: 8 }, to: { row: 3, col: 8 } },
      after_response_sfen: "9/7sl/7p1/7nk/9/7S1/9/9/9 b L 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { hand: "ky" },
        to: { row: 4, col: 8 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_36",
      type: "move",
      board_sfen: "8+R/8l/7pk/7n1/9/9/9/9/9 b SL 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      hand_pieces: { gi: 1, ky: 1 },
      correct_move: {
        from: { hand: "ky" },
        to: { row: 4, col: 8 },
      },
      second_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 7 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_37",
      type: "move",
      board_sfen: "6+Rgk/6p2/9/8p/9/9/9/9/9 b SL 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      hand_pieces: { gi: 1, ky: 1 },
      correct_move: {
        from: { hand: "ky" },
        to: { row: 2, col: 8 },
      },
      second_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 7 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_38",
      type: "move",
      board_sfen: "8k/6pg1/9/9/8N/9/9/9/8L b - 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      correct_move: {
        from: { row: 4, col: 8 },
        to: { row: 2, col: 7 },
      },
      auto_response: { from: { row: 0, col: 8 }, to: { row: 0, col: 7 } },
      after_response_sfen: "7k1/6pg1/7N1/9/9/9/9/9/8L b - 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { row: 8, col: 8 },
        to: { row: 0, col: 8 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
  ],
};
