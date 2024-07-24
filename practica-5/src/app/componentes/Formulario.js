"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import "./Styles_Form.css";

// OBJ
export const Formulario = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    age: 18,
    email: "",
    password: "",
    gender: {
      male: true,
      female: false,
    },
    role: "Ing. Sistemas",
    options: false, //falta
    notes: "",
    registrationDate: "",
  });

  /**
   * Función para manejar los datos de un formulario.
   * Recibe un objeto con los datos a actualizar y los combina con los datos existentes.
   * @param {Object} data - Datos a actualizar en el formulario.
   */
  const handleFormData = (data) => {
    setFormData({
      ...formData, // Conserva los datos existentes en el formulario.
      ...data, // Agrega o actualiza los datos recibidos.
    });
  };

  // Mostrar form en modal
  const handleSubmit = () => {
    setModal(true);
  };
  //   Reiniciar
  const handleReset = () => {
    setFormData({
      name: "",
      lastName: "",
      age: 18,
      email: "",
      password: "",
      gender: {
        male: true,
        female: false,
      },
      role: "Ing. Sistemas",
      options: false,
      notes: "",
      registrationDate: "",
    });
    setError({
      name: "",
      lastName: "",
      email: "",
      age: "",
      registrationDate: "",
    });
    setValid({
      name: true,
      lastName: false,
      email: false,
      age: false,
      registrationDate: false,
    });
  };
  // Estado del modal
  const [modal, setModal] = useState(false);

  // Validaciones
  const [error, setError] = useState({
    name: "",
    lastName: "",
    email: "",
    age: "",
    registrationDate: "",
  });

  // Agregar validacion ReactStrap
  const [valid, setValid] = useState({
    name: false,
    lastName: false,
    email: false,
    age: false,
    registrationDate: false,
  });

  //Funcion validar form
  const validateName = (name) => {
    const regex = /^[a-zA-Z ]+$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validateAge = (age) => {
    return age > 0 && age <= 100;
  };

  const validateDate = (date) => {
    const today = new Date();
    const inputDate = new Date(date);
    return inputDate >= today;
  };

  return (
    <div className="contenedor_form">
      <Form className="form">
        {/* Nombre */}
        <FormGroup>
          <Label for="name">Nombre:</Label>
          <Input
            id="name"
            name="name"
            placeholder="Ingresa tu nombre"
            type="text"
            valid={validateName(formData.name)}
            invalid={!validateName(formData.name)}
            onChange={(event) => {
              handleFormData({ name: event.target.value });
            }}
            value={formData.name}
          />
          {!validateName(formData.name) && (
            <FormFeedback>Este campo solo acepta letras</FormFeedback>
          )}
        </FormGroup>
        {/* Apellido */}
        <FormGroup>
          <Label for="lastName">Apellido:</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Ingresa tu apellido"
            type="text"
            valid={validateName(formData.lastName)}
            invalid={!validateName(formData.lastName)}
            onChange={(event) => {
              handleFormData({ lastName: event.target.value });
            }}
            value={formData.lastName}
          />
          {!validateName(formData.lastName) && (
            <FormFeedback>Este campo solo acepta letras</FormFeedback>
          )}
        </FormGroup>
        {/* Email */}
        <FormGroup>
          <Label for="email">Correo:</Label>
          <Input
            id="email"
            name="email"
            placeholder="Ingresa tu correo"
            type="email"
            valid={validateEmail(formData.email)}
            invalid={!validateEmail(formData.email)}
            onChange={(event) => {
              handleFormData({ email: event.target.value });
            }}
            value={formData.email}
          />
          {!validateEmail(formData.email) && (
            <FormFeedback>
              Este campo debe tener formato de correo electrónico
            </FormFeedback>
          )}
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
            min="1"
            max="100"
            valid={validateAge(formData.age)}
            invalid={!validateAge(formData.age)}
            onChange={(event) => {
              handleFormData({ age: event.target.value });
            }}
            value={formData.age}
          />
          {!validateAge(formData.age) && (
            <FormFeedback>
              Este campo solo acepta números positivos hasta 100
            </FormFeedback>
          )}
        </FormGroup>
        {/* Genero */}
        <FormGroup>
          <Label for="gender">Genero:</Label>
          <FormGroup>
            <Input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender.male}
              onChange={(event) =>
                handleFormData({
                  gender: { male: event.target.checked, female: false },
                })
              }
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
            <Input
              type="checkbox"
              name="options"
              checked={formData.options}
              onChange={(event) => {
                console.log(event.target.value);
                handleFormData({ options: event.target.checked });
              }}
            />
            Opcion 1
            <br />
          </FormGroup>
        </FormGroup>
        {/* Notas */}
        <FormGroup>
          <Label for="notes">Notas:</Label>
          <Input
            id="notes"
            name="notes"
            placeholder="Agrega tus notas"
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
            valid={validateDate(formData.registrationDate)}
            invalid={!validateDate(formData.registrationDate)}
            onChange={(event) => {
              handleFormData({ registrationDate: event.target.value });
            }}
            value={formData.registrationDate}
          />
          {!validateDate(formData.registrationDate) && (
            <FormFeedback>
              Este campo solo acepta fechas a partir del día en curso
            </FormFeedback>
          )}
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
          <p>
            Género:{" "}
            {formData.gender.male
              ? "Masculino"
              : formData.gender.female
              ? "Femenino"
              : "No especificado"}
          </p>
          <p>Rol: {formData.role}</p>
          <p>
            Opcion:
            {formData.options ? " Sí" : " No"}
          </p>
          <p>Notas: {formData.notes}</p>
          <p>
            Fecha de registro:
            {formData.registrationDate.split("-").reverse().join("/")}
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
