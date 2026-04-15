import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import {
  HiHome,
  HiUser,
  HiCode,
  HiAcademicCap,
  HiMail,
  HiMenu,
  HiX,
} from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#Home", icon: HiHome },
  { name: "About", href: "#About", icon: HiUser },
  { name: "Projects", href: "#Projects", icon: HiCode },
  { name: "Certification", href: "#Certification", icon: HiAcademicCap },
  { name: "Contact", href: "#Contact", icon: HiMail },
];

const socials = [
  { Icon: AiFillGithub, href: "https://github.com/manikandan-e56", label: "GitHub" },
  { Icon: AiFillLinkedin, href: "https://www.linkedin.com/in/manikandan-e-manie/", label: "LinkedIn" },
  { Icon: BiLogoGmail, href: "mailto:emanigandan58@gmail.com", label: "Gmail" },
  { Icon: SiLeetcode, href: "https://leetcode.com/u/manikandan-e/", label: "LeetCode" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.name);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 z-50 flex-col py-8 px-5"
        style={{
          background: "rgba(5, 8, 22, 0.85)",
          backdropFilter: "blur(24px)",
          borderRight: "1px solid rgba(124, 58, 237, 0.12)",
        }}
      >
        {/* Logo */}
        <motion.a
          href="#Home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12 group"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg"
            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
          >
            M
          </div>
          <div>
            <p className="font-bold text-white text-sm leading-tight">Manikandan</p>
            <p className="text-xs" style={{ color: "#8892b0" }}>Portfolio</p>
          </div>
        </motion.a>

        {/* Nav Links */}
        <nav className="flex flex-col gap-2 flex-1">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.name;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="relative flex items-center gap-3 px-4 py-3 rounded-xl group transition-all duration-300"
                style={{
                  background: isActive
                    ? "rgba(124, 58, 237, 0.15)"
                    : "transparent",
                  color: isActive ? "#a78bfa" : "#8892b0",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "#e2e8f0";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#8892b0";
                  }
                }}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full"
                    style={{ background: "linear-gradient(180deg, #7c3aed, #06b6d4)" }}
                  />
                )}
                <link.icon size={18} className="flex-shrink-0" />
                <span className="font-medium text-sm">{link.name}</span>
              </motion.a>
            );
          })}
        </nav>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <p className="text-xs uppercase tracking-widest px-4 mb-2" style={{ color: "#4a5568" }}>Connect</p>
          <div className="flex gap-3 px-4">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  color: "#8892b0",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(124, 58, 237, 0.2)";
                  e.currentTarget.style.color = "#a78bfa";
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.color = "#8892b0";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>
      </aside>

      {/* ── Mobile Top Bar ── */}
      <div
        className="lg:hidden fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 py-4"
        style={{
          background: "rgba(5, 8, 22, 0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(124, 58, 237, 0.1)",
        }}
      >
        <a href="#Home" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
          >
            M
          </div>
          <span className="font-bold text-white text-sm">Manikandan</span>
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white p-1"
        >
          {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.6)" }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 h-full w-64 z-50 flex flex-col py-8 px-5"
              style={{
                background: "rgba(5, 8, 22, 0.97)",
                backdropFilter: "blur(24px)",
                borderRight: "1px solid rgba(124, 58, 237, 0.15)",
              }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                >
                  M
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Manikandan</p>
                  <p className="text-xs" style={{ color: "#8892b0" }}>Portfolio</p>
                </div>
              </div>

              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.name;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                      style={{
                        background: isActive ? "rgba(124, 58, 237, 0.15)" : "transparent",
                        color: isActive ? "#a78bfa" : "#8892b0",
                      }}
                    >
                      {isActive && (
                        <div
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full"
                          style={{ background: "linear-gradient(180deg, #7c3aed, #06b6d4)" }}
                        />
                      )}
                      <link.icon size={18} />
                      <span className="font-medium text-sm">{link.name}</span>
                    </a>
                  );
                })}
              </nav>

              <div className="flex gap-3 px-4">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      color: "#8892b0",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
