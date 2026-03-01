import React, { useEffect } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../navigation/RootNavigator";
import { hasNativeLesson } from "../data/lessons";
import { PawnLessonRemakeScreen } from "./PawnLessonRemakeScreen";

type Props = NativeStackScreenProps<RootStackParamList, "LessonLaunch">;

/**
 * Router: if a native lesson exists for this ID, redirect to NativeLesson.
 * Otherwise, use the WebView-based PawnLessonRemakeScreen.
 */
export function LessonLaunchScreen(props: Props) {
  const { lessonId } = props.route.params;
  const isNative = hasNativeLesson(lessonId);

  useEffect(() => {
    if (isNative) {
      // Replace this screen with NativeLesson so "back" goes to the roadmap
      props.navigation.replace("NativeLesson", { lessonId });
    }
  }, [isNative, lessonId, props.navigation]);

  // While redirecting, or for non-native lessons, show WebView version
  if (isNative) return null;
  return <PawnLessonRemakeScreen {...props} />;
}
