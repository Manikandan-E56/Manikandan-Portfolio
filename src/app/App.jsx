import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import { HiArrowDown } from "react-icons/hi";

// Components
import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Certification from "./Certification";
import Achievements from "./Achievements";
import Context from "./Contact";
import cv from "../assets/files/Resume.pdf";
import profileImg from "../assets/Profile.png";

// ─── Particle Canvas ─────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.floor((window.innerWidth * window.innerHeight) / 12000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: "none" }}
    />
  );
}

// ─── Typewriter ───────────────────────────────────────────────────────────────
const roles = [
  "Frontend Developer",
  "Full Stack Engineer",
  "UI/UX Enthusiast",
  "React Specialist",
];

function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (paused) {
      timeout = setTimeout(() => {
        setPaused(false);
        setDeleting(true);
      }, 1800);
      return () => clearTimeout(timeout);
    }

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx, paused]);

  return (
    <span className="inline-flex items-baseline">
      <span style={{ color: "#06b6d4" }}>{displayed}</span>
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1.2em",
          background: "#06b6d4",
          marginLeft: "3px",
          verticalAlign: "text-bottom",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

// ─── Scroll Progress ─────────────────────────────────────────────────────────
function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      id="scroll-progress"
      style={{ width: `${width}%` }}
    />
  );
}

