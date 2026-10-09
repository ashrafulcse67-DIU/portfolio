// Cloudflare Pages "advanced mode" worker (works with drag-and-drop upload).
// POST /api/send-message -> forwards the contact form to Telegram.
// Everything else -> normal static files of the site.
// Token and Chat ID come from Cloudflare Environment Variables: TG_TOKEN, TG_CHAT (never in code).

const json = (code, obj) =>
  new Response(JSON.stringify(obj), {
    status: code,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

async function sendMessage(request, env) {
  if (request.method !== "POST") return json(405, { ok: false, error: "Method not allowed" });

  const TOKEN = env.TG_TOKEN;
  const CHAT = env.TG_CHAT;
  if (!TOKEN || !CHAT) return json(500, { ok: false, error: "Server not configured" });

  let data;
  try { data = await request.json(); } catch (e) { return json(400, { ok: false, error: "Bad request" }); }

  const name = String((data && data.name) || "").trim();
  const email = String((data && data.email) || "").trim();
  const message = String((data && data.message) || "").trim();

  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) return json(400, { ok: false, error: "Invalid input" });
  if (name.length > 100 || email.length > 150 || message.length > 3000) return json(400, { ok: false, error: "Too long" });

  const text = "📩 New Portfolio Message\n\n👤 Name: " + name + "\n📧 Email: " + email + "\n\n💬 Message:\n" + message;

  try {
    const r = await fetch("https://api.telegram.org/bot" + TOKEN + "/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT, text }),
    });
    const j = await r.json();
    if (!j.ok) return json(502, { ok: false, error: "Telegram error" });
    return json(200, { ok: true });
  } catch (e) {
    return json(502, { ok: false, error: "Network error" });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/send-message") return sendMessage(request, env);
    return env.ASSETS.fetch(request);
  },
};
