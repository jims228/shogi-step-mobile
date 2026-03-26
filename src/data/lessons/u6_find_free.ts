import type { LessonData } from "../../lesson/types";

export const U6_FIND_FREE: LessonData = {
  id: "u6_find_free",
  title: "ただの駒を見つけよう",
  unit: "u6",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: ガイド - ただの駒とは
    {
      id: "quiz_what_is_free",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "「ただの駒」ってどういう意味？",
      coach_text: "「ただの駒」とは\nどういう意味かわかるかな？",
      quiz_options: ["守られていない駒", "安い駒"],
      quiz_answer: 0,
      success_text: "正解！守られていない駒を\n「ただの駒」と言うんじゃ。\n取っても取り返されないぞ！",
      fail_text: "守られていない駒のことを\n「ただの駒」と言うんじゃ。",
    },
    // step2: 実行 - ただの金を取る
    {
      id: "take_free_gold",
      type: "move",
      board_sfen: "9/9/9/4g4/3R5/9/9/9/9 b - 1",
      instruction: "ただの金を取ろう！",
      coach_text: "あの金は守られておらん！\nただの駒じゃ。\n飛車で取ろう！",
      arrows: [{ from: [4, 3], to: [3, 3] }],
      correct_move: {
        from: { row: 4, col: 3 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4R4/9/9/9/9/9 b G 1",
      success_text: "金をただで取ったぞ！\n5点の丸得じゃ。",
      fail_text: "飛車で守られていない金を取ろう。",
    },
    // step3: 実行 - ただの銀を取る
    {
      id: "take_free_silver",
      type: "move",
      board_sfen: "9/9/7s1/9/9/9/9/7B1/9 b - 1",
      instruction: "ただの銀を取ろう！",
      coach_text: "銀が守られておらんぞ。\n角で取ってしまおう！",
      arrows: [{ from: [7, 7], to: [2, 2] }],
      correct_move: {
        from: { row: 7, col: 7 },
        to: { row: 2, col: 2 },
      },
      result_sfen: "9/9/7B1/9/9/9/9/9/9 b S 1",
      success_text: "銀をただで取ったぞ！\n角の長い効きで遠くの駒も\n取れるんじゃ。",
      fail_text: "角で守られていない銀を取ろう。",
    },
    // step4: 実行 - ただの桂馬を取る
    {
      id: "take_free_knight",
      type: "move",
      board_sfen: "9/9/9/9/4n4/4G4/9/9/9 b - 1",
      instruction: "ただの桂馬を取ろう！",
      coach_text: "桂馬が守られておらんぞ。\n金で取ろう！",
      correct_move: {
        from: { row: 5, col: 4 },
        to: { row: 4, col: 4 },
      },
      result_sfen: "9/9/9/9/4G4/9/9/9/9 b N 1",
      success_text: "桂馬をただで取ったぞ！\n3点の得じゃ。",
      fail_text: "金で桂馬を取ろう。",
    },
    // step5: クイズ - ただの駒を見つける意識
    {
      id: "quiz_free_piece_habit",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "対局中、まず何を探す？",
      coach_text: "対局中、自分の手番で\nまず何を探すべきかな？",
      quiz_options: ["ただの駒がないか探す", "とりあえず攻める"],
      quiz_answer: 0,
      success_text: "正解！まず相手のただの駒が\nないか探すのが大事じゃ。\nただで取れる駒があったら\n大チャンスじゃぞ！",
      fail_text: "まずただの駒がないか\n探す癖をつけるんじゃ。",
    },
    // step6: 自力 - ただの飛車を取る
    {
      id: "take_free_finale",
      type: "move",
      board_sfen: "9/9/9/9/9/4r4/4B4/9/9 b - 1",
      instruction: "ただの駒を見つけて取ろう！",
      coach_text: "仕上げじゃ！\nただの駒を見つけて取ろう。",
      correct_move: {
        from: { row: 6, col: 4 },
        to: { row: 5, col: 4 },
      },
      result_sfen: "9/9/9/9/9/4B4/9/9/9 b R 1",
      success_text: "すばらしい！\nただの飛車を見つけて取ったな！\n10点の大得じゃ！",
      fail_text: "守られていない駒を探して取ろう。",
    },
  ],
};
