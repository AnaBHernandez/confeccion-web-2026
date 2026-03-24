/**
 * EJERCICIOS: OPERACIONES ARITMÉTICAS BÁSICAS
 * Profesora: (Ejercicio solicitado en clase)
 */

// 1. Saludo personalizado
let nombre = prompt("1. Introduce tu nombre:");
alert("¡Hola, " + nombre + "!");

// 2. Operaciones con dos números
let n1 = parseFloat(prompt("2. Introduce el primer número:"));
let n2 = parseFloat(prompt("2. Introduce el segundo número:"));
let suma = n1 + n2;
let resta = n1 - n2;
let mult = n1 * n2;
let div = n2 !== 0 ? n1 / n2 : "Error (División por cero)";
alert(`Resultados:\nSuma: ${suma}\nResta: ${resta}\nMultiplicación: ${mult}\nDivisión: ${div}`);

// 3. Verificación de mayoría de edad
let edad = parseInt(prompt("3. Introduce tu edad:"));
if (edad >= 18) {
    alert("Eres mayor de edad (18 o más)");
} else {
    alert("Eres menor de edad");
}

// 4. Números del 1 al 10 (por pantalla/consola)
console.log("4. Listado del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 5. Par o impar de 4 números
for (let i = 1; i <= 4; i++) {
    let numCheck = parseInt(prompt(`5. Introduce el número ${i} de 4:`));
    if (numCheck % 2 === 0) {
        alert(numCheck + " es PAR");
    } else {
        alert(numCheck + " es IMPAR");
    }
}

// 6. Valor exponencial
let base = parseFloat(prompt("6. Introduce la base:"));
let exponente = parseFloat(prompt("6. Introduce el exponente:"));
let resultadoExp = Math.pow(base, exponente); // También puedes usar base ** exponente
alert("El valor exponencial es: " + resultadoExp);