export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;        // miniatura/preview
  netlify: string;       // URL de despliegue
  github: string;        // URL del repo
  tags?: string[];       // opcional
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Hoja de Vida",
    description: "CV online con secciones y estilos coherentes.",
    image: "/cv.jpg",            // pon la imagen en /public (o usa ruta absoluta)
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
    tags: ["TypeScript", "Forms"]
  },
  {
    id: "p3",
    title: "Proyecto 3",
    description: "Descripción corta del proyecto 3 (qué resuelve, tech, etc.).",
    image: "/otro-preview.jpg",
    netlify: "https://TU-PROY3.netlify.app",
    github: "https://github.com/TUUSER/TU-REPO-PROY3",
    tags: ["CSS", "Responsive"]
  }
];
