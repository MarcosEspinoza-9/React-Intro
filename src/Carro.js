import React from 'react';
import './style.css';

export default function Carro(props) {
  //codigo del profe https://stackblitz.com/edit/react-ef74tq?file=src%2FApp.js,src%2FCar.js
    const estiloDiv ={
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"

    };
    const estilImgCard = {
      

    }
  //DEclaracion de una funcion
 const hacerbeep = ( sonido) => {
alert(sonido);

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
      <button onClick={()=> hacerbeep(propos.sonido)}> hacer beep beep </button>
     
    </div>
  );
}
