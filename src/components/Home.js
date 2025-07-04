import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, I am</h3>
        <h1>Suriya.R</h1>
        <h2>
          I'm a <span>Full Stack Developer</span>
        </h2>
        <p>
          Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/suriya-r-856b5528b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/suriya-r" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:rajaalamelu514@gmail.com">
            <FaEnvelope />
          </a>
        </div>


        <a href="/SuriyaResume.pdf" download className="btn-resume">
          Download Resume <span>📥</span>
        </a>
      </div>
      <div className="home-image">
        <img src="/IMG_20250529_112316.jpg" alt="Suriya.R" />
      </div>
      <a href="#contact" className="btn-connect">Let's Connect</a>
    </section>
  );
};

export default Home;
