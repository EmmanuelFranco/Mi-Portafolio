import React, { useState, useEffect } from 'react';
import foto from "../../public/foto.png";

const AboutMe = () => {
  const initialText = '¡Hola! Soy Emmanuel Franco Delgado';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const displayText = async () => {
      for (let i = 0; i <= initialText.length; i++) {
        setDisplayedText(initialText.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 1 segundo

      for (let i = initialText.length; i >= 0; i--) {
        setDisplayedText(initialText.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Repetir el proceso
      displayText();
    };

    displayText();
  }, []);

  return (
    <section className="my-8">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center md:flex-row md:justify-center ">        
        <div className="flex-1 md:ml-4 md:mX-6">
          <p className="text-2xl font-bold text-gray-800 mb-4">{displayedText}</p>
          <p className="text-gray-700">
            Un apasionado Analista y Desarrollador de Sistemas de Información con más de 5 años de experiencia en el fascinante mundo del desarrollo de software. Actualmente, estoy dando un paso adelante en mi carrera como desarrollador fullstack, combinando mis habilidades analíticas con una profunda comprensión de los aspectos técnicos para ofrecer soluciones completas y eficientes.
          </p>
        </div>
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <img className="rounded-lg w-full md:w-96" src={foto} alt="Tu Foto" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