// ─── Cursor Glow ─────────────────────────────────────────────────────────────
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div id="cursor-glow" ref={ref} />;
}

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  const socials = [
    { Icon: AiFillGithub, href: "https://github.com/manikandan-e56", label: "GitHub" },
    { Icon: AiFillLinkedin, href: "https://www.linkedin.com/in/manikandan-e-manie/", label: "LinkedIn" },
    { Icon: BiLogoGmail, href: "mailto:emanigandan58@gmail.com", label: "Gmail" },
    { Icon: SiLeetcode, href: "https://leetcode.com/u/manikandan-e/", label: "LeetCode" },
  ];

  return (
    <div style={{ background: "#050816", color: "#e2e8f0", minHeight: "100vh", fontFamily: '"DM Sans", sans-serif' }}>
      <ScrollProgress />
      <CursorGlow />
      <NavBar />

      <div>

        {/* ── Hero ── */}
        <section id="Home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-0">
          <ParticleCanvas />

          {/* Aurora Orbs */}
          <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1, pointerEvents: "none" }}>
            <div
              className="absolute rounded-full"
              style={{
                width: "600px",
                height: "600px",
                top: "-15%",
                right: "-10%",
                background: "radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, transparent 70%)",
                animation: "aurora 12s ease-in-out infinite",
                filter: "blur(40px)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: "500px",
                height: "500px",
                bottom: "-10%",
                left: "-8%",
                background: "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)",
                animation: "aurora 16s ease-in-out infinite reverse",
                filter: "blur(40px)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: "300px",
                height: "300px",
                top: "40%",
                left: "30%",
                background: "radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)",
                animation: "aurora 10s ease-in-out infinite 3s",
                filter: "blur(30px)",
              }}
            />
          </div>

          <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center" style={{ zIndex: 2 }}>
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-mono uppercase tracking-widest mb-3"
                style={{ color: "#a78bfa" }}
              >
                👋 Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-6xl lg:text-8xl font-bold mb-3 leading-none"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #67e8f9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Manikandan
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl lg:text-3xl font-semibold mb-6"
                style={{ color: "#8892b0" }}
              >
                <Typewriter />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
                style={{ color: "#8892b0" }}
              >
                An enthusiastic developer passionate about creating efficient, user-friendly web applications and continuously improving technical and problem-solving skills
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-8"
              >
                <a
                  href={cv}
                  download="Manikandan_CV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow px-8 py-3 rounded-xl text-white font-semibold text-sm relative z-10 flex items-center gap-2"
                  style={{ boxShadow: "0 0 25px rgba(124, 58, 237, 0.4)" }}
                >
                  ⬇️ Download CV
                </a>
                <a
                  href="#About"
                  className="px-8 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-300"
                  style={{
                    border: "1px solid rgba(124, 58, 237, 0.4)",
                    color: "#a78bfa",
                    background: "rgba(124, 58, 237, 0.08)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(124, 58, 237, 0.2)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(124, 58, 237, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(124, 58, 237, 0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Explore Work
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex gap-3 justify-center lg:justify-start"
              >
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#8892b0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(124, 58, 237, 0.2)";
                      e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.5)";
                      e.currentTarget.style.color = "#a78bfa";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 10px 20px rgba(124, 58, 237, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "#8892b0";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="flex justify-center items-center"
            >
              <div className="relative">

                {/* Ambient glow blobs behind the card */}
                <div
                  className="absolute -inset-6 rounded-3xl"
                  style={{
                    background: "radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.35) 0%, transparent 60%)",
                    filter: "blur(24px)",
                    zIndex: 0,
                  }}
                />
                <div
                  className="absolute -inset-6 rounded-3xl"
                  style={{
                    background: "radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.25) 0%, transparent 60%)",
                    filter: "blur(24px)",
                    zIndex: 0,
                  }}
                />

                {/* Gradient border layer */}
                <div
                  className="relative rounded-3xl p-0.5"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.8) 0%, rgba(6,182,212,0.6) 50%, rgba(236,72,153,0.5) 100%)",
                    zIndex: 1,
                  }}
                >
                  {/* Inner card */}
                  <div
                    className="rounded-3xl overflow-hidden"
                    style={{
                      width: "300px",
                      height: "340px",
                      background: "rgba(13, 18, 36, 0.6)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <img
                      src={profileImg}
                      alt="Manikandan"
                      className="w-full h-full object-cover object-top transition-transform duration-700"
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                </div>

                {/* Floating Badge — Role */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-6 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold"
                  style={{
                    background: "rgba(13, 18, 36, 0.92)",
                    border: "1px solid rgba(124, 58, 237, 0.4)",
                    backdropFilter: "blur(12px)",
                    color: "#a78bfa",
                    boxShadow: "0 8px 32px rgba(124, 58, 237, 0.25)",
                    zIndex: 2,
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>💻</span>
                  <div>
                    <div style={{ color: "#a78bfa", fontWeight: 700 }}>Full Stack</div>
                    <div style={{ color: "#6b7280", fontSize: "0.65rem" }}>Developer</div>
                  </div>
                </motion.div>

                {/* Floating Badge — Projects */}
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-5 -right-6 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold"
                  style={{
                    background: "rgba(13, 18, 36, 0.92)",
                    border: "1px solid rgba(6, 182, 212, 0.4)",
                    backdropFilter: "blur(12px)",
                    color: "#67e8f9",
                    boxShadow: "0 8px 32px rgba(6, 182, 212, 0.2)",
                    zIndex: 2,
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>🚀</span>
                  <div>
                    <div style={{ color: "#67e8f9", fontWeight: 700 }}>7+ Projects</div>
                    <div style={{ color: "#6b7280", fontSize: "0.65rem" }}>Delivered</div>
                  </div>
                </motion.div>

                {/* Floating Badge — Available */}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -right-8 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold"
                  style={{
                    background: "rgba(13, 18, 36, 0.92)",
                    border: "1px solid rgba(34, 197, 94, 0.4)",
                    backdropFilter: "blur(12px)",
                    color: "#4ade80",
                    boxShadow: "0 8px 24px rgba(34, 197, 94, 0.15)",
                    zIndex: 2,
                    transform: "translateY(-50%)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#4ade80",
                      boxShadow: "0 0 6px #4ade80",
                      animation: "blink 1.5s step-end infinite",
                    }}
                  />
                  Available
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ zIndex: 2 }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "#4a5568" }}>Scroll</span>
            <div
              className="w-6 h-10 rounded-full flex items-start justify-center p-1.5"
              style={{ border: "1px solid rgba(124, 58, 237, 0.3)" }}
            >
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 rounded-full"
                style={{ background: "linear-gradient(180deg, #7c3aed, #06b6d4)" }}
              />
            </div>
          </motion.div>
        </section>

        {/* ── About ── */}
        <section id="About" className="py-28 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at top, rgba(124,58,237,0.05) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <About />
        </section>

        {/* ── Projects ── */}
        <section id="Projects" className="py-28 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at bottom right, rgba(6,182,212,0.05) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <Projects />
        </section>

        {/* ── Certifications ── */}
        <section id="Certification" className="py-28 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at top left, rgba(124,58,237,0.05) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <Certification />
        </section>

        {/* ── Achievements ── */}
        <section id="Achievements" className="py-28 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at bottom left, rgba(251,191,36,0.05) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <Achievements />
        </section>

        {/* ── Contact ── */}
        <section id="Contact" className="py-28 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, rgba(6,182,212,0.04) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <Context />
        </section>

        {/* ── Footer ── */}
        <footer
          className="py-10 text-center"
          style={{
            borderTop: "1px solid rgba(124,58,237,0.1)",
            background: "rgba(13, 18, 36, 0.5)",
          }}
        >
          <p
            className="text-sm"
            style={{ color: "#4a5568" }}
          >
            © 2025 — Crafted with ❤️ by{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 600,
              }}
            >
              Manikandan E
            </span>
          </p>
        </footer>
      </div>

      {/* ── Spin-reverse keyframe ── */}
      <style>{`
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes aurora {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          33% { transform: translate(4%, 8%) scale(1.1); opacity: 0.7; }
          66% { transform: translate(-4%, 4%) scale(0.95); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}

export default App;
