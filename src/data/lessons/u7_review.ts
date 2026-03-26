import type { LessonData } from "../../lesson/types";

export const U7_REVIEW: LessonData = {
  id: "u7_review",
  title: "Unit 7 まとめ",
  unit: "u7",
  type: "review",
  reward_xp: 15,
  steps: [
    // step1: クイズ - 囲いの目的
    {
      id: "review_purpose",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "囲いの目的は？",
      coach_text: "Unit 7の復習じゃ。\n囲いは何のためにあるかな？",
      quiz_options: ["王を安全にするため", "相手を攻めるため", "駒を成るため"],
      quiz_answer: 0,
      success_text: "正解！王を安全にしてから\n攻めるのが基本じゃ。",
      fail_text: "囲いは王を安全にする\nためにあるぞ。",
    },
    // step2: 矢倉を作る
    {
      id: "review_yagura",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/1G7/1K7 b S 1",
      instruction: "矢倉を完成させよう！",
      coach_text: "矢倉の形を覚えておるかな？\n銀を正しい位置に打とう！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 7, col: 2 },
      },
      result_sfen: "9/9/9/9/9/9/9/1GS6/1K7 b - 1",
      success_text: "金の横に銀じゃ！\n矢倉の形を覚えておるな。",
      fail_text: "金の横に銀を打とう。",
    },
    // step3: 美濃を作る
    {
      id: "review_mino",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/9/1KG6 b S 1",
      instruction: "美濃囲いを完成させよう！",
      coach_text: "美濃囲いの形じゃ。\n銀を正しい位置に打とう！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 7, col: 2 },
      },
      result_sfen: "9/9/9/9/9/9/9/2S6/1KG6 b - 1",
      success_text: "金の上に銀じゃ！\n美濃囲いの形もばっちりじゃ。",
      fail_text: "金の上に銀を打とう。",
    },
    // step4: 比較 - 居飛車に合う囲い
    {
      id: "review_compare",
      type: "compare",
      board_sfen: "9/9/9/9/9/9/9/9/4K3R b - 1",
      instruction: "居飛車にはどっちの囲い？",
      coach_text: "飛車が右にあるとき、\nどっちの囲いが合うかな？",
      compare_options: [
        {
          label: "矢倉（上部に強い）",
          description: "居飛車の定番",
        },
        {
          label: "美濃（横に強い）",
          description: "振り飛車の定番",
        },
      ],
      compare_answer: 0,
      why_text: "居飛車は上からの攻めが\n多いから矢倉が合うぞ！",
      success_text: "正解！居飛車には矢倉じゃ。",
      fail_text: "居飛車には上部に強い\n矢倉が合うぞ。",
    },
    // step5: 囲いの弱点を突く
    {
      id: "review_attack",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/2S6/1KG6 b G 1",
      instruction: "美濃の弱点を突こう！",
      coach_text: "美濃囲いの弱点は？\n急所に金を打とう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 7, col: 1 },
      },
      result_sfen: "9/9/9/9/9/9/9/1GS6/1KG6 b - 1",
      success_text: "頭金で美濃を崩したぞ！\n弱点もしっかり覚えておるな。",
      fail_text: "王の頭に金を打とう。\n頭金が美濃の急所じゃ。",
    },
    // step6: まとめクイズ
    {
      id: "review_final",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "「玉の守りは金銀○枚」？",
      coach_text: "Unit 7の仕上げじゃ。\n囲いの格言を覚えておるかな？\n「玉の守りは金銀…」",
      quiz_options: ["3枚", "2枚", "4枚"],
      quiz_answer: 0,
      success_text: "すばらしい！\nUnit 7をクリアしたぞ！\n「玉の守りは金銀3枚」\n矢倉も美濃も金銀3枚で守る。\n囲いの基本をマスターしたな！",
      fail_text: "「玉の守りは金銀3枚」\nが基本じゃよ。",
    },
  ],
};
