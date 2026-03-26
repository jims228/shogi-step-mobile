import type { LessonData } from "../../lesson/types";

export const U6_TESUJI_TATAKI: LessonData = {
  id: "u6_tesuji_tataki",
  title: "手筋：叩きの歩",
  unit: "u6",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 叩きの歩とは
    {
      id: "quiz_what_is_tataki",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "「叩きの歩」ってどんな手筋？",
      coach_text: "「叩きの歩」という手筋を\n教えるぞ。\nどんな手筋だと思う？",
      quiz_options: ["相手の駒の頭に歩を打つ", "歩を成る"],
      quiz_answer: 0,
      success_text: "正解！相手の駒の真上に\n歩を打つ手筋じゃ。\n相手の駒を動かしたり、\n取らせて形を崩す技じゃよ。",
      fail_text: "相手の駒の頭に歩を打つ\n手筋じゃよ。",
    },
    // step2: ガイド - 金の頭に歩を打つ
    {
      id: "tataki_gold_guided",
      type: "move",
      board_sfen: "9/9/9/4g4/9/9/9/9/9 b P 1",
      instruction: "金の頭に歩を打とう！",
      coach_text: "金の頭に歩を打つぞ。\nこれが「叩きの歩」じゃ！",
      hand_pieces: { fu: 1 },
      arrows: [{ from: "hand_fu", to: [2, 4] }],
      correct_move: {
        from: { hand: "fu" },
        to: { row: 2, col: 4 },
      },
      result_sfen: "9/9/4P4/4g4/9/9/9/9/9 b - 1",
      success_text: "叩きの歩じゃ！\n金は歩を取ると形が崩れるし、\n逃げても歩が成れるぞ。",
      fail_text: "金の真上（一つ上）に歩を打とう。",
    },
    // step3: ガイド - 銀の頭に叩く
    {
      id: "tataki_silver_guided",
      type: "move",
      board_sfen: "9/9/9/9/9/3s5/9/9/9 b P 1",
      instruction: "銀の頭に歩を打とう！",
      coach_text: "今度は銀の頭に\n叩きの歩じゃ！",
      hand_pieces: { fu: 1 },
      arrows: [{ from: "hand_fu", to: [4, 3] }],
      correct_move: {
        from: { hand: "fu" },
        to: { row: 4, col: 3 },
      },
      result_sfen: "9/9/9/9/3P5/3s5/9/9/9 b - 1",
      success_text: "銀の頭にも叩けるぞ！\n銀は前に逃げると\n歩が成って強くなる。",
      fail_text: "銀の真上に歩を打とう。",
    },
    // step4: 比較 - 叩くかどうか
    {
      id: "compare_tataki_or_not",
      type: "compare",
      board_sfen: "9/9/3g5/9/9/9/9/9/9 b P 1",
      instruction: "歩をどこに打つ？",
      coach_text: "金がおるぞ。\n頭に打つか、\n関係ない場所に打つか、\nどっちがいいかな？",
      compare_options: [
        {
          label: "金の頭に打つ",
          description: "叩きの歩で金を動かす",
          move: { from: { hand: "fu" }, to: { row: 1, col: 3 } },
        },
        {
          label: "遠くに打つ",
          description: "安全な場所に打つ",
          move: { from: { hand: "fu" }, to: { row: 7, col: 7 } },
        },
      ],
      compare_answer: 0,
      why_text: "叩きの歩は歩1枚（1点）で\n相手の陣形を乱せるから\nとても効率がいいんじゃ！",
      success_text: "正解！叩きの歩で金を動かそう！",
      fail_text: "金の頭に打って\n相手を困らせるのが効果的じゃ。",
    },
    // step5: 自力 - 叩きの歩を打つ
    {
      id: "tataki_self",
      type: "move",
      board_sfen: "9/9/9/9/9/9/4g4/9/9 b P 1",
      instruction: "叩きの歩を打とう！",
      coach_text: "相手の金が見えるぞ。\n叩きの歩を打ってみよう！",
      hand_pieces: { fu: 1 },
      correct_move: {
        from: { hand: "fu" },
        to: { row: 5, col: 4 },
      },
      result_sfen: "9/9/9/9/9/4P4/4g4/9/9 b - 1",
      success_text: "叩きの歩じゃ！\n歩1枚で相手を困らせられるぞ。",
      fail_text: "金の頭に歩を打とう。",
    },
    // step6: 自力 - 仕上げ
    {
      id: "tataki_finale",
      type: "move",
      board_sfen: "4k4/4g4/9/9/9/9/9/9/9 b P 1",
      instruction: "叩きの歩で仕上げ！",
      coach_text: "仕上げじゃ！\n王の前の金に\n叩きの歩を打とう！",
      hand_pieces: { fu: 1 },
      correct_move: {
        from: { hand: "fu" },
        to: { row: 0, col: 4 },
      },
      result_sfen: "4P4/4g4/9/9/9/9/9/9/9 b - 1",
      success_text: "すばらしい！\n叩きの歩をマスターしたな！\n歩1枚で相手の形を崩す\n強力な手筋じゃぞ。",
      fail_text: "金の頭に歩を打とう。",
    },
  ],
};
