import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('Button press test', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8080';

  beforeEach(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      headless: 'new',
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('popup creation', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.popover');

    const btn = await page.$('.btn');
    await btn.click();

    await page.waitForSelector('.popoverArea');
  });

  test('popup deletion', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.popover');

    const btn = await page.$('.btn');
    await btn.click();

    await page.waitForSelector('.popoverArea');

    await btn.click();

    await page.waitForSelector('.popoverArea', { hidden: true });
  });

  afterEach(async () => {
    await browser.close();
    server.kill();
  });
});
