# Actividad 5: Diseño de Portal Web - Pastelería Gijón Sweet

## 1. Concepto del Portal
He decidido desarrollar un portal web para una **pastelería artesanal** ubicada en Gijón. El objetivo es que los clientes puedan consultar el catálogo y calcular el presupuesto de sus tartas personalizadas de forma sencilla.

## 2. Diseño del Portal (Wireframe Narrativo)
El diseño será limpio y visual, usando colores crema y pasteles:
* **Header:** Logotipo circular de "Gijón Sweet" y menú de navegación (Inicio, Sabores, Contacto).
* **Sección Principal:** Imagen de alta calidad de una tarta artesana.
* **Zona Interactiva:** Un formulario lateral donde el usuario elige:
    * Sabor (Chocolate, Fresa, Vainilla).
    * Tamaño (Número de personas).
    * Opción "Sin Gluten".
* **Footer:** Iconos de redes sociales y dirección física en Gijón.

## 3. Funcionalidad
La web permitirá al usuario:
1. Navegar por los diferentes sabores disponibles.
2. Calcular en tiempo real el precio de su pedido según el número de raciones.
3. Aplicar un cargo extra si se requiere un obrador libre de alérgenos (Sin Gluten).

## 4. Datos Necesarios
Para que la lógica funcione, el sistema manejará:
* **Entradas:**
    * `sabor` (Texto)
    * `cantidadRaciones` (Número entero)
    * `esCeliaco` (Booleano: Sí/No)
* **Salidas:**
    * `precioFinal` (Número decimal)

## 5. Lógica de la Aplicación
```

### Diagrama de Flujo
```mermaid
flowchart TD
    A([Inicio]) --> B[/Introducir raciones, sabor y opción gluten/]
    B --> C[precio_base = raciones × 3€]
    C --> D{¿Sin Gluten?}
    D -- Sí --> E[precio_final = precio_base + 5€]
    D -- No --> F[precio_final = precio_base]
    E --> G[/Mostrar precio_final/]
    F --> G
    G --> H([Fin])
   
 ```
 ---

### Pseudocódigo
```
ALGORITMO CalcularPresupuesto
    
    DEFINIR PRECIO_RACION = 3
    DEFINIR SUPLEMENTO_SIN_GLUTEN = 5
    
    ESCRIBIR "Introduzca número de raciones:"
    LEER cantidad_raciones
    
    ESCRIBIR "Seleccione sabor:"
    LEER sabor
    
    ESCRIBIR "¿Necesita obrador sin gluten?"
    LEER esCeliaco
    
    precio_base <- cantidad_raciones * PRECIO_RACION
    
    SI esCeliaco == "SÍ" ENTONCES
        precio_final <- precio_base + SUPLEMENTO_SIN_GLUTEN
    SINO
        precio_final <- precio_base
    FIN SI
    
    ESCRIBIR "Presupuesto: " + precio_final + "€"

FIN ALGORITMO
```
