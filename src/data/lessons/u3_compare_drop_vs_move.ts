import type { LessonData } from "../../lesson/types";

export const U3_COMPARE_DROP_VS_MOVE: LessonData = {
  id: "u3_compare_drop_vs_move",
  title: "打つ vs 動かす",
  unit: "u3",
  type: "compare",
  reward_xp: 10,
  steps: [
    // step1: 比較 - 盤上の金を動かす vs 持ち駒の金を打つ
    {
      id: "compare_move_vs_drop",
      type: "compare",
      board_sfen: "4k4/9/9/9/4G4/9/9/9/9 b G 1",
      instruction: "王手をかけるならどっち？",
      coach_text: "盤上の金を動かしても\n持ち駒の金を打っても\n王手がかけられるぞ。\nどっちが効果的かな？",
      compare_options: [
        {
          label: "持ち駒の金を打つ",
          description: "王様の近くに打てる",
          move: { from: { hand: "ki" }, to: { row: 1, col: 4 } },
        },
        {
          label: "盤上の金を動かす",
          description: "5段目から進む",
          move: { from: { row: 4, col: 4 }, to: { row: 3, col: 4 } },
        },
      ],
      compare_answer: 0,
      why_text: "持ち駒ならどこにでも打てる！\n盤上の金を動かすと\n何手もかかるが、\n持ち駒なら一手で王手じゃ。",
      success_text: "正解！持ち駒を打とう！",
      fail_text: "持ち駒はどこにでも打てるから\n一手で王手がかけられるぞ。",
    },
    // step2: 実行 - 金を打って王手
    {
      id: "execute_drop",
      type: "move",
      board_sfen: "4k4/9/9/9/4G4/9/9/9/9 b G 1",
      instruction: "金を打って王手！",
      coach_text: "持ち駒の金を\n王様の前に打とう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [1, 4] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 4 },
      },
      result_sfen: "4k4/4G4/9/9/4G4/9/9/9/9 b - 1",
      success_text: "一手で王手じゃ！\n持ち駒の機動力は大きいぞ。",
      fail_text: "持ち駒の金を王様の前に打とう。",
    },
    // step3: 比較 - 盤上の駒を動かす方がいい場面
    {
      id: "compare_move_better",
      type: "compare",
      board_sfen: "4k4/4G4/9/9/9/9/9/9/9 b P 1",
      instruction: "次の一手はどっち？",
      coach_text: "すでに金で王手をかけておる。\n歩を打つのと、\n金をさらに進めるの、\nどっちがいいかな？",
      compare_options: [
        {
          label: "金で王様を取る",
          description: "王様を直接攻める",
          move: { from: { row: 1, col: 4 }, to: { row: 0, col: 4 } },
        },
        {
          label: "歩を打つ",
          description: "とりあえず打つ",
          move: { from: { hand: "fu" }, to: { row: 5, col: 5 } },
        },
      ],
      compare_answer: 0,
      why_text: "王手の状態なら\nそのまま攻め続けよう！\n持ち駒を打つより\n盤上の駒を動かす方が\n効果的な場面もあるんじゃ。",
      success_text: "正解！状況を見て判断じゃ！",
      fail_text: "王手をかけているなら\nそのまま攻め続けよう。",
    },
    // step4: 実行 - 金を進める
    {
      id: "execute_move",
      type: "move",
      board_sfen: "4k4/4G4/9/9/9/9/9/9/9 b P 1",
      instruction: "金で攻め続けよう！",
      coach_text: "盤上の金で攻めよう！",
      arrows: [{ from: [1, 4], to: [0, 4] }],
      correct_move: {
        from: { row: 1, col: 4 },
        to: { row: 0, col: 4 },
      },
      success_text: "盤上の駒を動かして攻めたぞ！\n持ち駒を打つか動かすか、\n状況で判断するんじゃ。",
      fail_text: "金を前に進めて攻めよう。",
    },
    // step5: クイズ - 打つ vs 動かすの判断
    {
      id: "quiz_judgment",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b GS 1",
      instruction: "持ち駒を打つ最大のメリットは？",
      coach_text: "持ち駒を打つことと\n盤上の駒を動かすこと、\nそれぞれにメリットがあるぞ。",
      quiz_options: ["どこにでも打てる", "必ず成れる"],
      quiz_answer: 0,
      success_text: "正解！持ち駒はどこにでも\n打てるのが最大の強みじゃ。\n盤上の駒は1マスずつ\n動かすから時間がかかるが、\n持ち駒は一瞬で展開できるんじゃ。",
      fail_text: "持ち駒の強みは\nどこにでも打てることじゃ。",
    },
    // step6: 自力で判断して打つ
    {
      id: "drop_vs_move_finale",
      type: "move",
      board_sfen: "6k2/9/9/9/9/9/9/9/9 b G 1",
      instruction: "最善の一手を指そう！",
      coach_text: "仕上げじゃ！\n持ち駒の金を使って\n王手をかけよう。",
      hand_pieces: { ki: 1 },
      correct_move: {
        from: { hand: "ki" },
        to: { row: 1, col: 6 },
      },
      correct_moves_alt: [
        { from: { hand: "ki" }, to: { row: 0, col: 7 } },
        { from: { hand: "ki" }, to: { row: 0, col: 5 } },
        { from: { hand: "ki" }, to: { row: 1, col: 7 } },
        { from: { hand: "ki" }, to: { row: 1, col: 5 } },
      ],
      success_text: "すばらしい！\n打つか動かすか、\n状況を見て判断する力が\nついてきたな！",
      fail_text: "持ち駒の金を打って\n王手をかけよう。",
    },
  ],
};
