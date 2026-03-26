import type { LessonData } from "../../lesson/types";

export const U4_REVIEW: LessonData = {
  id: "u4_review",
  title: "Unit 4 まとめ",
  unit: "u4",
  type: "review",
  reward_xp: 15,
  steps: [
    // step1: 頭金で詰ます
    {
      id: "review_head_gold",
      type: "move",
      board_sfen: "8k/9/9/9/9/9/9/9/9 b G 1",
      instruction: "頭金で詰まそう！",
      coach_text: "Unit 4の復習じゃ。\n頭金で詰ませよう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 8 },
      },
      result_sfen: "8k/8G/9/9/9/9/9/9/9 b - 1",
      success_text: "頭金で詰みじゃ！",
      fail_text: "王様の頭に金を打とう。",
    },
    // step2: 腹金で詰ます
    {
      id: "review_belly_gold",
      type: "move",
      board_sfen: "8k/8p/9/9/9/9/9/9/9 b G 1",
      instruction: "腹金で詰まそう！",
      coach_text: "次は腹金じゃ！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Gk/8p/9/9/9/9/9/9/9 b - 1",
      success_text: "腹金で詰みじゃ！",
      fail_text: "王様の横に金を打とう。",
    },
    // step3: クイズ - 詰みの条件
    {
      id: "review_quiz_mate",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "詰みの条件は？",
      coach_text: "詰みの条件を復習じゃ。",
      quiz_options: ["王手＋逃げ道なし＋対応不可", "王手がかかっていること"],
      quiz_answer: 0,
      success_text: "正解！王手＋逃げられない＋\n合駒できない＋取れない\nが詰みの条件じゃ。",
      fail_text: "王手だけでは詰みにならないぞ。",
    },
    // step4: 飛車で詰ます
    {
      id: "review_rook_mate",
      type: "move",
      board_sfen: "kp7/p8/9/9/9/9/9/9/9 b R 1",
      instruction: "飛車で詰まそう！",
      coach_text: "大駒で詰ませよう！",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 0, col: 1 },
      },
      result_sfen: "kR7/p8/9/9/9/9/9/9/9 b - 1",
      success_text: "飛車で詰みじゃ！",
      fail_text: "飛車で王手をかけよう。",
    },
    // step5: クイズ - 王手 vs 詰み
    {
      id: "review_check_vs_mate",
      type: "quiz",
      board_sfen: "4k4/4G4/9/9/9/9/9/9/9 b - 1",
      instruction: "これは詰み？",
      coach_text: "金で王手がかかっている。\n詰みかどうか判断じゃ。",
      quiz_options: ["王手だが詰みではない", "詰み"],
      quiz_answer: 0,
      success_text: "正解！横に逃げられるから\n詰みではないんじゃ。",
      fail_text: "王様は横に逃げられるぞ。",
    },
    // step6: 仕上げ - 1手詰め
    {
      id: "review_finale",
      type: "move",
      board_sfen: "k8/pp7/9/9/9/9/9/9/9 b G 1",
      instruction: "詰まして仕上げ！",
      coach_text: "Unit 4の仕上げじゃ！\n1手で詰ませよう。",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 0 },
      },
      result_sfen: "k8/Gp7/9/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\nUnit 4をクリアしたぞ！\n1手詰めをしっかり\nマスターしたな！",
      fail_text: "金を打って詰ませよう。",
    },
  ],
};
