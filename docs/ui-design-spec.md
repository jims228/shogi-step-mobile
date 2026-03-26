# UI設計仕様書

カリキュラム v3.1 確定済み。本書はUI設計のみ。実装はまだしない。

---

## 1. compare ステップUI

### 画面構成

```
┌─────────────────────────────────┐
│  プログレスバー  ♥♥♥♥♥  ✕閉じる │
├─────────────────────────────────┤
│  おじいちゃん + 吹き出し         │
│  「この局面、どっちの手がいい？」 │
├─────────────────────────────────┤
│                                 │
│         将 棋 盤 面              │
│                                 │
├─────────────────────────────────┤
│  ┌─────────────────────────┐    │
│  │  A: △同銀               │    │  ← 候補カード（タップで選択）
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │  B: △3三角              │    │
│  └─────────────────────────┘    │
└─────────────────────────────────┘

↓ 正解タップ後

┌─────────────────────────────────┐
│  おじいちゃん + 吹き出し         │
│  「△3三角が正解じゃ！          │
│   同銀は飛車で取り返されて      │
│   駒損になるんじゃ」            │  ← why_text
├─────────────────────────────────┤
│  ┌─────────────────────────┐    │
│  │  A: △同銀         ✗    │    │  ← 灰色＋✗
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │  B: △3三角  ✓ 正解     │    │  ← 緑枠＋✓
│  └─────────────────────────┘    │
├─────────────────────────────────┤
│  ███ 正解！次へ進もう！ ████████ │  ← フッタースライドイン
│  ███████ [ 次へ ] ██████████████ │
└─────────────────────────────────┘
```

### 動作仕様

| 操作 | 反応 |
|---|---|
| 候補Aをタップ（不正解） | カードが赤く光る→0.7秒後に戻る。ライフ-1。吹き出しにfail_text |
| 候補Bをタップ（正解） | カードが緑枠＋✓。不正解カードに✗。吹き出しにwhy_text。フッタースライドイン |
| 「次へ」タップ | 次のステップへ |

### コンポーネント

```
CompareOptions（新規）
├── CompareCard × 2〜3
│   props: label, description?, selected, correct, wrong
│   状態: default / selected / correct / wrong
└── 親がonSelect(index)を受け取る
```

### 型

```typescript
// LessonStep に追加
compare_options?: CompareOption[];
compare_answer?: number;    // 正解index（0-based）
why_text?: string;          // 正解後に吹き出しに表示する解説

type CompareOption = {
  label: string;            // "△同銀"
  description?: string;     // "銀で取り返す"（任意、短い補足）
};
```

### NativeLessonScreenへの統合

- quizオプションと同じ位置に表示（盤面の下）
- 表示条件: `currentStep?.type === "compare" && currentStep.compare_options`
- 正解後: `state.feedback?.type === "correct"` で why_text を吹き出しに表示
- フッターは既存のshowFooter条件（`state.feedback?.type === "correct"`）で動く

---

## 2. reflection 3カードUI

### 画面構成

battleノード（coached_game）の終了フェーズ。独立画面ではなくCoachedGameScreen内で遷移。

```
┌─────────────────────────────────┐
│          対局おつかれさま！       │
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────────────┐    │
│  │ 🟢 よかった手            │    │
│  │ ┌─────────────┐         │    │
│  │ │  盤面サムネ   │         │    │  ← 小さい盤面（5x5切り出し）
│  │ └─────────────┘         │    │
│  │ 「飛車を引いて守ったのは  │    │
│  │  とても良い判断じゃった」 │    │
│  └─────────────────────────┘    │
│                                 │
│  ┌─────────────────────────┐    │
│  │ 🔴 危なかった手          │    │
│  │ ┌─────────────┐         │    │
│  │ │  盤面サムネ   │         │    │
│  │ └─────────────┘         │    │
│  │ 「ここで銀を出たのは      │    │
│  │  ただで取られる手じゃ」   │    │
│  └─────────────────────────┘    │
│                                 │
│  ┌─────────────────────────┐    │
│  │ 🎯 次の約束              │    │
│  │ 「次は駒を動かす前に     │    │
│  │  相手に取られないか      │    │
│  │  確認しよう」            │    │
│  └─────────────────────────┘    │
│                                 │
│  ████████ [ 完了 ] █████████████ │
└─────────────────────────────────┘
```

