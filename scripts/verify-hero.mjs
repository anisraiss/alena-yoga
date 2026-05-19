import { chromium } from "playwright";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SHOT = (name) => resolve(ROOT, name);

const PORT = 5175;
const URL = `http://localhost:${PORT}/`;

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

await page.goto(URL, { waitUntil: "networkidle" });
await page.waitForSelector(".hero-cta", { state: "visible" });
await page.waitForTimeout(2000);

const readStyles = () =>
  page.evaluate(() => {
    const btn = document.querySelector(".hero-cta");
    const magnet = document.querySelector(".hero-cta-magnet");
    if (!btn) return null;
    const btnCs = getComputedStyle(btn);
    const magnetCs = magnet ? getComputedStyle(magnet) : null;
    const beforeCs = getComputedStyle(btn, "::before");
    return {
      animationName: btnCs.animationName,
      animationPlayState: btnCs.animationPlayState,
      buttonTransform: btnCs.transform,
      magnetTransform: magnetCs ? magnetCs.transform : "(wrapper missing)",
      backgroundColor: btnCs.backgroundColor,
      beforeContent: beforeCs.content,
      beforeBackgroundImage: beforeCs.backgroundImage,
      beforeTransform: beforeCs.transform,
    };
  });

// Parse a CSS matrix(a, b, c, d, tx, ty) string. Returns null if not a 2D matrix.
const parseMatrix = (s) => {
  const m = /matrix\(\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*\)/.exec(
    s
  );
  if (!m) return null;
  return {
    a: +m[1], b: +m[2], c: +m[3], d: +m[4], tx: +m[5], ty: +m[6],
    scaleX: Math.hypot(+m[1], +m[2]),
    scaleY: Math.hypot(+m[3], +m[4]),
  };
};

const ctaBox = await page.locator(".hero-cta").boundingBox();
if (!ctaBox) {
  console.error("FATAL: .hero-cta has no bounding box");
  await browser.close();
  process.exit(1);
}
const cx = ctaBox.x + ctaBox.width / 2;
const cy = ctaBox.y + ctaBox.height / 2;

// === REST ===
await page.mouse.move(5, 5);
await page.waitForTimeout(700);
const rest = await readStyles();
await page.screenshot({ path: SHOT("verify-hero-rest.png") });

// === NEAR (cursor 30px LEFT of button left edge — inside both magnetic+grow) ===
const nearX = ctaBox.x - 30;
const nearY = cy;
await page.mouse.move(nearX, nearY);
await page.waitForTimeout(600);
const near = await readStyles();
await page.screenshot({ path: SHOT("verify-hero-near.png") });

// === GROW (cursor 100px LEFT of edge — inside magnetic+grow, weaker magnetic) ===
// Move away first to neutralize state, then to the grow position
await page.mouse.move(5, 5);
await page.waitForTimeout(600);
const growX = ctaBox.x - 100;
const growY = cy;
await page.mouse.move(growX, growY);
await page.waitForTimeout(600);
const grow = await readStyles();
await page.screenshot({ path: SHOT("verify-hero-grow.png") });

// === HOVER (cursor on button center, 800ms wait) ===
await page.mouse.move(cx, cy);
await page.waitForTimeout(800);
const hover = await readStyles();
await page.screenshot({ path: SHOT("verify-hero-hover.png") });

await browser.close();

// === Report ===
const beforePresent =
  rest.beforeContent !== "none" &&
  rest.beforeBackgroundImage &&
  rest.beforeBackgroundImage !== "none";

const restMatrix = parseMatrix(rest.magnetTransform);
const nearMatrix = parseMatrix(near.magnetTransform);
const growMatrix = parseMatrix(grow.magnetTransform);
const hoverMatrix = parseMatrix(hover.magnetTransform);

const isIdentity = (m, tol = 0.005) =>
  m &&
  Math.abs(m.a - 1) < tol &&
  Math.abs(m.d - 1) < tol &&
  Math.abs(m.tx) < tol &&
  Math.abs(m.ty) < tol;

const magneticDetected =
  nearMatrix && (Math.abs(nearMatrix.tx) > 0.1 || Math.abs(nearMatrix.ty) > 0.1);

