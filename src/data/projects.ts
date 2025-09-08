export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;  // 👈 nuevo campo
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Proyecto 1",
    description: "Descripción 1",
    url: "https://cv-amner-perez.netlify.app/",
    image: "/cv.png"   // 👈 ruta en public/
  },
  {
    id: "p2",
    title: "Proyecto 2",
    description: "Descripción 2",
    url: "https://TU-SEGUNDO-SITIO.netlify.app",
    image: "/otro-preview.png"
  },
  {
    id: "p3",
    title: "Proyecto 3",
    description: "Descripción 3",
    url: "https://TU-TERCER-SITIO.netlify.app",
    image: "/otro2-preview.png"
  }
];
