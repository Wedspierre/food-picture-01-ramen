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

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), target);

console.log(`Wrote ${target}`);
