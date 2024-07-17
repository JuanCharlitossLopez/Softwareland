import { Colores } from "./componentes/colores";
import { Contador } from "./componentes/contador";
import { Imagen } from "./componentes/imagen";


function App() {
  return (
    <div className="App">
      <Contador/>
      <Imagen/>
      <Colores/>
    </div>
  );
}

export default App;
