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

// 7. Descuento en tienda (Uso del operador O -> ||)
let edadCliente = parseInt(prompt("7. Ingresa tu edad para ver si tienes descuento:"));
if (edadCliente < 18 || edadCliente > 65) {
    alert("¡Apto para descuento! (Menor de 18 o mayor de 65)");
} else {
    alert("No eres apto para el descuento.");
}

// 8. Nivel de acceso (Uso del operador Y -> &&)
let nivel = parseInt(prompt("8. Ingresa tu nivel de acceso (1-5):"));
if (nivel >= 3 && nivel <= 5) {
    alert("Acceso permitido (Nivel " + nivel + ")");
} else if (nivel >= 1 && nivel <= 2) {
    alert("Acceso denegado (Niveles 1 y 2 no autorizados)");
} else {
    alert("Error: El nivel debe estar entre 1 y 5");
}

// 9. Login de usuario (Comparación de textos)
let usuario = prompt("9. Nombre de usuario:");
let contrasena = prompt("9. Contraseña:");

if (usuario === "admin" && contrasena === "1234") {
    alert("Inicio de sesión con éxito. ¡Bienvenido!");
} else {
    alert("Error: Usuario o contraseña incorrectos");
}
// === EJERCICIOS: OPERACIONES CONDICIONALES ===

// 1. Determinar si un número es positivo, negativo o cero
let num1 = parseFloat(prompt("1. Ingresa un número (positivo, negativo o cero):"));
if (num1 > 0) {
    alert("El número es POSITIVO");
} else if (num1 < 0) {
    alert("El número es NEGATIVO");
} else {
    alert("El número es CERO");
}

// 2. Clasificación de edad
let edadUsuario = parseInt(prompt("2. Introduce tu edad para clasificarte:"));

switch (true) {
    case edadUsuario <= 0:
        alert("Edad no válida. Debe ser mayor a 0.");
        break;
    case edadUsuario < 13:
        alert("Eres un NIÑO");
        break;
    case edadUsuario < 18:
        alert("Eres un ADOLESCENTE");
        break;
    case edadUsuario < 65:
        alert("Eres un ADULTO");
        break;
    default:
        alert("Eres un ANCIANO");
}

// 3. Día de la semana (Switch)
let diaSemana = parseInt(prompt("3. Introduce un número del 1 al 7 (Días):"));
switch (diaSemana) {
    case 1: alert("Lunes"); break;
    case 2: alert("Martes"); break;
    case 3: alert("Miércoles"); break;
    case 4: alert("Jueves"); break;
    case 5: alert("Viernes"); break;
    case 6: alert("Sábado"); break;
    case 7: alert("Domingo"); break;
    default: alert("Día no válido");
}

// 4. Calificación (If + Switch)
let notaExamen = parseInt(prompt("4. Ingresa tu calificación (0-100):"));
if (notaExamen >= 0 && notaExamen <= 100) {
    let rango = Math.floor(notaExamen / 10);
    switch (rango) {
        case 10: case 9: alert("Calificación: A"); break;
        case 8: alert("Calificación: B"); break;
        case 7: alert("Calificación: C"); break;
        case 6: alert("Calificación: D"); break;
        default: alert("Calificación: F");
    }
} else {
    alert("Nota fuera de rango");
}

// 5. Mes del año
let numMes = parseInt(prompt("5. Introduce un número del 1 al 12 (Meses):"));
switch (numMes) {
    case 1: alert("Enero"); break;
    case 2: alert("Febrero"); break;
    case 3: alert("Marzo"); break;
    case 4: alert("Abril"); break;
    case 5: alert("Mayo"); break;
    case 6: alert("Junio"); break;
    case 7: alert("Julio"); break;
    case 8: alert("Agosto"); break;
    case 9: alert("Septiembre"); break;
    case 10: alert("Octubre"); break;
    case 11: alert("Noviembre"); break;
    case 12: alert("Diciembre"); break;
    default: alert("Mes no válido");
}
// === EJERCICIOS: WHILE / DO WHILE ===

// 1. Pedir números hasta que sea mayor a 10
let numero1;
do {
    numero1 = parseInt(prompt("1. Ingresa un número (el programa para si es mayor a 10):"));
} while (numero1 <= 10);
alert("¡Por fin! El número " + numero1 + " es mayor a 10.");

// 2. Suma de números hasta ingresar un negativo
suma = 0;
let numero2 = 0;
while (numero2 >= 0) {
    numero2 = parseInt(prompt("2. Ingresa un número para sumar (negativo para salir):"));
    if (numero2 >= 0) {
        suma += numero2; // Es lo mismo que: suma = suma + numero2
    }
}
alert("La suma total es: " + suma);

// 3. Validar nombre (mínimo 3 caracteres)
nombre = "";
while (nombre.length < 3) {
    nombre = prompt("3. Ingresa tu nombre (mínimo 3 letras):");
    if (nombre.length < 3) {
        alert("Nombre muy corto, intenta de nuevo.");
    }
}
alert("Bienvenido, " + nombre);

// 4. Juego de adivinanza (1 al 20)
let secreto = Math.floor(Math.random() * 20) + 1;
let intento;
do {
    intento = parseInt(prompt("4. Adivina el número del 1 al 20 (o 0 para rendirte):"));
    if (intento === 0) break; // Se rinde
    if (intento < secreto) {
        alert("Más alto...");
    } else if (intento > secreto) {
        alert("Más bajo...");
    }
} while (intento !== secreto);

if (intento === secreto) {
    alert("¡Felicidades! Adivinaste el número " + secreto);
} else {
    alert("Te rendiste. El número era " + secreto);
}