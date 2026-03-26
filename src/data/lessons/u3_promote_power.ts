import type { LessonData } from "../../lesson/types";

export const U3_PROMOTE_POWER: LessonData = {
  id: "u3_promote_power",
  title: "成りを活かそう",
  unit: "u3",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: と金で横に動く（金の動き）
    {
      id: "tokin_sideways",
      type: "move",
      board_sfen: "9/9/9/4+Pp3/9/9/9/9/9 b - 1",
      instruction: "と金で歩を取ろう！",
      coach_text: "と金は金と同じ動きじゃ。\n横にも動けるぞ！\n横の歩を取ってみよう。",
      arrows: [{ from: [3, 4], to: [3, 5] }],
      correct_move: {
        from: { row: 3, col: 4 },
        to: { row: 3, col: 5 },
      },
      result_sfen: "9/9/9/5+P2/9/9/9/9/9 b P 1",
      success_text: "と金で横に動けたぞ！\n普通の歩は前にしか動けないが、\nと金は金の動きができるんじゃ。",
      fail_text: "と金を横に動かして歩を取ろう。",
    },
    // step2: 龍で斜めに動く（飛車+斜め1マス）
    {
      id: "dragon_diagonal",
      type: "move",
      board_sfen: "9/9/9/9/4+R4/9/9/9/9 b - 1",
      instruction: "龍を斜めに動かそう！",
      coach_text: "龍は飛車の動きに加えて\n斜め1マスにも動けるぞ。\n斜めに動かしてみよう！",
      arrows: [{ from: [4, 4], to: [3, 5] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 5 },
      },
      success_text: "龍は斜めにも動けるんじゃ！\n飛車＋斜め1マスで最強じゃよ。",
      fail_text: "龍を斜めに動かしてみよう。",
    },
    // step3: 馬で縦に動く（角+縦横1マス）
    {
      id: "horse_vertical",
      type: "move",
      board_sfen: "9/9/9/9/4+B4/9/9/9/9 b - 1",
      instruction: "馬を前に動かそう！",
      coach_text: "馬は角の動きに加えて\n縦横1マスにも動けるぞ。\n前に動かしてみよう！",
      arrows: [{ from: [4, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 4 },
      },
      success_text: "馬は縦横にも動けるんじゃ！\n角の弱点（縦横）を克服した\n強力な駒じゃよ。",
      fail_text: "馬を前に動かしてみよう。",
    },
    // step4: 龍で王手（自力）
    {
      id: "dragon_check",
      type: "move",
      board_sfen: "3k5/9/9/9/3+R5/9/9/9/9 b - 1",
      instruction: "龍で王手をかけよう！",
      coach_text: "龍の力で王手をかけよう！\n縦横どこまでもと\n斜め1マス、どう使う？",
      correct_move: {
        from: { row: 4, col: 3 },
        to: { row: 0, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 4, col: 3 }, to: { row: 1, col: 3 } },
      ],
      success_text: "龍で王手じゃ！\n龍は遠くからも近くからも\n攻められる最強の駒じゃ。",
      fail_text: "龍を動かして王様を\n取れる位置に行こう。",
    },
    // step5: クイズ - 成り駒の強さ
    {
      id: "quiz_promotion_power",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "歩・香・桂・銀が成ると？",
      coach_text: "歩・香・桂・銀は\n成るとどんな動きになるかな？",
      quiz_options: ["みんな金の動きになる", "それぞれ違う動きになる"],
      quiz_answer: 0,
      success_text: "正解！歩→と金、香→成香、\n桂→成桂、銀→成銀、\n全部金と同じ動きになるんじゃ！\n覚えやすいじゃろ。",
      fail_text: "歩・香・桂・銀は成ると\nみんな金の動きになるぞ。",
    },
    // step6: 馬で王手（自力）
    {
      id: "horse_check",
      type: "move",
      board_sfen: "9/4k4/9/9/9/9/2+B6/9/9 b - 1",
      instruction: "馬で王手をかけて仕上げ！",
      coach_text: "仕上げじゃ！\n馬は斜めにどこまでも\n動けるぞ。王手をかけよう！",
      correct_move: {
        from: { row: 6, col: 2 },
        to: { row: 2, col: 6 },
      },
      correct_moves_alt: [
        { from: { row: 6, col: 2 }, to: { row: 1, col: 3 } },
        { from: { row: 6, col: 2 }, to: { row: 2, col: 4 } },
      ],
      success_text: "すばらしい！\n成り駒の力をマスターしたな！\n成りを活かして攻めよう！",
      fail_text: "馬を動かして王様を\n取れる場所を探そう。",
    },
  ],
};
