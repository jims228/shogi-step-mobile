import type { LessonData } from "../../lesson/types";

export const U1_WHAT_IS_SHOGI: LessonData = {
  id: "u1_what_is_shogi",
  title: "将棋ってなに？",
  unit: "u1",
  type: "learn",
  reward_xp: 10,
  steps: [
    {
      id: "first_move",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "歩を一つ前に進めよう！",
      coach_text: "これが将棋の初期配置じゃ。\n先手と後手の二人でプレイするぞ。",
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
      after_response_text: "先手が指したら後手が指す！\nもう一手進めよう。",
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
      second_after_response_text: "交互に指していく。\nこれが将棋じゃ！",
      success_text: "よし！歩を進めたな。",
      fail_text: "矢印の方向に歩を進めてみよう。",
    },
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
      success_text: "これで王様は動けない！\nこれが「詰み」じゃ！",
      fail_text: "持ち駒の金を王様の前に打ってみよう。",
    },
    {
      id: "confirm_mate",
      type: "move",
      board_sfen: "4k4/9/4P4/9/9/9/9/9/9 b G 1",
      instruction: "金を打って王様を動けなくしよう！",
      coach_text: "もう一度やってみよう！\n相手の王様を動けなくするんじゃ。",
      arrows: [{ from: "hand_ki", to: [1, 4] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/4G4/4P4/9/9/9/9/9/9 b - 1",
      // After gold drop: "王様が逃げてきても？" → 0.8s → king moves to 41
      auto_response: {
        from: { row: 0, col: 4 },
        to: { row: 0, col: 5 },
      },
      after_response_sfen: "5k3/4G4/4P4/9/9/9/9/9/9 b - 1",
      after_response_text: "相手の王様が逃げてきても？",
      // 2nd turn: player captures king at 41
      second_move: {
        from: { row: 1, col: 4 },
        to: { row: 0, col: 5 },
      },
      second_arrows: [{ from: [1, 4], to: [0, 5] }],
      // No second auto response — after delay, revert to 52金 position
      second_after_response_sfen: "4k4/4G4/4P4/9/9/9/9/9/9 b - 1",
      second_after_response_text: "王様が動けないから、52金を打った時点でゲーム終了！\nこれが「詰み」じゃ！",
      success_text: "王様を捕まえたぞ！",
      fail_text: "矢印の方向に金を動かして王様を取ろう。",
    },
    {
      id: "drop_gold_again",
      type: "move",
      board_sfen: "4k4/9/4P4/9/9/9/9/9/9 b G 1",
      instruction: "どうすればゲームを終わらせられる？",
      coach_text: "どうすればゲームを終わらせられる？",
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/4G4/4P4/9/9/9/9/9/9 b - 1",
      success_text: "正解！52金でゲーム終了じゃ！",
      fail_text: "王様を動けなくする方法を考えてみよう。",
    },
    {
      id: "is_game_over",
      type: "quiz",
      board_sfen: "4k4/4G4/4P4/9/9/9/9/9/9 b - 1",
      instruction: "この局面、ゲーム終了？",
      coach_text: "王様はもう動ける場所がないぞ。\nこれでゲーム終了かな？",
      quiz_options: ["ゲーム終了！", "まだ続く"],
      quiz_answer: 0,
      success_text: "その通り！\n王様が動けないから、これで「詰み」じゃ！\nゲーム終了！",
      fail_text: "王様が動ける場所を探してみよう。\nどこにも動けないぞ？",
    },
  ],
};
