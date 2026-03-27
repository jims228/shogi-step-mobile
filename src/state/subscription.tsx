import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { Platform } from "react-native";

// Try to load RevenueCat (needs dev build rebuild)
let Purchases: any = null;
try {
  Purchases = require("react-native-purchases").default;
} catch {
  // Native module not available
}

// RevenueCat API keys - replace with real ones from RevenueCat dashboard
const RC_GOOGLE_KEY = process.env.EXPO_PUBLIC_RC_GOOGLE_KEY ?? "";
const RC_APPLE_KEY = process.env.EXPO_PUBLIC_RC_APPLE_KEY ?? "";

type SubscriptionState = {
  isPremium: boolean;
  setPremium: (value: boolean) => void;
};

const SubscriptionContext = createContext<SubscriptionState>({
  isPremium: false,
  setPremium: () => {},
});

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const [isPremium, setIsPremium] = useState(false);

  // Initialize RevenueCat on mount
  useEffect(() => {
    if (!Purchases) return;
    const key = Platform.OS === "ios" ? RC_APPLE_KEY : RC_GOOGLE_KEY;
    if (!key) return;

    try {
      Purchases.configure({ apiKey: key });

      // Check current subscription status
      Purchases.getCustomerInfo().then((info: any) => {
        if (info.entitlements.active["premium"]) {
          setIsPremium(true);
        }
      }).catch(() => {});

      // Listen for subscription changes
      Purchases.addCustomerInfoUpdateListener((info: any) => {
        setIsPremium(!!info.entitlements.active["premium"]);
      });
    } catch {
      // ignore init errors
    }
  }, []);

  const setPremium = useCallback((value: boolean) => {
    setIsPremium(value);
  }, []);

  return (
    <SubscriptionContext.Provider value={{ isPremium, setPremium }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  return useContext(SubscriptionContext);
}
