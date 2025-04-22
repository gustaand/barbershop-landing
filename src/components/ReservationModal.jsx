import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/useAppContext';
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

  const { createAppointment, loading, error: contextError, horarios } = useAppContext();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(services[0] || ''); // Selecciona el primero por defecto

  // Establecer la fecha actual como valor por defecto (si no es domingo)
  const getTodayOrNextValidDay = () => {
    const today = new Date();
    // Si es domingo (0), avanzar al lunes (1)
    if (today.getDay() === 0) {
      today.setDate(today.getDate() + 1);
    }
    return today.toISOString().split('T')[0];
  };

  const today = getTodayOrNextValidDay();
  const [date, setDate] = useState(today);
  const [submitted, setSubmitted] = useState(false); // Para mostrar mensaje de éxito (opcional)
  const [error, setError] = useState(''); // Para mostrar errores simples
  const [horaObject, setHoraObject] = useState({});
  const [horaID, setHoraID] = useState('');
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);

  // Verificar si una fecha es válida (no es domingo)
  const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return date.getDay() !== 0; // 0 es domingo
  };

  useEffect(() => {
    if (!Array.isArray(horarios)) return;

    // Si la fecha seleccionada es domingo, no mostrar horarios
    if (!isValidDate(date)) {
      setHorariosDisponibles([]);
      return;
    }

    const horariosFiltrados = horarios.filter(
      (horario) => !horario.fecha?.includes(date)
    );

    setHorariosDisponibles(horariosFiltrados);

    setHoraObject({});
    setHoraID('');
  }, [date, horarios]);



  // No renderizar nada si el modal no está abierto
  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validación mejorada
    const phoneRegex = /^[0-9]{9,14}$/; // Asegura que el teléfono tenga entre 9 y 14 dígitos
    const today = new Date();
    const selectedDate = new Date(date);

    if (!name.trim() || !phone.trim() || !selectedService || !date || !horaObject.hora) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError('Por favor, ingresa un número de teléfono válido (9-14 dígitos).');
      return;
    }

    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      setError('La fecha seleccionada no puede ser anterior a hoy.');
      return;
    }

    // Verificar si la fecha seleccionada es domingo
    if (!isValidDate(date)) {
      setError('Los domingos no están disponibles para reservas.');
      return;
    }

    // Ya no necesitamos validar la hora porque viene del backend y ya está validada

    // Crear objeto con los datos de la reserva
    const appointmentData = {
      nombreCliente: name,
      telefono: phone,
      servicio: selectedService,
      fecha: date,
      hora: horaID, // Enviamos el ID del horario como referencia
    };

    // Llamar a la API para crear la cita
    const result = await createAppointment(appointmentData, horaID);

    if (result.success) {
      // Mostrar mensaje de éxito
      setSubmitted(true);

      // Limpiar formulario después de un tiempo y cerrar
      setTimeout(() => {
        setName('');
        setPhone('');
        setSelectedService(services[0] || '');
        setDate(today); // Resetear a la fecha actual
        setHoraObject({ hora: '' });
        setHoraID('');
        setSubmitted(false);
        onClose(); // Cierra el modal
      }, 3000); // Cierra después de 3 segundos
    } else {
      // Mostrar error
      setError(result.error);
    }
  };

  const handleBackdropClick = (e) => {
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
            {(error || contextError) && (
              <p className="text-red-500 text-sm mb-4">{error || contextError}</p>
            )}
            {loading && (
              <p className="text-blue-500 text-sm mb-4">Enviando tu reserva...</p>
            )}
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
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
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
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value);

                    // Verificar si la fecha seleccionada es domingo
                    if (selectedDate.getDay() === 0) {
                      // Si es domingo, mostrar un mensaje de error y no actualizar la fecha
                      setError('Los domingos no están disponibles para reservas.');
                      return;
                    }

                    // Si no es domingo, actualizar la fecha y limpiar errores
                    setError('');
                    setDate(e.target.value);
                  }}
                  // Poner fecha mínima (hoy)
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="time" className="block mb-1 text-sm font-medium text-gray-700">Hora Disponible</label>
                {!date ? (
                  <p className="text-sm text-gray-500">Selecciona una fecha primero</p>
                ) : loading ? (
                  <p className="text-sm text-gray-500">Cargando horarios disponibles...</p>
                ) : horariosDisponibles.length > 0 ? (
                  <select
                    id="time"
                    value={horaObject.hora}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 bg-white'
                    onChange={(e) => {
                      const selectedHora = horariosDisponibles.find(
                        (horario) => horario.hora === e.target.value
                      );
                      if (selectedHora) {
                        setHoraObject(selectedHora);
                        setHoraID(selectedHora._id || '');
                      } else {
                        setHoraObject({ hora: e.target.value });
                        setHoraID('');
                      }
                    }}
                    required
                  >
                    <option value="">Selecciona una hora</option>
                    {horariosDisponibles.map((horario) => (
                      <option key={horario._id || horario.id || horario.hora} value={horario.hora}>
                        {horario.hora}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="text-sm text-red-500">No hay horarios disponibles para esta fecha.</p>
                )}
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