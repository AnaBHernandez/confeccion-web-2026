# 📦 package.json: El Mapa del Proyecto

**Investigación de Ana** | Fecha: 10/02/2026

Parte de: Tarea grupal Desarrollo Web

---

## 🎯 ¿Qué es package.json?

Archivo de configuración central de cualquier proyecto Node.js. Siempre en la raíz del proyecto.

---

## 🧠 Analogía: La Receta de Cocina

```
package.json = Receta del pastel
├── nombre/versión = Nombre receta
├── dependencies = Ingredientes
├── devDependencies = Utensilios
└── scripts = Pasos a seguir
```

---

## 🧩 Las 3 Partes Esenciales

### 1. scripts - Atajos de comandos

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "test": "jest"
}
```

**Uso:** `npm start` en lugar de comandos largos.

### 2. dependencies - Lo que la app NECESITA

```json
"dependencies": {
  "react": "^18.2.0",
  "express": "^4.18.2"
}
```

✅ Van a producción - Sin esto, la app no funciona.

### 3. devDependencies - Herramientas de desarrollo

```json
"devDependencies": {
  "eslint": "^8.50.0",
  "jest": "^29.6.0"
}
```

❌ Solo desarrollo - No van al servidor.

---

## 📊 Comparativa

| dependencies | devDependencies |
| --- | --- |
| React, Express | ESLint, Jest |
| Van a producción | Solo desarrollo |
| `npm install react` | `npm install --save-dev eslint` |

---

## 🚀 Flujo al descargar proyecto

```bash
git clone <https://github.com/usuario/proyecto.git>
cd proyecto
cat package.json          # ¡PRIMERO!
npm install               # Instala TODO
npm start                 # Arranca
```

---

## 💡 ¿Por qué mirarlo PRIMERO?

- Sabes qué tecnologías usa
- Descubres cómo arrancarlo
- Evitas errores de módulos
- Instalas todo correctamente

---

## 🔧 Comandos esenciales

```bash
npm init -y                          # Crear package.json
npm install react                    # Instalar librería
npm install --save-dev eslint        # Instalar herramienta
npm run                              # Ver scripts
npm install                          # Instalar TODO
```

---

## 🎤 Explicación para compañeros

"package.json es el manual de instrucciones:

- **Qué necesita:** dependencies
- **Con qué herramientas:** devDependencies
- **Cómo usarlo:** scripts

Al descargar:

1. Lee el manual (`cat package.json`)
2. Consigue lo necesario (`npm install`)
3. Sigue los pasos (`npm start`)"

---

## ✅ Reglas de oro

- `package.json` siempre en raíz
- Míralo PRIMERO al descargar
- `npm install` antes de `npm start`
- `scripts` automatizan, `dependencies` ejecutan, `devDependencies` ayudan

---

📌 **Completado:** 10/02/2026

👩‍💻 **Por:** Ana | Desarrollo Web