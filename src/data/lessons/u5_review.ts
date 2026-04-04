import type { LessonData } from "../../lesson/types";

export const U5_REVIEW: LessonData = {
  id: "u5_review",
  title: "Unit 5 まとめ",
  unit: "u5",
  type: "review",
  reward_xp: 15,
  steps: [
    // step1: 逃げる
    {
      id: "review_escape",
      type: "move",
      board_sfen: "4K4/9/4r4/9/9/9/9/9/9 b - 1",
      instruction: "王手から逃げよう！",
      coach_text: "Unit 5の復習じゃ。\n飛車の王手から逃げよう！",
      correct_move: {
        from: { row: 0, col: 4 },
        to: { row: 0, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 0, col: 4 }, to: { row: 0, col: 5 } },
        { from: { row: 0, col: 4 }, to: { row: 1, col: 3 } },
        { from: { row: 0, col: 4 }, to: { row: 1, col: 5 } },
      ],
      success_text: "逃げて助かったぞ！",
      fail_text: "飛車の効きがない場所に逃げよう。",
    },
    // step2: 合駒
    {
      id: "review_block",
      type: "move",
      board_sfen: "4K4/9/9/9/4r4/9/9/9/9 b P 1",
      instruction: "合駒で防ごう！",
      coach_text: "合駒で飛車の効きを\n遮断しよう。",
      hand_pieces: { fu: 1 },
      correct_move: {
        from: { hand: "fu" },
        to: { row: 1, col: 4 },
      },
      correct_moves_alt: [
        { from: { hand: "fu" }, to: { row: 2, col: 4 } },
      ],
      success_text: "合駒成功じゃ！",
      fail_text: "王と飛車の間に歩を打とう。",
    },
    // step3: 取る
    {
      id: "review_capture",
      type: "move",
      board_sfen: "4K4/4g4/4G4/9/9/9/9/9/9 b - 1",
      instruction: "王手駒を取ろう！",
      coach_text: "味方の金で\n王手駒を取ろう！",
      correct_move: {
        from: { row: 2, col: 4 },
        to: { row: 1, col: 4 },
      },
      correct_moves_alt: [
        { from: { row: 0, col: 4 }, to: { row: 1, col: 4 } },
      ],
      success_text: "取って持ち駒になったぞ！",
      fail_text: "味方の金で相手の金を取ろう。",
    },
    // step4: クイズ - 受けの優先順位
    {
      id: "review_priority",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "受けの基本的な優先順位は？",
      coach_text: "受けの優先順位を復習じゃ。",
      quiz_options: ["取る→合駒→逃げる", "逃げる→取る→合駒"],
      quiz_answer: 0,
      success_text: "正解！まず取れるか、\n次に合駒できるか、\n最後に逃げる。\nこの順番が基本じゃ。",
      fail_text: "取る→合駒→逃げるの順番じゃ。",
    },
    // step5: クイズ - 王の安全確認
    {
      id: "review_safety",
      type: "quiz",
      board_sfen: "4K4/4P4/9/9/9/9/9/9/4r4 b - 1",
      instruction: "この王は安全？",
      coach_text: "間に歩があるぞ。\n王手がかかっているかな？",
      quiz_options: ["安全", "王手がかかっている"],
      quiz_answer: 0,
      success_text: "正解！間に歩があるから\n飛車の効きは遮断されておる。",
      fail_text: "間に駒があれば\n効きが遮断されて安全じゃ。",
    },
    // step6: 仕上げ
    {
      id: "review_finale",
      type: "move",
      board_sfen: "3K5/3g5/9/9/9/9/9/9/3R5 b - 1",
      instruction: "最善の受けで仕上げ！",
      coach_text: "Unit 5の仕上げじゃ！\n最善の受けを選ぼう。",
      correct_move: {
        from: { row: 8, col: 3 },
        to: { row: 1, col: 3 },
      },
      correct_moves_alt: [
        { from: { row: 0, col: 3 }, to: { row: 1, col: 3 } },
      ],
      success_text: "すばらしい！\nUnit 5をクリアしたぞ！\n逃げる・合駒・取る、\n3つの受けをマスターしたな！",
      fail_text: "相手の金を取れる駒で取ろう。",
    },
  ],
};
