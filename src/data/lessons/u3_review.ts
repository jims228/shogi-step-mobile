import type { LessonData } from "../../lesson/types";

export const U3_REVIEW: LessonData = {
  id: "u3_review",
  title: "Unit 3 まとめ",
  unit: "u3",
  type: "review",
  reward_xp: 15,
  steps: [
    // step1: 金で歩を取る → 持ち駒になる
    {
      id: "review_capture",
      type: "move",
      board_sfen: "9/9/9/4p4/4G4/9/9/9/9 b - 1",
      instruction: "金で歩を取ろう！",
      coach_text: "Unit 3の復習じゃ！\n取った駒は持ち駒になるぞ。",
      arrows: [{ from: [4, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4G4/9/9/9/9/9 b P 1",
      success_text: "歩が持ち駒になったぞ！",
      fail_text: "歩のいるマスに金を進めよう。",
    },
    // step2: 持ち駒を打つ
    {
      id: "review_drop",
      type: "move",
      board_sfen: "4k4/9/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って王手！",
      coach_text: "持ち駒の金を打って\n王手をかけよう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      correct_moves_alt: [
        { from: { hand: "ki" }, to: { row: 1, col: 3 } },
        { from: { hand: "ki" }, to: { row: 1, col: 5 } },
        { from: { hand: "ki" }, to: { row: 0, col: 3 } },
        { from: { hand: "ki" }, to: { row: 0, col: 5 } },
      ],
      result_sfen: "4k4/4G4/9/9/9/9/9/9/9 b - 1",
      success_text: "持ち駒で王手じゃ！",
      fail_text: "持ち駒の金を打って\n王手をかけよう。",
    },
    // step3: 歩を進めて成る
    {
      id: "review_promote",
      type: "move",
      board_sfen: "9/9/4P4/9/9/9/9/9/9 b - 1",
      instruction: "歩を進めて成ろう！",
      coach_text: "敵陣の歩を進めて成るぞ！\n「成る」を選ぼう。",
      arrows: [{ from: [2, 4], to: [1, 4] }],
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 4 },
      },
      correct_promotion: true,
      result_sfen: "9/4+P3/9/9/9/9/9/9/9 b - 1",
      success_text: "と金になったぞ！\n金の動きができるようになったな。",
      fail_text: "歩を前に進めよう。",
    },
    // step4: クイズ - 二歩のルール
    {
      id: "review_nifu_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/4P4/9/9/9/9 b P 1",
      instruction: "5筋に歩を打てる？",
      coach_text: "5筋にすでに歩があるぞ。\nここに歩を打てるかな？",
      quiz_options: ["打てない（二歩）", "打てる"],
      quiz_answer: 0,
      success_text: "正解！同じ列に歩が2枚は\n二歩で反則じゃ！",
      fail_text: "同じ列に歩は2枚置けないぞ。",
    },
    // step5: クイズ - 成れない駒は？
    {
      id: "review_no_promote",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "成れない駒はどれ？",
      coach_text: "成れない駒を覚えておるかな？",
      quiz_options: ["金と王", "歩と香", "銀と桂"],
      quiz_answer: 0,
      success_text: "正解！金と王は成れないぞ。\nそれ以外の駒は全部成れるんじゃ。",
      fail_text: "金と王だけは成れないぞ。",
    },
    // step6: 仕上げ - 持ち駒を打って王手
    {
      id: "review_finale",
      type: "move",
      board_sfen: "7k1/9/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って王手で仕上げ！",
      coach_text: "Unit 3の最後じゃ！\n持ち駒の金で王手をかけよう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 7 },
      },
      correct_moves_alt: [
        { from: { hand: "ki" }, to: { row: 0, col: 7 } },
        { from: { hand: "ki" }, to: { row: 1, col: 6 } },
        { from: { hand: "ki" }, to: { row: 0, col: 6 } },
      ],
      success_text: "すばらしい！\nUnit 3をクリアしたぞ！\n持ち駒・成り・二歩…\n将棋らしさの基本がバッチリじゃ！",
      fail_text: "王様に王手がかかる場所に\n金を打とう。",
    },
  ],
};
