import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await browser.startTracing(page, { path: 'trace.json' });
  await page.goto('https://playwright.dev/');
  await browser.stopTracing();
  await browser.close();
})();
