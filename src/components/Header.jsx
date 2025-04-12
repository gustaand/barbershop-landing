import React from 'react';

function Header({ onReserveClick }) {
  return (
    // Reducimos padding vertical base, aumentamos en md
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex justify-between items-center">
        {/* Tamaño de fuente base más pequeño, aumenta en md */}
        <h1 className="text-xl md:text-2xl font-bold text-yellow-500 font-serif">
          Maloni Barbershop
        </h1>
        <div>
          {/* Botón con padding y tamaño de fuente más pequeños base, aumenta en md */}
          <button
            onClick={onReserveClick}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-1 px-3 md:py-2 md:px-4 rounded transition duration-300 text-sm md:text-base"
          >
            Reservar Cita
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;