import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <div className="container mx-auto px-6">
        <p>© {currentYear} Maloni Barbershop. Todos los derechos reservados.</p>
        {/* Aquí podrías añadir enlaces a redes sociales si quieres */}
        {/* <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
          <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
        </div> */}
      </div>
    </footer>
  );
}

// Si quieres iconos sociales, importa: import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default Footer;