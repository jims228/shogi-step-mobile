import type { LessonData } from "../../lesson/types";

export const U8_FIND_OPENING: LessonData = {
  id: "u8_find_opening",
  title: "この序盤、次の一手は？",
  unit: "u8",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 初手 - 飛車先か角道か
    {
      id: "puzzle_first_move",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "序盤の原則に沿って最初の一手を指そう！",
      coach_text: "序盤パズルじゃ！\n原則を思い出して\n良い初手を指してみよう。",
      correct_move: {
        from: { row: 6, col: 7 },
        to: { row: 5, col: 7 },
      },
      correct_moves_alt: [
        { from: { row: 6, col: 2 }, to: { row: 5, col: 2 } },
      ],
      result_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/7P1/PPPPPPP1P/1B5R1/LNSGKGSNL b - 1",
      success_text: "いい手じゃ！\n飛車先を突くか角道を開ける、\nどちらも序盤の好手じゃよ。",
      fail_text: "序盤の原則を思い出そう。\n飛車先か角道じゃ。",
    },
    // step2: 角道が開いている状態 - 次は？
    {
      id: "puzzle_after_bishop",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/2P6/PP1PPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "角道は開けた。次は？",
      coach_text: "角道はもう開けたぞ。\n次にやるべきことは何かな？\n原則を思い出すんじゃ。",
      arrows: [{ from: [6, 7], to: [5, 7] }],
      correct_move: {
        from: { row: 6, col: 7 },
        to: { row: 5, col: 7 },
      },
      result_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/2P4P1/PP1PPPP1P/1B5R1/LNSGKGSNL b - 1",
      success_text: "飛車先を突いたぞ！\n角道も飛車先も準備できたな。",
      fail_text: "まだやっていない原則があるぞ。\n飛車先を突こう！",
    },
    // step3: 飛車先と角道が済んだ - 囲いの準備
    {
      id: "puzzle_start_castle",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/pp1pppppp/2p6/7P1/2P6/PP1PPPP1P/1B5R1/LNSGKGSNL b - 1",
      instruction: "攻めの準備はできた。次は？",
      coach_text: "飛車先も角道も開けた。\n3つ目の原則は何じゃったかな？\n王を守る準備をしよう。",
      correct_move: {
        from: { row: 8, col: 4 },
        to: { row: 7, col: 5 },
      },
      correct_moves_alt: [
        { from: { row: 8, col: 6 }, to: { row: 7, col: 5 } },
        { from: { row: 8, col: 4 }, to: { row: 7, col: 3 } },
      ],
      result_sfen: "lnsgkgsnl/1r5b1/pp1pppppp/2p6/7P1/2P6/PP1PPPP1P/1B3K1R1/LNSG1GSNL b - 1",
      success_text: "囲いの準備じゃ！\n攻めの準備ができたら\n王を安全にするのが大事じゃよ。",
      fail_text: "3つ目の原則は「囲い」じゃ。\n王や銀を動かして守りの準備をしよう。",
    },
    // step4: クイズ - この局面で避けるべき手
    {
      id: "quiz_avoid_move",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/pp1pppppp/2p6/7P1/2P6/PP1PPPP1P/1B5R1/LNSGKGSNL b - 1",
      instruction: "この序盤で避けるべき手は？",
      coach_text: "序盤には指さない方がいい手も\nあるんじゃ。どれかな？",
      quiz_options: [
        "端歩（1六歩）を突く",
        "王を動かす",
        "銀を上げる",
      ],
      quiz_answer: 0,
      success_text: "正解！序盤では端歩より\n飛車先・角道・囲いが優先じゃ。\n端歩は余裕ができてからで\n十分間に合うぞ。",
      fail_text: "序盤で端歩は優先度が低いぞ。\nもっと大事なことがあるじゃろ。",
    },
    // step5: 飛車先の歩をさらに進める
    {
      id: "puzzle_push_further",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/9/2P4P1/PP1PPPP1P/1B5R1/LNSGKGSNL b - 1",
      instruction: "飛車先をさらに伸ばそう！",
      coach_text: "お互い飛車先と角道を開けた\n局面じゃ。飛車先をもっと\n伸ばしてプレッシャーをかけよう！",
      arrows: [{ from: [5, 7], to: [4, 7] }],
      correct_move: {
        from: { row: 5, col: 7 },
        to: { row: 4, col: 7 },
      },
      result_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/7P1/2P6/PP1PPPP1P/1B5R1/LNSGKGSNL b - 1",
      success_text: "飛車先が5段目まで来たぞ！\n相手にプレッシャーがかかるな。",
      fail_text: "飛車先の歩をもう一歩前に進めよう。",
    },
    // step6: 仕上げ - 自力で判断
    {
      id: "puzzle_finale",
      type: "move",
      board_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/7P1/2P6/PP1PPPP1P/1BK2S1R/LNSG1G1NL b - 1",
      instruction: "序盤の原則に沿った一手を指そう！",
      coach_text: "仕上げじゃ！\n自分で考えて\n原則に沿った手を指してみよう。\nヒントはなしじゃよ。",
      correct_move: {
        from: { row: 7, col: 3 },
        to: { row: 7, col: 2 },
      },
      correct_moves_alt: [
        { from: { row: 8, col: 3 }, to: { row: 7, col: 4 } },
        { from: { row: 7, col: 5 }, to: { row: 6, col: 4 } },
      ],
      result_sfen: "lnsgkgsnl/1r5b1/pp1ppppp1/2p4p1/7P1/2P6/PP1PPPP1P/1BK2S1R1/LNSG1G1NL b - 1",
      success_text: "すばらしい！\n序盤の判断力がついてきたな。\n原則を守れば\n序盤で大きく不利にならないぞ！",
      fail_text: "囲いを進めるか\n駒を活用する手を考えよう。",
    },
  ],
};
