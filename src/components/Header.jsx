import React from 'react';

// Recibe onReserveClick como prop
function Header({ onReserveClick }) {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-40"> {/* Ajusta z-index si es necesario, debe ser menor que el del modal */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500 font-serif">
          Maloni Barbershop
        </h1>
        <div>
          {/* Cambia el 'a' por un 'button' y usa onReserveClick */}
          <button
            onClick={onReserveClick} // Llama a la función para abrir el modal
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Reservar Cita
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;