import type { LessonData } from "../../lesson/types";

export const U3_CAPTURE_HAND: LessonData = {
  id: "u3_capture_hand",
  title: "取った駒は自分のもの",
  unit: "u3",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 金で歩を取る → 持ち駒になることを説明
    {
      id: "capture_to_hand",
      type: "move",
      board_sfen: "9/9/9/4p4/4G4/9/9/9/9 b - 1",
      instruction: "金で歩を取ろう！",
      coach_text: "将棋の大きな特徴じゃ。取った駒は「持ち駒」として自分のものになるぞ！まずは歩を取ってみよう。",
      arrows: [{ from: [4, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4G4/9/9/9/9/9 b P 1",
      success_text: "歩を取ったら「持ち駒」になったぞ！下の手駒置き場を見てみよう。",
      fail_text: "歩のいるマスに金を進めよう。",
    },
    // step2: クイズ - 取った駒はどうなる？
    {
      id: "quiz_captured",
      type: "quiz",
      board_sfen: "9/9/9/4G4/9/9/9/9/9 b P 1",
      instruction: "取った駒はどうなる？",
      coach_text: "チェスとは違うぞ。将棋で取った駒はどうなるかな？",
      quiz_options: ["自分の持ち駒になる", "消えてなくなる"],
      quiz_answer: 0,
      success_text: "正解！取った駒は消えずに自分のものになるんじゃ！これが将棋の最大の特徴じゃよ。",
      fail_text: "将棋では取った駒は\n自分のものになるんじゃ。",
    },
    // step3: 銀を取る → 持ち駒が増える
    {
      id: "capture_silver",
      type: "move",
      board_sfen: "9/9/9/5s3/4G4/9/9/9/9 b P 1",
      instruction: "金で銀を取ろう！",
      coach_text: "もう1つ取ってみよう。\n持ち駒がどんどん増えるぞ！",
      arrows: [{ from: [4, 4], to: [3, 5] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 5 },
      },
      result_sfen: "9/9/9/5G3/9/9/9/9/9 b PS 1",
      success_text: "銀も持ち駒になったぞ！歩と銀、2つの持ち駒ができたな。",
      fail_text: "銀のいるマスに金を進めよう。",
    },
    // step4: クイズ - 持ち駒はいつ使える？
    {
      id: "quiz_when_use",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b GS 1",
      instruction: "持ち駒はいつ使える？",
      coach_text: "持ち駒は自分の番に使えるぞ。どうやって使うんじゃろう？",
      quiz_options: ["好きな空きマスに打てる", "元の位置にしか置けない"],
      quiz_answer: 0,
      success_text: "正解！持ち駒は好きな空きマスに打てるんじゃ！（いくつかルールはあるがな）これは次のレッスンで学ぶぞ。",
      fail_text: "持ち駒は好きな空きマスに\n打てるんじゃよ。",
    },
    // step5: 飛車を取る（大きな駒を取る喜び）
    {
      id: "capture_rook",
      type: "move",
      board_sfen: "9/9/9/9/4r4/4G4/9/9/9 b - 1",
      instruction: "金で飛車を取ろう！",
      coach_text: "おお！相手の飛車がただじゃ！取れば持ち駒になるぞ。大駒を持ち駒にするのはとても大きいんじゃ！",
      arrows: [{ from: [5, 4], to: [4, 4] }],
      correct_move: {
        from: { row: 5, col: 4 },
        to: { row: 4, col: 4 },
      },
      result_sfen: "9/9/9/9/4G4/9/9/9/9 b R 1",
      success_text: "飛車を持ち駒にしたぞ！大駒の持ち駒はとても強力じゃ。",
      fail_text: "飛車のいるマスに金を進めよう。",
    },
    // step6: クイズ - 持ち駒の価値
    {
      id: "quiz_hand_value",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b R 1",
      instruction: "持ち駒が多いとどうなる？",
      coach_text: "持ち駒はなぜ大事じゃろう？",
      quiz_options: ["攻めの選択肢が増える", "特に意味はない"],
      quiz_answer: 0,
      success_text: "正解！持ち駒が多いほど攻めの選択肢が増えるんじゃ。次のレッスンで実際に打ってみよう！",
      fail_text: "持ち駒は好きな場所に打てるから\n攻めの幅が広がるんじゃ。",
    },
  ],
};
