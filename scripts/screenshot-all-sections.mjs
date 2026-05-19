import { chromium } from "playwright";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(ROOT, "screenshots");
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5175;
const URL = `http://localhost:${PORT}/`;

const sections = [
  { selector: ".site-header", name: "site-header" },
  { selector: ".hero", name: "hero" },
  { selector: ".authority-section", name: "authority-section" },
  { selector: ".testimonials", name: "testimonials" },
  { selector: ".courses", name: "courses" },
  { selector: ".site-footer", name: "site-footer" },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();
// Emulate prefers-reduced-motion so the CSS resets reveal-classes to
// opacity:1/transform:none at load — captures the design end state, not
// mid-animation frames.
await page.emulateMedia({ reducedMotion: "reduce" });

await page.goto(URL, { waitUntil: "networkidle" });
// Wait for hero entrance animations to settle (~1.2s)
await page.waitForTimeout(2000);

const results = [];

for (let i = 0; i < sections.length; i++) {
  const { selector, name } = sections[i];
  const idx = i + 1;
  const file = resolve(OUT_DIR, `section-${idx}-${name}.png`);

  const el = page.locator(selector).first();
  const count = await el.count();
  if (count === 0) {
    results.push({ idx, name, status: "NOT FOUND", file: null });
    continue;
  }

  // Move cursor far from the hero CTA so the magnetic+grow effect doesn't
  // leave the wrapper in a transformed state when we screenshot section 2
  await page.mouse.move(5, 5);

  // Scroll the section to viewport top
  await el.evaluate((node) => node.scrollIntoView({ block: "start" }));
  // Settle: scroll-triggered animations + any debounced layout work
  await page.waitForTimeout(800);

  try {
    await page.screenshot({ path: file });
    results.push({ idx, name, status: "ok", file });
  } catch (err) {
    results.push({ idx, name, status: `ERROR: ${err.message}`, file: null });
  }
}

// Full page screenshot — scroll to top first so inView triggers run cleanly
const fullPath = resolve(OUT_DIR, "full-page.png");
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
let fullPageStatus = "ok";
try {
  await page.screenshot({ path: fullPath, fullPage: true });
} catch (err) {
  fullPageStatus = `ERROR: ${err.message}`;
}

// === Modal screenshot (desktop) ===
const modalPath = resolve(OUT_DIR, "section-8-signup-modal.png");
let modalStatus = "ok";
try {
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.locator(".hero-cta").click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: modalPath });
} catch (err) {
  modalStatus = `ERROR: ${err.message}`;
}

// === Modal screenshot (mobile, 375x812) ===
const mobileModalPath = resolve(OUT_DIR, "section-9-signup-modal-mobile.png");
let mobileModalStatus = "ok";
try {
  await page.setViewportSize({ width: 375, height: 812 });
  // Let the @media (max-width: 720px) layout reflow
  await page.waitForTimeout(500);
  await page.screenshot({ path: mobileModalPath });
} catch (err) {
  mobileModalStatus = `ERROR: ${err.message}`;
}

await browser.close();

console.log("\n=== Section screenshots ===");
for (const r of results) {
  if (r.status === "ok") {
    console.log(`OK     section ${r.idx}: ${r.name.padEnd(20)} → ${r.file}`);
  } else {
    console.log(`FAIL   section ${r.idx}: ${r.name.padEnd(20)} (${r.status})`);
  }
}
console.log("\n=== Full page ===");
if (fullPageStatus === "ok") {
  console.log(`OK     → ${fullPath}`);
} else {
  console.log(`FAIL   ${fullPageStatus}`);
}

console.log("\n=== Modal (section 8, desktop 1440×900) ===");
if (modalStatus === "ok") {
  console.log(`OK     → ${modalPath}`);
} else {
  console.log(`FAIL   ${modalStatus}`);
}

console.log("\n=== Modal (section 9, mobile 375×812) ===");
if (mobileModalStatus === "ok") {
  console.log(`OK     → ${mobileModalPath}`);
} else {
  console.log(`FAIL   ${mobileModalStatus}`);
}

const failed = results.filter((r) => r.status !== "ok").length;
if (
  failed > 0 ||
  fullPageStatus !== "ok" ||
  modalStatus !== "ok" ||
  mobileModalStatus !== "ok"
) {
  process.exitCode = 1;
}
