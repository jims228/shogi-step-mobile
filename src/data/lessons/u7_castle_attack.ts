import type { LessonData } from "../../lesson/types";

export const U7_CASTLE_ATTACK: LessonData = {
  id: "u7_castle_attack",
  title: "囲いの崩し方",
  unit: "u7",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 囲いにも弱点がある
    {
      id: "quiz_castle_weakness",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "囲いに弱点はある？",
      coach_text: "囲いは強い守りの形じゃが、\n完璧な囲いはあるかな？",
      quiz_options: ["どの囲いにも弱点がある", "矢倉は完璧", "美濃は完璧"],
      quiz_answer: 0,
      success_text: "正解！どの囲いにも\n弱点があるんじゃ。\n弱点を突けば崩せるぞ！",
      fail_text: "完璧な囲いはない。\nどの囲いにも弱点があるぞ。",
    },
    // step2: 矢倉の弱点を突く - 横からの攻め
    {
      id: "yagura_weakness",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/1GS6/1KG6 b r 1",
      instruction: "矢倉の弱点を突こう！",
      coach_text: "矢倉は上部に強いが\n横が弱いぞ。\n飛車を横に打って\n弱点を突こう！",
      hand_pieces: { hi: 1 },
      arrows: [{ from: "hand_hi", to: [8, 8] }],
      correct_move: {
        from: { hand: "hi" },
        to: { row: 8, col: 8 },
      },
      correct_moves_alt: [
        { from: { hand: "hi" }, to: { row: 8, col: 7 } },
        { from: { hand: "hi" }, to: { row: 8, col: 6 } },
        { from: { hand: "hi" }, to: { row: 8, col: 5 } },
        { from: { hand: "hi" }, to: { row: 8, col: 4 } },
        { from: { hand: "hi" }, to: { row: 8, col: 3 } },
      ],
      result_sfen: "9/9/9/9/9/9/9/1GS6/1KG5R b - 1",
      success_text: "横から飛車で攻めると\n矢倉は苦しいぞ！\n矢倉の弱点は横じゃ。",
      fail_text: "1段目に飛車を打って\n横から攻めよう。",
    },
    // step3: 美濃の弱点を突く - 上からの攻め
    {
      id: "mino_weakness",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/2S6/1KG6 b G 1",
      instruction: "美濃の弱点を突こう！",
      coach_text: "美濃は横に強いが\n上部が弱いぞ。\n頭金で弱点を突こう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [7, 1] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 7, col: 1 },
      },
      result_sfen: "9/9/9/9/9/9/9/1GS6/1KG6 b - 1",
      success_text: "王の頭に金を打つと\n美濃は一気に苦しくなるぞ！\n美濃の弱点は上部じゃ。",
      fail_text: "王の頭に金を打とう。",
    },
    // step4: クイズ - 矢倉の弱点
    {
      id: "quiz_yagura_weak",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/1GS6/1KG6 b - 1",
      instruction: "矢倉の弱点はどっち？",
      coach_text: "矢倉の弱点を\nもう一度確認じゃ。",
      quiz_options: ["横からの攻め", "上からの攻め"],
      quiz_answer: 0,
      success_text: "正解！矢倉は上部に強いが\n横が手薄じゃ。\n飛車で横から攻めるのが有効！",
      fail_text: "矢倉の弱点は横じゃ。",
    },
    // step5: クイズ - 美濃の弱点
    {
      id: "quiz_mino_weak",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/2S6/1KG6 b - 1",
      instruction: "美濃の弱点はどっち？",
      coach_text: "美濃の弱点を\nもう一度確認じゃ。",
      quiz_options: ["上からの攻め（頭金）", "横からの攻め"],
      quiz_answer: 0,
      success_text: "正解！美濃は横に強いが\n上部が手薄じゃ。\n頭金が急所になるぞ！",
      fail_text: "美濃の弱点は上部じゃ。",
    },
    // step6: 弱点を突く実践
    {
      id: "attack_practice",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/2S6/1KG5r b G 1",
      instruction: "囲いを崩す一手を指そう！",
      coach_text: "仕上げじゃ！\n美濃囲いの弱点を突いて\n王手をかけよう。\n頭金が急所じゃぞ！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [7, 1] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 7, col: 1 },
      },
      result_sfen: "9/9/9/9/9/9/9/1GS6/1KG5r b - 1",
      success_text: "すばらしい！\n頭金で王手じゃ！\n囲いの弱点を突けば\n一気に崩せるぞ。\n弱点を見抜く力が大事じゃ！",
      fail_text: "王の頭に金を打とう。\n頭金が美濃の急所じゃ。",
    },
  ],
};
