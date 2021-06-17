const member = require('./member.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 80;

app.use(bodyParser.json());

app.post('/events', function (req, res) {
  const temp = req.body.action.display.translationKey;
  const  id = req.body.action.idMemberCreator
  const listBefore = req.body.action.data.listBefore;
  const listAfter = req.body.action.data.listAfter;
  res.status(200)
  res.send({});
  if (temp == 'action_move_card_from_list_to_list' && listBefore.name == 'Tasks' && listAfter.name == 'In progress')
  {
    member(id);
  };
});
app.head('/events', function (req, res) {
  res.status(200)
  res.send({});
});

app.get('/events', function (req, res) {
  res.status(200)
  res.send({});
});

app.get('/', function (req, res) {
  res.send("Trepi - a trello pandadocs integration")
});


app.listen(port , () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
