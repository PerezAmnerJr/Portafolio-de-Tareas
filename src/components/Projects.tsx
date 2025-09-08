import React from "react";
import { projects } from "../data/projects";

const ExternalIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M14 3h7v7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14L21 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M21 14v7H3V3h7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">Mis proyectos</div>
        <h2 style={{ marginBottom: 18 }}>Lo que construí</h2>

        <div className="grid cards">
          {projects.map((p) => (
            <a
              key={p.id}
              className="card project"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              {/* Imagen de preview */}
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "12px",
                  }}
                />
              )}

              <div className="title">{p.title}</div>
              <p className="desc">{p.description}</p>
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  color: "var(--accent)",
                }}
              >
                <ExternalIcon /> <span>Ver en Netlify</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
