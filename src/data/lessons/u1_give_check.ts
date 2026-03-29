import type { LessonData } from "../../lesson/types";

export const U1_GIVE_CHECK: LessonData = {
  id: "u1_give_check",
  title: "王手をかけてみよう",
  unit: "u1",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 斜め前から王手（ガイド付き）
    {
      id: "check_diag",
      type: "move",
      board_sfen: "9/4k4/9/3G5/9/9/9/9/9 b - 1",
      instruction: "金を動かして王手をかけよう！",
      coach_text: "金を斜め前に進めると、\n次に王様を取れる状態になるぞ。\nやってみよう！",
      arrows: [{ from: [3, 3], to: [2, 4] }],
      correct_move: {
        from: { row: 3, col: 3 },
        to: { row: 2, col: 4 },
      },
      result_sfen: "9/4k4/4G4/9/9/9/9/9/9 b - 1",
      success_text: "王手じゃ！\n金が王様の真下に来たから、\n次の手で取れるぞ。",
      fail_text: "矢印の方向に金を動かしてみよう。",
    },
    // step2: 横から王手（ガイド付き）
    {
      id: "check_side",
      type: "move",
      board_sfen: "9/9/4G1k2/9/9/9/9/9/9 b - 1",
      instruction: "金を横に動かして王手！",
      coach_text: "金は横にも動けるぞ！\n横から王手をかけてみよう。",
      arrows: [{ from: [2, 4], to: [2, 5] }],
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 2, col: 5 },
      },
      result_sfen: "9/9/5Gk2/9/9/9/9/9/9 b - 1",
      success_text: "横から王手じゃ！\n金は横からも王手がかけられるんじゃ。",
      fail_text: "矢印の方向に金を動かしてみよう。",
    },
    // step3: 自力で王手（斜め前から）
    {
      id: "check_self1",
      type: "move",
      board_sfen: "6k2/9/5G3/9/9/9/9/9/9 b - 1",
      instruction: "金で王手をかけよう！",
      coach_text: "ヒントなしじゃ！\n金をどこに動かせば\n王手がかかるかな？",
      correct_move: {
        from: { row: 2, col: 5 },
        to: { row: 1, col: 6 },
      },
      result_sfen: "6k2/6G2/9/9/9/9/9/9/9 b - 1",
      success_text: "斜め前から王手じゃ！\nいろんな角度から\n王手がかけられるんじゃな。",
      fail_text: "金を動かして、王様を取れる位置に行こう。",
    },
    // step4: 自力で王手（複数正解あり）
    {
      id: "check_self2",
      type: "move",
      board_sfen: "3k5/9/4G4/9/9/9/9/9/9 b - 1",
      instruction: "金で王手をかけてみよう！",
      coach_text: "王手のかけ方は\n1つとは限らないぞ。\n考えてみよう！",
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 2, col: 4 }, to: { row: 1, col: 4 } },
      ],
      result_sfen: "3k5/3G5/9/9/9/9/9/9/9 b - 1",
      success_text: "正解！\n金は前からも斜めからも\n王手がかけられるんじゃ。",
      fail_text: "金を動かして、王様を取れる場所を探そう。",
    },
    // step5: クイズ - 王手をかけられた側は？
    {
      id: "quiz_check_response",
      type: "quiz",
      board_sfen: "4k4/4G4/9/9/9/9/9/9/9 b - 1",
      instruction: "王手をかけられたらどうする？",
      coach_text: "王手をかけられた側には\n3つの対応方法があるぞ。\nどれじゃろう？",
      quiz_options: ["逃げる・防ぐ・取る", "何もしなくていい"],
      quiz_answer: 0,
      success_text: "その通り！\n王手には必ず対応しないといけない。\n逃げるか、間に駒を入れるか、\n王手している駒を取るんじゃ！",
      fail_text: "王様を取られたら負けじゃぞ。\n放っておけるかな？",
    },
    // step6: 仕上げ - 自力で王手
    {
      id: "check_finale",
      type: "move",
      board_sfen: "9/6k2/9/5G3/9/9/9/9/9 b - 1",
      instruction: "最後に王手をかけてみよう！",
      coach_text: "仕上げじゃ！\n金で王手をかけてみよう。",
      correct_move: {
        from: { row: 3, col: 5 },
        to: { row: 2, col: 6 },
      },
      correct_moves_alt: [
        { from: { row: 3, col: 5 }, to: { row: 2, col: 5 } },
      ],
      result_sfen: "9/6k2/6G2/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n王手をかける力がついてきたな！",
      fail_text: "王様を取れる場所に金を動かそう。",
    },
  ],
};
