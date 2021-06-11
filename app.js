const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.use(bodyParser.json());

app.post('/events', function (req, res) {
  console.log(req.body);
  res.send('Hello post');
});

app.listen(port, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});