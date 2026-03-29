import type { LessonData } from "../../lesson/types";

export const U8_IBISHA_VS_FURI: LessonData = {
  id: "u8_ibisha_vs_furi",
  title: "居飛車と振り飛車",
  unit: "u8",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 居飛車とは
    {
      id: "quiz_ibisha",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/7P1/PPPPPPP1P/1B5R1/LNSGKGSNL b - 1",
      instruction: "「居飛車」ってどういう意味？",
      coach_text: "将棋には「居飛車」と「振り飛車」\nという2つの戦い方があるんじゃ。\n「居飛車」ってどういう意味かな？",
      quiz_options: [
        "飛車をそのままの位置で使う",
        "飛車を左に動かす",
        "飛車を取られること",
      ],
      quiz_answer: 0,
      success_text: "正解！居飛車は飛車を\n最初の位置（2筋）のまま使う\n戦い方じゃ。\n「居」は「いる＝動かない」\nという意味じゃよ。",
      fail_text: "「居」は「いる」という意味。\n飛車をそのままの位置で使うんじゃ。",
    },
    // step2: 居飛車 - 飛車先を突く
    {
      id: "ibisha_push",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "居飛車の基本！飛車先を突こう。",
      coach_text: "居飛車は飛車先の歩を突いて\nそのまま2筋から攻めるんじゃ。\n飛車先の歩を進めよう！",
      arrows: [{ from: [6, 7], to: [5, 7] }],
      correct_move: {
        from: { row: 6, col: 7 },
        to: { row: 5, col: 7 },
      },
      result_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/7P1/PPPPPPP1P/1B5R1/LNSGKGSNL b - 1",
      success_text: "これが居飛車の基本じゃ！\n飛車はそのまま2筋で活躍するぞ。",
      fail_text: "飛車の前の歩を進めよう。",
    },
    // step3: クイズ - 振り飛車とは
    {
      id: "quiz_furibisha",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "「振り飛車」ってどういう意味？",
      coach_text: "もう一つの戦い方「振り飛車」。\nこれはどういう意味かな？",
      quiz_options: [
        "飛車を左側に動かして使う",
        "飛車を取られること",
        "飛車を成ること",
      ],
      quiz_answer: 0,
      success_text: "正解！振り飛車は飛車を\n左側に「振って」使う戦い方じゃ。\n4筋～6筋に飛車を動かすんじゃよ。",
      fail_text: "「振る」は飛車を左に動かすこと。\n飛車を左側に持っていくんじゃ。",
    },
    // step4: 振り飛車 - 飛車を振る（四間飛車）
    {
      id: "furi_move_rook",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/2P6/PP1PPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "飛車を6筋に振ろう！",
      coach_text: "振り飛車は飛車を左に振るんじゃ。\n飛車を6筋に動かしてみよう。\nこれを「四間飛車」というぞ。",
      arrows: [{ from: [7, 7], to: [7, 5] }],
      correct_move: {
        from: { row: 7, col: 7 },
        to: { row: 7, col: 5 },
      },
      result_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/2P6/PP1PPPPPP/1B3R3/LNSGKGSNL b - 1",
      success_text: "飛車が6筋に振れたぞ！\nこれが四間飛車の形じゃ。\n角道と合わせて左側から攻めるんじゃ。",
      fail_text: "飛車を左に動かして\n6筋に持っていこう。",
    },
    // step5: compare - 居飛車 vs 振り飛車の特徴
    {
      id: "compare_styles",
      type: "compare",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "攻めの方向が違う。どう違う？",
      coach_text: "居飛車と振り飛車は\n攻める方向が違うんじゃ。\nどう違うかわかるかな？",
      compare_options: [
        {
          label: "居飛車は右から、振り飛車は左から",
          description: "飛車の位置で攻める方向が変わる",
          move: { from: { row: 6, col: 7 }, to: { row: 5, col: 7 } },
        },
        {
          label: "どちらも同じ方向から攻める",
          description: "攻める方向は変わらない",
          move: { from: { row: 6, col: 4 }, to: { row: 5, col: 4 } },
        },
      ],
      compare_answer: 0,
      why_text: "居飛車は飛車がいる右側（2筋）から、\n振り飛車は飛車を振った左側から攻める。\n攻める方向が違うから\n囲い方も変わるんじゃよ。",
      success_text: "正解！攻める方向が違うんじゃ！",
      fail_text: "飛車の位置が違えば\n攻める方向も変わるぞ。",
    },
    // step6: クイズ - まとめ
    {
      id: "quiz_summary",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "初心者におすすめなのは？",
      coach_text: "居飛車も振り飛車も\nどちらも強い戦い方じゃ。\n初心者にはどちらがいいかな？",
      quiz_options: [
        "どちらでも好きな方でいい",
        "居飛車だけ覚えればいい",
        "振り飛車だけ覚えればいい",
      ],
      quiz_answer: 0,
      success_text: "その通り！\nどちらも立派な戦い方じゃ。\n好きな方を選んで\nまず一つ得意にするのがいいぞ！\n居飛車と振り飛車、覚えたな！",
      fail_text: "どちらも強い戦い方じゃ。\n好きな方を選べばいいんじゃよ。",
    },
  ],
};
