# Semana 04 — Recipe Page (Frontend Mentor)

**Fecha:** 10-12 marzo 2026  
**Proyecto:** Recipe Page — reto Frontend Mentor  
**Repo:** [github.com/AnaBHernandez/recipe-page](https://github.com/AnaBHernandez/recipe-page)  
**Live:** [anabhernandez.github.io/recipe-page](https://anabhernandez.github.io/recipe-page/)

---

## 🔧 Comandos de terminal utilizados

| Comando | Qué hace |
|---|---|
| `cd /ruta` | Navegar a una carpeta |
| `ls` | Ver contenido de una carpeta |
| `pwd` | Ver en qué carpeta estás |
| `touch archivo.css` | Crear un archivo vacío |
| `cat archivo.md` | Leer el contenido de un archivo |
| `code .` | Abrir VS Code en la carpeta actual |
| `git clone url` | Clonar un repositorio |
| `git add .` | Preparar todos los cambios |
| `git commit -m "mensaje"` | Guardar los cambios con mensaje |
| `git push` | Subir los cambios a GitHub |
| `git status` | Ver el estado de los archivos |

---

## 📐 Análisis del diseño antes de codificar

Antes de escribir código se analizan los diseños móvil y escritorio.

**Diferencias móvil vs escritorio:**
- Móvil: la tarjeta ocupa el 100% del ancho, sin fondo visible
- Escritorio: tarjeta centrada sobre un fondo crema, con border-radius

**Estructura de la página:**

| Elemento | Etiqueta HTML |
|---|---|
| Imagen | img |
| Título principal | h1 |
| Descripción | p |
| Preparation time | section.preparation + h3 + ul |
| Ingredients | section + h2 + ul |
| Instructions | section + h2 + ol |
| Nutrition | section + h2 + table |

---

## 🏷️ Etiquetas HTML utilizadas

### Jerarquía de títulos
- h1 → Título principal de la página
- h2 → Títulos de sección (Ingredients, Instructions, Nutrition)
- h3 → Subtítulos dentro de sección (Preparation time)

> Los títulos no son para el tamaño visual (eso es CSS), sino para indicar jerarquía e importancia.

### Imagen
- src → ruta de la imagen
- alt → descripción para accesibilidad (lectores de pantalla)

### Listas
- ul → lista sin orden (con puntos) — para ingredientes
- ol → lista ordenada (con números) — para instrucciones
- li → cada elemento de la lista

### Tabla
- table → envuelve toda la tabla
- tr → fila
- td → celda

### Contenedores semánticos
- article → contenido independiente y completo (la receta entera)
- section → sección temática dentro del article

---

## 🎨 CSS aplicado

### Estilos base
```css
body {
  font-size: 16px;
  font-family: "Outfit", sans-serif;
  background-color: hsl(30, 54%, 90%);
}
```

### Contenedor principal
```css
article {
  background-color: hsl(0, 0%, 100%);
  margin: auto;
  max-width: 736px;
  border-radius: 24px;
  padding: 0 40px 40px 40px;
  overflow: hidden;
}
```

### Imagen
```css
img {
  width: 100%;
}
```

### Colores de títulos
- h1 → Stone 900: hsl(24, 5%, 18%)
- h2 → Brown 800: hsl(14, 45%, 36%)
- h3 → Rose 800: hsl(332, 51%, 32%)

### Fuente de títulos
- Young Serif para h1, h2, h3

### Clase específica
```css
.preparation {
  background-color: hsl(330, 100%, 98%);
  padding: 24px;
  border-radius: 24px;
  border-top: none;
}
```

### Separadores
```css
section {
  border-top: 1px solid hsl(30, 18%, 87%);
}
tr {
  border-bottom: 1px solid hsl(30, 18%, 87%);
}
```

### Tabla — valores en negrita y color
```css
td:last-child {
  color: hsl(14, 45%, 36%);
  font-weight: 700;
}
```

### Responsive design
```css
@media (max-width: 768px) {
  article {
    max-width: 100%;
    border-radius: 0;
    padding: 0;
  }
  h1, p, section {
    padding: 0 24px;
  }
}
```

---

## 🔗 Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Young+Serif&family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
```

- Young Serif → para títulos (weight 400)
- Outfit → para el cuerpo del texto (weights 400, 600, 700)

---

## 💾 Conventional Commits

| Prefijo | Uso |
|---|---|
| feat: | Nueva funcionalidad |
| fix: | Corrección de error |
| docs: | Documentación |

