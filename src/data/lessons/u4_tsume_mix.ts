import type { LessonData } from "../../lesson/types";

export const U4_TSUME_MIX: LessonData = {
  id: "u4_tsume_mix",
  title: "1手詰めチャレンジ",
  unit: "u4",
  type: "learn",
  reward_xp: 15,
  steps: [
    // step1: 頭金
    {
      id: "challenge_1",
      type: "move",
      board_sfen: "7pk/7pp/9/9/9/9/9/9/9 b G 1",
      instruction: "1手で詰まそう！",
      coach_text: "チャレンジじゃ！\n1手で詰ませてみよう。",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Gk/7pp/9/9/9/9/9/9/9 b - 1",
      success_text: "詰み！腹金じゃな。",
      fail_text: "逃げ道がない王手を探そう。",
    },
    // step2: 飛車で詰ます
    {
      id: "challenge_2",
      type: "move",
      board_sfen: "8k/7Gp/9/9/9/9/9/9/9 b R 1",
      instruction: "1手で詰まそう！",
      coach_text: "金が効いているから\n逃げ道が限られているぞ。",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Rk/7Gp/9/9/9/9/9/9/9 b - 1",
      success_text: "詰み！飛車と金の連携じゃ。",
      fail_text: "飛車で王手をかけよう。\n逃げ道がないか確認じゃ。",
    },
    // step3: 銀で詰ます
    {
      id: "challenge_3",
      type: "move",
      board_sfen: "k8/pp7/9/9/9/9/9/9/9 b S 1",
      instruction: "1手で詰まそう！",
      coach_text: "銀で詰ませるぞ。\n銀の効きを考えよう！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 0 },
      },
      result_sfen: "k8/Sp7/9/9/9/9/9/9/9 b - 1",
      success_text: "銀で詰みじゃ！",
      fail_text: "銀で王手をかけよう。\n逃げ道がないか確認じゃ。",
    },
    // step4: 盤上の駒で詰ます
    {
      id: "challenge_4",
      type: "move",
      board_sfen: "8k/7pp/8G/9/9/9/9/9/9 b - 1",
      instruction: "1手で詰まそう！",
      coach_text: "盤上の金を動かして\n詰ませよう！",
      correct_move: {
        from: { row: 2, col: 8 },
        to: { row: 1, col: 8 },
      },
      result_sfen: "8k/7pG/9/9/9/9/9/9/9 b - 1",
      success_text: "詰み！頭金じゃな。",
      fail_text: "金を動かして王手をかけよう。",
    },
    // step5: 角で詰ます
    {
      id: "challenge_5",
      type: "move",
      board_sfen: "kp7/pp7/9/9/9/9/9/9/9 b B 1",
      instruction: "1手で詰まそう！",
      coach_text: "角の持ち駒で\n詰ませてみよう！",
      hand_pieces: { ka: 1 },
      correct_move: {
        from: { hand: "ka" },
        to: { row: 1, col: 1 },
      },
      result_sfen: "kp7/pB7/9/9/9/9/9/9/9 b - 1",
      success_text: "角で詰みじゃ！すごいぞ！",
      fail_text: "角の斜めの効きで\n王手をかけよう。",
    },
    // step6: 仕上げ
    {
      id: "challenge_finale",
      type: "move",
      board_sfen: "1kp6/ppp6/9/9/9/9/9/9/9 b G 1",
      instruction: "最後の1手詰め！",
      coach_text: "仕上げの1手詰めじゃ！\n集中して解いてみよう。",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 0 },
      },
      result_sfen: "Gkp6/ppp6/9/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n1手詰めチャレンジクリア！\n詰みを見つける力が\nしっかりついてきたな！",
      fail_text: "金を打って逃げ場のない\n王手をかけよう。",
    },
  ],
};
