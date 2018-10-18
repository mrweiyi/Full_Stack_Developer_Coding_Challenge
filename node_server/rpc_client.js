var jayson = require('jayson');
 
// create a client
var client = jayson.client.http({
  port: 4040,
  hostname:'localhost'
});
 

function getActorsScenes(a, callback) {
  client.request('getActorsScenes', a, function(err, response) {
    if(err) throw err;
    callback(response.result);
  })
}


module.exports = {
    getActorsScenes : getActorsScenes,
}