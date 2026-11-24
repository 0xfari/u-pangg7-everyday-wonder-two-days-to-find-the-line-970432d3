import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The crosswalk paint was still warm from noon; the shadow crossed first, as if it already knew the way.
// Hurry is a rumor the body starts and the mind only hears about later.
const LINE =
  "My shadow on the crosswalk arrived half a step before I did, in a hurry I didn't feel.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
