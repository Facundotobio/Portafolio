const { test, expect } = require('@playwright/test');

test('Recarga de página y navegación rápida', async ({ page }) => {
  await page.goto('/');
  // Recarga de página
  await page.reload();
  await expect(page.locator('h1')).toBeVisible();
  // Navegación rápida entre secciones
  const secciones = ['#sobreMi', '#proyectos', '#testimonios', '#contacto'];
  for (const seccion of secciones) {
    await page.click(`a[href="${seccion}"]`);
    await expect(page.locator(seccion)).toBeVisible();
  }
});

test('Robustez de la UI', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('/');
  // Recarga de página
  await page.reload();
  await expect(page.locator('h1')).toBeVisible();
  // Navegación rápida entre secciones
  const secciones = ['#sobreMi', '#proyectos', '#testimonios', '#contacto'];
  for (const seccion of secciones) {
    await page.click(`a[href="${seccion}"]`);
    await expect(page.locator(seccion)).toBeVisible();
  }
}); 