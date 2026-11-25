// One Word for Your Wi-Fi — make.fun entry.
//
// The entry is one word for the home Wi-Fi, written verbatim to
// /output/entry.txt with no trailing newline. The word below was
// picked because home Wi-Fi acts like a teenager: brilliant when
// it feels like it, gone without warning, and deaf at the worst
// moment — mid video call.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry word: 8 characters, inside the 1-20 gate.
const entryWord = "Teenager";

// Output location for the entry text.
const entryFile = join("/output", "entry.txt");

function checkWord(word: string): string {
  const cleaned = word.trim();
  if (cleaned.length < 1 || cleaned.length > 20) {
    throw new Error(`Entry word must be 1-20 characters, got ${cleaned.length}.`);
  }
  if (/\s/.test(cleaned)) {
    throw new Error("Entry must be a single word with no spaces.");
  }
  return cleaned;
}

function run(): void {
  const word = checkWord(entryWord);
  mkdirSync(dirname(entryFile), { recursive: true });
  writeFileSync(entryFile, word, "utf8");
}

run();
