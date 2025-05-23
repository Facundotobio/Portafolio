const { test, expect } = require('@playwright/test');

test.describe.configure({ timeout: 120000 });

test('Imágenes con atributo alt', async ({ page }) => {
  await page.goto('/');
  const imagenes = await page.locator('img').all();
  for (const img of imagenes) {
    const alt = await img.getAttribute('alt');
    expect(alt).toBeTruthy();
  }
});

test('Botones y enlaces accesibles', async ({ page }) => {
  await page.goto('/');
  const enlaces = await page.locator('a').all();
  for (const a of enlaces) {
    const ariaLabel = await a.getAttribute('aria-label');
    const title = await a.getAttribute('title');
    const text = await a.textContent();
    expect(ariaLabel || title || (text && text.trim().length > 0)).toBeTruthy();
  }
}); 