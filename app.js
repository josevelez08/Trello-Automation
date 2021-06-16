const member = require('./member.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const SmeeClient = require('smee-client')

// const smeeStar = ()=> {

//     const smee = new SmeeClient({
//         source: 'https://smee.io/FSNfB9AMholuxXO',
//         target: 'http://localhost:3000/events',
//         logger: console
//     })

//     const events = smee.start()

// }

// smeeStar();

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 80;

app.use(bodyParser.json());

app.post('/events', function (req, res) {
  // const temp = req.body.action.display.translationKey;
  // const  id = req.body.action.idMemberCreator
  // const listBefore = req.body.action.data.listBefore;
  // const listAfter = req.body.action.data.listAfter;
  console.log('Request post', req.body);
  res.status(200)
  res.send({});
  // if (temp == 'action_move_card_from_list_to_list' && listBefore.name == 'Lista de tareas' && listAfter.name == 'En proceso')
  // {
  // };
});
app.get('/googlea08991f6f71af58f',function(req,res) {
  res.sendFile(path.join(__dirname+'/google.html'));
});

app.head('/events', function (req, res) {
  console.log('Request head', req.body);
  res.status(200)
  res.send({});
});

app.get('/events', function (req, res) {
  res.status(200)
  res.send({});
});

app.get('/', function (req, res) {
  res.send("hello world")
});


app.listen(port , () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});


//module.exports = { id }
