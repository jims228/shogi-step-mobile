import type { LessonData } from "../../lesson/types";

export const U4_TSUME_GOLD_SILVER: LessonData = {
  id: "u4_tsume_gold_silver",
  title: "1手詰め：金銀編",
  unit: "u4",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 金で1手詰め
    {
      id: "mate_gold_1",
      type: "move",
      board_sfen: "7pk/7pp/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って詰まそう！",
      coach_text: "王様が端にいて\n味方の駒が逃げ道を塞いでいる。\n金を打って詰ませよう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Gk/7pp/9/9/9/9/9/9/9 b - 1",
      success_text: "金で詰みじゃ！",
      fail_text: "王様の逃げ道がない場所に\n金を打とう。",
    },
    // step2: 銀で1手詰め
    {
      id: "mate_silver_1",
      type: "move",
      board_sfen: "8k/7pp/9/9/9/9/9/9/9 b S 1",
      instruction: "銀を打って詰まそう！",
      coach_text: "今度は銀で詰ませるぞ。\n銀は斜め前に効くから\n王手がかけられるな！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 7 },
      },
      result_sfen: "8k/7Sp/9/9/9/9/9/9/9 b - 1",
      success_text: "銀で詰みじゃ！\n銀は斜め前から王手がかけられる。\n歩が逃げ道を塞いでいるぞ。",
      fail_text: "銀で王手がかかる場所に打とう。",
    },
    // step3: 盤上の金で詰ます
    {
      id: "mate_gold_move",
      type: "move",
      board_sfen: "8k/7pp/6G2/9/9/9/9/9/9 b - 1",
      instruction: "金を動かして詰まそう！",
      coach_text: "盤上の金を動かして\n1手詰めじゃ！",
      correct_move: {
        from: { row: 2, col: 6 },
        to: { row: 1, col: 7 },
      },
      result_sfen: "8k/7Gp/9/9/9/9/9/9/9 b - 1",
      success_text: "金を動かして詰みじゃ！",
      fail_text: "金を動かして王手をかけよう。\n逃げ道がないか確認じゃ。",
    },
    // step4: 盤上の銀で詰ます
    {
      id: "mate_silver_move",
      type: "move",
      board_sfen: "k8/p8/1S7/9/9/9/9/9/9 b - 1",
      instruction: "銀を動かして詰まそう！",
      coach_text: "銀で詰ませよう。\nどこに動かせば詰みかな？",
      correct_move: {
        from: { row: 2, col: 1 },
        to: { row: 1, col: 0 },
      },
      result_sfen: "k8/S8/9/9/9/9/9/9/9 b - 1",
      success_text: "銀で詰みじゃ！\n銀は前からも王手がかけられるぞ。",
      fail_text: "銀を動かして逃げ道がない\n王手をかけよう。",
    },
    // step5: クイズ - 金と銀の詰みの違い
    {
      id: "quiz_gold_silver_mate",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "詰ませるのに使いやすいのは？",
      coach_text: "金と銀、詰みに使いやすいのは\nどっちじゃろう？",
      quiz_options: ["金（6方向に効く）", "銀（5方向に効く）"],
      quiz_answer: 0,
      success_text: "正解！金は6方向に効くから\n詰みに使いやすいんじゃ。\nでも銀の斜め後ろの効きが\n活きることもあるぞ！",
      fail_text: "金は6方向に効くから\n詰みに使いやすいぞ。",
    },
    // step6: 仕上げ
    {
      id: "mate_gs_finale",
      type: "move",
      board_sfen: "kp7/p8/9/9/9/9/9/9/9 b G 1",
      instruction: "金で詰ましてみよう！",
      coach_text: "仕上げじゃ！\n金で1手詰めじゃ。",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 1 },
      },
      correct_moves_alt: [
        { from: { hand: "ki" }, to: { row: 1, col: 1 } },
      ],
      success_text: "すばらしい！\n金銀の1手詰めをマスターしたな！",
      fail_text: "金を打って逃げ場のない\n王手をかけよう。",
    },
  ],
};
