import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    image: "./img/java Basic.jpg",
    title: "Java",
    issuer: "HackerRank",
    date: "Aug 2024",
  },
  {
    image: "./img/Udemy.jpg",
    title: "Web Development",
    issuer: "Udemy",
    date: "Dec 2024",
  },
  {
    image: "./img/Backend.png",
    title: "Backend Development",
    issuer: "Coursera",
    date: "Mar 2025",
  },
  {
    image: "./img/Frontend Developer.png",
    title: "Frontend-Development",
    issuer: "HackerRank",
    date: "Mar 2025",
  },
  {
    image: "./img/css Basic.png",
    title: "CSS",
    issuer: "HackerRank",
    date: "Mar 2025",
  },
  {
    image: "./img/JavaScript.png",
    title: "Javascript (Intermediate)",
    issuer: "HackerRank",
    date: "Mar 2025",
  },
];

export default function Certification() {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Certifications</h2>
        <p className="text-dark-muted text-lg max-w-2xl mx-auto">
          Achievements and certifications that validate my skills and knowledge.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-dark-card rounded-xl overflow-hidden border border-white/5 shadow-lg hover:shadow-primary/20 transition-all"
          >
            <div className="h-48 overflow-hidden bg-gray-800 relative">
              {/* Fallback for missing images or just use the image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x300?text=Certificate"; // Fallback
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <div className="flex justify-between items-center text-sm text-dark-muted">
                <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  {cert.issuer}
                </span>
                <span>{cert.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
