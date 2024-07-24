
import { Formulario } from "./componentes/Formulario";

import { DateInput } from "./componentes/Date";
//
import 'bootstrap/dist/css/bootstrap.min.css';


export default function RootLayout() {
  return (
    <html lang="es">
      <body> 
          <h1>Practica #5 - Formularios</h1>
          <Formulario/>
          {/* <DateInput/> */}
      </body>
    </html>
  );
}
