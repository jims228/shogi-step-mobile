import type { LessonData } from "../../lesson/types";

export const U5_BLOCK: LessonData = {
  id: "u5_block",
  title: "合駒で受けよう",
  unit: "u5",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 飛車の王手に合駒（ガイド）
    {
      id: "block_rook",
      type: "move",
      board_sfen: "4K4/9/9/9/4r4/9/9/9/9 b G 1",
      instruction: "合駒で王手を防ごう！",
      coach_text: "飛車で王手じゃ。\n「合駒」は王手している駒と\n王の間に駒を打つ受け方じゃ。\n金を間に打とう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [1, 4] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4K4/4G4/9/9/4r4/9/9/9/9 b - 1",
      success_text: "合駒成功！\n金が飛車の効きを遮断したぞ。\nこれが「合駒」の受けじゃ。",
      fail_text: "王と飛車の間に金を打とう。",
    },
    // step2: 角の王手に合駒
    {
      id: "block_bishop",
      type: "move",
      board_sfen: "4K4/9/9/9/9/9/9/1b7/9 b P 1",
      instruction: "合駒で角の王手を防ごう！",
      coach_text: "角で斜めから王手じゃ。\n間に歩を打って\n効きを遮断しよう！",
      hand_pieces: { fu: 1 },
      arrows: [{ from: "hand_fu", to: [1, 3] }],
      correct_move: {
        from: { hand: "fu" },
        to: { row: 1, col: 3 },
      },
      correct_moves_alt: [
        { from: { hand: "fu" }, to: { row: 2, col: 2 } },
        { from: { hand: "fu" }, to: { row: 3, col: 1 } },
      ],
      success_text: "角の効きを遮断したぞ！\n歩1枚で大駒の王手を\n防げるんじゃ。",
      fail_text: "王と角の間の斜め線上に\n駒を打とう。",
    },
    // step3: クイズ - 合駒ができないケース
    {
      id: "quiz_no_block",
      type: "quiz",
      board_sfen: "4K4/4g4/9/9/9/9/9/9/9 b - 1",
      instruction: "この王手に合駒はできる？",
      coach_text: "金で隣から王手じゃ。\n間に駒を打てるかな？",
      quiz_options: ["できない（隣だから間がない）", "できる"],
      quiz_answer: 0,
      success_text: "正解！隣の駒からの王手には\n合駒ができないんじゃ。\n合駒は遠くからの王手\n（飛車・角・香）に有効じゃよ。",
      fail_text: "隣から王手されたら\n間に駒を入れる隙間がないぞ。",
    },
    // step4: 香車の王手に合駒
    {
      id: "block_lance",
      type: "move",
      board_sfen: "4K4/9/9/9/9/9/9/9/4l4 b S 1",
      instruction: "合駒で香車の王手を防ごう！",
      coach_text: "香車で縦から王手じゃ。\n間に銀を打とう！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 4 },
      },
      correct_moves_alt: [
        { from: { hand: "gi" }, to: { row: 2, col: 4 } },
        { from: { hand: "gi" }, to: { row: 3, col: 4 } },
      ],
      success_text: "合駒成功！香車の効きを\n遮断したぞ。",
      fail_text: "王と香車の間に銀を打とう。",
    },
    // step5: クイズ - 合駒の注意点
    {
      id: "quiz_block_tip",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "合駒で気をつけることは？",
      coach_text: "合駒をするとき、\n注意することがあるぞ。",
      quiz_options: ["合駒した駒がただにならないか", "できるだけ高い駒を使う"],
      quiz_answer: 0,
      success_text: "正解！合駒した駒が\nそのまま取られたら\n駒を損してしまう。\n安い駒で合駒するのが基本じゃ！",
      fail_text: "合駒した駒がただで\n取られないか確認じゃ。",
    },
    // step6: 自力で合駒
    {
      id: "block_finale",
      type: "move",
      board_sfen: "4K4/9/9/9/9/9/4r4/9/9 b P 1",
      instruction: "合駒で王手を防いで仕上げ！",
      coach_text: "仕上げじゃ！\n安い駒で合駒しよう。",
      hand_pieces: { fu: 1 },
      correct_move: {
        from: { hand: "fu" },
        to: { row: 1, col: 4 },
      },
      correct_moves_alt: [
        { from: { hand: "fu" }, to: { row: 2, col: 4 } },
        { from: { hand: "fu" }, to: { row: 3, col: 4 } },
      ],
      success_text: "すばらしい！\n歩で合駒、安い駒で受けたな。\n合駒の受けをマスターしたぞ！",
      fail_text: "王と飛車の間に歩を打とう。",
    },
  ],
};
