import React from 'react';
import './style.css';
import Carro from './Carro.js';
import Moto from './Moto.js';

export default function App() {
//buscar cards en css para dar estilos a mi pagina

  return (
    <div>
      <h1>Hello React</h1>
      <Carro Marca="Corvette C6" Descripcion="Vehiculo de alta velocidad" />
    </div>
  );
}
