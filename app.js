const getEmail = require('./getEmail.js');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.use(bodyParser.json());

app.post('/events', function (req, res) {
  const temp = req.body.action.display.translationKey;
  const  id = req.body.action.idMemberCreator
  console.log(id);
  if (temp == 'action_move_card_from_list_to_list')
  {
    getEmail(id);
  };
});

app.listen(port, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});