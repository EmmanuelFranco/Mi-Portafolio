import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';

Modal.setAppElement('#root'); // Necesario para que react-modal funcione correctamente

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Header />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Mensaje de Bienvenida"
        className="modal p-8 bg-white rounded-md max-w-sm mx-auto"
        overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">
            Lo que verás solo es el inicio de mi Portafolio.
          </p>
          <p className="mb-4">
            Poco a poco iré actualizando con mejor código y/o mejor tecnología.
          </p>
          <p className="mb-4">
            Por ahora solo se ve bien en computador... Falta mejorar agunos detalles del Responsive.
          </p>
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
