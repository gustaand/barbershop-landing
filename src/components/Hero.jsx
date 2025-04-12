import React from 'react';

// Recibe onReserveClick como prop
function Hero({ onReserveClick }) {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/barbershop-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-white px-4">
        {/* ... (título y párrafo) ... */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif animate-fade-in-down">
          Maloni <span className="text-yellow-500">Barbershop</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up delay-300">
          Estilo Clásico, Cortes Modernos. Tu mejor look empieza aquí.
        </p>

        {/* Botón para abrir el modal */}
        <button
          onClick={onReserveClick} // Llama a la función para abrir el modal
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded transition duration-300 text-lg animate-fade-in-up delay-500 mr-4" // Añadí margen por si añades otro botón
        >
          Reservar Ahora
        </button>

        {/* Puedes mantener o quitar el botón de 'Nuestros Servicios' */}
        <a
          href="#services"
          className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded transition duration-300 text-lg animate-fade-in-up delay-500"
        >
          Nuestros Servicios
        </a>
      </div>
    </section>
  );
}

export default Hero;