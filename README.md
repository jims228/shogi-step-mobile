# ShogiStep Mobile

将棋学習アプリ「将棋ステップ」のモバイル版（Expo / React Native）。

ロードマップ形式でレッスンを進め、WebView で Web 版のレッスン画面を表示します。

## セットアップ

```bash
pnpm install
```

## 環境変数

`.env.example` をコピーして `.env` を作成：

```bash
cp .env.example .env
```

| 変数名 | 説明 | デフォルト |
|--------|------|-----------|
| `EXPO_PUBLIC_WEB_BASE_URL` | Web版レッスンページのURL | `http://localhost:3000` |
| `EXPO_PUBLIC_API_BASE_URL` | バックエンドAPI URL（将来用） | `http://localhost:8787` |
| `EXPO_PUBLIC_MVP_MODE` | MVPモード（レッスン絞り込み） | `0` |

## 開発

```bash
# Expo Dev Server 起動
pnpm start

# Android
pnpm android

# iOS
pnpm ios

# TypeScript チェック
pnpm typecheck
```

## Android 実機（WSL2 + USB）

1. WSL 側でサーバー起動：
   ```bash
   pnpm start -- --localhost --port 8081 --clear
   ```

2. Windows 側（PowerShell）で adb reverse を設定：
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\scripts\android-usb-dev.ps1
   ```

3. 端末の Expo Go で `exp://127.0.0.1:8081` を開く

## EAS Build（テスト配布）

```bash
# Android preview
pnpm dlx eas-cli build --platform android --profile preview

# iOS preview
pnpm dlx eas-cli build --platform ios --profile preview
```

## ロードマップデータ更新

```bash
node scripts/list_mvp_lessons.mjs --write
```

## プロジェクト構成

```
src/
├── data/          # ロードマップ・レッスンデータ (JSON)
├── lib/           # ユーティリティ
├── navigation/    # React Navigation
├── screens/       # 画面コンポーネント
├── state/         # 状態管理 (Context + AsyncStorage)
└── ui/
    ├── components/  # 共通UIコンポーネント
    ├── effects/     # 桜エフェクト等
    └── lesson/      # レッスン画面UI
```
