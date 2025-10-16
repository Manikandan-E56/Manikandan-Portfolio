import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery",
      description: "A full-stack food delivery app with real-time order tracking.",
      image: "https://img.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-48914.jpg",
      tags: ["React", "Node.js", "MongoDB","HTML","CSS"],
      liveUrl: "https://food-order-frontend-seven.vercel.app",
      codeUrl: "https://github.com/Manikandan-E56/Food-Order-Frontend.git",
    },
    {
      title: "Chat Application",
      description:"A real-time chat app with user authentication and group chats.",
      image: "https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png",
      tags: ["React", "Node.js", "MongoDB","Socket.io"],
      liveUrl: "#",
      codeUrl: "https://github.com/Manikandan-E56/RandomChat.git",
    },
    {
      title: "Student Club Management",
      description:"An admin and student dashboard for managing university club activities.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*NaUmBti42n0FMMffyjTtBg.jpeg",
      tags: ["React", "Express", "MongoDB","HTML","CSS"],
      liveUrl: "https://student-club-management.vercel.app/",
      codeUrl: "https://github.com/Manikandan-E56/Project-MyAnatomy",
    },
    {
      title: "Company-Job Portal",
      description: "Admin dashboard for managing Job listings and Applications.",
      image: "https://appinventiv.com/wp-content/uploads/2023/04/cost-to-build-a-job-portal-like-Glassdoor.webp",
      tags: ["HTML", "CSS", ".Net", "SQL Server","C#"],
      liveUrl: "#",
      codeUrl: "https://github.com/Manikandan-E56/JobBoardPlatform_DotNet",
    },
    {
      title: "Medorc",
      description: "A modern medical data management system for patients and doctors. ",
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
    <section
      id="Projects"
      className="w-full min-h-screen bg-gradient-to-b  to-gray-900 text-white py-16 px-6"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🚀 My Projects</h2>
        <p className="text-gray-300 text-lg">
          A showcase of some of my best work using modern web technologies.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {allTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(tag)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              selectedTag === tag
                ? "bg-blue-600 border-blue-400 shadow-lg"
                : "bg-white/10 border-gray-500 hover:bg-blue-500/20"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-white/20 
                       transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-60">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  Live
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
