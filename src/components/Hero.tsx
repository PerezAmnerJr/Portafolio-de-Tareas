import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="section">
      <div className="container card hero">
        <div className="left">
          <div className="kicker">Hola, soy</div>
          <h1>Ing. Amner Alberto</h1>
          <h2 style={{ color: "var(--accent)" }}>Desarrollador Frontend</h2>
          <p style={{ marginTop: 10, maxWidth: 560 }}>
            Soy Amner Perez, estudiante de Ingeniería en Sistemas en octavo semestre,
            apasionado por la tecnología y en constante aprendizaje.
          </p>

          <div className="ctas">
            <a className="btn btn--accent" href="#projects">Ver Proyectos</a>
            <a className="btn" href="#contacto">Hablemos</a>
          </div>
        </div>

        <div className="right">
          <div className="photo">
            {/* Aquí usamos la ruta de la carpeta public */}
            <img src="/perfil.jpg" alt="Foto de perfil" style={{ borderRadius: "50%", width: "220px" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
