import type { ExpoConfig } from "expo/config";

// Source of truth for Expo app configuration in this repository.
// Keep app.json as a minimal placeholder only.

const APP_NAME = "将棋ステップ";
const SLUG = "shogi-step";
const SCHEME = "shogistep";

const IOS_BUNDLE_ID = "com.jims228.shogistep";
const ANDROID_PACKAGE = "com.jims228.shogistep";

const config: ExpoConfig = {
  name: APP_NAME,
  slug: SLUG,
  scheme: SCHEME,
  version: "1.0.0",
  orientation: "portrait",
  userInterfaceStyle: "light",
  icon: "./assets/icon.png",
  newArchEnabled: false,
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: IOS_BUNDLE_ID,
    // MVP: allow loading http://<LAN IP>:3000 in WebView.
    // For production, prefer HTTPS and tighten ATS.
    infoPlist: {
      NSAppTransportSecurity: {
        NSAllowsArbitraryLoads: true,
      },
    },
  },
  android: {
    package: ANDROID_PACKAGE,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
    // MVP: allow loading http://... in WebView
    usesCleartextTraffic: true,
  } as any,
  plugins: [
    "expo-secure-store",
    "expo-apple-authentication",
    [
      "react-native-google-mobile-ads",
      {
        androidAppId: "ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy",
        iosAppId: "ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy",
      },
    ],
  ],
  extra: {
    eas: {
      projectId: "cb6b8273-2b65-4371-9a5b-6abc11f24c9f",
    },
  },
};

export default config;


