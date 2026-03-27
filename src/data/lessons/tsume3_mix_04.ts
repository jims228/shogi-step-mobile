import type { LessonData } from "../../lesson/types";

export const TSUME3_MIX_04: LessonData = {
  id: "tsume3_mix_04",
  title: "3手詰め 駒別おさらい④",
  unit: "u8",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume3_69",
      type: "move",
      board_sfen: "7gk/6+R2/6ppp/9/9/9/9/9/9 b GP 1",
      instruction: "3手で詰ませよう！",
      coach_text: "3手詰めじゃ！\nまず1手目の王手を指そう。",
      hand_pieces: { ki: 1, fu: 1 },
      correct_move: {
        from: { hand: "fu" },
        to: { row: 1, col: 8 },
      },
      auto_response: { from: { row: 0, col: 7 }, to: { row: 1, col: 8 } },
      after_response_sfen: "8k/6+R1g/6ppp/9/9/9/9/9/9 b G 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 7 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_70",
      type: "move",
      board_sfen: "4r3k/6+RP1/6ppp/9/9/9/9/9/9 b P 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      hand_pieces: { fu: 1 },
      correct_move: {
        from: { hand: "fu" },
        to: { row: 1, col: 8 },
      },
      auto_response: { from: { row: 0, col: 8 }, to: { row: 1, col: 8 } },
      after_response_sfen: "4r4/6+RPk/6ppp/9/9/9/9/9/9 b - 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { row: 1, col: 7 },
        to: { row: 0, col: 7 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
  ],
};
