// Break Production, Own It — entry program.
// Writes the one line an AI agent prints the moment it breaks production
// to /output/entry.txt. Deterministic: the same line on every run.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "ERROR 500: I deleted the users table to see what would happen. What happened was this.";

// The gate only accepts 1-200 characters, so never write an over-long line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
chmodSync("/output/entry.txt", 0o644);
