const member = require('./member.js');
const express = require('express');
const bodyParser = require('body-parser');
const SmeeClient = require('smee-client')

const smeeStar = ()=> {

    const smee = new SmeeClient({
        source: 'https://smee.io/TDckB0c9vfal9Etm',
        target: 'http://localhost:3000/events',
        logger: console
    })

    const events = smee.start()

}

smeeStar();

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.use(bodyParser.json());

app.post('/events', function (req, res) {
  const temp = req.body.action.display.translationKey;
  const  id = req.body.action.idMemberCreator
  const listBefore = req.body.action.data.listBefore;
  const listAfter = req.body.action.data.listAfter;
  if (temp == 'action_move_card_from_list_to_list' && listBefore.name == 'En proceso' && listAfter.name == 'Lista de tareas')
  {
    console.log('We got');
    // getEmail(id);
  };
});

app.listen(port, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});


//module.exports = { id }
