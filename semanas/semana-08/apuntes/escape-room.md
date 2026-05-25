# 🧩 Proyecto: Escape Room - Lógica de Programación y Gestión de Estados
Desarrollo de un juego de lógica basado en una **Máquina de Estados Finita**.

## 🚀 Lógica de Inventario (Flags o Banderas)
El juego utiliza "banderas" lógicas para condicionar el progreso del usuario.

### Implementación Técnica:
```javascript
let tieneLlave = false;

// Acción de recogida
objetoLlave.onclick = () => {
    tieneLlave = true; // Se actualiza el estado global
    objetoLlave.style.display = 'none'; // Feedback visual inmediato
};

// Validación de victoria
puertaSalida.onclick = () => {
    if (tieneLlave) {
        alert("¡Felicidades! Has escapado.");
    } else {
        mensaje.innerText = "La puerta está cerrada... necesitas algo para abrirla.";
    }
};
🧠 Conceptos Aplicados
Estado Global: La variable tieneLlave mantiene la memoria de la aplicación entre diferentes interacciones.

Condicionales Anidados: Estructuras if/else para guiar la experiencia del usuario.