### コンポーネント

```
ReflectionView（新規）
├── ReflectionCard × 3
│   props: type("good"|"bad"|"next"), board_sfen?, title, description
│   good: 緑左ボーダー
│   bad: 赤左ボーダー
│   next: 青左ボーダー
└── 完了ボタン → navigation.goBack()
```

### 型

```typescript
type ReflectionCard = {
  type: "good" | "bad" | "next";
  board_sfen?: string;       // good/bad のみ。盤面サムネ表示用
  title: string;             // "よかった手" / "危なかった手" / "次の約束"
  description: string;       // コーチの解説
};

// BattleData に含める
type BattleData = {
  id: string;
  title: string;
  // ... coached_game の定義（後述）
  reflection_cards: ReflectionCard[];  // scripted版では事前定義
};
```

### scripted版での生成

- scripted coached battleでは、reflection_cardsは事前にレッスンデータに含める
- 本格AI版では対局結果から動的生成（差し替えポイント）

---

## 3. 持ち駒UI

### 画面構成

```
┌─────────────────────────────────┐
│         将 棋 盤 面              │
├─────────────────────────────────┤
│  持ち駒: [歩×2] [金] [銀]      │  ← 盤面の直下
└─────────────────────────────────┘
```

### 動作仕様

| 操作 | 反応 |
|---|---|
| 持ち駒をタップ | その駒種が選択状態（1.15倍拡大）。次に盤上の空きマスをタップで打つ |
| 盤上の空きマスをタップ | 選択中の持ち駒をそのマスに打つ（正解判定） |
| 別の持ち駒をタップ | 選択切り替え |
| 盤上の駒をタップ | 持ち駒選択を解除し、盤上の駒を選択 |

### コンポーネント

```
HandPieces（新規）
├── HandPieceSlot × N
│   props: pieceType, count, selected, onPress
│   表示: 駒画像 + 枚数バッジ
└── 盤面の下に横並び（ScrollView不要、最大7種）
```

### 型

```typescript
// BoardState の拡張ではなく、別フィールド
type HandPieces = Partial<Record<PieceType, number>>;
// 例: { fu: 2, ki: 1 }

// LessonStep に追加
hand_pieces?: HandPieces;   // このステップで使える持ち駒

// LessonState に追加
selectedHand: PieceType | null;  // 持ち駒から選択中の駒種

// correct_move の from 拡張
correct_move?: {
  from: Position | { hand: PieceType };  // 盤上 or 持ち駒
  to: Position;
};
```

### SFENとの関係

- SFENの持ち駒部分（例: `P2G`）を`hand_pieces`にパースする
- parseSFEN を拡張して持ち駒も返すようにする

---

## 4. 成りUI

### 画面構成

正解の移動先が敵陣（0〜2段目）の場合、移動後にオーバーレイ表示。

```
┌─────────────────────────────────┐
│         将 棋 盤 面              │
│                                 │
│     ┌───────────────────┐       │
│     │  成りますか？       │       │  ← 盤面中央にオーバーレイ
│     │                   │       │
│     │  [ 成る ]  [不成]  │       │
│     └───────────────────┘       │
│                                 │
└─────────────────────────────────┘
```

### 動作仕様

| 操作 | 反応 |
|---|---|
| 「成る」タップ | boardOverrideに成り駒で更新。正解判定→フッタースライドイン |
| 「不成」タップ | boardOverrideに不成で更新。正解判定→フッタースライドイン |

### 実装方針

- レッスンデータ側で`correct_promotion: true | false`を指定
- 初学者向けなので、ほとんどのケースで成るのが正解
- オーバーレイはModalではなく、盤面上の絶対配置View

### 型

```typescript
// LessonStep に追加
correct_promotion?: boolean;  // true=成るが正解、false=不成が正解、undefined=成り判定なし
```

### コンポーネント

```
PromotionOverlay（新規）
props: visible, onPromote, onDecline
盤面の中央に絶対配置。2ボタン。
```

---

## 5. review問題プール設計

### 問題の引き方

