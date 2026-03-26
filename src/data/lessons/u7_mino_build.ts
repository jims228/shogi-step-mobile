import type { LessonData } from "../../lesson/types";

export const U7_MINO_BUILD: LessonData = {
  id: "u7_mino_build",
  title: "美濃囲いを組んでみよう",
  unit: "u7",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 美濃囲いとは
    {
      id: "quiz_what_is_mino",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "美濃囲いとは？",
      coach_text: "美濃囲いは振り飛車で\nよく使われる囲いじゃ。\nどんな特徴があるかな？",
      quiz_options: ["横からの攻めに強い囲い", "上からの攻めに強い囲い", "端からの攻めに強い囲い"],
      quiz_answer: 0,
      success_text: "正解！美濃囲いは\n横からの攻めに強いのが\n最大の特徴じゃ。",
      fail_text: "美濃囲いは横からの攻めに\n強い囲いじゃよ。",
    },
    // step2: 王を移動
    {
      id: "mino_king_move",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/9/4K4 b - 1",
      instruction: "王を左に移動しよう！",
      coach_text: "美濃囲いも\nまず王を移動させるぞ。\n王を左に動かそう！",
      arrows: [{ from: [8, 4], to: [8, 0] }],
      correct_move: {
        from: { row: 8, col: 4 },
        to: { row: 8, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 8, col: 4 }, to: { row: 7, col: 3 } },
      ],
      success_text: "よし！美濃囲いの位置へ\n向かうぞ。",
      fail_text: "王を左方向に動かそう。",
    },
    // step3: 金を王の横に配置
    {
      id: "mino_gold",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/9/1K7 b G 1",
      instruction: "金を王の横に打とう！",
      coach_text: "美濃囲いでは金が\n王の横を守るぞ。\n金を王の右横に打とう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [8, 2] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 8, col: 2 },
      },
      result_sfen: "9/9/9/9/9/9/9/9/1KG6 b - 1",
      success_text: "金が王の横を守っておるぞ！\n横からの攻めに強い形じゃ。",
      fail_text: "金を王の横に打とう。",
    },
    // step4: 銀を金の上に配置
    {
      id: "mino_silver",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/9/1KG6 b S 1",
      instruction: "銀を金の上に打とう！",
      coach_text: "次は銀じゃ。\n金の上に銀を配置して\n守りを固めるぞ。",
      hand_pieces: { gi: 1 },
      arrows: [{ from: "hand_gi", to: [7, 2] }],
      correct_move: {
        from: { hand: "gi" },
        to: { row: 7, col: 2 },
      },
      result_sfen: "9/9/9/9/9/9/9/2S6/1KG6 b - 1",
      success_text: "銀が金の上を守って\n連携が取れたぞ！",
      fail_text: "金の上に銀を打とう。",
    },
    // step5: クイズ - 美濃の強み
    {
      id: "quiz_mino_strength",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/2S6/1KG6 b - 1",
      instruction: "美濃囲いが特に強いのは？",
      coach_text: "美濃囲いの形ができたぞ。\nこの囲いが特に強いのは\nどんな攻めに対してかな？",
      quiz_options: ["横からの飛車の攻め", "上からの攻め", "端攻め"],
      quiz_answer: 0,
      success_text: "正解！金が横にいるから\n飛車の横攻めに特に強いぞ。\n振り飛車の定番囲いじゃ。",
      fail_text: "金が横にいるから\n横からの攻めに強いんじゃ。",
    },
    // step6: 完成形を確認
    {
      id: "mino_complete",
      type: "tap_square",
      board_sfen: "9/9/9/9/9/9/9/2S6/1KG6 b - 1",
      instruction: "美濃囲いの完成じゃ！\n王の位置をタップしよう。",
      coach_text: "美濃囲いの完成じゃ！\n金が横、銀が上。\nシンプルだが強い形じゃぞ。\n王をタップして確認じゃ。",
      correct_square: { row: 8, col: 1 },
      success_text: "すばらしい！\n美濃囲いをマスターしたぞ。\n振り飛車を指すなら\nまず覚える囲いじゃ！",
      fail_text: "王の位置をタップしよう。",
    },
  ],
};
