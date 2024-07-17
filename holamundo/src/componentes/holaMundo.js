
export const Hola = (props) => { 
  // las porps pueden ser cadenas, arreglos, objetos
  //mostrar las props en consola, siempre es un objecto
  console.log(props)
  //mostrar nombre
  console.log(props.nombre)
  //mostrar edad
  console.log(props.edad)
  //mostrar nacionalidad
  console.log(props.nacionalidad)

  return (
    <div className="usuario">
        <h1 className="nombre">{props.nombre}</h1>
        <p className="edad">Edad: {props.edad}</p>
        <p className="nacionalidad">Nacionalidad: {props.nacionalidad}</p>
        <img className="imagen" src={props.imagen} alt="perfil-nombre-img"></img>
        <hr></hr>
    </div>
    )
}
