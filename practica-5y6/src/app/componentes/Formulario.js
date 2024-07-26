"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import "./Styles_Form.css";
import { useForm } from "react-hook-form";

export const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, //obj que te indica donde hay errores en los inputs
    reset,
  } = useForm();

  const [modal, setModal] = useState(false);

  const [datos, setDatos] = useState([]);

  const toggle = () => setModal(!modal);

  const fechaActual = new Date().toISOString().split("T")[0];

  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    // console.log("Formulario Enviado");
    setModal(true);
    setDatos(data);
  });
  const resetForm = () => {
    reset();
    setDatos({});
    // console.log(datos);
  };

  //tabla
  const [datosTabla, setDatosTabla] = useState([]);
  const guardarDatos = () => {
    const nuevoDato = {
      name: datos.name,
      lastName: datos.lastName,
      email: datos.email,
      password: datos.password,
      age: datos.age,
      gender: datos.gender,
      rol: datos.rol,
      terms: datos.terms,
      notes: datos.notes,
      registerDate: datos.registerDate,
    };
    setDatosTabla([...datosTabla, nuevoDato]);
    setModal(false);
    reset(); //reiniciar campos del form
    setDatos({});
  };

  const [modalEliminar, setModalEliminar] = useState(false);
  const [indiceEliminar, setIndiceEliminar] = useState(null);

  const eliminarDato = (index) => {
    setModalEliminar(true);
    setIndiceEliminar(index);
  };

  const confirmarEliminar = () => {
    setDatosTabla(datosTabla.filter((dato, i) => i !== indiceEliminar));
    setModalEliminar(false);
  };

  const cancelarEliminar = () => {
    setModalEliminar(false);
  };

  return (
    <div className="contenedor_form">
      <Form className="form" onSubmit={onSubmit}>
        <Label>Nombre:</Label>
        <input
          type="text"
          name="name"
          {...register("name", {
            required: {
              value: true,
              message: "El nombre es requerido",
            },
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
            pattern: {
              value: /^[A-Za-z]+( [A-Za-z]+)*$/,
              message: "El nombre debe contener solo letras",
            },
          })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}
        <br />
        <Label>Apellido:</Label>
        <input
          type="text"
          name="lastName"
          {...register("lastName", {
            required: {
              value: true,
              message: "El apellido es requerido",
            },
            minLength: {
              value: 3,
              message: "El apellido debe tener al menos 3 caracteres",
            },
            pattern: {
              value: /^[A-Za-z]+( [A-Za-z]+)*$/,
              message: "El apellido debe contener solo letras",
            },
          })}
        />
        {errors.lastName && (
          <span className="error">{errors.lastName.message}</span>
        )}
        <br />
        <Label>Email:</Label>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: {
              value: true,
              message: "El email es requerido",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "El email no es valido",
            },
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
        <br />
        <Label>Contraseña:</Label>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: {
              value: true,
              message: "La contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
        />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
        <br />
        <Label>Edad:</Label>
        <input
          type="number"
          name="age"
          {...register("age", {
            required: {
              value: true,
              message: "La edad es requerida",
            },
            min: {
              value: 18,
              message: "La edad debe ser mayor a 18",
            },
            max: {
              value: 100,
              message: "La edad debe ser menor a 100",
            },
          })}
        />
        {errors.age && <span className="error">{errors.age.message}</span>}
        <br />
        <Label>Genero:</Label>
        <input
          className="radio"
          type="radio"
          name="gender"
          value="female"
          {...register("gender", {
            required: {
              value: true,
              message: "El genero es requerido",
            },
          })}
        />
        Female
        <input
          className="radio"
          type="radio"
          name="gender"
          value="male"
          {...register("gender")}
        />
        Male
        <br />
        {errors.gender && (
          <span className="error">{errors.gender.message}</span>
        )}
        <br />
        <Label>Rol:</Label>
        <select name="rol" {...register("rol")}>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <Label>Terminos:</Label>
        <input
          className="check"
          type="checkbox"
          name="terms"
          {...register("terms", {
            required: {
              value: true,
              message: "Los terminos y condiciones son requeridos",
            },
          })}
        />
        Acepto los terminos y condiciones
        <br />
        {errors.terms && <span className="error">{errors.terms.message}</span>}
        <br />
        <Label>Notas</Label>
        <textarea
          className="textarea"
          type="text"
          name="notes"
          {...register("notes")}
        />
        <Label>Fecha de registro:</Label>
        <input
          type="date"
          name="registerDate"
          {...register("registerDate", {
            required: {
              value: true,
              message: "La fecha de registro es requerida",
            },
            validate: (value) => value >= fechaActual,
          })}
        />
        {errors.registerDate && (
          <span className="error">
            La fecha de registro debe ser mayor o igual a la fecha actual
          </span>
        )}
        <br />
        <Button type="submit" color="primary">
          Mostrar
        </Button>
        <Button color="secondary" onClick={resetForm}>
          Reiniciar
        </Button>
        <Button color="warning">Guardar</Button>
      </Form>

      {/* Modal */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Datos del formulario</ModalHeader>
        <ModalBody>
          <p>Nombre: {datos.name}</p>
          <p>Apellido: {datos.lastName}</p>
          <p>Email: {datos.email}</p>
          <p>Contraseña: {datos.password}</p>
          <p>Edad: {datos.age}</p>
          <p>Genero: {datos.gender}</p>
          <p>Rol: {datos.rol}</p>
          <p>Terminos: {datos.terms ? "Aceptado" : "No aceptado"}</p>
          <p>Notas: {datos.notes}</p>
          <p>
            Fecha de registro:
            {/* .split("-").reverse().join("/") */}
            {datos.registerDate}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="" onClick={toggle}>
            Cerrar
          </Button>
          <Button color="warning" onClick={guardarDatos}>
            Guardar
          </Button>
        </ModalFooter>
      </Modal>

      {/* Tabla de registros*/}
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Contraseña</th>
            <th>Edad</th>
            <th>Genero</th>
            <th>Rol</th>
            <th>Terminos</th>
            <th>Notas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(datosTabla) ? (
            datosTabla.map((form, index) => (
              <tr key={index}>
                <td>{form.name}</td>
                <td>{form.lastName}</td>
                <td>{form.email}</td>
                <td>{form.password}</td>
                <td>{form.age}</td>
                <td>{form.gender}</td>
                <td>{form.rol}</td>
                <td>{form.terms ? "Aceptado" : "No aceptado"}</td>
                <td>{form.notes}</td>
                <td>
                  <Button color="warning">Edit</Button>
                  <Button color="danger" onClick={() => eliminarDato(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No hay datos</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Modal de Confirmar Eliminar */}
      <Modal isOpen={modalEliminar} toggle={cancelarEliminar}>
        <ModalHeader toggle={cancelarEliminar}>
          Confirmar eliminación
        </ModalHeader>
        <ModalBody>¿Estás seguro de que deseas eliminar este dato?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={confirmarEliminar}>
            Sí, eliminar
          </Button>
          <Button color="secondary" onClick={cancelarEliminar}>
            No, cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
