"use client";
import React, { useState } from 'react';
import { InputFormulario } from '../InputFormulario/InputFormulario.js';

export function Formulario({ agregarCita }) {
  const [nuevaCita, setNuevaCita] = useState({
    mascota: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    setNuevaCita({ ...nuevaCita, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarCita(nuevaCita);
    setNuevaCita({
      mascota: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container"> {/* Aplica la clase 'form-container' */}
      <h2>Crear mi Cita</h2>
      <InputFormulario
        label="Nombre"
        type="text"
        name="mascota"
        placeholder="Nombre de la mascota"
        value={nuevaCita.mascota}
        onChange={handleChange}
      />
      <InputFormulario
        label="Fecha"
        type="date"
        name="fecha"
        value={nuevaCita.fecha}
        onChange={handleChange}
      />
      <InputFormulario
        label="Hora"
        type="time"
        name="hora"
        value={nuevaCita.hora}
        onChange={handleChange}
      />
      <InputFormulario
        label="Síntomas"
        type="text"
        name="sintomas"
        placeholder="Descripción de los síntomas"
        value={nuevaCita.sintomas}
        onChange={handleChange}
      />
      <button type="submit" className="button-primary">
        Agregar Cita
      </button>
    </form>
  );
}
