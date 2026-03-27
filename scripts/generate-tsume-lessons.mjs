/**
 * Generate tsume lesson .ts files from new-problems.md
 *
 * Usage: node scripts/generate-tsume-lessons.mjs
 *
 * Reads MyScript/new-problems.md and creates lesson files based on
 * MyScript/tsume-lesson-plan.md mapping.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── Parse problems from md ──
const md = readFileSync(join(ROOT, 'MyScript/new-problems.md'), 'utf-8');

function parseProblems(md) {
  const tsume1 = {};
  const tsume3 = {};

  const lines = md.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // 1手詰め
    const m1 = line.match(/^### 1-(\d+)/);
    if (m1) {
      const num = parseInt(m1[1]);
      const sfen = (lines[i+1] || '').replace('SFEN:', '').trim();
      const answer = (lines[i+2] || '').replace('正解:', '').trim();
      if (sfen && answer) {
        tsume1[num] = { sfen, answer };
      }
      i += 4;
      continue;
    }

    // 3手詰め
    const m3 = line.match(/^### 3-(\d+)/);
    if (m3) {
      const num = parseInt(m3[1]);
      const sfen = (lines[i+1] || '').replace('SFEN:', '').trim();
      const move1 = (lines[i+2] || '').replace('1手目:', '').trim();
      // skip 2手目(相手) line
      const afterSfen = (lines[i+4] || '').replace('2手目後SFEN:', '').trim();
      const move3 = (lines[i+5] || '').replace('3手目:', '').trim();
      if (sfen && move1 && afterSfen && move3) {
        tsume3[num] = { sfen, move1, afterSfen, move3 };
      }
      i += 7;
      continue;
    }

    i++;
  }

  return { tsume1, tsume3 };
}

const { tsume1, tsume3 } = parseProblems(md);
console.log(`Parsed: ${Object.keys(tsume1).length} 1手詰め, ${Object.keys(tsume3).length} 3手詰め`);

// ── Lesson definitions from plan ──
// Format: { id, title, problems: [num, num, num, num], type: '1te'|'3te' }

const lessons = [
  // U4: 1手詰め
  { id: 'tsume1_kin_01', title: '金の1手詰め①', problems: [1,2,3,4], type: '1te', unit: 'u4' },
  { id: 'tsume1_kin_02', title: '金の1手詰め②', problems: [5,6,7,8], type: '1te', unit: 'u4' },
  { id: 'tsume1_gin_01', title: '銀の1手詰め①', problems: [11,12,13,14], type: '1te', unit: 'u4' },
  { id: 'tsume1_gin_02', title: '銀の1手詰め②', problems: [15,16,17,18], type: '1te', unit: 'u4' },
  { id: 'tsume1_hisha_01', title: '飛車の1手詰め①', problems: [41,42,43,44], type: '1te', unit: 'u4' },
  { id: 'tsume1_kaku_01', title: '角の1手詰め①', problems: [51,52,53,54], type: '1te', unit: 'u4' },
  { id: 'tsume1_kei_01', title: '桂の1手詰め①', problems: [21,22,23,24], type: '1te', unit: 'u4' },
  { id: 'tsume1_kyou_01', title: '香の1手詰め①', problems: [31,32,33,34], type: '1te', unit: 'u4' },
  { id: 'tsume1_fu_01', title: '歩の1手詰め①', problems: [61,62,63,64], type: '1te', unit: 'u4' },
  // These 3 lessons mix remaining category problems with ouyou
  { id: 'tsume1_kin_03', title: '金の1手詰め③', problems: [9,10,71,72], type: '1te', unit: 'u4' },
  { id: 'tsume1_gin_03', title: '銀の1手詰め③', problems: [19,20,73,74], type: '1te', unit: 'u4' },
  { id: 'tsume1_kei_02', title: '桂の1手詰め②', problems: [25,26,27,28], type: '1te', unit: 'u4' },

  // U5: 1手詰め
  { id: 'tsume1_hisha_02', title: '飛車の1手詰め②', problems: [45,46,47,48], type: '1te', unit: 'u5' },
  { id: 'tsume1_kaku_02', title: '角の1手詰め②', problems: [55,56,57,58], type: '1te', unit: 'u5' },
  { id: 'tsume1_kyou_02', title: '香の1手詰め②', problems: [35,36,37,38], type: '1te', unit: 'u5' },
  { id: 'tsume1_fu_02', title: '歩の1手詰め②', problems: [65,66,67,68], type: '1te', unit: 'u5' },

  // U6: 1手詰め応用
  { id: 'tsume1_ouyou_01', title: '1手詰め応用①', problems: [83,84,85,86], type: '1te', unit: 'u6' },
  { id: 'tsume1_ouyou_02', title: '1手詰め応用②', problems: [87,88,89,90], type: '1te', unit: 'u6' },

  // U7: 1手詰め応用
  { id: 'tsume1_ouyou_03', title: '1手詰め応用③', problems: [91,92,93,94], type: '1te', unit: 'u7' },
  { id: 'tsume1_ouyou_04', title: '1手詰め卒業', problems: [95,96,97,98], type: '1te', unit: 'u7' },

  // U5: 3手詰め
  { id: 'tsume3_kin_01', title: '金の3手詰め①', problems: [1,2,3,4], type: '3te', unit: 'u5' },
  { id: 'tsume3_kin_02', title: '金の3手詰め②', problems: [5,6,7,8], type: '3te', unit: 'u5' },
  { id: 'tsume3_gin_01', title: '銀の3手詰め①', problems: [11,12,13,14], type: '3te', unit: 'u5' },

  // U6: 3手詰め
  { id: 'tsume3_gin_02', title: '銀の3手詰め②', problems: [15,16,17,18], type: '3te', unit: 'u6' },
  { id: 'tsume3_kei_01', title: '桂の3手詰め①', problems: [21,22,23,24], type: '3te', unit: 'u6' },
  { id: 'tsume3_kei_02', title: '桂の3手詰め②', problems: [25,26,27,28], type: '3te', unit: 'u6' },
  { id: 'tsume3_kyou_01', title: '香の3手詰め①', problems: [31,32,33,34], type: '3te', unit: 'u6' },
  { id: 'tsume3_kyou_02', title: '香の3手詰め②', problems: [35,36,37,38], type: '3te', unit: 'u6' },

  // U7: 3手詰め
  { id: 'tsume3_hisha_01', title: '飛車の3手詰め①', problems: [41,42,43,44], type: '3te', unit: 'u7' },
  { id: 'tsume3_hisha_02', title: '飛車の3手詰め②', problems: [45,46,47,48], type: '3te', unit: 'u7' },
  { id: 'tsume3_kaku_01', title: '角の3手詰め①', problems: [51,52,53,54], type: '3te', unit: 'u7' },
  { id: 'tsume3_kaku_02', title: '角の3手詰め②', problems: [55,56,57,58], type: '3te', unit: 'u7' },
  { id: 'tsume3_fu_01', title: '歩の3手詰め①', problems: [61,62,63,64], type: '3te', unit: 'u7' },
  { id: 'tsume3_fu_02', title: '歩の3手詰め②', problems: [65,66,67,68], type: '3te', unit: 'u7' },

  // U8: 3手詰め mix + ouyou
  // Remaining 1手詰め: 29,30,39,40,49,50,59,60,69,70,99,100
  { id: 'tsume1_kei_03', title: '桂の1手詰め③', problems: [29,30], type: '1te', unit: 'u6', extra1te_ouyou: [75,76] },
  { id: 'tsume1_kyou_03', title: '香の1手詰め③', problems: [39,40], type: '1te', unit: 'u6', extra1te_ouyou: [77,78] },
  { id: 'tsume1_hisha_03', title: '飛車の1手詰め③', problems: [49,50], type: '1te', unit: 'u7', extra1te_ouyou: [79,80] },
  { id: 'tsume1_kaku_03', title: '角の1手詰め③', problems: [59,60], type: '1te', unit: 'u7', extra1te_ouyou: [81,82] },
  { id: 'tsume1_fu_03', title: '歩の1手詰め③', problems: [69,70,99,100], type: '1te', unit: 'u7' },

  { id: 'tsume3_mix_01', title: '3手詰め 駒別おさらい①', problems: [9,10,19,20], type: '3te', unit: 'u8' },
  { id: 'tsume3_mix_02', title: '3手詰め 駒別おさらい②', problems: [29,30,39,40], type: '3te', unit: 'u8' },
  { id: 'tsume3_mix_03', title: '3手詰め 駒別おさらい③', problems: [49,50,59,60], type: '3te', unit: 'u8' },
  // 3-69,3-70 only (2 problems). 3-71+ are in ouyou series.
  { id: 'tsume3_mix_04', title: '3手詰め 駒別おさらい④', problems: [69,70], type: '3te', unit: 'u8' },
  { id: 'tsume3_ouyou_01', title: '3手詰め応用①', problems: [71,72,73,74], type: '3te', unit: 'u8' },
  { id: 'tsume3_ouyou_02', title: '3手詰め応用②', problems: [75,76,77,78], type: '3te', unit: 'u8' },
  { id: 'tsume3_ouyou_03', title: '3手詰め応用③', problems: [79,80,81,82], type: '3te', unit: 'u8' },
  { id: 'tsume3_ouyou_04', title: '3手詰め応用④', problems: [83,84,85,86], type: '3te', unit: 'u8' },
  { id: 'tsume3_ouyou_05', title: '3手詰め応用⑤', problems: [87,88,89,90], type: '3te', unit: 'u8' },

  // U9: 3手詰め
  { id: 'tsume3_ouyou_06', title: '3手詰め応用⑥', problems: [91,92,93,94], type: '3te', unit: 'u9' },
  { id: 'tsume3_ouyou_07', title: '3手詰め応用⑦', problems: [95,96,97,98], type: '3te', unit: 'u9' },
  { id: 'tsume3_sotsugyo', title: '3手詰め卒業テスト', problems: [99,100], type: '3te', unit: 'u9' },
];

// ── SFEN diff to move ──
// Compare two SFENs to find what moved
function sfenToBoard(sfen) {
  const boardPart = sfen.split(' ')[0];
  const rows = boardPart.split('/');
  const board = [];
  for (const row of rows) {
    const cells = [];
    let promoted = false;
    for (const ch of row) {
      if (ch === '+') { promoted = true; continue; }
      const n = parseInt(ch);
      if (!isNaN(n)) {
        for (let j = 0; j < n; j++) cells.push(null);
      } else {
        cells.push((promoted ? '+' : '') + ch);
        promoted = false;
      }
    }
    board.push(cells);
  }
  return board;
}

function isSente(p) {
  if (!p) return false;
  const base = p.replace('+', '');
  return base === base.toUpperCase();
}

function isGote(p) {
  if (!p) return false;
  const base = p.replace('+', '');
  return base === base.toLowerCase();
}

function findMove(beforeSfen, afterSfen) {
  const before = sfenToBoard(beforeSfen);
  const after = sfenToBoard(afterSfen);

  const disappeared = []; // sente pieces that disappeared
  const appeared = [];    // sente pieces that appeared (or replaced gote)
  const goteDisappeared = []; // gote pieces that disappeared (for opponent move)

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const b = before[r]?.[c] || null;
      const a = after[r]?.[c] || null;
      if (b === a) continue;

      // A sente piece disappeared from this square
      if (isSente(b) && !isSente(a)) {
        disappeared.push({ row: r, col: c, piece: b });
      }
      // A sente piece appeared on this square (new or replaced gote)
      if (isSente(a) && (!b || !isSente(b))) {
        appeared.push({ row: r, col: c, piece: a });
      }
      // A gote piece disappeared (for opponent move detection)
      if (isGote(b) && !isGote(a)) {
        goteDisappeared.push({ row: r, col: c, piece: b });
      }
      // A gote piece appeared
      if (isGote(a) && (!b || !isGote(b))) {
        // gote move: treat as from=goteDisappeared, to=here
      }
    }
  }

  const pieceMap = { 'P': 'fu', 'L': 'ky', 'N': 'ke', 'S': 'gi', 'G': 'ki', 'B': 'ka', 'R': 'hi', 'K': 'ou' };

  // Sente move
  if (disappeared.length === 1 && appeared.length === 1) {
    return { type: 'move', from: { row: disappeared[0].row, col: disappeared[0].col }, to: { row: appeared[0].row, col: appeared[0].col } };
  }

  // Sente drop (no piece disappeared, one appeared)
  if (disappeared.length === 0 && appeared.length === 1) {
    const pieceLetter = appeared[0].piece.replace('+', '').toUpperCase();
    const handPiece = pieceMap[pieceLetter];
    if (handPiece) {
      return { type: 'drop', hand: handPiece, to: { row: appeared[0].row, col: appeared[0].col } };
    }
  }

  // Gote move (for auto_response)
  if (goteDisappeared.length >= 1) {
    // Find where gote piece went
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const b = before[r]?.[c] || null;
        const a = after[r]?.[c] || null;
        if (isGote(a) && a !== b) {
          return { type: 'move', from: { row: goteDisappeared[0].row, col: goteDisappeared[0].col }, to: { row: r, col: c } };
        }
      }
    }
    // Gote piece just moved to empty square
    if (goteDisappeared.length === 1) {
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (r === goteDisappeared[0].row && c === goteDisappeared[0].col) continue;
          const b = before[r]?.[c] || null;
          const a = after[r]?.[c] || null;
          if (isGote(a) && !isGote(b)) {
            return { type: 'move', from: { row: goteDisappeared[0].row, col: goteDisappeared[0].col }, to: { row: r, col: c } };
          }
        }
      }
    }
  }

  // Sente promoted move (piece changed from X to +X on different square)
  if (disappeared.length === 0 && appeared.length === 0) {
    // Check for promotion in place or complex capture
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const b = before[r]?.[c] || null;
        const a = after[r]?.[c] || null;
        if (b !== a && isSente(b) && !a) {
          disappeared.push({ row: r, col: c, piece: b });
        }
        if (b !== a && isSente(a) && !isSente(b)) {
          appeared.push({ row: r, col: c, piece: a });
        }
      }
    }
    if (disappeared.length === 1 && appeared.length === 1) {
      return { type: 'move', from: { row: disappeared[0].row, col: disappeared[0].col }, to: { row: appeared[0].row, col: appeared[0].col } };
    }
  }

  return null;
}

// ── Parse hand pieces from SFEN ──
function parseHand(sfen) {
  const parts = sfen.split(' ');
  const handStr = parts[2] || '-';
  if (handStr === '-') return {};

  const pieceMap = { 'P': 'fu', 'L': 'ky', 'N': 'ke', 'S': 'gi', 'G': 'ki', 'B': 'ka', 'R': 'hi' };
  const hand = {};
  let count = 0;

  for (const ch of handStr) {
    const n = parseInt(ch);
    if (!isNaN(n)) {
      count = count * 10 + n;
    } else if (ch.toUpperCase() === ch && pieceMap[ch]) {
      hand[pieceMap[ch]] = count || 1;
      count = 0;
    } else {
      count = 0; // lowercase = gote hand, skip
    }
  }

  return hand;
}

// ── Generate 1手詰め step ──
function gen1teStep(num, data, stepIdx) {
  const move = findMove(data.sfen, data.answer);
  if (!move) {
    console.warn(`  WARNING: Could not parse move for 1-${num}`);
    return null;
  }

  const hand = parseHand(data.sfen);
  const hasHand = Object.keys(hand).length > 0;

  const step = {
    id: `tsume1_${num}`,
    type: 'move',
    board_sfen: data.sfen,
    instruction: '1手で詰ませよう！',
    coach_text: stepIdx === 0 ? '詰将棋じゃ！\\n1手で王様を詰ませよう。' : '次の問題じゃ！',
  };

  if (move.type === 'drop') {
    step.correct_move = { from: { hand: move.hand }, to: move.to };
    step.hand_pieces = hand;
  } else {
    step.correct_move = { from: move.from, to: move.to };
  }

  step.result_sfen = data.answer;
  step.success_text = '詰みじゃ！';
  step.fail_text = '王様が逃げられない手を探そう。';

  return step;
}

// ── Generate 3手詰め step ──
function gen3teStep(num, data, stepIdx) {
  // 1手目: compare sfen vs move1
  const move1 = findMove(data.sfen, data.move1);
  // 2手目: compare move1 vs afterSfen (opponent move)
  const move2 = findMove(data.move1, data.afterSfen);
  // 3手目: compare afterSfen vs move3
  const move3 = findMove(data.afterSfen, data.move3);

  if (!move1 || !move3) {
    console.warn(`  WARNING: Could not parse moves for 3-${num}`);
    return null;
  }

  const hand = parseHand(data.sfen);

  const step = {
    id: `tsume3_${num}`,
    type: 'move',
    board_sfen: data.sfen,
    instruction: '3手で詰ませよう！',
    coach_text: stepIdx === 0 ? '3手詰めじゃ！\\nまず1手目の王手を指そう。' : '次の3手詰めじゃ！',
  };

  if (move1.type === 'drop') {
    step.correct_move = { from: { hand: move1.hand }, to: move1.to };
    step.hand_pieces = hand;
  } else {
    step.correct_move = { from: move1.from, to: move1.to };
    if (Object.keys(hand).length > 0) {
      step.hand_pieces = hand;
    }
  }

  // Auto response (opponent's move)
  if (move2) {
    step.auto_response = { from: move2.from || move2.to, to: move2.to };
    step.after_response_sfen = data.afterSfen;
    step.after_response_text = '相手が逃げたぞ。\\n次の1手で詰ませよう！';
  }

  // Second move (player's final checkmate move)
  if (move3.type === 'drop') {
    step.second_move = { from: { hand: move3.hand }, to: move3.to };
  } else {
    step.second_move = { from: move3.from, to: move3.to };
  }

  step.success_text = '3手詰め成功じゃ！';
  step.fail_text = '王手をかけて、逃げ道をなくそう。';

  return step;
}

// ── Generate lesson file ──
function generateLessonFile(lesson) {
  const constName = lesson.id.toUpperCase().replace(/-/g, '_');
  const steps = [];

  for (let i = 0; i < lesson.problems.length; i++) {
    const num = lesson.problems[i];
    let step = null;

    if (lesson.type === '1te') {
      const data = tsume1[num];
      if (!data) { console.warn(`  Missing 1手詰め problem ${num}`); continue; }
      step = gen1teStep(num, data, i);
    } else if (lesson.type === '3te' || lesson.type === '3te_final') {
      const data = tsume3[num];
      if (!data) { console.warn(`  Missing 3手詰め problem ${num}`); continue; }
      step = gen3teStep(num, data, i);
    } else if (lesson.type === '3te_mixed') {
      // First problems are 3te, extra1te are 1te
      const data = tsume3[num];
      if (!data) { console.warn(`  Missing 3手詰め problem ${num}`); continue; }
      step = gen3teStep(num, data, i);
    }

    if (step) steps.push(step);
  }

  // Handle extra 1te problems in mixed lessons
  if (lesson.extra1te) {
    for (const num of lesson.extra1te) {
      const data = tsume1[num];
      if (!data) { console.warn(`  Missing 1手詰め problem ${num}`); continue; }
      const step = gen1teStep(num, data, steps.length);
      if (step) steps.push(step);
    }
  }

  // Handle extra1te_ouyou: pad a 2-problem lesson with ouyou problems
  if (lesson.extra1te_ouyou) {
    for (const num of lesson.extra1te_ouyou) {
      const data = tsume1[num];
      if (!data) { console.warn(`  Missing 1手詰め problem ${num}`); continue; }
      const step = gen1teStep(num, data, steps.length);
      if (step) steps.push(step);
    }
  }

  // Handle 3te_final (only 2 3te problems + need 2 more - reuse hardest)
  if (lesson.type === '3te_final' && steps.length < 4) {
    // Add 2 of the hardest ouyou as bonus
    for (const num of [97, 98]) {
      const data = tsume3[num];
      if (data) {
        const step = gen3teStep(num, data, steps.length);
        if (step) {
          step.id = `tsume3_bonus_${num}`;
          steps.push(step);
        }
      }
    }
  }

  if (steps.length === 0) {
    console.warn(`  No valid steps for ${lesson.id}, skipping`);
    return null;
  }

  const xp = lesson.unit === 'u9' ? 20 : 15;

  // Build step strings
  const stepStrings = steps.map(s => {
    let str = `    {\n`;
    str += `      id: "${s.id}",\n`;
    str += `      type: "move",\n`;
    str += `      board_sfen: "${s.board_sfen}",\n`;
    str += `      instruction: "${s.instruction}",\n`;
    str += `      coach_text: "${s.coach_text}",\n`;

    if (s.hand_pieces && Object.keys(s.hand_pieces).length > 0) {
      const hp = Object.entries(s.hand_pieces).map(([k,v]) => `${k}: ${v}`).join(', ');
      str += `      hand_pieces: { ${hp} },\n`;
    }

    // correct_move
    if (s.correct_move) {
      const from = s.correct_move.from;
      const to = s.correct_move.to;
      if (from.hand) {
        str += `      correct_move: {\n        from: { hand: "${from.hand}" },\n        to: { row: ${to.row}, col: ${to.col} },\n      },\n`;
      } else {
        str += `      correct_move: {\n        from: { row: ${from.row}, col: ${from.col} },\n        to: { row: ${to.row}, col: ${to.col} },\n      },\n`;
      }
    }

    if (s.result_sfen) str += `      result_sfen: "${s.result_sfen}",\n`;

    // auto_response (3te)
    if (s.auto_response) {
      str += `      auto_response: { from: { row: ${s.auto_response.from.row}, col: ${s.auto_response.from.col} }, to: { row: ${s.auto_response.to.row}, col: ${s.auto_response.to.col} } },\n`;
      if (s.after_response_sfen) str += `      after_response_sfen: "${s.after_response_sfen}",\n`;
      if (s.after_response_text) str += `      after_response_text: "${s.after_response_text}",\n`;
    }

    // second_move (3te)
    if (s.second_move) {
      const from = s.second_move.from;
      const to = s.second_move.to;
      if (from.hand) {
        str += `      second_move: {\n        from: { hand: "${from.hand}" },\n        to: { row: ${to.row}, col: ${to.col} },\n      },\n`;
      } else {
        str += `      second_move: {\n        from: { row: ${from.row}, col: ${from.col} },\n        to: { row: ${to.row}, col: ${to.col} },\n      },\n`;
      }
    }

    str += `      success_text: "${s.success_text}",\n`;
    str += `      fail_text: "${s.fail_text}",\n`;
    str += `    }`;
    return str;
  });

  const content = `import type { LessonData } from "../../lesson/types";

export const ${constName}: LessonData = {
  id: "${lesson.id}",
  title: "${lesson.title}",
  unit: "${lesson.unit}",
  type: "learn",
  reward_xp: ${xp},
  steps: [
${stepStrings.join(',\n')},
  ],
};
`;

  return content;
}

// ── Main ──
const outDir = join(ROOT, 'src/data/lessons');
let generated = 0;
const exportNames = [];

for (const lesson of lessons) {
  console.log(`Generating ${lesson.id}...`);
  const content = generateLessonFile(lesson);
  if (content) {
    const filename = `${lesson.id}.ts`;
    writeFileSync(join(outDir, filename), content);
    exportNames.push({ id: lesson.id, constName: lesson.id.toUpperCase().replace(/-/g, '_') });
    generated++;
  }
}

console.log(`\nGenerated ${generated} lesson files.`);
console.log('\n// Add these imports to index.ts:');
for (const e of exportNames) {
  console.log(`import { ${e.constName} } from "./${e.id}";`);
}
console.log('\n// Add these to NATIVE_LESSONS:');
for (const e of exportNames) {
  console.log(`  [${e.constName}.id]: ${e.constName},`);
}
