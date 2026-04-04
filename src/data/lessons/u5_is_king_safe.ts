import type { LessonData } from "../../lesson/types";

export const U5_IS_KING_SAFE: LessonData = {
  id: "u5_is_king_safe",
  title: "王は安全？",
  unit: "u5",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 王手がかかっている？（かかっている）
    {
      id: "quiz_in_check_yes",
      type: "quiz",
      board_sfen: "4K4/4g4/9/9/9/9/9/9/9 b - 1",
      instruction: "この王は王手がかかっている？",
      coach_text: "王の前に相手の金がいるぞ。\n王手がかかっているかな？",
      quiz_options: ["王手がかかっている", "安全"],
      quiz_answer: 0,
      success_text: "正解！金が王を直接攻撃して\nいるから王手じゃ。\nすぐに対応が必要じゃ！",
      fail_text: "金が王のすぐ前にいるから\n王手がかかっているぞ。",
    },
    // step2: クイズ - 王手がかかっている？（安全）
    {
      id: "quiz_in_check_no",
      type: "quiz",
      board_sfen: "4K4/9/9/4g4/9/9/9/9/9 b - 1",
      instruction: "この王は安全？",
      coach_text: "相手の金がいるが離れておるぞ。\n王手がかかっているかな？",
      quiz_options: ["安全（金は1マスしか動けない）", "王手がかかっている"],
      quiz_answer: 0,
      success_text: "正解！金は1マスしか動けないから\n離れていれば安全じゃ。\nでも次の手で近づいてくるかも\nしれないぞ！",
      fail_text: "金は離れているから\n今は王手ではないぞ。",
    },
    // step3: クイズ - 飛車が効いている？
    {
      id: "quiz_rook_threat",
      type: "quiz",
      board_sfen: "4K4/9/9/9/9/9/9/9/4r4 b - 1",
      instruction: "この王は安全？",
      coach_text: "遠くに飛車がいるぞ。\n同じ縦列に王がいるが…\n王手がかかっているかな？",
      quiz_options: ["王手がかかっている", "安全"],
      quiz_answer: 0,
      success_text: "正解！飛車は縦にどこまでも\n効くから、同じ列にいたら\n距離に関係なく王手じゃ！",
      fail_text: "飛車は縦にどこまでも効くから\n遠くても王手がかかっているぞ。",
    },
    // step4: クイズ - 間に駒があれば安全？
    {
      id: "quiz_blocked",
      type: "quiz",
      board_sfen: "4K4/4P4/9/9/9/9/9/9/4r4 b - 1",
      instruction: "この王は安全？",
      coach_text: "飛車と王の間に\n味方の歩があるぞ。\n王手がかかっているかな？",
      quiz_options: ["安全（歩が効きを遮断）", "王手がかかっている"],
      quiz_answer: 0,
      success_text: "正解！間に駒があれば\n飛車の効きは遮断されるぞ。\n今は安全じゃ。\nでも歩を動かしたら危険じゃ！",
      fail_text: "間に駒があれば\n効きが遮断されて安全じゃ。",
    },
    // step5: 王手を受ける（実践）
    {
      id: "practice_safety",
      type: "move",
      board_sfen: "3K5/9/9/9/9/9/3r5/9/9 b G 1",
      instruction: "王手じゃ！受けよう！",
      coach_text: "飛車で王手がかかっておる。\n合駒で防ごう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 3 },
      },
      correct_moves_alt: [
        { from: { hand: "ki" }, to: { row: 2, col: 3 } },
        { from: { hand: "ki" }, to: { row: 3, col: 3 } },
      ],
      success_text: "合駒で安全になったぞ！\n王の安全を常に確認じゃ。",
      fail_text: "王と飛車の間に金を打とう。",
    },
    // step6: クイズ - まとめ
    {
      id: "quiz_safety_summary",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "王の安全で一番大事なことは？",
      coach_text: "王の安全を守るために\n一番大事なことは何じゃろう？",
      quiz_options: ["相手の駒の効きを確認する", "とにかく端に寄せる"],
      quiz_answer: 0,
      success_text: "正解！相手の駒がどこに\n効いているかを見るのが大事じゃ。\n飛車・角は遠くからも効くし、\n金・銀は近くから効く。\n常に効きを意識しよう！",
      fail_text: "相手の駒の効きを確認するのが\n一番大事じゃ。",
    },
  ],
};
