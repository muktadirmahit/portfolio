// Generates public/og.jpg (social preview) and public/apple-touch-icon.png.
// Run once after changing the portrait or headline: `npm run og`
import sharp from 'sharp';

const W = 1200;
const H = 630;
const photoW = 470;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const text = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#0f1419"/>
  <circle cx="84" cy="96" r="9" fill="#d7263d"/>
  <text x="104" y="104" font-family="Menlo, monospace" font-size="22" fill="#8d959f" letter-spacing="2">PORTFOLIO</text>
  <text x="72" y="250" font-family="Georgia, 'Times New Roman', serif" font-size="74" fill="#e9edf1">Al-Muktadir</text>
  <text x="72" y="335" font-family="Georgia, 'Times New Roman', serif" font-size="74" fill="#e9edf1">Islam <tspan fill="#3ccf91" font-style="italic">Mahit</tspan></text>
  <text x="72" y="420" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#c3c9d1">${esc('CSE @ United International University, Dhaka')}</text>
  <text x="72" y="462" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#c3c9d1">${esc('Software · Contests · Problem setting')}</text>
  <text x="72" y="560" font-family="Menlo, monospace" font-size="22" fill="#8d959f">${esc('1,500+ solved  ·  2× ICPC Asia Dhaka Regional')}</text>
</svg>`;

const photo = await sharp('src/assets/me/al-muktadir-islam-mahit.jpg')
  .resize(photoW, H, { fit: 'cover', position: 'attention' })
  .toBuffer();

await sharp(Buffer.from(text))
  .composite([{ input: photo, left: W - photoW, top: 0 }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile('public/og.jpg');

// iOS ignores SVG media queries and rounds corners itself, so draw a full-bleed light-mode version.
const touch = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#0f1419"/><path d="M14 45V20l13 16 13-16v25" fill="none" stroke="#fff" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="51" cy="42" r="5.5" fill="#d7263d"/></svg>`;
await sharp(Buffer.from(touch), { density: 400 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('Wrote public/og.jpg and public/apple-touch-icon.png');
