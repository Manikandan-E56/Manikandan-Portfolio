import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Food Delivery",
    description: "A full-stack food delivery app with real-time order tracking and seamless UX.",
    image: "https://img.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-48914.jpg",
    tags: ["React", "Node.js", "MongoDB", "HTML", "CSS"],
    liveUrl: "https://food-order-frontend-seven.vercel.app",
    codeUrl: "https://github.com/Manikandan-E56/Food-Order-Frontend.git",
    color: "#f97316",
  },
  {
    title: "Chat Application",
    description: "A real-time chat app with user authentication and group chats powered by Socket.io.",
    image: "https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    codeUrl: "https://github.com/Manikandan-E56/Connectify.git",
    color: "#06b6d4",
  },
  {
    title: "Student Club Management",
    description: "Admin and student dashboard for managing university club activities.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*NaUmBti42n0FMMffyjTtBg.jpeg",
    tags: ["React", "Express", "MongoDB", "HTML", "CSS"],
    liveUrl: "https://student-club-management.vercel.app/",
    codeUrl: "https://github.com/Manikandan-E56/Student-Club-Management.git",
    color: "#22c55e",
  },
  {
    title: "Company-Job Portal",
    description: "Admin dashboard for managing Job listings and Applications built with .NET.",
    image: "https://appinventiv.com/wp-content/uploads/2023/04/cost-to-build-a-job-portal-like-Glassdoor.webp",
    tags: ["HTML", "CSS", ".Net", "SQL Server", "C#"],
    liveUrl: "#",
    codeUrl: "https://github.com/Manikandan-E56/JobBoardPlatform_DotNet",
    color: "#a855f7",
  },
  {
    title: "Medorc",
    description: "A modern medical data management system for patients and doctors.",
    image: "https://www.jotform.com/blog/wp-content/uploads/2019/11/Streamlining-healthcare-data-management-and-collection-8BC2FC-700x424.png",
    tags: ["Figma", "React", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "https://github.com/Medorc/medorc-frontend",
    color: "#ec4899",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with modern UI/UX practices and smooth animations.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    tags: ["Figma", "React", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "https://manikandan-e56.github.io/Manikandan-Portfolio/",
    color: "#7c3aed",
  },
  {
    title: "Chat Application UI",
    description: "A sleek and modern chat application interface design in Figma.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    tags: ["Figma"],
    liveUrl: "https://www.figma.com/design/bHcDkFhBhGg5GkLr2OxUI8/Chat?node-id=0-1&p=f&t=qsYv3oTtl3cPhaqf-0",
    codeUrl: "#",
    color: "#06b6d4",
  },
];

const allTags = ["All", ...[...new Set(projects.flatMap((p) => p.tags))].sort()];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

      

  return (
    <div className="container mx-auto px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-sm font-mono uppercase tracking-widest mb-3 text-cyan-400">
          — What I've Built
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-white to-cyan-300 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-sm text-slate-400">
          A showcase of some of my best work using modern web technologies.
        </p>
      </motion.div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border cursor-pointer  ${
              selectedTag === tag
                ? "bg-gradient-to-r from-violet-600 to-cyan-500 border-transparent text-white shadow-lg shadow-violet-500/30"
                : "bg-[#0d1224]/80 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      

      {/* Project Cards Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.35 }}
              key={project.title}
              className="group rounded-2xl overflow-hidden flex flex-col bg-[#0d1224]/70 border border-white/5 backdrop-blur-2xl transition-all duration-300"
              style={{
                // Dynamic per-project color — inline is unavoidable here
                "--project-color": project.color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${project.color}40`;
                e.currentTarget.style.boxShadow = `0 20px 60px ${project.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224]/90 via-transparent to-transparent" />
                {/* Top color accent bar — color is dynamic, inline needed */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 flex-grow text-slate-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded-md font-medium border"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                        borderColor: `${project.color}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-600">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-300 hover:brightness-110"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                        boxShadow: `0 4px 15px ${project.color}30`,
                      }}
                    >
                      <FaExternalLinkAlt size={10} />
                      Live Demo
                    </a>
                  )}
                  {project.codeUrl !== "#" && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                    >
                      <FaGithub size={12} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;