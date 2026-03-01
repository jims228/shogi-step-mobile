import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RoadmapHomeScreen } from "../screens/RoadmapHomeScreen";
import { UnitDetailScreen } from "../screens/UnitDetailScreen";
import { LessonLaunchScreen } from "../screens/LessonLaunchScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { NativeLessonLauncher } from "../screens/NativeLessonLauncher";

export type RootStackParamList = {
  RoadmapHome: undefined;
  UnitDetail: { category: string };
  LessonLaunch: { lessonId: string };
  NativeLesson: { lessonId: string };
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="RoadmapHome">
      <Stack.Screen
        name="RoadmapHome"
        component={RoadmapHomeScreen}
        options={{ title: "ロードマップ" }}
      />
      <Stack.Screen name="UnitDetail" component={UnitDetailScreen} options={{ title: "ユニット" }} />
      <Stack.Screen name="LessonLaunch" component={LessonLaunchScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NativeLesson" component={NativeLessonLauncher} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: "設定" }} />
    </Stack.Navigator>
  );
}


