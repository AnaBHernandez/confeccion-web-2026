# 📚 Apuntes Técnicos - Semana 10: Angular Avanzado, Dependencias y Enrutamiento Clínico

En esta sesión nos hemos enfrentado a un escenario real de ingeniería de software: heredar el repositorio de otro desarrollador (el profesor Raúl), auditar su estructura a ciegas, solucionar conflictos de dependencias y levantar el sistema de enrutamiento perezoso (*Lazy Loading*) adaptado a su arquitectura personalizada.

---

## 1. Conceptos Clave de Git y Gestión de Entornos

### El Comportamiento "Perezoso" de Git
Cuando clonamos un repositorio que tiene múltiples ramas de desarrollo o de exámenes (`features/routing`, `features/customer`, etc.), Git local, para ahorrar espacio y tiempo, solo descarga y monta físicamente en nuestro disco duro la rama principal (`main`). 
* Las demás ramas se quedan en un estado "oculto" o remoto.
* Para cambiar de dimensión en nuestro ordenador y obligar al sistema a descargar y construir físicamente los archivos del examen, utilizamos el comando de posicionamiento:
```bash
  git checkout features/routing
```

### Control de Rutas en la Terminal
Es vital vigilar siempre en qué parte del disco duro está situada nuestra terminal (~ representa la raíz del usuario administrador, mientras que `/home/ana-hernandez/Proyectos/...` es nuestro espacio seguro de trabajo). Ejecutar comandos de creación de carpetas fuera de la ruta del proyecto provocará que Visual Studio Code no pueda indexarlos.

---

## 2. Gestión de Dependencias Moderna: El motor de pnpm

Al abrir el proyecto recién clonado, el editor se inunda de subrayados rojos con el error `Cannot find module '@angular/router'`.

**La razón:** La carpeta `node_modules` (que contiene las miles de librerías y el motor completo de Angular v21) pesa cientos de megabytes y nunca se sube a GitHub.

**La solución:** Al detectar la presencia del archivo `pnpm-lock.yaml` en la raíz, descubrimos que el proyecto utiliza `pnpm` en lugar del clásico `npm`. pnpm es un gestor de paquetes de última generación que comparte las librerías de forma global en el ordenador, ahorrando espacio en disco y acelerando las instalaciones de manera drástica.

Comando ejecutado para revivir el entorno descargando 466 paquetes:

```bash
pnpm install
```

---

## 3. Auditoría Clínica de Archivos y Arquitectura Minimalista

Para no configurar rutas a ciegas, realizamos un escaneo profundo de la estructura del proyecto mediante comandos de rastreo en la consola de Ubuntu:

```bash
find . -maxdepth 4 -not -path '*/.*' -not -path './node_modules*'
```

Este análisis clínico desveló dos secretos de maquetación personalizados por el profesor Raúl que rompían los estándares habituales de Angular:

* **Nombres de archivo simplificados:** La vista raíz no se llama `app.component.html`, sino simplemente `app.html`, y su lógica TypeScript es `app.ts`.

* **Estructura modular segmentada:** Dentro de la característica de clientes (`/features/customer`), no existía un archivo genérico `customer.ts`. El módulo estaba dividido en subcarpetas funcionales, situando la pantalla principal en `/customer-list/customer-list.ts`.

---

## 4. Enrutamiento Profesional con Carga Perezosa (Lazy Loading)

Para garantizar que la aplicación sea ultra veloz, implementamos Lazy Loading. Esto significa que Angular no descargará el código de la pantalla de clientes en el navegador del usuario final hasta que este no haga clic explícitamente en ese botón.

### El Desafío de TypeScript y la resolución de Clases

Al intentar importar las clases estándar como `DashboardComponent` o exportaciones por defecto (`default`), el analizador de código arrojaba errores críticos. Usando el comando `cat` para leer el código fuente original de las páginas de desarrollo, descubrimos el patrón de Raúl:

* Redujo el nombre de las clases quitándoles la palabra `Component`. La clase del panel de inicio se llama simplemente `Dashboard` y la de clientes `CustomerList`.

* Al ser exportaciones nombradas normales (`export class ...`), la importación dinámica requiere capturar la propiedad exacta mediante la sintaxis de promesas de JavaScript (`.then(m => m.NombreDeLaClase)`).

### Código Definitivo de Rutas (`src/app/app.routes.ts`)

Con el mapa real de archivos en la mano, el enrutador quedó configurado con cero errores de la siguiente manera:

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. Redirección automática inicial si el usuario entra a la raíz vacía
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // 2. Ruta perezosa exacta hacia el panel de control (Clase minimalista 'Dashboard')
  { 
    path: 'dashboard', 
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) 
  },

  // 3. Ruta perezosa exacta hacia la subcarpeta física de la lista de clientes
  { 
    path: 'clientes', 
    loadComponent: () => import('./features/customer/customer-list/customer-list').then(m => m.CustomerList) 
  }
];
```

### El Proyector de la Vista Raíz (`src/app/app.html`)

Para que este enrutamiento funcione, limpiamos todo el HTML estático de la plantilla principal y dejamos únicamente la etiqueta de control:

```html
<router-outlet></router-outlet>
```

¿Cómo funciona? Esta etiqueta actúa como un proyector dinámico en el navegador. Si la URL cambia a `/dashboard`, renderiza en pantalla la lógica de la clase `Dashboard`; si cambia a `/clientes`, proyecta al instante la lista `CustomerList`.
