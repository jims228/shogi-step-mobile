import type { LessonData } from "../../lesson/types";

export const TSUME1_OUYOU_05: LessonData = {
  id: "tsume1_ouyou_05",
  title: "1手詰め応用⑤",
  unit: "u7",
  type: "learn",
  reward_xp: 15,
  steps: [
    {
      id: "tsume1_91",
      type: "move",
      board_sfen: "6Rgk/6g2/7BP/6b2/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "詰将棋じゃ！\n1手で王様を詰ませよう。",
      correct_move: {
        from: { row: 2, col: 8 },
        to: { row: 1, col: 8 },
      },
      result_sfen: "6Rgk/6g1+P/7B1/6b2/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_92",
      type: "move",
      board_sfen: "6Rgk/6g2/7BP/8r/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 2, col: 7 },
        to: { row: 1, col: 8 },
      },
      result_sfen: "6Rgk/6g1+B/8P/8r/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_93",
      type: "move",
      board_sfen: "8l/6+Rgk/7pp/9/9/9/9/9/9 b S 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Sl/6+Rgk/7pp/9/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
    {
      id: "tsume1_94",
      type: "move",
      board_sfen: "6+P1l/6+Rsk/7pp/9/9/9/9/9/9 b - 1",
      instruction: "1手で詰ませよう！",
      coach_text: "次の問題じゃ！",
      correct_move: {
        from: { row: 1, col: 6 },
        to: { row: 0, col: 7 },
      },
      result_sfen: "6+P+Rl/7sk/7pp/9/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！",
      fail_text: "王様が逃げられない手を探そう。",
    },
  ],
};
