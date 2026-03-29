import type { LessonData } from "../../lesson/types";

export const U8_MIDDLE_GAME: LessonData = {
  id: "u8_middle_game",
  title: "中盤の考え方",
  unit: "u8",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 中盤とは
    {
      id: "quiz_what_is_middle",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "「中盤」ってどんな場面？",
      coach_text: "序盤の次は「中盤」じゃ。\n中盤ってどんな場面のことかな？",
      quiz_options: [
        "駒がぶつかり合う戦いの場面",
        "最初の数手の場面",
        "王手をかける場面",
      ],
      quiz_answer: 0,
      success_text: "正解！中盤は駒がぶつかり合って\n戦いが始まる場面じゃ。\n「仕掛け」で中盤が始まるぞ。",
      fail_text: "中盤は駒がぶつかり合う\n戦いの場面じゃよ。",
    },
    // step2: 仕掛け - 飛車先の歩交換
    {
      id: "middle_trade_pawn",
      type: "move",
      board_sfen: "lnsgkg1nl/1r4sb1/pppppp1pp/6p2/7P1/2P6/PP1PPPP1P/1B3S1R1/LNSGKG1NL b - 1",
      instruction: "飛車先の歩を進めて仕掛けよう！",
      coach_text: "囲いもできた。\nいよいよ「仕掛け」じゃ！\n飛車先の歩を進めて\n相手の歩とぶつけるんじゃ。",
      arrows: [{ from: [4, 7], to: [3, 7] }],
      correct_move: {
        from: { row: 4, col: 7 },
        to: { row: 3, col: 7 },
      },
      result_sfen: "lnsgkg1nl/1r4sb1/pppppp1pp/6pP1/9/2P6/PP1PPPP1P/1B3S1R1/LNSGKG1NL b - 1",
      success_text: "仕掛けたぞ！\n歩がぶつかった！\nこれで中盤の戦いが始まるんじゃ。",
      fail_text: "飛車先の歩を相手の歩に\nぶつけてみよう。",
    },
    // step3: クイズ - 駒交換とは
    {
      id: "quiz_piece_trade",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "「駒交換」ってどういうこと？",
      coach_text: "中盤でよく起きるのが\n「駒交換」じゃ。\nこれはどういうことかな？",
      quiz_options: [
        "お互いの駒を取り合うこと",
        "駒を成ること",
        "駒を打つこと",
      ],
      quiz_answer: 0,
      success_text: "正解！駒交換は\nお互いの駒を取り合うこと。\n交換後は持ち駒が増えて\n打つ場所を選べるから\n戦い方が広がるぞ。",
      fail_text: "駒交換はお互いの駒を\n取り合うことじゃよ。",
    },
    // step4: 駒交換 - 歩を取る
    {
      id: "middle_capture_pawn",
      type: "move",
      board_sfen: "4k4/7r1/9/6pP1/9/9/9/7R1/4K4 b - 1",
      instruction: "歩を取ろう！",
      coach_text: "歩がぶつかった局面じゃ。\n相手の歩を取ってみよう。\nこれが駒交換の始まりじゃ。",
      arrows: [{ from: [3, 7], to: [3, 6] }],
      correct_move: {
        from: { row: 3, col: 7 },
        to: { row: 3, col: 6 },
      },
      result_sfen: "4k4/7r1/9/6P2/9/9/9/7R1/4K4 b p 1",
      success_text: "歩を取ったぞ！\n相手も取り返すかもしれんが\n交換で持ち駒が増えるんじゃ。",
      fail_text: "相手の歩がいるマスに\n歩を進めて取ろう。",
    },
    // step5: クイズ - 駒交換で得するには
    {
      id: "quiz_trade_advantage",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "駒交換で得をするには？",
      coach_text: "駒交換は同じ価値の駒同士なら\n五分五分じゃ。\n得をするにはどうすればいい？",
      quiz_options: [
        "価値の低い駒で高い駒を取る",
        "とにかくたくさん交換する",
        "交換しない方がいい",
      ],
      quiz_answer: 0,
      success_text: "正解！歩で銀を取ったり\n銀で飛車を取ったりすると\n「駒得」になるぞ。\n駒の価値を考えて\n交換するのが大事じゃ！",
      fail_text: "価値の低い駒で\n高い駒を取ると得をするぞ。",
    },
    // step6: 仕上げ - 駒得の交換
    {
      id: "middle_capture_value",
      type: "move",
      board_sfen: "4k4/9/5g3/4P4/9/9/9/9/4K4 b - 1",
      instruction: "得する交換をしよう！",
      coach_text: "仕上げじゃ！\n歩で相手の金を取れるぞ。\n価値の低い歩で\n価値の高い金を取るんじゃ！",
      arrows: [{ from: [3, 4], to: [2, 5] }],
      correct_move: {
        from: { row: 3, col: 4 },
        to: { row: 2, col: 5 },
      },
      result_sfen: "4k4/9/5P3/9/9/9/9/9/4K4 b G 1",
      success_text: "すばらしい！\n歩で金を取った！\nこれが「駒得」じゃ。\n中盤では駒の価値を考えて\n有利な交換をするのが\n勝利への道じゃよ！",
      fail_text: "歩で相手の金を取ろう。\n大きな駒得になるぞ。",
    },
  ],
};
