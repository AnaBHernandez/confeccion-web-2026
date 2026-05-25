# 📊 Proyecto: Gestión Dinámica de Alumnos (JSON + DOM)

Este proyecto representa el ejercicio final de consolidación de la **UF1305**, donde se integra la recepción de datos estructurados con la generación dinámica de interfaces de usuario.

## 🚀 Lógica de Integración de Datos

El núcleo del proyecto reside en la transformación de una cadena de texto (formato JSON) en una estructura de datos viva que JavaScript puede procesar y calcular.

### 1. Deserialización y Limpieza
Para evitar errores de duplicidad en la interfaz, seguimos un protocolo estricto:
1. **Parseo:** Convertimos el JSON a objeto con `JSON.parse()`.
2. **Reset:** Vaciamos el contenedor HTML con `innerHTML = ""` antes de inyectar nuevos datos para asegurar un renderizado limpio.

### 2. Algoritmo de Cálculo de Medias
Implementamos una lógica resiliente que busca automáticamente las calificaciones sin importar cuántas existan en el objeto, garantizando la escalabilidad del sistema:

```javascript
// Localizamos los valores numéricos dentro del objeto alumno
const notas = Object.values(persona).filter(valor => typeof valor === 'number');

// Aplicamos el método reduce para la suma acumulada
const suma = notas.reduce((acc, nota) => acc + nota, 0);

// Cálculo con control de errores (evita mostrar NaN al usuario)
const media = notas.length > 0 ? (suma / notas.length).toFixed(2) : "Pte. Calificar";