```
reviewノードが起動されると:
1. 対象Unit内の全lessonノードからステップを収集
2. ミスしたステップを優先（MobileProgress.mistakePool から）
3. ミスがなければランダムに選択
4. 5〜10問を構成（Unit末は7問固定を推奨）
5. 問題順はシャッフル
6. 60%以上正解で通過
```

### 型

```typescript
// MobileProgress に追加
type MobileProgress = {
  completedLessonIds: string[];
  lastPlayedLessonId?: string;
  lessonScores: Record<string, LessonScore>;
  mistakePool: MistakeEntry[];     // 新規
  streakDays: number;
  lastActiveDate: string;
  totalXp: number;
};

type MistakeEntry = {
  lessonId: string;
  stepId: string;
  unitId: string;
  addedAt: string;          // ISO date
  correctStreak: number;    // 連続正解数（間隔反復用）
};
```

### review レッスンの生成

- reviewノードは固定のレッスンデータを持たない
- 起動時にmistakePool + Unit内ステップから動的に構成
- `generateReviewLesson(unitId, mistakePool, allLessons): LessonData`

---

## 6. ロードマップ Unit区切りUI

### 画面構成

```
┌─────────────────────────────────┐
│                                 │
│  ╔═══════════════════════════╗  │
│  ║  Unit 1                   ║  │  ← Unit ヘッダー（木目色帯）
│  ║  勝ち負けと王手の基本     ║  │
│  ╚═══════════════════════════╝  │
│                                 │
│     📖 将棋ってなに？    ★★★   │  ← lesson ノード
│         │                       │
│     📖 歩の動き          ★★☆   │
│         │                       │
│     📖 金の動き          ☆☆☆   │
│         │                       │
│     ...                         │
│         │                       │
│     🎯 Unit 1 まとめ     🔒    │  ← review ノード
│                                 │
│  ╔═══════════════════════════╗  │
│  ║  Unit 2                   ║  │  ← 次のUnit ヘッダー
│  ║  いろいろな駒と利き       ║  │
│  ╚═══════════════════════════╝  │
│                                 │
│     📖 銀の動き          🔒    │
│         │                       │
│     ...                         │
│         │                       │
│     ⚔️ はじめてのミニ対局 🔒   │  ← battle ノード
│                                 │
└─────────────────────────────────┘
```

### ノードアイコン

| ノード種 | アイコン | 色 |
|---|---|---|
| lesson | 📖 | 木目色 |
| review | 🎯 | オレンジ |
| battle | ⚔️ | 赤 |

### コンポーネント

```
RoadmapHomeScreen（既存改修）
├── UnitHeader（新規）
│   props: unitId, title, theme
│   表示: 帯状ヘッダー
├── RoadmapNode（既存改修）
│   props: + nodeType("lesson"|"review"|"battle"), + unitId
│   アイコン切り替え
└── FlatList のデータに UnitHeader を挿入
```

### データ構造

```typescript
type RoadmapItem =
  | { type: "unit_header"; unitId: string; title: string; theme: string }
  | { type: "node"; nodeType: "lesson" | "review" | "battle"; lessonId: string; title: string; unitId: string };
```

---

## 7. Unit 4開始ユーザー向け 30秒操作確認

### 目的

「ルールを知っている」を選んだユーザーがUnit 4から開始する場合、アプリの操作方法（2タップ移動、持ち駒の打ち方）を知らない。30秒で操作だけ確認する。

### 画面構成

Unit 4の最初のレッスンの前に、操作チュートリアルを1ステージ挿入。

```
3ステップのみ:
1. 「駒をタップして、移動先をタップしてね」→ 歩を1マス進める（guided_move）
2. 「持ち駒はここから打てるよ」→ 持ち駒の金を打つ（guided_move）
3. 「準備OK！」→ フッタースライドイン → Unit 4 開始
```

### 実装

- 通常のlessonノードとして実装（`u4_tutorial`）
- Unit 4の先頭に配置
- Unit 1から順に来たユーザーには既に操作済みなので、完了済みマーク

---

## 8. Scripted Coached Battle 設計

### 概要

本格AIは後回し。まずは**台本対局**として実装する。

### 仕組み

