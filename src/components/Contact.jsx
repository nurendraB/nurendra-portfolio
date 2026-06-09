import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Turnstile } from "@marsidev/react-turnstile";

const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [token, setToken] = useState("");

  const blockedDomains = [
    "mailinator.com",
    "10minutemail.com",
    "guerrillamail.com",
    "temp-mail.org",
    "tempmail.com",
    "mailticking.com",
    "fakeinbox.com",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const form = e.target;
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      turnstileToken: token,
    };

    const domain = data.email.split("@")[1]?.toLowerCase();
    if (!domain || blockedDomains.includes(domain)) {
      setResult("❌ Disposable or temporary emails are not allowed.");
      setLoading(false);
      return;
    }

    if (!token) {
      setResult("❌ Please complete the CAPTCHA.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(import.meta.env.VITE_WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.success) {
        setResult("✅ Message sent successfully!");
        form.reset();
        setToken("");
      } else {
        setResult(`❌ ${json.error || "Unable to send message."}`);
      }
    } catch (err) {
      setResult(`❌ Network or server error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-green-400 uppercase tracking-widest text-sm">Contact</p>
          <h2 className="text-4xl font-bold mt-4">Let's Connect</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Interested in collaborating, discussing cybersecurity, bug bounty findings, security assessments, or opportunities?
            Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a href="mailto:spiderinshell8@duck.com" className="flex items-center gap-4 hover:text-green-400 transition">
                <FaEnvelope className="text-green-400 text-xl" /><span>Email</span>
              </a>
              <a href="https://github.com/nurendraB" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-green-400 transition">
                <FaGithub className="text-green-400 text-xl" /><span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/nurendra-bhandarigal/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-green-400 transition">
                <FaLinkedin className="text-green-400 text-xl" /><span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="name" placeholder="Your Name" required minLength={2} className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:border-green-500" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:border-green-500" />
              <textarea name="message" rows={6} placeholder="Your Message" required minLength={10} className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:border-green-500" />

              {/* Turnstile CAPTCHA */}
              <div className="turnstile">
                <Turnstile
                  siteKey={siteKey}
                  onSuccess={(token) => setToken(token)}
                  options={{ theme: "dark" }}
                />
              </div>

              <button type="submit" disabled={loading} className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-50 transition py-4 rounded-xl font-medium">
                {loading ? "Sending..." : "Send Message"}
              </button>
              {result && <div className="text-center mt-4 text-sm text-gray-200">{result}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}