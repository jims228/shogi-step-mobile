import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RootNavigator } from "./src/navigation/RootNavigator";
import { ProgressProvider } from "./src/state/progress";
import { SettingsProvider } from "./src/state/settings";
import { AuthProvider } from "./src/state/auth";
import { SubscriptionProvider } from "./src/state/subscription";
import { SakuraBurstProvider } from "./src/ui/effects/SakuraBurstProvider";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <SettingsProvider>
          <ProgressProvider>
          <SubscriptionProvider>
          <SakuraBurstProvider>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </SakuraBurstProvider>
          <StatusBar style="dark" />
          </SubscriptionProvider>
          </ProgressProvider>
        </SettingsProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
