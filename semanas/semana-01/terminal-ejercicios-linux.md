# Ejercicios de Terminal - Práctica Comandos (Linux/WSL) - SEMANA 01

## Ejercicio Completado: Creación de Estructura de Carpetas

### Comandos utilizados (Bash/Linux):
```bash
# 0. Verificar ubicación inicial (HOME de Linux)
cd ~
pwd
# Resultado: /home/ana

# 1. Eliminar projects si existía (Limpieza profunda)
rm -rf projects

# 2. Crear carpeta projects en HOME
mkdir projects

# 3. Entrar en projects
cd projects

# 4. Crear subcarpeta-1
mkdir subcarpeta-1
cd subcarpeta-1

# 5. Crear unidad-1
mkdir unidad-1
cd unidad-1

# 6. Crear archivo MAL escrito
touch hoal-mundo.txt

# 7. Eliminar archivo mal escrito
rm hoal-mundo.txt

# 8. Crear archivo CORRECTO
touch hola-mundo.txt

# 9. Verificar directorio actual
ls
# Debe mostrar solo: hola-mundo.txt

# 10. Volver al directorio raíz (HOME)
cd ~
touch hola-mundo.txt

# 9. Verificar directorio actual
ls
# Debe mostrar solo: hola-mundo.txt

# 10. Volver al directorio raíz (HOME)
cd ~
