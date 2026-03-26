# レッスン作成ガイド

## 概要

このガイドは、将棋ステップのレッスンを効率的に作成するための手順書です。

**役割分担:**
- **作成者（人間）**: SFEN盤面、正解手、将棋の解説テキスト
- **Claude**: レッスン構造の組み立て、ステップ配置、コーチセリフ生成、TypeScriptファイル化

## コース設計

### 数字の目標
- **ユニークレッスン素材**: 約60種（重複なしの将棋問題セット）
- **総レッスン数**: 約300（復習・変形・組み合わせで拡張）
- **1レッスン**: 5〜8ステップ、3〜5分
- **対象**: 完全初心者 → アマチュア初段

### レッスンの原則
1. **全ステップにインタラクションあり**（解説のみのステップは存在しない）
2. **プレイヤーが常に主体**（コーチは補助、主役はプレイヤー）
3. **最後のステップは必ず簡単**にして成功体験で終わる
4. **同じパターンが複数レッスンに登場してよい**（spaced repetitionの一部）

---

## レッスン素材テンプレート

### あなたが書くもの

```yaml
# === レッスン素材 ===
lesson_id: tesuji_pawn_tataki
title: 歩の手筋：叩きの歩
category: tesuji_pawn
difficulty: 2  # 1=入門, 2=初級, 3=中級, 4=上級

# --- 問題1 ---
- sfen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1"
  type: move           # move | tap_square | quiz
  instruction: "相手の金の頭に歩を打ってみよう"
  correct_move: { from: "hand_FU", to: [4, 3] }
  success_text: "正解！これが叩きの歩です"
  fail_text: "金の真上のマスに歩を打ちましょう"
  hint_squares: [[4, 3]]  # ヒントで光らせるマス（任意）

# --- 問題2 ---
- sfen: "..."
  type: tap_square
  instruction: "叩きの歩が有効な場所はどこ？"
  correct_square: [5, 4]
  success_text: "そこです！"
  fail_text: "相手の駒の頭を狙いましょう"

# --- 問題3 ---
- sfen: "..."
  type: quiz
  instruction: "叩きの歩の目的は？"
  options:
    - "相手の駒の動きを制限する"
    - "歩を成る"
    - "王手をかける"
  answer: 0
  coach_text: "叩きの歩は相手の形を乱すのが目的です"
```

### フィールド説明

| フィールド | 必須 | 説明 |
|---|---|---|
| `sfen` | ✅ | 盤面のSFEN文字列 |
| `type` | ✅ | `move`（駒を動かす）/ `tap_square`（マスをタップ）/ `quiz`（選択式） |
| `instruction` | ✅ | プレイヤーへの指示文 |
| `correct_move` | move時 | `{ from: [row, col] or "hand_XX", to: [row, col] }` |
| `correct_square` | tap時 | `[row, col]`（0-indexed, 左上が[0,0]） |
| `options` + `answer` | quiz時 | 選択肢の配列 + 正解のindex |
| `success_text` | 任意 | 正解時のコーチセリフ（なければ自動生成） |
| `fail_text` | 任意 | 不正解時のコーチセリフ（なければ自動生成） |
| `coach_text` | 任意 | ステップ冒頭のコーチ解説（操作前に表示） |
| `hint_squares` | 任意 | ヒントで光らせるマスの座標リスト |

### SFEN記法の補足

```
盤面: 上から下、左から右に記述
  大文字 = 先手（プレイヤー側）: P=歩, L=香, N=桂, S=銀, G=金, B=角, R=飛, K=王
  小文字 = 後手（相手側）: p=歩, l=香, n=桂, s=銀, g=金, b=角, r=飛, k=王
  +付き = 成り駒: +P=と, +B=馬, +R=龍, etc.
  数字 = 空きマス数
  / = 行区切り

手番: b=先手, w=後手
持ち駒: 例 "P2G" = 歩2枚+金1枚、"-" = なし
手数: 1〜

例: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1"
    → 平手初期局面、先手番、持ち駒なし
```

