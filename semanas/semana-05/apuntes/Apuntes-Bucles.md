
📔 DIARIO DE APRENDIZAJE: JAVASCRIPT SEMANA 5

🔵 1. INTERACCIÓN Y VARIABLES
LA TEORÍA: Las variables (let) son cajas. Usamos prompt() para recibir datos y alert() para sacarlos.

OJO: El prompt siempre recibe TEXTO (String).

EJERCICIOS 1 Y 2 (El Saludo):

Tu práctica: let nombre = prompt("..."); alert("Hola " + nombre);

Explicación: Guardamos el nombre en una variable y usamos el + para unirlo al saludo.

🟡 2. CONVERSIÓN DE DATOS (CASTEO)
LA TEORÍA: Para que el ordenador sume números y no "pegue" palabras, usamos herramientas de conversión.

EJERCICIO 2 (Cálculos):

Tu práctica: parseFloat() para números con decimales.

Explicación: Convierte el "texto" en "valor matemático". Sin esto, 5 + 5 daría 55.

🟢 3. DECISIONES (ESTRUCTURAS DE CONTROL)
LA TEORÍA: El if evalúa si algo es verdad. El else es el plan B si no se cumple.

EJERCICIO 3 (Verificar Edad):

Tu práctica: if (edad >= 18) { ... }

Explicación: El programa elige un camino según el número que el usuario introdujo.

🟠 4. BUCLES (EL "FOR" AUTOMÁTICO)
LA TEORÍA: Sirve para repetir una tarea muchas veces sin escribir el código una y otra vez.

EJERCICIO 4 Y 5 (Repetir 4 números):

Tu práctica: for (let i = 1; i <= 4; i++) { ... }

Explicación: Mientras tu compañero escribió el código 4 veces, tú usaste este "robot" que cuenta del 1 al 4 y repite la pregunta solo.

🟣 5. LÓGICA AVANZADA (OPERADORES Y/O)
LA TEORÍA: Permiten unir varias condiciones en una sola pregunta.

OPERADOR "O" (||): if (edad < 18 || edad > 65) -> Entras si eres niño O si eres jubilado.

OPERADOR "Y" (&&): if (user === "admin" && pass === "1234") -> Tienes que acertar el nombre Y la clave. Si falla una, no entras.

🔴 6. MATEMÁTICAS: EL MÓDULO (%)
LA TEORÍA: Devuelve el resto de una división. Es el truco para saber si un número es par.

EJERCICIO 5 (Par o Impar):

Tu práctica: if (numCheck % 2 === 0)

Explicación: Si al dividir por 2 el resto es 0, es PAR. Si es 1, es IMPAR.

🚀 7. PUBLICACIÓN PROFESIONAL (SISTEMA GIT)
LA TEORÍA: Pasos para que tus cambios se guarden en tu perfil de GitHub.

git add . -> Metes todos los cambios en la "bolsa".

git commit -m "Mensaje" -> Cierras la bolsa y le pones una etiqueta.

git push origin main -> Envías la bolsa a Internet (GitHub).

🟢 8. DECISIONES MÚLTIPLES (IF / ELSE IF / ELSE)
LA TEORÍA: Cuando tienes más de dos opciones, usamos else if. El programa pregunta en orden y se para en la primera respuesta que sea "verdad".

EJERCICIO 1 (Positivo, Negativo o Cero):

Tu práctica: if (num > 0) { ... } else if (num < 0) { ... } else { ... }

Explicación: Si no es positivo y no es negativo, por lógica solo puede ser cero.

🟡 9. RANGOS COMPLEJOS (USO DEL &&)
LA TEORÍA: Para definir un grupo de edad o un rango, usamos el operador Y (&&). Ambas deben cumplirse.

EJERCICIO 2 (Clasificación de Edades):

Tu práctica: if (edad >= 13 && edad <= 17) { alert("Adolescente"); }

Explicación: Obligamos al número a estar "encerrado" entre el 13 y el 17.

🟠 10. LA ESTRUCTURA SWITCH (EL MENÚ)
LA TEORÍA: El switch se usa para comparar una variable con valores exactos. Es más limpio que muchos if.

EJERCICIOS 3 Y 5 (Días y Meses):

case: Es cada opción del menú.

break: Es el freno para que no se ejecuten los siguientes casos.

default: El mensaje de error si el dato no existe (ej: día 8).

🔴 11. VALIDACIÓN + LÓGICA (COMBINAR TODO)
LA TEORÍA: Antes de procesar, comprobamos si el dato es válido.

EJERCICIO 4 (Calificaciones A-F):

Tu práctica: Un if de control (0-100) y un switch con Math.floor(nota / 10).

Explicación: Simplificamos la nota para agrupar por decenas.

🔄 12. BUCLES POR CONDICIÓN (WHILE / DO WHILE)
LA TEORÍA: Se usan cuando no sabemos cuántas veces se va a repetir algo. Repite mientras la condición sea verdadera.

EJERCICIOS 1 AL 4 (Control de Usuario):

do while: Ejecuta el código al menos una vez y luego pregunta.

while: Pregunta antes de entrar.

Acumuladores: suma += num (la hucha).

Contadores: .length (cuenta letras).

El Freno: break (sale del bucle inmediatamente).

✍️ REPASO RÁPIDO PARA EL EXAMEN
if / else if: Úsalo para rangos (mayor que, menor que).

switch: Úsalo para valores fijos (días, meses, colores).

for: Úsalo cuando sabes exactamente cuántas veces repetir.

while / do while: Úsalo cuando dependes de la acción del usuario.

&&: Para cuando quieres que se cumplan dos cosas a la vez.

||: Para cuando te sirve una cosa o la otra.

while (falso): Es el momento exacto en que el bucle se detiene.