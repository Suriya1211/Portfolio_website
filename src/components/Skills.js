// src/components/Skills.js
import React from 'react';

const skillsData = [
  { name: "HTML", img: "/skills/html5.svg" },
  { name: "CSS", img: "/skills/css3-original.svg" },
  { name: "JavaScript", img: "/skills/javascript-original.svg" },
  { name: "React JS", img: "/skills/react.svg" },
  { name: "Node JS", img: "/skills/nodedotjs.svg" },
  { name: "Express JS", img: "/skills/express-original.svg" },
  { name: "SQL", img: "/skills/postgresql.svg" },
  { name: "MongoDB", img: "/skills/mongodb.svg" }
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">
        Technical <span>Skills</span>
      </h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
