const Matroid = require('matroid');
const util = require('util');
let api = new Matroid({clientId: 'H4AaifnFA4177jWX', clientSecret: '2nwzFJpDCPnpHBMSWrbnEPj4szO3XuPg'});
var rpcClient = require('./rpc_client');
let videoId = '5bc3d5722300422fc58c7b02';



let getVideoResult = function(videoResult) {
    return new Promise(function(resolve, reject) {
        if (videoResult != null && videoResult !== undefined) {
            resolve(videoResult);
        } else {
            reject("no valid videoResult here! ");
        }
    });
} 

let genArr = function(videoResult){
    return new Promise(function(resolve, reject) {
        let length = Object.keys(videoResult[Object.keys(videoResult)[3]]).length;
        let dataArr = new Array(length);
        for(let j=0; j< dataArr.length; ++j){
            dataArr[j] = new Array();
        }
        if (dataArr  != null && dataArr  !== undefined) {
            resolve([dataArr,videoResult]);
        } else {
            reject("no array of data here! ");
        }
    });

}

let fillArr = function(dataArr, videoResult){
    return new Promise(function(resolve, reject) {
        let detections = videoResult[Object.keys(videoResult)[5]];
        let label_dict = videoResult[Object.keys(videoResult)[3]];
        let actors = Object.values(label_dict);
        for(let i in detections) {
            for(let j in detections[i]){
                let key1 = Object.keys(detections[i][j])[0];
                let key2 = Object.keys(detections[i][j][key1])[0]; // Actor/Object lable
                dataArr[key2].push(i);
                // console.log(dataArr);
            }
        } 
        resolve([dataArr,actors]);
    });
}

let getActorsScenes= function(json_string) {
    return new Promise(function(resolve, reject) {
        rpcClient.getActorsScenes([json_string], function(response){
            resolve(response);
        });
    })
}

api.retrieveToken()
.then(token => api.getVideoResults(videoId, 0.994, JSON))
.then(classifications => getVideoResult(classifications) )
.then(videoResult => genArr(videoResult))
.then(outputGenArr => fillArr(outputGenArr[0],outputGenArr[1]))
.then(outputFillArr => getActorsScenes(JSON.stringify(outputFillArr)))
.then(response => console.log(response))
.catch(error => console.error('Something happened:', error));


