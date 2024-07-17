import React, { useState } from 'react'

export const Colores = () => {
    const [color, setColor] = useState('#FFFFFF');

    const cambiarColores = () => {
        const colores = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#FFD433'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        // console.log(colorAleatorio)
        setColor(colorAleatorio);

    }
    return (
    <div style={{backgroundColor: color, height:'200px', width:'100%'}}>
        <button onClick={cambiarColores}> Cambiar Color</button>
        
    </div>
  )
}
