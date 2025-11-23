// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero section reveal">
      <div className="container">
        {/* ⬇️ UN SOLO PANEL PARA TEXTO + FOTO */}
        <div className="hero-panel">
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="hero-left">
            <p className="hero-kicker">HOLA, SOY</p>
            <h1>Ing. Amner Pérez</h1>
            <h2 className="hero-subtitle">Desarrollador Frontend Junior</h2>

            <p className="hero-text">
              Soy Amner Pérez, estudiante de Ingeniería en Sistemas en octavo
              semestre, apasionado por la tecnología y en constante aprendizaje.
              Actualmente me especializo en React, TypeScript, CSS moderno y
              buenas prácticas de desarrollo, construyendo interfaces limpias,
              accesibles y enfocadas en la experiencia del usuario.
            </p>
            <p className="hero-text">
              Disfruto aprender nuevas tecnologías, mejorar mis habilidades y
              enfrentar desafíos que me permitan crecer como profesional.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn--accent">
                Ver proyectos
              </a>
              <a href="#contact" className="btn">
                Hablemos
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: FOTO */}
          <div className="right">
            <div className="hero-photo">
              <img
                src="/perfil.jpg"
                alt="Foto de perfil de Amner Pérez"
                className="hero-photo-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
