/**
 * Visual regression aid. Drives the installed Chrome at exact device widths, captures each
 * breakpoint, opens the mobile drawer, and reports any element wider than the viewport.
 *
 * Headless Chrome's --window-size is clamped to a minimum on macOS, so --screenshot alone
 * silently renders at ~500px and crops; this sets the viewport through CDP instead, which
 * is the only way to see a true 375px layout.
 *
 * Usage: node scripts/visual-check.mjs [baseUrl] [outDir]
 */
import { mkdirSync } from 'node:fs';
import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.argv[2] ?? 'http://localhost:5173';
const OUT = process.argv[3] ?? './visual';
const WIDTHS = [1440, 1280, 1024, 768, 480, 375];

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();

async function overflowing() {
  return page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const offenders = [];
    document.querySelectorAll('body *').forEach((el) => {
      const r = el.getBoundingClientRect();
      // Fixed, translated-away elements (the closed drawer) are not real overflow.
      if (getComputedStyle(el).position === 'fixed') return;
      if (r.width > vw + 1) {
        const cls = typeof el.className === 'string' ? el.className.split(' ')[0] : '';
        offenders.push(`${el.tagName.toLowerCase()}.${cls} w=${Math.round(r.width)}`);
      }
    });
    return { vw, scrollWidth: document.documentElement.scrollWidth, offenders: offenders.slice(0, 8) };
  });
}

for (const width of WIDTHS) {
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  await page.goto(BASE, { waitUntil: 'networkidle0' });
  const report = await overflowing();
  const scrolls = report.scrollWidth > report.vw;
  console.log(
    `${String(width).padEnd(5)} scrollWidth=${report.scrollWidth} ${scrolls ? 'HORIZONTAL SCROLL' : 'ok'}` +
      (report.offenders.length ? `\n      wide: ${report.offenders.join(', ')}` : ''),
  );
  await page.screenshot({ path: `${OUT}/home-${width}.png`, fullPage: false });
}

// The drawer only exists below the nav breakpoint, and its open state is the piece that
// cannot be checked from a static screenshot.
await page.setViewport({ width: 375, height: 760, deviceScaleFactor: 1 });
await page.goto(BASE, { waitUntil: 'networkidle0' });
await page.click('button[aria-label="Open menu"]');
await new Promise((resolve) => setTimeout(resolve, 400));
const drawer = await page.evaluate(() => {
  const el = document.querySelector('#mobile-menu');
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return {
    parent: el.parentElement?.tagName.toLowerCase(),
    inert: el.hasAttribute('inert'),
    left: Math.round(r.left),
    width: Math.round(r.width),
    height: Math.round(r.height),
    viewportHeight: window.innerHeight,
    focused: document.activeElement?.getAttribute('aria-label'),
  };
});
console.log('drawer open:', JSON.stringify(drawer));
await page.screenshot({ path: `${OUT}/drawer-open-375.png` });

await browser.close();
