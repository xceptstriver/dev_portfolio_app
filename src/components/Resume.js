import React from "react";
import react from "../assets/icons/react.svg";
import python from "../assets/icons/python.svg";
import Bar from "./Bar";
import { motion } from "framer-motion";

const languages = [
  {
    icon: react,
    name: "Javascript",
    level: "90",
  },
  {
    icon: react,
    name: "React Native",
    level: "85",
  },
  {
    icon: react,
    name: "Redux",
    level: "90",
  },
  {
    icon: react,
    name: "React.Js",
    level: "60",
  },
  {
    icon: react,
    name: "NodeJS",
    level: "50",
  },
  {
    icon: react,
    name: "MongoDB",
    level: "40",
  },

  {
    icon: react,
    name: "HTML",
    level: "80",
  },
  {
    icon: react,
    name: "CSS",
    level: "60",
  },
  {
    icon: react,
    name: "Bootstrap",
    level: "40",
  },

  {
    icon: react,
    name: "Java",
    level: "80",
  },
  {
    icon: react,
    name: "Kotlin",
    level: "60",
  },
];

const tools = [
  {
    icon: react,
    name: "VSCode",
    level: "85",
  },
  {
    icon: react,
    name: "Android Studio",
    level: "85",
  },
  {
    icon: react,
    name: "React Native Debugger",
    level: "90",
  },
  {
    icon: react,
    name: "XCode",
    level: "60",
  },
  {
    icon: react,
    name: "Figma",
    level: "85",
  },
  {
    icon: react,
    name: "Photoshop",
    level: "45",
  },
  {
    icon: react,
    name: "Illustrator",
    level: "60",
  },
  {
    icon: react,
    name: "Framer",
    level: "45",
  },
];

const Resume = () => {
  const resume_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="container resume"
      variants={resume_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Software Engineer</h5>
            <p className="resume-card__name">Moglix (2019 - present)</p>
            <p className="resume-card__details">
              Currently working as a Full Stack Mobile App Developer for a B2B
              commerce startup.
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Electrical Enginnering</h5>
            <p className="resume-card__name">
              St.Thomas' College of Engineering and Technology(2015 - 2019)
            </p>
            <p className="resume-card__details">
              Pursued B.Tech in Electrical Engineering
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Language and Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
