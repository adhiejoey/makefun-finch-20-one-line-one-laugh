import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I asked for a raise and they gave me more parameters. Great. Now I can be underpaid in more languages.";

if ([...line].length > 200 || line.trim().length === 0) {
  throw new Error("entry must be 1 to 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
