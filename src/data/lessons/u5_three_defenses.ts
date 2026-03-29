import type { LessonData } from "../../lesson/types";

export const U5_THREE_DEFENSES: LessonData = {
  id: "u5_three_defenses",
  title: "王手の受け方は3つ",
  unit: "u5",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 王手への対応
    {
      id: "quiz_three_ways",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "王手への対応方法は何通り？",
      coach_text: "王手をかけられたら\n必ず対応しないといけない。\n対応方法は何通りあるかな？",
      quiz_options: ["3通り", "1通り", "2通り"],
      quiz_answer: 0,
      success_text: "正解！王手への対応は3つ。\n①逃げる ②合駒（間に駒を入れる）\n③王手している駒を取る\nこの3つじゃ！",
      fail_text: "逃げる・合駒・取る、\n3つの方法があるぞ。",
    },
    // step2: 逃げる - 王を安全な場所に動かす
    {
      id: "defense_escape",
      type: "move",
      board_sfen: "4K4/9/4r4/9/9/9/9/9/9 b - 1",
      instruction: "王手じゃ！王を逃がそう！",
      coach_text: "飛車で王手がかかっておる。\n①「逃げる」で対応じゃ。\n王を横に逃がそう！",
      arrows: [{ from: [0, 4], to: [0, 3] }],
      correct_move: {
        from: { row: 0, col: 4 },
        to: { row: 0, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 0, col: 4 }, to: { row: 0, col: 5 } },
      ],
      result_sfen: "3K5/9/4r4/9/9/9/9/9/9 b - 1",
      success_text: "逃げて助かったぞ！\nこれが「逃げる」受けじゃ。",
      fail_text: "王を横に動かして逃げよう。",
    },
    // step3: 合駒 - 間に駒を入れる
    {
      id: "defense_block",
      type: "move",
      board_sfen: "4K4/9/9/9/4r4/9/9/9/9 b G 1",
      instruction: "合駒で王手を防ごう！",
      coach_text: "飛車で王手じゃ。\n②「合駒」で対応じゃ。\n間に金を打って防ごう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [1, 4] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4K4/4G4/9/9/4r4/9/9/9/9 b - 1",
      success_text: "合駒で防いだぞ！\n間に駒を入れると\n飛車の効きが遮断されるんじゃ。",
      fail_text: "王と飛車の間に金を打とう。",
    },
    // step4: 取る - 王手している駒を取る
    {
      id: "defense_capture",
      type: "move",
      board_sfen: "4K4/4g4/9/9/9/9/9/9/9 b - 1",
      instruction: "王手している駒を取ろう！",
      coach_text: "金で王手がかかっておる。\n③「取る」で対応じゃ。\n王で相手の金を取ろう！",
      arrows: [{ from: [0, 4], to: [1, 4] }],
      correct_move: {
        from: { row: 0, col: 4 },
        to: { row: 1, col: 4 },
      },
      result_sfen: "9/4K4/9/9/9/9/9/9/9 b G 1",
      success_text: "王手している駒を取ったぞ！\nしかも金が持ち駒になったな。\n取れるなら一番得な対応じゃ。",
      fail_text: "王で相手の金を取ろう。",
    },
    // step5: クイズ - 3つの受け方まとめ
    {
      id: "quiz_summary",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "一番得な受け方は？",
      coach_text: "逃げる・合駒・取る。\n一般的に一番得な\n受け方はどれじゃろう？",
      quiz_options: ["取る（持ち駒が増える）", "逃げる", "合駒"],
      quiz_answer: 0,
      success_text: "正解！取れるなら取るのが一番得。\n持ち駒も増えるからな。\nでも取れないときは\n逃げるか合駒じゃよ。",
      fail_text: "取ると持ち駒が増えるから\n一番得なことが多いぞ。",
    },
    // step6: 自力で対応を選ぶ
    {
      id: "defense_self",
      type: "move",
      board_sfen: "3K5/3g5/9/9/9/9/9/9/9 b - 1",
      instruction: "王手に対応しよう！",
      coach_text: "仕上げじゃ！\n王手への対応を自分で選ぼう。\n取れるなら取るのが一番じゃ！",
      correct_move: {
        from: { row: 0, col: 3 },
        to: { row: 1, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 0, col: 3 }, to: { row: 0, col: 2 } },
        { from: { row: 0, col: 3 }, to: { row: 0, col: 4 } },
        { from: { row: 0, col: 3 }, to: { row: 1, col: 2 } },
        { from: { row: 0, col: 3 }, to: { row: 1, col: 4 } },
      ],
      result_sfen: "9/3K5/9/9/9/9/9/9/9 b G 1",
      success_text: "すばらしい！\n王手の3つの受け方を\nマスターしたな。\n逃げる・合駒・取る、\n覚えておくんじゃよ！",
      fail_text: "王を動かして王手に対応しよう。",
    },
  ],
};
