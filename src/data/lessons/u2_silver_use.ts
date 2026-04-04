import type { LessonData } from "../../lesson/types";

export const U2_SILVER_USE: LessonData = {
  id: "u2_silver_use",
  title: "ここまでの復習",
  unit: "u2",
  type: "review",
  reward_xp: 10,
  steps: [
    // step1: 歩を前に進める（復習）
    {
      id: "review_pawn",
      type: "move",
      board_sfen: "9/9/9/9/9/9/4P4/9/9 b - 1",
      instruction: "歩を前に進めよう！",
      coach_text: "歩・金・王・銀の復習じゃ！\nまずは歩を前に1マス進めよう。",
      arrows: [{ from: [6, 4], to: [5, 4] }],
      correct_move: {
        from: { row: 6, col: 4 },
        to: { row: 5, col: 4 },
      },
      success_text: "歩は前に1マスじゃな！",
      fail_text: "歩は前に1マス進めるぞ。",
    },
    // step2: 金で相手の歩を取る（復習）
    {
      id: "review_gold",
      type: "move",
      board_sfen: "9/9/9/4p4/4G4/9/9/9/9 b - 1",
      instruction: "金で歩を取ろう！",
      coach_text: "金は6方向に動けるぞ。\n前の歩を取ってみよう！",
      arrows: [{ from: [4, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 4 },
      },
      success_text: "金は前にも横にも動ける強い駒じゃ！",
      fail_text: "歩のいるマスに金を進めよう。",
    },
    // step3: 王を逃がす（復習）
    {
      id: "review_king",
      type: "move",
      board_sfen: "4r4/9/9/9/4K4/9/9/9/9 b - 1",
      instruction: "王様を安全な場所に逃がそう！",
      coach_text: "飛車に狙われておるぞ！\n同じ列から逃げよう。",
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 4, col: 5 },
      },
      correct_moves_alt: [
        { from: { row: 4, col: 4 }, to: { row: 3, col: 3 } },
        { from: { row: 4, col: 4 }, to: { row: 3, col: 5 } },
        { from: { row: 4, col: 4 }, to: { row: 4, col: 3 } },
        { from: { row: 4, col: 4 }, to: { row: 5, col: 3 } },
        { from: { row: 4, col: 4 }, to: { row: 5, col: 5 } },
      ],
      success_text: "王様を守れたな！\n王は全方向に動けるぞ。",
      fail_text: "飛車と同じ列にいると危ないぞ。",
    },
    // step4: 銀を斜め前に動かす（復習）
    {
      id: "review_silver",
      type: "move",
      board_sfen: "9/9/9/5p3/4S4/9/9/9/9 b - 1",
      instruction: "銀で歩を取ろう！",
      coach_text: "銀は斜め前にも動けるぞ。\n歩を取ってみよう！",
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 5 },
      },
      success_text: "銀の斜め前の動きが活きたな！",
      fail_text: "斜め前の歩に銀を動かそう。",
    },
    // step5: クイズ - 横に動けないのは？
    {
      id: "review_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/3G1S3/9/9/9/9 b - 1",
      instruction: "横に動けないのはどっち？",
      coach_text: "金と銀、横に動けないのはどっちじゃ？",
      quiz_options: ["銀", "金"],
      quiz_answer: 0,
      success_text: "正解！銀は横には動けないんじゃ。その代わり斜め後ろに動けるぞ。",
      fail_text: "金は横に動けるぞ。銀は動けないんじゃ。",
    },
    // step6: 自力で銀で王手
    {
      id: "review_silver_check",
      type: "move",
      board_sfen: "9/9/4k4/9/3SG4/9/9/9/9 b - 1",
      instruction: "銀で王手をかけよう！",
      coach_text: "仕上げじゃ！銀をどこに動かせば王手がかかるかな？",
      correct_move: {
        from: { row: 4, col: 3 },
        to: { row: 3, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 4, col: 3 }, to: { row: 3, col: 4 } },
      ],
      success_text: "すばらしい！歩・金・王・銀の動きはバッチリじゃ！",
      fail_text: "銀を動かして王様を取れる場所を探そう。",
    },
  ],
};
