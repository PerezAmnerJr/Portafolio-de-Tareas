import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="section">
      <div className="container card hero">
        <div className="left">
          <div className="kicker">Hola, soy</div>
          <h1>Tu Nombre</h1>
          <h2 style={{color:"var(--accent)"}}>UI/UX & Frontend Developer</h2>
          <p style={{marginTop:10, maxWidth:560}}>
            Breve descripción sobre ti. Mantén 2–3 líneas: en qué te especializas, 
            tu stack favorito y el tipo de proyectos que te apasionan.
          </p>

          <div className="ctas">
            <a className="btn btn--accent" href="#projects">Ver Proyectos</a>
            <a className="btn" href="#contacto">Hablemos</a>
          </div>

          <div className="pills">
            <span className="badge">Figma</span>
            <span className="badge">React</span>
            <span className="badge">TypeScript</span>
            <span className="badge">CSS</span>
          </div>
        </div>

        <div className="right">
          <div className="photo">
            <img src="/profile.jpg" alt="Foto de perfil" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;