import type { LessonData } from "../../lesson/types";

export const U8_OPENING_PRINCIPLES: LessonData = {
  id: "u8_opening_principles",
  title: "序盤の3原則",
  unit: "u8",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 序盤の3原則
    {
      id: "quiz_three_principles",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "序盤で大事な3つの原則は？",
      coach_text: "序盤には大事な3つの原則があるんじゃ。\nどれが正しいかな？",
      quiz_options: [
        "飛車先を突く・角道を開ける・囲い",
        "とにかく攻める・駒を取る・成る",
        "歩を全部進める・飛車を振る・端攻め",
      ],
      quiz_answer: 0,
      success_text: "正解！序盤の3原則は\n①飛車先を突く\n②角道を開ける\n③王を囲う\nこの3つじゃ！",
      fail_text: "序盤は\n飛車先を突く・角道を開ける・囲い\nの3つが大事じゃよ。",
    },
    // step2: 飛車先を突く（26歩）
    {
      id: "push_rook_pawn",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "飛車先の歩を突こう！",
      coach_text: "まず原則①「飛車先を突く」じゃ。\n飛車の前の歩を進めると\n飛車が働きやすくなるぞ。",
      arrows: [{ from: [6, 7], to: [5, 7] }],
      correct_move: {
        from: { row: 6, col: 7 },
        to: { row: 5, col: 7 },
      },
      success_text: "飛車先の歩を突いたぞ！\nこれで飛車が活躍しやすくなるんじゃ。",
      fail_text: "飛車の前にある歩を\n前に進めてみよう。",
    },
    // step3: 角道を開ける（76歩）
    {
      id: "open_bishop_line",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/7P1/PPPPPPP1P/1B5R1/LNSGKGSNL b - 1",
      instruction: "角道を開けよう！",
      coach_text: "次は原則②「角道を開ける」じゃ。\n角の前の歩を進めると\n角が使えるようになるぞ。",
      arrows: [{ from: [6, 2], to: [5, 2] }],
      correct_move: {
        from: { row: 6, col: 2 },
        to: { row: 5, col: 2 },
      },
      success_text: "角道が通ったぞ！\n角は遠くまで効くから\n早めに道を開けるのが大事じゃ。",
      fail_text: "7六の歩を進めて\n角の道を開けよう。",
    },
    // step4: クイズ - 囲いの目的
    {
      id: "quiz_castle_purpose",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/2P4P1/PP1PPPP1P/1B5R1/LNSGKGSNL b - 1",
      instruction: "「囲い」の目的は？",
      coach_text: "原則③は「囲い」じゃ。\n囲いって何のためにするのかな？",
      quiz_options: [
        "王様を安全にする",
        "攻めを強くする",
        "相手の駒を取る",
      ],
      quiz_answer: 0,
      success_text: "正解！囲いは王様を\n安全な場所に移動させて\n金銀で守ることじゃ。\n王様が安全なら\n安心して攻められるぞ！",
      fail_text: "囲いは王様を守るためじゃよ。",
    },
    // step5: 王を囲いに近づける（58王）
    {
      id: "move_king_to_castle",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/2P4P1/PP1PPPP1P/1B5R1/LNSGKGSNL b - 1",
      instruction: "王を左に動かして囲いの準備をしよう！",
      coach_text: "原則③「囲い」の準備じゃ。\n王を左に動かすと\n金銀で守りやすくなるぞ。",
      arrows: [{ from: [8, 4], to: [7, 5] }],
      correct_move: {
        from: { row: 8, col: 4 },
        to: { row: 7, col: 5 },
      },
      success_text: "王が左に動いたぞ！\nここから金銀で囲いを作るんじゃ。",
      fail_text: "王を左斜め上に動かそう。",
    },
    // step6: クイズ - 3原則の順番
    {
      id: "quiz_principle_order",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/2P4P1/PP1PPPP1P/1BK2R2/LNSG1GSNL b - 1",
      instruction: "序盤で最初にやるべきことは？",
      coach_text: "3原則は全部大事じゃが、\n最初にやるべきことは何かな？",
      quiz_options: [
        "飛車先を突く・角道を開ける",
        "すぐに囲う",
        "駒を全部進める",
      ],
      quiz_answer: 0,
      success_text: "その通り！\nまず飛車先と角道を開けて\nそれから囲いじゃ。\n攻めの準備と守りの準備、\n両方バランスよくやるんじゃよ！",
      fail_text: "まず飛車と角を使える形にしてから\n囲いに入るのがいいぞ。",
    },
  ],
};
