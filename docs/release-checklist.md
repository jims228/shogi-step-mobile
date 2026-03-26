# ストアリリース前チェックリスト

## セキュリティ

- [ ] `app.config.ts`: `NSAllowsArbitraryLoads: true` を削除するか、必要なドメインのみ `NSExceptionDomains` で許可する
- [ ] `app.config.ts`: `usesCleartextTraffic: true` を `false` に変更する（全通信をHTTPS化した後）
- [ ] WebBaseURL / APIBaseURL の本番エンドポイントをHTTPSで用意する

## アプリ識別子

- [ ] `app.config.ts`: `IOS_BUNDLE_ID` を本番用に変更する（`com.jims228.shogiroadmap` → 本番ドメイン）
- [ ] `app.config.ts`: `ANDROID_PACKAGE` を本番用に変更する
- [ ] `app.config.ts`: `version` を適切に設定する

## ビルド設定

- [ ] `app.config.ts`: `newArchEnabled` を検討する（React Native New Architecture）
- [ ] `eas.json`: production ビルドプロファイルの署名設定を確認する
- [ ] `expo-dev-client` が本番APK/AABに含まれても問題ないか確認する（debug時のみ有効化されるため通常は問題なし）

## コード品質

- [ ] `__DEV__` ガード付きの `console.log` が本番で出力されないことを確認する（React Nativeのデフォルトで除外される）
- [ ] WebView フォールバックレッスンの本番URLが正しく設定されていることを確認する

## アセット

- [ ] アプリアイコン（icon.png, adaptive-icon.png）を本番デザインに差し替える
- [ ] スプラッシュ画面（splash-icon.png）を本番デザインに差し替える

## テスト

- [ ] 全44ネイティブレッスンの動作確認
- [ ] WebViewフォールバックレッスンの動作確認（サーバー接続あり/なし）
- [ ] オフライン時の挙動確認
- [ ] 進捗データの保存・復元確認
