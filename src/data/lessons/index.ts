import type { LessonData } from "../../lesson/types";
import { BASICS_PAWN_LESSON } from "./basics_pawn";

// Lesson data registry. Add new lessons here.
const NATIVE_LESSONS: Record<string, LessonData> = {
  [BASICS_PAWN_LESSON.id]: BASICS_PAWN_LESSON,
};

/**
 * Get native lesson data by lesson ID.
 * Returns null if no native lesson data exists for this ID
 * (the caller should fall back to WebView-based lessons).
 */
export function getNativeLessonData(lessonId: string): LessonData | null {
  return NATIVE_LESSONS[lessonId] ?? null;
}


