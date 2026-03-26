import type { LessonData } from "../../lesson/types";

export const U2_SILVER_USE: LessonData = {
  id: "u2_silver_use",
  title: "銀を使ってみよう",
  unit: "u2",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 銀で歩を前から取る（ガイド）
    {
      id: "silver_take_forward",
      type: "move",
      board_sfen: "9/9/9/4p4/4S4/9/9/9/9 b - 1",
      instruction: "銀で歩を取ろう！",
      coach_text: "前に相手の歩がおるぞ。\n銀で取ってみよう！",
      arrows: [{ from: [4, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4S4/9/9/9/9/9 b P 1",
      success_text: "前から取れたな！",
      fail_text: "歩のいるマスに銀を進めよう。",
    },
    // step2: 銀で斜め前から取る（ガイド）
    {
      id: "silver_take_diag",
      type: "move",
      board_sfen: "9/9/9/5p3/4S4/9/9/9/9 b - 1",
      instruction: "銀で斜め前の歩を取ろう！",
      coach_text: "斜め前にも取れるぞ！",
      arrows: [{ from: [4, 4], to: [3, 5] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 5 },
      },
      result_sfen: "9/9/9/5S3/9/9/9/9/9 b P 1",
      success_text: "斜め前からも取れたな！",
      fail_text: "斜め前の歩に向かって銀を動かそう。",
    },
    // step3: 自力で取れる駒を選ぶ（横は取れない！）
    {
      id: "silver_pick_target",
      type: "move",
      board_sfen: "9/9/9/3p5/4Sp3/9/9/9/9 b - 1",
      instruction: "銀で取れる駒を取ろう！",
      coach_text: "2つの歩があるぞ。\n銀は横には動けない！\nどっちが取れるかな？",
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 3 },
      },
      result_sfen: "9/9/9/3S5/5p3/9/9/9/9 b P 1",
      success_text: "正解！銀は横には動けないから、\n斜め前の歩だけ取れるんじゃ。",
      fail_text: "銀が動ける方向を考えてみよう。\n横には動けないぞ。",
    },
    // step4: 銀で王手（ガイド）
    {
      id: "silver_check",
      type: "move",
      board_sfen: "4k4/9/5S3/9/9/9/9/9/9 b - 1",
      instruction: "銀で王手をかけよう！",
      coach_text: "銀を動かして\n王手をかけてみよう！",
      arrows: [{ from: [2, 5], to: [1, 4] }],
      correct_move: {
        from: { row: 2, col: 5 },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/4S4/9/9/9/9/9/9/9 b - 1",
      success_text: "銀で王手じゃ！\n斜め前から王手がかけられたな。",
      fail_text: "矢印の方向に銀を進めてみよう。",
    },
    // step5: クイズ - 銀の強みは？
    {
      id: "silver_strength_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/4S4/9/9/9/9 b - 1",
      instruction: "銀の強みは？",
      coach_text: "銀ならではの強みは何じゃろう？",
      quiz_options: ["斜めに強い", "横に強い", "後ろに強い"],
      quiz_answer: 0,
      success_text: "正解！銀は斜め前にも\n斜め後ろにも動ける。\n斜めの動きが銀の強みじゃ！",
      fail_text: "銀の動ける方向を思い出そう。\n斜めの方向が多いぞ。",
    },
    // step6: 自力で銀を使って王手
    {
      id: "silver_self_check",
      type: "move",
      board_sfen: "9/6k2/9/5S3/9/9/9/9/9 b - 1",
      instruction: "銀で王手をかけよう！",
      coach_text: "仕上げじゃ！\nヒントなしでやってみよう。",
      correct_move: {
        from: { row: 3, col: 5 },
        to: { row: 2, col: 6 },
      },
      correct_moves_alt: [
        { from: { row: 3, col: 5 }, to: { row: 2, col: 5 } },
      ],
      success_text: "すばらしい！\n銀の使い方がわかってきたな！",
      fail_text: "銀を動かして、王様を取れる場所を探そう。",
    },
  ],
};
