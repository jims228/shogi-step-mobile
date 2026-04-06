import type { LessonData } from "../../lesson/types";

export const U4_WHAT_IS_MATE: LessonData = {
  id: "u4_what_is_mate",
  title: "詰みってなに？",
  unit: "u4",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 詰みとは？
    {
      id: "quiz_mate_concept",
      type: "quiz",
      board_sfen: "4k4/9/3GG4/9/9/9/9/9/9 b - 1",
      instruction: "「詰み」ってどういう状態？",
      coach_text: "「詰み」は将棋の勝ち方じゃ。\nどういう状態のことかな？",
      quiz_options: ["王手から逃げられない状態", "王手がかかっている状態"],
      quiz_answer: 0,
      success_text: "正解！王手がかかっていて、\nどう対応しても助からない状態。\nそれが「詰み」じゃ！\n詰ませたら勝ちじゃよ。",
      fail_text: "王手がかかっているだけでは\n詰みではないぞ。\n逃げられない状態が詰みじゃ。",
    },
    // step2: 詰みの例 - 金で王手→逃げ場なし
    {
      id: "mate_example",
      type: "move",
      board_sfen: "4k4/9/3GG4/9/9/9/9/9/9 b - 1",
      instruction: "金を進めて王手をかけよう！",
      coach_text: "金を王様の前に進めると\n王手がかかるぞ。\nしかも…逃げ場がない！\nこれが詰みじゃ。",
      arrows: [{ from: [2, 4], to: [1, 4] }],
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/4G4/3G5/9/9/9/9/9/9 b - 1",
      success_text: "詰み！王手で、しかも\n王様の逃げ場もない！\nこれで勝ちじゃ。",
      fail_text: "金を前に進めてみよう。",
    },
    // step3: クイズ - これは詰み？（詰みじゃない）
    {
      id: "quiz_not_mate",
      type: "quiz",
      board_sfen: "4k4/4G4/3G5/9/9/9/9/9/9 b - 1",
      instruction: "王様は逃げられる？",
      coach_text: "金で王手がかかっておるが…\n王様は横に逃げられるかな？\nもし逃げられたら\n詰みではないぞ。",
      quiz_options: ["逃げられない（詰み）", "横に逃げられる（詰みじゃない）"],
      quiz_answer: 0,
      success_text: "その通り！金が2枚で\n逃げ道を全部塞いでいるから\nこれは詰みじゃ！",
      fail_text: "金が横の逃げ道も塞いでいるぞ。\n王様はどこにも逃げられないんじゃ。",
    },
    // step4: 本当の詰み - 壁際の頭金
    {
      id: "real_mate",
      type: "move",
      board_sfen: "8k/9/7GG/9/9/9/9/9/9 b - 1",
      instruction: "金で詰ましてみよう！",
      coach_text: "王様が端にいるぞ。\n金を前に進めると…\n逃げ場がなくなるぞ！",
      arrows: [{ from: [2, 8], to: [1, 8] }],
      correct_move: {
        from: { row: 2, col: 8 },
        to: { row: 1, col: 8 },
      },
      result_sfen: "8k/8G/7G1/9/9/9/9/9/9 b - 1",
      success_text: "詰み！王様は端で逃げ場がない。\n横は壁、前は金。完璧じゃ！\nこれが「頭金」の基本形じゃよ。",
      fail_text: "金を王様の前に進めよう。",
    },
    // step5: クイズ - 詰みの条件
    {
      id: "quiz_mate_conditions",
      type: "quiz",
      board_sfen: "4k4/4G4/3G5/9/9/9/9/9/9 b - 1",
      instruction: "詰みの条件は？",
      coach_text: "詰みになるためには\n2つの条件が必要じゃ。\nどれかな？",
      quiz_options: ["王手＋逃げ道なし", "王手だけでいい"],
      quiz_answer: 0,
      success_text: "正解！「王手がかかっている」\nかつ「逃げる・合駒・取る、\n全てできない」状態が詰みじゃ！",
      fail_text: "王手だけでは詰みにならないぞ。\n逃げ道も全部塞がないと！",
    },
    // step6: 自力で詰ます
    {
      id: "mate_self_solve",
      type: "move",
      board_sfen: "k8/9/1G7/9/9/9/9/9/9 b G 1",
      instruction: "金を打って詰ましてみよう！",
      coach_text: "仕上げじゃ！\n持ち駒の金を打って\n王様を詰ましてみよう。",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [1, 0] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 0 },
      },
      result_sfen: "k8/G8/1G7/9/9/9/9/9/9 b - 1",
      success_text: "詰み！すばらしい！\n詰みの概念を理解したな。\nこれから1手詰めの\nパターンを覚えていくぞ！",
      fail_text: "金を王様の頭に進めよう。\n端だから逃げ場がないぞ。",
    },
  ],
};
