document.getElementById("year").textContent = new Date().getFullYear();

// =========================
// Sistema de traducción
// =========================
const translations = {
  es: {
    meta: {
      title: "FlowTech | Tecnología desde Puerto Rico"
    },
    nav: {
      about: "Nosotros",
      product: "Servicios",
      process: "Proceso",
      solutions: "Casos de uso",
      resources: "Links",
      contact: "Contacto"
    },
    hero: {
      eyebrow: "Estudio de tecnología · Puerto Rico",
      title1: "Construimos experiencias digitales que",
      title2: "fluyen.",
      description: "Diseñamos y desarrollamos aplicaciones móviles, páginas web modernas y videojuegos con alto nivel de calidad y rendimiento.",
      btn: {
        whatWeDo: "Ver servicios",
        contact: "Empieza tu proyecto"
      },
      meta: {
        apps: "Apps y páginas web",
        games: "Videojuegos interactivos",
        tech: "Hecho en Puerto Rico"
      }
    },
    about: {
      eyebrow: "Sobre nosotros",
      title: "Tecnología con detalle, desde el Caribe.",
      description: "FlowTech nace en Puerto Rico con la meta de crear productos digitales que se sientan rápidos, pulidos y fáciles de usar, sin perder de vista la creatividad y el detalle visual.",
      mission: {
        title: "Misión",
        text: "Diseñar y desarrollar experiencias digitales —apps, webs y juegos— que hagan que la tecnología se sienta natural y fluida para las personas."
      },
      vision: {
        title: "Visión",
        text: "Convertirnos en uno de los estudios de tecnología y creatividad más reconocidos del Caribe, llevando productos desde Puerto Rico al mundo."
      }
    },
    product: {
      eyebrow: "Servicios",
      title: "Qué hacemos",
      description: "Desarrollamos soluciones digitales a la medida: desde la idea y el diseño, hasta el código y el lanzamiento.",
      apps: {
        title: "Aplicaciones & APIs",
        text: "Desarrollo de aplicaciones móviles y web, con APIs bien diseñadas, performance estable y experiencias modernas.",
        l1: "iOS, Android y web",
        l2: "Backends y APIs REST",
        l3: "Integraciones y pagos"
      },
      web: {
        title: "Webs y plataformas",
        text: "Sitios y paneles de administración con diseño profesional, animaciones suaves y enfoque en usabilidad.",
        l1: "Landing pages y sitios",
        l2: "Dashboards y paneles",
        l3: "SEO y rendimiento"
      },
      games: {
        title: "Videojuegos & experiencias",
        text: "Prototipos de juegos, experiencias interactivas y proyectos creativos para marcas o entretenimiento.",
        l1: "Prototipos jugables",
        l2: "Experiencias para marcas",
        l3: "Arte y storytelling"
      }
    },
    process: {
      eyebrow: "Proceso",
      title: "De la idea al lanzamiento",
      description: "Un proceso claro y colaborativo para que siempre sepas en qué etapa está tu proyecto.",
      s1: { title: "Descubrimiento", text: "Entendemos tu idea, tus usuarios y tus metas." },
      s2: { title: "Diseño", text: "Wireframes y prototipos visuales antes de escribir código." },
      s3: { title: "Desarrollo", text: "Construimos por etapas, con demos frecuentes." },
      s4: { title: "Lanzamiento", text: "Publicamos, medimos y seguimos mejorando." }
    },
    solutions: {
      eyebrow: "Para quién",
      title: "Casos de uso",
      description: "Adaptamos la tecnología de FlowTech a distintos tipos de proyectos y equipos.",
      startups: {
        tag: "MVP",
        title: "Startups & emprendedores",
        text: "MVPs rápidos, landing pages y prototipos interactivos para validar ideas sin perder calidad visual."
      },
      brands: {
        tag: "Marca",
        title: "Empresas y marcas",
        text: "Webs, micrositios y experiencias interactivas que refuerzan la identidad de marca."
      },
      creative: {
        tag: "Creativo",
        title: "Proyectos creativos",
        text: "Videojuegos, experiencias inmersivas y proyectos experimentales con foco en arte y storytelling."
      }
    },
    resources: {
      eyebrow: "Recursos",
      title: "Links oficiales",
      description: "Explora nuestro trabajo, código y lo que estamos construyendo.",
      main: "Sitio principal",
      portfolio: "Portafolio",
      blog: "Dev Blog"
    },
    contact: {
      eyebrow: "Contacto",
      title: "Conversemos",
      description: "¿Tienes una idea de app, página web o juego? Escríbenos y vemos cómo llevarla a producción.",
      email: { label: "Correo" },
      location: { label: "Ubicación", value: "Puerto Rico" },
      hours: { label: "Horario", value: "Lunes a Viernes · 9:00 AM – 6:00 PM" },
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        project: "Tipo de proyecto",
        typeGame: "Videojuego",
        typeOther: "Otro",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos brevemente tu idea.",
        submit: "Enviar mensaje",
        subject: "Nuevo proyecto"
      }
    },
    footer: {
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    meta: {
      title: "FlowTech | Technology from Puerto Rico"
    },
    nav: {
      about: "About",
      product: "Services",
      process: "Process",
      solutions: "Use cases",
      resources: "Links",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Technology studio · Puerto Rico",
      title1: "We build digital experiences that",
      title2: "flow.",
      description: "We design and develop mobile apps, modern websites, and video games with high quality and performance.",
      btn: {
        whatWeDo: "See services",
        contact: "Start your project"
      },
      meta: {
        apps: "Apps and websites",
        games: "Interactive video games",
        tech: "Made in Puerto Rico"
      }
    },
    about: {
      eyebrow: "About us",
      title: "Technology with detail, from the Caribbean.",
      description: "FlowTech was born in Puerto Rico with the goal of creating digital products that feel fast, polished, and easy to use, without losing sight of creativity and visual detail.",
      mission: {
        title: "Mission",
        text: "Design and develop digital experiences —apps, websites, and games— that make technology feel natural and fluid for people."
      },
      vision: {
        title: "Vision",
        text: "Become one of the most recognized technology and creativity studios in the Caribbean, bringing products from Puerto Rico to the world."
      }
    },
    product: {
      eyebrow: "Services",
      title: "What we do",
      description: "We develop custom digital solutions: from idea and design, to code and launch.",
      apps: {
        title: "Applications & APIs",
        text: "Development of mobile and web applications, with well-designed APIs, stable performance, and modern experiences.",
        l1: "iOS, Android and web",
        l2: "Backends and REST APIs",
        l3: "Integrations and payments"
      },
      web: {
        title: "Websites & platforms",
        text: "Sites and admin panels with professional design, smooth animations, and focus on usability.",
        l1: "Landing pages and sites",
        l2: "Dashboards and admin panels",
        l3: "SEO and performance"
      },
      games: {
        title: "Video games & experiences",
        text: "Game prototypes, interactive experiences, and creative projects for brands or entertainment.",
        l1: "Playable prototypes",
        l2: "Brand experiences",
        l3: "Art and storytelling"
      }
    },
    process: {
      eyebrow: "Process",
      title: "From idea to launch",
      description: "A clear, collaborative process so you always know what stage your project is in.",
      s1: { title: "Discovery", text: "We understand your idea, your users, and your goals." },
      s2: { title: "Design", text: "Wireframes and visual prototypes before writing code." },
      s3: { title: "Development", text: "We build in stages, with frequent demos." },
      s4: { title: "Launch", text: "We ship, measure, and keep improving." }
    },
    solutions: {
      eyebrow: "Who it's for",
      title: "Use cases",
      description: "We adapt FlowTech technology to different types of projects and teams.",
      startups: {
        tag: "MVP",
        title: "Startups & entrepreneurs",
        text: "Fast MVPs, landing pages, and interactive prototypes to validate ideas without losing visual quality."
      },
      brands: {
        tag: "Brand",
        title: "Companies & brands",
        text: "Websites, microsites, and interactive experiences that reinforce brand identity."
      },
      creative: {
        tag: "Creative",
        title: "Creative projects",
        text: "Video games, immersive experiences, and experimental projects focused on art and storytelling."
      }
    },
    resources: {
      eyebrow: "Resources",
      title: "Official links",
      description: "Explore our work, our code, and what we're building.",
      main: "Main site",
      portfolio: "Portfolio",
      blog: "Dev Blog"
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      description: "Do you have an idea for an app, website, or game? Write to us and let's see how to bring it to production.",
      email: { label: "Email" },
      location: { label: "Location", value: "Puerto Rico" },
      hours: { label: "Hours", value: "Monday to Friday · 9:00 AM – 6:00 PM" },
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        project: "Project type",
        typeGame: "Video game",
        typeOther: "Other",
        message: "Message",
        messagePlaceholder: "Tell us briefly about your idea.",
        submit: "Send message",
        subject: "New project"
      }
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};

function readStoredLang() {
  try {
    return localStorage.getItem("language");
  } catch (e) {
    return null;
  }
}

let currentLang = readStoredLang() || "es";

function getNestedValue(obj, path) {
  return path.split(".").reduce((o, p) => o && o[p], obj);
}

function translatePage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem("language", lang);
  } catch (e) {}
  document.documentElement.lang = lang;

  const titleText = getNestedValue(translations[lang], "meta.title");
  if (titleText) {
    document.title = titleText;
  }

  // Traducir todos los elementos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = getNestedValue(translations[lang], element.getAttribute("data-i18n"));
    if (text) {
      element.textContent = text;
    }
  });

  // Traducir placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const text = getNestedValue(translations[lang], element.getAttribute("data-i18n-placeholder"));
    if (text) {
      element.placeholder = text;
    }
  });

  document.getElementById("lang-toggle").textContent = lang === "es" ? "EN" : "ES";
}

