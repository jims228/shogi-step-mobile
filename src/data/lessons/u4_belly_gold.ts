import type { LessonData } from "../../lesson/types";

export const U4_BELLY_GOLD: LessonData = {
  id: "u4_belly_gold",
  title: "腹金で詰ます",
  unit: "u4",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 腹金の基本（ガイド）
    {
      id: "belly_gold_basic",
      type: "move",
      board_sfen: "ln7/1k7/pBp6/1P7/9/9/9/9/9 b G 1",
      instruction: "金を打って詰まそう！",
      coach_text: "「腹金」は王様の横に\n金を打つ詰み方じゃ。\n王様の腹（横）に金を打とう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [1, 2] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 2 },
      },
      result_sfen: "ln7/1kG6/pBp6/1P7/9/9/9/9/9 b - 1",
      success_text: "腹金で詰み！\n王様の横から金を打って、\n上下も塞がっているから\n逃げ場がないぞ。",
      fail_text: "王様の横に金を打とう。",
    },
    // step2: 反対側の腹金
    {
      id: "belly_gold_right",
      type: "move",
      board_sfen: "9/7k1/6Pp1/8L/9/9/9/9/9 b G 1",
      instruction: "腹金で詰まそう！",
      coach_text: "王様の横に金を打とう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 6 },
      },
      result_sfen: "9/6Gk1/6Pp1/8L/9/9/9/9/9 b - 1",
      success_text: "腹金で詰み！\nどちらの端でも使えるぞ。",
      fail_text: "王様の横に金を打とう。",
    },
    // step3: クイズ - 頭金と腹金の違い
    {
      id: "quiz_head_vs_belly",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "頭金と腹金の違いは？",
      coach_text: "頭金と腹金、\nどう違うか確認じゃ。",
      quiz_options: ["頭金は上から、腹金は横から", "同じ手筋"],
      quiz_answer: 0,
      success_text: "正解！頭金は王様の真上、\n腹金は王様の横に\n金を打つ詰み方じゃ。\nどちらも強力な1手詰めじゃよ。",
      fail_text: "頭金は上から、腹金は横から\n金を打つ手筋じゃ。",
    },
    // step4: 盤上の金で腹金
    {
      id: "belly_gold_move",
      type: "move",
      board_sfen: "8k/8p/7G1/9/9/9/9/9/9 b - 1",
      instruction: "金を動かして詰まそう！",
      coach_text: "今度は盤上の金を動かして\n腹金で詰ませよう！",
      arrows: [{ from: [2, 7], to: [0, 7] }],
      correct_move: {
        from: { row: 2, col: 7 },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Gk/8p/9/9/9/9/9/9/9 b - 1",
      success_text: "盤上の金でも腹金が決まるぞ！",
      fail_text: "金を王様の横に動かそう。",
    },
    // step5: 自力で腹金
    {
      id: "belly_gold_self",
      type: "move",
      board_sfen: "k8/p8/9/9/9/9/9/9/9 b G 1",
      instruction: "腹金で詰まそう！",
      coach_text: "ヒントなしじゃ！\n腹金で詰ませよう。",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 1 },
      },
      result_sfen: "kG7/p8/9/9/9/9/9/9/9 b - 1",
      success_text: "腹金で詰み！ばっちりじゃ。",
      fail_text: "王様の横に金を打とう。",
    },
    // step6: 仕上げ
    {
      id: "belly_gold_finale",
      type: "move",
      board_sfen: "8k/7pp/9/9/9/9/9/9/9 b G 1",
      instruction: "詰ましてみよう！",
      coach_text: "仕上げじゃ！\n腹金で詰ませよう。\n相手の歩が逃げ道を塞いでいるぞ！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Gk/7pp/9/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n腹金をマスターしたな！\n頭金と腹金、2つの必殺技を\n覚えたぞ。",
      fail_text: "王様の横に金を打とう。",
    },
  ],
};
