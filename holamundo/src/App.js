
// Componentes
import {Hola } from './componentes/holaMundo';
import {Titulo} from './componentes/Titulo';
import {Parrafo} from './componentes/Parrafo';
import {Imagen} from './componentes/Imagen';
// Estilos
import './styles/holaMundo.css';
import './styles/libros.css';

// Imagenes
import logo1 from './imagenes/juan.jpg';
import logo2 from './imagenes/david.jpg';
import libro1 from './imagenes/libro.jpg';


function App() {
  return (
    <div className="body">
      {/* <Hola nombre="Juan Lopez" edad="23" nacionalidad="MEX" imagen={logo1}/> */}
      {/* <Hola nombre="David Perez" edad="22" nacionalidad="USA" imagen={logo2}/> */}
      <Titulo titulo="Hábitos atómicos"/>
      <Parrafo parrafo="HÁBITOS ATÓMICOS parte de una simple pero poderosa pregunta: ¿Cómo podemos vivir mejor? Sabemos que unos buenos hábitos nos permiten mejorar significativamente nuestra vida, pero con frecuencia nos desviamos del camino: dejamos de hacer ejercicio, comemos mal, dormimos poco, despilfarramos. ¿Por qué es tan fácil caer en los malos hábitos y tan complicado seguir los buenos? James Clear nos brinda fantásticas ideas basadas en investigaciones científicas, que le permiten revelarnos cómo podemos transformar pequeños hábitos cotidianos para cambiar nuestra vida y mejorarla. Esta guía pone al descubierto las fuerzas ocultas que moldean nuestro comportamiento—desde nuestra mentalidad, pasando por el ambiente y hasta la genética— y nos demuestra cómo aplicar cada cambio a nuestra vida y a nuestro trabajo. Después de leer este libro, tendrás un método sencillopara desarrollar un sistema eficaz que te conducirá al éxito.Aprende cómo… Darte tiempo para desarrollar nuevos hábitos Superar la falta de motivación y de fuerza de voluntad Diseñar un ambiente para que el éxito sea fácil de alcanzar Regresar al buen camino cuando te hayas desviado un poco."/>
      <Imagen imagen={libro1}/>
    </div>
  );
}

export default App;
