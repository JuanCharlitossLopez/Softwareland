import React, { useState , useEffect} from 'react'


export const Colores = () => {
    const [color, setColor] = useState('#FFFFFF');

    const cambiarColores = () => {
        const colores = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#FFD433'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        document.body.style.backgroundColor = colorAleatorio;
        // console.log(colorAleatorio)
        setColor(colorAleatorio);
    }

    useEffect(() => {
        setTimeout(() => {
            cambiarColores();
        },2000);
    }, [color])
    

    return (
    <div style={{backgroundColor: color, height:'200px', width:'100%'}}>
        <button onClick={cambiarColores}> Cambiar Color</button>
        
    </div>
  )
}
