// Configuración básica de Playwright para entorno Windows y navegador Chrome
// Puedes personalizar los valores según tus necesidades

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    browserName: 'chromium', // Chrome
    headless: true, // Cambia a false si quieres ver el navegador
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'http://localhost:5500', // Cambia si usas otro puerto o servidor
  },
  testDir: './tests',
  timeout: 120000,
  retries: 0,
};

module.exports = config; 