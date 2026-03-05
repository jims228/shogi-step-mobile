import type { LessonData } from "../../lesson/types";

export const BASICS_PAWN_LESSON: LessonData = {
  id: "pawn",
  title: "歩の動かし方",
  unit: "basics",
  reward_xp: 10,
  steps: [
    {
      id: "explain_intro",
      type: "explain",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "すべての駒を確認しましょう。",
      coach_text: "これが将棋の初期配置じゃ。全部の駒を見てみよう！",
    },
    {
      id: "move_pawn_forward",
      type: "move",
      board_sfen: "9/9/9/9/9/9/4P4/9/9 b - 1",
      instruction: "歩を一つ前に進めましょう。",
      coach_text: "歩をタップして、進めたいマスをタップするんじゃ。",
      correct_move: {
        from: { row: 6, col: 4 },
        to: { row: 5, col: 4 },
      },
      success_text: "正解！歩は前に1マス進めるんじゃ。",
      fail_text: "惜しい！歩は前に1マスだけ進めるぞ。",
    },
    {
      id: "tap_pawn_target",
      type: "tap_square",
      board_sfen: "9/9/9/9/4P4/9/9/9/9 b - 1",
      instruction: "歩が進めるマスをタップしてください。",
      coach_text: "歩が次に進めるマスはどこかな？",
      correct_square: { row: 3, col: 4 },
      highlights: [{ row: 4, col: 4 }],
      success_text: "その通り！歩は真っ直ぐ前に進むんじゃ。",
      fail_text: "歩は前に1マスだけ進めるぞ。もう一度やってみよう。",
    },
    {
      id: "quiz_pawn_count",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "先手（下側）の歩は何枚ありますか？",
      coach_text: "数えてみるんじゃ！",
      quiz_options: ["7枚", "8枚", "9枚", "10枚"],
      quiz_answer: 2,
      success_text: "正解！歩は9枚あるんじゃ。一番多い駒じゃな。",
      fail_text: "もう一度数えてみよう。下の段に並んでいるぞ。",
    },
  ],
};
