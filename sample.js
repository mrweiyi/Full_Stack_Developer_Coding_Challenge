const Matroid = require('matroid');
const util = require('util');

let api = new Matroid({clientId: 'H4AaifnFA4177jWX', clientSecret: '2nwzFJpDCPnpHBMSWrbnEPj4szO3XuPg'});

// Classify a picture from a URL
api.retrieveToken()
   .then(token => api.classifyImage('test', { url: 'https://www.matroid.com/images/logo2.png' }))
   .then(classification => console.log('Answer: ', util.inspect(classification, false, null)))
   .catch(error => console.error('Something happened:', error))

// Classify a picture from a file
api.retrieveToken()
   .then(token => api.classifyImage('test', { file: ['/home/user/picture.jpg', '/home/user/image.jpg'] }, { num_results: 5 }))
   .then(classification => console.log('Answer: ', util.inspect(classification, false, null)))
   .catch(error => console.error('Something happened:', error))

// Classify a video from a file
api.retrieveToken()
   .then(token => api.classifyVideo('test', { file: '/home/user/video.mp4' }))
   .then(({ videoId }) => console.log('Video ID: ', video_id))
   .catch(error => console.error('Something happened:', error))

// Classify a YouTube video
api.retrieveToken()
   .then(token => api.classifyVideo('test', { url: 'https://youtube.com/watch?v=abc' }))
   .then(({ video_id }) => console.log('Video ID: ', video_id))
   .catch(error => console.error('Something happened:', error))

// Get video results
api.retrieveToken()
   .then(token => api.getVideoResults('abc123'))
   .then(classifications => console.log('Answer: ', util.inspect(classifications, false, null)))
   .catch(error => console.error('Something happened:', error))

// Create a detector
/*
  Remember to pass in the name of your detector and its type (general, facial_recognition, facial_characteristics)
  pass in a zip file containing the images to be used in the detector creation
              the root folder should contain only directories which will become the labels for detection
              each of these directories should contain only a images corresponding to that label
      structure example:
        cat/
          garfield.jpg
          nermal.png
        dog/
          odie.tiff
*/
api.retrieveToken()
   .then(token => api.createDetector('/home/user/myPictures.zip', 'Apple Detector', 'general'))
   .then(({ detector_id }) => api.trainDetector(detector_id))
   .catch(error => console.error('Something happened:', error))

// You can check on its progress. Then when it's done training, you can classify with the detector.
var detectorId = 'test';
api.retrieveToken()
   .then(token => api.detectorInfo(detectorId))
   .then(detectorInfo => console.log('Information: ', util.inspect(detectorInfo, false, null)))
   .catch(error => console.error('Something happened:', error))

// Check how many Matroid Credits you have
api.retrieveToken()
   .then(token => api.accountInfo())
   .then(account => console.log('Information: ', util.inspect(account, false, null)))

// Register and monitor stream on Matroid
let streamUrl = http://localhost:8888/stream.mjpg;
let detectorId = 'abc123';
let monitorOptions = {
  'startTime': '2017-06-20T20:56:19.096Z',
  'endTime': '2017-06-21T20:00:00.000Z',
  'thresholds': {
    'cat': 0.5,
    'dog': 0.7
  }
  'endpoint': 'http://mydomain.fake:9000/matroid_detections'
}

api.registerStream(streamUrl, 'backyard')
   .then(({ stream_id }) => api.monitorStream(stream_id, detectorId, monitorOptions))
   .then(monitoringInfo => console.log(monitoringInfo));