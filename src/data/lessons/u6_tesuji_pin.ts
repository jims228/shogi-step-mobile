import type { LessonData } from "../../lesson/types";

export const U6_TESUJI_PIN: LessonData = {
  id: "u6_tesuji_pin",
  title: "手筋：角の釘付け",
  unit: "u6",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 釘付けとは
    {
      id: "quiz_what_is_pin",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "「釘付け」ってどんな手筋？",
      coach_text: "「釘付け」という手筋を\n教えるぞ。\nどういう意味だと思う？",
      quiz_options: ["動くと後ろの駒が取られる状態", "駒を固定する手"],
      quiz_answer: 0,
      success_text: "正解！ある駒を動かすと\nその後ろの大事な駒が取られる…\nだから動けない状態を\n「釘付け」と言うんじゃ。",
      fail_text: "動くと後ろの駒が取られるから\n動けない状態のことじゃ。",
    },
    // step2: ガイド - 角で金を釘付け
    {
      id: "pin_guided",
      type: "move",
      board_sfen: "9/9/9/9/9/4g4/9/9/9 b B 1",
      instruction: "角を打って金を釘付けにしよう！",
      coach_text: "金の斜め下に角を打てば、\n金は動けなくなるぞ。\nまずはやってみよう！",
      hand_pieces: { ka: 1 },
      arrows: [{ from: "hand_ka", to: [7, 6] }],
      correct_move: {
        from: { hand: "ka" },
        to: { row: 7, col: 6 },
      },
      result_sfen: "9/9/9/9/9/4g4/9/6B2/9 b - 1",
      success_text: "角で金を釘付けにしたぞ！\n金が動くと角の効きが\n奥まで届いてしまうんじゃ。",
      fail_text: "金の斜め下に角を打とう。",
    },
    // step3: クイズ - 釘付けの効果
    {
      id: "quiz_pin_effect",
      type: "quiz",
      board_sfen: "6k2/9/9/9/9/4g4/9/6B2/9 b - 1",
      instruction: "この金は自由に動ける？",
      coach_text: "金の後ろに王がおるぞ。\n金は自由に動けるかな？",
      quiz_options: ["動けない（動くと王が取られる）", "自由に動ける"],
      quiz_answer: 0,
      success_text: "正解！金が動くと\n角の効きが王に届いて\n王が取られてしまうんじゃ。\nこれが釘付けの威力じゃ！",
      fail_text: "金が動くと後ろの王が\n取られてしまうから動けないんじゃ。",
    },
    // step4: 比較 - 釘付けを使うかどうか
    {
      id: "compare_pin_or_not",
      type: "compare",
      board_sfen: "5k3/9/9/5g3/9/9/9/9/9 b B 1",
      instruction: "角をどこに打つ？",
      coach_text: "王と金が同じ斜めの線に\nおるぞ。\n角をどこに打つべきかな？",
      compare_options: [
        {
          label: "金を釘付けにする",
          description: "金の延長線上に打つ",
          move: { from: { hand: "ka" }, to: { row: 5, col: 7 } },
        },
        {
          label: "関係ない場所に打つ",
          description: "別の場所に打つ",
          move: { from: { hand: "ka" }, to: { row: 8, col: 0 } },
        },
      ],
      compare_answer: 0,
      why_text: "金を釘付けにすれば\n金は動けなくなるぞ。\n角の斜めの効きを活かして\n駒を釘付けにするのが大事じゃ。",
      success_text: "正解！釘付けで金を封じよう！",
      fail_text: "金と王の延長線上に打てば\n釘付けにできるぞ。",
    },
    // step5: 自力 - 角で釘付け
    {
      id: "pin_self",
      type: "move",
      board_sfen: "7k1/9/9/9/5g3/9/9/9/9 b B 1",
      instruction: "角を打って釘付けにしよう！",
      coach_text: "王と金が斜めに並んでおるぞ。\n角を打って金を釘付けにしよう！",
      hand_pieces: { ka: 1 },
      correct_move: {
        from: { hand: "ka" },
        to: { row: 6, col: 3 },
      },
      result_sfen: "7k1/9/9/9/5g3/9/3B5/9/9 b - 1",
      success_text: "釘付けじゃ！\n金は動けないぞ。",
      fail_text: "金と王の延長線上に角を打とう。",
    },
    // step6: 仕上げ
    {
      id: "pin_finale",
      type: "move",
      board_sfen: "8k/9/9/6g2/9/9/9/9/9 b B 1",
      instruction: "角の釘付けで仕上げ！",
      coach_text: "仕上げじゃ！\n王と金が斜めに並んでおるぞ。\n角を打って金を釘付けにしよう！",
      hand_pieces: { ka: 1 },
      correct_move: {
        from: { hand: "ka" },
        to: { row: 5, col: 6 },
      },
      result_sfen: "8k/9/9/6g2/9/6B2/9/9/9 b - 1",
      success_text: "すばらしい！\n角の釘付けをマスターしたな！\n角の斜めの効きで\n相手の駒を封じる技じゃ。",
      fail_text: "金と王の延長線上に角を打とう。",
    },
  ],
};
