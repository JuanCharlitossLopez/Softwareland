'use client';//////////////////////////////////////////
import React, { useState , useEffect} from 'react'
import { Button } from 'reactstrap';


export const Colores = () => {
    const [color, setColor] = useState('#FFFFFF');

    const cambiarColores = () => {
        const colores = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#FFD433'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        document.body.style.backgroundColor = colorAleatorio;
        // console.log(colorAleatorio)
        setColor(colorAleatorio);
    }

    // Cambia los colores aleatorios automaticamente
    // useEffect(() => {
    //     setTimeout(() => {
    //         cambiarColores();
    //     },3000);
    // }, [color])
    

    return (
    <div>
        <button onClick={cambiarColores}> Cambiar Color</button>
        <Button color='danger' onClick={cambiarColores}>Danger!</Button>
    </div>
  )
}
