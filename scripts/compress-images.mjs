/**
 * compress-images.mjs
 * Konwertuje bus-mockup.png → WebP + skompresowany PNG jako fallback
 */

import sharp from "sharp";
import { statSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const INPUT    = resolve(__dirname, "../public/bus-mockup.png");
const OUT_WEBP = resolve(__dirname, "../public/bus-mockup.webp");
const OUT_PNG  = resolve(__dirname, "../public/bus-mockup-compressed.png");

const sizeMB = (path) => (statSync(path).size / 1024 / 1024).toFixed(2) + " MB";

console.log("📦 Wejście:", INPUT);
console.log("   Rozmiar:", sizeMB(INPUT));

// 1. WebP — najlżejszy, obsługiwany przez wszystkie nowoczesne przeglądarki
await sharp(INPUT)
  .webp({ quality: 82, effort: 6 })
  .toFile(OUT_WEBP);

console.log("✅ WebP zapisany:", OUT_WEBP);
console.log("   Rozmiar:", sizeMB(OUT_WEBP));

// 2. PNG skompresowany (fallback dla starszych środowisk)
await sharp(INPUT)
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(OUT_PNG);

console.log("✅ PNG skompresowany:", OUT_PNG);
console.log("   Rozmiar:", sizeMB(OUT_PNG));
