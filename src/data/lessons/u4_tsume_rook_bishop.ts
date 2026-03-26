import type { LessonData } from "../../lesson/types";

export const U4_TSUME_ROOK_BISHOP: LessonData = {
  id: "u4_tsume_rook_bishop",
  title: "1手詰め：大駒編",
  unit: "u4",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 飛車で1手詰め
    {
      id: "mate_rook_1",
      type: "move",
      board_sfen: "kp7/p8/9/9/9/9/9/9/9 b R 1",
      instruction: "飛車を打って詰まそう！",
      coach_text: "飛車で1手詰めじゃ！\n飛車は縦横にどこまでも\n効くからな。",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 0, col: 1 },
      },
      result_sfen: "kR7/p8/9/9/9/9/9/9/9 b - 1",
      success_text: "飛車で詰みじゃ！\n飛車の横効きが王手になり、\n歩が逃げ道を塞いでいるぞ。",
      fail_text: "飛車を打って王手をかけよう。",
    },
    // step2: 盤上の飛車で詰ます
    {
      id: "mate_rook_move",
      type: "move",
      board_sfen: "kp7/p8/9/9/9/9/9/9/R8 b - 1",
      instruction: "飛車を動かして詰まそう！",
      coach_text: "飛車を上に動かして\n1手詰めじゃ！",
      correct_move: {
        from: { row: 8, col: 0 },
        to: { row: 0, col: 0 },
      },
      result_sfen: "Rp7/p8/9/9/9/9/9/9/9 b - 1",
      success_text: "飛車で詰み！\n縦に一気に動いて王手じゃ。",
      fail_text: "飛車をまっすぐ動かして\n王手をかけよう。",
    },
    // step3: 角で1手詰め
    {
      id: "mate_bishop_1",
      type: "move",
      board_sfen: "kp7/pp7/9/9/9/9/9/9/9 b B 1",
      instruction: "角を打って詰まそう！",
      coach_text: "角で1手詰めじゃ！\n角は斜めにどこまでも\n効くぞ。",
      hand_pieces: { ka: 1 },
      correct_move: {
        from: { hand: "ka" },
        to: { row: 1, col: 1 },
      },
      result_sfen: "kp7/pB7/9/9/9/9/9/9/9 b - 1",
      success_text: "角で詰みじゃ！\n角の斜めの効きで王手、\n歩が逃げ道を塞いでいるぞ。",
      fail_text: "角を打って王手をかけよう。",
    },
    // step4: 盤上の角で詰ます
    {
      id: "mate_bishop_move",
      type: "move",
      board_sfen: "kp7/pp7/9/9/9/9/9/9/7B1 b - 1",
      instruction: "角を動かして詰まそう！",
      coach_text: "角を斜めに動かして\n詰ませよう！",
      correct_move: {
        from: { row: 8, col: 7 },
        to: { row: 1, col: 0 },
      },
      result_sfen: "kp7/Bp7/9/9/9/9/9/9/9 b - 1",
      success_text: "角で詰みじゃ！\n斜めに一気に動いて王手。\n大駒の力じゃな。",
      fail_text: "角を斜めに動かして\n王手をかけよう。",
    },
    // step5: クイズ - 大駒で詰ますポイント
    {
      id: "quiz_big_piece_mate",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "大駒で詰ますときのポイントは？",
      coach_text: "飛車と角で詰ますとき、\n大事なことは何じゃろう？",
      quiz_options: ["遠くから効きを使う", "必ず隣に打つ"],
      quiz_answer: 0,
      success_text: "正解！大駒は遠くから\n効きを使えるのが強みじゃ。\n離れた場所からでも\n王手がかけられるぞ！",
      fail_text: "大駒は遠くからでも\n効きが届くのが強みじゃ。",
    },
    // step6: 仕上げ
    {
      id: "mate_big_finale",
      type: "move",
      board_sfen: "8k/7pp/9/9/9/9/9/9/9 b R 1",
      instruction: "飛車で詰まして仕上げ！",
      coach_text: "仕上げじゃ！\n飛車で1手詰めじゃ。",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Rk/7pp/9/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n大駒の1手詰めをマスターしたな！",
      fail_text: "飛車を打って逃げ場のない\n王手をかけよう。",
    },
  ],
};
