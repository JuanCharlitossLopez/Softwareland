const express = require("express");
const app = express();
const port = 3002;
// FILE SYSTEM
const fs = require("fs");
// Ubicacion del archivo
let jsonData = fs.readFileSync("./data/users.json");
// parsear buffer de datos
let users = JSON.parse(jsonData);
console.log(users);

app.use(express.json());

//GET users
app.get("/users", (req, res) => {
  res.json(users);
});

//GET users/id
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.json(user);
  }
});

// POST users
app.post("/users", (req, res) => {
  const { id, password, first_name, last_name, username, email, gender } =
    req.body;
  const user = {
    id,
    password,
    first_name,
    last_name,
    username,
    email,
    gender,
  };
  users.push(user);
  fs.writeFileSync("./data/users.json", JSON.stringify(users));
  res.status(201).json(user);
});

// DELETE users
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((user) => user.id === parseInt(id));
  if (index === -1) {
    res.status(404).json({ message: "User not found" });
  } else {
    users.splice(index, 1);
    fs.writeFileSync("./data/users.json", JSON.stringify(users));
    res.status(204).json({ message: "User deleted" });
  }
});

// PUT users
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((user) => user.id === parseInt(id));
  if (index === -1) {
    res.status(404).json({ message: "User not found" });
  } else {
    const { password, first_name, last_name, username, email, gender } =
      req.body;
    users[index] = {
      id,
      password,
      first_name,
      last_name,
      username,
      email,
      gender,
    };
    fs.writeFileSync("./data/users.json", JSON.stringify(users));
    res.status(200).json(users[index]);
  }
});

app.get("/", (req, res) => {
  res.send("root");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

// app.get('/saludo', (req, res) => {
//   const {name, lastName} =req.query;

//   if (name && lastName) {
//     res.send(`Hola ${name} ${lastName}`);
//   } else {
//     res.status(400).send('Por favor, proporciona los parámetros "name" y "lastName".');
//   }
//   // res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

//para parsear el cuerpo de las solicitudes
// app.use(express.json());

// // Ruta GET para 'users'
// app.get('/users', (req, res) => {
//     res.send('Respuesta a una solicitud GET en /users');
// });

// // Ruta POST para 'users'
// app.post('/users', (req, res) => {
//     res.send('Respuesta a una solicitud POST en /users');
// });

// // Ruta PUT para 'users'
// app.put('/users', (req, res) => {
//     res.send('Respuesta a una solicitud PUT en /users');
// });

// // Ruta DELETE para 'users'
// app.delete('/users', (req, res) => {
//     res.send('Respuesta a una solicitud DELETE en /users');
// });

// //para manejar solicitudes a rutas no definidas (404)
// app.use((req, res, next) => {
//     res.status(404).send('Error 404: Endpoint no encontrado');
// });