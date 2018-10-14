const Matroid = require('matroid');
const util = require('util');

let api = new Matroid({clientId: 'H4AaifnFA4177jWX', clientSecret: '2nwzFJpDCPnpHBMSWrbnEPj4szO3XuPg'});

// Classify a picture from a URL
api.retrieveToken()
   .then(token => api.classifyImage('test', { url: 'https://www.matroid.com/images/logo2.png' }))
   .then(classification => console.log('Answer: ', util.inspect(classification, false, null)))
   .catch(error => console.error('Something happened:', error))