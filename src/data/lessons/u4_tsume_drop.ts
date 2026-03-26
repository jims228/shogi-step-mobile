import type { LessonData } from "../../lesson/types";

export const U4_TSUME_DROP: LessonData = {
  id: "u4_tsume_drop",
  title: "1手詰め：持ち駒",
  unit: "u4",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 金を打って詰ます（ガイド）
    {
      id: "drop_mate_gold",
      type: "move",
      board_sfen: "7pk/7pp/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って詰まそう！",
      coach_text: "持ち駒を打って詰ますのは\n実戦でも多いパターンじゃ。\n金を打って詰ませよう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [0, 7] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Gk/7pp/9/9/9/9/9/9/9 b - 1",
      success_text: "金を打って詰み！\n持ち駒はどこにでも打てるから\n詰みやすいぞ。",
      fail_text: "金を打って逃げ場のない\n王手をかけよう。",
    },
    // step2: 銀を打って詰ます
    {
      id: "drop_mate_silver",
      type: "move",
      board_sfen: "8k/7pp/9/9/9/9/9/9/9 b S 1",
      instruction: "銀を打って詰まそう！",
      coach_text: "銀の持ち駒で詰ませよう。\n銀の効きを考えてな！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 7 },
      },
      result_sfen: "8k/7Sp/9/9/9/9/9/9/9 b - 1",
      success_text: "銀で詰みじゃ！\n斜め前の効きで王手、\n歩が逃げ道を塞いでいるぞ。",
      fail_text: "銀で王手がかかる場所に打とう。\n逃げ道がないか確認じゃ。",
    },
    // step3: 飛車を打って詰ます
    {
      id: "drop_mate_rook",
      type: "move",
      board_sfen: "kp7/p8/9/9/9/9/9/9/9 b R 1",
      instruction: "飛車を打って詰まそう！",
      coach_text: "飛車は遠くからでも\n効きが届くぞ。\nどこに打てば詰みかな？",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 0, col: 1 },
      },
      result_sfen: "kR7/p8/9/9/9/9/9/9/9 b - 1",
      success_text: "飛車で詰みじゃ！",
      fail_text: "飛車を打って王手をかけよう。",
    },
    // step4: 自力で判断して打つ
    {
      id: "drop_mate_self1",
      type: "move",
      board_sfen: "kp7/pp7/9/9/9/9/9/9/9 b G 1",
      instruction: "持ち駒で詰まそう！",
      coach_text: "持ち駒の金で\n1手詰めじゃ！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 0 },
      },
      result_sfen: "kp7/Gp7/9/9/9/9/9/9/9 b - 1",
      success_text: "詰み！腹金のパターンじゃな。",
      fail_text: "金を打って逃げ場のない\n王手をかけよう。",
    },
    // step5: クイズ - 持ち駒で詰ますメリット
    {
      id: "quiz_drop_mate",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b G 1",
      instruction: "持ち駒で詰ますメリットは？",
      coach_text: "盤上の駒を動かすのと\n持ち駒を打つの、\n詰みにはどっちが便利かな？",
      quiz_options: ["どこにでも打てるから詰みやすい", "特にメリットはない"],
      quiz_answer: 0,
      success_text: "正解！持ち駒はどこにでも\n打てるから、詰みの形を\n作りやすいんじゃ。\n「持ち駒の金」は最強の武器じゃよ。",
      fail_text: "持ち駒はどこにでも打てるから\n詰みに使いやすいぞ。",
    },
    // step6: 仕上げ
    {
      id: "drop_mate_finale",
      type: "move",
      board_sfen: "8k/8p/9/9/9/9/9/9/9 b G 1",
      instruction: "持ち駒で詰まして仕上げ！",
      coach_text: "仕上げじゃ！\n持ち駒で1手詰めじゃ。",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Gk/8p/9/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n持ち駒の1手詰めをマスターしたな！",
      fail_text: "金を打って詰ませよう。",
    },
  ],
};
