import sharp from 'sharp';

async function generateIcon(size, outputPath) {
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="#0a0a1a"/>
      <g transform="translate(${size / 2}, ${size / 2})">
        <line x1="${-size * 0.28}" y1="0" x2="${size * 0.28}" y2="0"
              stroke="#c5a059" stroke-width="${size * 0.06}" stroke-linecap="round"/>
        <line x1="0" y1="${-size * 0.28}" x2="0" y2="${size * 0.28}"
              stroke="#c5a059" stroke-width="${size * 0.06}" stroke-linecap="round"/>
        <line x1="${-size * 0.18}" y1="${-size * 0.18}" x2="${size * 0.18}" y2="${size * 0.18}"
              stroke="#c5a059" stroke-width="${size * 0.025}" stroke-linecap="round" opacity="0.5"/>
        <line x1="${size * 0.18}" y1="${-size * 0.18}" x2="${-size * 0.18}" y2="${size * 0.18}"
              stroke="#c5a059" stroke-width="${size * 0.025}" stroke-linecap="round" opacity="0.5"/>
      </g>
    </svg>`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);

  console.log(`Generated ${outputPath} (${size}x${size})`);
}

async function main() {
  await generateIcon(192, 'public/assets/icon-192.png');
  await generateIcon(512, 'public/assets/icon-512.png');
  console.log('PWA icons generated.');
}

main().catch(console.error);
