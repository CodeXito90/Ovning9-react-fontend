import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import './Projects.scss';
import  {images}  from '../../constants';

const projectData = [
  {
    title: "BishBosh 2.0",
    description: "Bish-Bosh is a simple program that lists numbers, but replaces some with Bish, Bosh, or Bish-Bosh depending on if they are evenly divisible by your chosen numbers",
    image: images.BishBosh,
    technologies: ["C#", ".NET", "ConsoleApp", "Material-UI"],
  },
  {
    title: "Todo List ",
    description: "A simple todo list with functions to save and load data to local storage. Great beginner friendly project to hammer in the fundamentals",
    image: images.TodoList,
    technologies: ["C#", "ConsoleApp", "Javascript", "HMTL", "CSS"],
  },
  {
    title: "Lexikon personal Portfolio",
    description: "A personal portfolio to showcase all the projects i am and will be working on in the future. Use of React and framer motion as well as best practises ",
    image: images.PortfolioProj,
    technologies: ["React.JS", "Framer-Motion", "Material-UI", "HTML & CSS"],
  },
  {
    title: "Virtual Garage",
    description: "A brief description of Project 4",
    image: images.Garage,
    technologies: [".NET", "LINQ", "C#", "ConsoleApp"],
  },
];

const Projects = () => {
  return (
    <div className="app__projects app__flex">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__projects-info"
      >
        <h2 className="head-text">My Projects</h2>
        <p className="p-text">Here are some of the projects I've worked on during my course at Lexikon</p>
      </motion.div>

      <div className="app__projects-portfolio">
        {projectData.map((project, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="app__projects-item"
            key={project.title}
          >
            <div className="app__projects-img">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="app__projects-content">
              <h3 className="bold-text">{project.title}</h3>
              <p className="p-text">{project.description}</p>
              <div className="app__projects-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="p-text">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Projects, 'projects');