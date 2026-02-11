📦 package.json: El Mapa del Proyecto

Investigación de Ana | Fecha: 10/02/2026
Parte de: Tarea grupal Desarrollo Web

🎯 ¿Qué es package.json?
Es el archivo de configuración central de cualquier proyecto Node.js. Siempre está en la raíz del proyecto.

🧠 Analogía: La Receta de Cocina
package.json = Receta del pastel
├── nombre/versión = Nombre receta
├── dependencies = Ingredientes
├── devDependencies = Utensilios
└── scripts = Pasos a seguir

🧩 Las 3 Partes Esenciales

1. scripts - Tus atajos de comandos
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "test": "jest"
}
Uso: npm start en lugar de escribir comandos largos.

2. dependencies - Lo que tu app NECESITA
"dependencies": {
  "react": "^18.2.0",
  "express": "^4.18.2"
}
✅ Van a producción - Sin esto, la app no funciona.

3. devDependencies - Tus herramientas
"devDependencies": {
  "eslint": "^8.50.0",
  "jest": "^29.6.0"
}
❌ Solo para desarrollo - No van al servidor.

📊 Tabla comparativa
| dependencies | devDependencies |
|---|---|
| React, Express | ESLint, Jest |
| Van a producción | Solo desarrollo |
| npm install react | npm install --save-dev eslint |

🚀 Flujo paso a paso al descargar proyecto
# 1. Clonar desde GitHub
# 2. Entrar en la carpeta
# 3. MIRAR package.json (¡PRIMERO!)
# 4. Instalar TODO automáticamente: npm install
# 5. Arrancar: npm start

💡 ¿Por qué es el PRIMER archivo que miras?
- Sabes qué tecnologías usa (React, Vue, etc.)
- Descubres cómo arrancarlo (qué script usar)
- Evitas errores como "Cannot find module"
- Instalas todo correctamente de una vez

🔧 Comandos prácticos esenciales
# Crear package.json: npm init -y
# Instalar librería: npm install react
# Instalar herramienta: npm install --save-dev eslint
# Ver todos los scripts: npm run
# Instalar TODO: npm install

🎤 Cómo explicarlo a compañeros
"package.json es el manual de instrucciones del proyecto. Te dice qué necesita, con qué herramientas y cómo usarlo."

✅ Resumen final
- package.json siempre en raíz.
- Míralo PRIMERO.
- npm install antes de npm start.

📌 Investigación completada: 10 de febrero de 2026
👩‍💻 Por: Ana | Desarrollo Web
