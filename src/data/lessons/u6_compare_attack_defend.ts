import type { LessonData } from "../../lesson/types";

export const U6_COMPARE_ATTACK_DEFEND: LessonData = {
  id: "u6_compare_attack_defend",
  title: "攻める？守る？",
  unit: "u6",
  type: "compare",
  reward_xp: 10,
  steps: [
    // step1: 比較 - ただの駒がある場面
    {
      id: "compare_take_free_or_defend",
      type: "compare",
      board_sfen: "9/9/9/4g4/9/9/9/4R4/4K4 b - 1",
      instruction: "攻める？守る？",
      coach_text: "相手のただの金（5点）が\n見えるぞ。\n取りに行くか、王の近くで\n守るか、どっちがいいかな？",
      compare_options: [
        {
          label: "ただの金を取る",
          description: "5点の駒得！",
          move: { from: { row: 7, col: 4 }, to: { row: 3, col: 4 } },
        },
        {
          label: "王の近くに留まる",
          description: "安全第一",
          move: { from: { row: 7, col: 4 }, to: { row: 7, col: 3 } },
        },
      ],
      compare_answer: 0,
      why_text: "ただの駒があるなら\n取るのが得じゃ！\n5点の駒得は大きいぞ。\n王に危険がなければ攻めよう。",
      success_text: "正解！ただの駒は取ろう！",
      fail_text: "ただの駒があれば取るのが\n基本じゃよ。",
    },
    // step2: 実行 - ただの金を取る
    {
      id: "execute_take_free",
      type: "move",
      board_sfen: "9/9/9/4g4/9/9/9/4R4/4K4 b - 1",
      instruction: "ただの金を取ろう！",
      coach_text: "飛車でただの金を取ろう！",
      arrows: [{ from: [7, 4], to: [3, 4] }],
      correct_move: {
        from: { row: 7, col: 4 },
        to: { row: 3, col: 4 },
      },
      result_sfen: "9/9/9/4R4/9/9/9/9/4K4 b G 1",
      success_text: "金を取って5点の得じゃ！",
      fail_text: "飛車でただの金を取ろう。",
    },
    // step3: 比較 - 王が危ない場面
    {
      id: "compare_defend_when_danger",
      type: "compare",
      board_sfen: "9/9/9/4g4/9/9/9/3rK4/9 b G 1",
      instruction: "攻める？守る？",
      coach_text: "ただの金（5点）もあるが、\n飛車が王の横に来ておるぞ。\nどうするべきかな？",
      compare_options: [
        {
          label: "王を守る",
          description: "飛車から王を守る",
          move: { from: { hand: "ki" }, to: { row: 7, col: 5 } },
        },
        {
          label: "ただの金を取りに行く",
          description: "5点の駒得",
          move: { from: { hand: "ki" }, to: { row: 3, col: 4 } },
        },
      ],
      compare_answer: 0,
      why_text: "王が危ないときは\n守りが最優先じゃ！\n王を取られたら負けだから、\n駒得よりも王の安全が大事じゃぞ。",
      success_text: "正解！王の安全が最優先じゃ！",
      fail_text: "王が危ないときは\n守りが最優先じゃ。",
    },
    // step4: 実行 - 王を守る
    {
      id: "execute_defend_king",
      type: "move",
      board_sfen: "9/9/9/4g4/9/9/9/3rK4/9 b G 1",
      instruction: "王を守ろう！",
      coach_text: "金を打って王を守ろう！",
      hand_pieces: { ki: 1 },
      arrows: [{ from: "hand_ki", to: [7, 5] }],
      correct_move: {
        from: { hand: "ki" },
        to: { row: 7, col: 5 },
      },
      result_sfen: "9/9/9/4g4/9/9/9/3rKG3/9 b - 1",
      success_text: "王を守ったぞ！\n王の安全が一番大事じゃ。",
      fail_text: "金を打って王を守ろう。",
    },
    // step5: クイズ - 攻守のバランス
    {
      id: "quiz_balance",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "いつ攻めて、いつ守る？",
      coach_text: "攻めと守り、\nどう判断すればいいかな？",
      quiz_options: ["王が安全なら攻め、危険なら守り", "常に攻める"],
      quiz_answer: 0,
      success_text: "正解！まず王の安全を確認して、\n安全なら攻める。\n危険なら守る。\nこのバランスが大事じゃ。",
      fail_text: "王が安全なら攻め、\n危険なら守りじゃ。",
    },
    // step6: 比較 - 仕上げ
    {
      id: "compare_finale",
      type: "compare",
      board_sfen: "9/9/9/9/3b5/9/9/9/3K5 b G 1",
      instruction: "攻める？守る？",
      coach_text: "仕上げじゃ！\n角が王を狙っておるぞ。\n攻めるか守るか、\nどっちが正しいかな？",
      compare_options: [
        {
          label: "守る（角の効きを防ぐ）",
          description: "王の安全を確保",
          move: { from: { hand: "ki" }, to: { row: 7, col: 4 } },
        },
        {
          label: "攻める（遠くに金を打つ）",
          description: "相手陣に打ち込む",
          move: { from: { hand: "ki" }, to: { row: 1, col: 1 } },
        },
      ],
      compare_answer: 0,
      why_text: "角が王を狙っておるから\nまず守りが大事じゃ！\n王の安全を確保してから\n攻めるのが正しい判断じゃぞ。",
      success_text: "すばらしい！\n攻守のバランスをマスターしたな！",
      fail_text: "王が危ないときは\n守りが最優先じゃ。",
    },
  ],
};
