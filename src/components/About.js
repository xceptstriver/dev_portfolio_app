import React from "react";
import api from "../assets/icons/api.svg";
import backend from "../assets/icons/backend.svg";
import algo from "../assets/icons/algo.svg";
import computer from "../assets/icons/computer.svg";
import repair from "../assets/icons/repair.svg";
import puzzle from "../assets/icons/puzzle.svg";
import Skillcard from "./Skillcard";
import { motion } from "framer-motion";

const skills = [
  {
    icon: backend,
    title: "Mobile App Development",
    about: [
      "I can build scalable mobile apps using",
      <strong key={1}> React Native, Kotlin and Swift </strong>,
    ],
  },
  {
    icon: computer,
    title: "Frontend Development",
    about: [
      "I can build a beautiful and scalable SPA using",
      <strong key={1}> HTML, CSS and React </strong>,
    ],
  },
  {
    icon: repair,
    title: "Backend  Development",
    about: [
      "I can handle database, server and api using",
      <strong key={1}> NodeJS, Express and Mongo DB </strong>,
    ],
  },
  {
    icon: api,
    title: "API Development",
    about: [
      "I can develop robust REST API using",
      <strong key={1}> NodeJS, Express and Mongo DB </strong>,
    ],
  },
  {
    icon: algo,
    title: "Competitive Coder",
    about: [
      "IA daily problem solver in",
      <strong key={1}> HackerRank and Leetcode </strong>,
    ],
  },
  {
    icon: puzzle,
    title: "UI/UX designer",
    about: "A minimalistic user interface designer using figma and  framer",
  },
];

const About = () => {
  const about_variants = {
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
      className="about"
      className="container projects"
      variants={about_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="about__intro">
        A Full Stack Mobile App Developer passionate about pushing code to
        millions of users.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
