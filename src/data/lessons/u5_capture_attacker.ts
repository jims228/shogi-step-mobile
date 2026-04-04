import type { LessonData } from "../../lesson/types";

export const U5_CAPTURE_ATTACKER: LessonData = {
  id: "u5_capture_attacker",
  title: "攻め駒を取って受けよう",
  unit: "u5",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 王で王手駒を取る（ガイド）
    {
      id: "capture_with_king",
      type: "move",
      board_sfen: "4K4/4g4/9/9/9/9/9/9/9 b - 1",
      instruction: "王手駒を王で取ろう！",
      coach_text: "金で王手じゃ。\n王で直接取ってしまおう！\n取ると持ち駒にもなるぞ。",
      arrows: [{ from: [0, 4], to: [1, 4] }],
      correct_move: {
        from: { row: 0, col: 4 },
        to: { row: 1, col: 4 },
      },
      result_sfen: "9/4K4/9/9/9/9/9/9/9 b G 1",
      success_text: "王手駒を取って、\nしかも金が持ち駒になったぞ！\n取れるなら取るのが一番得じゃ。",
      fail_text: "王で相手の金を取ろう。",
    },
    // step2: 味方の駒で王手駒を取る
    {
      id: "capture_with_ally",
      type: "move",
      board_sfen: "4K4/4g4/4G4/9/9/9/9/9/9 b - 1",
      instruction: "味方の金で王手駒を取ろう！",
      coach_text: "相手の金で王手じゃが、\n味方の金で取り返せるぞ！\n王ではなく味方の駒で取ろう。",
      arrows: [{ from: [2, 4], to: [1, 4] }],
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4K4/4G4/9/9/9/9/9/9/9 b G 1",
      success_text: "味方の金で取れたぞ！\n王を動かさずに\n守れるのがいいな。",
      fail_text: "味方の金で相手の金を取ろう。",
    },
    // step3: クイズ - 取れないケース
    {
      id: "quiz_cant_capture",
      type: "quiz",
      board_sfen: "4K4/9/9/9/4r4/9/9/9/9 b - 1",
      instruction: "遠くの飛車を直接取れる？",
      coach_text: "遠くから飛車で王手じゃ。\n王で直接取れるかな？",
      quiz_options: ["取れない（遠すぎる）", "取れる"],
      quiz_answer: 0,
      success_text: "正解！飛車は遠くにいるから\n直接取れないんじゃ。\nこういうときは逃げるか\n合駒で対応じゃ。",
      fail_text: "王は1マスしか動けないから\n遠くの駒は取れないぞ。",
    },
    // step4: 味方の飛車で王手駒を取る
    {
      id: "capture_with_rook",
      type: "move",
      board_sfen: "4K4/4g4/9/9/9/9/9/9/4R4 b - 1",
      instruction: "飛車で王手駒を取ろう！",
      coach_text: "味方の飛車で\n相手の金を取れるぞ！",
      correct_move: {
        from: { row: 8, col: 4 },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4K4/4R4/9/9/9/9/9/9/9 b G 1",
      success_text: "飛車で取ったぞ！\n遠くの味方でも\n取れることがあるんじゃ。",
      fail_text: "飛車をまっすぐ進めて\n相手の金を取ろう。",
    },
    // step5: クイズ - 取り返されないか注意
    {
      id: "quiz_recapture",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "王手駒を取るとき注意することは？",
      coach_text: "王手駒を取るとき、\n気をつけることがあるぞ。",
      quiz_options: ["取った駒がただにならないか", "とにかく取ればいい"],
      quiz_answer: 0,
      success_text: "正解！取った後に\nさらに取り返されたら\n損してしまうぞ。\n安全に取れるか確認じゃ！",
      fail_text: "取った後に取り返されないか\n確認するのが大事じゃ。",
    },
    // step6: 仕上げ
    {
      id: "capture_finale",
      type: "move",
      board_sfen: "3K5/3g5/9/9/9/9/9/9/3R5 b - 1",
      instruction: "王手駒を取って仕上げ！",
      coach_text: "仕上げじゃ！\n味方の駒で王手駒を取ろう。",
      correct_move: {
        from: { row: 8, col: 3 },
        to: { row: 1, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 0, col: 3 }, to: { row: 1, col: 3 } },
      ],
      success_text: "すばらしい！\n「取る」受けをマスターしたな！\n取れるときは積極的に取ろう。",
      fail_text: "相手の金を取れる駒で取ろう。",
    },
  ],
};
