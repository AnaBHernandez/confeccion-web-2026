# 📘 Confección Web 2026 – Cuaderno de Bitácora Técnico

## ⚡ Misión

Este repositorio no es un proyecto de código en producción. Es el **sistema de archivos oficial** de mi formación en **Confección y Publicación de Páginas Web (2026)**.

Aquí se consolida, versiona y estructura todo el conocimiento técnico generado: investigaciones, ejercicios de terminal, prácticas y proyectos entregables.

**Main es producción estable. Cada carpeta es una semana de batalla.**

---

## 🧱 Arquitectura Forzada
```
/
├── semanas/
│   ├── semana-01/           → PLANTILLA OBLIGATORIA
│   │   ├── investigaciones/ → .md, análisis, comparativas técnicas
│   │   ├── ejercicios/      → Linux, Git, terminal, debugging
│   │   └── proyectos/       → Código fuente (Vite, etc.)
│   └── semana-02/           → (creada por demanda)
├── .gitignore
└── README.md
```

---

## ✅ Hitos Técnicos Consolidados (Feb 2026)

| Hito | Estado |
|------|--------|
| Migración SSH permanente (ED25519) | ✅ |
| Refactor raíz → `/semanas/` | ✅ |
| Wiki activada con contenido pedagógico | ✅ |
| Exposición clase: `package.json` | ✅ |
| Fork Pilar + upstream | ✅ |

---

## 🧠 Políticas de Mando (Inmutables)

1. **SSH como única capa de autenticación.** `git clone git@github.com:...` o no existe.
2. **Estructura semanal obligatoria.** Semana-01 es plantilla. Prohibido crear archivos en raíz.
3. **Dos repositorios, dos misiones:**
   - Este repo → entregas para nota. Main.
   - `vite-project-practice` → romper y experimentar. Dev.

---

## 🔗 Acceso Rápido

- **URL SSH:** `git@github.com:AnaBHernandez/confeccion-web-2026.git`
- **Wiki Técnica:** [Acceder a la Wiki](https://github.com/AnaBHernandez/confeccion-web-2026/wiki)
