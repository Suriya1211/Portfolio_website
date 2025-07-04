import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Portfolio</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
