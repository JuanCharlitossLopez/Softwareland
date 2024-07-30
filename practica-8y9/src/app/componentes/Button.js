"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Table,
} from "reactstrap";

export const Consulta = () => {
  // ``
  const size = 100;
  const type = 'beers';
  const sizeBeers = 15;

  const url = `https://random-data-api.com/api/v2/users?size=${size}`;
  const urlBeers = `https://random-data-api.com/api/v2/${type}?size=${sizeBeers}`;

  const [data, setData] = useState(null);
  const [dataBeers, setDataBeers] = useState(null);

  const consultarApi = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };


  useEffect(() => {
    fetch(urlBeers)
    .then((response) => response.json())
    .then((dataBeers) => setDataBeers(dataBeers))
    .catch((error) => console.error(error));
    }, []);

  const updateTable = () => {
    fetch(urlBeers)
    .then((response) => response.json())
    .then((dataBeers) => setDataBeers(dataBeers))
    .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>Practica - 8</h1>
      <Button color="primary" onClick={consultarApi}>
        Hacer consulta
      </Button>
      <Button color="primary" onClick={updateTable}>
        Actualizar Tabla
      </Button>

      {/* 
        JSON.stringify(data): Esta función de JavaScript convierte el objeto data en una cadena de texto JSON.
        null: Este parámetro se usa para la función de reemplazo, que permite transformar los valores antes de ser convertidos a texto. 
        Si no se necesita ninguna transformación, se pasa null.
        2: Este es el número de espacios de indentación que se usarán para formatear el JSON resultante. Ayuda a que la salida sea más legible. 
        */}
      <div>
        {/* Informacion: {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
      </div>
      <div>
        {/* Informacion Beers: {dataBeers && <pre>{JSON.stringify(dataBeers, null, 2)}</pre>} */}
      </div>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>brand</th>
            <th>name</th>
            <th>style</th>
            <th>hop</th>
            <th>yeast</th>
            <th>ibu</th>
            <th>alcohol</th>
            <th>blg</th>
          </tr>
        </thead>
        <tbody>
          {dataBeers && dataBeers.map((beer) => (
            <tr key={beer.id}>
              <td>{beer.id}</td>
              <td>{beer.brand}</td>
              <td>{beer.name}</td>
              <td>{beer.style}</td>
              <td>{beer.hop}</td>
              <td>{beer.yeast}</td>
              <td>{beer.ibu}</td>
              <td>{beer.alcohol}</td>
              <td>{beer.blg}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex flex-wrap">
        {data &&
          data.map((user) => (
            <Card
              className="my-2 mx-2"
              style={{ width: "18rem" }}
              key={user.id}
              color="primary"
              outline
            >
              <CardHeader>
                <CardTitle>
                  {user.first_name} {user.last_name}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>
                  <b>Id:</b> {user.id}
                  <br />
                  <img src={user.avatar} alt="avatar" className="img-fluid" />
                  <br />
                  <b>User:</b> {user.username}
                  <br />
                  <b>Email:</b> {user.email}
                  <br />
                  <b>Phone: </b>
                  {user.phone_number}
                  <br />
                  <b>Gender:</b> {user.gender}
                  <br />
                  <b>Date of Birth: </b>
                  {user.date_of_birth}
                  <br />
                  <b>Address: </b>
                  {user.address.city}, 
                  {user.address.street_address}
                </CardText>
              </CardBody>
              <CardFooter >
                <li><b>Plan:</b> {user.subscription.plan}</li>
                <li><b>Status:</b>  {user.subscription.status}</li>
                <li><b>Payment Method:</b>  {user.subscription.payment_method}</li>
                <li><b>Term:</b>  {user.subscription.term} </li>
              </CardFooter>
            </Card>
          ))}
      </div>


    </div>
  );
};
