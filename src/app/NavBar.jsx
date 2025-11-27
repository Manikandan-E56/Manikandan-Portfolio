import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";



const navLinks = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Projects", href: "#Projects" },
  { name: "Certification", href: "#Certification" },
  { name: "Contact", href: "#Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-4" : "bg-slate-900/50 py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#Home" className="flex items-center gap-2 group">
          <div>
            <FaReact className="text-indigo-500 text-4xl" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-indigo-400 transition-colors relative group text-sm font-medium uppercase tracking-wider"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-slate-800/95 backdrop-blur-xl overflow-hidden"
          >
            <ul className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl text-slate-300 hover:text-indigo-400 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}