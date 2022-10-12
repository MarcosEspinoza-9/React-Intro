import React from 'react';
import './style.css';

export default function Carro(props) {
    const estiloDiv ={
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"

    };
    const estilImgCard = {
      

    }
  
  return (
    <div class= {{estiloDiv}}>
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
