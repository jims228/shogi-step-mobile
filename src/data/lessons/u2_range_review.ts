import type { LessonData } from "../../lesson/types";

export const U2_RANGE_REVIEW: LessonData = {
  id: "u2_range_review",
  title: "飛角桂香のまとめ",
  unit: "u2",
  type: "review",
  reward_xp: 10,
  steps: [
    // step1: 飛車で取る
    {
      id: "range_rook",
      type: "move",
      board_sfen: "9/9/9/4p4/9/9/9/4R4/9 b - 1",
      instruction: "飛車で歩を取ろう！",
      coach_text: "飛車・角・桂馬・香車の復習じゃ！まずは飛車で歩を取ろう。",
      correct_move: {
        from: { row: 7, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4R4/9/9/9/9/9 b P 1",
      success_text: "飛車は縦横にどこまでも動けるぞ！",
      fail_text: "歩のいるマスに飛車を進めよう。",
    },
    // step2: 角で取る
    {
      id: "range_bishop",
      type: "move",
      board_sfen: "9/9/9/5p3/9/9/2B6/9/9 b - 1",
      instruction: "角で歩を取ろう！",
      coach_text: "次は角じゃ！斜めに進んで歩を取ろう。",
      correct_move: {
        from: { row: 6, col: 2 },
        to: { row: 3, col: 5 },
      },
      result_sfen: "9/9/9/5B3/9/9/9/9/9 b P 1",
      success_text: "角は斜めにどこまでも動けるな！",
      fail_text: "歩のいるマスに角を斜めに進めよう。",
    },
    // step3: 桂馬で取る
    {
      id: "range_knight",
      type: "move",
      board_sfen: "9/9/9/9/5g3/9/4N4/9/9 b - 1",
      instruction: "桂馬で金を取ろう！",
      coach_text: "桂馬は前に2マス、横に1マス跳べるぞ！",
      correct_move: {
        from: { row: 6, col: 4 },
        to: { row: 4, col: 5 },
      },
      result_sfen: "9/9/9/9/5N3/9/9/9/9 b G 1",
      success_text: "桂馬は唯一駒を飛び越えられる駒じゃ！",
      fail_text: "桂馬は前に2、横に1の場所に跳べるぞ。",
    },
    // step4: 香車で取る
    {
      id: "range_lance",
      type: "move",
      board_sfen: "9/9/9/4p4/9/9/4L4/9/9 b - 1",
      instruction: "香車で歩を取ろう！",
      coach_text: "香車は前にまっすぐ進むぞ！",
      correct_move: {
        from: { row: 6, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4L4/9/9/9/9/9 b P 1",
      success_text: "香車は前にまっすぐ、シンプルだが強力じゃ！",
      fail_text: "歩のいるマスに香車を進めよう。",
    },
    // step5: クイズ - 駒を飛び越えられるのは？
    {
      id: "range_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/3RNBL1/9/9/9/9 b - 1",
      instruction: "他の駒を飛び越えられるのは？",
      coach_text: "飛車・桂馬・角・香車の中で、他の駒を飛び越えられるのはどれじゃ？",
      quiz_options: ["桂馬", "飛車", "香車"],
      quiz_answer: 0,
      success_text: "正解！桂馬だけが他の駒を飛び越えられるんじゃ！",
      fail_text: "「跳ぶ」ことができるのは桂馬だけじゃよ。",
    },
    // step6: 飛車で仕上げ
    {
      id: "range_finale",
      type: "move",
      board_sfen: "9/9/7g1/9/9/9/9/1B5R1/9 b - 1",
      instruction: "飛車で金を取ろう！",
      coach_text: "仕上げじゃ！大駒の力で金を取ろう。",
      correct_move: {
        from: { row: 7, col: 7 },
        to: { row: 2, col: 7 },
      },
      result_sfen: "9/9/7R1/9/9/9/9/1B7/9 b G 1",
      success_text: "すばらしい！飛車・角・桂馬・香車の動きはバッチリじゃ！",
      fail_text: "金のいるマスに飛車を進めよう。",
    },
  ],
};
