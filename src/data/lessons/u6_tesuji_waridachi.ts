import type { LessonData } from "../../lesson/types";

export const U6_TESUJI_WARIDACHI: LessonData = {
  id: "u6_tesuji_waridachi",
  title: "手筋：割り打ちの銀",
  unit: "u6",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 割り打ちとは
    {
      id: "quiz_what_is_waridachi",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "「割り打ち」ってどんな手筋？",
      coach_text: "「割り打ちの銀」という\n手筋を教えるぞ。\nどんな手筋だと思う？",
      quiz_options: ["2つの駒の間に銀を打つ", "銀を成る"],
      quiz_answer: 0,
      success_text: "正解！2つの駒の間に銀を打って、\nどちらかの駒を必ず取れる\nという手筋じゃ。",
      fail_text: "2つの駒の間に銀を打つ\n手筋じゃよ。",
    },
    // step2: ガイド - 金と飛車の間に銀を打つ
    {
      id: "waridachi_guided",
      type: "move",
      board_sfen: "9/9/9/2g3r2/9/9/9/9/9 b S 1",
      instruction: "金と飛車の間に銀を打とう！",
      coach_text: "金と飛車が離れておるぞ。\n間に銀を打てば\nどちらかを必ず取れるぞ！",
      hand_pieces: { gi: 1 },
      arrows: [{ from: "hand_gi", to: [2, 4] }],
      correct_move: {
        from: { hand: "gi" },
        to: { row: 2, col: 4 },
      },
      result_sfen: "9/9/4S4/2g3r2/9/9/9/9/9 b - 1",
      success_text: "割り打ちの銀じゃ！\n銀の斜め前の効きで\n金も飛車も狙っておるぞ。",
      fail_text: "金と飛車の間に銀を打とう。",
    },
    // step3: クイズ - なぜ銀が適している？
    {
      id: "quiz_why_silver",
      type: "quiz",
      board_sfen: "9/9/4S4/2g3r2/9/9/9/9/9 b - 1",
      instruction: "割り打ちに銀が向いている理由は？",
      coach_text: "なぜ銀で割り打ちするのが\n効果的なんじゃろう？",
      quiz_options: ["斜め前に効くから2駒を狙える", "銀が一番強いから"],
      quiz_answer: 0,
      success_text: "正解！銀は斜め前に効くから、\n左右に離れた2つの駒を\n同時に狙えるんじゃ。",
      fail_text: "銀の斜め前の効きで\n2駒を同時に狙えるからじゃ。",
    },
    // step4: 比較 - 割り打ちを打つか別の手か
    {
      id: "compare_waridachi",
      type: "compare",
      board_sfen: "9/9/9/3g3g1/9/9/9/9/9 b S 1",
      instruction: "銀をどこに打つ？",
      coach_text: "2つの金が見えるぞ。\n割り打ちのチャンスかな？",
      compare_options: [
        {
          label: "間に割り打ち",
          description: "2つの金を同時に狙う",
          move: { from: { hand: "gi" }, to: { row: 2, col: 5 } },
        },
        {
          label: "端に打つ",
          description: "1つだけ狙う",
          move: { from: { hand: "gi" }, to: { row: 2, col: 0 } },
        },
      ],
      compare_answer: 0,
      why_text: "間に打てばどちらかの金を\n必ず取れるぞ！\n1つだけ狙うより\n2つ同時に狙う方が効率的じゃ。",
      success_text: "正解！割り打ちで2枚を狙おう！",
      fail_text: "2つの駒の間に打てば\nどちらかを必ず取れるぞ。",
    },
    // step5: 自力 - 割り打ちを打つ
    {
      id: "waridachi_self",
      type: "move",
      board_sfen: "9/9/9/9/1g5g1/9/9/9/9 b S 1",
      instruction: "割り打ちの銀を打とう！",
      coach_text: "2つの金が離れておるぞ。\n割り打ちの銀を打とう！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4S4/1g5g1/9/9/9/9 b - 1",
      success_text: "割り打ちじゃ！\nどちらの金も逃げられないぞ。",
      fail_text: "2つの金の間に銀を打とう。",
    },
    // step6: 仕上げ - 金と角を狙う
    {
      id: "waridachi_finale",
      type: "move",
      board_sfen: "9/9/9/9/9/2g3b2/9/9/9 b S 1",
      instruction: "割り打ちで仕上げ！",
      coach_text: "仕上げじゃ！\n金と角が見えるぞ。\n割り打ちの銀を打とう！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 4, col: 4 },
      },
      result_sfen: "9/9/9/9/4S4/2g3b2/9/9/9 b - 1",
      success_text: "すばらしい！\n割り打ちの銀をマスターしたな！\n2駒の間に銀を打つ、\nこの手筋は実戦で大活躍じゃぞ。",
      fail_text: "金と角の間に銀を打とう。",
    },
  ],
};
