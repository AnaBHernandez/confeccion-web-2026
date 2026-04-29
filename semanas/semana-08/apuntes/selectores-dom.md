# 🔍 Proyecto: Ejercicio de Selectores DOM
Dominio de la navegación técnica por el árbol de nodos sin depender de IDs estáticos.

## 🚀 Técnicas de Navegación
Aprendimos a movernos por la estructura HTML de forma relativa.

```javascript
// Traversing Vertical y Horizontal
const hijo = document.querySelector('.item');
const padre = hijo.parentElement; // Subir un nivel
const hermano = hijo.nextElementSibling; // Moverse al siguiente elemento

// Manipulación Masiva
const todosLosItems = document.querySelectorAll('.card');
todosLosItems.forEach(item => {
    item.classList.toggle('highlight'); // Cambios en lote
});
🧠 Conceptos Aplicados
*   **NodeList vs Array:** Aunque `NodeList` permite `forEach`, no es un array completo (no tiene `map`, `filter`, etc.). Para usar esos métodos, se puede convertir con `Array.from(todosLosItems)` o `[...todosLosItems]`.

*   **Navegación Relativa:** Mantener la flexibilidad del código si el HTML cambia de estructura.