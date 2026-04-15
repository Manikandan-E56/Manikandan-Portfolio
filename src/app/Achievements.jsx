import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTrophy, FaMedal, FaCode } from "react-icons/fa";

const achievements = [
  {
    icon: FaCode,
    rank: null,
    title: "LeetCode Contest Rating",
    highlight: "1414 Max Rating",
    description:
      "Achieved a max LeetCode contest rating of 1414 by solving over 250+ DSA problems across LeetCode, demonstrating strong algorithmic thinking and problem-solving skills.",
    color: "#f59e0b",
    linkUrl: "https://leetcode.com/u/manikandan-e/",
    linkLabel: "View Profile",
    tag: "Competitive Coding",
  },
  {
    icon: FaMedal,
    rank: "2nd",
    title: "Smart India Hackathon (SIH)",
    highlight: "2nd Place — Internal Selections",
    description:
      "Secured 2nd place among 30+ teams from all departments in the internal selections for the Smart India Hackathon, India's largest national hackathon.",
    color: "#a78bfa",
    linkUrl: null,
    linkLabel: null,
    tag: "Hackathon",
  },
  {
    icon: FaTrophy,
    rank: "3rd",
    title: "Avantaa '24 Project Expo",
    highlight: "3rd Place — Sri Krishna College",
    description:
      "Led a team to win 3rd place out of 10+ teams at the Avantaa '24 Project Expo (Sri Krishna College of Engineering & Technology) for prototyping 'Nexaid', an emergency assistance app.",
    color: "#f97316",
    linkUrl:
      "https://drive.google.com/file/d/1QgYckKjmPnWaZJjkiiLg6qxR-kAff-ys/view",
    linkLabel: "View Certificate",
    tag: "Project Expo",
  },
];

export default function Achievements() {
  return (
    <div className="container mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p
          className="text-sm font-mono uppercase tracking-widest mb-3"
          style={{ color: "#a78bfa" }}
        >
          — Highlights
        </p>
        <h2
          className="text-4xl lg:text-5xl font-bold"
          style={{
            background: "linear-gradient(135deg, #ffffff, #fbbf24)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Achievements
        </h2>
        <p
          className="mt-6 max-w-xl mx-auto text-sm"
          style={{ color: "#8892b0" }}
        >
          Milestones and recognitions earned through dedication, teamwork, and
          technical excellence.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-5 max-w-3xl mx-auto">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative rounded-2xl overflow-hidden flex gap-5 p-5 group"
              style={{
                background: "rgba(13, 18, 36, 0.7)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(16px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${item.color}40`;
                e.currentTarget.style.boxShadow = `0 16px 48px ${item.color}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{
                  background: `linear-gradient(180deg, ${item.color}, transparent)`,
                }}
              />

              {/* Icon column */}
              <div className="flex-shrink-0 flex items-start pt-0.5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  {item.rank ? (
                    <span
                      className="font-black text-lg leading-none"
                      style={{ color: item.color }}
                    >
                      {item.rank}
                    </span>
                  ) : (
                    <Icon size={20} style={{ color: item.color }} />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${item.color}18`,
                      color: item.color,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-0.5">
                  {item.title}
                </h3>
                <p
                  className="text-xs font-semibold mb-2"
                  style={{ color: item.color }}
                >
                  {item.highlight}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#8892b0" }}>
                  {item.description}
                </p>

                {item.linkUrl && (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold transition-all duration-200"
                    style={{ color: item.color }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.filter = "brightness(1.3)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.filter = "brightness(1)")
                    }
                  >
                    <FaExternalLinkAlt size={9} />
                    {item.linkLabel}
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
