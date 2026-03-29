import type { LessonData } from "../../lesson/types";

export const U3_DROP: LessonData = {
  id: "u3_drop",
  title: "駒を打ってみよう",
  unit: "u3",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 持ち駒の金を打つ（ガイド）
    {
      id: "drop_gold",
      type: "move",
      board_sfen: "4k4/9/9/9/9/9/9/9/9 b G 1",
      instruction: "持ち駒の金を打とう！",
      coach_text: "持ち駒から駒を盤上に\n置くことを「打つ」と言うぞ。\n手駒置き場の金をタップして、\n王様の前に打とう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [1, 4] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/4G4/9/9/9/9/9/9/9 b - 1",
      success_text: "金を打てたぞ！\nしかも王手じゃ！\n持ち駒はどこにでも打てるから\n強力なんじゃ。",
      fail_text: "手駒置き場の金をタップして、\n盤上のマスをタップしよう。",
    },
    // step2: 歩を打つ（ガイド）
    {
      id: "drop_pawn",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/9/9 b P 1",
      instruction: "歩を打ってみよう！",
      coach_text: "今度は歩を打とう。\n歩は一番多く使う持ち駒じゃ。",
      hand_pieces: { fu: 1 },
      arrows: [{ from: "hand_fu", to: [4, 4] }],
      correct_move: {
        from: { hand: "fu" },
        to: { row: 4, col: 4 },
      },
      result_sfen: "9/9/9/9/4P4/9/9/9/9 b - 1",
      success_text: "歩を打てたな！\n空いているマスなら\nどこにでも打てるぞ。",
      fail_text: "手駒置き場の歩をタップして、\n盤上のマスをタップしよう。",
    },
    // step3: クイズ - 持ち駒はどこに打てる？
    {
      id: "quiz_where_drop",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b G 1",
      instruction: "持ち駒はどこに打てる？",
      coach_text: "持ち駒を打てる場所の\nルールを確認じゃ。",
      quiz_options: ["空いているマス", "どこでも（駒の上にも）"],
      quiz_answer: 0,
      success_text: "正解！持ち駒は\n空いているマスにだけ打てるぞ。\n他の駒がいるマスには打てないんじゃ。",
      fail_text: "持ち駒は空きマスにだけ\n打てるぞ。",
    },
    // step4: 金を打って王手（自力）
    {
      id: "drop_gold_check",
      type: "move",
      board_sfen: "6k2/9/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って王手をかけよう！",
      coach_text: "持ち駒の金を打って\n王手をかけてみよう！\nどこに打てば王手になるかな？",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 6 },
      },
      result_sfen: "6k2/6G2/9/9/9/9/9/9/9 b - 1",
      success_text: "持ち駒で王手じゃ！\nどこにでも打てるから\n相手は油断できないぞ。",
      fail_text: "王様の近くに金を打って\n王手をかけよう。",
    },
    // step5: 銀を打つ（自力）
    {
      id: "drop_silver_attack",
      type: "move",
      board_sfen: "4k4/9/9/9/9/9/9/9/9 b S 1",
      instruction: "銀を打って王手をかけよう！",
      coach_text: "銀の持ち駒もあるぞ。\n銀で王手をかけてみよう！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 4 },
      },
      correct_moves_alt: [
        { from: { hand: "gi" }, to: { row: 1, col: 3 } },
        { from: { hand: "gi" }, to: { row: 1, col: 5 } },
      ],
      result_sfen: "4k4/4S4/9/9/9/9/9/9/9 b - 1",
      success_text: "銀でも王手がかけられたな！\nいろんな駒を打てるのが強みじゃ。",
      fail_text: "銀を打って王様を\n取れる位置に置こう。",
    },
    // step6: 飛車を打って仕上げ
    {
      id: "drop_rook_finale",
      type: "move",
      board_sfen: "3k5/9/9/9/9/9/9/9/9 b R 1",
      instruction: "飛車を打って王手！",
      coach_text: "仕上げじゃ！\n大駒の持ち駒は最強じゃ。\n飛車を打って王手をかけよう！",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 0, col: 4 },
      },
      result_sfen: "3kR4/9/9/9/9/9/9/9/9 b - 1",
      correct_moves_alt: [
        { from: { hand: "hi" }, to: { row: 1, col: 3 } },
        { from: { hand: "hi" }, to: { row: 2, col: 3 } },
        { from: { hand: "hi" }, to: { row: 3, col: 3 } },
        { from: { hand: "hi" }, to: { row: 4, col: 3 } },
        { from: { hand: "hi" }, to: { row: 5, col: 3 } },
        { from: { hand: "hi" }, to: { row: 6, col: 3 } },
        { from: { hand: "hi" }, to: { row: 7, col: 3 } },
        { from: { hand: "hi" }, to: { row: 8, col: 3 } },
      ],
      success_text: "すばらしい！\n持ち駒から打つ力をマスターしたな！\n特に大駒の持ち駒は\nとても強力じゃぞ。",
      fail_text: "飛車を打って王様に\n王手をかけよう。",
    },
  ],
};
