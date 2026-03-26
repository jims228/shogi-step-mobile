import type { LessonData } from "../../lesson/types";

export const U1_WHAT_IS_SHOGI: LessonData = {
  id: "u1_what_is_shogi",
  title: "将棋ってなに？",
  unit: "u1",
  type: "learn",
  reward_xp: 10,
  steps: [
    {
      id: "mate_with_gold",
      type: "move",
      board_sfen: "4k4/9/4P4/9/9/9/9/9/9 b G 1",
      instruction: "金を打って王様を動けなくしよう！",
      coach_text: "将棋は、駒を動かして相手の王様を捕まえるゲームじゃ！\n相手の王様を動けなくすれば勝ちじゃ。",
      arrows: [{ from: "hand_ki", to: [1, 4] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/4G4/4P4/9/9/9/9/9/9 b - 1",
      success_text: "これで王様は動けない！これが「詰み」じゃ！",
      fail_text: "持ち駒の金を王様の前に打ってみよう。",
    },
    {
      id: "first_move",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "歩を一つ前に進めよう！",
      coach_text: "これが将棋の初期配置じゃ。先手と後手の二人でプレイするぞ。",
      arrows: [{ from: [6, 7], to: [5, 7] }],
      correct_move: {
        from: { row: 6, col: 7 },
        to: { row: 5, col: 7 },
      },
      // 1st auto response: opponent plays 84歩
      auto_response: {
        from: { row: 2, col: 1 },
        to: { row: 3, col: 1 },
      },
      after_response_sfen: "lnsgkgsnl/1r5b1/p1ppppppp/1p7/9/7P1/PPPPPPP1P/1B5R1/LNSGKGSNL b - 3",
      after_response_text: "先手が指したら後手が指す！もう一手進めよう。",
      // 2nd turn: player plays 25歩
      second_move: {
        from: { row: 5, col: 7 },
        to: { row: 4, col: 7 },
      },
      second_arrows: [{ from: [5, 7], to: [4, 7] }],
      // 2nd auto response: opponent plays 85歩
      second_auto_response: {
        from: { row: 3, col: 1 },
        to: { row: 4, col: 1 },
      },
      second_after_response_sfen: "lnsgkgsnl/1r5b1/p1ppppppp/9/1p5P1/9/PPPPPPP1P/1B5R1/LNSGKGSNL b - 5",
      second_after_response_text: "交互に指していく。これが将棋じゃ！",
      success_text: "よし！歩を進めたな。",
      fail_text: "矢印の方向に歩を進めてみよう。",
    },
  ],
};
