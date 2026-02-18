# 📊 Investigación: HTML Tables (Tablas)

## 📌 Definición
Las tablas HTML permiten organizar datos en filas y columnas, facilitando la visualización de información estructurada.

## ❓ ¿Por qué son importantes?
Son esenciales para mostrar datos tabulares como horarios, comparativas, resultados, etc. Además, con las etiquetas semánticas mejoran la accesibilidad y el mantenimiento del código.

## 🧱 Conceptos fundamentales
- `<table>`: contenedor principal de la tabla.
- `<tr>`: fila (table row).
- `<td>`: celda de datos (table data).
- `<th>`: celda de encabezado (table header), por defecto en negrita y centrada.
- `<thead>`: agrupa las filas de encabezado.
- `<tbody>`: agrupa el cuerpo de la tabla.
- `<tfoot>`: agrupa el pie de tabla (totales, resúmenes).
- `<caption>`: título de la tabla (opcional pero recomendado).
- `colspan`: fusiona columnas (ej. `colspan="2"` ocupa dos columnas).
- `rowspan`: fusiona filas (ej. `rowspan="3"` ocupa tres filas).

## 💻 Sintaxis básica
```html
<table>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
  </tr>
  <tr>
    <td>Dato 1</td>
    <td>Dato 2</td>
  </tr>
</table>

🧪 Ejemplo práctico (horario de clases)
html
<table>
  <caption>Horario semanal</caption>
  <thead>
    <tr>
      <th>Hora</th>
      <th>Lunes</th>
      <th>Martes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9:00 - 10:00</td>
      <td>Matemáticas</td>
      <td>Lengua</td>
    </tr>
    <tr>
      <td>10:00 - 11:00</td>
      <td colspan="2">Recreo</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total horas: 2</td>
    </tr>
  </tfoot>
</table>

⚠️ Errores comunes
Usar tablas para maquetar (diseño) en lugar de para datos.

Olvidar cerrar etiquetas.

No usar <th> para encabezados, lo que afecta a la accesibilidad.

✅ Buenas prácticas
Usar <thead>, <tbody>, <tfoot> para estructurar.

Incluir scope="col" o scope="row" en <th> para lectores de pantalla.

Evitar tablas anidadas (tablas dentro de tablas).

Añadir un <caption> descriptivo.

📚 Referencias
MDN: Tablas HTML

W3Schools: HTML Tables
