export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" }
      });
    }
    try {
      const { name, email, message } = await request.json();
      const text = `📩 New Portfolio Message\n\n👤 Name: ${name}\n📧 Email: ${email}\n\n💬 Message:\n${message}`;
      const url = `https://api.telegram.org/bot${env.TG_TOKEN}/sendMessage`;
      
      const res = await fetch(url, {
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
