import sharp from 'sharp';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const ASSETS_DIR = 'public/assets';

async function generateBlurMap() {
  const files = await readdir(ASSETS_DIR);
  const jpgFiles = files.filter(f => /\.(jpg|jpeg)$/i.test(f));

  const blurMap = {};

  for (const file of jpgFiles) {
    const nameWithoutExt = file.replace(/\.[^.]+$/, '');
    const inputPath = join(ASSETS_DIR, file);

    const blurBuf = await sharp(await readFile(inputPath))
      .resize(20)
      .blur(4)
      .webp({ quality: 30 })
      .toBuffer();

    const base64 = `data:image/webp;base64,${blurBuf.toString('base64')}`;
    blurMap[nameWithoutExt] = base64;
    console.log(`${nameWithoutExt}: ${base64.length} chars`);
  }

  const tsContent = `// Auto-generated blur placeholders for background images
export const BLUR_DATA_URLS: Record<string, string> = ${JSON.stringify(blurMap, null, 2)};
`;

  await writeFile('data/blur-placeholders.ts', tsContent);
  console.log('\nWritten to data/blur-placeholders.ts');
}

generateBlurMap().catch(console.error);
