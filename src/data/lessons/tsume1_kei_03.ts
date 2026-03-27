import type { LessonData } from "../../lesson/types";

export const TSUME1_KEI_03: LessonData = {
  id: "tsume1_kei_03",
  title: "桂の1手詰め③",
  unit: "u6",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_29",
      type: "move",
      board_sfen: "7nk/7bl/8p/9/9/9/9/9/9 b N 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
      hand_pieces: { ke: 1 },
      correct_move: {
        from: { hand: "ke" },
        to: { row: 2, col: 7 },
      },
      result_sfen: "7nk/7bl/7Np/9/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_30",
      type: "move",
      board_sfen: "8l/6Sbk/8p/9/6N2/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 4, col: 6 },
        to: { row: 2, col: 7 },
      },
      result_sfen: "8l/6Sbk/7+Np/9/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_75",
      type: "move",
      board_sfen: "9/7R1/2B1ks3/4s4/3P5/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 2, col: 2 },
        to: { row: 1, col: 3 },
      },
      result_sfen: "9/3+B3R1/4ks3/4s4/3P5/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_76",
      type: "move",
      board_sfen: "9/7R1/2G1ks3/4s4/5P3/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 1, col: 7 },
        to: { row: 1, col: 3 },
      },
      result_sfen: "9/3+R5/2G1ks3/4s4/5P3/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
  ],
};
