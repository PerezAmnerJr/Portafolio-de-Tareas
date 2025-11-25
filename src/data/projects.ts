// src/data/projects.ts

export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  netlify: string;
  github: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Hoja de Vida",
    description: "CV online con secciones y estilos coherentes.",
    image: "/cv.jpg",
    netlify: "https://cv-amner-perez.netlify.app/",
    github: "https://github.com/PerezAmnerJr/Mi-hoja-de-Vida-Amner.git",
    tags: ["React", "UI"]
  },
  {
    id: "p2",
    title: "Formulario",
    description: "Formulario con validaciones y exportación.",
    image: "/Formulario.jpg",
    netlify: "https://gregarious-haupia-733a27.netlify.app/",
    github: "https://github.com/TUUSER/TU-REPO-FORMx",
    tags: ["TypeScript", "Forms", "ibrerías de React"]
  },
  {
    id: "p3",
    title: "Catálogo de Frutas",
    description:
      "Aplicación React para mostrar frutas desde una API pública.",
    image: "/Frutas.jpg",
    netlify: "https://visionary-lokum-be2eb1.netlify.app/",
    github: "https://github.com/PerezAmnerJr/036-Amner-Perez.git",
    tags: ["TypeScript", "Reack", "API"]
 
  }
];
