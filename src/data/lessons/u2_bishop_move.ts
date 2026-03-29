import type { LessonData } from "../../lesson/types";

export const U2_BISHOP_MOVE: LessonData = {
  id: "u2_bishop_move",
  title: "角行の動き",
  unit: "u2",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 角を斜め前に進める（ガイド）
    {
      id: "bishop_diag_fr",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/2B6/9 b - 1",
      instruction: "角を斜めに動かそう！",
      coach_text: "これが角行じゃ！\n斜めにどこまでも動ける\nもう一つの大駒じゃよ。",
      arrows: [{ from: [7, 2], to: [4, 5] }],
      correct_move: {
        from: { row: 7, col: 2 },
        to: { row: 4, col: 5 },
      },
      result_sfen: "9/9/9/9/5B3/9/9/9/9 b - 1",
      success_text: "角は斜めに一気に動けるぞ！",
      fail_text: "矢印の方向に角を動かしてみよう。",
    },
    // step2: 角を別の斜めに動かす（ガイド）
    {
      id: "bishop_diag_fl",
      type: "move",
      board_sfen: "9/9/9/9/5B3/9/9/9/9 b - 1",
      instruction: "角を反対の斜めに動かそう！",
      coach_text: "角は4つの斜め方向すべてに\n動けるぞ！",
      arrows: [{ from: [4, 5], to: [2, 3] }],
      correct_move: {
        from: { row: 4, col: 5 },
        to: { row: 2, col: 3 },
      },
      result_sfen: "9/9/3B5/9/9/9/9/9/9 b - 1",
      success_text: "反対の斜めにもバッチリじゃ！",
      fail_text: "矢印の方向に角を動かしてみよう。",
    },
    // step3: 自力で角が歩を取る
    {
      id: "bishop_capture",
      type: "move",
      board_sfen: "9/9/9/5p3/9/9/2B6/9/9 b - 1",
      instruction: "角で歩を取ろう！",
      coach_text: "遠くの歩も斜めなら\n一気に取れるぞ！",
      correct_move: {
        from: { row: 6, col: 2 },
        to: { row: 3, col: 5 },
      },
      result_sfen: "9/9/9/5B3/9/9/9/9/9 b P 1",
      success_text: "斜めに長距離で取れたな！\nこれが角の力じゃ。",
      fail_text: "歩のいるマスに角を斜めに動かそう。",
    },
    // step4: クイズ - 角が動けない方向は？
    {
      id: "bishop_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/4B4/9/9/9/9 b - 1",
      instruction: "角が動けない方向は？",
      coach_text: "角は斜めに強いが、\n動けない方向があるぞ。",
      quiz_options: ["縦と横", "斜め"],
      quiz_answer: 0,
      success_text: "正解！角は縦横には動けない。\n斜め専門の駒じゃ！\n飛車と角で補い合うんじゃよ。",
      fail_text: "角は斜めにしか動けないぞ。",
    },
    // step5: 自力で角が金を取る
    {
      id: "bishop_capture_gold",
      type: "move",
      board_sfen: "9/9/9/9/3g5/9/9/6B2/9 b - 1",
      instruction: "角で金を取ろう！",
      coach_text: "角の斜めの力で\n金を取ってみよう！",
      correct_move: {
        from: { row: 7, col: 6 },
        to: { row: 4, col: 3 },
      },
      result_sfen: "9/9/9/9/3B5/9/9/9/9 b G 1",
      success_text: "遠くの金も斜めで取れたな！",
      fail_text: "金のいるマスに角を斜めに動かそう。",
    },
    // step6: 自力で角が銀を取る
    {
      id: "bishop_finale",
      type: "move",
      board_sfen: "9/9/5s3/9/9/9/1B7/9/9 b - 1",
      instruction: "角で銀を取って仕上げ！",
      coach_text: "仕上げじゃ！\n角の力を見せてやろう！",
      correct_move: {
        from: { row: 6, col: 1 },
        to: { row: 2, col: 5 },
      },
      result_sfen: "9/9/5B3/9/9/9/9/9/9 b S 1",
      success_text: "すばらしい！\n角行の動きをマスターしたな！\n飛車と角、2つの大駒は\n将棋の最強の武器じゃ。",
      fail_text: "銀のいるマスに角を斜めに動かそう。",
    },
  ],
};
