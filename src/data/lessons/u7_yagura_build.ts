import type { LessonData } from "../../lesson/types";

export const U7_YAGURA_BUILD: LessonData = {
  id: "u7_yagura_build",
  title: "矢倉を組んでみよう",
  unit: "u7",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 矢倉とは
    {
      id: "quiz_what_is_yagura",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "矢倉囲いとは？",
      coach_text: "矢倉は将棋の最も\n有名な囲いのひとつじゃ。\nどんな特徴があるかな？",
      quiz_options: ["金銀3枚で上部を守る囲い", "飛車で横から守る囲い", "角で斜めを守る囲い"],
      quiz_answer: 0,
      success_text: "正解！矢倉は金2枚と銀1枚で\n王の上部をしっかり守る\n歴史ある囲いじゃ。",
      fail_text: "矢倉は金銀3枚で\n上部を守る囲いじゃよ。",
    },
    // step2: 王を移動 - 囲いの準備
    {
      id: "yagura_king_move",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/9/4K4 b - 1",
      instruction: "王を8筋に移動しよう！",
      coach_text: "矢倉を組むには\nまず王を移動させるぞ。\n王を左に動かそう！",
      arrows: [{ from: [8, 4], to: [8, 0] }],
      correct_move: {
        from: { row: 8, col: 4 },
        to: { row: 8, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 8, col: 4 }, to: { row: 7, col: 3 } },
      ],
      success_text: "よし！王を囲いの場所へ\n動かす第一歩じゃ。",
      fail_text: "王を左方向に動かそう。",
    },
    // step3: 金を7一に配置（矢倉の金）
    {
      id: "yagura_gold_top",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/9/1K7 b G 1",
      instruction: "金を王の上に打とう！",
      coach_text: "矢倉では金が王の上を守る。\n金を王の斜め上に打とう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [7, 1] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 7, col: 1 },
      },
      result_sfen: "9/9/9/9/9/9/9/1G7/1K7 b - 1",
      success_text: "金が王の上を守っておるぞ！\nこれが矢倉の土台じゃ。",
      fail_text: "金を王の上に打とう。",
    },
    // step4: 銀を6二に配置
    {
      id: "yagura_silver",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/1G7/1K7 b S 1",
      instruction: "銀を金の横に打とう！",
      coach_text: "次は銀じゃ。\n金の横に銀を配置して\n上部の守りを固めるぞ。",
      hand_pieces: { gi: 1 },
      arrows: [{ from: "hand_gi", to: [7, 2] }],
      correct_move: {
        from: { hand: "gi" },
        to: { row: 7, col: 2 },
      },
      result_sfen: "9/9/9/9/9/9/9/1GS6/1K7 b - 1",
      success_text: "銀が金と連携して\n上部がしっかり守れたぞ！",
      fail_text: "金の横に銀を打とう。",
    },
    // step5: 2枚目の金を配置
    {
      id: "yagura_gold_side",
      type: "move",
      board_sfen: "9/9/9/9/9/9/9/1GS6/1K7 b G 1",
      instruction: "もう1枚の金を配置しよう！",
      coach_text: "矢倉は金2枚と銀1枚。\nもう1枚の金を\n王の横に打とう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [8, 2] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 8, col: 2 },
      },
      result_sfen: "9/9/9/9/9/9/9/1GS6/1KG6 b - 1",
      success_text: "金銀3枚で王を囲んだぞ！\nこれが矢倉の基本形じゃ。",
      fail_text: "王の横に金を打とう。",
    },
    // step6: 完成形を確認
    {
      id: "yagura_complete",
      type: "tap_square",
      board_sfen: "9/9/9/9/9/9/9/1GS6/1KG6 b - 1",
      instruction: "矢倉の完成じゃ！\n王の位置をタップしよう。",
      coach_text: "金銀3枚で王を守る\n矢倉の完成じゃ！\n上からの攻めに強いぞ。\n王をタップして確認じゃ。",
      correct_square: { row: 8, col: 1 },
      success_text: "すばらしい！\n矢倉囲いをマスターしたぞ。\n「矢倉は将棋の純文学」\nと言われるほど基本の囲いじゃ！",
      fail_text: "王の位置をタップしよう。",
    },
  ],
};
