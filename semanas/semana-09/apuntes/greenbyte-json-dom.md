# 📘 Cuaderno de Bitácora – Semana 9

**Fecha:** 4 de mayo de 2026  
**Proyecto Relacionado:** [GreenByte - Gestión de Pedidos](https://github.com/AnaBHernandez/greenbyte)

## 🎯 Temas trabajados
- **Arquitectura Asíncrona:** Implementación de `fetch()` con el patrón `async/await` para el consumo de archivos JSON locales.
- **Manipulación Dinámica del DOM:** Uso de `document.createElement`, `innerHTML` y `appendChild` para renderizar interfaces basadas en datos.
- **Lógica de Programación:** Filtrado de arrays con `.filter()` y acumuladores de totales para reportes financieros.
- **CSS Moderno:** Diseño responsive mediante `CSS Grid` con la función `auto-fill` y variables en `:root` para escalabilidad.

## 🔧 Lógica y Comandos Destacados

### Consumo de datos con validación
```javascript
async function cargarDatos() {
    try {
        const res = await fetch('pedidos.json'); // Petición asíncrona
        todosLosPedidos = await res.json();     // Conversión a objeto JS
        renderizar(todosLosPedidos);            // Pintado inicial
    } catch (error) {
        console.error("Error cargando el sistema de pedidos:", error);
    }
}

💡 Solución de Errores
Problema de Persistencia: Al filtrar con el buscador, los datos se "perdían" para búsquedas posteriores.

Solución: Implementación de una Copia Maestra en una variable global. El buscador siempre filtra sobre la lista original y genera una vista nueva sin destruir el estado inicial.

Limpieza del DOM: Para evitar que las tarjetas se duplicaran al buscar, se añadió contenedor.innerHTML = '' antes de cada renderizado.

📁 Proyectos Realizados
GreenByte: Panel de gestión de pedidos saludable. Incluye buscador en tiempo real, cálculo de recaudación automática y estados de pago diferenciados visualmente.

🧠 Reflexión Final
"Esta semana marca un punto de inflexión en mi formación. He dejado atrás la maquetación estática para construir sistemas que 'piensan' y reaccionan a los datos. Entender el flujo asíncrono y la manipulación del DOM me da las herramientas necesarias para la arquitectura de la Despensa Inteligente, asegurando que el código no solo sea funcional, sino robusto y profesional".


---

### 🚀 Pasos finales en tu terminal:

Para que estos apuntes suban a tu repositorio oficial antes de clase, ejecuta estos comandos en tu VS Code (asegurándote de estar en `~/Proyectos/confeccion-web-2026`):

1. **Guardar contenido:** Abre el archivo con `code semanas/semana-09/apuntes/greenbyte-json-dom.md` y pega el texto de arriba.
2. **Sincronizar:**
```bash
git add .
git commit -m "docs: add week 9 notes following official bitacora style"
git push origin main