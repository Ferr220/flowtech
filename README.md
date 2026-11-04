# FlowTech

Página web oficial de **FlowTech**, un estudio de tecnología en Puerto Rico que diseña y desarrolla aplicaciones móviles, páginas web y videojuegos.

La página está hecha con HTML, CSS y JavaScript puro. No usa frameworks, no necesita instalar dependencias y no tiene paso de compilación. El formulario de contacto usa una pequeña función de servidor en Vercel para enviar los emails con [Resend](https://resend.com).

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
- **Formulario de contacto:** envía el mensaje directamente a `flowtech025@gmail.com` con Resend, sin abrir el programa de correo del visitante. Ver [Formulario de contacto (Resend)](#formulario-de-contacto-resend).

## Estructura del proyecto

```
FLOWTECH/
├── index.html            # Estructura y contenido de la página
├── style.css             # Todos los estilos (colores, tipografía, layout, responsive)
├── script.js             # Traducciones ES/EN, menú móvil, animaciones y formulario
├── api/contact.mjs       # Función de servidor que envía el formulario con Resend
├── .env.example          # Variables de entorno que necesita el formulario
├── Logos and Banners/    # Logos, banners y video de la marca
└── .claude/launch.json   # Configuración para abrir la página en un servidor local
```

## Cómo verla en tu computadora

Puedes abrir `index.html` directamente en el navegador con doble clic. Es mejor usar un servidor local para que todo cargue igual que en internet. Con Python instalado, corre esto desde la carpeta del proyecto:

```bash
python -m http.server 5500
```

Después abre <http://localhost:5500/index.html> en el navegador.

Otra opción es la extensión **Live Server** de VS Code: clic derecho en `index.html` y luego **Open with Live Server**.

Con estas dos opciones el formulario muestra un error al enviar, porque no corren la función de servidor. Para probarlo en tu computadora, crea un `.env.local` a partir de `.env.example` y corre:

```bash
npx vercel dev
```

## Formulario de contacto (Resend)

El navegador manda el formulario a `/api/contact` ([api/contact.mjs](api/contact.mjs)). Esa función valida los datos y le pide a Resend que envíe el email. Al darle a responder en el email, la respuesta le llega al visitante.

La clave de Resend tiene que estar solo en el servidor. Nunca la pongas en `script.js` ni la subas a GitHub.

**Para activarlo:**

1. Crea una cuenta en [Resend](https://resend.com) y una clave en **API Keys**.
2. Importa este repositorio en [Vercel](https://vercel.com). Vercel detecta la carpeta `api/` por su cuenta.
3. En Vercel, ve a **Settings → Environment Variables**, agrega `RESEND_API_KEY` con tu clave y vuelve a publicar.

**Sobre el remitente:** por defecto se envía desde `onboarding@resend.dev`, que solo puede enviar al correo con el que se creó la cuenta de Resend. Hay dos formas de que los mensajes lleguen a `flowtech025@gmail.com`:

- Crear la cuenta de Resend con `flowtech025@gmail.com`.
- Verificar un dominio propio en **Domains** y poner `CONTACT_FROM_EMAIL` con una dirección de ese dominio. Hace falta si quieren enviar a otro correo.

Variables disponibles: ver [.env.example](.env.example).

## Cómo editar

### Textos e idiomas

Los textos están en dos lugares:

1. En `index.html`, como texto inicial en español.
2. En el objeto `translations` de `script.js`, con una versión `es` y otra `en`.

Cada texto traducible tiene un atributo `data-i18n` que dice dónde está su traducción. Por ejemplo, `data-i18n="hero.title1"` corresponde a `translations.es.hero.title1` y `translations.en.hero.title1`.

**Para cambiar un texto**, cámbialo en `script.js`, tanto en `es` como en `en`. También conviene cambiarlo en `index.html` para que el texto inicial coincida.

**Para agregar un texto nuevo:**

1. Ponle un `data-i18n="seccion.clave"` al elemento en `index.html`.
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

El ícono de FlowTech está dibujado en SVG dentro de `index.html`, en el `<symbol id="ft-mark">`, y toma el color de `--ft-accent`. El favicon, que es el ícono de la pestaña, está en la etiqueta `<link rel="icon">` del `<head>`.

## Pendientes

- [ ] Cambiar los `href="#"` de la sección **Links** por los enlaces reales.
- [ ] Cambiar los `href="#"` del footer por las redes reales (LinkedIn, X, Instagram).
- [ ] Revisar los textos de **Proceso** y de los puntos de cada servicio.
- [ ] Agregar una sección de proyectos o portafolio.
- [ ] Publicar la página en Vercel y activar el formulario.

## Publicar la página

La página se publica en **Vercel**: importa el repositorio y cada push a `master` publica una nueva versión. Otros servicios de páginas estáticas, como GitHub Pages, no corren la función `api/contact.mjs`, así que el formulario no funcionaría ahí sin cambios.

---

© FlowTech · Hecho en Puerto Rico 🇵🇷
