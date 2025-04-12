import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'; // o fa6

function Contact() {
  return (
    // Padding vertical y horizontal ajustado
    <section id="contact" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800">
          Visítanos o Llámanos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Información de Contacto */}
          <div className="space-y-5 md:space-y-6 text-base md:text-lg text-gray-700">
            <div className="flex items-start">
              <FaMapMarkerAlt size={20} md:size={25} className="text-yellow-600 mr-3 md:mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Dirección:</h3>
                <p className="text-sm md:text-base">Calle Falsa 123, Barrio Barber, Ciudad Ejemplo</p>
                <a href="#" className="text-yellow-600 hover:text-yellow-700 transition duration-300 text-sm md:text-base">Ver en mapa</a>
              </div>
            </div>
            <div className="flex items-center"> {/* 'items-center' suele ir bien aquí */}
              <FaPhone size={20} md:size={25} className="text-yellow-600 mr-3 md:mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Teléfono / WhatsApp:</h3>
                <p className="text-sm md:text-base">+34 123 456 789</p>
                <a href="tel:+34123456789" className="text-yellow-600 hover:text-yellow-700 transition duration-300 text-sm md:text-base">Llamar ahora</a>
              </div>
            </div>
            <div className="flex items-start">
              <FaClock size={20} md:size={25} className="text-yellow-600 mr-3 md:mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Horario:</h3>
                <p className="text-sm md:text-base">Lunes a Viernes: 9:00 - 20:00</p>
                <p className="text-sm md:text-base">Sábados: 10:00 - 15:00</p>
                <p className="text-sm md:text-base">Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Mapa o Formulario */}
          <div>
            <div className="bg-gray-200 h-56 sm:h-64 md:h-80 rounded-lg shadow-md flex items-center justify-center text-gray-500 text-center p-4">
              Aquí podría ir un mapa interactivo (Google Maps Embed)
            </div>
            {/* Si usas el formulario, asegúrate que los inputs usen w-full y el espaciado sea cómodo */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;