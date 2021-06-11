// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
module.exports = function getEmail(id){
    const fetch = require('node-fetch');

    fetch('https://api.trello.com/1/members/'+id+'?key=09b33908b544abe20cb679d61f9c6026&token=ddb87243d73f97e299323415fc5068b122803e3c8dcda3a19084f954dab40c6b', {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));
}
