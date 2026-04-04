import type { LessonData } from "../../lesson/types";

export const U3_NIFU: LessonData = {
  id: "u3_nifu",
  title: "二歩は反則",
  unit: "u3",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 二歩とは？
    {
      id: "quiz_nifu_what",
      type: "quiz",
      board_sfen: "9/9/9/9/4P4/9/9/4P4/9 b - 1",
      instruction: "「二歩」ってどういうルール？",
      coach_text: "将棋には「二歩」という\n大事なルールがあるぞ。\nどんなルールじゃろう？",
      quiz_options: ["同じ列に歩を2枚置けない", "歩を2マス進めてはいけない"],
      quiz_answer: 0,
      success_text: "正解！同じ縦の列に\n自分の歩を2枚置くことは\nできないんじゃ。\nこれを「二歩」と言って反則じゃ！",
      fail_text: "二歩は同じ列に歩を2枚\n置いてはいけないルールじゃ。",
    },
    // step2: クイズ - この列に歩を打てる？（打てない）
    {
      id: "quiz_nifu_no",
      type: "quiz",
      board_sfen: "9/9/9/9/4P4/9/9/9/9 b P 1",
      instruction: "5筋に歩を打てる？",
      coach_text: "5筋にはもう歩がいるぞ。\nここに歩を打てるかな？",
      quiz_options: ["打てない（二歩になる）", "打てる"],
      quiz_answer: 0,
      success_text: "正解！5筋にはもう歩がいるから\nここに歩を打ったら二歩じゃ！\n反則になるぞ。",
      fail_text: "同じ列に歩が2枚になるから\n打てないぞ。",
    },
    // step3: 歩がない列に打つ（正しいドロップ）
    {
      id: "drop_correct_column",
      type: "move",
      board_sfen: "9/9/9/9/4P4/9/9/9/9 b P 1",
      instruction: "歩を二歩にならない場所に打とう！",
      coach_text: "5筋には打てないが、\n他の列なら打てるぞ！\n隣の列に歩を打とう。",
      hand_pieces: { fu: 1 },
      arrows: [{ from: "hand_fu", to: [4, 5] }],
      correct_move: {
        from: { hand: "fu" },
        to: { row: 4, col: 5 },
      },
      result_sfen: "9/9/9/9/4PP3/9/9/9/9 b - 1",
      success_text: "二歩にならない列に打てたな！\n他の列なら問題ないぞ。",
      fail_text: "5筋以外の列に歩を打とう。",
    },
    // step4: クイズ - と金がいる列は？
    {
      id: "quiz_tokin_column",
      type: "quiz",
      board_sfen: "9/9/4+P4/9/9/9/9/9/9 b P 1",
      instruction: "と金がいる列に歩を打てる？",
      coach_text: "5筋にと金がいるぞ。\nと金は「成った歩」じゃが、\nこの列に歩を打てるかな？",
      quiz_options: ["打てる（と金は歩じゃない）", "打てない（二歩になる）"],
      quiz_answer: 0,
      success_text: "正解！と金は「成り駒」であって\n「歩」ではないんじゃ。\nだから同じ列に歩を打っても\n二歩にはならないぞ！",
      fail_text: "と金は歩ではないから、\nその列に歩を打てるぞ。",
    },
    // step5: 正しい列に歩を打つ（複数の歩がある盤面）
    {
      id: "drop_avoid_nifu",
      type: "move",
      board_sfen: "9/9/9/9/2P1P4/9/9/9/9 b P 1",
      instruction: "二歩にならない列に歩を打とう！",
      coach_text: "3筋と5筋に歩があるぞ。\nどの列なら打てるかな？\n空いている列に打とう！",
      hand_pieces: { fu: 1 },
      correct_move: {
        from: { hand: "fu" },
        to: { row: 4, col: 3 },
      },
      correct_moves_alt: [
        { from: { hand: "fu" }, to: { row: 3, col: 3 } },
        { from: { hand: "fu" }, to: { row: 5, col: 3 } },
        { from: { hand: "fu" }, to: { row: 4, col: 5 } },
        { from: { hand: "fu" }, to: { row: 3, col: 5 } },
        { from: { hand: "fu" }, to: { row: 5, col: 5 } },
      ],
      success_text: "二歩にならない列に\nちゃんと打てたな！",
      fail_text: "歩がない列を選んで打とう。",
    },
    // step6: クイズ - 二歩は反則
    {
      id: "quiz_nifu_penalty",
      type: "quiz",
      board_sfen: "9/9/9/9/4P4/9/9/9/9 b P 1",
      instruction: "二歩を打ってしまったらどうなる？",
      coach_text: "もし対局中に二歩を\n打ってしまったら\nどうなるかな？",
      quiz_options: ["反則負け", "やり直しできる"],
      quiz_answer: 0,
      success_text: "正解！二歩は反則負けじゃ！\n歩を打つときは必ず\nその列に歩がないか\n確認するんじゃよ！",
      fail_text: "二歩は即反則負け。\nとても重いルールじゃ。",
    },
  ],
};
