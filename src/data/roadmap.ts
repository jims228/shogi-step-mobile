// ── v4 Curriculum Roadmap ──
// Source of truth for the roadmap UI. Each node is a lesson, review, or battle.
// Lesson content (steps/SFEN) lives in src/data/lessons/*.ts — this file only defines structure.
// Restructured into Sections (S1-S14) with level-based progression + skip tests.

export type NodeType = "lesson" | "review" | "battle";

export type RoadmapNode = {
  id: string;
  title: string;
  unitId: string;
  nodeType: NodeType;
  /** Short description for continue card / accessibility. */
  description: string;
  /** true if native lesson data exists and is playable. false = placeholder. */
  implemented: boolean;
};

export type UnitDef = {
  id: string;
  title: string;
  theme: string;
};

// ── Sections ──

export const UNITS: UnitDef[] = [
  // 診断
  { id: "s0", title: "はじめる前", theme: "診断" },
  // 入門レベル
  { id: "s1", title: "はじめての将棋", theme: "駒の動きと王手" },
  { id: "s2", title: "将棋のルール", theme: "持ち駒・成り・二歩" },
  { id: "s3", title: "はじめての詰将棋", theme: "詰みと1手詰め" },
  // 初級レベル
  { id: "s4", title: "1手詰めマスター", theme: "駒別1手詰め" },
  { id: "s5", title: "受けの基本", theme: "逃げる・合駒・取る" },
  { id: "s6", title: "駒の価値と手筋", theme: "駒得・手筋" },
  { id: "s7", title: "3手詰めチャレンジ", theme: "3手詰め集中" },
  // 中級レベル
  { id: "s8", title: "囲いの基本", theme: "矢倉・美濃" },
  { id: "s9", title: "序盤の考え方", theme: "序盤原則・定跡" },
  { id: "s10", title: "中盤の戦い方", theme: "仕掛け・駒交換" },
  { id: "s11", title: "終盤力を鍛える", theme: "寄せ・詰めろ" },
  // 上級レベル
  { id: "s12", title: "5手詰めに挑戦", theme: "5手詰め" },
  { id: "s13", title: "応用手筋と定跡", theme: "実戦力" },
  { id: "s14", title: "総仕上げ", theme: "卒業" },
];

// ── Nodes ──

