import React, { useState } from 'react'
import img1 from '../imagenes/img1.jpeg'
import img2 from '../imagenes/img2.jpeg'

export const Imagen = () => {

    const imagenes = [
        'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/210307/pexels-photo-210307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ];
    const [index, setImage] = useState(0);

    const cambiarImagen = () => {
        setImage( (index + 1) % imagenes.length ); 
    };
    
  return (
    <div>
      <img src={imagenes[index]} alt="paisajes" /><br/>
      <button onClick={cambiarImagen}>Cambiar Imagen</button>
      <hr/>
    </div>
  )
}

//El operador módulo (%) se utiliza para asegurar que el índice no exceda la longitud del array. 
//Si el índice incrementado es igual a la longitud del array, el resultado será 0, volviendo al primer elemento del array.z