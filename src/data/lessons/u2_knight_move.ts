import type { LessonData } from "../../lesson/types";

export const U2_KNIGHT_MOVE: LessonData = {
  id: "u2_knight_move",
  title: "桂馬の動き",
  unit: "u2",
  type: "learn",
  reward_xp: 10,
  steps: [
    // step1: 桂馬を右前に跳ぶ（ガイド）
    {
      id: "knight_jump_right",
      type: "move",
      board_sfen: "9/9/9/9/9/9/4N4/9/9 b - 1",
      instruction: "桂馬を跳ばしてみよう！",
      coach_text: "これが桂馬じゃ！\n前に2マス、横に1マスの\n特殊な動きをするぞ。",
      arrows: [{ from: [6, 4], to: [4, 5] }],
      correct_move: {
        from: { row: 6, col: 4 },
        to: { row: 4, col: 5 },
      },
      result_sfen: "9/9/9/9/5N3/9/9/9/9 b - 1",
      success_text: "桂馬はピョンと跳べるんじゃ！\n他の駒にはない特殊な動きじゃよ。",
      fail_text: "矢印の方向に桂馬を跳ばしてみよう。",
    },
    // step2: 桂馬を左前に跳ぶ（ガイド）
    {
      id: "knight_jump_left",
      type: "move",
      board_sfen: "9/9/9/9/9/9/4N4/9/9 b - 1",
      instruction: "今度は反対に跳ぼう！",
      coach_text: "桂馬は左右どちらにも\n跳べるぞ！",
      arrows: [{ from: [6, 4], to: [4, 3] }],
      correct_move: {
        from: { row: 6, col: 4 },
        to: { row: 4, col: 3 },
      },
      result_sfen: "9/9/9/9/3N5/9/9/9/9 b - 1",
      success_text: "左にもピョンと跳べたな！",
      fail_text: "矢印の方向に桂馬を跳ばしてみよう。",
    },
    // step3: クイズ - 桂馬は駒を飛び越えられる？
    {
      id: "knight_jump_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/9/4P4/4N4/9/9 b - 1",
      instruction: "桂馬は前の歩を飛び越えられる？",
      coach_text: "桂馬の前に味方の歩があるぞ。\n桂馬は飛び越えられるかな？",
      quiz_options: ["飛び越えられる！", "飛び越えられない"],
      quiz_answer: 0,
      success_text: "正解！桂馬は唯一、\n他の駒を飛び越えられる駒じゃ！\nこれが桂馬の最大の特徴じゃよ。",
      fail_text: "桂馬は「跳ぶ」から\n途中の駒は関係ないんじゃ。",
    },
    // step4: 自力で桂馬が金を取る
    {
      id: "knight_capture",
      type: "move",
      board_sfen: "9/9/9/9/5g3/9/4N4/9/9 b - 1",
      instruction: "桂馬で金を取ろう！",
      coach_text: "桂馬で金を\n取ってみよう！",
      correct_move: {
        from: { row: 6, col: 4 },
        to: { row: 4, col: 5 },
      },
      result_sfen: "9/9/9/9/5N3/9/9/9/9 b G 1",
      success_text: "桂馬で金が取れたぞ！\n跳び越えて攻撃できるのが強みじゃ。",
      fail_text: "桂馬は前に2、横に1の場所に跳べるぞ。",
    },
    // step5: クイズ - 桂馬は後ろに跳べる？
    {
      id: "knight_back_quiz",
      type: "quiz",
      board_sfen: "9/9/9/9/4N4/9/9/9/9 b - 1",
      instruction: "桂馬は後ろに跳べる？",
      coach_text: "桂馬は後ろにも\n跳べるかな？",
      quiz_options: ["前にだけ跳べる", "後ろにも跳べる"],
      quiz_answer: 0,
      success_text: "正解！桂馬は前にしか跳べない。\n一度跳んだら戻れないから\n慎重に使うんじゃよ！",
      fail_text: "桂馬は前にしか跳べないぞ。\n後ろには戻れないんじゃ。",
    },
    // step6: 自力で桂馬が銀を取る
    {
      id: "knight_finale",
      type: "move",
      board_sfen: "9/9/9/9/9/4s4/9/3N5/9 b - 1",
      instruction: "桂馬で銀を取って仕上げ！",
      coach_text: "仕上げじゃ！\n桂馬でピョンと跳んで\n銀を取ろう！",
      correct_move: {
        from: { row: 7, col: 3 },
        to: { row: 5, col: 4 },
      },
      result_sfen: "9/9/9/9/9/4N4/9/9/9 b S 1",
      success_text: "すばらしい！\n桂馬の動きをマスターしたな！\n跳び越える力を活かそう！",
      fail_text: "桂馬は前に2、横に1の場所に跳べるぞ。",
    },
  ],
};
