import type { LessonData } from "../../lesson/types";

export const U4_COMPARE_CHECK_VS_MATE: LessonData = {
  id: "u4_compare_check_vs_mate",
  title: "王手と詰みの違い",
  unit: "u4",
  type: "compare",
  reward_xp: 10,
  steps: [
    // step1: クイズ - この局面は詰み？（王手だが逃げられる）
    {
      id: "quiz_just_check",
      type: "quiz",
      board_sfen: "4k4/4G4/9/9/9/9/9/9/9 b - 1",
      instruction: "この局面は詰み？",
      coach_text: "金で王手がかかっておるぞ。\nでもこれは詰みかな？\n王様は逃げられるかな？",
      quiz_options: ["王手だが詰みではない", "詰み！"],
      quiz_answer: 0,
      success_text: "正解！王様は横に逃げられるから\nこれは詰みではないんじゃ。\n王手と詰みは違うぞ！",
      fail_text: "王様は横に逃げられるぞ。\n逃げ道があるなら詰みじゃない。",
    },
    // step2: クイズ - この局面は詰み？（詰み）
    {
      id: "quiz_is_mate",
      type: "quiz",
      board_sfen: "8k/8G/9/9/9/9/9/9/9 b - 1",
      instruction: "この局面は詰み？",
      coach_text: "金で王手がかかっておる。\n王様は端にいるぞ。\n逃げられるかな？",
      quiz_options: ["詰み！", "王手だが詰みではない"],
      quiz_answer: 0,
      success_text: "正解！端だから横に逃げられない、\n前は金がいる。\n逃げ場がないから詰みじゃ！",
      fail_text: "王様はどこにも逃げられないぞ。\nこれは詰みじゃ！",
    },
    // step3: 比較 - 詰む手 vs 詰まない手
    {
      id: "compare_mate_or_not",
      type: "compare",
      board_sfen: "8k/7pp/9/9/9/9/9/9/9 b G 1",
      instruction: "どっちの手が詰み？",
      coach_text: "金を打つぞ。\nどこに打てば詰みになるかな？",
      compare_options: [
        {
          label: "腹金（横に打つ）",
          description: "逃げ道がない！",
          move: { from: { hand: "ki" }, to: { row: 0, col: 7 } },
        },
        {
          label: "頭金（下に打つ）",
          description: "斜めに逃げられる？",
          move: { from: { hand: "ki" }, to: { row: 1, col: 8 } },
        },
      ],
      compare_answer: 0,
      why_text: "腹金なら逃げ道がなく詰みじゃ！\n頭金だと横に逃げられてしまう。\n詰みかどうかは「全ての逃げ道」を\n確認するんじゃ。",
      success_text: "正解！腹金で詰みじゃ！",
      fail_text: "逃げ道がない方を選ぼう。",
    },
    // step4: 実行
    {
      id: "execute_mate",
      type: "move",
      board_sfen: "8k/7pp/9/9/9/9/9/9/9 b G 1",
      instruction: "詰みの手を指そう！",
      coach_text: "腹金で詰ませよう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [0, 7] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Gk/7pp/9/9/9/9/9/9/9 b - 1",
      success_text: "詰みじゃ！逃げ道を全部確認して\n詰ませたな。",
      fail_text: "王様の横に金を打とう。",
    },
    // step5: クイズ - 王手と詰みのまとめ
    {
      id: "quiz_summary",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "「詰み」に必要な条件は？",
      coach_text: "王手と詰みの違いを\nまとめじゃ。",
      quiz_options: ["王手＋逃げ道なし＋合駒不可＋取れない", "王手がかかっていること"],
      quiz_answer: 0,
      success_text: "正解！王手がかかっていて、\n逃げることも、間に駒を入れることも、\n王手している駒を取ることも\nできない状態が「詰み」じゃ！",
      fail_text: "王手だけでは詰みにならないぞ。",
    },
    // step6: 仕上げ - 詰みを見つける
    {
      id: "mate_vs_check_finale",
      type: "move",
      board_sfen: "k8/p8/9/9/9/9/9/9/9 b G 1",
      instruction: "詰ましてみよう！",
      coach_text: "仕上げじゃ！\n詰みになる手を見つけよう。\n逃げ道を全部確認じゃ！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 1 },
      },
      result_sfen: "kG7/p8/9/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n王手と詰みの違いを\nマスターしたな！",
      fail_text: "王手がかかって逃げ場もない\n場所に金を打とう。",
    },
  ],
};
