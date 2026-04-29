# ⌨️ Proyecto: Teclado Numérico Dinámico

En este proyecto aplicamos la **delegación de eventos** para gestionar múltiples botones con un solo escuchador.

## 💻 El Código Clave
En lugar de poner un `onclick` a cada número, usamos el contenedor:

```javascript
const display = document.querySelector('.screen');
const teclado = document.querySelector('.keyboard');

teclado.addEventListener('click', (e) => {
    // Comprobamos que lo que se ha pulsado sea un botón
    if (e.target.tagName === 'BUTTON') {
        const valor = e.target.innerText;
        
        // Lógica de borrado o concatenación
        if (valor === 'C') {
            display.innerText = '0';
        } else {
            // Operador ternario para evitar que el 0 inicial se quede pegado:
            // SI el display es '0', lo reemplaza. SI NO, lo concatena.
            display.innerText === '0' ? display.innerText = valor : display.innerText += valor;
        }
    }
});
🧠 Conceptos Aplicados
*   **Delegación de Eventos:** Escuchamos el clic en el contenedor padre (`.keyboard`) para no saturar la memoria con 10 listeners individuales. Es mucho más eficiente.

*   **Strings vs Numbers:** Evitamos operaciones matemáticas involuntarias al tratar los números como cadenas. Por ejemplo, si `display.innerText` fuera un número, `1 + 1` daría `2`. Como es una cadena, `'1' + '1'` resulta en `'11'`, que es el comportamiento deseado.