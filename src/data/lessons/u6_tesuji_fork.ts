import type { LessonData } from "../../lesson/types";

export const U6_TESUJI_FORK: LessonData = {
  id: "u6_tesuji_fork",
  title: "手筋：桂馬の両取り",
  unit: "u6",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 両取りとは
    {
      id: "quiz_what_is_fork",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "「両取り」ってどんな手？",
      coach_text: "「両取り」という手筋を\n教えるぞ。\nどんな手だと思う？",
      quiz_options: ["2つの駒を同時に狙う手", "2回連続で取る手"],
      quiz_answer: 0,
      success_text: "正解！2つの駒を同時に狙って、\nどちらか1つを必ず取れる\nという手筋じゃ。",
      fail_text: "2つの駒を同時に狙う手で、\nどちらかを必ず取れるんじゃ。",
    },
    // step2: ガイド - 桂馬で飛車と角を両取り
    {
      id: "fork_guided",
      type: "move",
      board_sfen: "9/9/1r5b1/9/9/9/9/2N6/9 b - 1",
      instruction: "桂馬で両取りをかけよう！",
      coach_text: "飛車と角が見えるぞ。\n桂馬を跳ねて\n両方を狙おう！",
      arrows: [{ from: [7, 2], to: [5, 3] }],
      correct_move: {
        from: { row: 7, col: 2 },
        to: { row: 5, col: 3 },
      },
      result_sfen: "9/9/1r5b1/9/9/3N5/9/9/9 b - 1",
      success_text: "桂馬の両取りじゃ！\n飛車も角も同時に狙っておるぞ。\n相手はどちらか1つしか\n逃がせないんじゃ。",
      fail_text: "桂馬を跳ねて飛車と角を\n同時に狙おう。",
    },
    // step3: ガイド - 桂馬を打って両取り
    {
      id: "fork_drop_guided",
      type: "move",
      board_sfen: "9/9/2r3g2/9/9/9/9/9/9 b N 1",
      instruction: "桂馬を打って両取り！",
      coach_text: "飛車と金が見えるぞ。\n桂馬を打って\n両取りをかけよう！",
      hand_pieces: { ke: 1 },
      arrows: [{ from: "hand_ke", to: [0, 4] }],
      correct_move: {
        from: { hand: "ke" },
        to: { row: 0, col: 4 },
      },
      result_sfen: "9/9/2r3g2/9/9/9/9/9/9 b - 1",
      success_text: "桂馬を打って両取り！\n持ち駒の桂馬も\n両取りに使えるんじゃ。",
      fail_text: "飛車と金の両方を狙える場所に\n桂馬を打とう。",
    },
    // step4: 比較 - 桂馬をどこに跳ねる？
    {
      id: "compare_fork_position",
      type: "compare",
      board_sfen: "9/9/3r3g1/9/9/9/9/9/4N4 b - 1",
      instruction: "桂馬をどこに打つ？",
      coach_text: "桂馬の持ち駒があるぞ。\nどこに打つのが一番得かな？",
      compare_options: [
        {
          label: "両取りの場所に打つ",
          description: "飛車と金の両方を狙う",
          move: { from: { hand: "ke" }, to: { row: 0, col: 5 } },
        },
        {
          label: "片方だけ狙う",
          description: "飛車だけを狙う",
          move: { from: { hand: "ke" }, to: { row: 0, col: 2 } },
        },
      ],
      compare_answer: 0,
      why_text: "両取りなら2つの駒を狙えて、\n必ず1つは取れるぞ！\n片方だけ狙うより\nずっと効果的じゃ。",
      success_text: "正解！両取りで2駒を狙おう！",
      fail_text: "両方を同時に狙える場所に\n打つのが効果的じゃ。",
    },
    // step5: 自力 - 桂馬を打って両取り
    {
      id: "fork_self",
      type: "move",
      board_sfen: "9/9/1g5r1/9/9/9/9/9/9 b N 1",
      instruction: "桂馬で両取りをかけよう！",
      coach_text: "金と飛車が見えるぞ。\n桂馬を打って\n両取りをかけよう！",
      hand_pieces: { ke: 1 },
      correct_move: {
        from: { hand: "ke" },
        to: { row: 0, col: 3 },
      },
      result_sfen: "3N5/9/1g5r1/9/9/9/9/9/9 b - 1",
      success_text: "両取りじゃ！\n金も飛車も狙っておるぞ。",
      fail_text: "金と飛車の両方を狙える場所に\n桂馬を打とう。",
    },
    // step6: 仕上げ
    {
      id: "fork_finale",
      type: "move",
      board_sfen: "9/9/2r3k2/9/9/9/9/9/9 b N 1",
      instruction: "桂馬の両取りで仕上げ！",
      coach_text: "仕上げじゃ！\n飛車と王に桂馬で\n両取りをかけよう！\n王手と飛車取りの一石二鳥じゃ。",
      hand_pieces: { ke: 1 },
      correct_move: {
        from: { hand: "ke" },
        to: { row: 0, col: 4 },
      },
      result_sfen: "4N4/9/2r3k2/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n王手飛車取りじゃ！\n桂馬の両取りをマスターしたな。\nこれは実戦で最強の手筋の一つじゃぞ。",
      fail_text: "飛車と王の両方を狙える場所に\n桂馬を打とう。",
    },
  ],
};
