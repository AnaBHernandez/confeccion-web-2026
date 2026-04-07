📝 Apuntes Técnicos: Maquetación Semántica y Modelo de Caja (Sesión 31/03)

1. Arquitectura Semántica (HTML5)
En lugar de usar etiquetas genéricas (div), hemos estructurado el inicio del proyecto con etiquetas que aportan significado:

<header>: Contenedor de la parte superior de la web.

<nav>: Bloque específico para la navegación.

<ul> y <li>: Estructura de lista para el menú, ya que semánticamente un menú es una lista de enlaces.

2. El Modelo de Caja (Box Model)
Para este ejercicio, hemos aplicado el reset global para tener control total sobre las dimensiones:

CSS
* {
    box-sizing: border-box;
}
Lección aprendida: Con border-box, el padding y el border se quedan dentro del ancho que definimos, evitando que las cajas "exploten" o se descoloquen en el layout de Ubuntu.

3. Flexbox (Layout Moderno)
Hemos transformado una lista vertical en un menú horizontal profesional usando:

display: flex: Convierte al padre (ul) en un contenedor flexible.

justify-content: space-between: Separa el logo del menú de forma automática.

gap: Define el espacio exacto entre las opciones del menú sin pelearse con los márgenes.

4. Directivas de Calidad (Filtro Anti-Windows)
Case Sensitivity: Respeto estricto a las minúsculas en rutas de imágenes (logo.jpg).

Abstracción de Estilo: El texto en el HTML se escribe en formato oración y se transforma a mayúsculas mediante CSS (text-transform: uppercase), manteniendo la separación entre contenido y diseño.

5. Secciones Específicas: El "Hero" y el Fondo de Imagen
En este bloque hemos aprendido la diferencia técnica entre poner una imagen de objeto y una imagen de fondo:

background-image: Hemos usado la propiedad CSS para poner el bosque de fondo. Esto permite que el texto "flote" encima sin desplazar la imagen.

background-size: cover: Vital para que la imagen siempre ocupe toda la caja sin deformarse, adaptándose al tamaño de la pantalla en Ubuntu.

Cajas anidadas: Hemos usado una <section> para el fondo y un <div> interno para agrupar el texto y centrarlo con Flexbox.

6. Estructura de Contenido Avanzada (article vs section)
Para la parte inferior del examen, hemos aplicado una jerarquía lógica:

<section>: Para bloques temáticos grandes como "Nosotros".

<article>: Para las tres tarjetas (Yoga, Recetas, Senderismo). Se usa esta etiqueta porque cada post tiene sentido por sí mismo, como si fuera una noticia independiente.

<footer>: El "sótano" de la web. Aquí agrupamos los créditos, tu nombre y los enlaces legales.

7. Jerarquía de Títulos (SEO y Accesibilidad)
Hemos respetado el orden de importancia para que los lectores de pantalla y Google entiendan la web:

<h1>: Reservado para el nombre de la web ("A tu aire"). Solo hay uno por página.

<h2>: Para los títulos de las secciones principales (Hero y Nosotros).

<h3>: Para los títulos dentro de los artículos (los nombres de las actividades).