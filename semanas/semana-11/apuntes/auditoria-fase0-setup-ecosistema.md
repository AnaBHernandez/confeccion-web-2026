# Semana 11 - Masterclass: Auditoría de la Fase 0 (Infraestructura y Git Flow) 🛠️

Manual técnico de referencia que documenta la inicialización, securización y resolución de conflictos de hardware y software en el despliegue del ecosistema del proyecto Portfolio.

---

## 🧹 1. Optimización del Entorno de Hardware (Ubuntu 24.04 LTS)

### El Diagnóstico de saturación de RAM

Durante la ejecución local del modelo fundacional `Llama 3.1 8B` (peso aprox. 4.8 GB) sobre una máquina con restricciones físicas de hardware (8 GB RAM totales), el hilo principal del sistema operativo colapsó al solaparse el consumo del LLM con entornos de ejecución dev (VS Code) y navegadores web.

### Protocolo de Mitigación en Consola (Limpieza Exhaustiva)

Se procedió a la purga de peso muerto en el demonio local y a la monitorización del sistema en tiempo real para recuperar el control de los recursos:

```bash
# 1. Eliminar el modelo pesado para liberar caché de disco y memoria volátil
ollama rm llama3.1

# 2. Inspeccionar la tabla de procesos activos y verificar la liberación de CPU/RAM
top
```

### La Estrategia Ligera ("Moto Urbana")

Se reconfiguró el ecosistema de IA integrando modelos ultra-eficientes optimizados para codificación que operan en un rango seguro de entre 1.5 GB y 2 GB (qwen2.5-coder:1.5b), securizando la persistencia del editor y la fluidez del sistema.

---

## 📦 2. Estrategia del Portfolio MVP y Arquitectura Angular 21

Se definió el alcance del Mínimo Viable Producto (MVP) para acelerar el Time-to-Market (despliegue temprano en Vercel) limitando la primera iteración a 3 vistas principales: Hero, Proyectos y Contacto.

Para garantizar la escalabilidad y mitigar el acoplamiento de código, el core de la aplicación se fragmentó bajo el patrón de separación de responsabilidades en tres capas fundamentales dentro de `src/app/`:

- **core/**: Contratos de datos inmutables (interfaces), interceptores y estado global de la aplicación.
- **features/**: Componentes contenedores con lógica de negocio aislada para cada vista.
- **shared/**: Componentes atómicos puramente visuales y reutilizables (botones, tarjetas de interfaz).

---

## 🛡️ 3. Git Flow Avanzado y Gestión de Crisis en Terminal

Para proteger el código de producción expuesto al usuario final, se implementó una arquitectura de ramificación estricta conectada con las reglas de negocio en la nube.

### El Bloqueo del Escudo Digital

Se configuró una Branch Protection Rule en la web de GitHub para blindar la rama `main`, impidiendo cualquier escritura directa desde consola. Toda actualización debe ser validada en la rama de integración `develop`.

### Anatomía de la Resolución de Conflictos (Merge Conflict)

Al unificar de forma local el historial de `develop` sobre la rama `main`, Git pausó el proceso (Abortando con estrategia ort) debido a discrepancies de contenido en las mismas líneas del archivo README.md. Se ejecutó el protocolo de resolución estructural:

```bash
# 1. Almacenamiento en caché temporal de cambios en sucio (Limpieza de mesa)
git stash

# 2. Cambiar de rama de forma segura
git checkout main

# 3. Forzar la adopción de la versión entrante de la rama de desarrollo (Theirs)
git checkout --theirs README.md

# 4. Confirmar la resolución del conflicto e indexar cambios
git add README.md
git commit -m "merge: resolver conflicto aplicando la maqueta premium de develop"

# 5. Sincronizar el repositorio remoto esquivando el bloqueo directo gracias al merge
git push origin main
```

---

## 📊 4. Estándar de Documentación de Dos Repositorios

Se estableció un gobierno de almacenamiento dual para mantener el código de producción limpio de artefactos formativos:

| Repositorio | Ruta Local en Ubuntu | Propósito Técnico |
|---|---|---|
| **portfolio** | `/home/ana-hernandez/Proyectos/portfolio` | Código fuente puro en Angular 21 y SCSS adaptativo (clamp()). |
| **confeccion-web-2026** | `/home/ana-hernandez/Proyectos/confeccion-web-2026` | Central de conocimiento indexada cronológicamente bajo formato Docs-as-Code. |

---

**Autora:** AnaBHernandez | **Última actualización:** Mayo 2026