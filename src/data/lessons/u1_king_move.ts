import type { LessonData } from "../../lesson/types";

export const U1_KING_MOVE: LessonData = {
  id: "u1_king_move",
  title: "王の動き",
  unit: "u1",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 王を前に進める（ガイド付き）
    {
      id: "king_forward",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/9/4K4 b - 1",
      instruction: "王様を前に進めてみよう！",
      coach_text: "これが王様じゃ。\n王様は全方向に1マス動けるぞ！\nまずは前に進めてみよう。",
      arrows: [{ from: [8, 4], to: [7, 4] }],
      correct_move: {
        from: { row: 8, col: 4 },
        to: { row: 7, col: 4 },
      },
      result_sfen: "9/9/9/9/9/9/9/4K4/9 b - 1",
      success_text: "そうじゃ！王様は前に進めるぞ。",
      fail_text: "矢印の方向に王様を進めてみよう。",
    },
    // step2: 王を斜めに動かす（全方向を体感）
    {
      id: "king_diagonal",
      type: "move",
      board_sfen: "9/9/9/9/4K4/9/9/9/9 b - 1",
      instruction: "王様を斜めに動かしてみよう！",
      coach_text: "王様は斜めにも動けるぞ！\n歩や金にはできない動きじゃ。",
      arrows: [{ from: [4, 4], to: [3, 3] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 3 },
      },
      result_sfen: "9/9/9/3K5/9/9/9/9/9 b - 1",
      success_text: "王様は斜めにも動ける！\n全部で8方向に動けるんじゃ。",
      fail_text: "矢印の方向に王様を動かしてみよう。",
    },
    // step3: 王で相手の歩を取る
    {
      id: "king_capture",
      type: "move",
      board_sfen: "9/9/9/4p4/4K4/9/9/9/9 b - 1",
      instruction: "王様で相手の歩を取ってみよう！",
      coach_text: "前に相手の歩がおるぞ。\n王様でも駒を取れるんじゃ！",
      arrows: [{ from: [4, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4K4/9/9/9/9/9 b P 1",
      success_text: "王様でも駒を取れるんじゃ！",
      fail_text: "相手の歩がいるマスに王様を進めてみよう。",
    },
    // step4: クイズ - 王様が取られたら？
    {
      id: "king_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/4K4/9/9/9/9 b - 1",
      instruction: "王様が取られたらどうなる？",
      coach_text: "王様はとても大事な駒じゃ。\n王様が取られたらどうなるかな？",
      quiz_options: ["負け！", "何も起きない"],
      quiz_answer: 0,
      success_text: "その通り！\n王様が取られたら負けじゃ。\nだから王様は絶対に守るんじゃ！",
      fail_text: "王様は一番大事な駒じゃぞ？",
    },
    // step5: 王様が狙われている！逃げよう（ガイド付き）
    {
      id: "king_escape",
      type: "move",
      board_sfen: "4r4/9/9/9/4K4/9/9/9/9 b - 1",
      instruction: "王様が狙われている！逃げよう！",
      coach_text: "相手の飛車が王様を狙っておるぞ！\n同じ列にいたら取られてしまう。\n横に逃げよう！",
      arrows: [{ from: [4, 4], to: [4, 3] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 4, col: 3 },
      },
      result_sfen: "4r4/9/9/9/3K5/9/9/9/9 b - 1",
      success_text: "よし！安全な場所に逃げられたな。\n王様を守るのが大事じゃ！",
      fail_text: "飛車の利きから逃げよう。\n横に動いてみよう！",
    },
    // step6: 自力で逃げる（矢印なし）
    {
      id: "king_escape_self",
      type: "move",
      board_sfen: "9/4r4/9/9/4K4/9/9/9/9 b - 1",
      instruction: "王様を安全な場所に逃がそう！",
      coach_text: "また飛車に狙われておるぞ！\n今度は自分で考えて逃げてみよう。",
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 4, col: 5 },
      },
      result_sfen: "9/4r4/9/9/5K3/9/9/9/9 b - 1",
      success_text: "すばらしい！\n王様を守る動きをマスターしたな！",
      fail_text: "飛車と同じ列にいると危ないぞ。\n横に逃げてみよう！",
    },
  ],
};
