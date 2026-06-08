export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return Response.json(
        { success: false, error: "Method not allowed" },
        { status: 405 }
      );
    }

    try {
      const { name, email, message } = await request.json();

      if (!name || !email || !message) {
        return Response.json(
          { success: false, error: "All fields are required" },
          { status: 400 }
        );
      }

      // Email validation via Abstract API
      const validationRes = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${env.ABSTRACT_API_KEY}&email=${encodeURIComponent(email)}`
      );
      const validationData = await validationRes.json();

      if (validationData.is_disposable_email?.value === true) {
        return Response.json(
          { success: false, error: "Disposable emails are not allowed" },
          { status: 400 }
        );
      }

      // Submit to Web3Forms securely
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
      return Response.json(result);
    } catch (error) {
      return Response.json({ success: false, error: error.message }, { status: 500 });
    }
  },
};