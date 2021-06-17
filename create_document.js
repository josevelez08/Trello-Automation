//Creating and sending a document in Pandadocs
const send = require('./send_document.js');
const api_key = {
	headers: {'Authorization': 'API-Key 141e9c21ff9ef73c8102f18d39906ce2eec47f97'}
};

module.exports = function document(name){
const axios = require('axios');

const fullname = name.split(' ');

axios
	.post("https://api.pandadoc.com/public/v1/documents", {
		"name": "Vacation Request",
		"url": "https://cdn2.hubspot.net/hubfs/20250585/Test%20-%20Document.pdf",
		"tags": [
		   "tag_1",
		   "tag_2",
		],
		"recipients": [
			{
				"email": 'andress.933110@gmail.com',
				"first_name": fullname[0],
				"last_name": fullname[1],
				"role": "user"
			}
		],
		"fields": {
			"name": {
				"value": "Andres",
				"role": "user"
			},
		},
		"metadata": {
			"salesforce.opportunity_id": "123456",
			"my_favorite_pet": "Panda"
		},
		"parse_form_fields": false
	}, api_key)
	.then(res => {
		const docid = res.data.id;
		setTimeout(send, 5000, docid);
		console.log('Document created')
	  })
	  .catch(error => {
		console.error(error.data)
	  })
}