# 🛰️ BITÁCORA DE CLASE: INFRAESTRUCTURA Y BLINDAJE DE ENTORNOS
**Módulo:** Academia y Proyectos (Foco F5) | **Semana:** 11
**Estudiante:** Ana Hernández
**Metodología:** SDD (Spec-Driven Development) & Mitigación de Riesgos

---

## ⌨️ 1. KIT DE SUPERVIVENCIA SIN RATÓN (VELOCIDAD TPO)

### 🖥️ 1.1 Atajos del Sistema Operativo (Ubuntu 24.04 LTS)
* `Super` (Tecla Windows): Abre el lanzador global. Permite iniciar el navegador Edge o la Terminal escribiendo su nombre y pulsando `Enter`.
* `Alt + Tab`: Alterna el foco entre ventanas de forma inmediata (VS Code <-> Navegador).
* `Super + Flecha Izquierda / Derecha`: Divide la pantalla al 50% para trabajar en paralelo.

### 💻 1.2 Atajos de Editor (Visual Studio Code / Cursor)
* `Ctrl + P`: Buscador rápido de archivos en el proyecto.
* `Alt` -> `Terminal` -> `New Terminal`: Abre la terminal integrada con secuencia de teclado.
* `Ctrl + S`: Guarda el progreso del archivo activo (Operación obligatoria continua).
* `Ctrl + Z`: Deshace inmediatamente la última acción.

---

## 🛠️ 2. CONTROL DE ENTORNOS LOCALES Y COMANDOS CRÍTICOS

### 💥 2.1 Comando de Destrucción Segura: `rm -rf`
* **Sintaxis:** `rm` (*remove*), `-r` (*recursive* - afecta a directorios enteros), `-f` (*force* - ejecuta la acción sin solicitar confirmación).
* **Aplicación:** Saneamiento definitivo de directorios ante errores tipográficos en el nombre de las carpetas antes de inicializar Git.

### 📦 2.2 Motor de Paquetes Optimizado (`pnpm`)
* **Comando:** `pnpm dlx @angular/cli new [nombre] --package-manager=pnpm`
* **Concepto:** Descarga temporal en memoria para andamiar el proyecto utilizando enlaces duros del disco local, optimizando el almacenamiento.

---

## 🔒 3. PROTOCOLO DE SEGURIDAD Y HERRAMIENTAS DE RESCATE EN GIT

### 🚨 3.1 Comandos de Emergencia en el Historial (Veracidad en Commits)
1. `git commit --amend -m "nuevo mensaje"`: Modifica el texto del último commit local. Reemplaza un mensaje erróneo por uno verídico antes de subirlo a internet.
2. `git reset --soft HEAD~1`: Deshace el último commit local manteniendo intacto todo el código modificado en el editor.

### 🌳 3.2 Estrategia de Ramas por Funcionalidad (*Feature Branches*)
* **Regla Operativa:** Rama activa `feature/firebase-hosting` para aislar el desarrollo de la infraestructura. Prohibido hacer commits directos en `main`.
* **Blindaje:** Activación de la regla `Require a pull request before merging` en GitHub para bloquear subidas accidentales.

### 🛡️ 3.3 Configuración Táctica del `.gitignore`
```text
# Exclusiones de seguridad de Ana
node_modules/       # Bloquea las miles de dependencias locales pesadas de pnpm.
dist/               # Evita subir los binarios compilados de Angular que cambian constantemente.
.firebase/          # Ignora la caché interna y archivos temporales de la CLI de Firebase.
firebase-debug.log  # Bloquea los registros locales de fallos de despliegue.
.env                # Protege credenciales, claves secretas y llaves de API contra hackeos.
