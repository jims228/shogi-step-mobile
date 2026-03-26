import type { LessonData } from "../../lesson/types";

export const U7_COMPARE_CASTLE: LessonData = {
  id: "u7_compare_castle",
  title: "矢倉と美濃、どっち？",
  unit: "u7",
  type: "compare",
  reward_xp: 10,
  steps: [
    // step1: 比較 - 居飛車の場合
    {
      id: "compare_ibisha",
      type: "compare",
      board_sfen: "9/9/9/9/9/9/9/9/4K3R b - 1",
      instruction: "居飛車のとき、どの囲い？",
      coach_text: "飛車が右にあるとき（居飛車）。\n矢倉と美濃、\nどっちが合うかな？",
      compare_options: [
        {
          label: "矢倉",
          description: "上部に強い",
        },
        {
          label: "美濃",
          description: "横に強い",
        },
      ],
      compare_answer: 0,
      why_text: "居飛車は飛車が右にあるから\n相手の攻めは上から来やすい。\n上部に強い矢倉が合うぞ！",
      success_text: "正解！居飛車には矢倉じゃ！",
      fail_text: "居飛車では上からの攻めが\n多いから矢倉が合うぞ。",
    },
    // step2: 比較 - 振り飛車の場合
    {
      id: "compare_furibisha",
      type: "compare",
      board_sfen: "9/9/9/9/9/9/9/9/R3K4 b - 1",
      instruction: "振り飛車のとき、どの囲い？",
      coach_text: "飛車が左にあるとき（振り飛車）。\nどっちの囲いが合うかな？",
      compare_options: [
        {
          label: "美濃",
          description: "横に強い",
        },
        {
          label: "矢倉",
          description: "上部に強い",
        },
      ],
      compare_answer: 0,
      why_text: "振り飛車では相手の飛車が\n横から攻めてくることが多い。\n横に強い美濃が合うぞ！",
      success_text: "正解！振り飛車には美濃じゃ！",
      fail_text: "振り飛車は横からの攻めが\n多いから美濃が合うぞ。",
    },
    // step3: クイズ - なぜ戦型で囲いを変える？
    {
      id: "quiz_why_change",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "なぜ戦型で囲いを変えるの？",
      coach_text: "居飛車は矢倉、振り飛車は美濃。\nなぜ使い分けるんじゃろう？",
      quiz_options: ["攻めが来る方向が違うから", "好みの問題だから", "特に理由はない"],
      quiz_answer: 0,
      success_text: "正解！戦型によって\n攻めが来る方向が変わるから\n囲いも変えるんじゃ。\nこれが囲い選びの基本じゃよ。",
      fail_text: "攻めが来る方向に合わせて\n囲いを選ぶのが大事じゃ。",
    },
    // step4: 比較 - 上からの攻めにはどっち？
    {
      id: "compare_top_attack",
      type: "compare",
      board_sfen: "9/9/9/4g4/9/9/9/9/4K4 b - 1",
      instruction: "上から攻められそう！どの囲い？",
      coach_text: "相手の金が上から\n迫ってきておる。\nどっちの囲いで守りたい？",
      compare_options: [
        {
          label: "矢倉（上部に強い）",
          description: "金銀が上を守る",
        },
        {
          label: "美濃（横に強い）",
          description: "金が横を守る",
        },
      ],
      compare_answer: 0,
      why_text: "上からの攻めには矢倉じゃ！\n金銀が上部にいるから\nしっかり受け止められるぞ。",
      success_text: "正解！上からの攻めには矢倉！",
      fail_text: "上からの攻めには\n上部に強い矢倉が合うぞ。",
    },
    // step5: 比較 - 横からの攻めにはどっち？
    {
      id: "compare_side_attack",
      type: "compare",
      board_sfen: "9/9/9/9/9/9/9/9/4K3r b - 1",
      instruction: "横から飛車で攻められそう！",
      coach_text: "相手の飛車が横から\n攻めてきておる。\nどっちの囲いで守りたい？",
      compare_options: [
        {
          label: "美濃（横に強い）",
          description: "金が横を守る",
        },
        {
          label: "矢倉（上部に強い）",
          description: "金銀が上を守る",
        },
      ],
      compare_answer: 0,
      why_text: "横からの攻めには美濃じゃ！\n金が王の横にいるから\n飛車の攻めをしっかり受けられるぞ。",
      success_text: "正解！横からの攻めには美濃！",
      fail_text: "横からの攻めには\n横に強い美濃が合うぞ。",
    },
    // step6: まとめクイズ
    {
      id: "quiz_castle_summary",
      type: "quiz",
      board_sfen: "9/9/9/9/9/9/9/9/9 b - 1",
      instruction: "囲い選びで一番大事なのは？",
      coach_text: "矢倉と美濃の使い分け、\n最後のまとめじゃ。\n囲い選びで一番大事なことは？",
      quiz_options: ["攻めが来る方向に合わせる", "好きな方を選ぶ", "強い方を毎回使う"],
      quiz_answer: 0,
      success_text: "すばらしい！\n上からの攻めには矢倉、\n横からの攻めには美濃。\n攻めの方向に合わせて\n囲いを選ぶのが大事じゃ！",
      fail_text: "攻めが来る方向に合わせて\n囲いを選ぶのが基本じゃよ。",
    },
  ],
};
