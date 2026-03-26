import type { LessonData } from "../../lesson/types";

export const U2_COMPARE_TAKE: LessonData = {
  id: "u2_compare_take",
  title: "取って大丈夫？",
  unit: "u2",
  type: "compare",
  reward_xp: 10,
  steps: [
    // step1: 「ただ」の駒を取る（ガイド）
    {
      id: "take_free",
      type: "move",
      board_sfen: "9/9/9/4p4/4G4/9/9/9/9 b - 1",
      instruction: "相手の歩を取ろう！",
      coach_text: "「ただ」とは、守りがない駒のこと。\n取っても取り返されないから\n安心して取れるぞ！",
      arrows: [{ from: [4, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4G4/9/9/9/9/9 b P 1",
      success_text: "「ただ」の駒は安全に取れるぞ！",
      fail_text: "歩のいるマスに金を進めよう。",
    },
    // step2: 比較 - 守られている駒 vs ただの駒
    {
      id: "compare_defended",
      type: "compare",
      board_sfen: "9/9/3g5/3p1p3/4S4/9/9/9/9 b - 1",
      instruction: "どっちの歩を取る？",
      coach_text: "左の歩は金が守っているぞ。\n右の歩は守りがない。\nどっちを取るべきかな？",
      compare_options: [
        {
          label: "左の歩を取る",
          description: "金が守っている…",
          move: { from: { row: 4, col: 4 }, to: { row: 3, col: 3 } },
        },
        {
          label: "右の歩を取る（ただ）",
          description: "守りがないから安全",
          move: { from: { row: 4, col: 4 }, to: { row: 3, col: 5 } },
        },
      ],
      compare_answer: 1,
      why_text: "左の歩を取ると金に取り返されて\n大事な銀を失ってしまう！\n「ただ」の歩なら安全じゃ。",
      success_text: "正解！ただの方を取ろう！",
      fail_text: "守られている駒を取ると\n取り返されてしまうぞ。",
    },
    // step3: 実行 - ただの歩を取る
    {
      id: "execute_take_free",
      type: "move",
      board_sfen: "9/9/3g5/3p1p3/4S4/9/9/9/9 b - 1",
      instruction: "ただの歩を取ろう！",
      coach_text: "さっき選んだ手を\n実際にやってみよう！",
      arrows: [{ from: [4, 4], to: [3, 5] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 5 },
      },
      result_sfen: "9/9/3g5/3p1S3/9/9/9/9/9 b P 1",
      success_text: "安全に歩が取れたな！",
      fail_text: "右の歩（ただ）を取ろう。",
    },
    // step4: 比較 - ただの銀を取る？
    {
      id: "compare_take_silver",
      type: "compare",
      board_sfen: "9/9/9/4s4/4G4/9/9/9/9 b - 1",
      instruction: "この銀を取って大丈夫？",
      coach_text: "相手の銀が目の前にあるぞ。\n守りがあるかないか\n見極めよう！",
      compare_options: [
        {
          label: "銀を取る！",
          description: "守りがない、ただじゃ！",
        },
        {
          label: "取らない方がいい",
          description: "危ないかも…",
        },
      ],
      compare_answer: 0,
      why_text: "この銀は守りがないぞ！\nただの駒は遠慮なく取ろう。\n取り返されなければ\n確実に得をするんじゃ。",
      success_text: "正解！取れるものは取ろう！",
      fail_text: "守りがない駒は\n取っても取り返されないぞ。",
    },
    // step5: クイズ -「ただ」の意味
    {
      id: "tada_quiz",
      type: "quiz",
      board_sfen: "9/9/9/4p4/9/9/9/9/9 b - 1",
      instruction: "「ただ」ってどういう意味？",
      coach_text: "将棋で「ただ」は\n大事な言葉じゃ。\n意味を覚えよう！",
      quiz_options: ["守りがない駒", "強い駒", "動けない駒"],
      quiz_answer: 0,
      success_text: "正解！「ただ」は守りがない駒。\n取っても取り返されない\nお得な駒のことじゃ！",
      fail_text: "「ただ」は守りがなくて\n安全に取れる駒のことじゃ。",
    },
    // step6: 自力で判断して取る
    {
      id: "take_finale",
      type: "move",
      board_sfen: "9/9/3g5/3p1p3/4G4/9/9/9/9 b - 1",
      instruction: "安全に取れる駒を取ろう！",
      coach_text: "仕上げじゃ！\n守られている駒と\nただの駒を見分けて、\n安全な方を取ろう！",
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 5 },
      },
      result_sfen: "9/9/3g5/3p1G3/9/9/9/9/9 b P 1",
      success_text: "すばらしい！\n「ただ」を見分けて安全に取れたな！\n駒を取る前に、守りがないか\n確認するクセをつけよう！",
      fail_text: "守りがない方の歩を取ろう。\n左の歩は金が守っているぞ。",
    },
  ],
};
