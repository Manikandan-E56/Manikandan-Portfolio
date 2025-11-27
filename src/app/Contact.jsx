import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending for now or use actual emailjs
    emailjs
      .sendForm(
        "service_js471rj",
        "template_154p6fr",
        form.current,
        "Y_-QvcP4nNEEORa6x"
      )
      .then(
        (result) => {
          setStatus("success");
          e.target.reset();
        },
        (error) => {
          setStatus("error");
        }
      )
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus(null), 3000);
      });
  };

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Contact Me</h2>
        <p className="text-dark-muted text-lg max-w-2xl mx-auto">
          Feel free to contact me by submitting the form below and I will get back
          to you as soon as possible.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto bg-dark-card p-8 rounded-2xl border border-white/5 shadow-xl">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-600 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              required
              className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-600 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-600 transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                Submit <RiSendPlaneFill />
              </>
            )}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center mt-4">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-4">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
