const { test, expect } = require('@playwright/test');

const enlaces = [
  // Footer
  { selector: 'a[href*="github.com/Facundotobio"]', url: 'https://github.com/Facundotobio' },
  { selector: 'a[href*="linkedin.com/in/facundo-tobio"]', url: 'https://www.linkedin.com/in/facundo-tobio/' },
  { selector: 'a[href*="api.whatsapp.com"]', url: 'https://api.whatsapp.com/send?phone=542241534215' },
  { selector: 'a[href^="mailto:"]', url: 'mailto:facundohectortobio@gmail.com' },
  // Proyectos (galería)
  // { selector: 'a[href*="github.com/Facundotobio/food"]', url: 'https://github.com/Facundotobio/food' },
  // { selector: 'a[href*="youtube.com/watch?v=9lEN8Dx3qu8"]', url: 'https://www.youtube.com/watch?v=9lEN8Dx3qu8' },
  { selector: 'a[href*="https://www.progreso.cl/"]', url: 'https://www.progreso.cl/' },
  { selector: 'a[href*="https://temba.cl/"]', url: 'https://temba.cl/' },
];

test.describe.configure({ timeout: 120000 });

test.describe('Enlaces externos', () => {
  for (const enlace of enlaces) {
    test(`El enlace ${enlace.url} tiene href y target correcto`, async ({ page }) => {
      await page.goto('/');
      const a = await page.locator(enlace.selector).first();
      const href = await a.getAttribute('href');
      const target = await a.getAttribute('target');
      expect(href).toBeTruthy();
      expect(href).toContain(enlace.url.split('?')[0].replace('mailto:', '').replace('https://', '').replace('http://', ''));
      if (enlace.url.startsWith('http') && !enlace.url.includes('whatsapp.com')) {
        expect(target).toBe('_blank');
      } else {
        expect(target === null || target === undefined).toBeTruthy();
      }
    });
  }
}); 