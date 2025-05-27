---
## Este archivo es para conocer el paso a paso de como se agrego el testing automatizado al proyecto a traves de la tecnica de vibe coding, se le pidio a la IA que documente todo el proceso para una mayor comprension y seguimiento del mismo.

## Paso 1: Análisis del Repositorio

- El proyecto es un portafolio personal desarrollado principalmente en HTML y CSS, con Bootstrap para el diseño y algunos recursos gráficos personalizados.
- Estructura principal:
  - `index.html`: Página principal con navbar, secciones de presentación, experiencia, stack tecnológico, proyectos, testimonios y contacto.
  - `imagenes/`: Carpeta con imágenes y recursos gráficos utilizados en el sitio.
  - `style.css`: Estilos personalizados.
  - `package.json`: Dependencias del proyecto (actualmente solo Cypress como devDependency).
  - `cypress/`: Estructura para pruebas E2E con Cypress (no interfiere con Playwright).
- Elementos clave para pruebas:
  - Navbar con enlaces internos (anclas) a secciones: Sobre mí, Proyectos, Testimonios, Contacto.
  - Imágenes principales: foto de perfil, logo, iconos de stack, etc.
  - Títulos y subtítulos en cada sección.
  - Botón de agenda (enlace externo a Calendly).
  - Metadatos SEO en el `<head>`.
  - Formularios o botones de contacto.
- Flujos principales de usuario:
  - Navegación por la página usando la barra de navegación.
  - Visualización de imágenes y contenido de cada sección.
  - Acceso a enlaces externos (ej: agenda).

## Paso 2: Instalación y configuración de Playwright

- Se instaló Playwright como dependencia de desarrollo:
  ```bash
  npm install --save-dev playwright
  ```
- Se instalaron los navegadores necesarios para las pruebas:
  ```bash
  npx playwright install
  ```

## Paso 3: Estructura de carpetas para pruebas

- Se creó la carpeta por defecto `tests/` para alojar los archivos de pruebas automatizadas.

## Paso 4: Configuración de Playwright

- Se creó el archivo `playwright.config.js` con configuración básica para entorno Windows y navegador Chrome (chromium).
- El directorio de pruebas es `./tests`.
- El navegador por defecto es Chrome (chromium).
- El baseURL está configurado como `http://localhost:5500` (ajustar si usas otro servidor o puerto).

## Prueba 1: Carga de imágenes principales

- **Objetivo:** Verificar que las imágenes principales del portafolio (foto de perfil y logo) se cargan correctamente y no están rotas.
- **Pasos automatizados:**
  1. Abrir la página principal (`/`).
  2. Verificar que la imagen de perfil y el logo sean visibles.
  3. Comprobar que la respuesta HTTP de cada imagen sea 200 (imagen no rota).
- **Comando para ejecutarla:**
  ```bash
  npx playwright test tests/imagenes.spec.js
  ```
- **Resultado esperado:** Ambas imágenes se visualizan correctamente y no están rotas.
- **Notas:** Si cambias los atributos `alt` o las rutas de las imágenes, actualiza la prueba.

## Prueba 2: Navegación y redireccionamientos

- **Objetivo:** Verificar que los enlaces de la barra de navegación redirigen correctamente a cada sección.
- **Pasos automatizados:**
  1. Hacer clic en cada enlace de la navbar.
  2. Verificar que la sección correspondiente sea visible.
- **Comando para ejecutarla:**
  ```bash
  npx playwright test tests/navegacion.spec.js
  ```
- **Resultado esperado:** Todas las secciones se muestran correctamente al navegar.

## Prueba 3: Títulos y subtítulos presentes

- **Objetivo:** Validar la presencia y el contenido de títulos y subtítulos clave en la página.
- **Pasos automatizados:**
  1. Verificar que el título principal y los subtítulos de cada sección estén presentes y contengan el texto esperado.
- **Comando para ejecutarla:**
  ```bash
  npx playwright test tests/navegacion.spec.js
  ```
- **Resultado esperado:** Todos los títulos y subtítulos clave están presentes y visibles.
- **Notas:** Si cambias los textos, actualiza la prueba.

