import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

import { Screen } from "../ui/components";
import { theme } from "../ui/theme";
import { useSubscription } from "../state/subscription";

// Try to load RevenueCat (native module, needs dev build rebuild)
let Purchases: any = null;
try {
  Purchases = require("react-native-purchases").default;
} catch {
  // Native module not available
}

type Props = {
  onClose?: () => void;
};

export function PaywallScreen({ onClose }: Props) {
  const { setPremium } = useSubscription();
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    if (!Purchases) {
      Alert.alert("準備中", "課金機能はまだ準備中です。\ndev buildの再ビルドが必要です。");
      return;
    }

    setLoading(true);
    try {
      const offerings = await Purchases.getOfferings();
      const pkg = offerings.current?.monthly;
      if (!pkg) {
        Alert.alert("エラー", "商品情報を取得できませんでした。");
        return;
      }
      const { customerInfo } = await Purchases.purchasePackage(pkg);
      if (customerInfo.entitlements.active["premium"]) {
        setPremium(true);
        Alert.alert("ありがとうございます！", "プレミアム会員になりました。\n広告が非表示になります。");
        onClose?.();
      }
    } catch (e: any) {
      if (!e.userCancelled) {
        Alert.alert("エラー", e.message ?? "購入に失敗しました。");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async () => {
    if (!Purchases) {
      Alert.alert("準備中", "課金機能はまだ準備中です。");
      return;
    }

    setLoading(true);
    try {
      const customerInfo = await Purchases.restorePurchases();
      if (customerInfo.entitlements.active["premium"]) {
        setPremium(true);
        Alert.alert("復元完了", "プレミアム会員を復元しました。");
        onClose?.();
      } else {
        Alert.alert("購入履歴なし", "有効なサブスクリプションが見つかりませんでした。");
      }
    } catch (e: any) {
      Alert.alert("エラー", e.message ?? "復元に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen style={{ backgroundColor: theme.colors.boardBg }} edges={[]}>
      <View style={styles.container}>
        <Text style={styles.emoji}>✨</Text>
        <Text style={styles.title}>プレミアム</Text>
        <Text style={styles.subtitle}>広告なしで快適に学習</Text>

        {/* Features */}
        <View style={styles.featureList}>
          <View style={styles.featureRow}>
            <Text style={styles.featureIcon}>🚫</Text>
            <Text style={styles.featureText}>広告を完全に非表示</Text>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.featureIcon}>📚</Text>
            <Text style={styles.featureText}>全レッスンにアクセス</Text>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.featureIcon}>🔥</Text>
            <Text style={styles.featureText}>将棋学習を応援</Text>
          </View>
        </View>

        {/* Price */}
        <View style={styles.priceBox}>
          <Text style={styles.price}>月額 290円</Text>
          <Text style={styles.priceNote}>いつでもキャンセル可能</Text>
        </View>

        {/* Purchase button */}
        <Pressable
          onPress={handlePurchase}
          style={[styles.purchaseBtn, loading && { opacity: 0.6 }]}
          disabled={loading}
        >
          <Text style={styles.purchaseBtnText}>
            {loading ? "処理中..." : "プレミアムに登録"}
          </Text>
        </Pressable>

        {/* Restore */}
        <Pressable onPress={handleRestore} style={styles.restoreBtn} disabled={loading}>
          <Text style={styles.restoreBtnText}>購入を復元</Text>
        </Pressable>

        {/* Close */}
        {onClose && (
          <Pressable onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeBtnText}>あとで</Text>
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
  emoji: { fontSize: 56, marginBottom: 8 },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#5D4037",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: theme.colors.textMuted,
    marginBottom: 28,
  },
  featureList: {
    width: "100%",
    gap: 14,
    marginBottom: 28,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 8,
  },
  featureIcon: { fontSize: 22 },
  featureText: {
    fontSize: 16,
    fontWeight: "700",
    color: theme.colors.text,
  },
  priceBox: {
    backgroundColor: "rgba(93,64,55,0.08)",
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: "900",
    color: "#5D4037",
  },
  priceNote: {
    fontSize: 12,
    fontWeight: "600",
    color: theme.colors.textMuted,
    marginTop: 4,
  },
  purchaseBtn: {
    backgroundColor: "#5D4037",
    paddingVertical: 16,
    borderRadius: 14,
    width: "100%",
    alignItems: "center",
  },
  purchaseBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },
  restoreBtn: {
    marginTop: 14,
    paddingVertical: 10,
  },
  restoreBtnText: {
    fontSize: 14,
    fontWeight: "700",
    color: theme.colors.textMuted,
  },
  closeBtn: {
    marginTop: 8,
    paddingVertical: 10,
  },
  closeBtnText: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.textMuted,
  },
});
