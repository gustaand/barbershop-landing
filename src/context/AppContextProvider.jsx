import React, { useEffect, useState } from 'react';
import { AppContext } from './AppContext';
import axios from 'axios';

export const AppContextProvider = ({ children }) => {


  const [horarios, setHorarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // OBTENER HORARIOS
  const obtenerHorarios = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:4000/api/horarios");

      // Ordenar los horarios por hora
      const horariosOrdenados = data.sort((a, b) => {
        const [horaA, minA] = a.hora.split(":").map(Number);
        const [horaB, minB] = b.hora.split(":").map(Number);
        return horaA !== horaB ? horaA - horaB : minA - minB;
      });

      setHorarios(horariosOrdenados);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener horarios:", error);
      setError("Error al obtener horarios disponibles");
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerHorarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // CREAR CITA
  const createAppointment = async (appointmentData, horaID) => {
    setLoading(true);
    setError(null);

    try {
      // Asegurarnos de que estamos enviando los datos correctos
      console.log('Datos enviados a la API:', appointmentData);
      const response = await axios.post('http://localhost:4000/api/citas', appointmentData);

      await axios.post(
        `http://localhost:4000/api/horarios/${horaID}/agregar-fecha`,
        { fecha: appointmentData.fecha }
      );

      obtenerHorarios();

      setLoading(false);
      return {
        success: true,
        data: response.data
      };
    } catch (err) {
      console.error("Error al crear cita:", err);
      setError(err.response?.data?.message || 'Error al crear la cita');
      setLoading(false);
      return {
        success: false,
        error: err.response?.data?.message || 'Error al crear la cita'
      };
    }
  };


  const value = {
    // Estados
    loading,
    error,
    horarios,

    // Funciones
    createAppointment,
    obtenerHorarios
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
