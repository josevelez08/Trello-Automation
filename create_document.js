//Creating and sending a document in Pandadocs

//JSON data
const data = {
	"name": "Sample Document from PDF with Field Tags",
	"url": "https://drive.google.com/uc?export=download&id=1BEZa7zCOXXiZpvcSJ8phRv01A8QCv_-_GAIoH2KkmMU",
	"tags": [
	   "tag_1",
	],
	"recipients": [
		{
			"email": "1908@holbertonschool.com",
			"first_name": "Andres",
			"last_name": "Sepulveda",
			"role": "user"
		}
	],
	"metadata": {
		"salesforce.opportunity_id": "123456",
		"my_favorite_pet": "Panda"
	},
	"parse_form_fields": false
};
//fetch package module
const fetch = require('node-fetch');

fetch('https://api.pandadoc.com/public/v1/documents', {
			method: 'post',
			body: JSON.stringify(data),
			headers: { 'Authorization': 'API-key {}'}
	})
	.then(res => {
		console.log(`statusCode: ${res.statusCode}`)
		console.log(res)
	  })
	  .catch(error => {
		console.error(error)
	  })