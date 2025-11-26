// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero section reveal">
      <div className="hero-card">
        <p className="hero-eyebrow">HOLA, SOY</p>

        <h1>Amner Alberto Pérez Marroquin</h1>
        <h2>Desarrollador Frontend Junior</h2>

        <p className="hero-text">
          Soy Amner Pérez, estudiante de Ingeniería en Sistemas en octavo semestre,
          apasionado por la tecnología y en constante aprendizaje. Actualmente me
          especializo en React, TypeScript, CSS moderno y buenas prácticas de
          desarrollo, construyendo interfaces limpias, accesibles y enfocadas en la
          experiencia del usuario.
        </p>

        <p className="hero-text">
          Disfruto aprender nuevas tecnologías, mejorar mis habilidades y enfrentar
          desafíos que me permitan crecer como profesional.
        </p>

        <div className="hero-cta-row">
          <a href="#projects" className="btn btn--accent">Ver proyectos</a>
          <a href="#contact" className="btn btn--ghost">Hablemos</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo">
          <img
            src="/perfil.jpg"
            alt="Foto de Amner Pérez"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
