import type { LessonData } from "../../lesson/types";

export const TSUME3_DRILL_01: LessonData = {
  id: "tsume3_drill_01",
  title: "3手詰め練習①：金銀で詰ます",
  unit: "u4",
  type: "learn",
  reward_xp: 15,
  steps: [
    // step1: 金2枚で追い詰め（左端）
    // 王9一(0,0)、後手歩8二(1,1)
    // 1手目: ▲8一金打(0,1) 王手 → 2手目: △9二玉(1,0) → 3手目: ▲9三金打(2,0) 頭金=詰み
    {
      id: "drill01_gold_chase1",
      type: "move",
      board_sfen: "k8/1p7/9/9/9/9/9/9/9 b 2G 1",
      instruction: "金2枚で3手詰め！",
      coach_text:
        "金2枚の追い詰めじゃ。\nまず王手をかけて\n王を端に追い込もう！",
      hand_pieces: { ki: 2 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 1 },
      },
      auto_response: {
        from: { row: 0, col: 0 },
        to: { row: 1, col: 0 },
      },
      after_response_sfen: "1G7/kp7/9/9/9/9/9/9/9 b G 1",
      after_response_text: "王が9二に逃げた。\n仕留めよう！",
      second_move: {
        from: { hand: "ki" },
        to: { row: 2, col: 0 },
      },
      success_text: "金2枚の追い詰めじゃ！\n頭金で仕留めたな。",
      fail_text: "金で王手をかけよう。\n逃げた先で頭金じゃ。",
    },
    // step2: 金2枚で追い詰め（右端）
    // 王1一(0,8)、後手歩2二(1,7)
    // 1手目: ▲2一金打(0,7) 王手 → 2手目: △1二玉(1,8) → 3手目: ▲1三金打(2,8) 頭金=詰み
    {
      id: "drill01_gold_chase2",
      type: "move",
      board_sfen: "8k/7p1/9/9/9/9/9/9/9 b 2G 1",
      instruction: "金2枚で3手詰め！",
      coach_text:
        "今度は右端じゃ。\n同じパターンで\n詰ませよう！",
      hand_pieces: { ki: 2 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 7 },
      },
      auto_response: {
        from: { row: 0, col: 8 },
        to: { row: 1, col: 8 },
      },
      after_response_sfen: "7G1/7pk/9/9/9/9/9/9/9 b G 1",
      after_response_text: "王が1二に逃げたぞ。",
      second_move: {
        from: { hand: "ki" },
        to: { row: 2, col: 8 },
      },
      success_text: "頭金で詰み！\nどちらの端でも\n同じパターンが使えるぞ。",
      fail_text: "金で王手をかけよう。",
    },
    // step3: 銀→金のコンビネーション（左端）
    // 王9一(0,0)、後手歩8二(1,1)
    // 1手目: ▲9二銀打(1,0) 王手 → 2手目: △8一玉(0,1) → 3手目: ▲7一金打(0,2) =詰み
    // 検証: 王(0,1)逃げ場: 9一(0,0)=銀(1,0)斜め前、7一(0,2)=金、7二(1,2)=金(0,2)下効き、8二(1,1)=自歩、9二(1,0)=銀 → 詰み
    {
      id: "drill01_silver_gold1",
      type: "move",
      board_sfen: "k8/1p7/9/9/9/9/9/9/9 b GS 1",
      instruction: "銀と金で3手詰め！",
      coach_text:
        "銀で王手して\n追い込んでから\n金で仕留めるぞ！",
      hand_pieces: { ki: 1, gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 0 },
      },
      auto_response: {
        from: { row: 0, col: 0 },
        to: { row: 0, col: 1 },
      },
      after_response_sfen: "1k7/Sp7/9/9/9/9/9/9/9 b G 1",
      after_response_text: "王が8一に逃げた。\n金で仕留めよう！",
      second_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 2 },
      },
      success_text: "銀→金のコンビネーション！\n銀で追い出して\n金で仕留める好手順じゃ。",
      fail_text: "まず銀で王手をかけよう。\n王を追い出すのがポイントじゃ。",
    },
    // step4: 銀→金のコンビネーション（右端）
    // 王1一(0,8)、後手歩2二(1,7)
    // 1手目: ▲1二銀打(1,8) 王手 → 2手目: △2一玉(0,7) → 3手目: ▲3一金打(0,6) =詰み
    // 検証: 王(0,7)逃げ場: 1一(0,8)=銀(1,8)斜め前、3一(0,6)=金、3二(1,6)=金(0,6)下効き、2二(1,7)=自歩、1二(1,8)=銀 → 詰み
    {
      id: "drill01_silver_gold2",
      type: "move",
      board_sfen: "8k/7p1/9/9/9/9/9/9/9 b GS 1",
      instruction: "銀と金で3手詰め！",
      coach_text:
        "右端でも銀→金の\nコンビネーションじゃ！",
      hand_pieces: { ki: 1, gi: 1 },
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 8 },
      },
      auto_response: {
        from: { row: 0, col: 8 },
        to: { row: 0, col: 7 },
      },
      after_response_sfen: "7k1/7pS/9/9/9/9/9/9/9 b G 1",
      after_response_text: "王が2一に逃げた。\n金で詰ませよう！",
      second_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 6 },
      },
      success_text: "見事じゃ！\n銀と金の使い分けが\nうまくなってきたぞ。",
      fail_text: "銀で王手をかけて\n王を追い出そう。",
    },
    // step5: 金で追い出して金で仕留め（王が横に逃げるパターン）
    // 王8一(0,1)、後手歩9一(0,0)
    // 1手目: ▲8二金打(1,1) 王手 → 2手目: △7一玉(0,2) → 3手目: ▲7二金打(1,2) 頭金=詰み
    // 検証: 王(0,2)逃げ場: 8一(0,1)=金(1,1)斜め前、6一(0,3)=金(1,2)斜め前、8二(1,1)=金、6二(1,3)=金(1,2)横効き → 詰み
    {
      id: "drill01_gold_side",
      type: "move",
      board_sfen: "pk7/9/9/9/9/9/9/9/9 b 2G 1",
      instruction: "金2枚で3手詰め！",
      coach_text:
        "王が横に逃げるパターン。\n追いかけて頭金じゃ！",
      hand_pieces: { ki: 2 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 1 },
      },
      auto_response: {
        from: { row: 0, col: 1 },
        to: { row: 0, col: 2 },
      },
      after_response_sfen: "p1k6/1G7/9/9/9/9/9/9/9 b G 1",
      after_response_text: "王が7一に逃げた。\n追いかけよう！",
      second_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 2 },
      },
      success_text: "追いかけて頭金！\n王を追い込むのが\n上手になってきたぞ。",
      fail_text: "金で王手をかけよう。\n逃げた先で頭金じゃ。",
    },
    // step6: 仕上げ - 金→銀の逆パターン
    // 王9一(0,0)、後手歩8二(1,1)
    // 1手目: ▲8一金打(0,1) 王手 → 2手目: △9二玉(1,0) → 3手目: ▲8二銀打…
    // → 銀(1,1)に歩がいるから打てない。
    //
    // 王2一(0,7)、後手歩1一(0,8)
    // 1手目: ▲2二金打(1,7) 王手 → 2手目: △3一玉(0,6) → 3手目: ▲3二金打(1,6) 頭金
    // 検証: 王(0,6)逃げ場: 2一(0,7)=金(1,7)斜め前、4一(0,5)=金(1,6)斜め前、
    //   2二(1,7)=金、4二(1,5)=金(1,6)横効き → 詰み
    {
      id: "drill01_finale",
      type: "move",
      board_sfen: "7kp/9/9/9/9/9/9/9/9 b 2G 1",
      instruction: "仕上げ！金で3手詰め！",
      coach_text:
        "仕上げじゃ！\n金2枚で追い詰めるぞ。\n自分の力で解いてみよう！",
      hand_pieces: { ki: 2 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 7 },
      },
      auto_response: {
        from: { row: 0, col: 7 },
        to: { row: 0, col: 6 },
      },
      after_response_sfen: "6kp/7G1/9/9/9/9/9/9/9 b G 1",
      after_response_text: "王が3一に逃げた。\n仕留められるかな？",
      second_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 6 },
      },
      success_text:
        "すばらしい！金銀の3手詰めを\nマスターしたぞ！\n追い詰めて頭金が基本じゃ。",
      fail_text: "金で王手をかけよう。\n逃げた先で頭金じゃ。",
    },
  ],
};
