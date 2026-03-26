import type { LessonData } from "../../lesson/types";

export const U1_REVIEW: LessonData = {
  id: "u1_review",
  title: "Unit 1 まとめ",
  unit: "u1",
  type: "review",
  reward_xp: 15,
  steps: [
    // step1: 歩を進める（復習）
    {
      id: "review_pawn",
      type: "move",
      board_sfen: "9/9/9/9/9/9/4P4/9/9 b - 1",
      instruction: "歩を前に進めよう！",
      coach_text: "Unit 1の復習じゃ！\nまずは基本の歩から。\n前に1マス進めよう。",
      arrows: [{ from: [6, 4], to: [5, 4] }],
      correct_move: {
        from: { row: 6, col: 4 },
        to: { row: 5, col: 4 },
      },
      success_text: "歩は前に1マスじゃな！",
      fail_text: "歩は前に1マス進めるぞ。",
    },
    // step2: 金で王手（復習）
    {
      id: "review_gold_check",
      type: "move",
      board_sfen: "3k5/9/4G4/9/9/9/9/9/9 b - 1",
      instruction: "金で王手をかけよう！",
      coach_text: "金で王手をかけてみよう。\nヒントなしでいけるかな？",
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 2, col: 4 }, to: { row: 1, col: 4 } },
      ],
      success_text: "金で王手じゃ！ばっちりじゃな。",
      fail_text: "王様を取れる場所に金を動かそう。",
    },
    // step3: クイズ - 王は何方向？
    {
      id: "review_king_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/4K4/9/9/9/9 b - 1",
      instruction: "王は何方向に動ける？",
      coach_text: "王様は将棋で一番大事な駒じゃ。\n何方向に動けるかな？",
      quiz_options: ["6方向", "8方向", "4方向"],
      quiz_answer: 1,
      success_text: "正解！王は全方向8マスに動けるぞ！",
      fail_text: "王様は前後左右と斜め、\n全部の方向に動けるぞ。",
    },
    // step4: 王を逃がす
    {
      id: "review_king_escape",
      type: "move",
      board_sfen: "4K4/3g5/9/9/9/9/9/9/9 b - 1",
      instruction: "王手じゃ！王を逃がそう！",
      coach_text: "相手の金に王手をかけられたぞ！\n王を安全な場所に逃がそう。",
      correct_move: {
        from: { row: 0, col: 4 },
        to: { row: 0, col: 5 },
      },
      correct_moves_alt: [
        { from: { row: 0, col: 4 }, to: { row: 1, col: 5 } },
      ],
      success_text: "王が逃げられたぞ！\n王手されたら必ず対応じゃ。",
      fail_text: "王を安全なマスに動かそう。\n相手の金が届かない場所じゃ。",
    },
    // step5: クイズ - 王手されたら？
    {
      id: "review_check_rule",
      type: "quiz",
      board_sfen: "4k4/4G4/9/9/9/9/9/9/9 b - 1",
      instruction: "王手をかけられたらどうする？",
      coach_text: "これは大事なルールじゃ。\n覚えておるかな？",
      quiz_options: ["必ず対応する", "無視してもいい"],
      quiz_answer: 0,
      success_text: "その通り！王手には\n必ず対応しないといけない。\nこれは将棋の大事なルールじゃ！",
      fail_text: "王手を無視したら\n王様を取られてしまうぞ！",
    },
    // step6: 仕上げ - 金で王手
    {
      id: "review_finale",
      type: "move",
      board_sfen: "9/6k2/9/5G3/9/9/9/9/9 b - 1",
      instruction: "金で王手をかけて仕上げ！",
      coach_text: "Unit 1の最後じゃ！\n自信を持って王手をかけよう！",
      correct_move: {
        from: { row: 3, col: 5 },
        to: { row: 2, col: 6 },
      },
      correct_moves_alt: [
        { from: { row: 3, col: 5 }, to: { row: 2, col: 5 } },
      ],
      success_text: "すばらしい！\nUnit 1をクリアしたぞ！\n歩・金・王・王手の基本は\nもうバッチリじゃ！",
      fail_text: "王様を取れる場所に金を動かそう。",
    },
  ],
};
