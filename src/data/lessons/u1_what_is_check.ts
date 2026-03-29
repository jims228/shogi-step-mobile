import type { LessonData } from "../../lesson/types";

export const U1_WHAT_IS_CHECK: LessonData = {
  id: "u1_what_is_check",
  title: "王手ってなに？",
  unit: "u1",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 金で王手をかける（ガイド付き）
    {
      id: "give_check_gold",
      type: "move",
      board_sfen: "4k4/9/4G4/9/9/9/9/9/9 b - 1",
      instruction: "金を進めて王手をかけよう！",
      coach_text: "「王手」とは、相手の王様を\n取れる状態にすることじゃ！\n金を前に進めて王手をかけよう。",
      arrows: [{ from: [2, 4], to: [1, 4] }],
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/4G4/9/9/9/9/9/9/9 b - 1",
      success_text: "王手じゃ！\n次の手で王様を取れる状態にしたぞ。",
      fail_text: "金を前に進めて王様に近づけよう。",
    },
    // step2: クイズ - これは王手？（王手がかかっている局面）
    {
      id: "quiz_is_check_yes",
      type: "quiz",
      board_sfen: "4k4/4G4/9/9/9/9/9/9/9 b - 1",
      instruction: "この局面、王手がかかっている？",
      coach_text: "金が王様のすぐ前にいるぞ。\nこれは王手かな？",
      quiz_options: ["王手！", "王手じゃない"],
      quiz_answer: 0,
      success_text: "その通り！\n金が王様を取れる位置にいるから\nこれは王手じゃ！",
      fail_text: "金は次の手で王様を取れるぞ？",
    },
    // step3: クイズ - これは王手？（王手がかかっていない局面）
    {
      id: "quiz_is_check_no",
      type: "quiz",
      board_sfen: "4k4/9/9/9/4G4/9/9/9/9 b - 1",
      instruction: "この局面、王手がかかっている？",
      coach_text: "金と王様が離れておるぞ。\nこれは王手かな？",
      quiz_options: ["王手！", "王手じゃない"],
      quiz_answer: 1,
      success_text: "正解！\n金は1マスしか動けないから、\n離れていたら王手にならないんじゃ。",
      fail_text: "金は1マスしか動けないぞ。\n王様に届くかな？",
    },
    // step4: 王手をかけられたら必ず対応する
    {
      id: "quiz_must_respond",
      type: "quiz",
      board_sfen: "4k4/4G4/9/9/9/9/9/9/9 b - 1",
      instruction: "王手をかけられたらどうする？",
      coach_text: "王手をかけられたら、\n放っておいたらどうなるかな？",
      quiz_options: ["必ず対応する！", "無視してもいい"],
      quiz_answer: 0,
      success_text: "その通り！王手をかけられたら必ず対応しないといけないんじゃ。放っておいたら王様を取られてしまうぞ！",
      fail_text: "王様を取られたら負けじゃぞ？\n放っておけるかな？",
    },
    // step5: 別の局面で王手をかける（ガイド付き）
    {
      id: "give_check_gold2",
      type: "move",
      board_sfen: "9/9/6k2/9/4G4/9/9/9/9 b - 1",
      instruction: "金で王手をかけよう！",
      coach_text: "今度は斜め前に王様がおるぞ。\n金は斜め前にも動けるんじゃ！",
      arrows: [{ from: [4, 4], to: [3, 5] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 5 },
      },
      result_sfen: "9/9/6k2/5G3/9/9/9/9/9 b - 1",
      success_text: "王手じゃ！\n金は前だけじゃなく\n斜め前からも王手がかけられるんじゃ。",
      fail_text: "王様がいる方向に金を動かそう。",
    },
    // step6: 自力で王手をかける（矢印なし）
    {
      id: "give_check_self",
      type: "move",
      board_sfen: "3k5/9/4G4/9/9/9/9/9/9 b - 1",
      instruction: "金で王手をかけてみよう！",
      coach_text: "今度はヒントなしじゃ。\n金をどこに動かせば\n王手がかかるかな？",
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 2, col: 4 }, to: { row: 1, col: 4 } },
      ],
      result_sfen: "3k5/3G5/9/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n王手の意味をマスターしたな！",
      fail_text: "王様を取れる場所に金を動かそう。",
    },
  ],
};
