import type { LessonData } from "../../lesson/types";

export const U7_WHY_CASTLE: LessonData = {
  id: "u7_why_castle",
  title: "なぜ囲うのか",
  unit: "u7",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 囲いとは何か
    {
      id: "quiz_what_is_castle",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "「囲い」とは何じゃろう？",
      coach_text: "将棋では王を守ることが\nとても大事じゃ。\n「囲い」って何か知っておるか？",
      quiz_options: ["金銀で王を守る形", "相手を攻める形", "駒を成る形"],
      quiz_answer: 0,
      success_text: "正解！囲いとは\n金銀などで王を囲んで\n安全にする守りの形じゃ。",
      fail_text: "囲いは金銀で王を\n守る形のことじゃよ。",
    },
    // step2: 囲いなしの王 - 危険を体感
    {
      id: "naked_king_danger",
      type: "tap_square",
      board_sfen: "4K4/9/9/9/9/9/9/9/4r4 b - 1",
      instruction: "王に王手がかかっておる！\n王の位置をタップしよう。",
      coach_text: "王の周りに守り駒がないと\nこんなに簡単に\n王手がかかってしまうぞ。\n王の位置をタップしてごらん。",
      correct_square: { row: 0, col: 4 },
      success_text: "そうじゃ。守り駒がないと\n王は丸裸で危険じゃ。\nだから囲いが必要なんじゃよ。",
      fail_text: "王の位置をタップしよう。",
    },
    // step3: 金で守る - 合駒の効果
    {
      id: "gold_protects",
      type: "move",
      board_sfen: "4K4/9/9/9/9/9/9/9/4r4 b G 1",
      instruction: "金を打って王を守ろう！",
      coach_text: "王の前に金を打てば\n飛車の効きを遮断できるぞ。\n金で王を守ってみよう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [1, 4] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4K4/4G4/9/9/9/9/9/9/4r4 b - 1",
      success_text: "金が壁になって\n飛車の王手を防いだぞ！\nこれが囲いの基本的な考え方じゃ。",
      fail_text: "王と飛車の間に金を打とう。",
    },
    // step4: クイズ - 囲いに使う駒
    {
      id: "quiz_castle_pieces",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "囲いに主に使う駒は？",
      coach_text: "囲いを作るとき、\n主にどの駒を使うかな？",
      quiz_options: ["金と銀", "飛車と角", "桂馬と香車"],
      quiz_answer: 0,
      success_text: "正解！金と銀は\n王の近くで守るのに\nぴったりの駒じゃ。\n金は隙が少なく、\n銀は斜めに強いぞ。",
      fail_text: "金と銀が守りの主役じゃ。",
    },
    // step5: 銀も加えて守る
    {
      id: "silver_joins",
      type: "move",
      board_sfen: "4K4/4G4/9/9/9/9/9/9/9 b S 1",
      instruction: "銀も加えて守りを固めよう！",
      coach_text: "金だけでは心もとない。\n銀も加えると\nもっと安全になるぞ。\n金の横に銀を打とう！",
      hand_pieces: { gi: 1 },
      arrows: [{ from: "hand_gi", to: [1, 3] }],
      correct_move: {
        from: { hand: "gi" },
        to: { row: 1, col: 3 },
      },
      result_sfen: "4K4/3SG4/9/9/9/9/9/9/9 b - 1",
      success_text: "金と銀が並んで\n守りがぐっと強くなったぞ！\nこれが囲いの基本じゃ。",
      fail_text: "金の横に銀を打とう。",
    },
    // step6: クイズ - まとめ
    {
      id: "quiz_why_castle_summary",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "囲いを作る一番の理由は？",
      coach_text: "さて、なぜ囲いを作るのか\nまとめるぞ。\n一番の理由は何じゃろう？",
      quiz_options: ["王を安全にするため", "相手を攻めるため", "駒を成るため"],
      quiz_answer: 0,
      success_text: "正解！王を安全にしてから\n攻めるのが将棋の基本じゃ。\n「玉の守りは金銀3枚」\nと覚えておくんじゃよ！",
      fail_text: "王を安全にすることが\n囲いの一番の目的じゃ。",
    },
  ],
};
