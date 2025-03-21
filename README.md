# Slider de Testimonios Personalizable

**Objetivo:** Este proyecto tiene como objetivo principal recopilar y presentar las opiniones de los clientes de una manera visualmente atractiva y fácil de usar, proporcionando una representación clara de la satisfacción general.

**Problema y Solución:** La creación de este slider surgió de las limitaciones encontradas al utilizar plataformas de desarrollo no-code y low-code. Aunque estas plataformas ofrecen una gran facilidad de uso, a menudo restringen la capacidad de incorporar funcionalidades personalizadas como sliders de testimonios.

Para superar esta barrera, desarrollé este slider utilizando HTML, CSS y JavaScript puros. Esta solución permite crear un componente totalmente personalizado que se adapta a las necesidades específicas del proyecto, tanto en funcionalidad como en diseño. Además, al alojar el slider en GitHub y permitir su importación mediante un iframe, se convierte en una herramienta versátil que se puede integrar en cualquier sitio web, independientemente de la plataforma de creación utilizada.

**En resumen, este slider fue creado para:**

* Recopilar y presentar las opiniones de los clientes de manera efectiva.
* Proveer una representación visual clara de la satisfacción general.
* Superar las limitaciones de las plataformas de creación de sitios web no-code/low-code que impiden la incorporación de sliders personalizados.
* Ofrecer una solución versátil y personalizable para la presentación de testimonios, que se puede integrar fácilmente en cualquier sitio web.

**Puntos clave:**

* Se enfoca en las limitaciones de no-code/low-code.
* Se explica cómo el proyecto supera esas limitaciones.
* Se resalta la versatilidad y facilidad de integración mediante iframes.
* Se definen claramente los objetivos del problema.

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

Puedes ver un ejemplo de cómo se vería el slider terminado aqui: [https://techassistpc.github.io/slider_testimony/].

## Créditos

Este slider fue creado por [Francisco Weishein / TechAssistPC].

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para obtener más detalles. [https://github.com/TechAssistPC/slider_testimony/blob/main/LICENSE]
