import type { LessonData } from "../../lesson/types";

export const U2_BIG_PIECES: LessonData = {
  id: "u2_big_pieces",
  title: "大駒で攻めよう",
  unit: "u2",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 飛車で取る（ガイド）
    {
      id: "rook_practice",
      type: "move",
      board_sfen: "9/9/4p4/9/9/9/9/4R4/9 b - 1",
      instruction: "飛車で歩を取ろう！",
      coach_text: "飛車と角、2つの大駒を\n使いこなす練習じゃ！\nまずは飛車で歩を取ろう。",
      arrows: [{ from: [7, 4], to: [2, 4] }],
      correct_move: {
        from: { row: 7, col: 4 },
        to: { row: 2, col: 4 },
      },
      result_sfen: "9/9/4R4/9/9/9/9/9/9 b P 1",
      success_text: "飛車は縦に一気に取れるな！",
      fail_text: "歩のいるマスに飛車を進めよう。",
    },
    // step2: 角で取る（ガイド）
    {
      id: "bishop_practice",
      type: "move",
      board_sfen: "9/9/9/9/4p4/9/9/1B7/9 b - 1",
      instruction: "角で歩を取ろう！",
      coach_text: "次は角じゃ！\n斜めに一気に取ろう。",
      arrows: [{ from: [7, 1], to: [4, 4] }],
      correct_move: {
        from: { row: 7, col: 1 },
        to: { row: 4, col: 4 },
      },
      result_sfen: "9/9/9/9/4B4/9/9/9/9 b P 1",
      success_text: "角は斜めに一気に取れるな！",
      fail_text: "歩のいるマスに角を斜めに進めよう。",
    },
    // step3: 自力で飛車を使う
    {
      id: "rook_self",
      type: "move",
      board_sfen: "9/9/9/9/2g4R1/9/9/9/9 b - 1",
      instruction: "飛車で金を取ろう！",
      coach_text: "飛車で横の金を取ってみよう！",
      correct_move: {
        from: { row: 4, col: 7 },
        to: { row: 4, col: 2 },
      },
      result_sfen: "9/9/9/9/2R6/9/9/9/9 b G 1",
      success_text: "横からも一気に取れたな！",
      fail_text: "金のいるマスに飛車を横に動かそう。",
    },
    // step4: 自力で角を使う
    {
      id: "bishop_self",
      type: "move",
      board_sfen: "9/9/9/3s5/9/9/6B2/9/9 b - 1",
      instruction: "角で銀を取ろう！",
      coach_text: "角の斜めで銀を取ろう！",
      correct_move: {
        from: { row: 6, col: 6 },
        to: { row: 3, col: 3 },
      },
      result_sfen: "9/9/9/3B5/9/9/9/9/9 b S 1",
      success_text: "角で遠くの銀も取れたな！",
      fail_text: "銀のいるマスに角を斜めに動かそう。",
    },
    // step5: クイズ - 大駒はなぜ強い？
    {
      id: "big_pieces_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/3RB4/9/9/9/9 b - 1",
      instruction: "大駒が強い理由は？",
      coach_text: "飛車と角はなぜ\n「大駒」と呼ばれるんじゃろう？",
      quiz_options: ["遠くまで動ける", "全方向に動ける", "駒を飛び越えられる"],
      quiz_answer: 0,
      success_text: "正解！遠くまで動けるから\n攻めも守りも強力なんじゃ。\n大駒を取られないように\n大事に使うんじゃよ！",
      fail_text: "大駒は何マスも先まで動けるのが\n一番の強みじゃ。",
    },
    // step6: 飛車で仕上げ
    {
      id: "big_pieces_finale",
      type: "move",
      board_sfen: "9/9/7g1/9/9/9/9/1B5R1/9 b - 1",
      instruction: "飛車で金を取ろう！",
      coach_text: "仕上げじゃ！\n大駒の力で金を取ろう。",
      correct_move: {
        from: { row: 7, col: 7 },
        to: { row: 2, col: 7 },
      },
      result_sfen: "9/9/7R1/9/9/9/9/1B7/9 b G 1",
      success_text: "すばらしい！\n大駒の使い方がわかってきたな！\n飛車は縦横、角は斜め。\nこの2つを使いこなそう！",
      fail_text: "金のいるマスに飛車を進めよう。",
    },
  ],
};
