// ── v3.1 Curriculum Roadmap ──
// Source of truth for the roadmap UI. Each node is a lesson, review, or battle.
// Lesson content (steps/SFEN) lives in src/data/lessons/*.ts — this file only defines structure.

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

// ── Units ──

export const UNITS: UnitDef[] = [
  { id: "u0", title: "はじめる前", theme: "診断" },
  { id: "u1", title: "勝ち負けと王手の基本", theme: "歩・金・王・王手" },
  { id: "u2", title: "いろいろな駒と利き", theme: "全駒の動きと利き" },
  { id: "u3", title: "将棋らしさの入口", theme: "持ち駒・成り・二歩" },
  { id: "u4", title: "1手で勝つ感覚", theme: "1手詰め" },
  { id: "u5", title: "負けないための受け", theme: "王手の防ぎ方" },
  { id: "u6", title: "良い手と悪い手", theme: "駒得・手筋" },
  { id: "u7", title: "形を作る", theme: "囲い" },
  { id: "u8", title: "序盤から中盤へ", theme: "序盤原則" },
  { id: "u9", title: "実戦で学ぶ", theme: "実戦" },
];

// ── Nodes ──

export const ROADMAP_NODES: RoadmapNode[] = [
  // ── Unit 0 ──
  { id: "u0_diagnosis", title: "スタート診断", unitId: "u0", nodeType: "lesson", description: "レベル判定と学習パスの決定", implemented: false },

  // ── Unit 1 ──
  { id: "u1_what_is_shogi", title: "将棋ってなに？", unitId: "u1", nodeType: "lesson", description: "盤面の見方、先手後手、勝利条件", implemented: true },
  { id: "u1_pawn_move", title: "歩の動き", unitId: "u1", nodeType: "lesson", description: "歩は前に1マス。進む・取る", implemented: true },
  { id: "u1_gold_move", title: "金の動き", unitId: "u1", nodeType: "lesson", description: "金の6方向移動", implemented: true },
  { id: "u1_king_move", title: "王の動き", unitId: "u1", nodeType: "lesson", description: "王は全方向1マス", implemented: true },
  { id: "u1_what_is_check", title: "王手ってなに？", unitId: "u1", nodeType: "lesson", description: "王手の概念", implemented: true },
  { id: "u1_give_check", title: "王手をかけてみよう", unitId: "u1", nodeType: "lesson", description: "金で王手をかけるパズル", implemented: false },
  { id: "u1_compare_check", title: "王手？駒を取る？", unitId: "u1", nodeType: "lesson", description: "王手 vs 駒取りの比較判断", implemented: false },
  { id: "u1_review", title: "Unit 1 まとめ", unitId: "u1", nodeType: "review", description: "ミス問題優先の混合復習", implemented: false },

  // ── Unit 2 ──
  { id: "u2_silver_move", title: "銀の動き", unitId: "u2", nodeType: "lesson", description: "銀の5方向。金との違い", implemented: false },
  { id: "u2_silver_use", title: "銀を使ってみよう", unitId: "u2", nodeType: "lesson", description: "銀で相手の駒を取る", implemented: false },
  { id: "u2_compare_gold_silver", title: "金と銀、どっちで守る？", unitId: "u2", nodeType: "lesson", description: "金は横に強い、銀は斜め前に強い", implemented: false },
  { id: "u2_rook_move", title: "飛車の動き", unitId: "u2", nodeType: "lesson", description: "縦横どこまでも", implemented: false },
  { id: "u2_bishop_move", title: "角行の動き", unitId: "u2", nodeType: "lesson", description: "斜めどこまでも", implemented: false },
  { id: "u2_big_pieces", title: "大駒で攻めよう", unitId: "u2", nodeType: "lesson", description: "飛車・角で駒を取るパズル", implemented: false },
  { id: "u2_knight_move", title: "桂馬の動き", unitId: "u2", nodeType: "lesson", description: "跳び越えられる唯一の駒", implemented: false },
  { id: "u2_lance_move", title: "香車の動き", unitId: "u2", nodeType: "lesson", description: "前にまっすぐ", implemented: false },
  { id: "u2_compare_take", title: "取って大丈夫？", unitId: "u2", nodeType: "lesson", description: "ただ vs 守られている駒", implemented: false },
  { id: "u2_review", title: "Unit 2 まとめ", unitId: "u2", nodeType: "review", description: "全駒の動き＋利きの復習", implemented: false },
  { id: "u2_battle", title: "はじめてのミニ対局", unitId: "u2", nodeType: "battle", description: "コーチ付きの短い対局", implemented: false },

  // ── Unit 3 ──
  { id: "u3_capture_hand", title: "取った駒は自分のもの", unitId: "u3", nodeType: "lesson", description: "持ち駒の概念", implemented: false },
  { id: "u3_drop", title: "駒を打ってみよう", unitId: "u3", nodeType: "lesson", description: "持ち駒から盤上に打つ", implemented: false },
  { id: "u3_compare_drop_where", title: "どこに打つのが一番？", unitId: "u3", nodeType: "lesson", description: "打つ場所の比較判断", implemented: false },
  { id: "u3_promotion", title: "成りとは", unitId: "u3", nodeType: "lesson", description: "敵陣で駒が強くなる", implemented: false },
  { id: "u3_promote_do", title: "成ってみよう", unitId: "u3", nodeType: "lesson", description: "駒を成る操作", implemented: false },
  { id: "u3_promote_power", title: "成りを活かそう", unitId: "u3", nodeType: "lesson", description: "成り駒のパズル", implemented: false },
  { id: "u3_nifu", title: "二歩は反則", unitId: "u3", nodeType: "lesson", description: "二歩ルール", implemented: false },
  { id: "u3_compare_drop_vs_move", title: "打つ vs 動かす", unitId: "u3", nodeType: "lesson", description: "持ち駒 vs 盤上の駒", implemented: false },
  { id: "u3_review", title: "Unit 3 まとめ", unitId: "u3", nodeType: "review", description: "持ち駒・成り・二歩の復習", implemented: false },
  { id: "u3_battle", title: "持ち駒付き対局", unitId: "u3", nodeType: "battle", description: "持ち駒を使えるガイド対局", implemented: false },

  // ── Unit 4 ──
  { id: "u4_what_is_mate", title: "詰みってなに？", unitId: "u4", nodeType: "lesson", description: "詰みの概念", implemented: false },
  { id: "u4_head_gold", title: "頭金で詰ます", unitId: "u4", nodeType: "lesson", description: "基本の1手詰め", implemented: false },
  { id: "u4_belly_gold", title: "腹金で詰ます", unitId: "u4", nodeType: "lesson", description: "横からの金で詰ます", implemented: false },
  { id: "u4_tsume_gold_silver", title: "1手詰め：金銀編", unitId: "u4", nodeType: "lesson", description: "金・銀の1手詰め", implemented: false },
  { id: "u4_tsume_rook_bishop", title: "1手詰め：大駒編", unitId: "u4", nodeType: "lesson", description: "飛車・角の1手詰め", implemented: false },
  { id: "u4_tsume_drop", title: "1手詰め：持ち駒", unitId: "u4", nodeType: "lesson", description: "持ち駒を打って詰ます", implemented: false },
  { id: "u4_compare_check_vs_mate", title: "王手と詰みの違い", unitId: "u4", nodeType: "lesson", description: "逃げられる vs 逃げられない", implemented: false },
  { id: "u4_tsume_mix", title: "1手詰めチャレンジ", unitId: "u4", nodeType: "lesson", description: "混合1手詰め", implemented: false },
  { id: "u4_review", title: "Unit 4 まとめ", unitId: "u4", nodeType: "review", description: "1手詰め復習", implemented: false },
  { id: "u4_battle", title: "詰ませてみよう", unitId: "u4", nodeType: "battle", description: "詰みチャンスが来る対局", implemented: false },

  // ── Unit 5 ──
  { id: "u5_three_defenses", title: "王手の受け方は3つ", unitId: "u5", nodeType: "lesson", description: "逃げる・合駒・取る", implemented: false },
  { id: "u5_escape", title: "逃げて受けよう", unitId: "u5", nodeType: "lesson", description: "王を逃がして受ける", implemented: false },
  { id: "u5_block", title: "合駒で受けよう", unitId: "u5", nodeType: "lesson", description: "間に駒を打つ", implemented: false },
  { id: "u5_capture_attacker", title: "攻め駒を取って受けよう", unitId: "u5", nodeType: "lesson", description: "王手駒を取る", implemented: false },
  { id: "u5_compare_defense", title: "どの受けが一番？", unitId: "u5", nodeType: "lesson", description: "3つの受けの比較判断", implemented: false },
  { id: "u5_is_king_safe", title: "王は安全？", unitId: "u5", nodeType: "lesson", description: "自玉の安全度判断", implemented: false },
  { id: "u5_review", title: "Unit 5 まとめ", unitId: "u5", nodeType: "review", description: "受けの復習", implemented: false },
  { id: "u5_battle", title: "守り切ってみよう", unitId: "u5", nodeType: "battle", description: "相手の攻めを受ける対局", implemented: false },

  // ── Unit 6 ──
  { id: "u6_piece_value", title: "駒の価値", unitId: "u6", nodeType: "lesson", description: "駒の点数を知る", implemented: false },
  { id: "u6_compare_trade", title: "この交換、得？損？", unitId: "u6", nodeType: "lesson", description: "駒価値の比較判断", implemented: false },
  { id: "u6_find_free", title: "ただの駒を見つけよう", unitId: "u6", nodeType: "lesson", description: "守られていない駒を取る", implemented: false },
  { id: "u6_tesuji_tataki", title: "手筋：叩きの歩", unitId: "u6", nodeType: "lesson", description: "駒の頭に歩を打つ", implemented: false },
  { id: "u6_tesuji_waridachi", title: "手筋：割り打ちの銀", unitId: "u6", nodeType: "lesson", description: "2駒の間に銀を打つ", implemented: false },
  { id: "u6_tesuji_fork", title: "手筋：桂馬の両取り", unitId: "u6", nodeType: "lesson", description: "2駒を同時に狙う", implemented: false },
  { id: "u6_tesuji_pin", title: "手筋：角の釘付け", unitId: "u6", nodeType: "lesson", description: "動くと後ろが取られる", implemented: false },
  { id: "u6_compare_attack_defend", title: "攻める？守る？", unitId: "u6", nodeType: "lesson", description: "攻守バランスの判断", implemented: false },
  { id: "u6_review", title: "Unit 6 まとめ", unitId: "u6", nodeType: "review", description: "駒損得＋手筋の復習", implemented: false },
  { id: "u6_battle", title: "手筋を使ってみよう", unitId: "u6", nodeType: "battle", description: "手筋が決まる対局", implemented: false },

  // ── Unit 7 ──
  { id: "u7_why_castle", title: "なぜ囲うのか", unitId: "u7", nodeType: "lesson", description: "囲いの目的", implemented: false },
  { id: "u7_yagura_build", title: "矢倉を組んでみよう", unitId: "u7", nodeType: "lesson", description: "矢倉の手順", implemented: false },
  { id: "u7_mino_build", title: "美濃囲いを組んでみよう", unitId: "u7", nodeType: "lesson", description: "美濃の手順", implemented: false },
  { id: "u7_compare_castle", title: "矢倉と美濃、どっち？", unitId: "u7", nodeType: "lesson", description: "戦型による囲い選び", implemented: false },
  { id: "u7_castle_attack", title: "囲いの崩し方", unitId: "u7", nodeType: "lesson", description: "弱点を突くパズル", implemented: false },
  { id: "u7_review", title: "Unit 7 まとめ", unitId: "u7", nodeType: "review", description: "囲いの復習", implemented: false },
  { id: "u7_battle", title: "囲いを組んで戦おう", unitId: "u7", nodeType: "battle", description: "囲い→中盤の対局", implemented: false },

  // ── Unit 8 ──
  { id: "u8_opening_principles", title: "序盤の3原則", unitId: "u8", nodeType: "lesson", description: "飛車先・角道・囲い", implemented: false },
  { id: "u8_opening_guide", title: "序盤を指してみよう", unitId: "u8", nodeType: "lesson", description: "原則に沿った序盤10手", implemented: false },
  { id: "u8_ibisha_vs_furi", title: "居飛車と振り飛車", unitId: "u8", nodeType: "lesson", description: "飛車の使い方の違い", implemented: false },
  { id: "u8_find_opening", title: "この序盤、次の一手は？", unitId: "u8", nodeType: "lesson", description: "序盤の判断パズル", implemented: false },
  { id: "u8_compare_opening", title: "先に囲う？先に攻める？", unitId: "u8", nodeType: "lesson", description: "構えに応じた判断", implemented: false },
  { id: "u8_middle_game", title: "中盤の考え方", unitId: "u8", nodeType: "lesson", description: "仕掛け・駒交換の基本", implemented: false },
  { id: "u8_review", title: "Unit 8 まとめ", unitId: "u8", nodeType: "review", description: "序盤＋中盤入口の復習", implemented: false },
  { id: "u8_battle", title: "序盤から中盤まで", unitId: "u8", nodeType: "battle", description: "序盤組み立て→中盤の対局", implemented: false },

  // ── Unit 9 ──
  { id: "u9_total_review", title: "総合復習", unitId: "u9", nodeType: "review", description: "全Unitからの混合", implemented: false },
  { id: "u9_battle_easy", title: "実戦①（やさしいAI）", unitId: "u9", nodeType: "battle", description: "コーチ助言付き対局", implemented: false },
  { id: "u9_battle_medium", title: "実戦②（少し強いAI）", unitId: "u9", nodeType: "battle", description: "判断を問われる対局", implemented: false },
  { id: "u9_battle_solo", title: "実戦③（自力）", unitId: "u9", nodeType: "battle", description: "コーチ助言なし対局", implemented: false },
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

/** Map from v3.1 node ID to the legacy lesson ID used in src/data/lessons/ */
export const NODE_TO_LESSON_ID: Record<string, string> = {
  "u1_what_is_shogi": "u1_what_is_shogi",
  "u1_pawn_move": "pawn",
  "u1_gold_move": "u1_gold_move",
  "u1_king_move": "u1_king_move",
  "u1_what_is_check": "u1_what_is_check",
  // Add mappings here as lessons are implemented
};
