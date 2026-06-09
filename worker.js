export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({ success: false, error: "Method not allowed" }),
        { status: 405, headers: { "Content-Type": "application/json" } }
      );
    }

    try {
      const { name, email, message, turnstileToken } = await request.json();

      if (!name || !email || !message || !turnstileToken) {
        return new Response(
          JSON.stringify({ success: false, error: "All fields are required and CAPTCHA must be completed" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      // Verify Turnstile token server-side
      const captchaRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      });

      const captchaData = await captchaRes.json();
      if (!captchaData.success) {
        return new Response(
          JSON.stringify({ success: false, error: "CAPTCHA verification failed" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      // Block known disposable email domains
      const blockedDomains = [
        "mailinator.com",
        "10minutemail.com",
        "guerrillamail.com",
        "temp-mail.org",
        "tempmail.com",
        "mailticking.com",
        "fakeinbox.com",
      ];
      const domain = email.split("@")[1]?.toLowerCase();
      if (blockedDomains.includes(domain)) {
        return new Response(
          JSON.stringify({ success: false, error: "Disposable emails are not allowed" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      // Abstract Email Reputation API validation
      const reputationRes = await fetch(
        `https://emailreputation.abstractapi.com/v1/?api_key=${env.ABSTRACT_API_KEY}&email=${encodeURIComponent(email)}`
      );
      const reputation = await reputationRes.json();
      const deliverability = reputation.email_deliverability;

      if (!deliverability?.is_format_valid) {
        return new Response(
          JSON.stringify({ success: false, error: "Invalid email format" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      if (!deliverability?.is_smtp_valid) {
        return new Response(
          JSON.stringify({ success: false, error: "Email mailbox could not be verified" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      // Submit to Web3Forms
      const formData = new FormData();
      formData.append("access_key", env.WEB3FORMS_KEY);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("subject", "Portfolio Contact Form");

      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await web3Res.json();
      return new Response(JSON.stringify(result), { headers: { "Content-Type": "application/json" } });

    } catch (err) {
      return new Response(
        JSON.stringify({ success: false, error: err.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  },
};