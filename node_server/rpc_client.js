var jayson = require('jayson');
 
// create a client
var client = jayson.client.http({
  port: 4040,
  hostname:'localhost'
});
 
function add(a, b, callback) {
// invoke "add"
client.request('add', [a, b], function(err, response) {
  if(err) throw err;
  console.log(response.result); 
});
}


function getTypes(a, callback) {
  client.request('getTypes', a, function(err, response) {
    if(err) throw err;
    console.log(response.result); 
  });
}

function getActorsScenes(a, callback) {
  client.request('getActorsScenes', a, function(err, response) {
    if(err) throw err;
    callback(response.result);
  })
}

function getValidInput(a, callback) {
  client.request('getValidInput', a, function(err, response) {
    if(err) throw err;
    console.log(response.result); 
  });
}

module.exports = {
    add : add,
    getTypes : getTypes,
    getActorsScenes : getActorsScenes,
    getValidInput : getValidInput
}