// One Word for Your Wi-Fi — make.fun entry
// Writes a single word describing home Wi-Fi to /output/entry.txt.
//
// The word: "Teenager"
// Home Wi-Fi behaves exactly like a teenager: it works brilliantly when
// it feels like it, sulks and vanishes into its room for no reason, and
// ignores you at the worst possible moment — right in the middle of a
// video call. Everyone recognises it instantly, no explanation needed,
// and it even works as a Wi-Fi network name.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_WORD = "Teenager";
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const word = ENTRY_WORD.trim();

  if (word.length < 1 || word.length > 20) {
    throw new Error(`Entry word must be 1-20 characters, got ${word.length}.`);
  }

  if (/\s/.test(word)) {
    throw new Error("Entry must be a single word with no spaces.");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, word, "utf8");
}

main();
