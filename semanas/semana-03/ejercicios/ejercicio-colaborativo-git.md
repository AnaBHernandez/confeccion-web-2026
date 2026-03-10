# Bitácora de Aprendizaje: Gestión de Proyectos y Git

## 1. Experiencia: Ejercicio Colaborativo (La Biblioteca)
- **Contexto:** Trabajo grupal editando un archivo compartido en GitHub.
- **Lo que pasó:** Al intentar subir mis cambios, el `push` fue rechazado porque mis compañeros (como Román) ya habían subido cosas.
- **Aprendizaje Clave:** - No se puede hacer `push` sin antes tener lo último que hay en la nube (`git pull`).
    - **Resolución de Conflictos:** Aprendí a gestionar las líneas marcadas en rojo y verde en VS Code, eligiendo "Accept Both Changes" para integrar mi código con el de los demás sin borrar el trabajo de nadie.

## 2. Experiencia: Mentor Urban Toast (Proyecto Individual)
- **Objetivo:** Crear un repositorio propio desde cero para una maquetación profesional.
- **Proceso:**
    - Inicialización local con `git init`.
    - Vinculación con GitHub mediante `git remote add origin`.
    - Aprendizaje de **rutas relativas**: Cómo enlazar imágenes locales en lugar de usar links externos (Postimg) para que el proyecto sea autónomo.

## 3. Auditoría y Limpieza (Mantenimiento Profesional)
Hoy hemos realizado una limpieza profunda del repositorio de formación:
- **node_modules:** Aprendí que NUNCA se suben estas carpetas pesadas. Se eliminaron para aligerar el repo.
- **Zone.Identifier:** Identificamos y borramos archivos basura que crea Windows al descargar archivos.
- **Nombres de Archivos:** Renombramos carpetas con espacios (ej: "Modelo de caja" -> "modelo-caja") para evitar errores de URL en la web.
- **Organización:** Movimos los ejercicios sueltos de la carpeta Proyectos a sus semanas correspondientes (1, 2 y 3).
