import type { LessonData } from "../../lesson/types";

export const U2_ROOK_MOVE: LessonData = {
  id: "u2_rook_move",
  title: "飛車の動き",
  unit: "u2",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 飛車を前に進める（ガイド）
    {
      id: "rook_forward",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/4R4/9 b - 1",
      instruction: "飛車を前に進めよう！",
      coach_text: "これが飛車じゃ！\n縦横どこまでも動ける\n最強クラスの駒じゃよ。",
      arrows: [{ from: [7, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 7, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4R4/9/9/9/9/9 b - 1",
      success_text: "飛車は一気に前に進めるぞ！\nこれが「大駒」の力じゃ。",
      fail_text: "矢印の方向に飛車を進めてみよう。",
    },
    // step2: 飛車を横に動かす（ガイド）
    {
      id: "rook_sideways",
      type: "move",
      board_sfen: "9/9/9/9/4R4/9/9/9/9 b - 1",
      instruction: "飛車を横に動かそう！",
      coach_text: "飛車は横にもどこまでも\n動けるぞ！",
      arrows: [{ from: [4, 4], to: [4, 7] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 4, col: 7 },
      },
      result_sfen: "9/9/9/9/7R1/9/9/9/9 b - 1",
      success_text: "横にもスイスイ動けるな！\n縦横自在、それが飛車じゃ。",
      fail_text: "矢印の方向に飛車を動かしてみよう。",
    },
    // step3: 自力で縦に駒を取る
    {
      id: "rook_capture_vert",
      type: "move",
      board_sfen: "9/9/9/4p4/9/9/9/4R4/9 b - 1",
      instruction: "飛車で歩を取ろう！",
      coach_text: "遠くの歩も一気に取れるぞ！",
      correct_move: {
        from: { row: 7, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4R4/9/9/9/9/9 b P 1",
      success_text: "遠くの駒も一気に取れるのが\n飛車の強みじゃ！",
      fail_text: "歩のいるマスに飛車を進めよう。",
    },
    // step4: 自力で横に駒を取る
    {
      id: "rook_capture_horiz",
      type: "move",
      board_sfen: "9/9/9/9/2R4s1/9/9/9/9 b - 1",
      instruction: "飛車で銀を取ろう！",
      coach_text: "横の銀も一気に取れるぞ！",
      correct_move: {
        from: { row: 4, col: 2 },
        to: { row: 4, col: 7 },
      },
      result_sfen: "9/9/9/9/7R1/9/9/9/9 b S 1",
      success_text: "横にも長距離で取れたな！\n飛車は攻守ともに強力じゃ。",
      fail_text: "横に飛車を動かして銀を取ろう。",
    },
    // step5: クイズ - 飛車は味方の駒を飛び越えられる？
    {
      id: "rook_blocked_quiz",
      type: "quiz",
      board_sfen: "9/9/9/4P4/4R4/9/9/9/9 b - 1",
      instruction: "飛車は味方の歩を飛び越えられる？",
      coach_text: "飛車の前に味方の歩があるぞ。\n飛び越えられるかな？",
      quiz_options: ["飛び越えられない", "飛び越えられる"],
      quiz_answer: 0,
      success_text: "正解！飛車は味方の駒を\n飛び越えられないんじゃ。\n道を開けてあげる必要があるぞ。",
      fail_text: "飛車は他の駒を\n飛び越えることはできないぞ。",
    },
    // step6: 自力で飛車を使う
    {
      id: "rook_self_solve",
      type: "move",
      board_sfen: "9/9/2g6/9/9/9/9/2R6/9 b - 1",
      instruction: "飛車で金を取ろう！",
      coach_text: "仕上げじゃ！\n飛車の力を見せてやろう！",
      correct_move: {
        from: { row: 7, col: 2 },
        to: { row: 2, col: 2 },
      },
      result_sfen: "9/9/2R6/9/9/9/9/9/9 b G 1",
      success_text: "すばらしい！\n飛車の動きをマスターしたな！\n飛車は将棋で最も強い駒の一つじゃ。",
      fail_text: "金のいるマスに飛車を進めよう。",
    },
  ],
};
