"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Table, Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export const Tabla = ({ datos }) => {
  const [modalData, setModalData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleButton = (props) => {
    setModalData(props);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Texto 1</th>
            <th>Texto 2</th>
            <th>Icono</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((row, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{row.text1}</td>
              <td>{row.text2}</td>
              <td>
                <FontAwesomeIcon icon={faCoffee} />
                {/* <i class={row.icon}></i> */}
              </td>
              <td>
                <Button color="secondary" onClick={() => handleButton(row.img)}>
                  Acción
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal size="lg" isOpen={modalOpen} toggle={handleClose}>
        <ModalBody>
          {modalData && <img src={modalData} alt="Imagen" />}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
