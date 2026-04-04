import type { LessonData } from "../../lesson/types";

export const TSUME1_DRILL_05: LessonData = {
  id: "tsume1_drill_05",
  title: "1手詰め練習⑤",
  unit: "u4",
  type: "learn",
  reward_xp: 10,
  steps: [
    // 問題1: 金打ちで詰み（尻金パターン）
    // k at (0,8), gote p at (0,7). Drop G at (1,8).
    // G(1,8) attacks (0,8)=king (directly above), (0,7) diag-up-left, (1,7) left.
    // King: (0,7) own pawn AND attacked by G. (1,8) G. (1,7) attacked by G. Mate!
    {
      id: "drill05_p1",
      type: "move",
      board_sfen: "7pk/9/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って詰まそう！",
      coach_text: "尻金じゃ。\n王様の下に金を打とう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 8 },
      },
      result_sfen: "7pk/8G/9/9/9/9/9/9/9 b - 1",
      success_text: "尻金で詰みじゃ！\n王様の下から金で王手、\n端と自歩で逃げ場なしじゃ。",
      fail_text: "王様の下に金を打とう。",
    },
    // 問題2: 銀打ちで詰み
    // k at (0,0), gote p at (1,0), sente P at (0,1). Drop S at (1,1).
    // S(1,1) attacks (0,0)=king diag-up-left, (0,1) forward (has sente P, but S attacks the square).
    // King: (0,1) sente P blocks. (1,0) own pawn. (1,1) S. Mate!
    {
      id: "drill05_p2",
      type: "move",
      board_sfen: "kP7/p8/9/9/9/9/9/9/9 b S 1",
      instruction: "銀を打って詰まそう！",
      coach_text: "銀で斜めから\n仕留めるぞ！",
      hand_pieces: { gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 1 },
      },
      result_sfen: "kP7/pS7/9/9/9/9/9/9/9 b - 1",
      success_text: "銀で詰み！\n味方の歩が横を塞いで\n逃げ場がないぞ。",
      fail_text: "銀で斜めから王手をかけよう。",
    },
    // 問題3: 飛車打ちで詰み（縦効き）
    // k at (0,0), gote p at (0,1), gote p at (1,0). Drop R at (2,0)? No, (1,0) blocks.
    // k at (0,8), gote p at (0,7), gote p at (1,7), gote p at (1,8). Drop R on row 0.
    // SFEN: "7pk/7pp". Already used similar. Let me use a different one.
    // k at (1,8), gote p at (0,8), gote p at (0,7), gote p at (2,8). Drop R at (1,0).
    // R(1,0) attacks whole row 1 = king at (1,8). King: (0,8) own pawn. (0,7) own pawn. (2,8) own pawn. (2,7) not attacked by R.
    // Wait (2,7) is free and not on row 1. Not mate.
    // Simpler: k at (0,8), gote p at (1,8), gote p at (1,7). Drop R on row 0.
    // R at (0,0) attacks (0,8)=king on row 0. King: (1,8) own pawn. (1,7) own pawn. Mate!
    // SFEN: "8k/7pp"
    {
      id: "drill05_p3",
      type: "move",
      board_sfen: "8k/7pp/9/9/9/9/9/9/9 b R 1",
      instruction: "飛車を打って詰まそう！",
      coach_text: "飛車の横効きで\n一気に仕留めよう！",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 0, col: 0 },
      },
      correct_moves_alt: [
        { from: { hand: "hi" }, to: { row: 0, col: 1 } },
        { from: { hand: "hi" }, to: { row: 0, col: 2 } },
        { from: { hand: "hi" }, to: { row: 0, col: 3 } },
        { from: { hand: "hi" }, to: { row: 0, col: 4 } },
        { from: { hand: "hi" }, to: { row: 0, col: 5 } },
        { from: { hand: "hi" }, to: { row: 0, col: 6 } },
        { from: { hand: "hi" }, to: { row: 0, col: 7 } },
      ],
      success_text: "飛車の横効きで詰みじゃ！\n自歩が逃げ道を完全に\n塞いでくれているな。",
      fail_text: "飛車を1段目に打って\n横から王手をかけよう。",
    },
    // 問題4: 角打ちで詰み
    // k at (0,0), sente G at (1,0), gote p at (0,1). Drop B at (1,1).
    // B(1,1) attacks (0,0)=king diag-up-left. King: (0,1) own pawn. (1,0) sente G. (1,1) B. Mate!
    // SFEN: "kp7/G8"
    {
      id: "drill05_p4",
      type: "move",
      board_sfen: "kp7/G8/9/9/9/9/9/9/9 b B 1",
      instruction: "角を打って詰まそう！",
      coach_text: "角の斜めの効きで\n仕留めるぞ！",
      hand_pieces: { ka: 1 },
      correct_move: {
        from: { hand: "ka" },
        to: { row: 1, col: 1 },
      },
      result_sfen: "kp7/GB7/9/9/9/9/9/9/9 b - 1",
      success_text: "角で詰み！\n金と歩と端の壁で\n逃げ場がないぞ。",
      fail_text: "角で斜めから王手をかけよう。",
    },
    // 問題5: 香打ちで詰み（縦効き）
    // k at (0,8), gote p at (0,7), gote p at (1,8). Drop L at (2,8)? No, (1,8) blocks.
    // k at (0,8), gote p at (0,7), sente G at (1,7). Drop L at (1,8).
    // L(1,8) attacks upward: (0,8)=king. Check!
    // King: (0,7) own pawn. (1,7) sente G. (1,8) L. Mate!
    // SFEN: "7pk/7G1" - drop L at (1,8)
    {
      id: "drill05_p5",
      type: "move",
      board_sfen: "7pk/7G1/9/9/9/9/9/9/9 b L 1",
      instruction: "香を打って詰まそう！",
      coach_text: "香は前にまっすぐ効くぞ。\n縦から王手じゃ！",
      hand_pieces: { ky: 1 },
      correct_move: {
        from: { hand: "ky" },
        to: { row: 1, col: 8 },
      },
      result_sfen: "7pk/7GL/9/9/9/9/9/9/9 b - 1",
      success_text: "香で詰みじゃ！\n香の縦効きで王手、\n金と端で逃げ場なしじゃ。",
      fail_text: "香で縦から王手をかけよう。",
    },
    // 問題6: 桂打ちで詰み
    // k at (0,8), gote p at (0,7), sente G at (1,8). Drop N at (2,6).
    // N(2,6) attacks (0,7) - wait, knight moves: from (2,6), attacks (0,5) and (0,7). So attacks (0,7) which has gote pawn, not king.
    // Need knight to attack king at (0,8). Knight at (2,7) attacks (0,6) and (0,8)=king! Yes!
    // k at (0,8), sente G at (1,8), gote p at (0,7). Drop N at (2,7).
    // N(2,7) attacks (0,8)=king. Check! But can king escape?
    // King: (0,7) own pawn. (1,8) sente G. (1,7) - is it attacked? G at (1,8) attacks (0,8),(0,7),(1,7),(2,8),(2,7) - wait, G attacks 6 directions: forward, left, right, diag-forward-left, diag-forward-right, backward. But G is sente, so "forward" = toward row 0. G at (1,8): forward=(0,8), left=(1,7), right=off-board, diag-forward-left=(0,7), diag-forward-right=off-board, backward=(2,8). So G attacks (1,7). King can't go (1,7).
    // What about (1,8)? Sente G there. Can't go.
    // Mate!
    // SFEN: "7pk/8G"
    {
      id: "drill05_p6",
      type: "move",
      board_sfen: "7pk/8G/9/9/9/9/9/9/9 b N 1",
      instruction: "桂を打って詰まそう！",
      coach_text: "仕上げじゃ！\n桂馬の独特な動きで\n仕留めよう！",
      hand_pieces: { ke: 1 },
      correct_move: {
        from: { hand: "ke" },
        to: { row: 2, col: 7 },
      },
      result_sfen: "7pk/8G/7N1/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n桂馬で詰みじゃ！\nいろんな駒で詰ませる力が\nついてきたな！",
      fail_text: "桂馬は2マス前＋1マス横に\n跳ぶぞ。王手がかかる場所を\n探そう。",
    },
  ],
};
