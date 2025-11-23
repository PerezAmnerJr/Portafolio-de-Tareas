import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="container inner">
        <div className="brand">
          <span className="logo">A</span>
          <span>Portafolio</span>
        </div>
        <nav className="nav">
          <a href="#home">Inicio</a>
          <a href="#projects">Proyectos</a>
          <a href="#resume">Resume</a>
          <a href="#certificaciones">Certificaciones</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
