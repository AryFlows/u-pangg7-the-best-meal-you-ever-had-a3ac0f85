// The Best Meal You Ever Had — Frost entry.
// Writes one sentence (1-200 chars) about the best meal ever had.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "A plastic stool on a Penang side street, laksa so sour it made my eyes water, and I ordered a second bowl before the first was gone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate guard: the sealed scorer requires UTF-8 text of 1-200 chars,
// not only whitespace, as a single sentence.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, gate requires 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be blank");
}
if (ENTRY.trim().split(/[.!?]\s+/).filter(Boolean).length !== 1) {
  throw new Error("entry must be a single sentence");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
