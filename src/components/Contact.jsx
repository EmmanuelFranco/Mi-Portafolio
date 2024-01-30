import React, { useState } from "react";
import Select from "react-select";
import CountryFlag from "react-country-flag";

const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countryOptions = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "GB", label: "United Kingdom" },
    { value: "DE", label: "Germany" },
    { value: "FR", label: "France" },
    { value: "ES", label: "Spain" },
    { value: "IT", label: "Italy" },
    { value: "JP", label: "Japan" },
    { value: "AU", label: "Australia" },
    { value: "BR", label: "Brazil" },
    { value: "AR", label: "Argentina" },
    { value: "MX", label: "Mexico" },
    { value: "CO", label: "Colombia" },
    { value: "PE", label: "Peru" },
    { value: "VE", label: "Venezuela" },
    { value: "CL", label: "Chile" },
    { value: "EC", label: "Ecuador" },
    { value: "GT", label: "Guatemala" },
    { value: "CU", label: "Cuba" },
    // Agrega más países según sea necesario
  ];

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <section className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8">
          <form>
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-400"
              >
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="apellido"
                className="block text-sm font-medium text-gray-400"
              >
                Apellido:
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="dudas"
                className="block text-sm font-medium text-gray-400"
              >
                Dudas:
              </label>
              <textarea
                id="dudas"
                name="dudas"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="celular"
                className="block text-sm font-medium text-gray-400"
              >
                Celular:
              </label>
              <div className="flex items-center">
                <Select
                  options={countryOptions}
                  className="w-1/4 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  placeholder="País"
                />
                {selectedCountry && (
                  <CountryFlag
                    countryCode={selectedCountry.value}
                    svg
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "10px",
                    }}
                  />
                )}
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  className="flex-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ml-2"
                  placeholder="Ingresa tu número"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="md:w-1/2 mt-4 md:mt-0">
          {/* 
            Google Maps
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=YOUR_QUERY"
              allowFullScreen
            ></iframe>
          */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
