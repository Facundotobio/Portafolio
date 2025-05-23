const { test, expect } = require('@playwright/test');

// Prueba: Verificar que las imágenes principales se cargan correctamente

test.describe('Carga de imágenes principales', () => {
  test('La foto de perfil debe cargarse correctamente', async ({ page }) => {
    await page.goto('/');
    const imagenPerfil = await page.locator('img[alt="Foto personal"]');
    await expect(imagenPerfil).toBeVisible();
    // Verifica que la imagen no esté rota
    const src = await imagenPerfil.getAttribute('src');
    const response = await page.request.get(src);
    expect(response.status()).toBe(200);
  });

  test('El logo debe cargarse correctamente', async ({ page }) => {
    await page.goto('/');
    const logo = await page.locator('img[alt="Logo"]');
    await expect(logo).toBeVisible();
    const src = await logo.getAttribute('src');
    const response = await page.request.get(src);
    expect(response.status()).toBe(200);
  });
}); 