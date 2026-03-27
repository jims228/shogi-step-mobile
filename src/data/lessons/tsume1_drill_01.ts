import type { LessonData } from "../../lesson/types";

export const TSUME1_DRILL_01: LessonData = {
  id: "tsume1_drill_01",
  title: "1手詰め練習①",
  unit: "u4",
  type: "learn",
  reward_xp: 10,
  steps: [
    // 問題1: 頭金（右端の王、味方の歩が横を塞ぐ）
    // k at (0,8), sente P at (0,7). Drop G at (1,8).
    // G(1,8) attacks (0,8)=king forward, (0,7) diag-fwd-left, (1,7) left.
    // King: (0,7) sente P blocks. (1,7) attacked by G. (1,8) G. Mate!
    {
      id: "drill01_p1",
      type: "move",
      board_sfen: "7Pk/9/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って詰まそう！",
      coach_text: "頭金の基本じゃ。\n王様の頭に金を打とう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 8 },
      },
      result_sfen: "7Pk/8G/9/9/9/9/9/9/9 b - 1",
      success_text: "頭金で詰み！\n味方の歩が横を塞いでいるな。",
      fail_text: "王様の頭（真下）に金を打とう。",
    },
    // 問題2: 腹金（右端の王、自歩が下を塞ぐ）
    // k at (0,8), gote p at (1,8). Drop G at (0,7).
    // G(0,7) attacks (0,8)=king right, (1,7) backward.
    // King: (1,8) own pawn. (1,7) attacked by G. (0,7) G. Mate!
    {
      id: "drill01_p2",
      type: "move",
      board_sfen: "8k/8p/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って詰まそう！",
      coach_text: "腹金じゃ。\n王様の横に金を打つぞ！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 7 },
      },
      result_sfen: "7Gk/8p/9/9/9/9/9/9/9 b - 1",
      success_text: "腹金で詰み！\n端と自歩で逃げ場がないぞ。",
      fail_text: "王様の横に金を打とう。",
    },
    // 問題3: 頭金（左端の王、自歩が横を塞ぐ）
    // k at (0,0), gote p at (0,1). Drop G at (1,0).
    // G(1,0) attacks: forward (0,0)=king, diag-fwd-right (0,1), right (1,1).
    // King: (0,1) own pawn + attacked by G. (1,0) G. (1,1) attacked by G. Mate!
    {
      id: "drill01_p3",
      type: "move",
      board_sfen: "kp7/9/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って詰まそう！",
      coach_text: "今度は左端じゃ。\n頭金で仕留めよう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 0 },
      },
      result_sfen: "kp7/G8/9/9/9/9/9/9/9 b - 1",
      success_text: "左端でも頭金で詰みじゃ！",
      fail_text: "王様の頭に金を打とう。",
    },
    // 問題4: 盤上の金を動かして頭金
    {
      id: "drill01_p4",
      type: "move",
      board_sfen: "8k/7pp/8G/9/9/9/9/9/9 b - 1",
      instruction: "金を動かして詰まそう！",
      coach_text: "盤上の金を動かして\n頭金にするんじゃ！",
      correct_move: {
        from: { row: 2, col: 8 },
        to: { row: 1, col: 8 },
      },
      result_sfen: "8k/7pG/9/9/9/9/9/9/9 b - 1",
      success_text: "金を上げて頭金じゃ！\nうまいぞ！",
      fail_text: "金を王様の頭に動かそう。",
    },
    // 問題5: 腹金（盤上の金を横に寄せる）
    {
      id: "drill01_p5",
      type: "move",
      board_sfen: "k8/pp7/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って詰まそう！",
      coach_text: "腹金で仕留めるぞ。\n横から攻めよう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 1 },
      },
      result_sfen: "kG7/pp7/9/9/9/9/9/9/9 b - 1",
      success_text: "腹金で詰みじゃ！\n歩で下に逃げられんな。",
      fail_text: "王様の横に金を打とう。",
    },
    // 問題6: 盤上の金を動かして頭金
    // k at (0,0), gote p at (0,1), gote p at (1,0). G at (2,1) moves to (1,0) capturing pawn.
    // G(1,0) attacks: forward (0,0)=king, diag-fwd-right (0,1), right (1,1), backward (2,0).
    // King: (0,1) own pawn + attacked by G. (1,0) G. (1,1) attacked by G. Mate!
    {
      id: "drill01_p6",
      type: "move",
      board_sfen: "kp7/p8/1G7/9/9/9/9/9/9 b - 1",
      instruction: "金を動かして詰まそう！",
      coach_text: "仕上げじゃ！\n金を動かして詰ませよう！",
      correct_move: {
        from: { row: 2, col: 1 },
        to: { row: 1, col: 0 },
      },
      result_sfen: "kp7/G8/9/9/9/9/9/9/9 b - 1",
      success_text: "よくできた！\n頭金と腹金は詰みの基本じゃ。\nしっかり覚えておこう！",
      fail_text: "金を王様の頭に動かそう。",
    },
  ],
};
