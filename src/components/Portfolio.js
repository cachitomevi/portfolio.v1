import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    previewImage: "./image/image.png",
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    previewImage: "/assets/project1.png",
  },
  // Agrega más proyectos aquí
];

const Portfolio = () => {
  return (
    <div>
      <h1>Mi Portafolio</h1>
      {projects.map((project, index) => (
        <Project key={index} title={project.title} description={project.description} />
      ))}
    </div>
  );
};

export default Portfolio;
