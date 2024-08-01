const express = require('express')
const app = express()
const port = 3002

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
app.use(express.json());

// Ruta GET para 'users'
app.get('/users', (req, res) => {
    res.send('Respuesta a una solicitud GET en /users');
});

// Ruta POST para 'users'
app.post('/users', (req, res) => {
    res.send('Respuesta a una solicitud POST en /users');
});

// Ruta PUT para 'users'
app.put('/users', (req, res) => {
    res.send('Respuesta a una solicitud PUT en /users');
});

// Ruta DELETE para 'users'
app.delete('/users', (req, res) => {
    res.send('Respuesta a una solicitud DELETE en /users');
});

//para manejar solicitudes a rutas no definidas (404)
app.use((req, res, next) => {
    res.status(404).send('Error 404: Endpoint no encontrado');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});