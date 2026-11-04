// Función de servidor (Vercel): recibe el formulario de contacto y envía el email con Resend.
// La clave de Resend vive solo aquí, en el servidor; nunca debe estar en script.js.
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_TO = "flowtech025@gmail.com";
const DEFAULT_FROM = "FlowTech <onboarding@resend.dev>";

const PROJECT_TYPES = ["App", "Web", "Videojuego", "Otro"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = { nombre: 120, email: 254, mensaje: 5000 };

function clean(value, maxLength) {
  if (typeof value !== "string") return null;
  const text = value.trim();
  return text && text.length <= maxLength ? text : null;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmail({ nombre, email, tipo, mensaje }) {
  return {
    // El nombre lo escribe el visitante: se le quitan los saltos de línea antes de ponerlo en el asunto
    subject: `Nuevo proyecto (${tipo}) – ${nombre.replace(/\s+/g, " ")}`,
    reply_to: email,
    text: `Nombre: ${nombre}\nEmail: ${email}\nTipo de proyecto: ${tipo}\n\n${mensaje}`,
    html: `
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Tipo de proyecto:</strong> ${escapeHtml(tipo)}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap">${escapeHtml(mensaje)}</p>
    `
  };
}

export default {
  async fetch(request) {
    if (request.method !== "POST") {
      return Response.json({ error: "method_not_allowed" }, { status: 405, headers: { Allow: "POST" } });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "invalid_body" }, { status: 400 });
    }
    if (!body || typeof body !== "object") {
      return Response.json({ error: "invalid_body" }, { status: 400 });
    }

    // Campo trampa lleno = bot: se responde como si nada, pero no se envía el email
    if (body._honey) {
      return Response.json({ ok: true });
    }

    const nombre = clean(body.nombre, MAX_LENGTH.nombre);
    const email = clean(body.email, MAX_LENGTH.email);
    const mensaje = clean(body.mensaje, MAX_LENGTH.mensaje);
    const tipo = PROJECT_TYPES.includes(body.tipo) ? body.tipo : null;

    if (!nombre || !email || !EMAIL_PATTERN.test(email) || !mensaje || !tipo) {
      return Response.json({ error: "invalid_fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Falta la variable de entorno RESEND_API_KEY");
      return Response.json({ error: "not_configured" }, { status: 500 });
    }

    try {
      const response = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
          to: process.env.CONTACT_TO_EMAIL || DEFAULT_TO,
          ...buildEmail({ nombre, email, tipo, mensaje })
        }),
        signal: AbortSignal.timeout(10000)
      });

      if (!response.ok) {
        console.error("Resend rechazó el envío:", response.status, await response.text());
        return Response.json({ error: "send_failed" }, { status: 502 });
      }
    } catch (err) {
      console.error("No se pudo contactar a Resend:", err);
      return Response.json({ error: "send_failed" }, { status: 502 });
    }

    return Response.json({ ok: true });
  }
};
