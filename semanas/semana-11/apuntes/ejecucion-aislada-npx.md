# Ejecución de Herramientas bajo Demanda mediante NPX en Entornos Limpios

En la ingeniería de software moderna, la instalación global de paquetes (`npm install -g` o `pnpm add -g`) está considerada un antipatrón en la administración de entornos locales, debido a que acopla las herramientas al PATH del sistema operativo y provoca colisiones de versiones entre proyectos.

## Funcionamiento de NPX (Node Package Execute)

El ejecutor `npx` opera bajo el principio de aislamiento y volatilidad:
1. Inspecciona si el paquete requerido existe en las dependencias locales del proyecto (`node_modules`).
2. Si no se encuentra, descarga de forma transparente la versión más reciente del paquete en una caché temporal del sistema operativo.
3. Ejecuta el binario indicado pasándole los argumentos provistos.
4. Finalizada la ejecución, el espacio de memoria y disco temporal se libera, previniendo la contaminación de configuraciones globales y garantizando la repetibilidad del proceso en cualquier otra máquina de desarrollo.
