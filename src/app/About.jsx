import React from 'react'
import style from "./App.module.css";


import { FaBootstrap, FaReact, FaMobileAlt } from "react-icons/fa";
import { BsGithub, BsPuzzle } from "react-icons/bs";
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
    icon: <AiFillHtml5 size="25px" color="white" />,
    cssName: "html",
  },
  {
    name: "CSS",
    icon: <BiLogoCss3 size="25px" color="white" />,
    cssName: "css",
  },
  {
    name: "Java Script",
    icon: <BiLogoJavascript size="25px" color="white" />,
    cssName: "java-script",
  },
  {
    name: "Node",
    icon: <BiLogoNodejs size="25px" color="white" />,
    cssName: "Node",
  },

  {
    name: "React",
    icon: <FaReact size="25px" color="white" />,
    cssName: "react",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size="25px" color="white" />,
    cssName: "Bootstrap",
  },
  {
    name: "Responsive Design",
    icon: <FaMobileAlt size="25px" color="white" />,
    cssName: "responsive",
  },
  {
    name: "GitHub",
    icon: <BsGithub size="25px" color="white" />,
    cssName: "git-hub",
  },
  {
    name: "java",
    icon: <BiLogoJava size="25px" color="white" />,
    cssName: "java",
  },
  {
    name: "postgres-SQL",
    icon: <BiLogoPostgresql size="25px" color="white" />,
    cssName: "postgres-SQL",
  },

  {
    name: "Problem Solving",
    icon: <BsPuzzle size="25px" color="white" />,
    cssName: "problem-solving",
  },
  {
    name: "MongoDb",
    icon: <BiLogoMongodb size="25px" color="white" />,
    cssName: "MongoDb",
  },
  {
    name: "Figma",
    icon: <SiFigma size="25px" color="white" />,
    cssName: "Figma"
  },
  {
    name: "Dotnet",
    icon: <SiBattledotnet size="25px" color="white" />,
    cssName: "Dotnet",
  },
];

export default function About() {
  return (
    <div className={style.container}>
              <h2 className={style.title}>About Me</h2>
              <p>
                Here you will find more information about me, what I do, and my
                current skills mostly in terms of programming and technology
              </p>
              <div className={style["about-content"]}>
                <div className={style["about-info"]}>
                  <h3>Get to know me!</h3>
                  <p>
                    I am a student and aspiring software developer from Coimbatore,
                    with a strong interest in software development, full-stack
                    development, UI/UX design. I am focused on building a solid
                    foundation in technology and design while exploring innovative
                    solutions to complex challenges. Committed to continuous
                    learning, I aim to contribute effectively to the tech industry
                    and grow as a versatile professional capable of addressing
                    diverse needs.
                  </p>
                </div>
                <div className={style["my-skill"]}>
                  <h3>My Skills</h3>
                  <div className={style.skills}>
                    {skills.map((skill, index) => {
                      return (
                        <div
                          key={`skill${index}`}
                          className={`${style.skill} ${style[skill.cssName]}`}
                        >
                          <div className={style["skill-name"]}>{skill.name}</div>
                          <div className={style["skill-icon"]}>{skill.icon}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
  )
}
