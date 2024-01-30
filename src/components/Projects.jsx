import React from 'react';
import Proyecto1 from "../../public/Proyecto 1.jpeg";
import Repositorio from "../../public/Repositorio.jpeg"
import Proyecto2 from "../../public/Proyecto2.jpeg";
import Proyecto3 from "../../public/Proyecto3.jpeg";
import Proyecto4 from "../../public/Proyecto4.jpeg";

const Projects = () => {
  const projects = [
    {
      title: 'Proyecto Responsive',
      description: 'En este Proyecto el objetivo es que la página quede Responsive, lo mejor posible, tanto para computador, celular o tablet...',
      thumbnail: Proyecto1,
      link: 'enlace_proyecto_1',
    },
    {
      title: 'Proyecto PokeDex',
      description: 'Este fue un desarrollo donde se consume una Api y se da los valores requeridos, que se encontraban en dicha Api.',
      thumbnail: Proyecto2,
      link: 'https://pc-7-n3.vercel.app/',
    },  
    {
      title: 'Proyecto New`s',
      description: 'Este proyecto, también tiene como objetivo dejarlo Responsive, pero aparte la organización fiel a lo requerido.',
      thumbnail: Proyecto3,
      link: 'enlace_proyecto_3',
    },
    {
      title: 'Proyecto Windbnb',
      description: 'Es muy similar a la empresa Mundial Airbnb, tiene como objetivo filtrar por lugar, o por la cantidad de personas...',
      thumbnail: Proyecto4,
      link: 'enlace_nuevo_proyecto',
    },
    {
      title: 'Este es mi Repositorio',
      description: 'Aquí pueden encontrar todo lo hecho desde mis primeros programas, que los iré puliendo y actualizando poco a poco.',
      thumbnail: Repositorio,
      link: 'https://github.com/EmmanuelFranco',
    },
  ];

  const openLinkInNewTab = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section className="my-8">
      <h1 className='mb-4 text-center text-2xl font-bold text-gray-800'>Proyectos</h1>
      <div className="flex overflow-x-auto overflow-y-hidden">
        <div className="flex ml-8">
          {projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 bg-white p-0 rounded-md mx-8 shadow-md w-80 mr-2 cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => openLinkInNewTab(project.link)}>
              <img className="mb-1 h-44 rounded-md" src={project.thumbnail} alt={project.title} />
              <h3 className="text-lg font-bold mb-1">{project.title}</h3>
              <p className="text-gray-700 mb-1">{project.description}</p>
              <p className="text-blue-500 hover:underline text-lg">Ver más</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
