import type { LessonData } from "../../lesson/types";

export const U2_LANCE_MOVE: LessonData = {
  id: "u2_lance_move",
  title: "香車の動き",
  unit: "u2",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 香車を前に1マス進める（ガイド）
    {
      id: "lance_forward_1",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/4L4/9 b - 1",
      instruction: "香車を前に進めよう！",
      coach_text: "これが香車じゃ！\n前にまっすぐ進む駒じゃよ。\nまずは1マス進めてみよう。",
      arrows: [{ from: [7, 4], to: [6, 4] }],
      correct_move: {
        from: { row: 7, col: 4 },
        to: { row: 6, col: 4 },
      },
      success_text: "香車は前に進めるぞ！",
      fail_text: "矢印の方向に香車を進めてみよう。",
    },
    // step2: 香車を前に複数マス進める（ガイド）
    {
      id: "lance_forward_multi",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/4L4/9 b - 1",
      instruction: "香車を一気に前に進めよう！",
      coach_text: "香車は飛車のように\n前にどこまでも進めるぞ！",
      arrows: [{ from: [7, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 7, col: 4 },
        to: { row: 3, col: 4 },
      },
      success_text: "一気に前に進めたな！\n香車は前にどこまでも行けるぞ。",
      fail_text: "矢印の方向に香車を進めてみよう。",
    },
    // step3: 自力で香車が歩を取る
    {
      id: "lance_capture",
      type: "move",
      board_sfen: "9/9/9/4p4/9/9/4L4/9/9 b - 1",
      instruction: "香車で歩を取ろう！",
      coach_text: "前にまっすぐ進んで\n歩を取ろう！",
      correct_move: {
        from: { row: 6, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4L4/9/9/9/9/9 b P 1",
      success_text: "まっすぐ進んで取れたな！",
      fail_text: "歩のいるマスに香車を進めよう。",
    },
    // step4: クイズ - 香車の動き
    {
      id: "lance_direction_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/4L4/9/9/9/9 b - 1",
      instruction: "香車はどう動ける？",
      coach_text: "香車の動きを確認じゃ。\nどんな動き方をするかな？",
      quiz_options: ["前にまっすぐだけ", "前と後ろ", "斜めにも動ける"],
      quiz_answer: 0,
      success_text: "正解！香車は前にまっすぐ\n進むことしかできないんじゃ。\n後ろにも横にも動けないぞ。",
      fail_text: "香車は前にしか進めないぞ。",
    },
    // step5: クイズ - 香車は駒を飛び越えられる？
    {
      id: "lance_blocked_quiz",
      type: "quiz",
      board_sfen: "9/9/9/4p4/9/4P4/9/4L4/9 b - 1",
      instruction: "香車は味方の歩を飛び越えられる？",
      coach_text: "香車の前に味方の歩があるぞ。\n飛び越えて相手の歩を取れるかな？",
      quiz_options: ["飛び越えられない", "飛び越えられる"],
      quiz_answer: 0,
      success_text: "正解！香車は駒を飛び越えられない。\n飛び越えられるのは桂馬だけじゃ！",
      fail_text: "駒を飛び越えられるのは\n桂馬だけじゃよ。",
    },
    // step6: 自力で香車を使う
    {
      id: "lance_finale",
      type: "move",
      board_sfen: "9/9/6s2/9/9/9/9/9/6L2 b - 1",
      instruction: "香車で銀を取って仕上げ！",
      coach_text: "仕上げじゃ！\n香車でまっすぐ進んで\n銀を取ろう！",
      correct_move: {
        from: { row: 8, col: 6 },
        to: { row: 2, col: 6 },
      },
      result_sfen: "9/9/6L2/9/9/9/9/9/9 b S 1",
      success_text: "すばらしい！\n香車の動きをマスターしたな！\n前にまっすぐ、シンプルだが\n強力な駒じゃ。",
      fail_text: "銀のいるマスに香車を進めよう。",
    },
  ],
};
