# 🚀 GUÍA MAESTRA: JAVASCRIPT (SEMANA 5)

---

## 🔵 1. COMUNICACIÓN BÁSICA
> **Interacción entre el humano y la máquina.**

* **`let`** 📦: Declara una variable (una caja con nombre).
* **`prompt()`** 🎤: Abre una ventana para que el usuario escriba.
* **`alert()`** 📢: Muestra un mensaje importante.
* **`console.log()`** 🖥️: Escribe en la consola del navegador (solo para programadores).

---

## ⚙️ 2. TRANSFORMACIÓN DE DATOS (CASTEO)
> **JavaScript es "especial": si no le avisas, junta los números como si fueran letras.**

* **`parseInt("10")`** ⮕ `10` (Entero).
* **`parseFloat("10.5")`** ⮕ `10.5` (Decimal).
* **`Number()`** ⮕ Conversión universal de texto a número.
* **`isNaN()`** ⮕ ¿Es "Not a Number"? Sirve para validar si el usuario puso letras.

---

## ⚖️ 3. COMPARACIONES Y LÓGICA
> **Los símbolos que deciden el destino del código.**

| Símbolo | Significado | Ejemplo |
| :--- | :--- | :--- |
| **`==`** | Es igual (solo valor) | `5 == "5"` (True) |
| **`===`** | **Igualdad Estricta** | `5 === "5"` (False) ⮕ **¡Usa siempre este!** |
| **`!=`** | Es diferente | `5 != 10` (True) |
| **`%`** | **Módulo** (Resto) | `10 % 2 === 0` (Es Par) |

### 🧠 Operadores Lógicos:
* **`&&` (Y)**: Ambas condiciones deben cumplirse.
* **`||` (O)**: Con que una se cumpla, el código entra.

[Image of JavaScript comparison operators]

---

## 🛣️ 4. ESTRUCTURAS DE CONTROL
> **Elige tu propia aventura.**

### 🟢 `if / else if / else` (Para Rangos)
Úsalo para cuando los valores varían (ej: notas de 0 a 10 o tramos de edad).

### 🟠 `switch` (Para Opciones fijas)
Úsalo para menús o casos exactos (ej: días de la semana).
* **`case`**: El valor a comparar.
* **`break`**: ¡Fundamental! Detiene el código para que no siga bajando.
* **`default`**: El Plan B si nada coincide.

[Image of JavaScript switch statement structure]

---

## 🔄 5. EL PODER DE LOS BUCLES
> **La magia de automatizar la repetición.**

### 🟦 `for` (El Contador)
Sabes el inicio y el fin exacto.
* `for (let i = 0; i < 5; i++)` ⮕ Repite 5 veces.

### 🟨 `while` (El Vigilante)
**Pregunta antes de entrar.** Si la condición es falsa de entrada, no hace nada.
* `while (usuarioValido === false) { ... }`

### 🟥 `do while` (El Persistente)
**Entra una vez sí o sí** y luego pregunta si repite. Perfecto para pedir datos por primera vez.

[Image of JavaScript while loop flowchart]

---

## 🛠️ 6. TRUCOS DE NIVEL ALTO
* **`.length`**: Cuenta caracteres. `"Ana".length` es `3`.
* **`Math.random()`**: Genera un número al azar entre 0 y 1.
* **`Math.floor()`**: Quita los decimales (redondea hacia abajo).
* **`suma += num`**: Abreviatura de `suma = suma + num`.
* **`break`**: Botón de emergencia para salir de cualquier bucle.

[Image of JavaScript break and continue statements]

---