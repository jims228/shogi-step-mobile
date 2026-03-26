import type { LessonData } from "../../lesson/types";

export const U5_ESCAPE: LessonData = {
  id: "u5_escape",
  title: "逃げて受けよう",
  unit: "u5",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 飛車の王手から逃げる（ガイド）
    {
      id: "escape_rook",
      type: "move",
      board_sfen: "4K4/9/9/9/4r4/9/9/9/9 b - 1",
      instruction: "王手じゃ！逃げよう！",
      coach_text: "飛車で縦から王手じゃ。\n横に逃げよう！",
      arrows: [{ from: [0, 4], to: [0, 3] }],
      correct_move: {
        from: { row: 0, col: 4 },
        to: { row: 0, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 0, col: 4 }, to: { row: 0, col: 5 } },
      ],
      success_text: "横に逃げて助かったぞ！\n飛車の効き筋から外れたな。",
      fail_text: "飛車の効きがない横に逃げよう。",
    },
    // step2: 角の王手から逃げる
    {
      id: "escape_bishop",
      type: "move",
      board_sfen: "4K4/9/9/9/9/9/9/1b7/9 b - 1",
      instruction: "角の王手から逃げよう！",
      coach_text: "角で斜めから王手じゃ。\n角の効き筋から外れよう！",
      correct_move: {
        from: { row: 0, col: 4 },
        to: { row: 0, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 0, col: 4 }, to: { row: 1, col: 4 } },
        { from: { row: 0, col: 4 }, to: { row: 0, col: 5 } },
      ],
      success_text: "角の効きから外れたぞ！\n斜めの効きに注意じゃ。",
      fail_text: "角の斜めの効きがない\n場所に逃げよう。",
    },
    // step3: 金の王手から逃げる
    {
      id: "escape_gold",
      type: "move",
      board_sfen: "9/4K4/4g4/9/9/9/9/9/9 b - 1",
      instruction: "金の王手から逃げよう！",
      coach_text: "相手の金で王手じゃ。\n金の効かない場所に逃げよう。",
      correct_move: {
        from: { row: 1, col: 4 },
        to: { row: 0, col: 4 },
      },
      correct_moves_alt: [
        { from: { row: 1, col: 4 }, to: { row: 0, col: 3 } },
        { from: { row: 1, col: 4 }, to: { row: 0, col: 5 } },
      ],
      success_text: "逃げられたぞ！\n金は斜め後ろに効かないから\n上に逃げるのが安全じゃ。",
      fail_text: "金の効きがない場所に逃げよう。",
    },
    // step4: クイズ - 逃げるときの注意
    {
      id: "quiz_escape_tip",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "逃げるとき注意することは？",
      coach_text: "王を逃がすとき、\n一番気をつけることは\n何じゃろう？",
      quiz_options: ["逃げた先も安全か確認", "とにかく遠くに逃げる"],
      quiz_answer: 0,
      success_text: "正解！逃げた先に\n別の相手の駒が効いていたら\n意味がないぞ。\n逃げた先の安全を\n確認するのが大事じゃ！",
      fail_text: "逃げた先が安全かどうかが\n一番大事じゃ。",
    },
    // step5: 安全な場所を選んで逃げる
    {
      id: "escape_safe_square",
      type: "move",
      board_sfen: "9/3K5/9/3g5/9/9/9/9/9 b - 1",
      instruction: "安全な場所に逃げよう！",
      coach_text: "金で王手じゃ。\n逃げる先が金の効きに\n入らないように注意じゃ！",
      correct_move: {
        from: { row: 1, col: 3 },
        to: { row: 0, col: 4 },
      },
      correct_moves_alt: [
        { from: { row: 1, col: 3 }, to: { row: 0, col: 2 } },
        { from: { row: 1, col: 3 }, to: { row: 1, col: 4 } },
      ],
      success_text: "安全な場所に逃げられたぞ！\n逃げる先の確認、大事じゃな。",
      fail_text: "金の効きがない安全な\nマスに逃げよう。",
    },
    // step6: 仕上げ
    {
      id: "escape_finale",
      type: "move",
      board_sfen: "9/9/4K4/9/4r4/9/9/9/9 b - 1",
      instruction: "王手から逃げて仕上げ！",
      coach_text: "仕上げじゃ！\n飛車の王手から\n安全に逃げよう。",
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 2, col: 4 }, to: { row: 1, col: 4 } },
        { from: { row: 2, col: 4 }, to: { row: 1, col: 5 } },
        { from: { row: 2, col: 4 }, to: { row: 2, col: 3 } },
        { from: { row: 2, col: 4 }, to: { row: 2, col: 5 } },
      ],
      success_text: "すばらしい！\n「逃げる」受けをマスターしたな！",
      fail_text: "飛車の効きがない場所に逃げよう。",
    },
  ],
};
