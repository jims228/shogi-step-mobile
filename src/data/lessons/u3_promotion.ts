import type { LessonData } from "../../lesson/types";

export const U3_PROMOTION: LessonData = {
  id: "u3_promotion",
  title: "成りとは",
  unit: "u3",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: クイズ - 敵陣はどこ？
    {
      id: "quiz_enemy_zone",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "先手から見て「敵陣」はどこ？",
      coach_text: "「成り」を学ぶ前に、\n「敵陣」を確認じゃ。\n先手から見て敵陣はどこかな？",
      quiz_options: ["上から3段目まで", "下から3段目まで", "真ん中の3段"],
      quiz_answer: 0,
      success_text: "正解！上から3段（1〜3段目）が\n敵陣じゃ。ここに駒が入ると\n「成る」ことができるぞ！",
      fail_text: "先手の敵陣は上から3段目まで。\n相手の陣地じゃよ。",
    },
    // step2: クイズ - 成るとどうなる？
    {
      id: "quiz_promotion_effect",
      type: "quiz",
      board_sfen: "9/9/9/9/4P4/9/9/9/9 b - 1",
      instruction: "駒が「成る」とどうなる？",
      coach_text: "敵陣に入った駒は\n「成る」ことができるぞ。\n成るとどうなるかな？",
      quiz_options: ["動きが強くなる", "消えてなくなる", "変わらない"],
      quiz_answer: 0,
      success_text: "正解！成ると駒が裏返って\n動きがパワーアップするんじゃ！\n次のレッスンで実際に\n成ってみよう。",
      fail_text: "成ると駒が強くなるんじゃ！\n裏返って動きが変わるぞ。",
    },
    // step3: 歩を敵陣に進める（ガイド）
    {
      id: "pawn_to_zone",
      type: "move",
      board_sfen: "9/9/9/4p4/4P4/9/9/9/9 b - 1",
      instruction: "歩を進めて敵陣に入ろう！",
      coach_text: "歩を前に進めて\n相手の歩を取ろう。\n敵陣に入ると成れるぞ！",
      arrows: [{ from: [4, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 4 },
      },
      correct_promotion: true,
      result_sfen: "9/9/9/4+P3/9/9/9/9/9 b P 1",
      success_text: "成った！歩が「と金」になったぞ！\n「と金」は金と同じ動きができる\nとても強い駒じゃ！",
      fail_text: "歩を前に進めて敵陣に入ろう。",
    },
    // step4: クイズ - 成れる駒は？
    {
      id: "quiz_which_promote",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "成れない駒はどれ？",
      coach_text: "ほとんどの駒は成れるが、\n成れない駒が2つあるぞ。\nどれじゃろう？",
      quiz_options: ["金と王", "歩と香", "飛車と角"],
      quiz_answer: 0,
      success_text: "正解！金と王は成れないんじゃ。\n金はもう十分強いし、\n王は特別な駒じゃからな。\n他の駒（歩・香・桂・銀・飛・角）は\n全て成れるぞ！",
      fail_text: "金と王だけは成れないぞ。\n他の駒は全部成れるんじゃ。",
    },
    // step5: クイズ - 成りは強制？
    {
      id: "quiz_must_promote",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "敵陣に入ったら必ず成る？",
      coach_text: "敵陣に入ったら\n必ず成らないといけないのかな？",
      quiz_options: ["成らない選択もできる", "必ず成る"],
      quiz_answer: 0,
      success_text: "正解！成るかどうかは\n選べるんじゃ！\nただし歩・香・桂は\n行き場がなくなる位置では\n必ず成らないといけないぞ。",
      fail_text: "成りは選択制じゃ。\n成らなくてもいい場合もあるぞ。",
    },
    // step6: 銀を敵陣に進める
    {
      id: "silver_promote",
      type: "move",
      board_sfen: "9/9/9/5p3/4S4/9/9/9/9 b - 1",
      instruction: "銀を進めて成ろう！",
      coach_text: "仕上げじゃ！\n銀を敵陣に進めて\n成ってみよう！",
      arrows: [{ from: [4, 4], to: [3, 5] }],
      correct_move: {
        from: { row: 4, col: 4 },
        to: { row: 3, col: 5 },
      },
      correct_promotion: true,
      result_sfen: "9/9/9/5+S2/9/9/9/9/9 b P 1",
      success_text: "銀が成銀になったぞ！\n成銀は金と同じ動きじゃ。\n成りの基本をマスターしたな！",
      fail_text: "銀を斜め前に進めて敵陣に入ろう。",
    },
  ],
};
