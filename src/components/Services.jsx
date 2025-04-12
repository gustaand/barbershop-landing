import React from 'react';
import { FaCut, FaShower } from 'react-icons/fa';
import { GiBeard } from "react-icons/gi";

const servicesList = [
  {
    name: "Corte Clásico",
    description: "Precisión y estilo atemporal.",
    icon: <FaCut size={40} className="mb-4 text-yellow-600" />
  },
  {
    name: "Arreglo de Barba",
    description: "Perfilado, recorte y cuidado experto.",
    icon: <GiBeard size={40} className="mb-4 text-yellow-600" />
  },
  {
    name: "Afeitado Tradicional",
    description: "Experiencia de afeitado con navaja y toalla caliente.",
    icon: <FaShower size={40} className="mb-4 text-yellow-600" />
  },
  {
    name: "Corte y Barba",
    description: "El paquete completo para un look impecable.",
    icon: <div className="mb-4 flex justify-center"><FaCut size={30} className="text-yellow-600 mr-2" /><GiBeard size={30} className="text-yellow-600" /></div>
  },
  {
    name: "Corte Infantil",
    description: "Cortes divertidos y cómodos para los más pequeños.",
    icon: <FaCut size={40} className="mb-4 text-yellow-600" />
  },
  {
    name: "Tratamientos Capilares",
    description: "Revitaliza y cuida tu cabello.",
    icon: <FaShower size={40} className="mb-4 text-yellow-600" />
  },
];
function Services() {
  return (
    // Padding vertical y horizontal ajustado
    <section id="services" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-gray-800">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
            >
              {service.icon}
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">{service.name}</h3>
              <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;