"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

export const Formulario = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    age: 0,
    email: "",
    password: "",
    gender: "",
    role: "Ing. Sistemas",
    options: "",
    notes: "",
    registrationDate: new Date(),
  });

  const handleFormData = (data) => {
    setFormData({
      ...formData,
      ...data,
    });
  };

  // Mostrar modal
  const handleSubmit = () => {
    setModal(true);
  };
  //   Reiniciar
  const handleReset = () => {
    setFormData({
      name: "",
      lastName: "",
      age: 0,
      email: "",
      password: "",
      gender: "",
      role: "",
      options: [],
      notes: "",
      registrationDate: new Date(),
    });
  };
  // Estado del modal
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Form>
        {/* Nombre */}
        <FormGroup>
          <Label for="name">Nombre:</Label>
          <Input
            id="name"
            name="name"
            placeholder="Ingresa tu nombre"
            type="text"
            onChange={(event) => {
              console.log(event.target.value);
              handleFormData({ name: event.target.value });
            }}
            value={formData.name}
          />
        </FormGroup>
        {/* Apellido */}
        <FormGroup>
          <Label for="lastName">Apellido:</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Ingresa tu apellido"
            type="text"
            onChange={(event) => {
              console.log(event.target.value);
              handleFormData({ lastName: event.target.value });
            }}
            value={formData.lastName}
          />
        </FormGroup>
        {/* Email */}
        <FormGroup>
          <Label for="email">Correo:</Label>
          <Input
            id="email"
            name="email"
            placeholder="Ingresa tu correo"
            type="email"
            onChange={(event) => {
              console.log(event.target.value);
              handleFormData({ email: event.target.value });
            }}
            value={formData.email}
          />
        </FormGroup>
        {/* Contrasenia */}
        <FormGroup>
          <Label for="password">Contrasenia:</Label>
          <Input
            id="password"
            name="password"
            placeholder="Ingresa tu contrasenia"
            type="password"
            onChange={(event) => {
              console.log(event.target.value);
              handleFormData({ password: event.target.value });
            }}
            value={formData.password}
          />
        </FormGroup>
        {/* Edad */}
        <FormGroup>
          <Label for="age">Edad:</Label>
          <Input
            id="age"
            name="age"
            placeholder="0"
            type="number"
            onChange={(event) => {
              console.log(event.target.value);
              handleFormData({ age: event.target.value });
            }}
            value={formData.age}
          />
        </FormGroup>
        {/* Genero */}
        <FormGroup>
          <Label for="gender">Genero:</Label>
          <FormGroup>
            <Input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={(event) => {
                console.log(event.target.value);
                handleFormData({ gender: event.target.value });
              }}
            />
            Masculino
            <br />
            <Input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={(event) => {
                console.log(event.target.value);
                handleFormData({ gender: event.target.value });
              }}
            />
            Femenino
          </FormGroup>
        </FormGroup>
        {/* Roles */}
        <FormGroup row>
          <Label for="role" sm={2}>
            Selecciona tu Rol:
          </Label>
          <Col sm={10}>
            <Input
              id="selectRol"
              name="role"
              type="select"
              value={formData.role}
              //   defaultValue="Ing. Sistemas"
              onChange={(event) => {
                console.log(event.target.value);
                handleFormData({ role: event.target.value });
              }}
            >
              <option>Ing. Sistemas</option>
              <option>Ing. Industrial</option>
              <option>Ing. Gastronomia</option>
              <option>Ing. Mecanica</option>
              <option>Ing. Electronica</option>
            </Input>
          </Col>
        </FormGroup>
        {/* Opciones */}
        <FormGroup>
          <Label for="options">Opciones:</Label>
          <FormGroup>
            <Input type="checkbox" name="options" />
            Opcion 1
            <br />
            <Input type="checkbox" name="options" />
            Opcion 2
          </FormGroup>
        </FormGroup>
        {/* Notas */}
        <FormGroup>
          <Label for="notes">Notas:</Label>
          <Input
            id="notes"
            name="notes"
            placeholder="0"
            type="textarea"
            value={formData.notes}
            onChange={(event) => {
              console.log(event.target.value);
              handleFormData({ notes: event.target.value });
            }}
          />
        </FormGroup>
        {/* Fecha registro */}
        <FormGroup>
          <Label for="date">Fecha registro:</Label>
          <Input
            id="date"
            name="date"
            placeholder="0"
            type="date"
            min={new Date().toISOString().split("T")[0]} // Seleccion Hoy en adelante
            value={formData.registrationDate.toLocaleDateString("en-CA")} // Formato: yyyy-MM-dd
            onChange={(event) => {
              const newDate = new Date(event.target.value);
              handleFormData({ registrationDate: newDate });
            }}
          />
        </FormGroup>
        {/* Boton */}
        <Button color="primary" onClick={handleSubmit}>
          Mostrar
        </Button>
        <Button color="secondary" onClick={handleReset}>
          Reiniciar
        </Button>
      </Form>

      {/* MODAL */}
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Información Registrada
        </ModalHeader>
        <ModalBody>
          <p>Nombre: {formData.name}</p>
          <p>Apellido: {formData.lastName}</p>
          <p>Correo: {formData.email}</p>
          <p>Contraseña: {formData.password}</p>
          <p>Edad: {formData.age}</p>
          <p>Género: {formData.gender}</p>
          <p>Rol: {formData.role}</p>
          <p>Opciones:</p>
          <p>Notas: {formData.notes}</p>
          <p>
            Fecha de registro:
            {formData.registrationDate.toLocaleDateString()}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal(!modal)}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
