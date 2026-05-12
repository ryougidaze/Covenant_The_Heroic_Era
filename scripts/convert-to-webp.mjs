import sharp from 'sharp';
import { readdir, readFile } from 'fs/promises';
import { join, extname } from 'path';

const ASSETS_DIR = 'public/assets';
const OUT_DIR = 'public/assets';

async function convertToWebP() {
  const files = await readdir(ASSETS_DIR);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  for (const file of imageFiles) {
    const inputPath = join(ASSETS_DIR, file);
    const nameWithoutExt = file.replace(/\.[^.]+$/, '');
    const webpPath = join(OUT_DIR, `${nameWithoutExt}.webp`);
    const blurPath = join(OUT_DIR, `${nameWithoutExt}-blur.webp`);

    const input = await readFile(inputPath);

    // Convert to WebP at quality 80 (good balance)
    await sharp(input)
      .webp({ quality: 80 })
      .toFile(webpPath);

    // Generate tiny blur placeholder (20px wide, heavily blurred)
    await sharp(input)
      .resize(20)
      .blur(4)
      .webp({ quality: 30 })
      .toFile(blurPath);

    // Get blur base64 for inline usage
    const blurBuf = await sharp(input)
      .resize(20)
      .blur(4)
      .webp({ quality: 30 })
      .toBuffer();
    const blurBase64 = `data:image/webp;base64,${blurBuf.toString('base64')}`;

    const originalSize = input.length;
    const webpSize = (await readFile(webpPath)).length;
    const reduction = ((1 - webpSize / originalSize) * 100).toFixed(1);

    console.log(`${file} → ${nameWithoutExt}.webp  (${(originalSize/1024).toFixed(0)}KB → ${(webpSize/1024).toFixed(0)}KB, -${reduction}%)`);
    console.log(`  Blur placeholder: ${(blurBuf.length/1024).toFixed(1)}KB base64`);
    console.log(`  Blur data URL (first 80 chars): ${blurBase64.substring(0, 80)}...`);
  }

  console.log(`\nDone! Converted ${imageFiles.length} images to WebP.`);
}

convertToWebP().catch(console.error);
