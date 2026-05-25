/**
 * SEMANA 05 - ACTIVIDADES DE BUCLES Y CONTROL
 * Alumna: Ana Belén Hernández
 */

// === ACTIVIDADES DE BUCLES ===

// 1. Imprimir números del 1 al 10
console.log("--- Ejercicio 1: Números del 1 al 10 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Suma de todos los números del 1 al N
console.log("\n--- Ejercicio 2: Suma hasta N ---");
let n = parseInt(prompt("Introduce un número N para calcular la suma:"));
let suma = 0;
for (let i = 1; i <= n; i++) {
    suma += i;
}
console.log(`La suma de todos los números hasta ${n} es: ${suma}`);

// 3. Números pares en un rango indicado por el usuario
console.log("\n--- Ejercicio 3: Números pares en rango ---");
let inicioRango = parseInt(prompt("Inicio del rango de pares:"));
let finRango = parseInt(prompt("Fin del rango de pares:"));
console.log(`Pares entre ${inicioRango} y ${finRango}:`);
for (let i = inicioRango; i <= finRango; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4. Dibujar un triángulo de asteriscos
console.log("\n--- Ejercicio 4: Triángulo ---");
let nivelesTriangulo = 5; 
for (let i = 1; i <= nivelesTriangulo; i++) {
    console.log("*".repeat(i));
}

// 4.B RETO: Árbol de Navidad (con espacios para centrar)
console.log("\n--- Reto: Árbol de Navidad ---");
let alturaArbol = 5; 
for (let i = 1; i <= alturaArbol; i++) {
    let espacios = " ".repeat(alturaArbol - i);
    let estrellas = "*".repeat(i * 2 - 1);
    console.log(espacios + estrellas);
}
console.log(" ".repeat(alturaArbol - 1) + "|"); // El tronco


// === ACTIVIDADES CONDICIONALES ===

// 5. Números Primos en un rango [inicio, fin]
// Nota: Se usa Math.sqrt() para optimizar como pide el documento
console.log("\n--- Ejercicio 5: Números Primos ---");
let pInicio = parseInt(prompt("Introduce el INICIO del rango para buscar primos:"));
let pFin = parseInt(prompt("Introduce el FIN del rango para buscar primos:"));

for (let i = pInicio; i <= pFin; i++) {
    let esPrimo = i > 1; // 0 y 1 no son primos
    
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            esPrimo = false;
            break; 
        }
    }
    
    if (esPrimo) {
        console.log(`${i} es un número primo`);
    }
}

// 6. Juego del Número Secreto
console.log("\n--- Ejercicio 6: Número Secreto ---");
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intento;
let contadorIntentos = 0;

console.log("¡El juego ha comenzado! Mira las ventanas emergentes (alertas).");

do {
    intento = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));
    contadorIntentos++;

    if (isNaN(intento)) {
        alert("Por favor, introduce un número válido.");
    } else if (intento > numeroSecreto) {
        alert("Pista: El número secreto es MENOR.");
    } else if (intento < numeroSecreto) {
        alert("Pista: El número secreto es MAYOR.");
    }

} while (intento !== numeroSecreto);

alert(`¡ACERTASTE! 🎉 El número era ${numeroSecreto}. Lo has logrado en ${contadorIntentos} intentos.`);
console.log(`Juego terminado. Intentos totales: ${contadorIntentos}`);