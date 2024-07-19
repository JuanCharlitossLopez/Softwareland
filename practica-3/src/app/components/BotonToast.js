"use client";
import React from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";

export const BotonToast = () => {
  // variable de estado
  const [activo, setMostrar] = React.useState(false);
  // fincion de mostrar o ocultar
  const mostrar = () => {
    setMostrar(!activo);
  };

  return (
    <div>
      <Button onClick={mostrar}>Mostrar/Ocultar Toast</Button>
      {activo && (
        <div className="p-3 bg-info my-2 rounded">
          <Toast>
            <ToastHeader>Reactstrap</ToastHeader>
            <ToastBody>
              This is a toast on a primary background — check it out!
            </ToastBody>
          </Toast>
        </div>
      )}
    </div>
  );
};
