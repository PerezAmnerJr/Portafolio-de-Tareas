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
    title: "Catalofo de Frutas",
    description: "Usando Reack de aplicacion de consumo de API que esta mostrando un catalogo de frutas.",
    image: "/Frutas.jpg",
    netlify: "https://visionary-lokum-be2eb1.netlify.app/",
    github: "https://github.com/PerezAmnerJr/036-Amner-Perez.git",
    tags: ["CSS", "Responsive"]
  }
];


export const certifications = [
  {
    title: "Bibliotecas de desarrollo front-end",
    issuer: "freeCodeCamp",
    description:
      "Certificación centrada en React, Redux, Bootstrap, jQuery y SASS, con proyectos prácticos.",
    imageSrc: "/text/cert-fcc-frontend.jpg",      // preview
    credentialUrl: "https://tu-link-del-diploma.com",  // diploma PDF o Drive
    tags: ["React", "Redux", "Bootstrap", "SASS"],
  },

   {
    title: "React y TypeScript desde cero",
    issuer: "Udemy",
    description:
      "Curso completo de React con TypeScript, hooks, routers y buenas prácticas.",
    imageSrc: "/text/cert-udemy-react.jpg",
    credentialUrl: "https://tu-link-del-diploma.com",
    tags: ["React", "TypeScript"],
  },
];