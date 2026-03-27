import React, { useState } from "react";
import { Alert, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
// Apple auth & crypto loaded only on iOS to avoid native module errors on Android
const AppleAuthentication = Platform.OS === "ios" ? require("expo-apple-authentication") : null;
const Crypto = Platform.OS === "ios" ? require("expo-crypto") : null;

import { Screen } from "../ui/components";
import { theme } from "../ui/theme";
import { supabase } from "../state/supabase";
import { useAuth } from "../state/auth";

type Props = {
  onComplete?: () => void;
  onSkip?: () => void;
};

export function AuthScreen({ onComplete, onSkip }: Props) {
  const { isOffline } = useAuth();
  const [mode, setMode] = useState<"main" | "email">("main");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    if (isOffline) {
      Alert.alert("オフラインモード", "Supabaseが設定されていません。");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { skipBrowserRedirect: true },
      });
      if (error) throw error;
      onComplete?.();
    } catch (e: any) {
      Alert.alert("エラー", e.message ?? "Googleサインインに失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  const handleAppleSignIn = async () => {
    if (Platform.OS !== "ios") return;
    setLoading(true);
    try {
      const nonce = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        Crypto.getRandomBytes(32).toString(),
      );
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
        nonce,
      });

      if (!credential.identityToken) throw new Error("No identity token");

      const { error } = await supabase.auth.signInWithIdToken({
        provider: "apple",
        token: credential.identityToken,
        nonce,
      });
      if (error) throw error;
      onComplete?.();
    } catch (e: any) {
      if (e.code !== "ERR_REQUEST_CANCELED") {
        Alert.alert("エラー", e.message ?? "Appleサインインに失敗しました。");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignUp = async () => {
    if (!email || !password) {
      Alert.alert("入力エラー", "メールアドレスとパスワードを入力してください。");
      return;
    }
    if (password.length < 6) {
      Alert.alert("入力エラー", "パスワードは6文字以上で入力してください。");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      Alert.alert("確認メール送信", "メールを確認してアカウントを有効化してください。");
      onComplete?.();
    } catch (e: any) {
      Alert.alert("エラー", e.message ?? "サインアップに失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async () => {
    if (!email || !password) {
      Alert.alert("入力エラー", "メールアドレスとパスワードを入力してください。");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      onComplete?.();
    } catch (e: any) {
      Alert.alert("エラー", e.message ?? "サインインに失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  if (mode === "email") {
    return (
      <Screen style={{ backgroundColor: theme.colors.boardBg }} edges={[]}>
        <View style={styles.container}>
          <Text style={styles.title}>メールでログイン</Text>

          <TextInput
            style={styles.input}
            placeholder="メールアドレス"
            placeholderTextColor={theme.colors.textMuted}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <TextInput
            style={styles.input}
            placeholder="パスワード（6文字以上）"
            placeholderTextColor={theme.colors.textMuted}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textContentType="password"
          />

          <Pressable onPress={handleEmailSignIn} style={[styles.btn, styles.emailBtn]} disabled={loading}>
            <Text style={styles.btnText}>{loading ? "..." : "ログイン"}</Text>
          </Pressable>

          <Pressable onPress={handleEmailSignUp} style={[styles.btn, styles.signUpEmailBtn]} disabled={loading}>
            <Text style={[styles.btnText, { color: "#5D4037" }]}>新規登録</Text>
          </Pressable>

          <Pressable onPress={() => setMode("main")} style={styles.backBtn}>
            <Text style={styles.backBtnText}>戻る</Text>
          </Pressable>
        </View>
      </Screen>
    );
  }

  return (
    <Screen style={{ backgroundColor: theme.colors.boardBg }} edges={[]}>
      <View style={styles.container}>
        <Text style={styles.emoji}>♟️</Text>
        <Text style={styles.title}>将棋ステップ</Text>
        <Text style={styles.subtitle}>アカウントを作成して{"\n"}進捗を保存しよう</Text>

        <View style={styles.btnGroup}>
          {Platform.OS === "ios" && (
            <Pressable onPress={handleAppleSignIn} style={[styles.btn, styles.appleBtn]} disabled={loading}>
              <Text style={styles.btnText}> Appleでサインイン</Text>
            </Pressable>
          )}

          <Pressable onPress={handleGoogleSignIn} style={[styles.btn, styles.googleBtn]} disabled={loading}>
            <Text style={[styles.btnText, { color: "#333" }]}>Googleでサインイン</Text>
          </Pressable>

          <Pressable onPress={() => setMode("email")} style={[styles.btn, styles.emailOptionBtn]}>
            <Text style={[styles.btnText, { color: "#5D4037" }]}>メールでログイン</Text>
          </Pressable>
        </View>

        {onSkip && (
          <Pressable onPress={onSkip} style={styles.skipBtn}>
            <Text style={styles.skipBtnText}>あとで（ゲストで続ける）</Text>
          </Pressable>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  emoji: { fontSize: 56, marginBottom: 16 },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: theme.colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: theme.colors.textMuted,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },
  btnGroup: {
    width: "100%",
    gap: 12,
  },
  btn: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
  },
  appleBtn: {
    backgroundColor: "#000",
  },
  googleBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  emailBtn: {
    backgroundColor: "#5D4037",
  },
  emailOptionBtn: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#5D4037",
  },
  signUpEmailBtn: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#5D4037",
    marginTop: 4,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#fff",
  },
  skipBtn: {
    marginTop: 20,
    paddingVertical: 12,
  },
  skipBtnText: {
    fontSize: 14,
    fontWeight: "700",
    color: theme.colors.textMuted,
  },
  backBtn: {
    marginTop: 16,
    paddingVertical: 10,
  },
  backBtnText: {
    fontSize: 14,
    fontWeight: "700",
    color: theme.colors.textMuted,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: theme.colors.text,
    backgroundColor: "#fff",
    marginBottom: 12,
  },
});
