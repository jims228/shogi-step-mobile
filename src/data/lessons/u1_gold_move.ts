import type { LessonData } from "../../lesson/types";

export const U1_GOLD_MOVE: LessonData = {
  id: "u1_gold_move",
  title: "金の動き",
  unit: "u1",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 金を前に進める（ガイド付き）
    {
      id: "gold_forward",
      type: "move",
      board_sfen: "9/9/9/9/9/9/4G4/9/9 b - 1",
      instruction: "金を前に進めてみよう！",
      coach_text: "これが金じゃ。\n金は6方向に動けるぞ！\nまずは前に進めてみよう。",
      arrows: [{ from: [6, 4], to: [5, 4] }],
      correct_move: {
        from: { row: 6, col: 4 },
        to: { row: 5, col: 4 },
      },
      result_sfen: "9/9/9/9/9/4G4/9/9/9 b - 1",
      success_text: "そうじゃ！金は前に進めるぞ。",
      fail_text: "矢印の方向に金を進めてみよう。",
    },
    // step2: 金で相手の歩を取る
    {
      id: "gold_capture",
      type: "move",
      board_sfen: "9/9/9/9/4p4/4G4/9/9/9 b - 1",
      instruction: "金で相手の歩を取ってみよう！",
      coach_text: "前に相手の歩がおるぞ。\n金で取ってみよう！",
      arrows: [{ from: [5, 4], to: [4, 4] }],
      correct_move: {
        from: { row: 5, col: 4 },
        to: { row: 4, col: 4 },
      },
      result_sfen: "9/9/9/9/4G4/9/9/9/9 b P 1",
      success_text: "よくできた！\n金で相手の駒を取れたな。",
      fail_text: "相手の歩がいるマスに金を進めてみよう。",
    },
    // step3: 金は横にも動ける
    {
      id: "gold_sideways",
      type: "move",
      board_sfen: "9/9/9/9/9/4G4/9/9/9 b - 1",
      instruction: "金を横に動かしてみよう！",
      coach_text: "金は前だけじゃなく、横にも動けるぞ！",
      arrows: [{ from: [5, 4], to: [5, 5] }],
      correct_move: {
        from: { row: 5, col: 4 },
        to: { row: 5, col: 5 },
      },
      result_sfen: "9/9/9/9/9/5G3/9/9/9 b - 1",
      success_text: "金は横にも動けるんじゃ！",
      fail_text: "矢印の方向に金を動かしてみよう。",
    },
    // step4: 金は斜め後ろには動けない（重要なポイント）
    {
      id: "gold_cant_go_diag_back",
      type: "move",
      board_sfen: "9/9/9/4p4/4G4/3p5/9/9/9 b - 1",
      instruction: "金で取れる駒を取ろう！",
      coach_text: "2つの相手の歩があるぞ。\n金は斜め後ろには動けない！\nどっちが取れるかな？",
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4G4/9/3p5/9/9/9 b P 1",
      success_text: "正解！金は前の歩は取れるけど、\n斜め後ろの歩は取れないんじゃ。",
      fail_text: "金が動ける方向を考えてみよう。\n斜め後ろには動けないぞ。",
    },
    // step5: クイズ - 金が動けない方向は？
    {
      id: "gold_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/4G4/9/9/9/9 b - 1",
      instruction: "金が動けない方向は？",
      coach_text: "金は6方向に動けるが、\n動けない方向が2つあるぞ。\nどこじゃ？",
      quiz_options: ["斜め後ろ", "横", "前"],
      quiz_answer: 0,
      success_text: "その通り！\n金は斜め後ろだけ動けないんじゃ。\n6方向に動ける強い駒じゃよ。",
      fail_text: "もう一度考えてみよう。\n金が動けないのはどこかな？",
    },
    // step6: 自力で金を使って王手（矢印なし）
    {
      id: "gold_self_solve",
      type: "move",
      board_sfen: "4k4/9/4PG3/9/9/9/9/9/9 b - 1",
      instruction: "金で王手をかけてみよう！",
      coach_text: "金を使って相手の王様に王手をかけよう！\nどこに動かせばいいかな？",
      arrows: [{ from: [2, 5], to: [1, 4] }],
      correct_move: {
        from: { row: 2, col: 5 },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/4G4/4P4/9/9/9/9/9/9 b - 1",
      success_text: "すごい！金で王手じゃ！\n金の動きをマスターしたな。",
      fail_text: "王様に王手をかけられる場所を探してみよう。",
    },
  ],
};