export const ROADMAP_NODES: RoadmapNode[] = [
  // ── S0: 診断 ──
  { id: "u0_diagnosis", title: "スタート診断", unitId: "s0", nodeType: "lesson", description: "レベル判定と学習パスの決定", implemented: true },

  // ════════════════════════════════════
  // 入門レベル（S1-S3）
  // ════════════════════════════════════

  // ── S1: はじめての将棋（16レッスン）──
  { id: "u1_what_is_shogi", title: "将棋ってなに？", unitId: "s1", nodeType: "lesson", description: "盤面の見方、先手後手、勝利条件", implemented: true },
  { id: "u1_pawn_move", title: "歩の動き", unitId: "s1", nodeType: "lesson", description: "歩は前に1マス。進む・取る", implemented: true },
  { id: "u1_gold_move", title: "金の動き", unitId: "s1", nodeType: "lesson", description: "金の6方向移動", implemented: true },
  { id: "u1_king_move", title: "王の動き", unitId: "s1", nodeType: "lesson", description: "王は全方向1マス", implemented: true },
  { id: "u2_silver_move", title: "銀の動き", unitId: "s1", nodeType: "lesson", description: "銀の5方向。金との違い", implemented: true },
  { id: "u2_silver_use", title: "銀を使ってみよう", unitId: "s1", nodeType: "lesson", description: "銀で相手の駒を取る", implemented: true },
  { id: "u2_rook_move", title: "飛車の動き", unitId: "s1", nodeType: "lesson", description: "縦横どこまでも", implemented: true },
  { id: "u2_bishop_move", title: "角行の動き", unitId: "s1", nodeType: "lesson", description: "斜めどこまでも", implemented: true },
  { id: "u2_knight_move", title: "桂馬の動き", unitId: "s1", nodeType: "lesson", description: "跳び越えられる唯一の駒", implemented: true },
  { id: "u2_lance_move", title: "香車の動き", unitId: "s1", nodeType: "lesson", description: "前にまっすぐ", implemented: true },
  { id: "u2_compare_gold_silver", title: "金と銀の違い", unitId: "s1", nodeType: "lesson", description: "金は横に強い、銀は斜め前に強い", implemented: true },
  { id: "u2_big_pieces", title: "大駒を使ってみよう", unitId: "s1", nodeType: "lesson", description: "飛車・角で駒を取るパズル", implemented: true },
  { id: "u1_what_is_check", title: "王手ってなに？", unitId: "s1", nodeType: "lesson", description: "王手の概念", implemented: true },
  { id: "u1_give_check", title: "王手をかけてみよう", unitId: "s1", nodeType: "lesson", description: "金で王手をかけるパズル", implemented: true },
  { id: "u2_compare_take", title: "取って大丈夫？", unitId: "s1", nodeType: "lesson", description: "ただ vs 守られている駒", implemented: true },
  { id: "u1_review", title: "セクション1まとめ", unitId: "s1", nodeType: "review", description: "駒の動きと王手の復習", implemented: true },

  // ── S2: 将棋のルール（14レッスン）──
  { id: "u3_capture_hand", title: "取った駒は自分のもの", unitId: "s2", nodeType: "lesson", description: "持ち駒の概念", implemented: true },
  { id: "u3_drop", title: "駒を打ってみよう", unitId: "s2", nodeType: "lesson", description: "持ち駒から盤上に打つ", implemented: true },
  { id: "u3_compare_drop_where", title: "どこに打つのが一番？", unitId: "s2", nodeType: "lesson", description: "打つ場所の比較判断", implemented: true },
  { id: "u3_promotion", title: "成りとは", unitId: "s2", nodeType: "lesson", description: "敵陣で駒が強くなる", implemented: true },
  { id: "u3_promote_do", title: "成ってみよう", unitId: "s2", nodeType: "lesson", description: "駒を成る操作", implemented: true },
  { id: "u3_promote_power", title: "成りを活かそう", unitId: "s2", nodeType: "lesson", description: "成り駒のパズル", implemented: true },
  { id: "u3_nifu", title: "二歩は反則", unitId: "s2", nodeType: "lesson", description: "二歩ルール", implemented: true },
  { id: "u3_compare_drop_vs_move", title: "打つ vs 動かす", unitId: "s2", nodeType: "lesson", description: "持ち駒 vs 盤上の駒", implemented: true },
  { id: "u1_compare_check", title: "王手？駒を取る？", unitId: "s2", nodeType: "lesson", description: "王手 vs 駒取りの比較判断", implemented: true },
  { id: "u2_compare_take", title: "取って大丈夫？（復習）", unitId: "s2", nodeType: "lesson", description: "ただ vs 守られている駒", implemented: true },
  { id: "tsume1_kin_01", title: "金の1手詰め①", unitId: "s2", nodeType: "lesson", description: "金を使った1手詰め 1-1〜1-4", implemented: true },
  { id: "tsume1_kin_02", title: "金の1手詰め②", unitId: "s2", nodeType: "lesson", description: "金を使った1手詰め 1-5〜1-8", implemented: true },
  { id: "u3_review", title: "セクション2まとめ", unitId: "s2", nodeType: "review", description: "持ち駒・成り・二歩の復習", implemented: true },
  { id: "u2_review", title: "セクション2テスト", unitId: "s2", nodeType: "review", description: "入門レベル確認", implemented: true },

  // ── S3: はじめての詰将棋（14レッスン）──
  { id: "u4_what_is_mate", title: "詰みってなに？", unitId: "s3", nodeType: "lesson", description: "詰みの概念", implemented: true },
  { id: "u4_head_gold", title: "頭金で詰ます", unitId: "s3", nodeType: "lesson", description: "基本の1手詰め", implemented: true },
  { id: "u4_belly_gold", title: "腹金で詰ます", unitId: "s3", nodeType: "lesson", description: "横からの金で詰ます", implemented: true },
  { id: "tsume1_gin_01", title: "銀の1手詰め①", unitId: "s3", nodeType: "lesson", description: "銀を使った1手詰め 1-11〜1-14", implemented: true },
  { id: "tsume1_gin_02", title: "銀の1手詰め②", unitId: "s3", nodeType: "lesson", description: "銀を使った1手詰め 1-15〜1-18", implemented: true },
  { id: "tsume1_hisha_01", title: "飛車の1手詰め①", unitId: "s3", nodeType: "lesson", description: "飛車を使った1手詰め 1-41〜1-44", implemented: true },
  { id: "tsume1_kaku_01", title: "角の1手詰め①", unitId: "s3", nodeType: "lesson", description: "角を使った1手詰め 1-51〜1-54", implemented: true },
  { id: "tsume1_kei_01", title: "桂の1手詰め①", unitId: "s3", nodeType: "lesson", description: "桂を使った1手詰め 1-21〜1-24", implemented: true },
  { id: "tsume1_kyou_01", title: "香の1手詰め①", unitId: "s3", nodeType: "lesson", description: "香を使った1手詰め 1-31〜1-34", implemented: true },
  { id: "tsume1_fu_01", title: "歩の1手詰め①", unitId: "s3", nodeType: "lesson", description: "歩を使った1手詰め 1-61〜1-64", implemented: true },
  { id: "u4_compare_check_vs_mate", title: "王手と詰みの違い", unitId: "s3", nodeType: "lesson", description: "逃げられる vs 逃げられない", implemented: true },
  { id: "tsume1_kin_03", title: "金の1手詰め③", unitId: "s3", nodeType: "lesson", description: "金の1手詰め+応用", implemented: true },
  { id: "u4_review", title: "セクション3まとめ", unitId: "s3", nodeType: "review", description: "詰みと1手詰めの復習", implemented: true },
  { id: "u4_tsume_mix", title: "入門 卒業テスト", unitId: "s3", nodeType: "review", description: "入門レベル総合テスト", implemented: true },

  // ════════════════════════════════════
  // 初級レベル（S4-S7）
  // ════════════════════════════════════

  // ── S4: 1手詰めマスター（14レッスン）──
  { id: "tsume1_gin_03", title: "銀の1手詰め③", unitId: "s4", nodeType: "lesson", description: "銀の1手詰め+応用", implemented: true },
  { id: "tsume1_hisha_02", title: "飛車の1手詰め②", unitId: "s4", nodeType: "lesson", description: "飛車を使った1手詰め 1-45〜1-48", implemented: true },
  { id: "tsume1_kaku_02", title: "角の1手詰め②", unitId: "s4", nodeType: "lesson", description: "角を使った1手詰め 1-55〜1-58", implemented: true },
  { id: "tsume1_kei_02", title: "桂の1手詰め②", unitId: "s4", nodeType: "lesson", description: "桂を使った1手詰め 1-25〜1-28", implemented: true },
  { id: "tsume1_kyou_02", title: "香の1手詰め②", unitId: "s4", nodeType: "lesson", description: "香を使った1手詰め 1-35〜1-38", implemented: true },
  { id: "tsume1_fu_02", title: "歩の1手詰め②", unitId: "s4", nodeType: "lesson", description: "歩を使った1手詰め 1-65〜1-68", implemented: true },
  { id: "tsume1_kei_03", title: "桂の1手詰め③", unitId: "s4", nodeType: "lesson", description: "桂の1手詰め+応用", implemented: true },
  { id: "tsume1_kyou_03", title: "香の1手詰め③", unitId: "s4", nodeType: "lesson", description: "香の1手詰め+応用", implemented: true },
  { id: "tsume1_hisha_03", title: "飛車の1手詰め③", unitId: "s4", nodeType: "lesson", description: "飛車の1手詰め+応用", implemented: true },
  { id: "tsume1_kaku_03", title: "角の1手詰め③", unitId: "s4", nodeType: "lesson", description: "角の1手詰め+応用", implemented: true },
  { id: "tsume1_fu_03", title: "歩の1手詰め③", unitId: "s4", nodeType: "lesson", description: "歩の1手詰め+応用", implemented: true },
  { id: "tsume1_ouyou_01", title: "1手詰め応用①", unitId: "s4", nodeType: "lesson", description: "応用1手詰め 1-83〜1-86", implemented: true },
  { id: "tsume1_ouyou_02", title: "1手詰め応用②", unitId: "s4", nodeType: "lesson", description: "応用1手詰め 1-87〜1-90", implemented: true },
  { id: "u4_tsume_gold_silver", title: "セクション4まとめ", unitId: "s4", nodeType: "review", description: "1手詰め総復習", implemented: true },

  // ── S5: 受けの基本（14レッスン）──
  { id: "u5_three_defenses", title: "王手の受け方は3つ", unitId: "s5", nodeType: "lesson", description: "逃げる・合駒・取る", implemented: true },
  { id: "u5_escape", title: "逃げて受けよう", unitId: "s5", nodeType: "lesson", description: "王を逃がして受ける", implemented: true },
  { id: "u5_block", title: "合駒で受けよう", unitId: "s5", nodeType: "lesson", description: "間に駒を打つ", implemented: true },
  { id: "u5_capture_attacker", title: "攻め駒を取って受けよう", unitId: "s5", nodeType: "lesson", description: "王手駒を取る", implemented: true },
  { id: "u5_compare_defense", title: "どの受けが一番？", unitId: "s5", nodeType: "lesson", description: "3つの受けの比較判断", implemented: true },
  { id: "u5_is_king_safe", title: "王は安全？", unitId: "s5", nodeType: "lesson", description: "自玉の安全度判断", implemented: true },
  { id: "tsume1_ouyou_03", title: "1手詰め応用③", unitId: "s5", nodeType: "lesson", description: "応用1手詰め 1-91〜1-94", implemented: true },
  { id: "tsume3_kin_01", title: "金の3手詰め①", unitId: "s5", nodeType: "lesson", description: "金が活躍する3手詰め 3-1〜3-4", implemented: true },
  { id: "tsume3_kin_02", title: "金の3手詰め②", unitId: "s5", nodeType: "lesson", description: "金が活躍する3手詰め 3-5〜3-8", implemented: true },
  { id: "tsume3_gin_01", title: "銀の3手詰め①", unitId: "s5", nodeType: "lesson", description: "銀が活躍する3手詰め 3-11〜3-14", implemented: true },
  { id: "tsume1_ouyou_04", title: "1手詰め卒業", unitId: "s5", nodeType: "lesson", description: "応用1手詰め 1-95〜1-98", implemented: true },
  { id: "u5_review", title: "セクション5まとめ", unitId: "s5", nodeType: "review", description: "受けと3手詰めの復習", implemented: true },

  // ── S6: 駒の価値と手筋（16レッスン）──
  { id: "u6_piece_value", title: "駒の価値", unitId: "s6", nodeType: "lesson", description: "駒の点数を知る", implemented: true },
  { id: "u6_compare_trade", title: "この交換、得？損？", unitId: "s6", nodeType: "lesson", description: "駒価値の比較判断", implemented: true },
  { id: "u6_find_free", title: "ただの駒を見つけよう", unitId: "s6", nodeType: "lesson", description: "守られていない駒を取る", implemented: true },
  { id: "tsume3_gin_02", title: "銀の3手詰め②", unitId: "s6", nodeType: "lesson", description: "銀が活躍する3手詰め 3-15〜3-18", implemented: true },
  { id: "u6_tesuji_tataki", title: "手筋：叩きの歩", unitId: "s6", nodeType: "lesson", description: "駒の頭に歩を打つ", implemented: true },
  { id: "u6_tesuji_waridachi", title: "手筋：割り打ちの銀", unitId: "s6", nodeType: "lesson", description: "2駒の間に銀を打つ", implemented: true },
  { id: "tsume3_kei_01", title: "桂の3手詰め①", unitId: "s6", nodeType: "lesson", description: "桂が活躍する3手詰め 3-21〜3-24", implemented: true },
  { id: "u6_tesuji_fork", title: "手筋：桂馬の両取り", unitId: "s6", nodeType: "lesson", description: "2駒を同時に狙う", implemented: true },
  { id: "u6_tesuji_pin", title: "手筋：角の釘付け", unitId: "s6", nodeType: "lesson", description: "動くと後ろが取られる", implemented: true },
  { id: "tsume3_kei_02", title: "桂の3手詰め②", unitId: "s6", nodeType: "lesson", description: "桂が活躍する3手詰め 3-25〜3-28", implemented: true },
  { id: "tsume3_kyou_01", title: "香の3手詰め①", unitId: "s6", nodeType: "lesson", description: "香が活躍する3手詰め 3-31〜3-34", implemented: true },
  { id: "tsume3_kyou_02", title: "香の3手詰め②", unitId: "s6", nodeType: "lesson", description: "香が活躍する3手詰め 3-35〜3-38", implemented: true },
  { id: "u6_compare_attack_defend", title: "攻める？守る？", unitId: "s6", nodeType: "lesson", description: "攻守バランスの判断", implemented: true },
  { id: "u6_review", title: "セクション6まとめ", unitId: "s6", nodeType: "review", description: "駒得・手筋の復習", implemented: true },

  // ── S7: 3手詰めチャレンジ（12レッスン）──
  { id: "tsume3_hisha_01", title: "飛車の3手詰め①", unitId: "s7", nodeType: "lesson", description: "飛車が活躍する3手詰め 3-41〜3-44", implemented: true },
  { id: "tsume3_hisha_02", title: "飛車の3手詰め②", unitId: "s7", nodeType: "lesson", description: "飛車が活躍する3手詰め 3-45〜3-48", implemented: true },
  { id: "tsume3_kaku_01", title: "角の3手詰め①", unitId: "s7", nodeType: "lesson", description: "角が活躍する3手詰め 3-51〜3-54", implemented: true },
  { id: "tsume3_kaku_02", title: "角の3手詰め②", unitId: "s7", nodeType: "lesson", description: "角が活躍する3手詰め 3-55〜3-58", implemented: true },
  { id: "tsume3_fu_01", title: "歩の3手詰め①", unitId: "s7", nodeType: "lesson", description: "歩が活躍する3手詰め 3-61〜3-64", implemented: true },
  { id: "tsume3_fu_02", title: "歩の3手詰め②", unitId: "s7", nodeType: "lesson", description: "歩が活躍する3手詰め 3-65〜3-68", implemented: true },
  { id: "tsume3_mix_01", title: "3手詰め おさらい①", unitId: "s7", nodeType: "lesson", description: "駒別おさらい 3-9,10,19,20", implemented: true },
  { id: "tsume3_mix_02", title: "3手詰め おさらい②", unitId: "s7", nodeType: "lesson", description: "駒別おさらい 3-29,30,39,40", implemented: true },
  { id: "tsume3_mix_03", title: "3手詰め おさらい③", unitId: "s7", nodeType: "lesson", description: "駒別おさらい 3-49,50,59,60", implemented: true },
  { id: "tsume3_mix_04", title: "3手詰め おさらい④", unitId: "s7", nodeType: "lesson", description: "駒別おさらい 3-69,70", implemented: true },
  { id: "u4_tsume_rook_bishop", title: "初級 卒業テスト", unitId: "s7", nodeType: "review", description: "初級レベル総合テスト", implemented: true },

  // ════════════════════════════════════
  // 中級レベル（S8-S11）
  // ════════════════════════════════════

  // ── S8: 囲いの基本（14レッスン）──
  { id: "u7_why_castle", title: "なぜ囲うのか", unitId: "s8", nodeType: "lesson", description: "囲いの目的", implemented: true },
  { id: "u7_yagura_build", title: "矢倉を組んでみよう", unitId: "s8", nodeType: "lesson", description: "矢倉の手順", implemented: true },
  { id: "u7_mino_build", title: "美濃囲いを組んでみよう", unitId: "s8", nodeType: "lesson", description: "美濃の手順", implemented: true },
  { id: "u7_compare_castle", title: "矢倉と美濃、どっち？", unitId: "s8", nodeType: "lesson", description: "戦型による囲い選び", implemented: true },
  { id: "tsume3_ouyou_01", title: "3手詰め応用①", unitId: "s8", nodeType: "lesson", description: "応用3手詰め 3-71〜3-74", implemented: true },
  { id: "tsume3_ouyou_02", title: "3手詰め応用②", unitId: "s8", nodeType: "lesson", description: "応用3手詰め 3-75〜3-78", implemented: true },
  { id: "u7_castle_attack", title: "囲いの崩し方", unitId: "s8", nodeType: "lesson", description: "弱点を突くパズル", implemented: true },
  { id: "u8_ibisha_vs_furi", title: "居飛車と振り飛車", unitId: "s8", nodeType: "lesson", description: "飛車の使い方の違い", implemented: true },
  { id: "tsume3_ouyou_03", title: "3手詰め応用③", unitId: "s8", nodeType: "lesson", description: "応用3手詰め 3-79〜3-82", implemented: true },
  { id: "u7_review", title: "セクション8まとめ", unitId: "s8", nodeType: "review", description: "囲いの復習", implemented: true },

  // ── S9: 序盤の考え方（14レッスン）──
  { id: "u8_opening_principles", title: "序盤の3原則", unitId: "s9", nodeType: "lesson", description: "飛車先・角道・囲い", implemented: true },
  { id: "u8_opening_guide", title: "序盤を指してみよう", unitId: "s9", nodeType: "lesson", description: "原則に沿った序盤10手", implemented: true },
  { id: "tsume3_ouyou_04", title: "3手詰め応用④", unitId: "s9", nodeType: "lesson", description: "応用3手詰め 3-83〜3-86", implemented: true },
  { id: "u8_find_opening", title: "この序盤、次の一手は？", unitId: "s9", nodeType: "lesson", description: "序盤の判断パズル", implemented: true },
  { id: "u8_compare_opening", title: "先に囲う？先に攻める？", unitId: "s9", nodeType: "lesson", description: "構えに応じた判断", implemented: true },
  { id: "tsume3_ouyou_05", title: "3手詰め応用⑤", unitId: "s9", nodeType: "lesson", description: "応用3手詰め 3-87〜3-90", implemented: true },
  { id: "u8_review", title: "セクション9まとめ", unitId: "s9", nodeType: "review", description: "序盤の復習", implemented: true },

  // ── S10: 中盤の戦い方（12レッスン）──
  { id: "u8_middle_game", title: "中盤の考え方", unitId: "s10", nodeType: "lesson", description: "仕掛け・駒交換の基本", implemented: true },
  { id: "tsume3_ouyou_06", title: "3手詰め応用⑥", unitId: "s10", nodeType: "lesson", description: "応用3手詰め 3-91〜3-94", implemented: true },
  { id: "tsume3_ouyou_07", title: "3手詰め応用⑦", unitId: "s10", nodeType: "lesson", description: "応用3手詰め 3-95〜3-98", implemented: true },
  { id: "tsume3_sotsugyo", title: "3手詰め卒業テスト", unitId: "s10", nodeType: "lesson", description: "3手詰め 3-99,100", implemented: true },
  { id: "u9_total_review", title: "セクション10まとめ", unitId: "s10", nodeType: "review", description: "中盤と3手詰めの復習", implemented: true },

  // ── S11: 終盤力を鍛える（未実装枠）──
  { id: "s11_what_is_yose", title: "寄せとは", unitId: "s11", nodeType: "lesson", description: "終盤の攻め方", implemented: false },
  { id: "s11_tsumero", title: "詰めろを知ろう", unitId: "s11", nodeType: "lesson", description: "次に詰む状態", implemented: false },
  { id: "s11_hisshi", title: "必至を知ろう", unitId: "s11", nodeType: "lesson", description: "受けなしの状態", implemented: false },
  { id: "s11_endgame_speed", title: "終盤は速度", unitId: "s11", nodeType: "lesson", description: "攻め合いの判断", implemented: false },
  { id: "s11_review", title: "セクション11まとめ", unitId: "s11", nodeType: "review", description: "終盤力の復習", implemented: false },

  // ════════════════════════════════════
  // 上級レベル（S12-S14）— 将来追加
  // ════════════════════════════════════

  // ── S12: 5手詰めに挑戦 ──
  { id: "s12_intro_5te", title: "5手詰めとは", unitId: "s12", nodeType: "lesson", description: "5手の読みを学ぶ", implemented: false },
  { id: "s12_tsume5_01", title: "5手詰め①", unitId: "s12", nodeType: "lesson", description: "5手詰め練習", implemented: false },
  { id: "s12_tsume5_02", title: "5手詰め②", unitId: "s12", nodeType: "lesson", description: "5手詰め練習", implemented: false },
  { id: "s12_tsume5_03", title: "5手詰め③", unitId: "s12", nodeType: "lesson", description: "5手詰め練習", implemented: false },
  { id: "s12_tsume5_04", title: "5手詰め④", unitId: "s12", nodeType: "lesson", description: "5手詰め練習", implemented: false },
  { id: "s12_review", title: "セクション12まとめ", unitId: "s12", nodeType: "review", description: "5手詰めの復習", implemented: false },

  // ── S13: 応用手筋と定跡 ──
  { id: "s13_tesuji_sacrifice", title: "手筋：駒の捨て方", unitId: "s13", nodeType: "lesson", description: "捨て駒の手筋", implemented: false },
  { id: "s13_tesuji_discovered", title: "手筋：開き王手", unitId: "s13", nodeType: "lesson", description: "開き王手の手筋", implemented: false },
  { id: "s13_joseki_sikenbisha", title: "定跡：四間飛車", unitId: "s13", nodeType: "lesson", description: "四間飛車の基本", implemented: false },
  { id: "s13_joseki_yagura", title: "定跡：矢倉戦法", unitId: "s13", nodeType: "lesson", description: "矢倉の基本", implemented: false },
  { id: "s13_joseki_kakugawari", title: "定跡：角換わり", unitId: "s13", nodeType: "lesson", description: "角換わりの基本", implemented: false },
  { id: "s13_review", title: "セクション13まとめ", unitId: "s13", nodeType: "review", description: "応用手筋と定跡の復習", implemented: false },

  // ── S14: 総仕上げ ──
  { id: "s14_tsume_final", title: "詰将棋 総合テスト", unitId: "s14", nodeType: "lesson", description: "全詰将棋の総合テスト", implemented: false },
  { id: "s14_total_review", title: "総合復習", unitId: "s14", nodeType: "review", description: "全セクションからの混合", implemented: false },
  { id: "s14_graduation", title: "卒業おめでとう！", unitId: "s14", nodeType: "lesson", description: "卒業テスト", implemented: false },
];

// ── Helper: build flat list for FlatList with unit headers ──

export type RoadmapListItem =
  | { type: "unit_header"; unitId: string; title: string; theme: string }
  | { type: "node"; node: RoadmapNode };

export function getRoadmapList(): RoadmapListItem[] {
  const result: RoadmapListItem[] = [];
  let currentUnit = "";

  for (const node of ROADMAP_NODES) {
    if (node.unitId !== currentUnit) {
      currentUnit = node.unitId;
      const unit = UNITS.find((u) => u.id === currentUnit);
      if (unit) {
        result.push({ type: "unit_header", unitId: unit.id, title: unit.title, theme: unit.theme });
      }
    }
    result.push({ type: "node", node });
  }

  return result;
}

// ── Legacy compat: map node IDs to lesson IDs for getNativeLessonData ──

/** Map from v4 node ID to the legacy lesson ID used in src/data/lessons/ */
export const NODE_TO_LESSON_ID: Record<string, string> = {
  "u1_pawn_move": "pawn",
};
