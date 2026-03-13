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
    Mostrar Sin fuente de energía
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
