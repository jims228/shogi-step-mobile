import type { LessonData } from "../../lesson/types";

export const U2_SILVER_MOVE: LessonData = {
  id: "u2_silver_move",
  title: "銀の動き",
  unit: "u2",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 銀を前に進める（ガイド）
    {
      id: "silver_forward",
      type: "move",
      board_sfen: "9/9/9/9/9/4S4/9/9/9 b - 1",
      instruction: "銀を前に進めよう！",
      coach_text: "これが銀じゃ。\n銀は5方向に動けるぞ！\nまずは前に進めてみよう。",
      arrows: [{ from: [5, 4], to: [4, 4] }],
      correct_move: {
        from: { row: 5, col: 4 },
        to: { row: 4, col: 4 },
      },
      result_sfen: "9/9/9/9/4S4/9/9/9/9 b - 1",
      success_text: "そうじゃ！銀は前に進めるぞ。",
      fail_text: "矢印の方向に銀を進めてみよう。",
    },
    // step2: 銀を斜め前に進める（ガイド）
    {
      id: "silver_diag_forward",
      type: "move",
      board_sfen: "9/9/9/9/9/4S4/9/9/9 b - 1",
      instruction: "銀を斜め前に動かそう！",
      coach_text: "銀は斜め前にも動けるぞ！",
      arrows: [{ from: [5, 4], to: [4, 5] }],
      correct_move: {
        from: { row: 5, col: 4 },
        to: { row: 4, col: 5 },
      },
      result_sfen: "9/9/9/9/5S3/9/9/9/9 b - 1",
      success_text: "銀は斜め前にも動けるんじゃ！",
      fail_text: "矢印の方向に銀を動かしてみよう。",
    },
    // step3: 銀を斜め後ろに動かす（ガイド - 重要ポイント）
    {
      id: "silver_diag_back",
      type: "move",
      board_sfen: "9/9/9/9/4S4/9/9/9/9 b - 1",
      instruction: "銀を斜め後ろに下げよう！",
      coach_text: "実は銀は斜め後ろにも\n動けるんじゃ！\nこれが銀の特徴じゃよ。",
      arrows: [{ from: [4, 4], to: [5, 5] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 5, col: 5 },
      },
      success_text: "銀は斜め後ろにも動ける！\nこれが金との大きな違いじゃ。",
      fail_text: "矢印の方向に銀を動かしてみよう。",
    },
    // step4: クイズ - 銀が動けない方向は？
    {
      id: "silver_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/4S4/9/9/9/9 b - 1",
      instruction: "銀が動けない方向は？",
      coach_text: "銀は5方向に動けるが、\n動けない方向があるぞ。\nどこじゃろう？",
      quiz_options: ["横と真後ろ", "斜め前", "斜め後ろ"],
      quiz_answer: 0,
      success_text: "正解！銀は横と真後ろには\n動けないんじゃ。\n金は横に動けるから、\nそこが金との違いじゃよ。",
      fail_text: "銀の5方向をよく思い出そう。\n前・斜め前×2・斜め後ろ×2じゃ。",
    },
    // step5: 銀で歩を取る
    {
      id: "silver_capture",
      type: "move",
      board_sfen: "9/9/9/9/4p4/4S4/9/9/9 b - 1",
      instruction: "銀で歩を取ろう！",
      coach_text: "前に相手の歩がおるぞ。\n銀で取ってみよう！",
      arrows: [{ from: [5, 4], to: [4, 4] }],
      correct_move: {
        from: { row: 5, col: 4 },
        to: { row: 4, col: 4 },
      },
      success_text: "よくできた！\n銀で相手の駒を取れたな。",
      fail_text: "相手の歩がいるマスに銀を進めよう。",
    },
    // step6: 自力で銀を使って王手
    {
      id: "silver_self_solve",
      type: "move",
      board_sfen: "9/9/4k4/9/3SG4/9/9/9/9 b - 1",
      instruction: "銀で王手をかけてみよう！",
      coach_text: "仕上げじゃ！\n銀をどこに動かせば\n王手がかかるかな？",
      correct_move: {
        from: { row: 4, col: 3 },
        to: { row: 3, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 4, col: 3 }, to: { row: 3, col: 4 } },
      ],
      result_sfen: "9/9/4k4/3S5/4G4/9/9/9/9 b - 1",
      success_text: "すばらしい！\n銀の動きをマスターしたな！",
      fail_text: "銀を動かして、王様を取れる場所を探そう。",
    },
  ],
};
