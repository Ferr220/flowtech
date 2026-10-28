# FlowTech

Página web oficial de **FlowTech**, un estudio de tecnología en Puerto Rico que diseña y desarrolla aplicaciones móviles, páginas web y videojuegos.

La página está hecha con HTML, CSS y JavaScript puro. No usa frameworks, no necesita instalar dependencias y no tiene paso de compilación.

## Contenido de la página

| Sección | Qué muestra |
| --- | --- |
| **Hero** | Mensaje principal, botones de acción y el ícono de FlowTech animado |
| **Nosotros** | Misión y visión |
| **Servicios** | Apps & APIs, webs y plataformas, videojuegos |
| **Proceso** | Descubrimiento → Diseño → Desarrollo → Lanzamiento |
| **Casos de uso** | Startups, empresas y marcas, proyectos creativos |
| **Links** | Sitio principal, portafolio, GitHub y blog |
| **Contacto** | Datos de contacto y formulario |

Otras funciones:

- **Bilingüe (ES / EN):** el botón del header cambia el idioma de toda la página y recuerda la elección del visitante.
- **Responsive:** se adapta a escritorio, tablet y celular, con menú hamburguesa en pantallas pequeñas.
- **Animaciones:** las secciones aparecen suavemente al hacer scroll. Si el visitante tiene activada la opción de reducir movimiento en su sistema, las animaciones se desactivan.
- **Formulario de contacto:** al enviarlo se abre el programa de correo del visitante con el mensaje ya escrito para `contacto@flowtech.pr`.

## Estructura del proyecto

```
FLOWTECH/
├── Index.html            # Estructura y contenido de la página
├── style.css             # Todos los estilos (colores, tipografía, layout, responsive)
├── script.js             # Traducciones ES/EN, menú móvil, animaciones y formulario
├── Logos and Banners/    # Logos, banners y video de la marca
└── .claude/launch.json   # Configuración para abrir la página en un servidor local
```

## Cómo verla en tu computadora

Puedes abrir `Index.html` directamente en el navegador con doble clic. Es mejor usar un servidor local para que todo cargue igual que en internet. Con Python instalado, corre esto desde la carpeta del proyecto:

```bash
python -m http.server 5500
```

Después abre <http://localhost:5500/Index.html> en el navegador.

Otra opción es la extensión **Live Server** de VS Code: clic derecho en `Index.html` y luego **Open with Live Server**.

## Cómo editar

### Textos e idiomas

Los textos están en dos lugares:

1. En `Index.html`, como texto inicial en español.
2. En el objeto `translations` de `script.js`, con una versión `es` y otra `en`.

Cada texto traducible tiene un atributo `data-i18n` que dice dónde está su traducción. Por ejemplo, `data-i18n="hero.title1"` corresponde a `translations.es.hero.title1` y `translations.en.hero.title1`.

**Para cambiar un texto**, cámbialo en `script.js`, tanto en `es` como en `en`. También conviene cambiarlo en `Index.html` para que el texto inicial coincida.

**Para agregar un texto nuevo:**

1. Ponle un `data-i18n="seccion.clave"` al elemento en `Index.html`.
2. Agrega `clave` dentro de `seccion` en `es` y en `en` en `script.js`.

En los placeholders de los formularios se usa `data-i18n-placeholder` en vez de `data-i18n`.

### Colores y tipografía

Los colores, fuentes y tamaños están definidos como variables al principio de `style.css`, en el bloque `:root`:

```css
--ft-accent: #f04a1f;     /* naranja FlowTech */
--ft-bg: #0a0a0c;         /* fondo */
--ft-text: #f4f4f5;       /* texto principal */
```

Si cambias una variable, el cambio se aplica en toda la página.

Las fuentes vienen de Google Fonts: **Space Grotesk** para títulos, **Inter** para texto y **JetBrains Mono** para etiquetas.

### Logo

El ícono de FlowTech está dibujado en SVG dentro de `Index.html`, en el `<symbol id="ft-mark">`, y toma el color de `--ft-accent`. El favicon, que es el ícono de la pestaña, está en la etiqueta `<link rel="icon">` del `<head>`.

## Pendientes

- [ ] Cambiar los `href="#"` de la sección **Links** por los enlaces reales.
- [ ] Cambiar los `href="#"` del footer por las redes reales (LinkedIn, X, Instagram).
- [ ] Revisar los textos de **Proceso** y de los puntos de cada servicio.
- [ ] Conectar el formulario a un servicio de formularios (por ejemplo Formspree) o a un backend, para no depender del programa de correo del visitante.
- [ ] Agregar una sección de proyectos o portafolio.
- [ ] Publicar la página (GitHub Pages, Netlify o Vercel).

## Publicar la página

Como son archivos estáticos, se puede publicar gratis en cualquiera de estos servicios:

- **GitHub Pages:** sube el proyecto a un repositorio y, en *Settings → Pages*, selecciona la rama `main`.
- **Netlify / Vercel:** arrastra la carpeta del proyecto a su panel, o conecta el repositorio.

> **Importante:** muchos servidores buscan un archivo llamado `index.html` en minúscula. Antes de publicar, renombra `Index.html` a `index.html`.

---

© FlowTech · Hecho en Puerto Rico 🇵🇷
