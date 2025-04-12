import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Icono para cerrar

// Puedes pasar la lista de servicios como prop si quieres que sea dinámica
const defaultServices = [
  "Corte Clásico",
  "Arreglo de Barba",
  "Afeitado Tradicional",
  "Corte y Barba",
  "Corte Infantil",
  "Tratamientos Capilares",
];

function ReservationModal({ isOpen, onClose, services = defaultServices }) {
  // Estados para los campos del formulario
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(services[0] || ''); // Selecciona el primero por defecto
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false); // Para mostrar mensaje de éxito (opcional)
  const [error, setError] = useState(''); // Para mostrar errores simples

  // No renderizar nada si el modal no está abierto
  if (!isOpen) {
    return null;
  }

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir recarga de página
    setError(''); // Limpiar errores previos

    // Validación mejorada
    const phoneRegex = /^[0-9]{10,15}$/; // Asegura que el teléfono tenga entre 10 y 15 dígitos
    const today = new Date();
    const selectedDate = new Date(date);

    if (!name.trim() || !phone.trim() || !selectedService || !date || !time) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError('Por favor, ingresa un número de teléfono válido (10-15 dígitos).');
      return;
    }

    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      setError('La fecha seleccionada no puede ser anterior a hoy.');
      return;
    }

    const [hours, minutes] = time.split(':').map(Number);
    if (hours < 9 || (hours === 19 && minutes > 30) || hours > 19) {
      setError('La hora debe estar entre las 09:00 y las 19:30.');
      return;
    }

    // Aquí es donde enviarías los datos a tu backend o sistema de reservas
    console.log('Reserva enviada:', { name, phone, service: selectedService, date, time });

    // Simulación de éxito
    setSubmitted(true);

    // Opcional: Limpiar formulario después de un tiempo y cerrar
    setTimeout(() => {
      setName('');
      setPhone('');
      setSelectedService(services[0] || '');
      setDate('');
      setTime('');
      setSubmitted(false);
      onClose(); // Cierra el modal
    }, 3000); // Cierra después de 3 segundos
  };

  // Manejador para cerrar el modal al hacer clic fuera del contenido
  const handleBackdropClick = (e) => {
    // Si el clic fue directamente en el fondo (backdrop), cierra el modal
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // Fondo oscuro semi-transparente (Backdrop)
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={handleBackdropClick} // Cierra al hacer clic en el fondo
      aria-modal="true"
      role="dialog"
    >
      {/* Contenedor del Modal */}
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Evita que clics dentro cierren el modal
      >
        {/* Cabecera del Modal */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Reservar Cita</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition duration-150"
            aria-label="Cerrar modal"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Cuerpo del Modal (Formulario) */}
        {submitted ? (
          <div className="p-6 text-center text-green-600">
            <h4 className="text-lg font-semibold mb-2">¡Reserva enviada!</h4>
            <p>Nos pondremos en contacto contigo si es necesario. El modal se cerrará pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Nombre Completo</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">Teléfono / WhatsApp</label>
              <input
                type="tel" // Usar 'tel' para mejor experiencia móvil
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>
            <div>
              <label htmlFor="service" className="block mb-1 text-sm font-medium text-gray-700">Servicio Deseado</label>
              <select
                id="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 bg-white"
                required
              >
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block mb-1 text-sm font-medium text-gray-700">Fecha</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  // Opcional: Poner fecha mínima (hoy)
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="block mb-1 text-sm font-medium text-gray-700">Hora Aproximada</label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  // Opcional: Limitar horas (ej: 9:00 a 19:30)
                  min="09:00"
                  max="19:30"
                  step="1800" // Intervalos de 30 min (1800 segundos)
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
            </div>

            {/* Footer del Formulario (Botón de envío) */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              >
                Confirmar Reserva
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ReservationModal;