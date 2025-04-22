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
            <div className="bg-gray-200 h-56 sm:h-64 md:h-80 rounded-lg shadow-md flex items-center justify-center text-gray-500 text-center box-border overflow-hidden select-none p-1">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.7055825946627!2d3.210238375824039!3d39.56624567158892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1296490755ffc629%3A0x12710f517c219131!2sCarrer%20de%20s&#39;Hort%20de%20la%20Vila%2C%203%2C%2007500%20Manacor%2C%20Illes%20Balears!5e0!3m2!1ses!2ses!4v1745353006939!5m2!1ses!2ses"
                className="w-full h-full rounded-lg select-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* Si usas el formulario, asegúrate que los inputs usen w-full y el espaciado sea cómodo */}
          </div>
        </div>
      </div>
    </section >
  );
}

export default Contact;