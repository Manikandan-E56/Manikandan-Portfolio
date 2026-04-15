import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const contactInfo = [
  { icon: HiMail, label: "Email", value: "emanigandan58@gmail.com", href: "mailto:emanigandan58@gmail.com" },
  { icon: HiLocationMarker, label: "Location", value: "Coimbatore, Tamil Nadu", href: "#" },
];

const socials = [
  { Icon: AiFillGithub, href: "https://github.com/manikandan-e56", label: "GitHub", color: "#e2e8f0" },
  { Icon: AiFillLinkedin, href: "https://www.linkedin.com/in/manikandan-e-manie/", label: "LinkedIn", color: "#0ea5e9" },
  { Icon: SiLeetcode, href: "https://leetcode.com/u/manikandan-e/", label: "LeetCode", color: "#f59e0b" },
];

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [focused, setFocused] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_js471rj",
        "template_154p6fr",
        form.current,
        "Y_-QvcP4nNEEORa6x"
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => {
          setStatus("error");
        }
      )
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus(null), 4000);
      });
  };

  const inputStyle = (name) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    background: "rgba(13, 18, 36, 0.8)",
    border: focused === name
      ? "1px solid rgba(124, 58, 237, 0.6)"
      : "1px solid rgba(255,255,255,0.07)",
    color: "#e2e8f0",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: focused === name
      ? "0 0 0 3px rgba(124, 58, 237, 0.12), 0 0 20px rgba(124, 58, 237, 0.1)"
      : "none",
  });

  return (
    <div className="container mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-sm font-mono uppercase tracking-widest mb-3" style={{ color: "#06b6d4" }}>
          — Let's Talk
        </p>
        <h2
          className="text-4xl lg:text-5xl font-bold section-heading"
          style={{
            background: "linear-gradient(135deg, #ffffff, #67e8f9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Contact Me
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-sm" style={{ color: "#8892b0" }}>
          Feel free to reach out — whether it's a project, an opportunity, or just a hello!
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 items-start">
        {/* Left — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 flex flex-col gap-5"
        >
          <div
            className="p-6 rounded-2xl"
            style={{
              background: "rgba(13, 18, 36, 0.7)",
              border: "1px solid rgba(124, 58, 237, 0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            <h3 className="text-lg font-bold text-white mb-5">Get In Touch</h3>
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(124, 58, 237, 0.15)",
                      border: "1px solid rgba(124, 58, 237, 0.25)",
                    }}
                  >
                    <Icon size={16} style={{ color: "#a78bfa" }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "#4a5568" }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: "#ccd6f6" }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "#4a5568" }}>Find Me On</p>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "#8892b0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = color;
                      e.currentTarget.style.background = `${color}15`;
                      e.currentTarget.style.borderColor = `${color}40`;
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#8892b0";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Availability card */}
          <div
            className="p-5 rounded-2xl"
            style={{
              background: "rgba(34, 197, 94, 0.06)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-semibold" style={{ color: "#4ade80" }}>Available for work</span>
            </div>
            <p className="text-xs" style={{ color: "#8892b0" }}>
              I'm currently open to freelance and full-time opportunities.
            </p>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-3"
        >
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "rgba(13, 18, 36, 0.7)",
              border: "1px solid rgba(124, 58, 237, 0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8892b0" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    required
                    style={inputStyle("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8892b0" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="your@email.com"
                    required
                    style={inputStyle("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8892b0" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or just say hi..."
                  rows="5"
                  required
                  style={{ ...inputStyle("message"), resize: "none" }}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  boxShadow: "0 0 25px rgba(124, 58, 237, 0.35)",
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.boxShadow = "0 0 40px rgba(124, 58, 237, 0.6), 0 0 60px rgba(6,182,212,0.2)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 25px rgba(124, 58, 237, 0.35)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {loading ? (
                  <div
                    className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white"
                    style={{ animation: "spin 0.8s linear infinite" }}
                  />
                ) : (
                  <>
                    Send Message <RiSendPlaneFill size={16} />
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm py-2 px-4 rounded-lg"
                  style={{ background: "rgba(34, 197, 94, 0.1)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }}
                >
                  ✅ Message sent successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm py-2 px-4 rounded-lg"
                  style={{ background: "rgba(239, 68, 68, 0.1)", color: "#f87171", border: "1px solid rgba(239,68,68,0.2)" }}
                >
                  ❌ Failed to send. Please try again.
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