### 座標系

```
        1列  2列  3列  4列  5列  6列  7列  8列  9列
1段  [0,0][0,1][0,2][0,3][0,4][0,5][0,6][0,7][0,8]
2段  [1,0][1,1][1,2][1,3][1,4][1,5][1,6][1,7][1,8]
...
9段  [8,0][8,1][8,2][8,3][8,4][8,5][8,6][8,7][8,8]

※ 将棋の伝統表記（9一〜1九）とは列が逆順
  9一 = [0,0], 1九 = [8,8]
```

---

## Claudeへの依頼方法

### 新規レッスン素材を渡す場合

```
以下のレッスン素材をTypeScriptファイルにしてください。

[上記テンプレートの内容を貼り付け]
```

Claudeが行うこと:
1. YAMLをTypeScriptの`LessonData`に変換
2. `coach_text`が空のステップには自動でセリフを付ける
3. 最後のステップが十分簡単か確認し、必要なら調整提案
4. `src/data/lessons/` に配置
5. `src/data/lessons/index.ts` に登録

### 復習・変形レッスンの生成

```
以下のユニークレッスンから復習レッスンを生成してください:
- tesuji_pawn_tataki
- tesuji_pawn_renda
- tesuji_pawn_tsuki
```

Claudeが行うこと:
1. 指定レッスンからステップをランダム抽出
2. 順序をシャッフル
3. 難易度を少し上げた変形問題を生成（ヒント削減等）
4. 新しい復習レッスンファイルを作成

---

## カテゴリ一覧（60ユニークレッスン案）

### Section 1-2: 基本ルール（12レッスン）
| # | ID | 内容 |
|---|---|---|
| 1 | basics_board | 盤面の見方、先手後手 |
| 2 | basics_pawn | 歩の動き・取り |
| 3 | basics_gold | 金の動き |
| 4 | basics_silver | 銀の動き |
| 5 | basics_rook | 飛車の動き |
| 6 | basics_bishop | 角行の動き |
| 7 | basics_lance | 香車の動き |
| 8 | basics_knight | 桂馬の動き |
| 9 | basics_king | 王将の動き |
| 10 | basics_check | 王手の概念 |
| 11 | basics_promotion | 成りのルール |
| 12 | basics_drop | 持ち駒と打ち |

### Section 3-4: 詰将棋入門（10レッスン）
| # | ID | 内容 |
|---|---|---|
| 13 | tsume_1te_01 | 1手詰め（頭金） |
| 14 | tsume_1te_02 | 1手詰め（腹金） |
| 15 | tsume_1te_03 | 1手詰め（尻金） |
| 16 | tsume_1te_04 | 1手詰め（飛車） |
| 17 | tsume_1te_05 | 1手詰め（角） |
| 18 | tsume_3te_01 | 3手詰め入門1 |
| 19 | tsume_3te_02 | 3手詰め入門2 |
| 20 | tsume_3te_03 | 3手詰め入門3 |
| 21 | tsume_5te_01 | 5手詰め入門1 |
| 22 | tsume_5te_02 | 5手詰め入門2 |

### Section 5-6: 手筋（18レッスン）
| # | ID | 内容 |
|---|---|---|
| 23 | tesuji_pawn_tataki | 叩きの歩 |
| 24 | tesuji_pawn_tsuki | 突き捨ての歩 |
| 25 | tesuji_pawn_renda | 連打の歩 |
| 26 | tesuji_pawn_tarefu | 垂れ歩 |
| 27 | tesuji_pawn_sokofu | 底歩 |
| 28 | tesuji_pawn_dansu | 歩の手筋総合 |
| 29 | tesuji_silver_wari | 割り打ちの銀 |
| 30 | tesuji_silver_hiki | 引きの銀 |
| 31 | tesuji_gold_yose | 寄せの金 |
| 32 | tesuji_knight_fork | 桂馬の両取り |
| 33 | tesuji_knight_futon | ふんどしの桂 |
| 34 | tesuji_lance_tanki | 香車の田楽刺し |
| 35 | tesuji_bishop_pin | 角のピン（釘付け） |
| 36 | tesuji_bishop_suji | 角筋の攻め |
| 37 | tesuji_rook_yoko | 横利きの飛車 |
| 38 | tesuji_rook_nari | 飛車の成り込み |
| 39 | tesuji_sacrifice | 駒の捨て方 |
| 40 | tesuji_discover | 開き王手 |

