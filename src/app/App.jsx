import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// import components
import DownloadButton from "../common/components/DownloadButton/DownloadButton";
import IconButton from "../common/components/IconButton/IconButton";
import InputField from "../common/components/InputField/InputField";
import TextAreaField from "../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../common/components/SubmitButton/SubmitButton";
import Loader from "../common/components/Loader/Loader";
import cv from "../assets/files/cv.pdf";
import Certificate from "../common/components/Certification/Certification";
// import icons
import { FaBootstrap, FaReact } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineEye,
} from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoJava,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoNodejs,
} from "react-icons/bi";
import { BsFacebook, BsGit, BsGithub, BsPuzzle } from "react-icons/bs";

import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  SiTypescript,
  SiRecoil,
  SiReactquery,
  SiLeetcode,
} from "react-icons/si";

// import style
import style from "./App.module.css";
import clsx from "clsx";

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
];

const certificates = [
	{
	  image: "./img/java Basic.jpg",
	  title: "Web Development",
	  issuer: "Udemy",
	  date: "Dec 2024",
	},
	{
	  image: "./img/java Basic.jpg",
	  title: "Java",
	  issuer: "HackerRank",
	  date: "Aug 2024",
	},
	{
	  image: "./img/java Basic.jpg",
	  title: "Java",
	  issuer: "HackerRank",
	  date: "Aug 2024",
	},
	
  ];

function App() {
  const form = useRef();

  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(function () {
      emailjs
        .sendForm(
          "service_js471rj",
          "template_154p6fr",
          form.current,
          "Y_-QvcP4nNEEORa6x"
        )
        .then((result) => {
          e.target.name.value = "";
          e.target.email.value = "";
          e.target.message.value = "";
        });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={style.app}>
      {/* Navbar */}
      <div className={style.nav}>
        <a className={style.logo}>
          <FaReact color="var(--primary-main)" size="50px" />
          <h5>Portfolio</h5>
        </a>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Certification">Certification</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className={style["menu-icon"]}>
          <input id="checkbox" className={style["checkbox2"]} type="checkbox" />
          <label
            className={`${style.toggle} ${style.toggle2}`}
            for="checkbox"
            onClick={() => setMenu(!menu)}
          >
            <div className={`${style.bars} ${style.bar4}`}></div>
            <div className={`${style.bars} ${style.bar5}`}></div>
            <div className={`${style.bars} ${style.bar6}`}></div>
          </label>
        </div>
      </div>
      {menu === true && (
        <ul className={style.menu}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Certification">Certification</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      )}

      {/* Home */}
      <div id="Home" className={style.home}>
        <div className={style["home-content"]}>
          <h1>HEY, I'M Manikandan</h1>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <a
            href={cv}
            download="cv-PDF-document"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadButton>Download CV</DownloadButton>
          </a>
        </div>
        <div className={style["scroll-icon"]}>
          <div
            className={style["scroll-down"]}
            style={{ color: "skyblue !important" }}
          >
            <div className={style.chevrons}>
              <div className={style["chevron-down"]}></div>
              <div className={style["chevron-down"]}></div>
            </div>
          </div>
        </div>
        <div className={style["contact-nav"]}>
          <a
            className={style.github}
            target="_blank"
            href="https://github.com/manikandan-e56"
          >
            <AiFillGithub size="30px" color="black" />
          </a>
          <a
            className={style.linkedin}
            target="_blank"
            href="https://www.linkedin.com/in/manikandan-e-manie/"
          >
            <AiFillLinkedin size="30px" color="black" />
          </a>
          <a
            className={style.gmail}
            target="_blank"
            href="mailto:emanigandan58@gmail.com?subject=SendMail&body=Description"
          >
            <BiLogoGmail size="30px" color="black" />
          </a>
          <a
            className={style.leetcode}
            target="_blank"
            href="https://leetcode.com/u/717822d128/"
          >
            <SiLeetcode size="30px" color="black" />
          </a>
        </div>
      </div>

      {/* About */}
      <div id="About" className={style.about}>
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
      </div>

      {/* Certifications */}
      <div id="Certification" className={style.certificate}>
			<div className={style.title}>Certificate</div>
        <div className="certificate-container">
          {certificates.map((cert, index) => (
            <Certificate
              key={index}
              image={cert.image}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
            />
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="Contact" className={style.contact}>
        <div className={style.container}>
          <h2 className={style.title}>Contact</h2>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={clsx({ [style["inactive-form"]]: loading })}
          >
            <InputField
              width="700px"
              height="40px"
              name="user_name"
              placeholder="Enter Your Name"
              label="Name"
              type="text"
            />
            <InputField
              width="700px"
              height="40px"
              name="user_email"
              placeholder="Enter Your Email"
              label="Email"
              type="email"
            />
            <TextAreaField
              width="700px"
              height="250px"
              name="message"
              placeholder="Enter Your Message"
              label="Message"
              type="text"
            />
            <SubmitButton
              icon={<RiSendPlaneFill size="20px" color="white" />}
              width="200px"
              height="60px"
              color="white"
              backgroundColor="var(--primary-main)"
            >
              Submit
            </SubmitButton>
            {loading && (
              <div className={style.loader}>
                <Loader />
              </div>
            )}
          </form>
        </div>
      </div>

      {/* footer */}
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style["footer-info"]}>
            <div>
              <h3>Manikandan</h3>
              <p>
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>
            <div className={style.social}>
              <h3>Social</h3>
              <div className="">
                <a
                  className={style.git}
                  target="_blank"
                  href="https://github.com/manikandan-e56"
                >
                  <AiFillGithub size="30px" color="white" />
                </a>
                <a
                  className={style.linkedin}
                  target="_blank"
                  href="https://www.linkedin.com/in/manikandan-e-manie/"
                >
                  <AiFillLinkedin size="30px" color="white" />
                </a>
                <a
                  className={style.gmail}
                  target="_blank"
                  href="mailto:emanigandan58@gmail.com?subject=SendMail&body=Description"
                >
                  <BiLogoGmail size="30px" color="white" />
                </a>
              </div>
            </div>
          </div>
          <div className={style["copy-right"]}>
            © Copyright 2025. Made by <span>Manikandan E</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
