var client = require('./rpc_client');

let a = [[], [], [], [ '5356' ], [ '5383.5' ], [ '5356', '5383.5' ]];
let b = ['Adam Brody', 'Angelina Jolie', 'Brad Pitt', 'Kerry Washington', 'Michelle Monaghan', 'Vince Vaughn'];
let c = [[[], [], [], [ '5356' ], [ '5383.5' ], [ '5356', '5383.5' ]], ['Adam Brody', 'Angelina Jolie', 'Brad Pitt', 'Kerry Washington', 'Michelle Monaghan', 'Vince Vaughn']];
/*
client.getTypes([a], function(response){
    console.log(response);
});

client.getActorsScenes([a,b], function(response){
    console.log(response);
});
*/

let json_string1 = JSON.stringify(c);
let json_string2 = JSON.stringify(b);

client.getValidInput([json_string1], function(response){
    console.log(response);
});


