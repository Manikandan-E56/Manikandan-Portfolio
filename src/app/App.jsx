import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// import components
import DownloadButton from "../common/components/DownloadButton/DownloadButton";
import IconButton from "../common/components/IconButton/IconButton";
import InputField from "../common/components/InputField/InputField";
import TextAreaField from "../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../common/components/SubmitButton/SubmitButton";
import Loader from "../common/components/Loader/Loader";
import cv from "../assets/files/Manikandan_E-717822D128.pdf";

// import icons

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  
} from "react-icons/ai";
import {
  BiLogoGmail,
} from "react-icons/bi";

import {SiLeetcode,} from "react-icons/si";

// import style
import style from "./App.module.css";
import clsx from "clsx";
import Projects from "./Projects";
import NavBar from "./NavBar";
import About from "./About";
import Certification from "./Certification";
import Context from "./Contect";
import { FaReact } from "react-icons/fa";
  




  

function App() {
 

  const [menu, setMenu] = useState(false);
const handleLinkClick = () => {
    setMenu(!menu);
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
                      <a href="#Home" onClick={handleLinkClick}>Home</a>
                    </li>
                    <li>
                      <a href="#About" onClick={handleLinkClick}>About</a>
                    </li>
                    <li> 
                      <a href="#Projects" onClick={handleLinkClick}>Projects</a>
                    </li>
                    <li>
                      <a href="#Certification" onClick={handleLinkClick}>Certification</a>
                    </li>
                    <li>
          
                      <a href="#Contact" onClick={handleLinkClick}>Contact</a>
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
            <a href="#Projects">Projects</a>
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
      <div id="About" className={style.about}><About/></div>

      {/* Projects*/}
      <div id="Projects" className=""><Projects/></div>
      

      {/* Certifications */}
      
      <Certification/>

      {/* Contact */}
      <Context/>

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
