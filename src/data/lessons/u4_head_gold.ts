import type { LessonData } from "../../lesson/types";

export const U4_HEAD_GOLD: LessonData = {
  id: "u4_head_gold",
  title: "頭金で詰ます",
  unit: "u4",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 頭金の基本 - 端の王に（ガイド）
    {
      id: "head_gold_basic",
      type: "move",
      board_sfen: "8k/9/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って詰ましてみよう！",
      coach_text: "「頭金」は最も基本的な\n詰み方じゃ。\n王様の頭（真上）に金を打つぞ！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [1, 8] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 8 },
      },
      result_sfen: "8k/8G/9/9/9/9/9/9/9 b - 1",
      success_text: "頭金で詰み！\n王様は端で逃げ場がないぞ。\nこれが一番基本の詰みじゃ。",
      fail_text: "王様の真下（頭）に金を打とう。",
    },
    // step2: 反対の端で頭金
    {
      id: "head_gold_left",
      type: "move",
      board_sfen: "k8/9/9/9/9/9/9/9/9 b G 1",
      instruction: "頭金で詰まそう！",
      coach_text: "今度は反対の端じゃ。\n同じように頭金で詰ませよう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 0 },
      },
      result_sfen: "k8/G8/9/9/9/9/9/9/9 b - 1",
      success_text: "反対の端でも頭金で詰みじゃ！",
      fail_text: "王様の頭に金を打とう。",
    },
    // step3: 味方の駒が逃げ道を塞いでいる場合
    {
      id: "head_gold_with_ally",
      type: "move",
      board_sfen: "7kP/9/9/9/9/9/9/9/9 b G 1",
      instruction: "頭金で詰まそう！",
      coach_text: "味方の歩が王様の横を\n塞いでいるぞ。\n頭金で詰みじゃ！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 7 },
      },
      result_sfen: "7kP/7G1/9/9/9/9/9/9/9 b - 1",
      success_text: "詰み！味方の歩が逃げ道を\n塞いでくれているな。\n周りの駒も詰みに使えるんじゃ。",
      fail_text: "王様の頭に金を打とう。",
    },
    // step4: クイズ - なぜ頭金で詰む？
    {
      id: "quiz_why_head_gold",
      type: "quiz",
      board_sfen: "8k/8G/9/9/9/9/9/9/9 b - 1",
      instruction: "なぜ頭金で詰むの？",
      coach_text: "頭金はなぜ詰みになるんじゃろう？",
      quiz_options: ["金が6方向を制圧＋端で逃げ場なし", "金が全方向を制圧するから"],
      quiz_answer: 0,
      success_text: "正解！金が前・横・斜め前を\n制圧して、端で逃げ場がない。\nだから詰みになるんじゃ！",
      fail_text: "金は6方向に効くが、\n端という条件も大事じゃぞ。",
    },
    // step5: 自力で頭金
    {
      id: "head_gold_self1",
      type: "move",
      board_sfen: "7k1/7p1/9/9/9/9/9/9/9 b G 1",
      instruction: "頭金で詰まそう！",
      coach_text: "相手の歩が逃げ道を\n塞いでいるぞ。\n頭金で詰みじゃ！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 7 },
      },
      result_sfen: "7k1/7Gp/9/9/9/9/9/9/9 b - 1",
      success_text: "詰み！相手の駒が逃げ道を\n塞いでいるケースもあるんじゃ。",
      fail_text: "王様の頭に金を打とう。",
    },
    // step6: 仕上げ - 頭金
    {
      id: "head_gold_finale",
      type: "move",
      board_sfen: "1k7/p8/9/9/9/9/9/9/9 b G 1",
      instruction: "頭金で仕上げ！",
      coach_text: "仕上げじゃ！\n頭金で詰ませよう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 1 },
      },
      result_sfen: "1k7/pG7/9/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n頭金をマスターしたな！\n端に追い詰めて頭金、\nこれが詰みの基本じゃ。",
      fail_text: "王様の頭に金を打とう。",
    },
  ],
};
