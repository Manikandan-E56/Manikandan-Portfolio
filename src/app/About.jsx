import React from "react";
import { motion } from "framer-motion";
import { FaBootstrap, FaReact, FaMobileAlt } from "react-icons/fa";
import { BsGithub, BsPuzzle, BsStars } from "react-icons/bs";
import { SiBattledotnet, SiFigma } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoJava,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoNodejs,
} from "react-icons/bi";

const skills = [
  { name: "HTML 5", icon: <AiFillHtml5 size="22px" />, color: "#f97316" },
  { name: "CSS", icon: <BiLogoCss3 size="22px" />, color: "#3b82f6" },
  { name: "JavaScript", icon: <BiLogoJavascript size="22px" />, color: "#eab308" },
  { name: "React", icon: <FaReact size="22px" />, color: "#06b6d4" },
  { name: "Bootstrap", icon: <FaBootstrap size="22px" />, color: "#8b5cf6" },
  { name: "Responsive", icon: <FaMobileAlt size="22px" />, color: "#94a3b8" },
  { name: "Node.js", icon: <BiLogoNodejs size="22px" />, color: "#22c55e" },
  { name: "Java", icon: <BiLogoJava size="22px" />, color: "#ef4444" },
  { name: "Dotnet", icon: <SiBattledotnet size="22px" />, color: "#a855f7" },
  { name: "MongoDB", icon: <BiLogoMongodb size="22px" />, color: "#16a34a" },
  { name: "PostgreSQL", icon: <BiLogoPostgresql size="22px" />, color: "#60a5fa" },
  { name: "GitHub", icon: <BsGithub size="22px" />, color: "#e2e8f0" },
  { name: "Figma", icon: <SiFigma size="22px" />, color: "#fb7185" },
  { name: "Problem Solving", icon: <BsPuzzle size="22px" />, color: "#4ade80" },
  { name: "Vibe Coding", icon: <BsStars size="22px" />, color: "#fde047" },
];

const stats = [
  { value: "7+", label: "Projects Built" },
  { value: "15+", label: "Skills Mastered" },
  { value: "6+", label: "Certifications" },
  { value: "1+", label: "Years Experience" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export default function About() {
  return (
    <div className="container mx-auto px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-mono uppercase tracking-widest mb-3" style={{ color: "#7c3aed" }}>
          — Who I Am
        </p>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-4 section-heading"
          style={{
            background: "linear-gradient(135deg, #ffffff, #c4b5fd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          About Me
        </h2>
        <p className="max-w-2xl mx-auto mt-6" style={{ color: "#8892b0" }}>
          Here you will find more information about me, what I do, and my current skills in programming and technology.
        </p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="text-center py-6 px-4 rounded-2xl"
            style={{
              background: "rgba(13, 18, 36, 0.7)",
              border: "1px solid rgba(124, 58, 237, 0.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            <p
              className="text-3xl font-bold mb-1"
              style={{
                background: "linear-gradient(135deg, #a78bfa, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {s.value}
            </p>
            <p className="text-xs uppercase tracking-wider" style={{ color: "#8892b0" }}>{s.label}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="p-8 rounded-2xl h-full"
            style={{
              background: "rgba(13, 18, 36, 0.6)",
              border: "1px solid rgba(124, 58, 237, 0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span style={{ color: "#7c3aed" }}>{"<"}</span>
              Get to know me!
              <span style={{ color: "#7c3aed" }}>{"/>"}</span>
            </h3>
            <p className="leading-relaxed mb-5 text-sm" style={{ color: "#8892b0" }}>
              I am a student and aspiring software developer from{" "}
              <span style={{ color: "#a78bfa", fontWeight: 600 }}>Coimbatore</span>, with a strong
              interest in software development, full-stack development, and UI/UX design. I am
              focused on building a solid foundation in technology and design while exploring
              innovative solutions to complex challenges.
            </p>
            <p className="leading-relaxed text-sm" style={{ color: "#8892b0" }}>
              Committed to continuous learning, I aim to contribute effectively to the tech industry
              and grow as a versatile professional capable of addressing diverse needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Open to Work", "Full-Time", "Freelance"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(124, 58, 237, 0.12)",
                    border: "1px solid rgba(124, 58, 237, 0.25)",
                    color: "#a78bfa",
                  }}
                >
                  ● {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-white mb-6"
          >
            My Skills
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="skill-badge flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-default"
                style={{
                  background: "rgba(13, 18, 36, 0.7)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span style={{ color: skill.color }}>{skill.icon}</span>
                <span className="text-sm font-medium" style={{ color: "#ccd6f6" }}>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
