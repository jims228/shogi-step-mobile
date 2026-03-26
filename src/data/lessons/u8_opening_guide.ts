import type { LessonData } from "../../lesson/types";

export const U8_OPENING_GUIDE: LessonData = {
  id: "u8_opening_guide",
  title: "序盤を指してみよう",
  unit: "u8",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 26歩 - 飛車先を突く
    {
      id: "guide_push_26",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "飛車先の歩を突こう！",
      coach_text: "原則に沿って序盤を指すぞ。\nまず飛車先の歩を突こう！",
      arrows: [{ from: [6, 7], to: [5, 7] }],
      correct_move: {
        from: { row: 6, col: 7 },
        to: { row: 5, col: 7 },
      },
      auto_response: {
        from: { row: 2, col: 2 },
        to: { row: 3, col: 2 },
      },
      after_response_sfen: "lnsgkgsnl/1r5b1/pp1pppppp/2p6/9/7P1/PPPPPPP1P/1B5R1/LNSGKGSNL b - 3",
      after_response_text: "相手も角道を開けてきたぞ。\n次の手を考えよう。",
      success_text: "飛車先を突いたぞ！",
      fail_text: "飛車の前の歩を進めよう。",
    },
    // step2: 76歩 - 角道を開ける
    {
      id: "guide_push_76",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/pp1pppppp/2p6/9/7P1/PPPPPPP1P/1B5R1/LNSGKGSNL b - 3",
      instruction: "角道を開けよう！",
      coach_text: "次は角道を開ける番じゃ。\n角が使えるようになるぞ。",
      arrows: [{ from: [6, 2], to: [5, 2] }],
      correct_move: {
        from: { row: 6, col: 2 },
        to: { row: 5, col: 2 },
      },
      auto_response: {
        from: { row: 2, col: 7 },
        to: { row: 3, col: 7 },
      },
      after_response_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/9/2P4P1/PP1PPPP1P/1B5R1/LNSGKGSNL b - 5",
      after_response_text: "相手も飛車先を突いてきた。\n次は王の安全を考えよう。",
      success_text: "角道が開いたぞ！",
      fail_text: "7六の歩を前に進めよう。",
    },
    // step3: 25歩 - 飛車先をさらに伸ばす
    {
      id: "guide_push_25",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/9/2P4P1/PP1PPPP1P/1B5R1/LNSGKGSNL b - 5",
      instruction: "飛車先の歩をもう一つ進めよう！",
      coach_text: "飛車先をもう一歩進めると\nさらに圧力がかかるぞ。",
      arrows: [{ from: [5, 7], to: [4, 7] }],
      correct_move: {
        from: { row: 5, col: 7 },
        to: { row: 4, col: 7 },
      },
      success_text: "飛車先の歩が5段目まで来たぞ！\n攻めの準備が整ってきたな。",
      fail_text: "飛車先の歩をもう一マス進めよう。",
    },
    // step4: 48銀 - 囲いの準備
    {
      id: "guide_move_silver",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/7P1/2P6/PP1PPPP1P/1B5R1/LNSGKGSNL b - 5",
      instruction: "銀を上げて囲いの準備をしよう！",
      coach_text: "攻めの準備ができたら\n次は守りじゃ。\n銀を上げて囲いを作り始めよう。",
      arrows: [{ from: [8, 6], to: [7, 5] }],
      correct_move: {
        from: { row: 8, col: 6 },
        to: { row: 7, col: 5 },
      },
      success_text: "銀が上がったぞ！\n囲いの準備が始まったな。",
      fail_text: "右から2番目の銀を\n上に動かそう。",
    },
    // step5: クイズ - 次にすべきこと
    {
      id: "quiz_next_step",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/7P1/2P6/PP1PPPP1P/1B3SR1/LNSGKG1NL b - 5",
      instruction: "この後、何を優先すべき？",
      coach_text: "飛車先も突いた、角道も開けた。\n銀も上がった。\n次は何を優先すべきかな？",
      quiz_options: [
        "王を囲いに移動させる",
        "すぐに攻め込む",
        "端の歩を突く",
      ],
      quiz_answer: 0,
      success_text: "正解！攻めの準備ができたら\n王を安全にするのが大事じゃ。\n焦って攻めると\n自分の王が危なくなるぞ。",
      fail_text: "攻めの準備の次は\n王を安全にすることが大事じゃ。",
    },
    // step6: 68王 - 王を囲いへ
    {
      id: "guide_move_king",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/7P1/2P6/PP1PPPP1P/1B3SR1/LNSGKG1NL b - 5",
      instruction: "王を左に動かそう！",
      coach_text: "仕上げじゃ！\n王を左に動かして\n囲いの中に入れるんじゃ。",
      arrows: [{ from: [8, 4], to: [7, 3] }],
      correct_move: {
        from: { row: 8, col: 4 },
        to: { row: 7, col: 3 },
      },
      success_text: "すばらしい！\n原則に沿った序盤が指せたぞ！\n飛車先を突く→角道を開ける→囲い\nこの流れを覚えておくんじゃ！",
      fail_text: "王を左斜め上に動かそう。",
    },
  ],
};
