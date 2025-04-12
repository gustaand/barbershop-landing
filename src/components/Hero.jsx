import React from 'react';

function Hero({ onReserveClick }) {
  return (
    <section
      id="hero"
      // min-h-screen es a menudo mejor que h-screen para evitar cortes si el contenido es alto en móvil
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/barbershop-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Añadir padding horizontal base para que el texto no toque los bordes en móvil */}
      <div className="relative z-10 text-white px-4 sm:px-6">
        {/* Tamaños de fuente base mucho más pequeños, incrementando con breakpoints */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 font-serif animate-fade-in-down">
          Maloni <span className="text-yellow-500">Barbershop</span>
        </h1>
        {/* Tamaño de fuente base más pequeño, margen inferior ajustado */}
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 font-light animate-fade-in-up delay-300">
          Estilo Clásico, Cortes Modernos. Tu mejor look empieza aquí.
        </p>
        {/* Contenedor flex para botones, se apilan en pantallas muy pequeñas si es necesario (flex-wrap) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-500">
          {/* Botón principal con padding ajustado */}
          <button
            onClick={onReserveClick}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded transition duration-300 text-base md:text-lg w-full sm:w-auto" // Full width en móvil, auto en sm+
          >
            Reservar Ahora
          </button>
          {/* Botón secundario con padding ajustado */}
          <a
            href="#services"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded transition duration-300 text-base md:text-lg w-full sm:w-auto" // Full width en móvil, auto en sm+
          >
            Nuestros Servicios
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;