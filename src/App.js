import React from 'react';
import './style.css';
import Carro from './Carro.js';
import Moto from './Moto.js';

export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Carro Marca="Corvette C6"
            Descripcion = "Vehiculo de alta velocidad"
      />
      <Moto
        Marcas = "Yamaha R6"
        descripcion = "Soy el mas veloz"
      
      />
    </div>
  );
}
