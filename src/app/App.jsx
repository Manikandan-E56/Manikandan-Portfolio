import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

// import components
import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Certification from "./Certification";
import Context from "./Contact";
import DownloadButton from "../common/components/DownloadButton/DownloadButton";
import cv from "../assets/files/Manikandan_E-717822D128.pdf";
import profileImg from "../assets/Profile.png";

// import style
import style from "./App.module.css";

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
      <NavBar />

      {/* Home / Hero */}
      <section id="Home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-indigo-400 font-medium text-lg tracking-wide uppercase"
            >
              Hello, I'm
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mt-2 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            >
              Manikandan
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed mb-8"
            >
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start"
            >
              <a
                href={cv}
                download="Manikandan_CV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <DownloadButton>Download CV</DownloadButton>
              </a>
              
              <div className="flex gap-4">
                {[
                  { Icon: AiFillGithub, href: "https://github.com/manikandan-e56" },
                  { Icon: AiFillLinkedin, href: "https://www.linkedin.com/in/manikandan-e-manie/" },
                  { Icon: BiLogoGmail, href: "mailto:emanigandan58@gmail.com" },
                  { Icon: SiLeetcode, href: "https://leetcode.com/u/717822d128/" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 text-gray-400"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="relative block">
            <div className="relative w-full aspect-square max-w-xs mx-auto">
               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-spin-slow"></div>
               <div className="relative rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10 bg-slate-800">
                  <img 
                    src={profileImg} 
                    alt="Manikandan" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
               </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-dark-muted rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-primary rounded-full animate-scroll"></div>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="About" className="py-20 bg-dark-card/50">
        <About />
      </section>

      {/* Projects */}
      <section id="Projects" className="py-20">
        <Projects />
      </section>

      {/* Certifications */}
      <section id="Certification" className="py-20 bg-dark-card/50">
        <Certification />
      </section>

      {/* Contact */}
      <section id="Contact" className="py-20">
        <Context />
      </section>

      {/* Footer */}
      <footer className="bg-dark-card py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Manikandan</h3>
          <p className="text-dark-muted max-w-md mx-auto mb-8">
            Building the web, one pixel at a time.
          </p>
          <div className="flex justify-center gap-6 mb-8">
             {[
                  { Icon: AiFillGithub, href: "https://github.com/manikandan-e56" },
                  { Icon: AiFillLinkedin, href: "https://www.linkedin.com/in/manikandan-e-manie/" },
                  { Icon: BiLogoGmail, href: "mailto:emanigandan58@gmail.com" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                ))}
          </div>
          <div className="text-sm text-dark-muted">
            © Copyright 2025. Made by <span className="text-primary-light">Manikandan E</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

