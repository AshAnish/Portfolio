import React from "react";
import "../styles/projects.css";

const projectsData = [
  {
    title: "Privacy Checker Extension",
    description: "Built a machine learning-based browser extension to detect and block tracking scripts in real time.",
    technologies: "Python, ONNX, JavaScript, Chrome Extensions, Burp Suite",
    link: "#"
  },
  {
    title: "House Rent Price Prediction",
    description: "Conducted data-driven analysis to predict house rent prices in major metropolitan cities of India.",
    technologies: "Python, Jupyter Notebook",
    link: "#"
  },
  {
    title: "Tharuvai Sai Baba Temple Website",
    description: "Developed a user-friendly website for devotees to stay connected and access spiritual resources.",
    technologies: "Wix, UI/UX Design",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <a key={index} href={project.link} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
