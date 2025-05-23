const { test, expect } = require('@playwright/test');

test('Metadatos SEO', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Facundo Tobio/i);
  const description = await page.locator('meta[name="description"]').getAttribute('content');
  expect(description).toBeTruthy();
  const keywords = await page.locator('meta[name="keywords"]').getAttribute('content');
  expect(keywords).toBeTruthy();
}); 