### Section 7-8: 囲い（10レッスン）
| # | ID | 内容 |
|---|---|---|
| 41 | castle_yagura | 矢倉囲い |
| 42 | castle_mino | 美濃囲い |
| 43 | castle_funagakoi | 舟囲い |
| 44 | castle_anaguma | 穴熊 |
| 45 | castle_katamino | 片美濃 |
| 46 | castle_takamino | 高美濃 |
| 47 | castle_ginkanmuri | 銀冠 |
| 48 | castle_attack_yagura | 矢倉の崩し方 |
| 49 | castle_attack_mino | 美濃の崩し方 |
| 50 | castle_choice | 囲いの選び方 |

### Section 9-10: 序盤戦法と実戦（10レッスン）
| # | ID | 内容 |
|---|---|---|
| 51 | opening_ibisha | 居飛車の基本 |
| 52 | opening_furibisha | 振り飛車の基本 |
| 53 | opening_yokofudori | 横歩取り入門 |
| 54 | opening_kakugawari | 角換わり入門 |
| 55 | opening_sikenbisha | 四間飛車入門 |
| 56 | opening_nakabisha | 中飛車入門 |
| 57 | endgame_speed | 終盤の速度計算 |
| 58 | endgame_tsumero | 詰めろの概念 |
| 59 | endgame_hisshi | 必至の概念 |
| 60 | endgame_practical | 実戦の寄せ |

---

## 60→300への拡張ルール

| 拡張方法 | 説明 | 生成比率 |
|---|---|---|
| **復習レッスン** | 過去のSection問題をシャッフル再出題 | Sectionごとに1〜2個 |
| **変形問題** | 同じパターンで盤面を変えたバリエーション | 各ユニーク×2〜3 |
| **組み合わせ** | 複数手筋を1レッスンに混合 | 中級以降 |
| **強化ドリル** | ヒントなし版、時間制限版 | 各ユニーク×1 |
| **ミニ対局** | 学んだ駒/手筋を使う実戦形式 | Sectionごとに1〜2個 |

例: `tesuji_pawn_tataki`（ユニーク）から：
- `tesuji_pawn_tataki` — 元のレッスン（ヒント付き）
- `tesuji_pawn_tataki_v2` — 別の盤面で同じ手筋
- `tesuji_pawn_tataki_v3` — さらに別の盤面
- `tesuji_pawn_tataki_drill` — ヒントなし高速ドリル
- `review_section5_01` — 歩の手筋混合復習

→ 1ユニークから4〜5レッスン生成可能。60×5=300

---

## デイリー継続プレイの仕組み

### ストリーク
- 1日1レッスン完了でストリーク+1
- 連続日数に応じてボーナスXP（7日=2倍XP、30日=3倍XP）
- ストリークフリーズ（1日休んでもストリーク維持、月2回まで）

### デイリーチャレンジ
- 毎日1問のランダム問題（ロードマップ外）
- 過去に間違えた問題から優先出題
- 正解でボーナスXP

### XPと段位
- レッスン完了でXP獲得（☆1=10XP, ☆2=20XP, ☆3=30XP）
- 累計XPで段位表示（30級→1級→初段...）
- 段位はプロフィール画面に表示

### 通知（Play Store公開後）
- ストリーク切れ前にリマインド通知
- 「新レッスンが追加されました」通知
- コーチキャラのセリフ付き通知
