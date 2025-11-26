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
 
  },
    {
    id: "p4",
    title: "Consumo de API de Practica de Autos",
    description:
      "consumiendo una API publica de autos para mostrar un catálogo de vehículos.",
    image: "pruebas-autos.jpg",
    netlify: "https://practicaautos.netlify.app/",
    github: "https://github.com/PerezAmnerJr/Practica-autos.git",
    tags: ["React", "TypeScript", "Hooks"]
  },

  {
    id: "p5",
    title: "Practica de desarrollo de API de Tienda",
    description:
      "Consumiendo API de tienda, con usuario de estudiante de Universidad Mariano Galvez .",
    image: "tienda-api.jpg",
    netlify: "https://practicadesarrolloapi2.netlify.app/",
    github: "https://github.com/PerezAmnerJr/Practica-desarrollo-2-de-API.git",
    tags: ["React", "API", "Vite"]
  },

 
];
