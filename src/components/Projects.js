// src/components/Projects.js
import React from 'react';

const projectsData = [
  { title: "Netflix", img: "/projects/netflix.jpg" },
  { title: "E-Commerce", img: "/projects/ecommerce.jpg" },
  { title: "Rock Paper Scissors", img: "/projects/rps.jpg" },
  { title: "Task Management", img: "/projects/task.jpg" },
  { title: "Job Search", img: "/projects/job.jpg" },
  { title: "Food Blog", img: "/projects/food.jpg" }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
