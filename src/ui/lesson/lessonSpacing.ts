/**
 * Spacing/layout constants for Duolingo-style lesson screens.
 * Use these for consistent padding, gaps, and bar heights.
 */
export const LESSON_SPACING = {
  headerPaddingHorizontal: 16,
  headerPaddingVertical: 12,
  progressBarHeight: 17,
  progressBarRadius: 6,
  sectionGap: 14,
  instructionPaddingVertical: 8,
  dialoguePadding: 14,
  dialogueTailSize: 10,
  footerPaddingHorizontal: 18,
  footerPaddingTop: 12,
  footerPaddingBottom: 24,
  footerButtonMinHeight: 56,
} as const;

/** Mascot & dialogue layout constants */
export const LESSON_LAYOUT = {
  /** Mascot avatar size (width & height) */
  mascotSize: 210,
  /** How far the mascot is pulled left beyond the screen edge */
  mascotPullLeft: 30,
  /** Bubble top margin — aligns bubble with the mascot's face */
  bubbleOffsetTop: 50,
  /** Vertical gap between dialogue row and board area */
  dialogueToBoardGap: 8,
  /** Extra horizontal margin to reserve for board coordinate labels */
  boardLabelSlack: 30,
} as const;

export const MAX_LIVES = 5;

export const LESSON_COLORS = {
  progressBg: "#e5e7eb",
  progressFill: "#DB6010",
  dialogueBg: "#ffffff",
  dialogueBorder: "#e5e7eb",
  /** Wood-like board surface color */
  boardSurface: "#D2A86A",
} as const;
