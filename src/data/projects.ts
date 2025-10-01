export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Proyecto 1",
    description: "Descripción corta del proyecto 1 (qué resuelve, tech, etc.).",
    url: "https://TU-PRIMER-SITIO.netlify.app"
  },
  {
    id: "p2",
    title: "Proyecto 2",
    description: "Descripción corta del proyecto 2.",
    url: "https://TU-SEGUNDO-SITIO.netlify.app"
  },
  {
    id: "p3",
    title: "Proyecto 3",
    description: "Descripción corta del proyecto 3.",
    url: "https://TU-TERCER-SITIO.netlify.app"
  }
];
