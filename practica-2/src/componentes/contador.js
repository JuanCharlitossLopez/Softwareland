import React, { useState, useEffect } from 'react'


export const Contador = () => {
    //      variable, funcion   = useState
    const [numero, setNumero] = useState(0);
    //
    const sumar = () => {
        setNumero(numero + 1);
    }
    //
    const restar = () => {
        setNumero(numero - 1);
    }

    // use efect
    useEffect(() => {
      // setNumero(10)
      console.log('cambio el numero');
    }, [numero])
    

  return (
    <div>
        <h1>Contador: {numero}</h1>
        <button onClick={sumar}>Aumentar</button>
        <button onClick={restar}>Disminuir</button>
        <hr/>
    </div>
  )
}
