import React, { useState } from "react";
import projects_data from "../components/data/projects_data";
import ProjectCard from "../components/Projectcard";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState(projects_data);
  const [active, setActive] = useState("All");

  const filterProjects = (name) => {
    console.log("name mc", name);
    let filter_arr = projects_data.filter((_) => _.category.includes(name));
    setProjects(filter_arr);
    setActive(name);
  };

  const project_variants = {
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
      className="container projects"
      variants={project_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="projects__navbar">
        <div
          className={active == "All" && "projects__navbar-active"}
          onClick={() => {
            setActive("All");
            setProjects(projects_data);
          }}
        >
          All
        </div>
        <div
          className={active == "Office" && "projects__navbar-active"}
          onClick={() => filterProjects("Office")}
        >
          Office
        </div>
        <div
          className={active == "Personal" && "projects__navbar-active"}
          onClick={() => filterProjects("Personal")}
        >
          Personal
        </div>
      </div>
      <div className="row">
        {projects.map((_) => (
          <ProjectCard key={_.name} project={_} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
