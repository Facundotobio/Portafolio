const { test, expect } = require('@playwright/test');

test.describe.configure({ timeout: 120000 });

test.describe('Navegación y títulos', () => {
  test('Redireccionamientos de la navbar', async ({ page }) => {
    await page.goto('/');
    // Sobre mí
    await page.click('a[href="#sobreMi"]');
    await expect(page.locator('#sobreMi')).toBeVisible();
    // Proyectos
    await page.click('a[href="#proyectos"]');
    await expect(page.locator('#proyectos')).toBeVisible();
    // Testimonios
    await page.click('a[href="#testimonios"]');
    await expect(page.locator('#testimonios')).toBeVisible();
    // Contacto
    await page.click('a[href="#contacto"]');
    await expect(page.locator('#contacto')).toBeVisible();
  });

  test('Títulos y subtítulos presentes', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Facundo Tobio');
    await expect(page.locator('h2.hdos')).toContainText('Full Stack Developer ~ QA manual & Automation');
    await expect(page.locator('h2.seccion-titulo').nth(0)).toContainText('Te contaré sobre mí');
    await expect(page.locator('h2.seccion-titulo.texto-negro').nth(0)).toContainText('Mis proyectos');
    await expect(page.locator('h2.seccion-titulo.texto-negro').nth(1)).toContainText('Artículos');
    await expect(page.locator('h2.seccion-titulo').nth(-1)).toContainText('Testimonios');
  });
}); 