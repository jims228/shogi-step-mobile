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
      board_sfen: "lnsgkgsnl/1r5b1/p1ppppppp/9/9/9/PPSPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "歩を一つ前に進めよう！",
      coach_text: "これが将棋の初期配置じゃ。先手と後手の二人でプレイするぞ。",
      arrows: [{ from: [6, 6], to: [5, 6] }],
      correct_move: {
        from: { row: 6, col: 6 },
        to: { row: 5, col: 6 },
      },
      auto_response: {
        from: { row: 2, col: 6 },
        to: { row: 3, col: 6 },
      },
      after_response_sfen: "lnsgkgsnl/1r5b1/p1pppppp1/6p2/9/6P2/PPSPP1PPP/1B5R1/LNSGKGSNL b - 3",
      after_response_text: "先手が指したら後手が指す！これが将棋の流れじゃ。",
      success_text: "よし！歩を進めたな。",
      fail_text: "矢印の方向に歩を進めてみよう。",
    },
  ],
};
