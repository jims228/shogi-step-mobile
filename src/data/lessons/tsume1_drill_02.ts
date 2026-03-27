import type { LessonData } from "../../lesson/types";

export const TSUME1_DRILL_02: LessonData = {
  id: "tsume1_drill_02",
  title: "1手詰め練習②",
  unit: "u4",
  type: "learn",
  reward_xp: 10,
  steps: [
    // 問題1: 銀打ちで詰み（右端、自歩が下を塞ぐ）
    // k at (0,8), gote p at (1,8). Drop S at (1,7).
    // S(1,7) attacks (0,7) forward, (0,8) diag-right = king. (0,7) covered by S. (1,8) own pawn. Mate!
    {
      id: "drill02_p1",
      type: "move",
      board_sfen: "8k/8p/9/9/9/9/9/9/9 b S 1",
      instruction: "銀を打って詰まそう！",
      coach_text: "銀は斜め前にも効くぞ。\nどこに打てば詰みかな？",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 7 },
      },
      result_sfen: "8k/7Sp/9/9/9/9/9/9/9 b - 1",
      success_text: "銀で詰みじゃ！\n斜め前の効きで王手、\n自歩と端で逃げ場なしじゃ。",
      fail_text: "銀の斜めの効きで\n王手がかかる場所に打とう。",
    },
    // 問題2: 銀打ちで詰み（左端）
    // k at (0,0), gote p at (1,0). Drop S at (1,1).
    // S(1,1) attacks (0,1) forward, (0,0) diag-left = king. (0,1) covered by S. (1,0) own pawn. Mate!
    {
      id: "drill02_p2",
      type: "move",
      board_sfen: "k8/p8/9/9/9/9/9/9/9 b S 1",
      instruction: "銀を打って詰まそう！",
      coach_text: "左端の王様じゃ。\n銀で詰ませよう！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 1 },
      },
      result_sfen: "k8/pS7/9/9/9/9/9/9/9 b - 1",
      success_text: "銀で詰み！\n歩と端で逃げ場がないな。",
      fail_text: "銀で斜めから王手をかけよう。",
    },
    // 問題3: 盤上の銀を動かして詰み
    // k at (0,8), gote p at (1,8). S at (2,8) moves to (1,7).
    // Same mate pattern as problem 1.
    {
      id: "drill02_p3",
      type: "move",
      board_sfen: "8k/8p/8S/9/9/9/9/9/9 b - 1",
      instruction: "銀を動かして詰まそう！",
      coach_text: "盤上の銀を動かして\n詰ませるぞ！",
      correct_move: {
        from: { row: 2, col: 8 },
        to: { row: 1, col: 7 },
      },
      result_sfen: "8k/7Sp/9/9/9/9/9/9/9 b - 1",
      success_text: "銀を斜めに動かして詰み！\nうまいぞ！",
      fail_text: "銀を動かして\n逃げ場のない王手をかけよう。",
    },
    // 問題4: 銀打ちで詰み（味方の歩で封鎖）
    // k at (0,8), sente P at (0,7), gote p at (1,8). Drop S at (1,7).
    // S(1,7) attacks (0,8)=king diag-right. (0,7) has sente P. (1,8) own pawn. (1,7) has S. Mate!
    {
      id: "drill02_p4",
      type: "move",
      board_sfen: "7Pk/8p/9/9/9/9/9/9/9 b S 1",
      instruction: "銀を打って詰まそう！",
      coach_text: "味方の歩も味方じゃ。\n銀で仕留めよう！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 7 },
      },
      result_sfen: "7Pk/7Sp/9/9/9/9/9/9/9 b - 1",
      success_text: "銀で詰み！\n味方の歩が横を塞いで\n完璧な詰みじゃ。",
      fail_text: "銀で王手をかけて\n逃げ場をなくそう。",
    },
    // 問題5: 盤上の銀を前に出して詰み
    // k at (0,0), gote p at (1,0). S at (2,0) moves to (1,1).
    // S(1,1) attacks (0,0)=king diag-left. (0,1) covered by S forward. (1,0) own pawn. Mate!
    {
      id: "drill02_p5",
      type: "move",
      board_sfen: "k8/p8/S8/9/9/9/9/9/9 b - 1",
      instruction: "銀を動かして詰まそう！",
      coach_text: "銀を動かして\n王様を仕留めよう！",
      correct_move: {
        from: { row: 2, col: 0 },
        to: { row: 1, col: 1 },
      },
      result_sfen: "k8/pS7/9/9/9/9/9/9/9 b - 1",
      success_text: "銀で詰みじゃ！\n斜めに出て王手、見事じゃ。",
      fail_text: "銀を斜め前に動かして\n王手をかけよう。",
    },
    // 問題6: 銀打ちで詰み（味方の金が協力）
    // k at (0,8), sente G at (1,8). Drop S at (1,7).
    // S(1,7) attacks diag-fwd-right (0,8)=king. Check!
    // King: (0,7) attacked by S forward. (1,8) sente G. (1,7) S. Mate!
    {
      id: "drill02_p6",
      type: "move",
      board_sfen: "8k/8G/9/9/9/9/9/9/9 b S 1",
      instruction: "銀を打って詰まそう！",
      coach_text: "仕上げじゃ！\n金と銀の連携で\n詰ませよう！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 7 },
      },
      result_sfen: "8k/7SG/9/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n銀の詰みをマスターしたな。\n斜めの効きを忘れるなよ！",
      fail_text: "銀で王手をかけて\n逃げ場をなくそう。",
    },
  ],
};
