import type { LessonData } from "../../lesson/types";

export const U2_REVIEW: LessonData = {
  id: "u2_review",
  title: "Unit 2 まとめ",
  unit: "u2",
  type: "review",
  reward_xp: 15,
  steps: [
    // step1: 銀で取る
    {
      id: "review_silver",
      type: "move",
      board_sfen: "9/9/9/5p3/4S4/9/9/9/9 b - 1",
      instruction: "銀で歩を取ろう！",
      coach_text: "Unit 2の復習じゃ！\n銀の斜めの動きで取ろう。",
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 5 },
      },
      result_sfen: "9/9/9/5S3/9/9/9/9/9 b P 1",
      success_text: "銀の斜め前、バッチリじゃ！",
      fail_text: "銀の斜め前の動きで取ろう。",
    },
    // step2: 飛車で取る
    {
      id: "review_rook",
      type: "move",
      board_sfen: "9/9/9/4g4/9/9/9/4R4/9 b - 1",
      instruction: "飛車で金を取ろう！",
      coach_text: "飛車は縦にどこまでも行けるぞ！",
      correct_move: {
        from: { row: 7, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4R4/9/9/9/9/9 b G 1",
      success_text: "飛車で一気に取れたな！",
      fail_text: "金のいるマスに飛車を進めよう。",
    },
    // step3: 角で取る
    {
      id: "review_bishop",
      type: "move",
      board_sfen: "9/9/9/9/4p4/9/9/1B7/9 b - 1",
      instruction: "角で歩を取ろう！",
      coach_text: "角は斜めに進むぞ！",
      correct_move: {
        from: { row: 7, col: 1 },
        to: { row: 4, col: 4 },
      },
      result_sfen: "9/9/9/9/4B4/9/9/9/9 b P 1",
      success_text: "角で斜めに取れたな！",
      fail_text: "歩のいるマスに角を斜めに動かそう。",
    },
    // step4: 桂馬で取る
    {
      id: "review_knight",
      type: "move",
      board_sfen: "9/9/9/9/4p4/9/3N5/9/9 b - 1",
      instruction: "桂馬で歩を取ろう！",
      coach_text: "桂馬は跳んで取れるぞ！",
      correct_move: {
        from: { row: 6, col: 3 },
        to: { row: 4, col: 4 },
      },
      result_sfen: "9/9/9/9/4N4/9/9/9/9 b P 1",
      success_text: "桂馬でピョンと取れたな！",
      fail_text: "桂馬は前に2、横に1の場所に跳べるぞ。",
    },
    // step5: クイズ - 駒を飛び越えられるのは？
    {
      id: "review_jump_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/4N4/9/9/9/9 b - 1",
      instruction: "駒を飛び越えられるのはどれ？",
      coach_text: "たくさんの駒を覚えたな。\n飛び越えられる駒は\nどれじゃったかな？",
      quiz_options: ["桂馬", "飛車", "角", "香車"],
      quiz_answer: 0,
      success_text: "正解！桂馬だけが\n他の駒を飛び越えられるんじゃ！",
      fail_text: "駒を飛び越えられるのは\n桂馬だけじゃよ。",
    },
    // step6: 香車で仕上げ
    {
      id: "review_lance",
      type: "move",
      board_sfen: "9/9/9/4p4/9/9/9/4L4/9 b - 1",
      instruction: "香車で歩を取って仕上げ！",
      coach_text: "Unit 2の最後じゃ！\n香車でまっすぐ進んで取ろう！",
      correct_move: {
        from: { row: 7, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4L4/9/9/9/9/9 b P 1",
      success_text: "すばらしい！\nUnit 2をクリアしたぞ！\n全ての駒の動きを覚えたな。\nこれで将棋の基本はバッチリじゃ！",
      fail_text: "歩のいるマスに香車を進めよう。",
    },
  ],
};
