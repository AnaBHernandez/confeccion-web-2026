# Planificación de Issues para GitHub Projects: Red3Conecta Landing

## SPRINT 1: Setup + UI Base (29 Mayo → 6 Junio)

### Issue 1: Configuración del Entorno de Desarrollo y CI/CD
- **Descripción:** Inicializar el proyecto Angular 21 en modo Standalone y Zoneless. Configurar el archivo `.gitignore` estricto y el validador automático de ingeniería.
- **Criterios de Aceptación:**
  1. El proyecto compila sin errores usando Node v24 y npm.
  2. El archivo `app.html` contiene únicamente la etiqueta `<router-outlet>`.
  3. El archivo `.github/workflows/validador.yml` está desplegado y activo.
- **Asignado a:** Cintia / Ana Belén
- **Labels:** `setup`, `architecture`
- **Milestone:** Sprint 1
- **Rama Git:** `feature/sprint1-env-setup`

### Issue 2: Diseño de Identidad Neutra y Componentes Header/Footer
- **Descripción:** Diseñar en Figma las alternativas visuales cálidas/neutras para el tercer sector y maquetar los componentes estructurales Header y Footer.
- **Criterios de Aceptación:**
  1. Prototipo de Figma con paleta de colores accesible aprobado por el cliente.
  2. Componentes creados en archivos puros (`header.ts`, `footer.ts`) sin el sufijo `.component`.
  3. Navegación e iconografía adaptadas mediante inyección de `ConfigService`.
- **Asignado a:** Paula / Cintia
- **Labels:** `ui`, `ux`
- **Milestone:** Sprint 1
- **Rama Git:** `feature/sprint1-header-footer`

### Issue 3: Componente Hero y Sistema de Traducción Base (Catalán)
- **Descripción:** Implementación de la sección Hero con el mensaje central de impacto y configuración del servicio de internacionalización para soporte en Catalán.
- **Criterios de Aceptación:**
  1. Renderizado responsivo del Hero usando funciones CSS `clamp` para tipografía.
  2. Textos cargados de forma dinámica desde el archivo estático de traducción `ca.json`.
  3. Carga perezosa (Lazy Loading) del componente implementada mediante exportación nombrada.
- **Asignado a:** Cintia / Jessica
- **Labels:** `ui`, `i18n`
- **Milestone:** Sprint 1
- **Rama Git:** `feature/sprint1-hero-i18n`

---

## SPRINT 2: Bloques de Valor y Adaptabilidad (9 → 13 Junio)

### Issue 4: Secciones de Diagnóstico (Before / After)
- **Descripción:** Creación de los bloques comparativos que exponen la problemática de los técnicos (pérdida de tiempo) frente a la solución optimizada por la IA.
- **Criterios de Aceptación:**
  1. Estructura semántica HTML5 maquetada con CSS puro.
  2. Textos integrados en el flujo de internacionalización multi-idioma.
- **Asignado a:** Cintia / Paula
- **Labels:** `ui`, `content`
- **Milestone:** Sprint 2
- **Rama Git:** `feature/sprint2-before-after`

### Issue 5: Catálogo Expositivo (Cards Component) y Layout Responsivo
- **Descripción:** Desarrollar el componente de tarjetas para mostrar los recursos formativos y asegurar la fluidez visual en el triple monitor HP M22f y dispositivos móviles.
- **Criterios de Aceptación:**
  1. Grid responsivo construido con CSS puro (Flexbox/Grid) sin frameworks adicionales.
  2. Simulación estática de los datos del catálogo basados en la interfaz real de producción.
- **Asignado a:** Cintia / Jessica
- **Labels:** `ui`, `responsive`
- **Milestone:** Sprint 2
- **Rama Git:** `feature/sprint2-cards-layout`

---

## SPRINT 3: Interacción, Acceso y Calidad (16 → 20 Junio)

### Issue 6: Flujo Conversacional (Steps) y Captación (CTA Component)
- **Descripción:** Implementar la sección explicativa del asistente de IA (Gaia) y el formulario final de captación de leads redirigido al calendario de demostraciones.
- **Criterios de Aceptación:**
  1. Formulario con validaciones nativas para los campos: Nombre, Email y Teléfono corporativo.
  2. Redirección externa funcional configurada mediante el uso de `CTAService`.
- **Asignado a:** Cintia / Jessica
- **Labels:** `feature`, `interaction`
- **Milestone:** Sprint 3
- **Rama Git:** `feature/sprint3-steps-cta`

### Issue 7: Optimización SEO LinkedIn y Accesibilidad WCAG AA
- **Descripción:** Configurar las etiquetas Open Graph para perfiles técnicos en LinkedIn y auditar el contraste y navegación por teclado de la landing page.
- **Criterios de Aceptación:**
  1. Metadatos Open Graph inyectados correctamente en la cabecera mediante `NavigationService`.
  2. Cumplimiento verificado del estándar de accesibilidad WCAG AA (uso de Aria-labels y contraste).
- **Asignado a:** Jessica / Ana Belén
- **Labels:** `seo`, `accessibility`
- **Milestone:** Sprint 3
- **Rama Git:** `feature/sprint3-seo-accessibility`
