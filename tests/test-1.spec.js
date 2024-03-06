// @ts-check
const { test, expect } = require('@playwright/test');

test('test main', async ({ page }) => {
  await page.goto('https://www.testmo.com/');

  // Expect a title to contain the text.
  await expect(page.locator('h1')).toContainText('#1 Unified Modern TestManagement Software');
});

test('test click', async ({ page }) => {
  await page.goto('https://www.testmo.com/');

  // Click the See All Features link.
  await page.getByRole('link', { name: 'See All Features', exact: true }).click();

  // Expects page to have the features title.
  await expect(page.locator('h1')).toContainText('Testmo Features Tour: Unified QA Testing');
});