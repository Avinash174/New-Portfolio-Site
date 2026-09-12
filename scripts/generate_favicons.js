const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Monogram SVG Generator
// Unified geometric A + V with code bracket geometry < / >
function createSvg({ bg, stroke1, stroke2, isAdaptive = false, glow = false }) {
  if (isAdaptive) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <style>
      .bg-rect { fill: #050608; }
      .stroke-a { stroke: url(#grad-dark); }
      .stroke-v { stroke: url(#grad-dark); }
      .stroke-bar { stroke: url(#grad-dark); }
      @media (prefers-color-scheme: light) {
        .bg-rect { fill: #FFFFFF; }
        .stroke-a { stroke: url(#grad-light); }
        .stroke-v { stroke: url(#grad-light); }
        .stroke-bar { stroke: url(#grad-light); }
      }
    </style>
    <linearGradient id="grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14B8A6" />
      <stop offset="100%" stop-color="#38BDF8" />
    </linearGradient>
    <linearGradient id="grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>
  </defs>
  <rect class="bg-rect" width="100" height="100" rx="24" />
  <!-- Precision AV Geometry -->
  <path class="stroke-a" d="M 22 74 L 42 26 L 62 74 L 82 26" fill="none" stroke-width="9.5" stroke-linecap="round" stroke-linejoin="round" />
  <path class="stroke-bar" d="M 31 53 L 53 53" fill="none" stroke-width="9.5" stroke-linecap="round" />
</svg>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="av-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${stroke1}" />
      <stop offset="100%" stop-color="${stroke2}" />
    </linearGradient>
    ${glow ? `
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>` : ''}
  </defs>
  <rect width="100" height="100" rx="24" fill="${bg}" />
  <g ${glow ? 'filter="url(#glow)"' : ''}>
    <path d="M 22 74 L 42 26 L 62 74 L 82 26" fill="none" stroke="url(#av-grad)" stroke-width="9.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M 31 53 L 53 53" fill="none" stroke="url(#av-grad)" stroke-width="9.5" stroke-linecap="round" />
  </g>
</svg>`;
}

// Function to assemble PNGs into an ICO file
function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type 1
  header.writeUInt16LE(count, 4); // count

  let offset = 6 + 16 * count;
  const entries = [];
  for (const buf of pngBuffers) {
    const entry = Buffer.alloc(16);
    // width & height (0 means 256)
    const dim = buf.width >= 256 ? 0 : buf.width;
    entry.writeUInt8(dim, 0); // width
    entry.writeUInt8(dim, 1); // height
    entry.writeUInt8(0, 2);   // color palette
    entry.writeUInt8(0, 3);   // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(buf.data.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    offset += buf.data.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(b => b.data)]);
}

async function generate() {
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Generate SVGs
  const adaptiveSvg = createSvg({ isAdaptive: true });
  const darkSvg = createSvg({ bg: '#050608', stroke1: '#14B8A6', stroke2: '#38BDF8', glow: false });
  const lightSvg = createSvg({ bg: '#FFFFFF', stroke1: '#0F766E', stroke2: '#1D4ED8', glow: false });

  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), adaptiveSvg);
  fs.writeFileSync(path.join(publicDir, 'favicon-dark.svg'), darkSvg);
  fs.writeFileSync(path.join(publicDir, 'favicon-light.svg'), lightSvg);

  // 2. Generate PNGs across sizes using darkSvg as base for high-contrast crispness
  const sizes = [16, 32, 48, 64, 128, 180, 192, 512];
  const pngBuffers = [];

  for (const size of sizes) {
    const pngBuffer = await sharp(Buffer.from(darkSvg))
      .resize(size, size)
      .png({ quality: 100, compressionLevel: 9 })
      .toBuffer();

    if (size === 16) {
      fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), pngBuffer);
      pngBuffers.push({ width: 16, data: pngBuffer });
    } else if (size === 32) {
      fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), pngBuffer);
      pngBuffers.push({ width: 32, data: pngBuffer });
    } else if (size === 48) {
      fs.writeFileSync(path.join(publicDir, 'favicon-48x48.png'), pngBuffer);
      pngBuffers.push({ width: 48, data: pngBuffer });
    } else if (size === 64) {
      fs.writeFileSync(path.join(publicDir, 'favicon-64x64.png'), pngBuffer);
    } else if (size === 128) {
      fs.writeFileSync(path.join(publicDir, 'favicon-128x128.png'), pngBuffer);
    } else if (size === 180) {
      fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), pngBuffer);
    } else if (size === 192) {
      fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), pngBuffer);
    } else if (size === 512) {
      fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), pngBuffer);
    }
  }

  // 3. Generate Multi-size favicon.ico
  const icoBuffer = createIco(pngBuffers);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // 4. Generate Web Manifest
  const manifest = {
    name: "Avinash — Full-Stack Web & Mobile Developer",
    short_name: "Avinash",
    description: "Personal portfolio and engineering showcase of Avinash Sanjay Magar.",
    start_url: "/",
    display: "standalone",
    background_color: "#050608",
    theme_color: "#0F766E",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  };

  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(publicDir, 'manifest.webmanifest'), JSON.stringify(manifest, null, 2));

  console.log('Favicon suite and web manifests generated successfully in public/');
}

generate().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
