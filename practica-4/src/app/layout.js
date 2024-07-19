"use client";

//
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
//
import { Tabla } from "./componentes/Tabla";
import datos from "./componentes/datos.json";
//
import { useEffect, useState } from "react";

// OBJ DE TABLA
// const datos = [
//   { text1: "Texto 1", text2: "Texto 2", icon: <i class="fab fa-github"></i> },
//   { text1: "Texto 1", text2: "Texto 2", icon: <i class="fas fa-camera"></i> },
//   { text1: "Texto 1", text2: "Texto 2" },
//   { text1: "Texto 1", text2: "Texto 2" },
//   { text1: "Texto 1", text2: "Texto 2" },
// ];

export default function RootLayout({  }) {
  // Cargar JSON em tabla
  const [tablaDatos, setTableData] = useState([]);
  useEffect(() => {
    setTableData(datos);
  }, []);

  return (
    <html lang="en">
      <body>
        <h1>Practica - #4</h1>
        <Tabla datos={tablaDatos} />
      </body>
    </html>
  );
}
