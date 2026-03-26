import type { LessonData } from "../../lesson/types";

export const U3_PROMOTE_DO: LessonData = {
  id: "u3_promote_do",
  title: "成ってみよう",
  unit: "u3",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 歩を成る（ガイド）
    {
      id: "promote_pawn",
      type: "move",
      board_sfen: "9/9/4P4/9/9/9/9/9/9 b - 1",
      instruction: "歩を進めて成ろう！",
      coach_text: "歩が敵陣（上から3段目）に\nいるぞ。もう1マス進めると\n成れるぞ！",
      arrows: [{ from: [2, 4], to: [1, 4] }],
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 4 },
      },
      correct_promotion: true,
      result_sfen: "9/4+P3/9/9/9/9/9/9/9 b - 1",
      success_text: "歩が「と金」に成ったぞ！\nと金は金と同じ6方向に\n動けるようになるんじゃ。",
      fail_text: "歩を前に1マス進めよう。",
    },
    // step2: 銀を成る（ガイド）
    {
      id: "promote_silver",
      type: "move",
      board_sfen: "9/9/9/4p4/4S4/9/9/9/9 b - 1",
      instruction: "銀を進めて成ろう！",
      coach_text: "銀で歩を取って敵陣に入ろう。\n成るかどうか聞かれるぞ！\n「成る」を選ぼう。",
      arrows: [{ from: [4, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 4 },
      },
      correct_promotion: true,
      result_sfen: "9/9/9/4+S3/9/9/9/9/9 b P 1",
      success_text: "成銀じゃ！成銀も金と同じ動きじゃ。\n歩・香・桂・銀は成ると\nみんな金の動きになるぞ。",
      fail_text: "銀を前に進めて歩を取ろう。",
    },
    // step3: 成らない選択
    {
      id: "decline_promote",
      type: "move",
      board_sfen: "9/9/9/4p4/4S4/9/9/9/9 b - 1",
      instruction: "今度は「成らない」を選ぼう！",
      coach_text: "成るかどうかは選べるぞ。\n今回は「成らない」を\n選んでみよう。\n銀のまま残す場面もあるんじゃ。",
      arrows: [{ from: [4, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 4 },
      },
      correct_promotion: false,
      result_sfen: "9/9/9/4S4/9/9/9/9/9 b P 1",
      success_text: "成らずに銀のままじゃ！\n銀は斜め後ろに下がれるから、\n成らない方がいい場面もあるんじゃ。",
      fail_text: "銀を前に進めて歩を取ろう。",
    },
    // step4: クイズ - いつ成らない方がいい？
    {
      id: "quiz_when_not_promote",
      type: "quiz",
      board_sfen: "9/9/9/4S4/9/9/9/9/9 b - 1",
      instruction: "銀を成らない方がいいのはいつ？",
      coach_text: "銀は成ると金の動きになるが、\n成らない方がいい場面もあるぞ。\nそれはどんなときじゃ？",
      quiz_options: ["斜め後ろに下がりたいとき", "いつでも成った方がいい"],
      quiz_answer: 0,
      success_text: "正解！銀は成ると\n斜め後ろに動けなくなる。\n攻めて引きたいときは\n成らない方がいいこともあるんじゃ。",
      fail_text: "成銀（金の動き）には\n斜め後ろがないぞ。",
    },
    // step5: 飛車を成る（ガイド）
    {
      id: "promote_rook",
      type: "move",
      board_sfen: "9/9/4p4/9/9/9/9/4R4/9 b - 1",
      instruction: "飛車を進めて成ろう！",
      coach_text: "飛車が成ると「龍」になるぞ！\n龍は飛車の動き＋斜め1マス。\n最強の駒じゃ！",
      arrows: [{ from: [7, 4], to: [2, 4] }],
      correct_move: {
        from: { row: 7, col: 4 },
        to: { row: 2, col: 4 },
      },
      correct_promotion: true,
      result_sfen: "9/9/4+R3/9/9/9/9/9/9 b P 1",
      success_text: "龍王（竜）の誕生じゃ！\n縦横どこまでも＋斜め1マス。\n将棋で最も強い駒じゃよ。",
      fail_text: "飛車をまっすぐ進めて歩を取ろう。",
    },
    // step6: 角を成る（自力）
    {
      id: "promote_bishop",
      type: "move",
      board_sfen: "9/9/9/5p3/9/9/2B6/9/9 b - 1",
      instruction: "角を成らせよう！",
      coach_text: "仕上げじゃ！\n角が成ると「馬」になる。\n馬は斜め＋縦横1マスの\n強い駒じゃ！",
      correct_move: {
        from: { row: 6, col: 2 },
        to: { row: 3, col: 5 },
      },
      correct_promotion: true,
      result_sfen: "9/9/9/5+B2/9/9/9/9/9 b P 1",
      success_text: "馬（龍馬）の誕生じゃ！\n斜めどこまでも＋縦横1マス。\n成りの力をマスターしたな！",
      fail_text: "角を斜めに進めて歩を取ろう。",
    },
  ],
};
