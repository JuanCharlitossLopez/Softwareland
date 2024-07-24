"use client";
import React, { useState } from "react";
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
    role: "",
    options: [],
    notes: "",
    registrationDate: new Date(),
  });

  const [modal, setModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFormData = (data) => {
    setFormData({
      ...formData,
      ...data,
    });
  };

  const handleOptionsChange = (option) => {
    const options = formData.options;
    if (options.includes(option)) {
      options.splice(options.indexOf(option), 1);
    } else {
      options.push(option);
    }
    setFormData({ ...formData, options });
  };

  const handleSubmit = () => {
    const errors = validateFormData(formData);
    if (Object.keys(errors).length === 0) {
      setModal(true);
    } else {
      setErrors(errors);
    }
  };

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
    setErrors({});
  };

  const validateFormData = (data) => {
    const errors = {};
    if (!/^[a-zA-Z]+$/.test(data.name)) {
      errors.name = "Solo acepta letras";
    }
    if (!/^[a-zA-Z]+$/.test(data.lastName)) {
      errors.lastName = "Solo acepta letras";
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
      errors.email = "Debe tener formato de Correo Electronico";
    }
    if (data.age < 0 || data.age > 100 || isNaN(data.age)) {
      errors.age = "Solo acepta números positivos, hasta el número 100";
    }
    return errors;
  };

  return (
    <div>
      <h1>Formulario de Registro</h1>
      <Form>
        {/* NOMBRE */}
        <FormGroup>
          <Label for="name">Nombre:</Label>
          <Input
            id="name"
            name="name"
            placeholder="Ingresa tu Nombre"
            type="text"
            value={formData.name}
            onChange={(e) => handleFormData({ name: e.target.value })}
            valid={!errors.name}
            invalid={!!errors.name}
          />
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        </FormGroup>

        {/* Apellido */}
        <FormGroup>
          <Label for="lastName">Apellido:</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Ingresa tu Apellido"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleFormData({ lastName: e.target.value })}
            valid={!errors.lastName}
            invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <div style={{ color: "red" }}>{errors.lastName}</div>
          )}
        </FormGroup>

        {/* Correo */}
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            id="email"
            name="email"
            placeholder="Ingresa tu Email"
            type="email"
            value={formData.email}
            onChange={(e) => handleFormData({ email: e.target.value })}
            valid={!errors.email}
            invalid={!!errors.email}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </FormGroup>

        {/* Contrasena */}
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleFormData({ password: e.target.value })}
          />
        </FormGroup>

        {/* Edad */}
        <FormGroup>
          <Label for="age">Edad:</Label>
          <Input
            id="age"
            name="age"
            placeholder="Ingresa tu Edad"
            type="number"
            value={formData.age}
            onChange={(e) => handleFormData({ age: parseInt(e.target.value) })}
            valid={!errors.age}
            invalid={!!errors.age}
          />
          {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
        </FormGroup>

        {/* Genero */}
        <FormGroup>
          <Label for="gender">Genero:</Label>
          <Col sm={10}>
            <FormGroup check>
              <Input
                name="gender"
                type="radio"
                value="male"
                checked={formData.gender === "male"}
                onChange={(e) => handleFormData({ gender: e.target.value })}
              />
              {"Masculino."}
            </FormGroup>
            <FormGroup check>
              <Input
                name="gender"
                type="radio"
                value="female"
                checked={formData.gender === "female"}
                onChange={(e) => handleFormData({ gender: e.target.value })}
              />
              {"Femenino."}
            </FormGroup>
            <FormGroup check>
              <Input
                name="gender"
                type="radio"
                value="other"
                checked={formData.gender === "other"}
                onChange={(e) => handleFormData({ gender: e.target.value })}
              />
              {"Otro."}
            </FormGroup>
          </Col>
        </FormGroup>

        {/* Rol */}
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
              onChange={(e) => handleFormData({ role: e.target.value })}
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
          <FormGroup check>
            <Input
              type="checkbox"
              value="Clase 1"
              checked={formData.options.includes("Clase 1")}
              onChange={() => handleOptionsChange("Clase 1")}
            />
            <Label>Clase 1</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              value="Clase 2"
              checked={formData.options.includes("Clase 2")}
              onChange={() => handleOptionsChange("Clase 2")}
            />
            <Label>Clase 2</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              value="Clase 3"
              checked={formData.options.includes("Clase 3")}
              onChange={() => handleOptionsChange("Clase 3")}
            />
            <Label>Clase 3</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              value="Clase 4"
              checked={formData.options.includes("Clase 4")}
              onChange={() => handleOptionsChange("Clase 4")}
            />
            <Label>Clase 4</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              value="Clase 5"
              checked={formData.options.includes("Clase 5")}
              onChange={() => handleOptionsChange("Clase 5")}
            />
            <Label>Clase 5</Label>
          </FormGroup>
        </FormGroup>

        {/* Notas */}
        <FormGroup row>
          <Label for="notes" sm={2}>
            Notas:
          </Label>
          <Col sm={10}>
            <Input
              id="notes"
              name="notes"
              type="textarea"
              value={formData.notes}
              onChange={(e) => handleFormData({ notes: e.target.value })}
            />
          </Col>
        </FormGroup>

        {/* Fecha de registro */}
        <FormGroup>
          <Label for="registrationDate">Fecha de registro:</Label>
          <Input
            id="registrationDate"
            name="registrationDate"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={formData.registrationDate.toISOString().split("T")[0]}
            onChange={(e) =>
              handleFormData({
                registrationDate: new Date(e.target.value),
              })
            }
          />
        </FormGroup>

        {/* Buttons */}
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
          <ul>
            {formData.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <p>Notas: {formData.notes}</p>
          <p>
            Fecha de registro:
            {formData.registrationDate.toLocaleDateString("es-MX")}
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
