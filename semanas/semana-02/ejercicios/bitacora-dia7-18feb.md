# Día 7 – 18 de febrero de 2026

## 🎯 Temas trabajados
- Configuración de entorno WSL + VS Code (problemas con Remote-WSL y solución: usar terminal de Ubuntu, reiniciar servidor con `rm -rf ~/.vscode-server`).
- Uso de Git: clonación con HTTPS vs SSH, cambio de remote, resolución de conflictos con `git pull`, merge.
- HTML semántico: estructura básica, etiquetas `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<figure>`, `<figcaption>`.
- Primer proyecto: "Primera-app" (HTML mínimo y GitHub Pages).
- Segundo proyecto: "the-good-breakfast" (iteraciones 1-3 del ejercicio guiado).
- Preparación de investigación sobre tablas HTML para presentación.

## 🔧 Comandos Git destacados
```bash
# Ver repositorios remotos
git remote -v

# Cambiar remote de HTTPS a SSH
git remote set-url origin git@github.com:usuario/repo.git

# Traer cambios remotos y fusionar (evitar errores de push)
git pull --no-rebase origin main

# Subir cambios
git push

💡 Problemas y soluciones
Error de permisos SSH en Git Bash: usar terminal de Ubuntu (WSL) para ejecutar Git, ya que allí están las claves configuradas.

Rechazo de push por cambios en remoto: hacer git pull primero para integrar los cambios de GitHub.

Carpetas vacías no se suben: para mantener estructura, usar archivos .gitkeep o README.md dentro de ellas.

Problemas de conexión VS Code con WSL: reiniciar el servidor remoto con rm -rf ~/.vscode-server y reabrir la carpeta con "Reopen Folder in WSL".

📁 Proyectos realizados
Primera-app: primer contacto con HTML y GitHub Pages. Contiene un index.html básico y un README.md.

the-good-breakfast: ejercicio guiado con estructura semántica (iteraciones 1-3). Subido a GitHub y pendiente de completar.

📚 Investigación para exposición
Tema: HTML Tables.

Archivos en investigaciones/tablas-html/:

investigacion-tablas.md (teoría)

ejemplo-tablas.html (código de ejemplo con horarios y fusión de celdas)

Enlace directo: Investigación tablas

🧠 Reflexión
Hoy aprendí a no rendirme ante los problemas técnicos. Empezamos con errores de conexión entre VS Code y WSL, y en lugar de bloquearme, aprendí a cambiar de terminal, usar Ubuntu para Git, y entender por qué a veces las cosas fallan. También descubrí la diferencia entre HTTPS y SSH, y cómo arreglar un repositorio clonado con la URL incorrecta. En cuanto a HTML, dimos los primeros pasos sólidos con etiquetas semánticas, creamos dos proyectos funcionales (Primera-app y the-good-breakfast) y los publicamos con GitHub Pages. Además, preparé una investigación completa sobre tablas HTML para mi presentación de mañana. Y lo más importante: todo lo que hicimos quedó documentado en mi repositorio de apuntes, con estructura profesional y subido a GitHub. Me llevo la confianza de que puedo buscar soluciones, preguntar y aprender haciendo, incluso cuando las cosas no salen a la primera.
