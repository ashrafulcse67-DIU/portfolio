export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Jodi request /api/send-message path-e na jay, tahote normal website assets/files load korbe
    if (url.pathname !== "/api/send-message") {
      return env.ASSETS.fetch(request);
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" }
      });
    }

    try {
      const { name, email, message } = await request.json();
      const text = `📩 New Portfolio Message\n\n👤 Name: ${name}\n📧 Email: ${email}\n\n💬 Message:\n${message}`;
      const telegramUrl = `https://api.telegram.org/bot${env.TG_TOKEN}/sendMessage`;
      
      const res = await fetch(telegramUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: env.TG_CHAT, text })
      });
      
      const responseText = await res.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        data = { ok: false, error: responseText };
      }

      return new Response(JSON.stringify(data), {
        status: res.status,
        headers: { "Content-Type": "application/json" }
      });
    } catch (err) {
      return new Response(JSON.stringify({ ok: false, error: err.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
};