const growDetected = growMatrix && growMatrix.scaleX > 1.01;

const colorChanged = rest.backgroundColor !== hover.backgroundColor;
const shineMoved = rest.beforeTransform !== hover.beforeTransform;

const breathingRunning = rest.animationName === "cta-breathe";
const breathingPaused =
  rest.animationPlayState === "running" &&
  (near.animationPlayState === "paused" || hover.animationPlayState === "paused");

console.log(`\nPORT FOUND: ${PORT}\n`);

console.log("BUTTON GEOMETRY:");
console.log(
  `- bounding box: x=${ctaBox.x.toFixed(2)}, y=${ctaBox.y.toFixed(2)}, w=${ctaBox.width.toFixed(2)}, h=${ctaBox.height.toFixed(2)}`
);

console.log("\nREST STATE (cursor far away):");
console.log(`- animation-name: ${rest.animationName}`);
console.log(`- transform (.hero-cta-magnet): ${rest.magnetTransform}`);
console.log(`- background-color: ${rest.backgroundColor}`);
console.log(
  `- ::before background-image: ${
    beforePresent ? "present (120deg gradient)" : "absent"
  }`
);

console.log("\nNEAR STATE (cursor 30px outside left edge):");
console.log(`- transform (.hero-cta-magnet): ${near.magnetTransform}`);
if (nearMatrix) {
  console.log(
    `  → scale=${nearMatrix.scaleX.toFixed(4)}, translate=(${nearMatrix.tx.toFixed(3)}px, ${nearMatrix.ty.toFixed(3)}px)`
  );
}

console.log("\nGROW STATE (cursor 100px outside left edge):");
console.log(`- transform (.hero-cta-magnet): ${grow.magnetTransform}`);
if (growMatrix) {
  console.log(
    `  → scale=${growMatrix.scaleX.toFixed(4)}, translate=(${growMatrix.tx.toFixed(3)}px, ${growMatrix.ty.toFixed(3)}px)`
  );
}

console.log("\nHOVER STATE (cursor on button center):");
console.log(`- background-color: ${hover.backgroundColor}`);
console.log(`- transform (.hero-cta-magnet): ${hover.magnetTransform}`);
if (hoverMatrix) {
  console.log(
    `  → scale=${hoverMatrix.scaleX.toFixed(4)}, translate=(${hoverMatrix.tx.toFixed(3)}px, ${hoverMatrix.ty.toFixed(3)}px)`
  );
}
console.log(`- ::before transform: ${hover.beforeTransform}`);

const verdict = (n, ok, reason) =>
  console.log(`- Effect ${n}: ${ok} — ${reason}`);

console.log("\nVERDICT:");
verdict(
  "1 (Shine sweep)",
  beforePresent && shineMoved ? "working" : "broken",
  beforePresent && shineMoved
    ? "::before gradient present and translateX changes rest → hover"
    : "::before missing or did not move"
);
verdict(
  "2 (Magnetic)",
  magneticDetected ? "working" : "broken",
  magneticDetected
    ? `wrapper translated ${nearMatrix.tx.toFixed(2)}px, ${nearMatrix.ty.toFixed(2)}px at 30px outside edge`
    : "wrapper translate is zero at 30px outside edge"
);
verdict(
  "3 (Grow)",
  growDetected ? "working" : "broken",
  growDetected
    ? `wrapper scale=${growMatrix.scaleX.toFixed(4)} at 100px outside edge (expected ~1.0533)`
    : "wrapper scale stayed at 1.0 in grow zone"
);
verdict(
  "4 (Breathing)",
  breathingRunning && breathingPaused
    ? "working"
    : breathingRunning
      ? "partial"
      : "broken",
  breathingRunning && breathingPaused
    ? "cta-breathe runs at rest and pauses on hover/proximity"
    : "cta-breathe wiring not as expected"
);
verdict(
  "5 (Color change)",
  colorChanged ? "working" : "broken",
  colorChanged
    ? `${rest.backgroundColor} (rest) → ${hover.backgroundColor} (hover)`
    : "background-color did not change on hover"
);
