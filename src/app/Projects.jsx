import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery",
      description: "A full-stack food delivery app with real-time order tracking.",
      image: "https://img.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-48914.jpg",
      tags: ["React", "Node.js", "MongoDB", "HTML", "CSS"],
      liveUrl: "https://food-order-frontend-seven.vercel.app",
      codeUrl: "https://github.com/Manikandan-E56/Food-Order-Frontend.git",
    },
    {
      title: "Chat Application",
      description: "A real-time chat app with user authentication and group chats.",
      image: "https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      codeUrl: "https://github.com/Manikandan-E56/RandomChat.git",
    },
    {
      title: "Student Club Management",
      description: "An admin and student dashboard for managing university club activities.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*NaUmBti42n0FMMffyjTtBg.jpeg",
      tags: ["React", "Express", "MongoDB", "HTML", "CSS"],
      liveUrl: "https://student-club-management.vercel.app/",
      codeUrl: "https://github.com/Manikandan-E56/Project-MyAnatomy",
    },
    {
      title: "Company-Job Portal",
      description: "Admin dashboard for managing Job listings and Applications.",
      image: "https://appinventiv.com/wp-content/uploads/2023/04/cost-to-build-a-job-portal-like-Glassdoor.webp",
      tags: ["HTML", "CSS", ".Net", "SQL Server", "C#"],
      liveUrl: "#",
      codeUrl: "https://github.com/Manikandan-E56/JobBoardPlatform_DotNet",
    },
    {
      title: "Medorc",
      description: "A modern medical data management system for patients and doctors.",
      image: "https://www.jotform.com/blog/wp-content/uploads/2019/11/Streamlining-healthcare-data-management-and-collection-8BC2FC-700x424.png",
      tags: ["Figma", "React", "Tailwind CSS"],
      liveUrl: "#",
      codeUrl: "https://github.com/Medorc/medorc-frontend",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with modern UI/UX practices.",
      image: "./img/Portfolio.png",
      tags: ["Figma", "React", "Tailwind CSS"],
      liveUrl: "#",
      codeUrl: "https://manikandan-e56.github.io/Manikandan-Portfolio/",
    },
    {
      title: "Chat Application UI",
      description: "A sleek and modern chat application interface design.",
      image: "./img/FigmaChat.png",
      tags: ["Figma"],
      liveUrl: "https://www.figma.com/design/bHcDkFhBhGg5GkLr2OxUI8/Chat?node-id=0-1&p=f&t=qsYv3oTtl3cPhaqf-0",
      codeUrl: "#",
    },
  ];

  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];
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
        <h2 className="text-4xl font-bold mb-4 text-white">🚀 My Projects</h2>
        <p className="text-dark-muted text-lg max-w-2xl mx-auto">
          A showcase of some of my best work using modern web technologies.
        </p>
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {allTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedTag === tag
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-dark-card border border-white/10 text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Project Cards */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.title} // Use title as key for animation stability
              className="group bg-dark-card rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-muted text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-primary/10 text-primary-light border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-dark text-gray-500 border border-white/10">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
                  {project.codeUrl !== "#" && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors text-sm font-medium"
                    >
                      <FaGithub size={14} /> Code
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
