const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('Descarga de curriculum', async ({ page, context }) => {
  test.setTimeout(120000);
  await page.goto('/');
  // Selector ajustado al ícono de descarga en el footer
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.click('a[download] i.bi-file-earmark-person')
  ]);
  const downloadPath = await download.path();
  expect(fs.existsSync(downloadPath)).toBeTruthy();
  // No siempre se conserva la extensión, pero el nombre de archivo sí debe contener 'CV' o 'curriculum'
  expect(download.suggestedFilename()).toMatch(/CV|curriculum/i);
}); 