# 📔 DIARIO DE APRENDIZAJE: JAVASCRIPT SEMANA 5
> **Repaso completo de ejercicios y conceptos clave**

---

## 🔵 1. INTERACCIÓN Y VARIABLES
* **LA TEORÍA:** Las variables (`let`) son cajas. Usamos `prompt()` para recibir datos y `alert()` para sacarlos.
* **OJO:** El `prompt` siempre recibe **TEXTO** (String).
* **EJERCICIOS 1 Y 2 (El Saludo):**
    * **Tu práctica:** `let nombre = prompt("..."); alert("Hola " + nombre);`
    * **Explicación:** Guardamos el nombre en una variable y usamos el `+` para unirlo al saludo.

---

## 🟡 2. CONVERSIÓN DE DATOS (CASTEO)
* **LA TEORÍA:** Para que el ordenador sume números y no "pegue" palabras, usamos herramientas de conversión.
* **EJERCICIO 2 (Cálculos):**
    * **Tu práctica:** `parseFloat()` para números con decimales.
    * **Explicación:** Convierte el "texto" en "valor matemático". Sin esto, `5 + 5` daría `55`.

---

## 🟢 3. DECISIONES (ESTRUCTURAS DE CONTROL)
* **LA TEORÍA:** El `if` evalúa si algo es verdad. El `else` es el plan B si no se cumple.
* **EJERCICIO 3 (Verificar Edad):**
    * **Tu práctica:** `if (edad >= 18) { ... }`
    * **Explicación:** El programa elige un camino según el número que el usuario introdujo.

---

## 🟠 4. BUCLES (EL "FOR" AUTOMÁTICO)
* **LA TEORÍA:** Sirve para repetir una tarea muchas veces sin escribir el código una y otra vez.
* **EJERCICIO 4 Y 5 (Repetir 4 números):**
    * **Tu práctica:** `for (let i = 1; i <= 4; i++) { ... }`
    * **Explicación:** El "robot" cuenta del 1 al 4 y repite la pregunta solo.

---

## 🟣 5. LÓGICA AVANZADA (OPERADORES Y/O)
* **LA TEORÍA:** Permiten unir varias condiciones en una sola pregunta.
* **OPERADOR "O" (`||`):** `if (edad < 18 || edad > 65)` ⮕ Entras si eres niño **O** jubilado.
* **OPERADOR "Y" (`&&`):** `if (user === "admin" && pass === "1234")` ⮕ Necesitas ambos correctos.

---

## 🔴 6. MATEMÁTICAS: EL MÓDULO (%)
* **LA TEORÍA:** Devuelve el resto de una división. Es el truco para saber si un número es par.
* **EJERCICIO 5 (Par o Impar):**
    * **Tu práctica:** `if (numCheck % 2 === 0)`
    * **Explicación:** Si al dividir por 2 el resto es 0, es **PAR**.

---

## 🚀 7. PUBLICACIÓN PROFESIONAL (SISTEMA GIT)
* **LA TEORÍA:** Pasos para guardar tus cambios en GitHub.
    1. `git add .` ⮕ Metes todo en la "bolsa".
    2. `git commit -m "Mensaje"` ⮕ Etiquetas la bolsa.
    3. `git push origin main` ⮕ Lo envías a Internet.

---

## 🟢 8. DECISIONES MÚLTIPLES (IF / ELSE IF / ELSE)
* **LA TEORÍA:** Cuando tienes más de dos opciones. Se para en la primera respuesta verdadera.
* **EJERCICIO 1 (Positivo, Negativo o Cero):**
    * **Tu práctica:** `if (num > 0) ... else if (num < 0) ... else ...`

---

## 🟡 9. RANGOS COMPLEJOS (USO DEL &&)
* **LA TEORÍA:** Para definir un grupo de edad o un rango cerrado.
* **EJERCICIO 2 (Clasificación de Edades):**
    * **Tu práctica:** `if (edad >= 13 && edad <= 17)`

---

## 🟠 10. LA ESTRUCTURA SWITCH (EL MENÚ)
* **LA TEORÍA:** Compara una variable con valores exactos. Más limpio que muchos `if`.
    * **`case`**: Cada opción del menú.
    * **`break`**: El freno para salir del caso.
    * **`default`**: Mensaje de error si nada coincide.

---

## 🔴 11. VALIDACIÓN + LÓGICA (COMBINAR TODO)
* **LA TEORÍA:** Comprobar si el dato es válido antes de usarlo.
* **EJERCICIO 4 (Calificaciones A-F):**
    * **Tu práctica:** Un `if` de control (0-100) y un `switch` con `Math.floor(nota / 10)`.

---

## 🔄 12. BUCLES POR CONDICIÓN (WHILE / DO WHILE)
* **LA TEORÍA:** Repite mientras la condición sea verdadera. Se usa cuando no sabemos cuántas veces fallará el usuario.
* **EJERCICIOS 1 AL 4:**
    * **`do while`**: Ejecuta al menos una vez y luego pregunta.
    * **`while`**: Pregunta antes de entrar.
    * **Acumuladores**: `suma += num` (la hucha).
    * **Contadores**: `.length` (cuenta letras).
    * **El Freno**: `break` (sale del bucle inmediatamente).

---

## ✍️ REPASO RÁPIDO PARA EL EXAMEN
* **If / Else if**: Para rangos (>, <).
* **Switch**: Para valores fijos (Días, Colores).
* **For**: Sabes cuántas veces repetir.
* **While / Do while**: Dependes de la acción del usuario.
* **&& / ||**: Unir condiciones (Y / O).
* **While (falso)**: Es cuando el bucle se detiene.