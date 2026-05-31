# Arquitectura de Compilación y Optimización en Angular 18

En el desarrollo de Single Page Applications (SPA), el proceso de compilación (`build`) transforma el código fuente de desarrollo en artefactos estáticos optimizados para producción.

## Conceptos Clave de Ingeniería Web

* **Initial Chunk Files:** Archivos fundamentales (JavaScript y CSS) que el navegador requiere descargar de forma síncrona en la primera petición para inicializar el ciclo de vida de la aplicación.
* **Cache Busting (Hashing):** Inclusión de una cadena alfanumérica única en el nombre de los archivos generados (ej. `main-ZWSXEI6D.js`). Esto fuerza al navegador del cliente a descargar la versión más reciente del servidor en lugar de leer una copia obsoleta de la caché local tras un nuevo despliegue.
* **Compresión en Transferencia:** Diferencia crítica entre el tamaño en disco (*Raw Size*) y el tamaño de red (*Transfer Size*). Los servidores modernos de hosting (como Firebase) aplican algoritmos de compresión al vuelo (Gzip/Brotli), reduciendo el ancho de banda utilizado hasta en un 75%.
