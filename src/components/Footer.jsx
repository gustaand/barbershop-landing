import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Padding vertical base ajustado
    <footer className="bg-gray-900 text-gray-400 py-4 md:py-6 text-center">
      {/* Padding horizontal base */}
      <div className="container mx-auto px-4 sm:px-6">
        {/* Tamaño de fuente base opcionalmente más pequeño */}
        <p className="text-sm md:text-base">© {currentYear} Maloni Barbershop. Todos los derechos reservados.</p>
        {/* Social icons (si los tienes) - asegúrate que el espaciado funcione en móvil */}
      </div>
    </footer>
  );
}

export default Footer;