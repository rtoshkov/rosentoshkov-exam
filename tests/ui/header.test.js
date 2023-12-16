const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('https://rosentoshkov-exam.onrender.com/');
    const homeLink = await page.$('header > *:first-child');
    const text = await homeLink.textContent();
    expect(text).toBe('Home');
  });
  