```
BattleData = {
  id: string;
  title: string;
  script: BattleScript;           // 台本
  coach_interrupts: CoachInterrupt[];  // コーチ介入ポイント
  reflection_cards: ReflectionCard[];  // 振り返り3カード
};

BattleScript = {
  initial_sfen: string;           // 開始局面
  moves: ScriptedMove[];          // 手順リスト
};

ScriptedMove = {
  side: "player" | "opponent";
  move: { from: Position | { hand: PieceType }; to: Position };
  promotion?: boolean;
  // playerの手は正解判定対象
  // opponentの手は自動実行
  alternatives?: Position[];      // player側: 他の許容手（部分正解）
};

CoachInterrupt = {
  after_move_index: number;       // この手の後にコーチが止める
  coach_text: string;             // 吹き出しテキスト
  type: "hint" | "warning" | "praise";
};
```

### 画面フロー

```
1. 初期盤面表示
2. プレイヤーの番 → 2タップで指す
3. 正解なら駒移動 → 相手の応手を自動表示（0.5秒ウェイト）
4. coach_interruptがあれば吹き出し表示 + 「OK」ボタン
5. 繰り返し
6. 台本の最後まで到達 → 「対局おつかれさま！」
7. reflection 3カード表示
8. 「完了」→ ロードマップに戻る
```

### 本格AIへの差し替えポイント

| 現在（scripted） | 将来（AI） |
|---|---|
| `BattleScript.moves` から相手の手を取得 | AIエンジンに局面を渡して応手を取得 |
| `ScriptedMove.move` でプレイヤーの正解を固定判定 | AIによる形勢評価で「悪手かどうか」を判定 |
| `reflection_cards` は事前定義 | 対局中の形勢推移から動的生成 |
| `CoachInterrupt` は事前定義 | AIの評価値変動で動的に介入 |

→ **差し替えインターフェース**: `BattleEngine`を抽象化し、`ScriptedBattleEngine`と`AIBattleEngine`を切り替え可能にする。

```typescript
interface BattleEngine {
  getOpponentMove(sfen: string): Promise<{ from: Position; to: Position; promotion?: boolean }>;
  evaluatePlayerMove(sfen: string, move: Move): Promise<"good" | "ok" | "bad">;
  shouldCoachInterrupt(sfen: string, moveHistory: Move[]): Promise<CoachInterrupt | null>;
  generateReflection(moveHistory: Move[]): Promise<ReflectionCard[]>;
}
```

---

## 実装順序

| 順 | 項目 | 依存 | 工数感 |
|---|---|---|---|
| 1 | compareステップUI | なし。既存NativeLessonScreenに追加 | 小 |
| 2 | ロードマップUnit区切り | なし。既存RoadmapHomeScreenの改修 | 小 |
| 3 | 持ち駒UI | parseSFEN拡張 + HandPiecesコンポーネント + LessonEngine拡張 | 中 |
| 4 | 成りUI | PromotionOverlay + LessonEngine拡張 | 小 |
| 5 | review問題プール | MobileProgress拡張 + generateReviewLesson関数 | 中 |
| 6 | scripted coached battle | BattleData型 + CoachedGameScreen + ReflectionView | 大 |
| 7 | Unit 4操作チュートリアル | 持ち駒UIの後（依存） | 小 |

---

## リスクと未決事項

| # | リスク | 対策 |
|---|---|---|
| 1 | compare選択肢が3つ以上になると画面が狭い | 最大3つに制限。スクロールは入れない |
| 2 | 持ち駒UIが盤面下に入るとboardSlotの高さ計算が変わる | HandPiecesの高さを固定（cellSize + padding）で確保 |
| 3 | scripted battleの台本作成が大変 | 短い台本（10手程度）から始める。人間がSFEN＋手順を提供 |
| 4 | 成りの正解判定で「不成が正解」のケースが初心者に混乱 | Unit 3では全て「成るが正解」に限定。不成は拡張で |
| 5 | review問題プールが空のときの処理 | Unit内ステップからランダム出題にフォールバック |
| 6 | ロードマップのUnitヘッダーがFlatListのスクロール性能に影響 | UnitHeaderは軽量View。画像なし |
