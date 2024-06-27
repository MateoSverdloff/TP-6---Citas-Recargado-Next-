"use client";
import React from 'react';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
      <li className='navbar-item'><a href='/'>Home</a></li>
        <li className='navbar-item'><a href='quienes-somos'>Quiénes Somos</a></li>
        <li className='navbar-item'><a href='reservas'>Reservas</a></li>
        <li className='navbar-item'><a href='contacto'>Contacto</a></li>
      </ul>
    </nav>
  );
}
