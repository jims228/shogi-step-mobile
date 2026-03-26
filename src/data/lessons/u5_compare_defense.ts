import type { LessonData } from "../../lesson/types";

export const U5_COMPARE_DEFENSE: LessonData = {
  id: "u5_compare_defense",
  title: "どの受けが一番？",
  unit: "u5",
  type: "compare",
  reward_xp: 10,
  steps: [
    // step1: 比較 - 取る vs 逃げる
    {
      id: "compare_capture_vs_escape",
      type: "compare",
      board_sfen: "4K4/4g4/9/9/9/9/9/9/9 b - 1",
      instruction: "どう受ける？",
      coach_text: "金で王手じゃ。\n王で取るのと逃げるの、\nどっちがいいかな？",
      compare_options: [
        {
          label: "金を取る",
          description: "持ち駒が増える！",
          move: { from: { row: 0, col: 4 }, to: { row: 1, col: 4 } },
        },
        {
          label: "横に逃げる",
          description: "安全だけど…",
          move: { from: { row: 0, col: 4 }, to: { row: 0, col: 3 } },
        },
      ],
      compare_answer: 0,
      why_text: "取れるなら取るのが一番得！\n金が持ち駒になるし、\n王手も解消されるぞ。",
      success_text: "正解！取れるなら取ろう！",
      fail_text: "取ると持ち駒が増えるから\n一番得じゃ。",
    },
    // step2: 実行
    {
      id: "execute_capture",
      type: "move",
      board_sfen: "4K4/4g4/9/9/9/9/9/9/9 b - 1",
      instruction: "金を取ろう！",
      coach_text: "王で金を取ろう！",
      arrows: [{ from: [0, 4], to: [1, 4] }],
      correct_move: {
        from: { row: 0, col: 4 },
        to: { row: 1, col: 4 },
      },
      result_sfen: "9/4K4/9/9/9/9/9/9/9 b G 1",
      success_text: "金を取って持ち駒になったぞ！",
      fail_text: "王で金を取ろう。",
    },
    // step3: 比較 - 合駒 vs 逃げる（遠くからの王手）
    {
      id: "compare_block_vs_escape",
      type: "compare",
      board_sfen: "4K4/9/9/9/9/9/4r4/9/9 b P 1",
      instruction: "どう受ける？",
      coach_text: "遠くの飛車で王手じゃ。\n合駒するか逃げるか、\nどっちがいいかな？",
      compare_options: [
        {
          label: "歩で合駒",
          description: "安い駒で効きを遮断",
          move: { from: { hand: "fu" }, to: { row: 1, col: 4 } },
        },
        {
          label: "横に逃げる",
          description: "王を動かす",
          move: { from: { row: 0, col: 4 }, to: { row: 0, col: 3 } },
        },
      ],
      compare_answer: 0,
      why_text: "歩1枚で飛車の効きを\n遮断できるなら合駒が得！\n王を動かさずに守れるし、\n安い駒で済むからな。",
      success_text: "正解！安い合駒が効果的じゃ！",
      fail_text: "安い駒で防げるなら\n合駒の方が得じゃ。",
    },
    // step4: 実行
    {
      id: "execute_block",
      type: "move",
      board_sfen: "4K4/9/9/9/9/9/4r4/9/9 b P 1",
      instruction: "歩で合駒しよう！",
      coach_text: "歩を間に打とう！",
      hand_pieces: { fu: 1 },
      arrows: [{ from: "hand_fu", to: [1, 4] }],
      correct_move: {
        from: { hand: "fu" },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4K4/4P4/9/9/9/9/4r4/9/9 b - 1",
      success_text: "歩で合駒成功！",
      fail_text: "王と飛車の間に歩を打とう。",
    },
    // step5: クイズ - 受けの優先順位
    {
      id: "quiz_priority",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "受けの基本的な優先順位は？",
      coach_text: "3つの受け方、\n基本的にはどの順番で\n考えるべきかな？",
      quiz_options: ["取る→合駒→逃げる", "逃げる→合駒→取る"],
      quiz_answer: 0,
      success_text: "正解！まず取れるか？\n次に安い合駒で防げるか？\n最後に逃げる。\nこの順番で考えるのが基本じゃ。",
      fail_text: "取る→合駒→逃げるの\n順番が基本じゃ。",
    },
    // step6: 自力で最善の受け
    {
      id: "defense_finale",
      type: "move",
      board_sfen: "3K5/3g5/3G5/9/9/9/9/9/9 b - 1",
      instruction: "最善の受けを選ぼう！",
      coach_text: "仕上げじゃ！\n金で王手がかかっておる。\n一番いい対応は何かな？",
      correct_move: {
        from: { row: 2, col: 3 },
        to: { row: 1, col: 3 },
      },
      result_sfen: "3K5/3G5/9/9/9/9/9/9/9 b G 1",
      success_text: "すばらしい！\n味方の金で取るのが最善じゃ。\n受けの優先順位を\nマスターしたな！",
      fail_text: "味方の金で相手の金を取ろう。",
    },
  ],
};
