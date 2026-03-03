export function isMvpMode() {
  // MVP mode: show only the pinned set of "guaranteed" lessons (mvp_lessons.json).
  // Defaults:
  // - explicit env wins
  // - otherwise OFF (show all lessons; non-href lessons can be shown as locked/coming soon)
  const raw = (process.env.EXPO_PUBLIC_MVP_MODE || "").trim();
  if (raw === "1" || raw.toLowerCase() === "true") return true;
  if (raw === "0" || raw.toLowerCase() === "false") return false;
  return false;
}
