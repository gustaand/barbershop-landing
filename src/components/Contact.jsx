import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Visítanos o Llámanos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Información de Contacto */}
          <div className="space-y-6 text-lg text-gray-700">
            <div className="flex items-start">
              <FaMapMarkerAlt size={25} className="text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Dirección:</h3>
                <p>Calle Falsa 123, Barrio Barber, Ciudad Ejemplo</p>
                {/* Podrías añadir un link a Google Maps aquí */}
                <a href="#" className="text-yellow-600 hover:text-yellow-700 transition duration-300">Ver en mapa</a>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhone size={25} className="text-yellow-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Teléfono / WhatsApp:</h3>
                <p>+34 123 456 789</p>
                {/* Link para llamar o WhatsApp */}
                <a href="tel:+34123456789" className="text-yellow-600 hover:text-yellow-700 transition duration-300">Llamar ahora</a>
              </div>
            </div>
            <div className="flex items-start">
              <FaClock size={25} className="text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Horario:</h3>
                <p>Lunes a Viernes: 9:00 - 20:00</p>
                <p>Sábados: 10:00 - 15:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto (Opcional) o Mapa */}
          <div>
            {/* Opción 1: Placeholder para Mapa */}
            <div className="bg-gray-200 h-64 md:h-80 rounded-lg shadow-md flex items-center justify-center text-gray-500">
              Aquí podría ir un mapa interactivo (Google Maps Embed)
            </div>

            {/* Opción 2: Formulario Simple (requiere lógica adicional para funcionar) */}
            {/*
             <form className="space-y-4">
               <h3 className="text-xl font-semibold mb-4 text-gray-800">Envíanos un mensaje</h3>
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                 <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" />
               </div>
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                 <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" />
               </div>
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                 <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"></textarea>
               </div>
               <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                 Enviar Mensaje
               </button>
             </form>
             */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;