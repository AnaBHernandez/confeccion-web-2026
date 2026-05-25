// ==========================================
// PARTE 1: EJERCICIOS DE FUNCIONES AVANZADAS
// ==========================================

// 1. Arrow Function (Función Flecha)
// Convierte una suma normal en una línea limpia
const sumarFlecha = (a, b) => a + b;
console.log("1. Prueba Flecha (5+10):", sumarFlecha(5, 10));


// 2. Rest Parameters (...)
// Permite recibir un "saco" de números y sumarlos todos
function sumarVarios(...numeros) {
    let acumulado = 0;
    for (let n of numeros) {
        acumulado += n;
    }
    return acumulado;
}
console.log("2. Prueba Rest (1,2,3,4,5):", sumarVarios(1, 2, 3, 4, 5));



// 3. Callback Simple
// Una función que recibe otra función como argumento
function saludar(nombre, miCallback) {
    let mensaje = "Hola, " + nombre;
    miCallback(mensaje); 
}
// Lo probamos imprimiendo por consola
saludar("Ana", function(texto) {
    console.log("3. Prueba Callback:", texto);
});


// 4. Calculadora con Callback
// La función no sabe qué operación hará hasta que se la pasas
function calculadora(a, b, operacion) {
    return operacion(a, b);
}
let resultadoMult = calculadora(5, 4, (x, y) => x * y);
console.log("4. Prueba Calculadora (5*4):", resultadoMult);



// ==========================================
// PARTE 2: APLICACIÓN PRÁCTICA (DOM)
// ==========================================

// 1. Función normal
function calcularNormal(precio, cantidad) {
    return precio * cantidad;
}
let p1 = parseFloat(prompt("1. Normal - Introduce precio:"));
let c1 = parseInt(prompt("1. Normal - Introduce cantidad:"));
alert("Total Normal: " + calcularNormal(p1, c1));

// 2. Parámetros por defecto
function calcularDefault(precio, cantidad = 1) {
    return precio * cantidad;
}
let p2 = parseFloat(prompt("2. Default - Precio:"));
let c2Texto = prompt("2. Default - Cantidad (vacío = 1):");
let c2 = c2Texto === "" ? undefined : parseInt(c2Texto);
alert("Total con Default: " + calcularDefault(p2, c2));

// 3. Rest parameters (...)
function sumarTodo(...precios) {
    let total = 0;
    for (let p of precios) {
        total += p;
    }
    return total;
}
let pr1 = parseFloat(prompt("3. Rest - Precio 1:"));
let pr2 = parseFloat(prompt("3. Rest - Precio 2:"));
let pr3 = parseFloat(prompt("3. Rest - Precio 3:"));
alert("Suma Total (Rest): " + sumarTodo(pr1, pr2, pr3));

// 4. Callbacks
function calcularCB(precio, cantidad, operacion) {
    let total = precio * cantidad;
    return operacion(total);
}
function descuento10(total) {
    return total * 0.9;
}
alert("Total con Callback (Descuento 10%): " + calcularCB(p1, c1, descuento10));

// 5. Función anónima
let totalAnon = calcularCB(p1, c1, function(total) {
    return total * 0.8;
});
alert("Total con Función Anónima (Descuento 20%): " + totalAnon);

// 6. TypeScript (Lógica en JS para pruebas)
function calcularTS(precio, cantidad, operacion) {
    let total = precio * cantidad;
    return operacion ? operacion(total) : total;
}
alert("6. Simulación TS completada (ver tipos en apuntes)");