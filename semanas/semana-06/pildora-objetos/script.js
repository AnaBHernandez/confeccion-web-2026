/**
 * PÍLDORA: MANIPULACIÓN DE OBJETOS
 * Presentado por: Ana Hernández
 */

// 1. EL OBJETO ORIGINAL (Simulando a Ruddy)
const personajeRuddy = {
    nombre: "Kael",
    vida: 100,
    ataque: 15,
    nivel: 1,
    activo: true
};

// Función para pintar el objeto en la pantalla (Usando Object.entries)
function pintarObjeto(objeto, elementId) {
    const contenedor = document.getElementById(elementId);
    contenedor.innerHTML = ""; // Limpiar
    
    // Usamos Object.entries() para sacar la "mochila"
    Object.entries(objeto).forEach(([clave, valor]) => {
        contenedor.innerHTML += `<div><span class="text-indigo-500 font-bold">${clave}:</span> ${valor}</div>`;
    });
}

// 2. INMUTABILIDAD Y SPREAD OPERATOR
function crearCopiaMejorada() {
    // La Fotocopiadora de Seguridad (...)
    const personajeAna = {
        ...personajeRuddy,        // Copiamos todo lo de Ruddy
        ataque: personajeRuddy.ataque + 11, // Sumamos el bonus (15 + 11 = 26)
        nivel: 5,                 // Subimos nivel
        habilidad: "Espada"       // Añadimos propiedad nueva
    };

    pintarObjeto(personajeAna, 'caja-ana');
    
    // Demostramos que el de Ruddy sigue intacto
    console.log("Original de Ruddy sigue igual:", personajeRuddy);
}

// 3. DEMO 6: INSPECCIÓN SELECTIVA
const visor = document.getElementById('resultado-inspeccion');

function mostrarKeys() {
    const keys = Object.keys(personajeRuddy);
    visor.innerText = `Object.keys() → [${keys.join(", ")}]`;
}

function mostrarValues() {
    const values = Object.values(personajeRuddy);
    visor.innerText = `Object.values() → [${values.join(", ")}]`;
}

function mostrarEntries() {
    const entries = Object.entries(personajeRuddy);
    visor.innerText = `Object.entries() → ${JSON.stringify(entries)}`;
}

// 4. SIMULADOR DE TYPESCRIPT (UNIONES)
function validarEstado() {
    const valor = document.getElementById('input-estado').value;
    const errorBox = document.getElementById('error-box');
    
    // Simulamos la Unión: 'Vivo' | 'Herido' | 'Muerto'
    const estadosPermitidos = ['Vivo', 'Herido', 'Muerto'];

    if (estadosPermitidos.includes(valor)) {
        errorBox.classList.add('hidden');
        alert("¡Estado validado correctamente por TypeScript!");
    } else {
        errorBox.classList.remove('hidden');
        errorBox.innerText = `❌ TypeScript Error: Type '${valor}' is not assignable to type 'Estado'. Esperado: 'Vivo' | 'Herido' | 'Muerto'.`;
    }
}

// Inicializar la pantalla
window.onload = () => {
    pintarObjeto(personajeRuddy, 'caja-ruddy');
};
