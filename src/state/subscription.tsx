import React, { createContext, useContext, useState, useCallback } from "react";

type SubscriptionState = {
  /** True if user has active subscription (ads removed). */
  isPremium: boolean;
  /** Toggle premium (placeholder until RevenueCat is integrated). */
  setPremium: (value: boolean) => void;
};

const SubscriptionContext = createContext<SubscriptionState>({
  isPremium: false,
  setPremium: () => {},
});

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  // TODO: Replace with RevenueCat subscription status check
  const [isPremium, setIsPremium] = useState(false);

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
