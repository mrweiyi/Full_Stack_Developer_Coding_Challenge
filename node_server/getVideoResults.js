const Matroid = require('matroid');
const util = require('util');

var api = new Matroid({clientId: 'H4AaifnFA4177jWX', clientSecret: '2nwzFJpDCPnpHBMSWrbnEPj4szO3XuPg'});


// Classify a video from a file
/*
api.retrieveToken()
   .then(token => api.classifyVideo('test', { file: '/home/user/video.mp4' }))
   .then(({ videoId }) => console.log('Video ID: ', video_id))
   .catch(error => console.error('Something happened:', error))
*/
/*
// Classify a YouTube video
api.retrieveToken()
   .then(token => api.classifyVideo('5a3ebf485162a700138fa669', { url: 'https://www.youtube.com/watch?v=leSqmSzeQzs'}))
   .then(({ video_id }) => console.log('Video ID: ', video_id))
   .catch(error => console.error('Something happened:', error))
*/
// Get video results


getVidoeResult('5bc3d5722300422fc58c7b02')
.then(result => console.log(result));

let getVidoeResult = function (videoId) {
    new Promise(function (resolve, reject){
        api.retrieveToken()
        .then(token => api.getVideoResults(videoId, 0.995, JSON))
        .then(classifications => resolve(classifications))
        //.then(classifications => console.log('Answer: ', util.inspect(classifications, false, null)))
        .catch(error => console.error('Something happened:', error));
    });
}




