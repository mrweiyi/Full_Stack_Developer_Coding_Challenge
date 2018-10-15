const Matroid = require('matroid');
const util = require('util');

let api = new Matroid({clientId: 'H4AaifnFA4177jWX', clientSecret: '2nwzFJpDCPnpHBMSWrbnEPj4szO3XuPg'});



// Classify a YouTube video
api.retrieveToken()
   .then(token => api.classifyVideo('5a3ebf485162a700138fa669', { url: 'https://www.youtube.com/watch?v=9s5wma5iEYA'}))
   .then(({ video_id }) => getVidoeResults(video_id))
   .catch(error => console.error('Something happened:', error))

// Get video results

// var videoResults = getVidoeResults('5bc3d5722300422fc58c7b02');

function getVidoeResults(videoId) {
    api.retrieveToken()
        .then(token => api.getVideoResults(videoId, 0.55, JSON))
        .then(classifications => console.log('Answer: ', util.inspect(classifications, false, null)))
        .catch(error => console.error('Something happened:', error));
}

