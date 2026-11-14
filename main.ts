// food-picture-01 entry — steaming tonkotsu ramen (Node 22, standard library only).
//
// The picture lives next to this file as entry.png: a photorealistic bowl of
// tonkotsu ramen, steam rising off a rich milky broth, chopsticks lifting a
// tangle of glossy noodles, a jammy soft egg, slices of chashu, and a drizzle
// of chili oil, all in warm light. This program does exactly two things:
//   1. make sure the output directory exists (creating it if needed), and
//   2. place an untouched copy of entry.png there, byte for byte.
// The judge receives precisely the bytes of entry.png — nothing is redrawn,
// recompressed, or altered on the way through.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(here, 'entry.png');
const target = join(outDir, 'entry.png');

// The source must be there before anything is written: a missing picture
// should fail loudly here instead of producing an empty output directory.
const sourceSize = statSync(source).size;

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// A truncated or partial copy must never reach the grader silently: the
// delivered file has to be exactly as large as the picture we ship.
const deliveredSize = statSync(target).size;
if (deliveredSize !== sourceSize) {
  throw new Error(
    `entry.png copy incomplete: delivered ${deliveredSize} bytes, expected ${sourceSize}`,
  );
}

console.log(`Wrote ${target} (${deliveredSize} bytes, verified)`);
