"use client";
import React from 'react';

export function InputFormulario({ label, type, name, placeholder, value, onChange }) {
  return (
    <> 
      <label>{label}</label>
      <input
        type={type}
        name={name}
        autoComplete='off'
        className="u-full-width"
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
      />
    </>
  );
}