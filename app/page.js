"use client";
import React, { useState, useEffect } from 'react';
import { Formulario } from '../components/Formulario/Formulario.js';
import Navbar from './Navbar.js';


export default function Home() {
  const agregarCita = (nuevaCita) => {

    console.log('Nueva cita:', nuevaCita);
  };

  return (
    <>
      <Navbar />
      <div className='bienvenida'>
        <h1>Bienvenida</h1>
        <p>¡Bienvenidos a la Veterinaria Vida Animal!</p>
        <p>En Veterinaria Vida Animal, nos apasiona el bienestar y la salud de tus mascotas. Nuestro objetivo es ofrecerte servicios veterinarios de la más alta calidad en un ambiente cálido y acogedor. Sabemos lo importante que es tu mascota para ti, por eso, nos comprometemos a cuidar de ellos como si fueran nuestros propios compañeros.</p>
        <p>Explora nuestros servicios, conoce a nuestro equipo y descubre por qué somos la mejor opción para el cuidado de tu mascota. ¡Estamos aquí para ayudarte en todo lo que necesites!</p>
      </div>
    </>
  );
}
