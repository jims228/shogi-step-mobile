import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSubscription } from "../../state/subscription";

// Ad unit IDs - replace with real ones from AdMob console
const BANNER_AD_UNIT_ID = __DEV__
  ? "ca-app-pub-3940256099942544/6300978111" // Google test banner
  : "ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy"; // Production banner

let BannerAd: any = null;
let BannerAdSize: any = null;
try {
  const ads = require("react-native-google-mobile-ads");
  BannerAd = ads.BannerAd;
  BannerAdSize = ads.BannerAdSize;
} catch {
  // Native module not available (dev build without ads)
}

export function AdBanner() {
  const { isPremium } = useSubscription();

  // Don't show ads for premium users
  if (isPremium) return null;

  // Fallback if native module not available
  if (!BannerAd) {
    if (!__DEV__) return null;
    return (
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>広告スペース</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BannerAd
        unitId={BANNER_AD_UNIT_ID}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{ requestNonPersonalizedAdsOnly: true }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
  },
  placeholder: {
    height: 50,
    backgroundColor: "rgba(0,0,0,0.05)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginHorizontal: 8,
  },
  placeholderText: {
    fontSize: 11,
    color: "#999",
    fontWeight: "600",
  },
});
