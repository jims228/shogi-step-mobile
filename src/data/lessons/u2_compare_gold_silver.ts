import type { LessonData } from "../../lesson/types";

export const U2_COMPARE_GOLD_SILVER: LessonData = {
  id: "u2_compare_gold_silver",
  title: "金と銀、どっちで守る？",
  unit: "u2",
  type: "compare",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 横に動けるのは？
    {
      id: "quiz_sideways",
      type: "quiz",
      board_sfen: "9/9/9/9/3G1S3/9/9/9/9 b - 1",
      instruction: "横に動けるのはどっち？",
      coach_text: "金と銀、横に動けるのは\nどっちじゃろう？",
      quiz_options: ["金", "銀", "両方"],
      quiz_answer: 0,
      success_text: "正解！金は横に動けるが、\n銀は横には動けないんじゃ。",
      fail_text: "銀は横には動けないぞ。\n金だけが横に動けるんじゃ。",
    },
    // step2: 金で横の歩を取る（実践）
    {
      id: "gold_sideways_capture",
      type: "move",
      board_sfen: "9/9/9/9/4Gp3/9/9/9/9 b - 1",
      instruction: "金で横の歩を取ろう！",
      coach_text: "金は横に動けるから、\n横の歩が取れるぞ！",
      arrows: [{ from: [4, 4], to: [4, 5] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 4, col: 5 },
      },
      result_sfen: "9/9/9/9/5G3/9/9/9/9 b P 1",
      success_text: "金は横にバッチリ動けるな！",
      fail_text: "横の歩に向かって金を動かそう。",
    },
    // step3: クイズ - 斜め後ろに動けるのは？
    {
      id: "quiz_diag_back",
      type: "quiz",
      board_sfen: "9/9/9/9/3G1S3/9/9/9/9 b - 1",
      instruction: "斜め後ろに下がれるのは？",
      coach_text: "今度は斜め後ろじゃ。\nどっちが下がれるかな？",
      quiz_options: ["銀", "金", "両方"],
      quiz_answer: 0,
      success_text: "正解！銀は斜め後ろに動けるが、\n金は斜め後ろには動けないんじゃ。",
      fail_text: "金は斜め後ろには動けないぞ。\n銀だけが動けるんじゃ。",
    },
    // step4: 銀で斜め後ろに下がる（実践）
    {
      id: "silver_retreat",
      type: "move",
      board_sfen: "9/9/9/9/4S4/9/9/9/9 b - 1",
      instruction: "銀を斜め後ろに下げよう！",
      coach_text: "銀は斜め後ろに下がれる。\nこれが銀の強みじゃ！",
      arrows: [{ from: [4, 4], to: [5, 5] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 5, col: 5 },
      },
      result_sfen: "9/9/9/9/9/5S3/9/9/9 b - 1",
      success_text: "銀は斜め後ろに下がれるんじゃ！\n攻めた後に引けるのが銀の強みじゃよ。",
      fail_text: "矢印の方向に銀を動かしてみよう。",
    },
    // step5: 比較 - 王様の守りにはどっち？
    {
      id: "compare_defense",
      type: "compare",
      board_sfen: "9/9/9/9/9/9/9/9/1GKG1SKS1 b - 1",
      instruction: "王様の横を守るならどっち？",
      coach_text: "王様の近くに置いて守るなら、\n金と銀どっちがいいかな？",
      compare_options: [
        {
          label: "金で守る",
          description: "横にも後ろにも動ける",
        },
        {
          label: "銀で守る",
          description: "横には動けない",
        },
      ],
      compare_answer: 0,
      why_text: "金は横にも動けるから、\n王様の近くに置くと\nしっかり守れるんじゃ！\n銀は攻めに使うのが得意じゃよ。",
      success_text: "正解！守りは金、攻めは銀じゃ！",
      fail_text: "王様の横を守るには\n横に動ける駒がいいぞ。",
    },
    // step6: 自力で銀の斜めを活かす
    {
      id: "silver_diag_capture",
      type: "move",
      board_sfen: "9/9/9/5p3/4S4/9/9/9/9 b - 1",
      instruction: "銀の得意な動きで取ろう！",
      coach_text: "仕上げじゃ！\n銀の斜めを活かして\n歩を取ってみよう。",
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 5 },
      },
      result_sfen: "9/9/9/5S3/9/9/9/9/9 b P 1",
      success_text: "すばらしい！\n金と銀の違いがわかったな。\n守りは金、攻めは銀じゃ！",
      fail_text: "銀の斜め前の動きで取ろう。",
    },
  ],
};
