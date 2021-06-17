const member = require('./member.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 80;

app.use(bodyParser.json());

app.post('/events', function (req, res) {
  const temp = req.body.action.display.translationKey;
  const  id = req.body.action.idMemberCreator
  const listBefore = req.body.action.data.listBefore;
  const listAfter = req.body.action.data.listAfter;
  console.log('Request post', req.body);
  res.status(200)
  res.send({});
  if (temp == 'action_move_card_from_list_to_list' && listBefore.name == 'Lista de tareas' && listAfter.name == 'En proceso')
  {
    member(id);
  };
});
app.head('/events', function (req, res) {
  console.log('Request head', req.body);
  res.status(200)
  res.send({});
});
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
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
