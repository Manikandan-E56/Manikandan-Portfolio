import React from 'react'
import style from "./App.module.css";
import Certificate from "../common/components/Certification/Certification";


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
	  issuer: "Hackerrank",
	  date: "Mar 2025",
	},
	{
	  image: "./img/css Basic.png",
	  title: "Css",
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
  )
}
