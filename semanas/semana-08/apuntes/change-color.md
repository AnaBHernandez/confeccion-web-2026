# 🎨 Proyecto: JS Change Color
Interacción directa entre algoritmos de aleatoriedad y el modelo de objetos de estilos (CSSOM).

## 🚀 Algoritmo de Color Aleatorio
Generamos códigos hexadecimales válidos mediante un bucle de 6 iteraciones.

```javascript
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function cambiarColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    document.body.style.backgroundColor = hexColor;
}
🧠 Conceptos Aplicados
*   **Math.random()**: Generación de números pseudoaleatorios. Como alternativa al formato hexadecimal, se podrían generar colores en `rgb()` o `hsl()` para mayor control sobre la luminosidad y saturación.

*   **Estilos Inline:** Acceso directo a la propiedad `style`. Aunque es funcional, para mantener una mejor separación de responsabilidades (HTML, CSS, JS), a menudo es preferible manipular clases CSS (`document.body.classList.add('nuevo-color')`) en lugar de estilos inline.