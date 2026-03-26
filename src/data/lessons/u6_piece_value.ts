import type { LessonData } from "../../lesson/types";

export const U6_PIECE_VALUE: LessonData = {
  id: "u6_piece_value",
  title: "駒の価値",
  unit: "u6",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 歩の点数
    {
      id: "quiz_fu_value",
      type: "quiz",
      board_sfen: "9/9/9/9/4P4/9/9/9/9 b - 1",
      instruction: "歩は何点？",
      coach_text: "駒にはそれぞれ「価値」が\nあるんじゃ。\n一番安い歩は何点かな？",
      quiz_options: ["1点", "3点"],
      quiz_answer: 0,
      success_text: "正解！歩は1点じゃ。\n一番安い駒じゃが、\n数が多くて大事な駒じゃよ。",
      fail_text: "歩は1点じゃ。一番安い駒じゃよ。",
    },
    // step2: クイズ - 香桂の点数
    {
      id: "quiz_ky_ke_value",
      type: "quiz",
      board_sfen: "9/9/9/9/3LN4/9/9/9/9 b - 1",
      instruction: "香車と桂馬は何点？",
      coach_text: "香車と桂馬は\n歩より強いぞ。\n何点くらいかな？",
      quiz_options: ["3点", "5点"],
      quiz_answer: 0,
      success_text: "正解！香車も桂馬も3点じゃ。\n歩の3倍の価値があるぞ。",
      fail_text: "香桂は3点じゃ。",
    },
    // step3: クイズ - 銀金の点数
    {
      id: "quiz_gi_ki_value",
      type: "quiz",
      board_sfen: "9/9/9/9/3SG4/9/9/9/9 b - 1",
      instruction: "銀と金は何点？",
      coach_text: "銀と金は\nさらに強い駒じゃ。\n何点くらいかな？",
      quiz_options: ["5点", "8点"],
      quiz_answer: 0,
      success_text: "正解！銀も金も5点じゃ。\n攻めにも守りにも使える\n頼もしい駒じゃよ。",
      fail_text: "銀金は5点じゃ。",
    },
    // step4: クイズ - 角と飛車の点数
    {
      id: "quiz_ka_hi_value",
      type: "quiz",
      board_sfen: "9/9/9/9/3BR4/9/9/9/9 b - 1",
      instruction: "角は何点？飛車は？",
      coach_text: "大駒は特別に強いぞ。\n角は8点、飛車は10点じゃ。\nどっちが高いかな？",
      quiz_options: ["飛車（10点）が高い", "角（8点）が高い"],
      quiz_answer: 0,
      success_text: "正解！飛車が10点で最強の駒じゃ。\n角も8点でとても強いぞ。",
      fail_text: "飛車が10点、角が8点じゃ。\n飛車の方が高いぞ。",
    },
    // step5: クイズ - 王の価値
    {
      id: "quiz_ou_value",
      type: "quiz",
      board_sfen: "9/9/9/9/4K4/9/9/9/9 b - 1",
      instruction: "王の価値は？",
      coach_text: "王様の価値は\n特別じゃ。\nどのくらいの価値があるかな？",
      quiz_options: ["無限大（取られたら負け）", "15点"],
      quiz_answer: 0,
      success_text: "正解！王は無限大じゃ。\n取られたら負けだから、\nどんな駒よりも大事じゃよ。",
      fail_text: "王は無限大じゃ。\n取られたら負けだからな。",
    },
    // step6: クイズ - まとめ確認
    {
      id: "quiz_value_summary",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "飛車と銀、どっちが価値が高い？",
      coach_text: "仕上げじゃ！\n飛車（10点）と銀（5点）、\nどっちが価値が高いかな？",
      quiz_options: ["飛車（10点）", "銀（5点）"],
      quiz_answer: 0,
      success_text: "すばらしい！\n駒の価値をマスターしたな！\n歩1、香桂3、銀金5、角8、飛10\nこれを覚えておくんじゃぞ。",
      fail_text: "飛車は10点、銀は5点じゃ。\n飛車の方が価値が高いぞ。",
    },
  ],
};
