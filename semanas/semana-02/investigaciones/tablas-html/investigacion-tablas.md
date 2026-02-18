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



### 6. **Guarda y cierra nano**
- `Ctrl + O` → Enter
- `Ctrl + X`

---

## 🌐 **Crear el archivo HTML de ejemplo (para mostrar en vivo)**

### 7. **Crea el archivo `ejemplo-tablas.html`**
```bash
nano ejemplo-tablas.html

8. Pega este código HTML completo

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo de Tablas HTML</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
        caption {
            font-weight: bold;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Ejemplo práctico: Horario de clases</h1>
    
    <table>
        <caption>Horario semanal</caption>
        <thead>
            <tr>
                <th>Hora</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>9:00 - 10:00</td>
                <td>Matemáticas</td>
                <td>Lengua</td>
                <td>Inglés</td>
                <td>Ciencias</td>
                <td>Historia</td>
            </tr>
            <tr>
                <td>10:00 - 11:00</td>
                <td>Física</td>
                <td>Química</td>
                <td>Deporte</td>
                <td>Arte</td>
                <td>Música</td>
            </tr>
            <tr>
                <td>11:00 - 12:00</td>
                <td colspan="5" style="background-color: #d3d3d3;">Recreo</td>
            </tr>
            <tr>
                <td>12:00 - 13:00</td>
                <td>Historia</td>
                <td>Matemáticas</td>
                <td>Lengua</td>
                <td>Inglés</td>
                <td>Ciencias</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="6">Total de horas: 20</td>
            </tr>
        </tfoot>
    </table>

    <h2>Ejemplo con rowspan</h2>
    <table>
        <caption>Fusión de filas</caption>
        <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
        </tr>
        <tr>
            <td rowspan="2">Manzanas</td>
            <td>Frescas</td>
            <td>2€</td>
        </tr>
        <tr>
            <td>Ecológicas</td>
            <td>2.5€</td>
        </tr>
        <tr>
            <td>Plátanos</td>
            <td>Frescos</td>
            <td>1.8€</td>
        </tr>
    </table>
</body>
</html>
