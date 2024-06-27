"use client";
import Navbar from '../Navbar.js';
import { useState, useEffect } from 'react';

export default function Contacto() {
    const [email, setEmail] = useState('');
    const [problem, setProblem] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email.includes('@gmail.com')) {
            setMessage('Por favor, ingrese un correo de Gmail válido.');
        } else if (problem.trim() === '') {
            setMessage('Por favor, describa su problema.');
        } else {
            setMessage('Formulario enviado con éxito (a donde? no se jeje).');
        }
    };

    return (
        <>
            <Navbar />
            <div className='form-page'>
                <h1>Contacto</h1>
                <div className="form-container">
                    <h2>Formulario de Contacto</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Correo Electrónico (Gmail):</label>
                        <input 
                            autoComplete='off'
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="ejemplo@gmail.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        
                        <label htmlFor="problem">Describa su problema:</label>
                        <textarea 
                            id="problem" 
                            name="problem" 
                            rows="4" 
                            placeholder="Escriba aquí su problema" 
                            value={problem} 
                            onChange={(e) => setProblem(e.target.value)} 
                            required 
                        />
                        
                        <button type="submit">Enviar</button>
                    </form>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
        </>
    );
}