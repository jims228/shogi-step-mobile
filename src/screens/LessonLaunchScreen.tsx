import React, { useMemo } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../navigation/RootNavigator";
import { getNativeLessonData } from "../data/lessons";
import { PawnLessonRemakeScreen } from "./PawnLessonRemakeScreen";
import { NativeLessonScreen } from "./NativeLessonScreen";

type Props = NativeStackScreenProps<RootStackParamList, "LessonLaunch">;

/**
 * Router: if native lesson data exists for this ID, render NativeLessonScreen
 * directly. Otherwise, fall back to the WebView-based PawnLessonRemakeScreen.
 */
export function LessonLaunchScreen(props: Props) {
  const { lessonId } = props.route.params;
  const lessonData = useMemo(() => getNativeLessonData(lessonId), [lessonId]);

  if (lessonData) {
    return <NativeLessonScreen {...props} lessonData={lessonData} />;
  }
  return <PawnLessonRemakeScreen {...props} />;
}
