import type { LessonData } from "../../lesson/types";

export const U6_COMPARE_TRADE: LessonData = {
  id: "u6_compare_trade",
  title: "この交換、得？損？",
  unit: "u6",
  type: "compare",
  reward_xp: 10,
  steps: [
    // step1: 比較 - 金と歩の交換
    {
      id: "compare_gold_for_pawn",
      type: "compare",
      board_sfen: "9/9/9/9/3Gp4/9/9/9/9 b - 1",
      instruction: "金で歩を取る交換は？",
      coach_text: "金（5点）で歩（1点）を取って、\n相手にも金を取られるとしたら…\nこの交換は得かな？損かな？",
      compare_options: [
        {
          label: "損な交換",
          description: "金5点を失って歩1点しか得られない",
        },
        {
          label: "得な交換",
          description: "駒が取れるから得",
        },
      ],
      compare_answer: 0,
      why_text: "金（5点）を失って歩（1点）を\n得るだけじゃ。差は-4点。\nこれは大損じゃぞ！",
      success_text: "正解！金と歩の交換は大損じゃ。",
      fail_text: "金5点を失って歩1点では\n4点の損じゃよ。",
    },
    // step2: 比較 - 銀と飛車の交換
    {
      id: "compare_silver_for_rook",
      type: "compare",
      board_sfen: "9/9/9/9/3Sr4/9/9/9/9 b - 1",
      instruction: "銀で飛車を取る交換は？",
      coach_text: "銀（5点）で飛車（10点）を取って、\n相手に銀を取られるとしたら…\nこの交換は？",
      compare_options: [
        {
          label: "得な交換",
          description: "飛車10点を得て銀5点を失う",
        },
        {
          label: "損な交換",
          description: "銀を失うから損",
        },
      ],
      compare_answer: 0,
      why_text: "銀（5点）を失って飛車（10点）を\n得るぞ。差は+5点。\nこれは大得じゃ！",
      success_text: "正解！飛車を取れるなら大得じゃ！",
      fail_text: "飛車10点を得て銀5点を失うなら\n5点の得じゃよ。",
    },
    // step3: 実行 - 銀で飛車を取る
    {
      id: "execute_take_rook",
      type: "move",
      board_sfen: "9/9/9/9/3Sr4/9/9/9/9 b - 1",
      instruction: "銀で飛車を取ろう！",
      coach_text: "得な交換じゃ！\n銀で飛車を取ろう。",
      arrows: [{ from: [4, 3], to: [4, 4] }],
      correct_move: {
        from: { row: 4, col: 3 },
        to: { row: 4, col: 4 },
      },
      result_sfen: "9/9/9/9/4S4/9/9/9/9 b R 1",
      success_text: "飛車を取ったぞ！\n5点の得じゃ。",
      fail_text: "銀で飛車を取ろう。",
    },
    // step4: 比較 - 角と桂馬の交換
    {
      id: "compare_bishop_for_knight",
      type: "compare",
      board_sfen: "9/9/9/9/3Bn4/9/9/9/9 b - 1",
      instruction: "角で桂馬を取る交換は？",
      coach_text: "角（8点）で桂馬（3点）を取って、\n角を取られるとしたら…\nこの交換は得かな？損かな？",
      compare_options: [
        {
          label: "損な交換",
          description: "角8点を失って桂3点しか得られない",
        },
        {
          label: "得な交換",
          description: "桂馬を取れるから得",
        },
      ],
      compare_answer: 0,
      why_text: "角（8点）を失って桂（3点）を\n得るだけじゃ。差は-5点。\n大駒を安い駒と交換するのは\n損じゃぞ！",
      success_text: "正解！大駒を安売りしてはダメじゃ。",
      fail_text: "角8点を失って桂3点では\n5点の損じゃよ。",
    },
    // step5: クイズ - 駒の交換の考え方
    {
      id: "quiz_trade_principle",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "駒の交換で大事なのは？",
      coach_text: "駒の交換で一番大事な\n考え方は何じゃろう？",
      quiz_options: ["取る駒の点数が高い方が得", "とにかく取ればいい"],
      quiz_answer: 0,
      success_text: "正解！取る駒の方が\n高ければ「駒得」じゃ。\n点数を数える癖をつけよう！",
      fail_text: "取る駒の点数が高い方が得じゃ。\n点数を比べることが大事じゃよ。",
    },
    // step6: 比較 - 仕上げ
    {
      id: "compare_trade_finale",
      type: "compare",
      board_sfen: "9/9/9/9/3Pb4/9/9/9/9 b - 1",
      instruction: "歩で角を取る交換は？",
      coach_text: "仕上げじゃ！\n歩（1点）で角（8点）を取って、\n歩を取られるとしたら…\nどうじゃ？",
      compare_options: [
        {
          label: "大得な交換",
          description: "歩1点で角8点を得る",
        },
        {
          label: "損な交換",
          description: "歩を失うから損",
        },
      ],
      compare_answer: 0,
      why_text: "歩（1点）を失って角（8点）を\n得るぞ。差は+7点！\nこれは大得の交換じゃ！",
      success_text: "すばらしい！\n駒の損得判断をマスターしたな！",
      fail_text: "歩1点で角8点を取れるなら\n7点の大得じゃよ。",
    },
  ],
};
