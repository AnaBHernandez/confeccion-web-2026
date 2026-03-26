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

const cajaTexto = document.getElementById('input-numero');
const checkSuplemento = document.getElementById('check-suplemento');
const boton = document.getElementById('btn-calcular');
const etiquetaResultado = document.getElementById('resultado-texto');

// Función con parámetro por defecto (Módulo 5.2)
function calcularBase(precio, cantidad = 1) {
    return precio * cantidad;
}

boton.addEventListener('click', function() {
    let datoLeido = cajaTexto.value;
    let numeroLimpio = Number(datoLeido);

    if (datoLeido === "" || numeroLimpio <= 0) {
        etiquetaResultado.innerText = "⚠️ Introduce un número válido.";
        etiquetaResultado.style.color = "red";
    } 
    else {
        // Usamos las funciones de arriba en nuestra app
        let base = calcularBase(numeroLimpio);

        // Aplicamos la lógica del suplemento mediante un Callback
        let final = calculadora(base, 5, (total, extra) => {
            return checkSuplemento.checked ? total + extra : total;
        });

        etiquetaResultado.innerText = "El total final es: " + final + "€";
        etiquetaResultado.style.color = "black";
    }
});