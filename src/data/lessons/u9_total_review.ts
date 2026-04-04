import type { LessonData } from "../../lesson/types";

export const U9_TOTAL_REVIEW: LessonData = {
  id: "u9_total_review",
  title: "総合復習",
  unit: "u9",
  type: "review",
  reward_xp: 20,
  steps: [
    // step1: 駒の動き（U1-U2） - 金で王手
    {
      id: "total_gold_check",
      type: "move",
      board_sfen: "4k4/9/3G5/9/9/9/9/9/9 b - 1",
      instruction: "金で王手をかけよう！",
      coach_text: "全Unitの総合復習じゃ！\nまずは基本の王手から。\n金で王手をかけてみよう。",
      correct_move: {
        from: { row: 2, col: 3 },
        to: { row: 1, col: 4 },
      },
      correct_moves_alt: [
        { from: { row: 2, col: 3 }, to: { row: 1, col: 3 } },
      ],
      success_text: "金で王手じゃ！\n駒の動かし方はバッチリじゃな。",
      fail_text: "金を王様の隣に動かして\n王手をかけよう。",
    },
    // step2: 持ち駒と打ち（U3） - 金を打って詰み
    {
      id: "total_drop_mate",
      type: "move",
      board_sfen: "4k4/9/4P4/9/9/9/9/9/9 b G 1",
      instruction: "持ち駒の金を打って詰ませよう！",
      coach_text: "持ち駒を使うんじゃ。\n金を打って王様を詰ませよう。\n打つ場所をよく考えるんじゃよ。",
      arrows: [{ from: "hand_ki", to: [1, 4] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/4G4/4P4/9/9/9/9/9/9 b - 1",
      success_text: "持ち駒の金で詰みじゃ！\n打ちのテクニックも覚えておるな。",
      fail_text: "金を王様の前に打とう。\n王様が動けなくなるぞ。",
    },
    // step3: 王手の受け方（U5） - 合駒で防ぐ
    {
      id: "total_block_check",
      type: "move",
      board_sfen: "4K4/9/9/9/4r4/9/9/9/9 b G 1",
      instruction: "合駒で王手を防ごう！",
      coach_text: "飛車で王手がかかっておる。\n持ち駒の金を間に打って\n王手を防ぐんじゃ。",
      arrows: [{ from: "hand_ki", to: [1, 4] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      correct_moves_alt: [
        { from: { hand: "ki" }, to: { row: 2, col: 4 } },
        { from: { hand: "ki" }, to: { row: 3, col: 4 } },
      ],
      success_text: "合駒で防いだぞ！\n逃げる・合駒・取る、\n3つの受け方を使い分けるんじゃ。",
      fail_text: "王と飛車の間に金を打って\n飛車の効きを遮断しよう。",
    },
    // step4: クイズ - 駒の価値（U2）と序盤原則（U8）
    {
      id: "total_quiz_value_opening",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "序盤で最初にやるべきことは？",
      coach_text: "序盤の原則の復習じゃ。\n最初にやるべきことは何かな？",
      quiz_options: [
        "飛車先を突く・角道を開ける",
        "すぐに囲い始める",
        "桂馬を跳ねる",
      ],
      quiz_answer: 0,
      success_text: "正解！まず飛車先と角道、\nそれから囲い。\n序盤の3原則はバッチリじゃな！",
      fail_text: "序盤はまず飛車先を突いたり\n角道を開けたりするのが先じゃよ。",
    },
    // step5: 成り（U3）と詰み（U4） - 歩を成って王手
    {
      id: "total_promote_check",
      type: "move",
      board_sfen: "4k4/3P5/9/9/9/9/9/9/4K4 b - 1",
      instruction: "歩を成って王手をかけよう！",
      coach_text: "歩が相手の陣地にいるぞ。\n成って「と金」にすれば\n強力な王手になるんじゃ！",
      arrows: [{ from: [1, 3], to: [0, 3] }],
      correct_move: {
        from: { row: 1, col: 3 },
        to: { row: 0, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 1, col: 3 }, to: { row: 0, col: 4 } },
      ],
      success_text: "と金で王手じゃ！\n成りの力を活かしたな。",
      fail_text: "歩を前に進めて成ろう。\n王手になるぞ。",
    },
    // step6: 仕上げ - 総合判断（全Unit）
    {
      id: "total_finale",
      type: "move",
      board_sfen: "3k5/9/9/9/9/9/9/9/4K4 b RG 1",
      instruction: "持ち駒を使って詰ませよう！",
      coach_text: "最後の問題じゃ！\n持ち駒の飛車と金を使って\n王様を詰ませるんじゃ。\n全Unitの力を出し切れ！",
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 3 },
      },
      correct_moves_alt: [
        { from: { hand: "hi" }, to: { row: 0, col: 4 } },
      ],
      success_text: "すばらしい！\n全Unitの総合復習を\nクリアしたぞ！\n駒の動き・王手・詰み・打ち・\n成り・受け・序盤の原則、\n全部身についたな。\nこれからも将棋を楽しむんじゃよ！",
      fail_text: "持ち駒を使って\n王様を動けなくしよう。",
    },
  ],
};