translatePage(currentLang);

document.getElementById("lang-toggle").addEventListener("click", () => {
  translatePage(currentLang === "es" ? "en" : "es");
});

// =========================
// Header al hacer scroll
// =========================
const header = document.getElementById("header");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// =========================
// Menú móvil
// =========================
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menu-toggle");

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  header.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}

menuToggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// =========================
// Link activo en el nav según la sección visible
// =========================
const navLinks = [...nav.querySelectorAll("a")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

// =========================
// Animación de entrada al hacer scroll
// =========================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll("[data-reveal]").forEach((el) => {
  // Escalonar elementos hermanos (cards en una misma fila)
  const siblings = [...el.parentElement.children].filter((c) => c.hasAttribute("data-reveal"));
  el.style.setProperty("--delay", siblings.indexOf(el) * 0.08 + "s");
  revealObserver.observe(el);
});

// =========================
// Brillo que sigue el cursor en las cards de servicios
// =========================
document.querySelectorAll(".ft-service").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - rect.left + "px");
    card.style.setProperty("--my", e.clientY - rect.top + "px");
  });
});

// =========================
// Formulario de contacto: abre el correo con el mensaje listo
// =========================
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = `${getNestedValue(translations[currentLang], "contact.form.subject")} (${data.get("tipo")}) – ${data.get("nombre")}`;
  const body = `${data.get("mensaje")}\n\n— ${data.get("nombre")} · ${data.get("email")}`;
  window.location.href = `mailto:contacto@flowtech.pr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
