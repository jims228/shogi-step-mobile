/* eslint-disable no-console */
import fs from "node:fs";
import path from "node:path";

// Usage:
//   node scripts/list_mvp_lessons.mjs
//   node scripts/list_mvp_lessons.mjs --count 10 --write

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");

// Read lessons from the local roadmap.json (no ts-node / web dependency needed)
const roadmapPath = path.join(repoRoot, "src/data/roadmap.json");
const roadmapJson = JSON.parse(fs.readFileSync(roadmapPath, "utf-8"));

function parseArgs(argv) {
  const out = { count: 10, write: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--count") out.count = Number(argv[++i] || "10");
    if (a === "--write") out.write = true;
  }
  if (!Number.isFinite(out.count) || out.count <= 0) out.count = 10;
  return out;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  const lessons = (roadmapJson.lessons || [])
    .filter((l) => l && typeof l === "object")
    .filter((l) => typeof l.id === "string" && l.id.length > 0 && typeof l.href === "string" && l.href.length > 0);

  const ids = lessons.map((l) => l.id);
  const selected = ids.slice(0, args.count);

  console.log(`hrefLessons=${ids.length}`);
  console.log(`mvpSelected(count=${args.count})=${selected.length}`);
  for (const id of selected) console.log(`- ${id}`);

  if (args.write) {
    const outPath = path.join(repoRoot, "src/data/mvp_lessons.json");
    ensureDir(path.dirname(outPath));
    fs.writeFileSync(outPath, JSON.stringify(selected, null, 2), "utf-8");
    console.log(`\nWrote: ${path.relative(repoRoot, outPath)}`);
  }
}

main();
