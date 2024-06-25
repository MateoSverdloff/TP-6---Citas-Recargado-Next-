"use client";
import React, { useState } from 'react';
import { Formulario } from '../components/Formulario/Formulario.js';

export default function Home() {
  const agregarCita = (nuevaCita) => {
    // Lógica para agregar la cita
    console.log('Nueva cita:', nuevaCita);
  };

  return (
    <div>
      <h1>Formulario de Cita</h1>
      <Formulario agregarCita={agregarCita} />
    </div>
  );
}
