import React from 'react';
import './style.css';

export default function Carro(props) {
  return (
    <div class= "contenedor">
      <h2>Soy un carro {props.Marca} </h2>
      <img
        src="https://i.ytimg.com/vi/GUQ3DCM3GCQ/mqdefault.jpg"
        alt="imagen del carro"
        width="250px"
      />
      <p>{props.Descripcion}</p>
     
    </div>
  );
}
