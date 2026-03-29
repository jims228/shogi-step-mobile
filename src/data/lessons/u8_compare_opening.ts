import type { LessonData } from "../../lesson/types";

export const U8_COMPARE_OPENING: LessonData = {
  id: "u8_compare_opening",
  title: "先に囲う？先に攻める？",
  unit: "u8",
  type: "compare",
  reward_xp: 10,
  steps: [
    // step1: compare - 飛車先を突く vs すぐ囲う
    {
      id: "compare_attack_vs_castle1",
      type: "compare",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "最初の一手、どっちがいい？",
      coach_text: "序盤の最初の一手じゃ。\n飛車先を突くか、\nすぐ王を動かすか。\nどちらがいいかな？",
      compare_options: [
        {
          label: "飛車先を突く",
          description: "26歩で攻めの準備",
          move: { from: { row: 6, col: 7 }, to: { row: 5, col: 7 } },
        },
        {
          label: "すぐ王を動かす",
          description: "58王で囲いの準備",
          move: { from: { row: 8, col: 4 }, to: { row: 7, col: 5 } },
        },
      ],
      compare_answer: 0,
      why_text: "初手はまず攻めの準備じゃ。\n飛車先や角道を開けてから\n囲いに入るのが基本じゃよ。\n攻めの態勢なしに囲っても\n相手に好きに指されてしまうぞ。",
      success_text: "正解！まず攻めの準備じゃ！",
      fail_text: "いきなり囲いに行くと\n相手に先に攻めの準備をされるぞ。",
    },
    // step2: 実際に飛車先を突く
    {
      id: "execute_push",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "飛車先を突こう！",
      coach_text: "さっき選んだ手を\n実際にやってみよう！",
      arrows: [{ from: [6, 7], to: [5, 7] }],
      correct_move: {
        from: { row: 6, col: 7 },
        to: { row: 5, col: 7 },
      },
      result_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/7P1/PPPPPPP1P/1B5R1/LNSGKGSNL b - 1",
      success_text: "飛車先を突いたぞ！\n攻めの準備が始まったな。",
      fail_text: "飛車の前の歩を進めよう。",
    },
    // step3: compare - 攻めの準備ができたら囲う
    {
      id: "compare_now_castle",
      type: "compare",
      board_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/7P1/2P6/PP1PPPP1P/1B5R1/LNSGKGSNL b - 1",
      instruction: "飛車先と角道を開けた。次は？",
      coach_text: "飛車先も角道も開けたぞ。\nさらに攻めるか、\nここで囲いに入るか。\nどっちがいいかな？",
      compare_options: [
        {
          label: "囲いの準備をする",
          description: "王を動かして守りを固める",
          move: { from: { row: 8, col: 4 }, to: { row: 7, col: 5 } },
        },
        {
          label: "さらに攻めを続ける",
          description: "歩をもっと進める",
          move: { from: { row: 6, col: 4 }, to: { row: 5, col: 4 } },
        },
      ],
      compare_answer: 0,
      why_text: "攻めの準備ができたら\n次は囲いじゃ。\n王が裸のまま攻め続けると\n逆襲されたとき危ないぞ。\nバランスが大事なんじゃ。",
      success_text: "正解！ここで囲いに入ろう！",
      fail_text: "攻めの準備ができたら\n守りも固めないと危ないぞ。",
    },
    // step4: 実際に王を動かす
    {
      id: "execute_castle",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/7P1/2P6/PP1PPPP1P/1B5R1/LNSGKGSNL b - 1",
      instruction: "王を動かして囲いの準備をしよう！",
      coach_text: "さっき選んだ手を\n実際にやってみよう！",
      arrows: [{ from: [8, 4], to: [7, 5] }],
      correct_move: {
        from: { row: 8, col: 4 },
        to: { row: 7, col: 5 },
      },
      result_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/7P1/2P6/PP1PPPP1P/1B3K1R1/LNSG1GSNL b - 1",
      success_text: "王が動いたぞ！\nここから金銀で囲いを作ろう。",
      fail_text: "王を左上に動かそう。",
    },
    // step5: クイズ - バランスの大切さ
    {
      id: "quiz_balance",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "序盤で一番大事なことは？",
      coach_text: "攻めも守りも大事じゃ。\n序盤で一番大事なことは\n何かわかるかな？",
      quiz_options: [
        "攻めと守りのバランス",
        "とにかく速く攻める",
        "完璧な囲いを作る",
      ],
      quiz_answer: 0,
      success_text: "正解！攻めと守りの\nバランスが大事じゃ。\nどちらかだけに偏ると\n相手につけ込まれるぞ。",
      fail_text: "攻めだけでも守りだけでもダメ。\nバランスが大事じゃよ。",
    },
    // step6: compare - 仕上げの判断
    {
      id: "compare_finale",
      type: "compare",
      board_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/7P1/2P6/PP1PPPP1P/1BK2S1R/LNSG1G1NL b - 1",
      instruction: "次の一手、攻め？守り？",
      coach_text: "仕上げじゃ！\n王も動かした、飛車先も突いた。\n次はどうするかな？",
      compare_options: [
        {
          label: "囲いを完成させる",
          description: "金を寄せて王を固める",
          move: { from: { row: 8, col: 3 }, to: { row: 7, col: 4 } },
        },
        {
          label: "端歩を突く",
          description: "16歩で端の準備",
          move: { from: { row: 6, col: 0 }, to: { row: 5, col: 0 } },
        },
      ],
      compare_answer: 0,
      why_text: "囲いがまだ不完全なら\n先に完成させるのが安全じゃ。\n端歩は囲いができてからでも\n遅くないぞ。\n攻めと守りのバランス、\nこれが序盤の極意じゃ！",
      success_text: "すばらしい！\n序盤の判断力が\nしっかり身についたな！",
      fail_text: "囲いを完成させる方が\n先じゃよ。",
    },
  ],
};
