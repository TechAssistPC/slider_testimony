# slider_testimony
¿Cuál es el objetivo del problema? Recopilar y presentar las opiniones de los clientes, y proveer una representación visual de la satisfacción general.

# Slider de Testimonios Personalizable

Este proyecto proporciona un slider de testimonios personalizable que puedes integrar fácilmente en tu sitio web.

## Motivo de Creación

Este slider fue creado para mostrar testimonios de clientes de una manera atractiva y fácil de usar. Su objetivo es proporcionar una herramienta simple que se pueda personalizar para adaptarse a diferentes estilos y necesidades.

## Instrucciones de Uso

1.  **Descarga los archivos:** Descarga los archivos `index.html`, `style.css`, `script.js` y la carpeta `images` de este repositorio.
2.  **Personaliza los testimonios:**
    * Abre el archivo `index.html` con un editor de texto.
    * Busca los elementos `<p>` dentro de cada `div` con la clase `slide`.
    * Modifica el texto dentro de estos elementos `<p>` para cambiar los testimonios.
    * Modifica el texto dentro de los elementos `<h6>` dentro de cada `div` con la clase `slide` para cambiar los nombres de las personas.
    * Reemplaza las imagenes dentro de la carpeta `images` con las imagenes que tu prefieras.
3.  **Aloja los archivos:**
    * Crea una carpeta en tu servidor web o servicio de alojamiento en línea (por ejemplo, GitHub Pages, Netlify, Vercel).
    * Sube los cuatro archivos (`index.html`, `style.css`, `script.js`) y la carpeta `images` a esta carpeta.
4.  **Vincula los archivos:**
    * Asegúrate de que las rutas a las imágenes en el archivo `index.html` sean correctas. Deben apuntar a la ubicación de las imágenes en tu servidor.
5.  **Integra el slider:**
    * Copia el siguiente código `iframe`:

        ```html
        <style>
          iframe {
            width: 100%;
            aspect-ratio: 16 / 9; /* Ajusta la proporción si es necesario */
            border: none;
          }
        </style>

        <link rel="stylesheet" href="URL_DEL_style.css">
        <script src="URL_DEL_script.js"></script>

        <iframe src="URL_DEL_index.html"></iframe>
        ```

    * Reemplaza `URL_DEL_style.css`, `URL_DEL_script.js` y `URL_DEL_index.html` con las URLs correctas de tus archivos alojados.
    * Pega este código en el lugar donde deseas mostrar el slider en tu sitio web.

## Personalización Adicional

* **Estilos CSS:** Modifica el archivo `style.css` para cambiar los colores, las fuentes, los tamaños y otros estilos del slider.
* **JavaScript:** Modifica el archivo `script.js` para cambiar el comportamiento del slider, como la velocidad de desplazamiento, la pausa al pasar el ratón, etc.
* **Imágenes:** Reemplaza las imágenes en la carpeta `images` con tus propias imágenes. Asegúrate de que las rutas en el archivo `index.html` sean correctas.
* **Fuentes:** Si deseas utilizar una fuente diferente, modifica el archivo `style.css` y actualiza la regla `@font-face` o utiliza una fuente de Google Fonts.

## Ejemplo

Puedes ver un ejemplo de cómo se vería el slider terminado aqui: [].

## Créditos

Este slider fue creado por [Tu Nombre/Nombre de tu Organización].

## Licencia

Este proyecto está bajo la licencia [Tipo de Licencia].
