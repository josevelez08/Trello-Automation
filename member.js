// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
module.exports = function member(id){
  const fetch = require('node-fetch');

  fetch('https://api.trello.com/1/members/'+id+'?key=da6f1a583b63311c91670e61cec68f73&token=2f845a5dcecf58d0d98a4046ce3f441f27e15c1f501fbc7c5f9ad1873c364e67', {
method: 'GET',
headers: {
  'Accept': 'application/json'
}
})
.then(response => {
  console.log(
    `Response: ${response.status} ${response.statusText}`
  );
  return response.json();
})
.then(json => {
  const fullname = json.fullName;
  console.log(fullname);
  })
.catch(err => console.error(err));
}