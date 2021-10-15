import React from "react";

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import ready_me from "../assets/ready_me.png";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:codesumax@gmail.com");
  };

  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={ready_me} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">A.N.V.K.S.SAI</div>
      <div className="sidebar__item sidebar__title">Mobile App Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="!#">
          <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        </a>
        <a href="!#">
          <img src={instagram} alt="instagram" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="https://github.com/xceptstriver">
            <img src={github} alt="github" className="sidebar__icon mr-3" />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Kolkata, India
        </div>
        <div className="sidebar__item">a.n.v.k.s.sai@gmail.com</div>
        <div className="sidebar__item">7908203324 / 7044317877</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
