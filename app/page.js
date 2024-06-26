"use client";
import React, { useState } from 'react';
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
        <h1>Página de Bienvenida</h1>
        <p>¡Bienvenidos a la Veterinaria Vida Animal!</p>
        <p>En Veterinaria Vida Animal, nos apasiona el bienestar y la salud de tus mascotas. Nuestro objetivo es ofrecerte servicios veterinarios de la más alta calidad en un ambiente cálido y acogedor. Sabemos lo importante que es tu mascota para ti, por eso, nos comprometemos a cuidar de ellos como si fueran nuestros propios compañeros.</p>
        <p>Explora nuestros servicios, conoce a nuestro equipo y descubre por qué somos la mejor opción para el cuidado de tu mascota. ¡Estamos aquí para ayudarte en todo lo que necesites!</p>
      </div>
      <div id='quienes-somos' className='quienes-somos'>
        <h1>Quiénes Somos</h1>
        <p>
          En Veterinaria Vida Animal, somos más que un equipo de profesionales; somos una familia dedicada al cuidado de tus mascotas. Fundada por Mateo Sverdloff y Manuel Ramasso, nuestra clínica nació del amor y la pasión por los animales y el compromiso de brindarles una vida saludable y feliz.
        </p>
        <h2>Mateo Sverdloff</h2>
        <p><strong>Co-fundador y Director Veterinario</strong></p>
        <p>Con más de 15 años de experiencia en la medicina veterinaria, Mateo Sverdloff ha dedicado su carrera a mejorar la salud y el bienestar de los animales. Su enfoque compasivo y su amplia experiencia hacen de él un veterinario de confianza para cualquier tipo de mascota.</p>
        <h2>Manuel Ramasso</h2>
        <p><strong>Co-fundador y Gerente General</strong></p>
        <p>Manuel Ramasso, con su sólida formación en gestión empresarial y su amor por los animales, asegura que nuestra clínica funcione sin problemas. Su dedicación y visión han sido fundamentales para establecer Veterinaria Vida Animal como un lugar de excelencia en cuidado animal.</p>
        <h2>Nuestro Compromiso</h2>
        <p>En Veterinaria Vida Animal, nuestro compromiso es brindar atención veterinaria integral y personalizada. Ofrecemos una amplia gama de servicios, desde chequeos rutinarios y vacunaciones hasta cirugías y tratamientos especializados. Nuestro equipo de veterinarios y técnicos está siempre disponible para ofrecerte asesoramiento y apoyo en todo momento.</p>
        <p>Gracias por confiar en nosotros para el cuidado de tus preciados compañeros. ¡Esperamos verte pronto en nuestra clínica!</p>
      </div>
      <div id='reservas' className='reservas'>
      </div>
      <div id='contacto' className='contacto'>
      </div>
    </>
  );
}
