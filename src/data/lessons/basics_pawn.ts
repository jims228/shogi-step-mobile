import type { LessonData } from "../../lesson/types";

export const BASICS_PAWN_LESSON: LessonData = {
  id: "pawn",
  title: "歩の動かし方",
  unit: "basics",
  reward_xp: 10,
  steps: [
    {
      id: "tap_find_pawn",
      type: "tap_square",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "これが将棋の初期配置じゃ。先手の「歩」を1枚タップしてみよう。",
      coach_text: "下から3段目に並んでおるぞ。どれでもいいからタップじゃ！",
      correct_square: [
        { row: 6, col: 0 }, { row: 6, col: 1 }, { row: 6, col: 2 },
        { row: 6, col: 3 }, { row: 6, col: 4 }, { row: 6, col: 5 },
        { row: 6, col: 6 }, { row: 6, col: 7 }, { row: 6, col: 8 },
      ],
      success_text: "そうじゃ！これが歩じゃ。一番数の多い駒じゃよ。",
      fail_text: "下から3段目の駒をタップしてみよう。",
    },
    {
      id: "move_pawn_forward",
      type: "move",
      board_sfen: "9/9/9/9/9/9/4P4/9/9 b - 1",
      instruction: "歩を一つ前に進めましょう。",
      coach_text: "歩をタップして、進めたいマスをタップするんじゃ。",
      arrows: [{ from: [6, 4], to: [5, 4] }],
      correct_move: {
        from: { row: 6, col: 4 },
        to: { row: 5, col: 4 },
      },
      success_text: "正解！歩は前に1マス進めるんじゃ。",
      fail_text: "惜しい！歩は前に1マスだけ進めるぞ。",
    },
    {
      id: "move_pawn_capture",
      type: "move",
      board_sfen: "9/9/9/9/4p4/4P4/9/9/9 b - 1",
      instruction: "前にいる相手の歩を取ってみよう！",
      coach_text: "歩は前に進んで相手の駒を取れるんじゃ。",
      correct_move: {
        from: { row: 5, col: 4 },
        to: { row: 4, col: 4 },
      },
      result_sfen: "9/9/9/9/4P4/9/9/9/9 b P 1",
      success_text: "よくできた！歩で相手の駒を取れたな。",
      fail_text: "相手の歩がいるマスに進んでみよう。",
    },
    {
      id: "move_pawn_easy_finish",
      type: "move",
      board_sfen: "9/9/9/9/9/4P4/9/9/9 b - 1",
      instruction: "もう一度、歩を前に進めてみよう！",
      coach_text: "歩の動きはもうバッチリじゃな！",
      correct_move: {
        from: { row: 5, col: 4 },
        to: { row: 4, col: 4 },
      },
      success_text: "完璧じゃ！歩の動きをマスターしたな！",
      fail_text: "歩は前に1マスだけ進めるぞ。",
    },
  ],
};
