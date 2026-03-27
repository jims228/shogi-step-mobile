import type { LessonData } from "../../lesson/types";

export const TSUME3_INTRO: LessonData = {
  id: "tsume3_intro",
  title: "3手詰めとは",
  unit: "u4",
  type: "learn",
  reward_xp: 15,
  steps: [
    // step1: quiz - 3手詰めの概念
    {
      id: "quiz_tsume3_concept",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "3手詰めとは何？",
      coach_text:
        "1手詰めは覚えたな？\n次は「3手詰め」じゃ。\n3手で詰ますとは\nどういうことかな？",
      quiz_options: [
        "自分→相手→自分の3手で詰み",
        "3回王手をかけること",
        "3つの駒を使うこと",
      ],
      quiz_answer: 0,
      success_text:
        "正解！\n①自分が王手→②相手が逃げる→\n③自分がまた王手＝詰み\nこの3手で詰ますんじゃ。",
      fail_text: "3手詰めは\n自分→相手→自分の3手で\n詰ますことじゃ。",
    },
    // step2: ガイド付き3手詰め
    // 王9一(0,0)、後手歩8二(1,1)
    // 1手目: ▲8一金打(0,1) 王手 → 2手目: △9二玉(1,0) → 3手目: ▲9三金打(2,0) 頭金=詰み
    {
      id: "guided_tsume3",
      type: "move",
      board_sfen: "k8/1p7/9/9/9/9/9/9/9 b 2G 1",
      instruction: "3手で詰まそう！\nまず王手をかけよう。",
      coach_text:
        "3手詰めに挑戦じゃ！\n①王手→②相手が逃げる→\n③もう一度王手で詰み！\nまず金を打って王手じゃ。",
      hand_pieces: { ki: 2 },
      arrows: [{ from: "hand_ki", to: [0, 1] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 0, col: 1 },
      },
      auto_response: {
        from: { row: 0, col: 0 },
        to: { row: 1, col: 0 },
      },
      after_response_sfen: "1G7/kp7/9/9/9/9/9/9/9 b G 1",
      after_response_text: "王が9二に逃げたぞ。\nもう一手で詰ませよう！",
      second_move: {
        from: { hand: "ki" },
        to: { row: 2, col: 0 },
      },
      second_arrows: [{ from: "hand_ki", to: [2, 0] }],
      success_text:
        "見事！3手詰めの完成じゃ！\n王手→逃げる→頭金で詰み。\nこれが3手詰めの基本パターンじゃ。",
      fail_text: "金を打って王手をかけよう。\n王が逃げた先で詰ませるぞ。",
    },
    // step3: 金2枚（右端）
    // 王1一(0,8)、後手歩2二(1,7)
    // 1手目: ▲2一金打(0,7) 王手 → 2手目: △1二玉(1,8) → 3手目: ▲1三金打(2,8) 頭金=詰み
    {
      id: "tsume3_gold_right",
      type: "move",
      board_sfen: "8k/7p1/9/9/9/9/9/9/9 b 2G 1",
      instruction: "3手で詰まそう！",
      coach_text:
        "今度は右端じゃ。\n金2枚で3手詰めにしよう！",
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
      after_response_text: "王が1二に逃げた。\n仕留めよう！",
      second_move: {
        from: { hand: "ki" },
        to: { row: 2, col: 8 },
      },
      success_text: "頭金で詰み！\n端に追い込んで頭金は\n基本中の基本じゃ。",
      fail_text: "金で王手をかけて\n逃げ道を狭めよう。",
    },
    // step4: 銀→金のコンビネーション
    // 王9一(0,0)、後手歩8二(1,1)
    // 1手目: ▲9二銀打(1,0) 王手 → 2手目: △8一玉(0,1) → 3手目: ▲7一金打(0,2) =詰み
    // 検証: 王(0,1)逃げ場: 9一(0,0)=銀(1,0)斜め前、7一(0,2)=金、7二(1,2)=金(0,2)下効き、8二(1,1)=自歩、9二(1,0)=銀 → 詰み
    {
      id: "tsume3_gold_silver",
      type: "move",
      board_sfen: "k8/1p7/9/9/9/9/9/9/9 b GS 1",
      instruction: "3手で詰まそう！",
      coach_text:
        "今度は金と銀を\n使い分けるぞ。\nまず銀で王手じゃ！",
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
      success_text: "すばらしい！銀と金の\nコンビネーションで詰みじゃ！",
      fail_text: "銀で王手をかけて\n王を動かそう。",
    },
    // step5: 王が横に逃げるパターン
    // 王8一(0,1)、後手歩9一(0,0)
    // 1手目: ▲8二金打(1,1) 王手 → 2手目: △7一玉(0,2) → 3手目: ▲7二金打(1,2) 頭金=詰み
    // 検証: 王(0,2)逃げ場: 8一(0,1)=金(1,1)斜め前、6一(0,3)=金(1,2)斜め前、8二(1,1)=金、6二(1,3)=金(1,2)横効き → 詰み
    {
      id: "tsume3_side_escape",
      type: "move",
      board_sfen: "pk7/9/9/9/9/9/9/9/9 b 2G 1",
      instruction: "3手で詰まそう！",
      coach_text:
        "王が横に逃げるぞ。\n追いかけて仕留めよう！",
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
      success_text: "追いかけて頭金！\n逃げる方向を読んで\n先回りするのがコツじゃ。",
      fail_text: "金で王手をかけよう。\n逃げた先で頭金じゃ。",
    },
    // step6: 仕上げ
    // 王2一(0,7)、後手歩1一(0,8)
    // 1手目: ▲2二金打(1,7) 王手 → 2手目: △3一玉(0,6) → 3手目: ▲3二金打(1,6) 頭金=詰み
    // 検証: 王(0,6)逃げ場: 2一(0,7)=金(1,7)斜め前、4一(0,5)=金(1,6)斜め前、2二(1,7)=金、4二(1,5)=金(1,6)横効き → 詰み
    {
      id: "tsume3_finale",
      type: "move",
      board_sfen: "7kp/9/9/9/9/9/9/9/9 b 2G 1",
      instruction: "仕上げ！3手で詰まそう！",
      coach_text:
        "仕上げじゃ！\n自分の力で3手詰めを\n解いてみよう！",
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
      after_response_text: "王が逃げたぞ。\n仕留められるかな？",
      second_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 6 },
      },
      success_text:
        "完璧じゃ！\n3手詰めの基本をマスターしたな！\n王手→逃げる→詰みのリズムを\n覚えておくんじゃぞ。",
      fail_text: "金で王手をかけよう。\n王が逃げた先で頭金じゃ！",
    },
  ],
};
