# XXXCodingChallenge
XXX Coding Challenge    for @Yi Wei

# Project Abstract 
This project provides a REST API for users to get current outcome of a video (correspond to a unique video ID), where the ranges of time of some certain actors will be returned.



# Project Set-up
 - Firstly, for the first time installation in a fresh Ubuntu/Linux environment. Run:
  ```sh
$ sudo ./install.sh
```
- (If needed run chmod first as follow)
```sh
$ chmod +x install.sh
```

 - Secondly, please open two terminals to launch Start Node_Server and Backend_server    respectively.
 -  Node_server:
 ```sh
$ cd node_server
$ npm install
$ node service.js
```
Expected to see " node server listening on port 3000!"" in the console.
 -  Backend_server:
 ```sh
$ cd backend_server
$ python service.py
```
Expected to see " Starting HTTP server... URL: http://localhost:4040"" in the console.

And everything goes well above, we can start Test this API!
# Test 
Please use HTTP GET Method for request.
 ```sh
http://localhost:3000/api/v1/videos/
```
Append video ID which you would like to know the result for like that:
 ```sh
http://localhost:3000/api/v1/videos/videoID
```
For example, by
 ```sh
curl http://localhost:3000/api/v1/videos/5bc3d5722300422fc58c7b022
```
You should get:
{"Angelina Jolie":["4.0-14.0","93.0-106.0"],"Adam Brody":["43.0-96.0"],"Brad Pitt":["4.0-126.0"]}

By 
 ```sh
curl http://localhost:3000/api/v1/videos/5a3ec65b37939b0013123535
```
You should get:
{"Angelina Jolie":["39.0-250.5","331.5-465.5","706.5-812.5","879.5-1004.0","1075.5-1080.0","1188.0-1224.0","1302.5-1338.5","1386.5-1492.0","1561.5-1562.0","1718.5-1722.0","1785.0-1802.5","2168.0-2209.0","2313.5-2359.0","2436.0-2479.5","2556.0-2805.0","2884.0-2915.5","2975.5-2977.0","3027.5-3097.5","3178.0-3278.5","3331.0-3357.5","3486.5-3616.5","3662.0-3868.0","4274.0-4300.5","4388.5-4423.0","4513.0-4552.0","4644.5-4646.0","4773.5-4774.0","4832.5-4882.0","4958.5-5051.5","5147.5-5456.0","5608.5-5699.5","5775.5-5794.0","5843.5-5939.0","6142.5-6183.5","6322.5-6396.0","6544.0-6592.5","6680.5-6746.5"],"Vince Vaughn":["526.5-542.0","1628.5-1658.0","2096.5-2152.5","2823.5-2951.5","3362.0-3417.5","5354.0-5461.0"],"Kerry Washington":["526.0-526.0","2352.5-2352.5","2877.5-2913.0","3029.5-3029.5","3182.0-3200.5","3494.5-3494.5","5480.0-5480.0"],"Michelle Monaghan":["2209.5-2219.0"],"Adam Brody":["41.0-129.0","199.5-232.0","341.5-465.0","531.0-532.5","649.5-690.5","736.5-797.0","850.0-875.0","925.0-948.0","1004.5-1047.5","1143.0-1184.0","1234.0-1275.5","1404.5-1458.0","1518.5-1518.5","1668.0-1711.0","1812.5-1814.0","2103.0-2237.0","2293.0-2319.0","2456.0-2569.5","2617.5-2696.0","2831.5-2833.0","2938.0-2954.0","3169.0-3171.0","3237.0-3261.0","3328.0-3328.0","3530.5-3542.0","3697.0-3955.0","4088.5-4088.5","4214.5-4216.5","4267.5-4285.5","4422.0-4422.0","4500.5-4523.5","4575.5-4577.5","4639.0-4639.5","4718.5-4841.5","4953.5-5164.5","5241.0-5264.5","5377.0-5414.0","5462.5-5517.5","5607.0-5676.0","5730.0-5965.5","6122.5-6123.0","6691.5-6731.0"],"Brad Pitt":["39.0-138.5","232.5-240.0","341.0-466.5","530.5-604.5","745.5-878.0","924.5-954.0","1005.5-1049.0","1109.5-1186.0","1232.5-1285.5","1397.5-1519.0","1611.0-1717.0","2037.0-2699.5","2747.5-2766.5","2827.0-2986.5","3117.5-3170.0","3229.0-3261.5","3349.0-3412.5","3502.5-3566.0","3695.0-4176.5","4252.5-4287.0","4347.5-4579.0","4632.5-4646.0","4702.0-4881.5","4954.0-5164.0","5226.5-5465.5","5544.0-5653.0","5730.5-5978.5","6122.0-6147.0","6323.0-6324.5","6386.5-6435.0","6689.5-6746.5"]}

If get invalid video ID, the server will return "(52) Empty reply from server". 


# Work Flow and Tech
>1 Node Server

By ExpressJS and NodeJS, a node server is build to 
a) Offer REST API from users/ client side to make GET requests. Even if the classification is not completed, there will still return current result for our API to process.
b) request Matroid API for Detector ID: 5a3ebf485162a700138fa669 to analyze Video (in the future, other Detectors can be easily added to this API).
c) Process data from Matroid API into an array of array of time from 'detections' and another array of actor names from 'label_dict'.
d) communicate with Backend Server by JSON-RPC.

>2 Backend Server (Python)

a) As the business/logic layer of the project, the backend server compute time when actors show up, generate the ranges desired and map these ranges with actor names.
b) The standard for detecting a continuous scene is that the actor shows up within 45 secends in two time spots.
c) Actors who didn't show up will not the presented in the result.


### Todos

 - Write MORE Tests for errors and edge cases
 - Add Night Mode
 - Imporve metrics in backend server to get better continuous scenes computed
 - Based on my current structure, more features can be added easily


License
----

MIT
