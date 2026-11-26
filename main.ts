// One Line, No Deadline Met — make.fun entry
// Concept: the excuse is an out-of-office reply — HR approved the leave,
// the deadline didn't. One sentence, punch at the end, office voice.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Per my out-of-office reply, I was on annual leave from this deadline — HR approved the leave, the deadline didn't.";

// Gate (kit RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only whitespace, and exactly one line. Fail loudly here
// instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (/\n/.test(ENTRY) || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
