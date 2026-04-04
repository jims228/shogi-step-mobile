import type { LessonData } from "../../lesson/types";

export const U3_PROMOTION: LessonData = {
  id: "u3_promotion",
  title: "成りとは",
  unit: "u3",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 敵陣をタップして確認
    {
      id: "tap_enemy_zone",
      type: "tap_square",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "上から3段目までが「敵陣」じゃ。敵陣のマスをタップしてみよう！",
      coach_text: "駒が敵陣に入ると「成る」ことができるぞ。まずは敵陣の場所を確認じゃ！",
      highlights: [
        { row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 0, col: 3 }, { row: 0, col: 4 }, { row: 0, col: 5 }, { row: 0, col: 6 }, { row: 0, col: 7 }, { row: 0, col: 8 },
        { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 1, col: 3 }, { row: 1, col: 4 }, { row: 1, col: 5 }, { row: 1, col: 6 }, { row: 1, col: 7 }, { row: 1, col: 8 },
        { row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }, { row: 2, col: 3 }, { row: 2, col: 4 }, { row: 2, col: 5 }, { row: 2, col: 6 }, { row: 2, col: 7 }, { row: 2, col: 8 },
      ],
      correct_square: [
        { row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 0, col: 3 }, { row: 0, col: 4 }, { row: 0, col: 5 }, { row: 0, col: 6 }, { row: 0, col: 7 }, { row: 0, col: 8 },
        { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 1, col: 3 }, { row: 1, col: 4 }, { row: 1, col: 5 }, { row: 1, col: 6 }, { row: 1, col: 7 }, { row: 1, col: 8 },
        { row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }, { row: 2, col: 3 }, { row: 2, col: 4 }, { row: 2, col: 5 }, { row: 2, col: 6 }, { row: 2, col: 7 }, { row: 2, col: 8 },
      ],
      success_text: "そうじゃ！上から3段（1〜3段目）が敵陣じゃ。ここに駒が入ると「成る」ことができるぞ！",
      fail_text: "光っているマスが敵陣じゃ。上の方をタップしてみよう。",
    },
    // step2: クイズ - 敵陣はどこ？
    {
      id: "quiz_enemy_zone",
      type: "quiz",
      board_sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
      instruction: "先手から見て「敵陣」はどこ？",
      coach_text: "さっき確認した敵陣、覚えておるかな？",
      quiz_options: ["上から3段目まで", "下から3段目まで", "真ん中の3段"],
      quiz_answer: 0,
      success_text: "正解！上から3段が敵陣じゃ。ここに駒が入ると「成る」ことができるぞ！",
      fail_text: "先手の敵陣は上から3段目まで。相手の陣地じゃよ。",
    },
    // step2: クイズ - 成るとどうなる？
    {
      id: "quiz_promotion_effect",
      type: "quiz",
      board_sfen: "9/9/9/4P4/9/9/9/9/9 b - 1",
      instruction: "駒が「成る」とどうなる？",
      coach_text: "敵陣に入った駒は\n「成る」ことができるぞ。\n成るとどうなるかな？",
      quiz_options: ["動きが強くなる", "消えてなくなる", "変わらない"],
      quiz_answer: 0,
      success_text: "正解！成ると駒が裏返って\n動きがパワーアップするんじゃ！\n次のレッスンで実際に\n成ってみよう。",
      fail_text: "成ると駒が強くなるんじゃ！\n裏返って動きが変わるぞ。",
    },
    // step4: 歩を敵陣に進める（ガイド）
    {
      id: "pawn_to_zone",
      type: "move",
      board_sfen: "9/9/4p4/4P4/9/9/9/9/9 b - 1",
      instruction: "歩を進めて敵陣に入ろう！",
      coach_text: "歩を前に進めて相手の歩を取ろう。敵陣に入ると成れるぞ！",
      arrows: [{ from: [3, 4], to: [2, 4] }],
      correct_move: {
        from: { row: 3, col: 4 },
        to: { row: 2, col: 4 },
      },
      correct_promotion: true,
      result_sfen: "9/9/4+P4/9/9/9/9/9/9 b P 1",
      success_text: "成った！歩が「と金」になったぞ！「と金」は金と同じ動きができるとても強い駒じゃ！",
      fail_text: "歩を前に進めて敵陣に入ろう。",
    },
    // step5: クイズ - 成れない駒は？
    {
      id: "quiz_which_promote",
      type: "quiz",
      board_sfen: "9/9/9/9/3GK4/9/9/9/9 b - 1",
      instruction: "この2つの駒は成れる？",
      coach_text: "ほとんどの駒は成れるが、成れない駒が2つあるぞ。金と王はどうかな？",
      quiz_options: ["成れない", "成れる"],
      quiz_answer: 0,
      success_text: "正解！金と王は成れないんじゃ。金はもう十分強いし、王は特別な駒じゃからな。他の駒（歩・香・桂・銀・飛・角）は全て成れるぞ！",
      fail_text: "金と王だけは成れないぞ。他の駒は全部成れるんじゃ。",
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
      board_sfen: "9/9/5p3/4S4/9/9/9/9/9 b - 1",
      instruction: "銀を進めて成ろう！",
      coach_text: "仕上げじゃ！銀を敵陣に進めて成ってみよう！",
      arrows: [{ from: [3, 4], to: [2, 5] }],
      correct_move: {
        from: { row: 3, col: 4 },
        to: { row: 2, col: 5 },
      },
      correct_promotion: true,
      result_sfen: "9/9/5+S2/9/9/9/9/9/9 b P 1",
      success_text: "銀が成銀になったぞ！\n成銀は金と同じ動きじゃ。\n成りの基本をマスターしたな！",
      fail_text: "銀を斜め前に進めて敵陣に入ろう。",
    },
  ],
};
