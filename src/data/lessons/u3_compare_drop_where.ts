import type { LessonData } from "../../lesson/types";

export const U3_COMPARE_DROP_WHERE: LessonData = {
  id: "u3_compare_drop_where",
  title: "どこに打つのが一番？",
  unit: "u3",
  type: "compare",
  reward_xp: 10,
  steps: [
    // step1: 比較 - 金をどこに打つ？王手 vs 遠い場所
    {
      id: "compare_drop_near",
      type: "compare",
      board_sfen: "4k4/9/9/9/9/9/9/9/9 b G 1",
      instruction: "金をどこに打つ？",
      coach_text: "持ち駒の金を打つぞ。\n王様の近くと遠く、\nどっちに打つべきかな？",
      compare_options: [
        {
          label: "王様の前に打つ",
          description: "王手がかかる！",
          move: { from: { hand: "ki" }, to: { row: 1, col: 4 } },
        },
        {
          label: "遠くに打つ",
          description: "安全だけど…",
          move: { from: { hand: "ki" }, to: { row: 7, col: 7 } },
        },
      ],
      compare_answer: 0,
      why_text: "攻めるなら王様の近くに\n打つのが効果的じゃ！\n遠くに打っても\nすぐには役に立たないぞ。",
      success_text: "正解！王手になる場所に打とう！",
      fail_text: "攻めるなら王様の近くが\n効果的じゃよ。",
    },
    // step2: 実行 - 金を王手の位置に打つ
    {
      id: "execute_drop_check",
      type: "move",
      board_sfen: "4k4/9/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って王手！",
      coach_text: "さっき選んだ場所に\n打ってみよう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [1, 4] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/4G4/9/9/9/9/9/9/9 b - 1",
      success_text: "王手じゃ！\n持ち駒は攻めに使うのが\n効果的じゃ。",
      fail_text: "王様の前に金を打とう。",
    },
    // step3: 比較 - 歩をどこに打つ？逃げ道を塞ぐ
    {
      id: "compare_block_escape",
      type: "compare",
      board_sfen: "4k4/4G4/9/9/9/9/9/9/9 b P 1",
      instruction: "歩をどこに打つ？",
      coach_text: "金で王手をかけておるぞ。\n王様の逃げ道を\n塞ぐように歩を打とう！",
      compare_options: [
        {
          label: "王の横に打つ",
          description: "逃げ道を塞ぐ",
          move: { from: { hand: "fu" }, to: { row: 0, col: 5 } },
        },
        {
          label: "遠くに打つ",
          description: "関係ない場所に打つ",
          move: { from: { hand: "fu" }, to: { row: 8, col: 0 } },
        },
      ],
      compare_answer: 0,
      why_text: "王様の逃げ道を塞ぐと\n相手はどんどん困るぞ！\n持ち駒は攻めの流れの中で\n効果的に使おう。",
      success_text: "正解！逃げ道を塞ごう！",
      fail_text: "王様の逃げ道を塞ぐ場所に\n打つのが効果的じゃ。",
    },
    // step4: 実行
    {
      id: "execute_block",
      type: "move",
      board_sfen: "4k4/4G4/9/9/9/9/9/9/9 b P 1",
      instruction: "歩を打って逃げ道を塞ごう！",
      coach_text: "王様の横に歩を打とう！",
      hand_pieces: { fu: 1 },
      arrows: [{ from: "hand_fu", to: [0, 5] }],
      correct_move: {
        from: { hand: "fu" },
        to: { row: 0, col: 5 },
      },
      result_sfen: "4kP3/4G4/9/9/9/9/9/9/9 b - 1",
      success_text: "逃げ道を塞いだぞ！\n持ち駒の使い方が上手くなってきたな。",
      fail_text: "王様の横に歩を打とう。",
    },
    // step5: クイズ - 持ち駒の打ち場所
    {
      id: "quiz_drop_strategy",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b G 1",
      instruction: "持ち駒を打つとき大事なのは？",
      coach_text: "持ち駒を打つとき、\n一番大事なことは何じゃろう？",
      quiz_options: ["目的を持って打つ", "とりあえず打つ"],
      quiz_answer: 0,
      success_text: "正解！王手をかける、\n逃げ道を塞ぐ、守りを固める…\n目的を持って打つのが大事じゃ！",
      fail_text: "何も考えずに打っても\n効果は薄いぞ。",
    },
    // step6: 自力で金を打って王手
    {
      id: "drop_finale",
      type: "move",
      board_sfen: "7k1/9/9/9/9/9/9/9/9 b G 1",
      instruction: "金を打って王手をかけよう！",
      coach_text: "仕上げじゃ！\n一番効果的な場所に\n金を打とう！",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 7 },
      },
      result_sfen: "7k1/7G1/9/9/9/9/9/9/9 b - 1",
      correct_moves_alt: [
        { from: { hand: "ki" }, to: { row: 0, col: 7 } },
        { from: { hand: "ki" }, to: { row: 1, col: 6 } },
      ],
      success_text: "すばらしい！\n持ち駒の打ち場所を\n考える力がついてきたな！",
      fail_text: "王様に王手がかかる場所に\n金を打とう。",
    },
  ],
};
