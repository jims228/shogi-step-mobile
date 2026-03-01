import type { LessonData } from "../../lesson/types";

// Lesson data registry. Add new lessons here.
const NATIVE_LESSONS: Record<string, LessonData> = {};

/**
 * Get native lesson data by lesson ID.
 * Returns null if no native lesson data exists for this ID
 * (the caller should fall back to WebView-based lessons).
 */
export function getNativeLessonData(lessonId: string): LessonData | null {
  return NATIVE_LESSONS[lessonId] ?? null;
}

/**
 * Check if a native lesson exists for the given ID.
 */
export function hasNativeLesson(lessonId: string): boolean {
  return lessonId in NATIVE_LESSONS;
}

/**
 * Register a lesson in the native lesson registry.
 */
export function registerNativeLesson(data: LessonData): void {
  NATIVE_LESSONS[data.id] = data;
}
