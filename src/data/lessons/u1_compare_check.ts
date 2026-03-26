import type { LessonData } from "../../lesson/types";

export const U1_COMPARE_CHECK: LessonData = {
  id: "u1_compare_check",
  title: "王手？駒を取る？",
  unit: "u1",
  type: "compare",
  reward_xp: 10,
  steps: [
    // step1: 王手 vs 歩を取る → 王手が正解
    {
      id: "compare_check_vs_capture1",
      type: "compare",
      board_sfen: "4k4/3p5/4G4/9/9/9/9/9/9 b - 1",
      instruction: "金をどう動かす？",
      coach_text: "前に進めば王手、\n斜めに行けば歩が取れるぞ。\nどっちがいいかな？",
      compare_options: [
        {
          label: "王手をかける",
          description: "金を前に進めて王手",
          move: { from: { row: 2, col: 4 }, to: { row: 1, col: 4 } },
        },
        {
          label: "歩を取る",
          description: "斜め前の歩を取る",
          move: { from: { row: 2, col: 4 }, to: { row: 1, col: 3 } },
        },
      ],
      compare_answer: 0,
      why_text: "王手をかければ相手は王様を\n守るしかない！\n歩1枚より王様への\nプレッシャーが大事じゃ。",
      success_text: "正解！王手をかけよう！",
      fail_text: "歩は1枚…それより\n王手で攻める方がいいぞ。",
    },
    // step2: 実際に王手をかける
    {
      id: "execute_check1",
      type: "move",
      board_sfen: "4k4/3p5/4G4/9/9/9/9/9/9 b - 1",
      instruction: "王手をかけよう！",
      coach_text: "さっき選んだ手を\n実際にやってみよう！",
      arrows: [{ from: [2, 4], to: [1, 4] }],
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/3pG4/9/9/9/9/9/9/9 b - 1",
      success_text: "王手じゃ！\n歩より王様を攻めるのが大事じゃ。",
      fail_text: "前に進めて王手をかけよう。",
    },
    // step3: 金を取る vs 王手 → 金を取るのが正解
    {
      id: "compare_capture_vs_check",
      type: "compare",
      board_sfen: "7k1/5g3/6G2/9/9/9/9/9/9 b - 1",
      instruction: "金をどう動かす？",
      coach_text: "王手もかけられるし、\n相手の金も取れるぞ。\n今度はどっちがいいかな？",
      compare_options: [
        {
          label: "王手をかける",
          description: "金を斜め前に→王手",
          move: { from: { row: 2, col: 6 }, to: { row: 1, col: 7 } },
        },
        {
          label: "相手の金を取る",
          description: "金で相手の金を取る",
          move: { from: { row: 2, col: 6 }, to: { row: 1, col: 5 } },
        },
      ],
      compare_answer: 1,
      why_text: "金は大事な駒じゃ！\n王手は逃げられたら終わりだが、\n金を取れば確実に得をするぞ。",
      success_text: "正解！金を取ろう！",
      fail_text: "王手をかけても逃げられるぞ。\n確実に得する方を選ぼう。",
    },
    // step4: 実際に金を取る
    {
      id: "execute_capture",
      type: "move",
      board_sfen: "7k1/5g3/6G2/9/9/9/9/9/9 b - 1",
      instruction: "相手の金を取ろう！",
      coach_text: "さっき選んだ手を\n実際にやってみよう！",
      arrows: [{ from: [2, 6], to: [1, 5] }],
      correct_move: {
        from: { row: 2, col: 6 },
        to: { row: 1, col: 5 },
      },
      result_sfen: "7k1/5G3/9/9/9/9/9/9/9 b G 1",
      success_text: "金を取ったぞ！\n確実な駒得は大きな成果じゃ。",
      fail_text: "相手の金がいるマスに進めよう。",
    },
    // step5: クイズ - いつ王手がいい？
    {
      id: "quiz_when_check",
      type: "quiz",
      board_sfen: "4k4/4G4/9/9/9/9/9/9/9 b - 1",
      instruction: "王手と駒取り、いつも王手がいい？",
      coach_text: "王手は強い手じゃが…\nいつでも王手がいいのかな？",
      quiz_options: ["状況による", "いつでも王手がいい"],
      quiz_answer: 0,
      success_text: "その通り！\n大きな駒が取れるなら\nそっちの方がいいこともある。\n状況を見て判断するんじゃ！",
      fail_text: "大事な駒が取れるチャンスも\n見逃さないようにしよう。",
    },
    // step6: 仕上げ - 自力で判断して王手
    {
      id: "finale_check",
      type: "move",
      board_sfen: "4k4/9/5Gp2/9/9/9/9/9/9 b - 1",
      instruction: "最善の手を指そう！",
      coach_text: "歩も取れるし王手もかけられる。\nどっちがいいか考えて指そう！",
      correct_move: {
        from: { row: 2, col: 5 },
        to: { row: 1, col: 4 },
      },
      success_text: "王手じゃ！\n歩1枚より王手が大事なときは\n迷わず王手をかけるんじゃ！\nUnit 1の判断力がついてきたな。",
      fail_text: "歩より大事な手がないか\n考えてみよう。",
    },
  ],
};
