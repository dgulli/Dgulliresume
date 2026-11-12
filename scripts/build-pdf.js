// Regenerates assets/Dave-Gulli-Resume.pdf from resume.html (which reads js/data.js).
// Usage: node scripts/build-pdf.js   (needs: npm i playwright)
const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const root = path.join(__dirname, "..");
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + path.join(root, "resume.html"), { waitUntil: "networkidle" });
  await page.pdf({ path: path.join(root, "assets/Dave-Gulli-Resume.pdf"), format: "A4", preferCSSPageSize: true });
  await browser.close();
  console.log("Wrote assets/Dave-Gulli-Resume.pdf");
})();
