import type { LessonData } from "../../lesson/types";

export const U6_REVIEW: LessonData = {
  id: "u6_review",
  title: "Unit 6 まとめ",
  unit: "u6",
  type: "review",
  reward_xp: 15,
  steps: [
    // step1: クイズ - 駒の価値
    {
      id: "review_piece_value",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "角は何点？",
      coach_text: "Unit 6の復習じゃ。\n角の点数は何点かな？",
      quiz_options: ["8点", "5点"],
      quiz_answer: 0,
      success_text: "正解！角は8点じゃ。\n大駒は価値が高いぞ。",
      fail_text: "角は8点じゃ。",
    },
    // step2: 実行 - ただの駒を取る
    {
      id: "review_take_free",
      type: "move",
      board_sfen: "9/9/9/4g4/9/4R4/9/9/9 b - 1",
      instruction: "ただの駒を取ろう！",
      coach_text: "ただの金が見えるぞ。\n飛車で取ろう！",
      correct_move: {
        from: { row: 5, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4R4/9/9/9/9/9 b G 1",
      success_text: "ただの金を取ったぞ！5点の得じゃ。",
      fail_text: "飛車でただの金を取ろう。",
    },
    // step3: 実行 - 叩きの歩
    {
      id: "review_tataki",
      type: "move",
      board_sfen: "9/9/9/4g4/9/9/9/9/9 b P 1",
      instruction: "叩きの歩を打とう！",
      coach_text: "叩きの歩の復習じゃ。\n金の頭に歩を打とう！",
      hand_pieces: { fu: 1 },
      correct_move: {
        from: { hand: "fu" },
        to: { row: 2, col: 4 },
      },
      result_sfen: "9/9/4P4/4g4/9/9/9/9/9 b - 1",
      success_text: "叩きの歩じゃ！",
      fail_text: "金の頭に歩を打とう。",
    },
    // step4: 実行 - 桂馬の両取り
    {
      id: "review_fork",
      type: "move",
      board_sfen: "9/9/2r3g2/9/9/9/9/9/9 b N 1",
      instruction: "桂馬で両取りをかけよう！",
      coach_text: "桂馬の両取りの復習じゃ。\n飛車と金を同時に狙おう！",
      hand_pieces: { ke: 1 },
      correct_move: {
        from: { hand: "ke" },
        to: { row: 0, col: 4 },
      },
      result_sfen: "4N4/9/2r3g2/9/9/9/9/9/9 b - 1",
      success_text: "両取りじゃ！どちらかを必ず取れるぞ。",
      fail_text: "飛車と金の両方を狙える場所に\n桂馬を打とう。",
    },
    // step5: 比較 - 攻守の判断
    {
      id: "review_attack_defend",
      type: "compare",
      board_sfen: "9/9/9/9/3n5/9/9/9/3K5 b G 1",
      instruction: "攻める？守る？",
      coach_text: "桂馬が王を狙っておるぞ。\nまず何をすべきかな？",
      compare_options: [
        {
          label: "守る",
          description: "王の安全を確保",
          move: { from: { hand: "ki" }, to: { row: 7, col: 4 } },
        },
        {
          label: "攻める",
          description: "相手陣に打ち込む",
          move: { from: { hand: "ki" }, to: { row: 1, col: 1 } },
        },
      ],
      compare_answer: 0,
      why_text: "王が危ないときは\n守りが最優先じゃ！",
      success_text: "正解！まず王の安全を確保じゃ。",
      fail_text: "王が危ないときは守りが先じゃ。",
    },
    // step6: 仕上げ - 割り打ちの銀
    {
      id: "review_finale",
      type: "move",
      board_sfen: "9/9/9/2g3r2/9/9/9/9/9 b S 1",
      instruction: "割り打ちの銀で仕上げ！",
      coach_text: "Unit 6の仕上げじゃ！\n金と飛車が見えるぞ。\n割り打ちの銀を打とう！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 2, col: 4 },
      },
      result_sfen: "9/9/4S4/2g3r2/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\nUnit 6をクリアしたぞ！\n駒の価値・手筋・攻守のバランス、\n全部マスターしたな！",
      fail_text: "金と飛車の間に銀を打とう。",
    },
  ],
};
