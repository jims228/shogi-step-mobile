import type { LessonData } from "../../lesson/types";

export const U8_REVIEW: LessonData = {
  id: "u8_review",
  title: "Unit 8 まとめ",
  unit: "u8",
  type: "review",
  reward_xp: 15,
  steps: [
    // step1: クイズ - 序盤の3原則
    {
      id: "review_three_principles",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "序盤の3原則は？",
      coach_text: "Unit 8の復習じゃ！\n序盤の3原則を覚えておるかな？",
      quiz_options: [
        "飛車先を突く・角道を開ける・囲い",
        "歩を全部進める・端攻め・中央制圧",
        "飛車を振る・銀を繰り出す・玉頭攻め",
      ],
      quiz_answer: 0,
      success_text: "正解！飛車先・角道・囲い。\nこの3つが序盤の基本じゃな！",
      fail_text: "飛車先を突く・角道を開ける・囲い\nの3つじゃよ。",
    },
    // step2: 飛車先を突く
    {
      id: "review_push_rook",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "原則①を実践しよう！",
      coach_text: "原則に沿って指してみよう。\nまず飛車先を突くんじゃ。",
      correct_move: {
        from: { row: 6, col: 7 },
        to: { row: 5, col: 7 },
      },
      result_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/7P1/PPPPPPP1P/1B5R1/LNSGKGSNL b - 1",
      success_text: "飛車先を突いたぞ！\nこの一手で飛車が働き始めるんじゃ。",
      fail_text: "飛車の前の歩を進めよう。",
    },
    // step3: クイズ - 居飛車と振り飛車
    {
      id: "review_ibisha_furi",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "飛車を左に動かす戦い方は？",
      coach_text: "飛車を左側に振って使う\n戦い方の名前は何じゃったかな？",
      quiz_options: ["振り飛車", "居飛車", "向かい飛車"],
      quiz_answer: 0,
      success_text: "正解！飛車を左に振るから\n「振り飛車」じゃな。\n飛車をそのまま使うのが\n「居飛車」じゃよ。",
      fail_text: "飛車を振る＝動かす戦い方は\n「振り飛車」じゃよ。",
    },
    // step4: 序盤の判断 - 囲いの準備
    {
      id: "review_castle_timing",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/7P1/2P6/PP1PPPP1P/1B5R1/LNSGKGSNL b - 1",
      instruction: "攻めの準備は済んだ。次は？",
      coach_text: "飛車先も角道も開けた。\n次にやるべきことは何かな？",
      correct_move: {
        from: { row: 8, col: 4 },
        to: { row: 7, col: 5 },
      },
      correct_moves_alt: [
        { from: { row: 8, col: 6 }, to: { row: 7, col: 5 } },
        { from: { row: 8, col: 4 }, to: { row: 7, col: 3 } },
      ],
      success_text: "囲いの準備じゃ！\n攻めと守りのバランスが大事じゃな。",
      fail_text: "攻めの準備ができたら\n次は王を守る準備じゃよ。",
    },
    // step5: クイズ - 中盤のキーワード
    {
      id: "review_middle_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "中盤で大事な考え方は？",
      coach_text: "中盤で覚えておくべき\n大事な考え方は何じゃったかな？",
      quiz_options: [
        "駒の価値を考えた交換",
        "とにかく王手をかける",
        "歩を全部成る",
      ],
      quiz_answer: 0,
      success_text: "正解！中盤は駒の価値を\n考えて交換するのが大事じゃ。\n駒得を目指すんじゃよ。",
      fail_text: "中盤では駒の価値を考えて\n有利な交換をするのが大事じゃ。",
    },
    // step6: 仕上げ - 駒得の交換
    {
      id: "review_finale",
      type: "move",
      board_sfen: "4k4/9/4g4/3P5/9/9/9/9/4K4 b - 1",
      instruction: "得する手を指そう！",
      coach_text: "仕上げじゃ！\n歩で得する交換ができるぞ。\nUnit 8で学んだことを\n活かして指すんじゃ！",
      correct_move: {
        from: { row: 3, col: 3 },
        to: { row: 2, col: 4 },
      },
      result_sfen: "4k4/9/4P4/9/9/9/9/9/4K4 b G 1",
      success_text: "すばらしい！\nUnit 8をクリアじゃ！\n序盤の3原則と中盤の考え方、\nしっかり身についたな。\n次はいよいよ総合復習じゃよ！",
      fail_text: "歩で相手の金を取ろう。\n駒得になるぞ。",
    },
  ],
};
