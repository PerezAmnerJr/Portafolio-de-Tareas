// src/data/certifications.ts

export type Certification = {
  title: string;
  issuer?: string;
  description?: string;
  imageSrc: string;
  credentialUrl: string;
  tags?: string[];
};

export const certifications: Certification[] = [
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    description:
      "Certificación centrada en React, Redux, Bootstrap, jQuery y SASS, con proyectos prácticos.",
    imageSrc: "/certificacion-desarrollo-frontend.jpg",
    credentialUrl:
      "https://www.freecodecamp.org/certification/fcc-2efc009a-586c-4260-9186-45a2f6df01e0/front-end-development-libraries",
    tags: ["React", "Redux", "Bootstrap", "SASS"],
  },
  {
    title: "Introducción a la Ciberseguridad",
    issuer: "Cisco Networking Academy",
    description:
      "Información básica sobre ciberseguridad, amenazas comunes y mejores prácticas para proteger datos.",
    imageSrc: "/Introduccion-Ciberseguridad.jpg",
    credentialUrl:
      "https://www.credly.com/badges/59c5be8b-c9da-4391-a17e-3276874762fd/public_url",
    tags: ["Ciberseguridad"],
  },
  {
    title: "Conceptos Basicos de Redes",
    issuer: "Cisco Networking Academy",
    description:
      "tipos de redes, su funcionamiento, cómo los dispositivos envían y reciben datos, los tipos de cableado de red, cómo las direcciones IP encuentran información en Internet, cómo funcionan el transporte y las aplicaciones, y ha practicado la creación de una red inalámbrica doméstica. Ha participado en hasta 13 actividades de Cisco Packet Tracer. ",
    imageSrc: "/Conceptos B-Redes.jpg",
    credentialUrl: "https://www.credly.com/badges/a3cf2fe1-bf9e-4c9d-bb23-2d432cf59e71/public_url",
    tags: ["direcciones IP", "TCP/IP" ],
  },
  {
    title: "Conceptos Basicos de Hadware de Computadora",
    issuer: "Csico Networking Academy",
    description:
      "conocimientos básicos de computadoras y dispositivos móviles, su funcionamiento, así como los conceptos y habilidades básicos necesarios para instalar componentes para ensamblar, reparar y actualizar computadoras personales, y las herramientas y técnicas básicas de resolución de problemas.",
    imageSrc: "/Conceptos-Basicos-del-Hadware.jpg",
    credentialUrl: "https://www.credly.com/badges/91be3e9b-9ef7-4955-8086-e8e52c2a6d66/public_url",
    tags: ["Mantenimiento del dispositivo", "Computadoras personales"],
  },
  {
    title: "Trayectoria profecional de tecnico en Redes",
    issuer: "Cisco Networking Academy",
    description:
      "posee conocimientos de fundamentos de redes, cómo se comunican los dispositivos, cableado, direccionamiento y servicios de red, conceptos básicos de configuración de dispositivos Cisco, resolución de problemas y soporte de endpoints, redes y usuarios, incluyendo diagnósticos y documentación como miembro de un equipo de soporte técnico.",
    imageSrc: "Tecnico-Redes.jpg",
    credentialUrl: "https://www.credly.com/badges/889fc7fd-26a6-423d-88a0-3771c3ff69c7/public_url",
    tags: ["Ethernet", "Tipos de Red", "Modelos OSI y TCP/IP", "Direccionamiento IP", "Documentacion"],
  },
  {
    title: "Sistemas Operativos",
    issuer: "Cisco Networking Academy",
    description:
      "Posee conocimientos fundamentales de sistemas operativos, cubriendo los conceptos y habilidades básicos necesarios para explicar su propósito y características, implementar la seguridad básica de sistemas operativos y explicar cómo configurar la conectividad de red y el correo electrónico de dispositivos móviles..",
    imageSrc: "Sistemas-operativos.jpg",
    credentialUrl: "https://www.credly.com/badges/54939c3b-43ad-43de-b7f1-80f722eb67b3/public_url",
    tags: ["iOS", "Android", "Seguridad básica", "Conectividad de red"],
  },
  {
    title: "Technology & Cybersecurity Summit",
    issuer: "Insertel",
    description:
      "Este diploma significa que participó activamente en este evento importante, probablemente adquiriendo conocimientos sobre las últimas novedades y desafíos en tecnología y ciberseguridad..",
    imageSrc: "Insertel.jpg",
    credentialUrl: "https://freecodecamp.org/certification/tu-id/javascript",
    tags: ["Tecnologias", "Ciberseguridad", "Tendencias", "Desafios", "Innovacion", "Networking"],
  },
];
