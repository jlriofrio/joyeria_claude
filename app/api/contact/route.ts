import { Resend } from "resend";

const fromEmail =
  process.env.RESEND_FROM_EMAIL ?? "Aydee Orfebre <onboarding@resend.dev>";
const recipients = (
  process.env.CONTACT_RECIPIENTS ??
  "jlriofrio@gmail.com,lamirimu@gmail.com,auramariacr@hotmail.com"
)
  .split(",")
  .map((email) => email.trim())
  .filter(Boolean);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, email, mensaje, telefono, interes } = body;

    if (
      typeof nombre !== "string" ||
      typeof email !== "string" ||
      typeof mensaje !== "string"
    ) {
      return Response.json({ error: "Datos incompletos" }, { status: 400 });
    }

    const cleanNombre = nombre.trim();
    const cleanEmail = email.trim();
    const cleanMensaje = mensaje.trim();

    if (!cleanNombre || !isValidEmail(cleanEmail) || !cleanMensaje) {
      return Response.json({ error: "Datos inválidos" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || recipients.length === 0) {
      console.error("Configuración de correo incompleta");
      return Response.json(
        { error: "Servicio de correo no configurado" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const safeNombre = escapeHtml(cleanNombre);
    const safeEmail = escapeHtml(cleanEmail);
    const safeMensaje = escapeHtml(cleanMensaje).replace(/\n/g, "<br />");
    const safeTelefono = telefono ? escapeHtml(String(telefono).trim()) : null;
    const safeInteres = interes ? escapeHtml(String(interes).trim()) : null;

    const extraRows = [
      safeTelefono
        ? `<tr><td style="padding:0 60px 25px 60px;"><div style="border:1px solid #e5e5e5;border-radius:18px;padding:30px;"><p style="margin:0 0 10px 0;color:#c59d00;font-weight:bold;font-size:14px;letter-spacing:2px;text-transform:uppercase;">Teléfono</p><p style="margin:0;color:#111;font-size:22px;">${safeTelefono}</p></div></td></tr>`
        : "",
      safeInteres
        ? `<tr><td style="padding:0 60px 25px 60px;"><div style="border:1px solid #e5e5e5;border-radius:18px;padding:30px;"><p style="margin:0 0 10px 0;color:#c59d00;font-weight:bold;font-size:14px;letter-spacing:2px;text-transform:uppercase;">Interés</p><p style="margin:0;color:#111;font-size:22px;">${safeInteres}</p></div></td></tr>`
        : "",
    ].join("");

    const data = await resend.emails.send({
      from: fromEmail,
      to: recipients,
      subject: "Nueva solicitud desde la página web",
      html: `
      <!DOCTYPE html>
      <html lang="es">
      <head><meta charset="UTF-8" /><title>Nueva solicitud</title></head>
      <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td align="center">
            <table width="700" cellpadding="0" cellspacing="0" style="background:white;margin-top:40px;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.1);">
              <tr><td style="background:black;padding:50px 20px;text-align:center;">
                <img src="https://joyeria-tau.vercel.app/logo.png" width="180" alt="Aydee Orfebre" style="display:block;margin:auto;" />
              </td></tr>
              <tr><td style="padding:50px 60px 20px 60px;text-align:center;">
                <h1 style="margin:0;color:#111;font-size:42px;">¡Nueva solicitud!</h1>
                <p style="margin-top:20px;color:#666;font-size:20px;line-height:32px;">Se ha comunicado una nueva persona a través de la página web.</p>
              </td></tr>
              <tr><td style="padding:0 60px 25px 60px;">
                <div style="border:1px solid #e5e5e5;border-radius:18px;padding:30px;margin-bottom:0;">
                  <img src="https://joyeria-tau.vercel.app/user.png" width="45" alt="Usuario" style="margin-bottom:15px;" />
                  <p style="margin:0 0 10px 0;color:#c59d00;font-weight:bold;font-size:14px;letter-spacing:2px;text-transform:uppercase;">Nombre</p>
                  <p style="margin:0;color:#111;font-size:28px;font-weight:bold;">${safeNombre}</p>
                </div>
              </td></tr>
              <tr><td style="padding:0 60px 25px 60px;">
                <div style="border:1px solid #e5e5e5;border-radius:18px;padding:30px;">
                  <img src="https://joyeria-tau.vercel.app/mail.png" width="45" alt="Email" style="margin-bottom:15px;" />
                  <p style="margin:0 0 10px 0;color:#c59d00;font-weight:bold;font-size:14px;letter-spacing:2px;text-transform:uppercase;">Correo electrónico</p>
                  <p style="margin:0;color:#111;font-size:24px;">${safeEmail}</p>
                </div>
              </td></tr>
              ${extraRows}
              <tr><td style="padding:0 60px 40px 60px;">
                <div style="border:1px solid #e5e5e5;border-radius:18px;padding:30px;">
                  <p style="margin:0 0 10px 0;color:#c59d00;font-weight:bold;font-size:14px;letter-spacing:2px;text-transform:uppercase;">Mensaje o comentario</p>
                  <p style="margin:0;color:#444;font-size:20px;line-height:34px;">${safeMensaje}</p>
                </div>
              </td></tr>
              <tr><td style="background:#fafafa;padding:40px;text-align:center;border-top:1px solid #eee;">
                <p style="margin:0;color:#888;font-size:16px;">Aydee Orfebre · Joyería artesanal exclusiva</p>
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body>
      </html>`,
    });

    return Response.json(data);
  } catch (error) {
    console.error("ERROR RESEND:", error);
    return Response.json({ error: "Error enviando correo" }, { status: 500 });
  }
}
