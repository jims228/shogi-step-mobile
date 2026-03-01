import React, { useMemo } from "react";
import { Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../navigation/RootNavigator";
import { getNativeLessonData } from "../data/lessons";
import { Screen, PrimaryButton } from "../ui/components";
import { NativeLessonScreen } from "./NativeLessonScreen";
import { theme } from "../ui/theme";

type Props = NativeStackScreenProps<RootStackParamList, "NativeLesson">;

/**
 * Wrapper that loads lesson data by ID and delegates to NativeLessonScreen.
 * Shows an error screen if the lesson data is not found.
 */
export function NativeLessonLauncher(props: Props) {
  const { lessonId } = props.route.params;

  const lessonData = useMemo(() => getNativeLessonData(lessonId), [lessonId]);

  if (!lessonData) {
    return (
      <Screen>
        <Text style={{ marginTop: 40, textAlign: "center", fontSize: 18, fontWeight: "900", color: theme.colors.text }}>
          レッスンデータが見つかりません
        </Text>
        <Text style={{ marginTop: 8, marginBottom: 24, textAlign: "center", fontSize: 12, color: theme.colors.textMuted }}>
          {lessonId}
        </Text>
        <PrimaryButton title="戻る" onPress={() => props.navigation.goBack()} />
      </Screen>
    );
  }

  return <NativeLessonScreen {...props} lessonData={lessonData} />;
}
