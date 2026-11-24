// "Sum up 24 November's world news in one image" (news-image-20261124).
// The front page for Tuesday 24 November 2026 lives in this repository as
// entry.png; this program just writes those exact bytes to the output
// directory. Node 22, standard library only, no network, fully
// deterministic: every run produces the same file.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(new URL('./entry.png', import.meta.url));
if (image.length === 0) throw new Error('entry.png is empty');
if (image.length > 1048576) throw new Error('entry.png exceeds 1 MiB');
// PNG magic bytes: 89 50 4E 47 0D 0A 1A 0A
const magic = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
if (!magic.every((b, i) => image[i] === b)) {
  throw new Error('entry.png is not a PNG file');
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
