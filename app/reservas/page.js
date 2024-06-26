"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar.js';
import { Cita } from '../../components/Cita/Cita.js';
import { Formulario } from '../../components/Formulario/Formulario.js';

export default function Reservas() {
  const citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
  const [citas, setCitas] = useState(citasGuardadas);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    const citaConId = { ...nuevaCita, id: Date.now() };
    setCitas([...citas, citaConId]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <>
      <Navbar />
      <div className="reservas">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <h2>Crear mi Cita</h2>
              <Formulario agregarCita={agregarCita} />
            </div>
            <div className="one-half column">
              <h2>Administra tus citas</h2>
              {citas.map((cita) => (
                <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
