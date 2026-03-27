import type { LessonData } from "../../lesson/types";

export const TSUME1_DRILL_04: LessonData = {
  id: "tsume1_drill_04",
  title: "1手詰め練習④",
  unit: "u4",
  type: "learn",
  reward_xp: 10,
  steps: [
    // 問題1: 角打ちで詰み（右端の王、金が上を塞ぐ）
    // k at (0,8), sente G at (0,7). Drop B at (1,7).
    // B(1,7) attacks diagonals: (0,8)=king, (0,6), (2,6), (2,8). Check!
    // King: (0,7) sente G blocks. (0,8) king pos. (1,8) attacked by B? No, B doesn't attack (1,8).
    // Wait B at (1,7) attacks diags: up-right (0,8), up-left (0,6), down-right (2,8), down-left (2,6).
    // King at (0,8) in check. Can go to: (1,8) - not attacked by B. Not attacked by G at (0,7). Free!
    // NOT MATE. Need to block (1,8) too.
    // Add gote p at (1,8): k(0,8), G(0,7), p(1,8). Drop B at (1,7).
    // King: (0,7) sente G. (1,8) own pawn. (1,7) has B. Mate!
    // But can p at (1,8) capture B at (1,7)? Gote pawn moves down (row+1), so from (1,8) to (2,8). Can't capture. Mate!
    // SFEN: "7Gk/8p" - drop B at (1,7)
    {
      id: "drill04_p1",
      type: "move",
      board_sfen: "7Gk/8p/9/9/9/9/9/9/9 b B 1",
      instruction: "角を打って詰まそう！",
      coach_text: "角は斜めに効くぞ。\n斜めから王手をかけよう！",
      hand_pieces: { ka: 1 },
      correct_move: {
        from: { hand: "ka" },
        to: { row: 1, col: 7 },
      },
      result_sfen: "7Gk/7Bp/9/9/9/9/9/9/9 b - 1",
      success_text: "角で詰みじゃ！\n斜めの効きで王手、\n金と歩で逃げ場なしじゃ。",
      fail_text: "角の斜めの効きで\n王手がかかる場所に打とう。",
    },
    // 問題2: 角打ちで詰み（左端の王）
    // k at (0,0), sente G at (0,1), gote p at (1,0). Drop B at (1,1).
    // B(1,1) attacks (0,0)=king diag-up-left. Check!
    // King: (0,1) sente G. (1,0) own pawn. (1,1) B. Mate!
    // Can p at (1,0) capture B at (1,1)? No, pawn moves straight down.
    // SFEN: "kG7/p8"
    {
      id: "drill04_p2",
      type: "move",
      board_sfen: "kG7/p8/9/9/9/9/9/9/9 b B 1",
      instruction: "角を打って詰まそう！",
      coach_text: "左端の王様じゃ。\n角で詰ませよう！",
      hand_pieces: { ka: 1 },
      correct_move: {
        from: { hand: "ka" },
        to: { row: 1, col: 1 },
      },
      result_sfen: "kG7/pB7/9/9/9/9/9/9/9 b - 1",
      success_text: "角で詰み！\n金と歩と端で逃げ場がないな。",
      fail_text: "角で斜めから王手をかけよう。",
    },
    // 問題3: 盤上の角を動かして詰み
    // k at (0,8), sente G at (0,7), gote p at (1,8). B at (3,5) moves to (1,7).
    // B(1,7) attacks (0,8)=king. Same as problem 1. Mate!
    // SFEN: "7Gk/8p/9/5B3"
    {
      id: "drill04_p3",
      type: "move",
      board_sfen: "7Gk/8p/9/5B3/9/9/9/9/9 b - 1",
      instruction: "角を動かして詰まそう！",
      coach_text: "盤上の角を動かして\n王手をかけるぞ！",
      correct_move: {
        from: { row: 3, col: 5 },
        to: { row: 1, col: 7 },
      },
      result_sfen: "7Gk/7Bp/9/9/9/9/9/9/9 b - 1",
      success_text: "角を斜めに走らせて詰み！\n見事じゃ。",
      fail_text: "角を斜めに動かして\n王手をかけよう。",
    },
    // 問題4: 角打ちで詰み（金2枚が協力）
    // k at (0,8), sente G at (1,8), sente G at (0,7). Drop B at (1,7).
    // B(1,7) attacks (0,8)=king. King: (0,7) sente G. (1,8) sente G. Mate!
    // Can anything capture B? No gote pieces nearby.
    // SFEN: "7Gk/7GR" wait no. "7Gk/8G" - 2 golds.
    // Actually wait, G at (1,8) and G at (0,7). Drop B at (1,7).
    // SFEN row 0: "7Gk" (G at col 7, k at col 8), row 1: "8G" (G at col 8)
    {
      id: "drill04_p4",
      type: "move",
      board_sfen: "7Gk/8G/9/9/9/9/9/9/9 b B 1",
      instruction: "角を打って詰まそう！",
      coach_text: "金が2枚で逃げ道を\n塞いでいるぞ。\n角で仕留めよう！",
      hand_pieces: { ka: 1 },
      correct_move: {
        from: { hand: "ka" },
        to: { row: 1, col: 7 },
      },
      result_sfen: "7Gk/7BG/9/9/9/9/9/9/9 b - 1",
      success_text: "角で詰みじゃ！\n金が逃げ道を完全に\n塞いでくれているな。",
      fail_text: "角の斜めの効きで\n王手をかけよう。",
    },
    // 問題5: 角打ちで詰み（端の王、飛車が協力）
    // k at (0,8), sente R at (1,8). Drop B at (1,7).
    // B(1,7) attacks diag-up-right (0,8)=king. Check!
    // King: (0,7) attacked by B diag-up-left? No, B at (1,7) up-left is (0,6). (0,7) is not attacked by B.
    // Wait - need (0,7) blocked too. Let me add a piece.
    // k at (0,8), gote p at (0,7), sente R at (1,8). Drop B at (1,7).
    // King: (0,7) own pawn. (1,8) sente R. (1,7) B. Mate!
    // SFEN: "7pk/8R"
    {
      id: "drill04_p5",
      type: "move",
      board_sfen: "7pk/8R/9/9/9/9/9/9/9 b B 1",
      instruction: "角を打って詰まそう！",
      coach_text: "飛車が下を塞いでいるぞ。\n角で仕留めよう！",
      hand_pieces: { ka: 1 },
      correct_move: {
        from: { hand: "ka" },
        to: { row: 1, col: 7 },
      },
      result_sfen: "7pk/7BR/9/9/9/9/9/9/9 b - 1",
      success_text: "角で詰みじゃ！\n飛車と角の連携、見事じゃ。",
      fail_text: "角で斜めから王手をかけよう。",
    },
    // 問題6: 盤上の角を動かして詰み（左端）
    // k at (0,0), sente G at (0,1), gote p at (1,0). B at (5,5) moves to (1,1).
    // B(1,1) attacks (0,0)=king. King: (0,1) G. (1,0) own pawn. (1,1) B. Mate!
    // SFEN: "kG7/p8/9/9/9/5B3"
    {
      id: "drill04_p6",
      type: "move",
      board_sfen: "kG7/p8/9/9/9/5B3/9/9/9 b - 1",
      instruction: "角を動かして詰まそう！",
      coach_text: "仕上げじゃ！\n角を走らせて仕留めよう！",
      correct_move: {
        from: { row: 5, col: 5 },
        to: { row: 1, col: 1 },
      },
      result_sfen: "kG7/pB7/9/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n角の詰みをマスターしたな。\n斜めの長い効きは\n詰みの強い武器じゃ！",
      fail_text: "角を斜めに動かして\n王手をかけよう。",
    },
  ],
};
