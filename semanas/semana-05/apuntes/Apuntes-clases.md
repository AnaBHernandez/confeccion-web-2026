# ⚡ JAVASCRIPT — SEMANA 5 · GUÍA MAESTRA

---

## 🔵 1. COMUNICACIÓN BÁSICA
> Interacción entre el humano y la máquina.

| Función | Qué hace |
| :--- | :--- |
| `let` 📦 | Declara una variable (una caja con nombre) |
| `prompt()` 🎤 | Abre una ventana para que el usuario escriba |
| `alert()` 📢 | Muestra un mensaje importante en pantalla |
| `console.log()` 🖥️ | Escribe en la consola del navegador (solo para ti) |

---

## ⚙️ 2. TRANSFORMACIÓN DE DATOS (CASTEO)
> JavaScript es "especial": si no le avisas, junta los números como si fueran letras.

| Función | Resultado |
| :--- | :--- |
| `parseInt("10")` | `10` → Entero |
| `parseFloat("10.5")` | `10.5` → Decimal |
| `Number()` | Conversión universal de texto a número |
| `isNaN()` | ¿Es "Not a Number"? Valida si el usuario puso letras |

---

## ⚖️ 3. COMPARACIONES Y LÓGICA
> Los símbolos que deciden el destino del código.

| Símbolo | Significado | Ejemplo |
| :---: | :--- | :--- |
| `==` | Igual (solo valor) | `5 == "5"` → true |
| **`===`** | **⭐ Igualdad Estricta — ¡USA SIEMPRE ESTE!** | `5 === "5"` → false |
| `!=` | Diferente | `5 != 10` → true |
| `%` | **Módulo** (Resto) | `10 % 2 === 0` → Par |

### 🧠 Operadores Lógicos

| Operador | Regla |
| :--- | :--- |
| `&&` (Y) | **Ambas** condiciones deben cumplirse |
| `\|\|` (O) | Con que **una** se cumpla, basta |

---

## 🛣️ 4. ESTRUCTURAS DE CONTROL
> Elige tu propia aventura.

### 🟢 `if / else if / else` → Para **rangos**
Úsalo cuando los valores varían (notas 0-10, tramos de edad, precios).

### 🟠 `switch` → Para **opciones fijas**
Úsalo para menús o casos exactos (días de la semana, opciones de menú).

| Palabra clave | Función |
| :--- | :--- |
| `case` | El valor a comparar |
| `break` | ⚠️ **Fundamental** — detiene el código para que no siga bajando |
| `default` | Plan B si ningún `case` coincide |

---

## 🔄 5. EL PODER DE LOS BUCLES
> La magia de automatizar la repetición.

### 🟦 `for` — El **Contador**
> Sabes el inicio y el fin exacto.
```js
for (let i = 0; i < 5; i++) { ... }  // Repite 5 veces
```

### 🟨 `while` — El **Vigilante**
> **Pregunta antes de entrar.** Si la condición es falsa de entrada, no ejecuta nada.
```js
while (usuarioValido === false) { ... }
```

### 🟥 `do while` — El **Persistente**
> **Entra una vez sí o sí**, luego pregunta si repite. Perfecto para pedir datos por primera vez.
```js
do { ... } while (condicion)
```

---

## 🛠️ 6. TRUCOS DE NIVEL ALTO

| Truco | Descripción |
| :--- | :--- |
| `.length` | Cuenta caracteres — `"Ana".length` → `3` |
| `Math.random()` | Número al azar entre 0 y 1 |
| `Math.floor()` | Quita decimales (redondea hacia abajo) |
| `suma += num` | Abreviatura de `suma = suma + num` |
| `break` | Botón de emergencia para salir de cualquier bucle |

---

## 🌐 7. EL PUENTE AL HTML — DOM
> Módulos 4.1 y 4.4: De la lógica a la pantalla.

### 🖱️ Selección de Elementos

| Método | Para qué sirve |
| :--- | :--- |
| `document.getElementById('id')` | Localiza un elemento por su ID único |
| `.value` | Lee lo que el usuario escribió en un `<input>` |
| `.innerText` | Escribe texto dentro de un `<span>`, `<p>` o `<div>` |
| `.addEventListener('click', fn)` | Espera a que el usuario pulse para lanzar código |

### 🧪 Flujo de Datos — Módulo 4.3
```
① Captura → ② Casting → ③ Lógica → ④ Salida
```
```js
let dato    = document.getElementById('caja').value;  // ① Captura
let numero  = Number(dato);                            // ② Casting (¡VITAL!)
// ③ Lógica: if/else, switch, aritmética...
document.getElementById('resultado').innerText = total; // ④ Salida
```

---

## 🧠 8. FUNCIONES AVANZADAS (MÓDULO 5)
> Módulos 5.1 al 5.4: Elevando la lógica a nivel profesional.

---

### 🏹 Funciones Flecha (Arrow Functions)
Es la forma moderna y corta de escribir funciones.
- **Sintaxis:** `const nombre = (parámetros) => expresión;`
- **Ventaja:** Elimina `function` y `return` si solo hay una línea.

### 🛡️ Parámetros por Defecto
Evitan errores de cálculo si el usuario olvida introducir un dato.
- **Uso:** `function calcular(precio, cantidad = 1) { ... }`
- **Lógica:** Si no se envía la cantidad, JavaScript usa `1` automáticamente.

### 📦 Rest Parameters (`...`)
Sirven para recibir un número ilimitado de argumentos en una sola variable.
- **Uso:** `function sumarTodos(...numeros) { ... }`
- **Lógica:** Convierte todos los valores recibidos en un Array para poder recorrerlos.

### 📞 Callbacks (Funciones como Argumento)
Es pasar una función entera dentro de otra como si fuera una pieza intercambiable.
- **Definición:** Una función "maestra" recibe una función "ayudante" (callback) y la ejecuta cuando es necesario.
- **Poder:** Permite cambiar la lógica (ej: descuento o suplemento) sin tocar la función principal.

### 👤 Funciones Anónimas
Son funciones que no tienen nombre porque se definen justo en el momento de usarlas.
- **Dónde aparecen:** Casi siempre dentro de un `.addEventListener` o como Callback rápido.