import type { LessonData } from "../../lesson/types";

export const TSUME3_SOTSUGYO: LessonData = {
  id: "tsume3_sotsugyo",
  title: "3手詰め卒業テスト",
  unit: "u9",
  type: "learn",
  reward_xp: 20,
  steps: [
    {
      id: "tsume3_99",
      type: "move",
      board_sfen: "3gkBs2/3s2+P2/5+R3/9/9/9/9/9/9 b - 1",
      instruction: "3手で詰ませよう！",
      coach_text: "3手詰めじゃ！\nまず1手目の王手を指そう。",
      correct_move: {
        from: { row: 0, col: 5 },
        to: { row: 1, col: 4 },
      },
      auto_response: { from: { row: 0, col: 3 }, to: { row: 1, col: 4 } },
      after_response_sfen: "4k1s2/3sg1+P2/5+R3/9/9/9/9/9/9 b - 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { row: 2, col: 5 },
        to: { row: 0, col: 5 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_100",
      type: "move",
      board_sfen: "4+r3k/6+RP1/6ppp/9/9/9/9/9/9 b G 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 8 },
      },
      auto_response: { from: { row: 0, col: 8 }, to: { row: 1, col: 8 } },
      after_response_sfen: "4+r4/6+RPk/6ppp/9/9/9/9/9/9 b - 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { row: 1, col: 7 },
        to: { row: 0, col: 7 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
    {
      id: "tsume3_bonus_98",
      type: "move",
      board_sfen: "6+Rs1/8k/7pp/9/9/9/9/9/9 b 2G 1",
      instruction: "3手で詰ませよう！",
      coach_text: "次の3手詰めじゃ！",
      hand_pieces: { ki: 2 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 8 },
      },
      auto_response: { from: { row: 1, col: 8 }, to: { row: 0, col: 8 } },
      after_response_sfen: "6+Rsk/9/7pp/9/9/9/9/9/9 b G 1",
      after_response_text: "相手が逃げたぞ。\n次の1手で詰ませよう！",
      second_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 7 },
      },
      success_text: "3手詰め成功じゃ！",
      fail_text: "王手をかけて、逃げ道をなくそう。",
    },
  ],
};
