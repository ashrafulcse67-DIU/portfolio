// Netlify Function: receives form data and forwards it to Telegram.
// Token and Chat ID come from Netlify Environment Variables (never in code).
exports.handler = async (event) => {
  const headers = { "Content-Type": "application/json" };
  const reply = (code, obj) => ({ statusCode: code, headers, body: JSON.stringify(obj) });

  if (event.httpMethod !== "POST") return reply(405, { ok: false, error: "Method not allowed" });

  const TOKEN = process.env.TG_TOKEN;
  const CHAT = process.env.TG_CHAT;
  if (!TOKEN || !CHAT) return reply(500, { ok: false, error: "Server not configured" });

  let data;
  try { data = JSON.parse(event.body || "{}"); } catch (e) { return reply(400, { ok: false, error: "Bad request" }); }

  const name = String(data.name || "").trim();
  const email = String(data.email || "").trim();
  const message = String(data.message || "").trim();

  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) return reply(400, { ok: false, error: "Invalid input" });
  if (name.length > 100 || email.length > 150 || message.length > 3000) return reply(400, { ok: false, error: "Too long" });

  const text = "📩 New Portfolio Message\n\n👤 Name: " + name + "\n📧 Email: " + email + "\n\n💬 Message:\n" + message;

  try {
    const r = await fetch("https://api.telegram.org/bot" + TOKEN + "/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT, text })
    });
    const j = await r.json();
    if (!j.ok) return reply(502, { ok: false, error: "Telegram error" });
    return reply(200, { ok: true });
  } catch (e) {
    return reply(502, { ok: false, error: "Network error" });
  }
};
