# Algoritmos y Pseudocódigo

## ¿Qué es un algoritmo?

Un algoritmo es una secuencia ordenada de pasos que resuelve un problema.
Antes de escribir código, pensar en el algoritmo nos ayuda a entender **qué** tiene que hacer el programa y en **qué orden**.

Un buen algoritmo tiene:
- Un **inicio** y un **fin** claros
- Pasos **ordenados** y **sin ambigüedad**
- **Condiciones** para tomar decisiones
- **Repeticiones** cuando es necesario

---

## ¿Qué es el pseudocódigo?

El pseudocódigo es una forma de escribir un algoritmo en lenguaje humano pero con estructura de código. No tiene sintaxis de ningún lenguaje concreto — sirve para **pensar la lógica** antes de programar.

---

## Estructuras básicas

### Secuencia
Los pasos se ejecutan uno detrás de otro en orden.

```
INICIO
    Paso 1
    Paso 2
    Paso 3
FIN
```

### Decisión — SI / SINO
Se ejecuta una acción u otra según una condición.

```
SI condición ENTONCES
    acción si es verdad
SINO
    acción si es falso
FIN_SI
```

### Decisión múltiple — SEGUN
Cuando hay más de dos opciones posibles para un mismo valor.

```
SEGUN variable HACER
    CASO valor1: acción
    CASO valor2: acción
    CASO valor3: acción
FIN_SEGUN
```

### Variables y contadores
Una variable guarda un valor que puede cambiar.
Un contador suma de uno en uno para llevar la cuenta de algo.

```
intentos = 0               ← inicializar antes del bucle
intentos = intentos + 1    ← sumar un intento cada vez que falla
```

### Operadores lógicos
- `Y` → las dos condiciones tienen que ser verdad
- `O` → con que una sea verdad es suficiente

```
SI (tiene_batería O está_enchufado) ENTONCES
    encender
FIN_SI
```

---

## ¿Para qué sirve en un proyecto real?

Antes de tocar el teclado para programar, el algoritmo nos ayuda a:

1. **Detectar errores de lógica** antes de que estén en el código
2. **Comunicar la solución** al equipo sin depender de un lenguaje concreto
3. **Dividir el problema** en pasos pequeños y manejables
4. **Ahorrar tiempo** — es más fácil corregir pseudocódigo que código

El diagrama de flujo es la representación visual del algoritmo: cada forma tiene un significado estándar.

| Forma | Significado |
|---|---|
| Óvalo | Inicio / Fin |
| Rectángulo | Proceso o acción |
| Rombo | Decisión (sí / no) |
| Flecha | Flujo de ejecución |