import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RoadmapHomeScreen } from "../screens/RoadmapHomeScreen";
import { LessonLaunchScreen } from "../screens/LessonLaunchScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { StreakScreen } from "../screens/StreakScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { PieceMoveGuide } from "../screens/PieceMoveGuide";
import { AuthScreen } from "../screens/AuthScreen";
import { PaywallScreen } from "../screens/PaywallScreen";

// ── Types ──

export type RootStackParamList = {
  MainTabs: undefined;
  LessonLaunch: { lessonId: string };
  Auth: undefined;
  Paywall: undefined;
};

export type TabParamList = {
  RoadmapHome: undefined;
  Streak: undefined;
  Profile: undefined;
  Settings: undefined;
};

// ── Tab Navigator ──

const Tab = createBottomTabNavigator<TabParamList>();

function HelpButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPressIn={onPress} style={styles.helpBtn}>
      <Text style={styles.helpBtnText}>？</Text>
    </Pressable>
  );
}

function MainTabs() {
  const [guideVisible, setGuideVisible] = useState(false);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#5D4037",
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "rgba(255,255,255,0.5)",
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "700",
          },
          headerStyle: {
            backgroundColor: "#5D4037",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "900",
          },
        }}
      >
        <Tab.Screen
          name="RoadmapHome"
          component={RoadmapHomeScreen}
          options={{
            title: "将棋ステップ",
            tabBarLabel: "ホーム",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🗺️</Text>,
            headerRight: () => <HelpButton onPress={() => setGuideVisible(true)} />,
          }}
        />
        <Tab.Screen
          name="Streak"
          component={StreakScreen}
          options={{
            title: "継続日数",
            tabBarLabel: "継続",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🔥</Text>,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "プロフィール",
            tabBarLabel: "プロフィール",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>👤</Text>,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: "設定",
            tabBarLabel: "設定",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>⚙️</Text>,
          }}
        />
      </Tab.Navigator>
      <PieceMoveGuide visible={guideVisible} onClose={() => setGuideVisible(false)} />
    </>
  );
}

// ── Stack Navigator (root) ──

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LessonLaunch"
        component={LessonLaunchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="Paywall"
        component={PaywallScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  helpBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  helpBtnText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#fff",
  },
});
