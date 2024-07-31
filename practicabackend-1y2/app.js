const express = require('express')
const app = express()
const port = 3002

app.get('/saludo', (req, res) => {
  const {name, lastName} =req.query;

  if (name && lastName) {
    res.send(`Hola ${name} ${lastName}`);
  } else {
    res.status(400).send('Por favor, proporciona los parámetros "name" y "lastName".');
  }
  // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})