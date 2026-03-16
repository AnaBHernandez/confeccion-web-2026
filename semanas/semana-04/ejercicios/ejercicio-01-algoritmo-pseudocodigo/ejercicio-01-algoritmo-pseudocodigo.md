# Algoritmos, Pseudocódigo y Diagramas de Flujo

## Ejercicio 1 — Encender un ordenador

### Pseudocódigo

```
INICIO

SI (tiene_batería O está_enchufado) ENTONCES
    Pulsar botón de encendido
    Esperar carga del sistema
    SI pide_contraseña ENTONCES
        SI contraseña es correcta ENTONCES
            Acceso al sistema
        SINO
            Acceso denegado
        FIN_SI
    SINO
        Acceso directo
    FIN_SI
SINO
    Mostrar "Sin fuente de energía"
    FIN DEL PROCESO
FIN_SI

FIN
```

### Diagrama de flujo

```mermaid
flowchart TD
    A([Inicio]) --> B{Enchufado o con bateria?}
    B -- No --> C([Fin: sin energia])
    B -- Si --> D[Pulsar boton de encendido]
    D --> E[Esperar carga del sistema]
    E --> F{Pide contrasena?}
    F -- No --> G([Acceso directo])
    F -- Si --> H{Contrasena correcta?}
    H -- Si --> I([Acceso al sistema])
    H -- No --> J([Acceso denegado])
```

---

## Ejercicio 2 — Acceder a una cuenta

### Pseudocódigo

```
INICIO

intentos = 0

PEDIR usuario

SI usuario es correcto ENTONCES
    PEDIR contraseña
    SI contraseña es correcta ENTONCES
        mostrar "Acceso permitido"
    SINO
        intentos = intentos + 1
        SI intentos >= 3 ENTONCES
            Bloquear usuario
            Enviar correo a la empresa
        SINO
            volver a pedir contraseña
        FIN_SI
    FIN_SI
SINO
    volver a pedir usuario
FIN_SI

FIN
```

### Diagrama de flujo

```mermaid
flowchart TD
    A([Inicio]) --> B[intentos = 0]
    B --> C[Pedir usuario]
    C --> D{Usuario correcto?}
    D -- No --> C
    D -- Si --> E[Pedir contrasena]
    E --> F{Contrasena correcta?}
    F -- Si --> G([Acceso permitido])
    F -- No --> H[intentos = intentos + 1]
    H --> I{intentos >= 3?}
    I -- No --> E
    I -- Si --> J[Bloquear usuario - Enviar correo]
    J --> K([Fin])
    G --> K
```

---

## Ejercicio 3 — Semáforo

### Pseudocódigo

```
INICIO

LEER color_semaforo

SEGUN color_semaforo HACER
    CASO "rojo":     esperar
    CASO "amarillo": prepararse
    CASO "verde":    cruzar
FIN_SEGUN

FIN
```

### Diagrama de flujo

```mermaid
flowchart TD
    A([Inicio]) --> B[Leer color_semaforo]
    B --> C{Color del semaforo?}
    C -- Rojo --> D[Esperar]
    C -- Amarillo --> E[Prepararse]
    C -- Verde --> F[Cruzar]
    D --> G([Fin])
    E --> G
    F --> G
```

---

## Ejercicio 4 — Control de acceso

### Pseudocódigo

```
INICIO

Detectar tarjeta

SI tarjeta detectada ENTONCES
    SI tarjeta es válida ENTONCES
        Abrir puerta
    SINO
        Mostrar "Acceso no autorizado"
    FIN_SI
SINO
    Fin del proceso
FIN_SI

FIN
```

### Diagrama de flujo

```mermaid
flowchart TD
    A([Inicio]) --> B[Detectar tarjeta]
    B --> C{Tarjeta detectada?}
    C -- No --> D([Fin])
    C -- Si --> E{Tarjeta valida?}
    E -- Si --> F[Abrir puerta]
    E -- No --> G[Acceso no autorizado]
    F --> H([Fin])
    G --> H
```