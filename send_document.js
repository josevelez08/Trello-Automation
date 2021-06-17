const api_key = {
	headers: {'Authorization': 'API-Key 141e9c21ff9ef73c8102f18d39906ce2eec47f97'}
};
module.exports = function send(id){

	const url = 'https://api.pandadoc.com/public/v1/documents/'+id+'/send'
const axios = require('axios');
axios
	.post(url, {
		"message": "Hello! This document was sent from the PandaDoc API.",
		"subject": "Please check this test API document from PandaDoc",
		"silent": false
	}, api_key)
	.then(res => {
		console.log('Document sent')
	})
	.catch(error => {
		console.error(error.data)
	})
}