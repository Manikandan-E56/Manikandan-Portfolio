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
  {
    name: "HTML 5",
    icon: <AiFillHtml5 size="25px" />,
    color: "text-orange-500",
  },
  { name: "CSS", icon: <BiLogoCss3 size="25px" />, color: "text-blue-500" },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript size="25px" />,
    color: "text-yellow-400",
  },
  { name: "React", icon: <FaReact size="25px" />, color: "text-cyan-400" },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size="25px" />,
    color: "text-purple-600",
  },
  {
    name: "Responsive",
    icon: <FaMobileAlt size="25px" />,
    color: "text-gray-400",
  },
  {
    name: "Node.js",
    icon: <BiLogoNodejs size="25px" />,
    color: "text-green-500",
  },
  { name: "Java", icon: <BiLogoJava size="25px" />, color: "text-red-500" },
  {
    name: "Dotnet",
    icon: <SiBattledotnet size="25px" />,
    color: "text-purple-500",
  },
  {
    name: "MongoDB",
    icon: <BiLogoMongodb size="25px" />,
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql size="25px" />,
    color: "text-blue-400",
  },
  { name: "GitHub", icon: <BsGithub size="25px" />, color: "text-white" },
  { name: "Figma", icon: <SiFigma size="25px" />, color: "text-pink-500" },
  {
    name: "Problem Solving",
    icon: <BsPuzzle size="25px" />,
    color: "text-green-400",
  },
  {
    name: "Vibe Coding",
    icon: <BsStars size="25px" />,
    color: "text-yellow-300",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function About() {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-dark-muted max-w-2xl mx-auto">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Get to know me!
          </h3>
          <p className="text-dark-muted leading-relaxed mb-6">
            I am a student and aspiring software developer from Coimbatore, with
            a strong interest in software development, full-stack development,
            and UI/UX design. I am focused on building a solid foundation in
            technology and design while exploring innovative solutions to
            complex challenges.
          </p>
          <p className="text-dark-muted leading-relaxed">
            Committed to continuous learning, I aim to contribute effectively to
            the tech industry and grow as a versatile professional capable of
            addressing diverse needs.
          </p>
        </motion.div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
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
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-dark-card border border-white/5 px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg hover:shadow-primary/20 hover:border-primary/30 transition-all group"
              >
                <span
                  className={`${skill.color} text-2xl group-hover:animate-bounce`}
                >
                  {skill.icon}
                </span>
                <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
