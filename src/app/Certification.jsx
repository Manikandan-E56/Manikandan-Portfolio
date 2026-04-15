import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiCheckBadge } from "react-icons/hi2";
import { FaExternalLinkAlt } from "react-icons/fa";
import * as pdfjsLib from "pdfjs-dist";
import PdfjsWorker from "pdfjs-dist/build/pdf.worker?url";

// Point pdfjs to the local bundled worker (works correctly with Vite + pdfjs v5)
pdfjsLib.GlobalWorkerOptions.workerSrc = PdfjsWorker;

// ── PDF Thumbnail Component ────────────────────────────────────────────────────
function PdfThumbnail({ url, color }) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);

    const render = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(url).promise;
        const page = await pdf.getPage(1);

        // Fit the page into the card width (approx 400px wide card → scale accordingly)
        const desiredWidth = 400;
        const nativeViewport = page.getViewport({ scale: 1 });
        const scale = desiredWidth / nativeViewport.width;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        if (!canvas || cancelled) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const ctx = canvas.getContext("2d");
        await page.render({ canvasContext: ctx, viewport }).promise;

        if (!cancelled) setLoading(false);
      } catch {
        if (!cancelled) setError(true);
      }
    };

    render();
    return () => { cancelled = true; };
  }, [url]);

  if (error) return null;

  return (
    <>
      {loading && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${color}25, rgba(13,18,36,0.95))` }}
        >
          <div
            className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
            style={{ borderColor: `${color}60`, borderTopColor: "transparent" }}
          />
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: loading ? "none" : "block",
        }}
      />
    </>
  );
}

// ── Certificate Data ───────────────────────────────────────────────────────────
const certificates = [
  {
    image: "./img/java Basic.jpg",
    title: "Java",
    issuer: "HackerRank",
    date: "Aug 2024",
    color: "#ef4444",
    emoji: "☕",
  },
  {
    image: "./img/Udemy.jpg",
    title: "Web Development",
    issuer: "Udemy",
    date: "Dec 2024",
    color: "#a855f7",
    emoji: "🌐",
  },
  {
    image: "./img/Backend.png",
    title: "Backend Development",
    issuer: "Coursera",
    date: "Mar 2025",
    color: "#06b6d4",
    emoji: "⚙️",
  },
  {
    image: "./img/Frontend Developer.png",
    title: "Frontend Development",
    issuer: "HackerRank",
    date: "Mar 2025",
    color: "#f97316",
    emoji: "🎨",
  },
  {
    image: "./img/css Basic.png",
    title: "CSS",
    issuer: "HackerRank",
    date: "Mar 2025",
    color: "#3b82f6",
    emoji: "🎭",
  },
  {
    image: "./img/JavaScript.png",
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "Mar 2025",
    color: "#eab308",
    emoji: "⚡",
  },
  {
    pdf: `${import.meta.env.BASE_URL}img/Wipro.pdf`,
    title: "Wipro TalentNext",
    issuer: "Wipro",
    date: "Jul 2025",
    color: "#00b4d8",
    emoji: "🏢",
    verifyUrl: `${import.meta.env.BASE_URL}img/Wipro.pdf`,
  },
];

const issuerColors = {
  HackerRank: "#00ea64",
  Udemy: "#a435f0",
  Coursera: "#0056d2",
  Wipro: "#00b4d8",
};

// ── Main Component ─────────────────────────────────────────────────────────────
export default function Certification() {
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
        <p className="text-sm font-mono uppercase tracking-widest mb-3" style={{ color: "#a78bfa" }}>
          — Credentials
        </p>
        <h2
          className="text-4xl lg:text-5xl font-bold section-heading"
          style={{
            background: "linear-gradient(135deg, #ffffff, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Certifications
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-sm" style={{ color: "#8892b0" }}>
          Achievements and certifications that validate my skills and knowledge.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group rounded-2xl overflow-hidden relative"
            style={{
              background: "rgba(13, 18, 36, 0.7)",
              border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(16px)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${cert.color}40`;
              e.currentTarget.style.boxShadow = `0 20px 60px ${cert.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 z-10"
              style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
            />

            {/* Image / PDF Preview */}
            <div className="relative h-44 overflow-hidden">
              {/* Image certificates */}
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.background = `linear-gradient(135deg, ${cert.color}25, rgba(13,18,36,0.95))`;
                  }}
                />
              )}

              {/* PDF certificates — rendered as canvas thumbnail */}
              {cert.pdf && (
                <div className="w-full h-full relative overflow-hidden">
                  <PdfThumbnail url={cert.pdf} color={cert.color} />
                  {/* Subtle scale on hover via CSS class on parent group */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ pointerEvents: "none" }}
                  />
                </div>
              )}

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(13,18,36,0.9) 0%, transparent 60%)" }}
              />

              {/* Emoji Badge */}
              <div
                className="absolute top-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center text-xl z-10"
                style={{
                  background: "rgba(13, 18, 36, 0.8)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${cert.color}30`,
                }}
              >
                {cert.emoji}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-base font-bold text-white mb-3">{cert.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <HiCheckBadge size={14} style={{ color: issuerColors[cert.issuer] || cert.color }} />
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${issuerColors[cert.issuer] || cert.color}15`,
                      color: issuerColors[cert.issuer] || cert.color,
                      border: `1px solid ${issuerColors[cert.issuer] || cert.color}30`,
                    }}
                  >
                    {cert.issuer}
                  </span>
                </div>
                <span className="text-xs" style={{ color: "#4a5568" }}>{cert.date}</span>
              </div>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-semibold transition-all duration-300"
                  style={{
                    background: `${cert.color}18`,
                    border: `1px solid ${cert.color}40`,
                    color: cert.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${cert.color}30`;
                    e.currentTarget.style.boxShadow = `0 4px 15px ${cert.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${cert.color}18`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <FaExternalLinkAlt size={10} />
                  View Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
