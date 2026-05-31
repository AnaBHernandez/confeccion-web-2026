# Semana 11 - Continuación: Implementación de la Capa de Datos Reactiva (Fase 1) 🏗️

Manual técnico que documenta el modelado estricto de los contratos de datos, la fuente de verdad estática inmutable y el servicio reactivo mediante Signals de Angular 21, tras la resolución del conflicto de infraestructura.

---

## 📦 1. Topología del Sistema y Estructura Física Simplificada

Para blindar el entorno local en máquinas con restricciones físicas (8 GB RAM), se evita la dispersión de archivos y se co-localiza la declaración del contrato técnico (interfaz) junto con la colección de datos crudos dentro del directorio nativo de recursos. El árbol físico del repositorio de producción queda estructurado de la siguiente forma:

- `src/assets/data/portfolio.data.ts`: Contiene la interfaz de tipado estricto y la constante inmutable de los proyectos.
- `src/app/core/services/project.service.ts`: Centraliza la lógica inyectable exponiendo señales reactivas de solo lectura.

---

## 💻 2. Código de Producción con Comentarios de Aprendizaje

### A. Estructura e Interfaz de Datos (`src/assets/data/portfolio.data.ts`)

```typescript
/**
 * Interfaz que define las propiedades obligatorias de un proyecto.
 * Obliga al compilador de TypeScript a comprobar que no falte ningún dato esencial,
 * eliminando por completo el uso de tipos ambiguos o inseguros como 'any'.
 */
export interface Project {
  id: string;          // Identificador único semántico (ej: 'despensa-inteligente')
  title: string;       // Nombre comercial que se renderizará en la vista
  description: string; // Explicación técnica orientada al valor de negocio (MVP)
  tags: string[];      // Array de tecnologías utilizadas en el desarrollo del showcase
  githubUrl: string;   // Enlace público al código fuente del repositorio en GitHub
  deployUrl?: string;  // Propiedad opcional (indicada por el signo ?) para producción
}

/**
 * Constante inmutable que almacena los proyectos reales del desarrollador.
 * Actúa como la base de datos estática local para los showcases de empleabilidad.
 */
export const PROJECTS_DATA: Project[] = [
  {
    id: 'despensa-inteligente',
    title: 'Despensa Inteligente',
    description: 'Sistema de automatización de inventario doméstico con enfoque en Privacy by Design.',
    tags: ['GCP', 'Telegram Bot API', 'Node.js', 'TypeScript'],
    githubUrl: '[https://github.com/AnaBHernandez/despensa-inteligente](https://github.com/AnaBHernandez/despensa-inteligente)'
  },
  {
    id: 'arquitectura-medallon-aire',
    title: 'Plataforma Aire-Data',
    description: 'Arquitectura de datos estructurados en tres capas empaquetada en contenedores aislados de Linux.',
    tags: ['Docker', 'Python', 'SQL'],
    githubUrl: '[https://github.com/AnaBHernandez/aire-data-platform](https://github.com/AnaBHernandez/aire-data-platform)'
  }
];