## Prueba 4: Descarga de curriculum

- **Objetivo:** Verificar que el usuario puede descargar el curriculum desde el footer.
- **Pasos automatizados:**
  1. Hacer clic en el ícono de descarga del CV en el footer.
  2. Verificar que el archivo se descarga correctamente y sugiere un nombre relacionado con 'CV' o 'curriculum'.
- **Comando para ejecutarla:**
  ```bash
  npx playwright test tests/cv.spec.js
  ```
- **Resultado esperado:** El archivo se descarga correctamente.

## Prueba 5: Metadatos SEO

- **Objetivo:** Verificar que el sitio tenga metadatos SEO importantes (`title`, `description`, `keywords`).
- **Pasos automatizados:**
  1. Verificar el título de la página.
  2. Verificar que existan las meta etiquetas de descripción y palabras clave.
- **Comando para ejecutarla:**
  ```bash
  npx playwright test tests/seo.spec.js
  ```
- **Resultado esperado:** Todos los metadatos están presentes y tienen contenido.
- **Estado:** Prueba exitosa.

## Prueba 6: Accesibilidad básica

- **Objetivo:** Verificar que todas las imágenes tengan atributo `alt` y que los enlaces/botones sean accesibles.
- **Pasos automatizados:**
  1. Verificar que cada imagen tenga atributo `alt`.
  2. Verificar que cada enlace tenga texto, `aria-label` o `title`.
- **Comando para ejecutarla:**
  ```bash
  npx playwright test tests/accesibilidad.spec.js
  ```
- **Resultado esperado:** Todas las imágenes y enlaces cumplen con accesibilidad básica.
- **Estado:** Prueba fallida. Revisar imágenes sin `alt` y enlaces sin texto/label/title.

## Prueba 7: Robustez de la UI

- **Objetivo:** Simular recarga de página y navegación rápida para asegurar que la UI no se rompe.
- **Pasos automatizados:**
  1. Recargar la página y verificar que el contenido principal siga visible.
  2. Navegar rápidamente entre secciones y verificar visibilidad.
- **Comando para ejecutarla:**
  ```bash
  npx playwright test tests/robustez.spec.js
  ```
- **Resultado esperado:** La UI responde correctamente a recargas y navegación rápida.
- **Estado:** Prueba exitosa.

## Prueba 8: Enlaces externos

- **Objetivo:** Verificar que los enlaces externos abren en nueva pestaña y no están rotos.
- **Pasos automatizados:**
  1. Hacer clic en cada enlace externo y verificar que se abre correctamente.
- **Comando para ejecutarla:**
  ```bash
  npx playwright test tests/enlacesExternos.spec.js
  ```
- **Resultado esperado:** Todos los enlaces externos funcionan y abren correctamente.
- **Estado:** Prueba fallida. Los enlaces abren `about:blank` en entorno de testing (limitación de Playwright con enlaces externos).

---

## Uso de la UI de Playwright

- **¿Qué es?** La UI de Playwright es una interfaz gráfica que permite visualizar, ejecutar y depurar las pruebas automatizadas de forma interactiva.
- **Comando para abrir la UI:**
  ```bash
  npx playwright test --ui
  ```

## Notas importantes para la ejecución de pruebas

- Es necesario instalar el paquete `@playwright/test` para que las pruebas funcionen:
  ```bash
  npm install --save-dev @playwright/test
  ```
- Las pruebas requieren que el sitio esté disponible en un servidor local (por ejemplo, en `http://localhost:5500`). Puedes usar `http-server` para esto:
  ```bash
  npx http-server -p 5500
  ```
- Si el servidor no está corriendo, las pruebas fallarán con un error de conexión rechazada (`net::ERR_CONNECTION_REFUSED`).
- Una vez iniciado el servidor, puedes ejecutar las pruebas normalmente y también abrir la UI de Playwright:
  ```bash
  npx playwright test --ui
  ```
- Si tienes otros puertos o servidores, ajusta el `baseURL` en `playwright.config.js`.