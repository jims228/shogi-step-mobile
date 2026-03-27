import type { LessonData } from "../../lesson/types";

export const TSUME1_DRILL_03: LessonData = {
  id: "tsume1_drill_03",
  title: "1手詰め練習③",
  unit: "u4",
  type: "learn",
  reward_xp: 10,
  steps: [
    // 問題1: 飛車打ちで1段目に王手（横効き）
    // k at (0,0), gote p at (1,0), gote p at (1,1). Drop R on row 0.
    // R attacks whole row 0 = king at (0,0). King: (1,0) own pawn, (1,1) own pawn, (0,1) attacked by R. Mate!
    {
      id: "drill03_p1",
      type: "move",
      board_sfen: "k8/pp7/9/9/9/9/9/9/9 b R 1",
      instruction: "飛車を打って詰まそう！",
      coach_text: "飛車は横にも縦にも\n効くぞ。一段目に打とう！",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 0, col: 8 },
      },
      correct_moves_alt: [
        { from: { hand: "hi" }, to: { row: 0, col: 7 } },
        { from: { hand: "hi" }, to: { row: 0, col: 6 } },
        { from: { hand: "hi" }, to: { row: 0, col: 5 } },
        { from: { hand: "hi" }, to: { row: 0, col: 4 } },
        { from: { hand: "hi" }, to: { row: 0, col: 3 } },
        { from: { hand: "hi" }, to: { row: 0, col: 2 } },
        { from: { hand: "hi" }, to: { row: 0, col: 1 } },
      ],
      result_sfen: "k7R/pp7/9/9/9/9/9/9/9 b - 1",
      success_text: "飛車の横効きで詰みじゃ！\n逃げ場が全部塞がっているな。",
      fail_text: "飛車を1段目に打って\n横から王手をかけよう。",
    },
    // 問題2: 飛車打ちで縦効き
    // k at (0,8), gote p at (0,7), gote p at (1,8). Drop R on col 8 below.
    // R at (2,8) attacks (1,8) which is blocked by pawn. Can't reach king.
    // Better: k at (0,8), gote p at (0,7). Drop R at (1,8).
    // R(1,8) attacks (0,8)=king vertically. King: (0,7) own pawn, (1,7) attacked by R? No, R at (1,8) attacks along row 1 and col 8. (1,7) is on row 1, attacked by R. So king can't go (1,7). But wait, (1,8) has the rook. What about interposing? No pieces to interpose. Mate!
    // Actually wait, king is at (0,8). R drops at (1,8) gives check vertically. King escapes: (0,7) own pawn. (1,7) attacked by R horizontally. (1,8) has R. Mate!
    {
      id: "drill03_p2",
      type: "move",
      board_sfen: "7pk/9/9/9/9/9/9/9/9 b R 1",
      instruction: "飛車を打って詰まそう！",
      coach_text: "飛車の縦の効きで\n王手をかけるぞ！",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 1, col: 8 },
      },
      result_sfen: "7pk/8R/9/9/9/9/9/9/9 b - 1",
      success_text: "飛車の縦効きで詰み！\n自歩と端で逃げ場なしじゃ。",
      fail_text: "飛車を縦に打って\n王手をかけよう。",
    },
    // 問題3: 盤上の飛車を動かして横効き詰み
    // k at (0,8), gote p at (1,8), gote p at (1,7). R at (0,0) moves to stay on row 0.
    // Wait, R already on row 0 attacks king? Only if no pieces in between.
    // k at (0,8), gote p at (1,7), gote p at (1,8). R at (0,0).
    // R(0,0) attacks row 0. Anything between (0,0) and (0,8)? No pieces in row 0 cols 1-7. So R already gives check! That can't be a starting position.
    // Better: R at (5,8), k at (0,8), gote p at (0,7), gote p at (1,8). Move R from (5,8) to (0,8)? That captures king. No.
    // Better: R at (5,0). k at (0,8), gote p at (1,7), gote p at (1,8). Move R from (5,0) to (0,0). R on row 0 attacks king at (0,8). King: (1,7) own pawn, (1,8) own pawn. Mate!
    // SFEN row 0: "8k", row 1: "7pp", rows 2-4 empty, row 5: "R8"
    {
      id: "drill03_p3",
      type: "move",
      board_sfen: "8k/7pp/9/9/9/R8/9/9/9 b - 1",
      instruction: "飛車を動かして詰まそう！",
      coach_text: "飛車を横に動かして\n1段目で王手じゃ！",
      correct_move: {
        from: { row: 5, col: 0 },
        to: { row: 0, col: 0 },
      },
      result_sfen: "R7k/7pp/9/9/9/9/9/9/9 b - 1",
      success_text: "飛車の横効きで詰み！\n一段目に飛び込んだな。",
      fail_text: "飛車を1段目に動かして\n横から王手をかけよう。",
    },
    // 問題4: 飛車打ちで縦効き（左端）
    // k at (0,0), gote p at (0,1). Drop R at (1,0).
    // R(1,0) attacks (0,0)=king. King: (0,1) own pawn. (1,0) has R. (1,1) attacked by R row. Mate!
    {
      id: "drill03_p4",
      type: "move",
      board_sfen: "kp7/9/9/9/9/9/9/9/9 b R 1",
      instruction: "飛車を打って詰まそう！",
      coach_text: "左端の王様に\n飛車で王手じゃ！",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 1, col: 0 },
      },
      result_sfen: "kp7/R8/9/9/9/9/9/9/9 b - 1",
      success_text: "飛車で詰み！\n縦の効きで王手、逃げ場なしじゃ。",
      fail_text: "飛車で縦から王手をかけよう。",
    },
    // 問題5: 盤上の飛車で縦効き詰み
    // k at (0,0), gote p at (0,1). R at (8,0) moves to (1,0).
    // Wait, can't R go to (1,0) from (8,0)? Yes, along column 0, nothing in between.
    // But then R at (1,0) attacks (0,0) king. King: (0,1) own pawn, (1,0) R, (1,1) attacked by R. Mate!
    {
      id: "drill03_p5",
      type: "move",
      board_sfen: "kp7/9/9/9/9/9/9/9/R8 b - 1",
      instruction: "飛車を動かして詰まそう！",
      coach_text: "飛車を縦に動かして\n王手をかけるぞ！",
      correct_move: {
        from: { row: 8, col: 0 },
        to: { row: 1, col: 0 },
      },
      result_sfen: "kp7/R8/9/9/9/9/9/9/9 b - 1",
      success_text: "飛車を縦に走らせて詰み！\n見事じゃ。",
      fail_text: "飛車を縦に動かして\n王手をかけよう。",
    },
    // 問題6: 飛車打ちで縦効き詰み（右端、歩壁）
    // k at (0,8), gote p at (0,7), gote p at (1,7). Drop R at (1,8).
    // R(1,8) attacks col 8: (0,8)=king. Check! And row 1.
    // King: (0,7) own pawn. (1,8) R. (1,7) own pawn. Mate!
    {
      id: "drill03_p6",
      type: "move",
      board_sfen: "7pk/7p1/9/9/9/9/9/9/9 b R 1",
      instruction: "飛車を打って詰まそう！",
      coach_text: "仕上げじゃ！\n飛車で一気に仕留めよう！",
      hand_pieces: { hi: 1 },
      correct_move: {
        from: { hand: "hi" },
        to: { row: 1, col: 8 },
      },
      result_sfen: "7pk/7pR/9/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n飛車の詰みをマスターしたな。\n横にも縦にも効く飛車は\n詰みの強い味方じゃ！",
      fail_text: "飛車を縦に打って\n王手をかけよう。",
    },
  ],
};
