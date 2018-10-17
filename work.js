let getVideoResult = function() {
    return new Promise(function(resolve, reject) {
        let videoResult = {
            "download_progress":100,
            "classification_progress":100,
            "status":"Classification complete",
            "label_dict":
            {
                "0":"Adam Brody",
                "1":"Angelina Jolie",
                "2":"Brad Pitt",
                "3":"Kerry Washington",
                "4":"Michelle Monaghan",
                "5":"Vince Vaughn"
            },
            "state":"success",
            "detections":
            {
                "5356":[{"labels":{"5":0.9986},"bbox":{"width":0.2365,"top":0,"height":0.8039,"left":0.2436}},{"labels":{"3":0.9987},"bbox":{"width":0.137,"top":0.1326,"height":0.442,"left":0.2717}}],
                "5383.5":[{"labels":{"5":0.9987},"bbox":{"width":0.137,"top":0.1326,"height":0.442,"left":0.2717}},{"labels":{"4":0.9987},"bbox":{"width":0.137,"top":0.1326,"height":0.442,"left":0.2717}}]
            },
            "video_id":"5a3ec65b37939b0013123535",
            "detection_fps":2
        }    
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
        for(let i in detections) {
            for(let j in detections[i]){
                let key1 = Object.keys(detections[i][j])[0];
                let key2 = Object.keys(detections[i][j][key1])[0]; // Actor/Object lable
                dataArr[key2].push(i);
                // console.log(dataArr);
            }
        }
        resolve([dataArr,videoResult]);
    });
}

/*
let computeScenes = function(dataArr, videoResult) {
    return new Promise(function(resolve, reject){
        let label_dict = videoResult[Object.keys(videoResult)[3]];
        let finalResult = new Array();
        for(var iComputeScenes = 0; iComputeScenes < dataArr.length; ++ iComputeScenes) {
            if(dataArr[iComputeScenes].length != 0) {
                let temp = iComputeScenes;
                //let temp = getScenes(dataArr[i]);
                finalResult.push(temp);
            }
        }
        if(iComputeScenes == dataArr.length) {
            resolve(finalResult);
        }
    })
}

*/

    

        
/*
let computeScenes = function(dataArr, videoResult) {
    return new Promise(function(resolve, reject){
        let label_dict = videoResult[Object.keys(videoResult)[3]];
        let finalResult = new Array();
        for(let i in dataArr) {
            if(dataArr[i].length == 0) {
                continue;
            } else {
                //todo
                let temp = getScenes(dataArr[i]);
                //let name = Object.values(label_dict)[i];
                finalResult.push(temp);
                //console.log();
            } 
        }
        resolve(finalResult);
    })
}
*/

/*
let getNameSmaple = function(dataArr, videoResult) {
    return new Promise(function(resolve,reject) {
        let label_dict = videoResult[Object.keys(videoResult)[3]];
        let finalResult = new Array();
        for(let i in dataArr) {
            if(dataArr[i].length == 0) {
                continue;
            } else {
                //todo
                let name = Object.values(label_dict)[i];
                finalResult.push();
                //console.log();
            } 
        }
        resolve(dataArr);
    })
}
*/


getVideoResult()
        .then(videoResult => genArr(videoResult))
        .then(outputGenArr => fillArr(outputGenArr[0],outputGenArr[1]))
        .then(outputFillArr => console.log(outputFillArr[0],outputFillArr[1]))
        .catch(error => console.error('Something happened:', error));
    


// Compute Range Requirements
/*
given 25,25.5,26, 30,30.1,30.2,40,41
1s
return ["25-26","30-30.2,"40-41"]

'[
    { "person": "angelina jolie", 
    "scenes": ["0-90.5", "534.5-659","777-1024"] 
    }, 
    { "person": "brad pitt", 
    "scenes": [] 
    }, 
    { "person":"kerry washington", 
    "scenes": ["30-90.5", "500-600"] 
    }
]'
*/


// duo ceng qian tao zhu shi
// Actors Names :  Object.values(label_dict)[i]
// label_dict videoResult[Object.keys(videoResult)[3]]
// detections videoResult[Object.keys(videoResult)[5]]
// ith detection(videoResult[Object.keys(videoResult)[5]][i]);
// jth item in above array : videoResult[Object.keys(videoResult)[5]][i][j]
// labels: Object.keys(videoResult[Object.keys(videoResult)[5]][i][0])[0]

function actorAndScenes (name,range) {
    this.person = name;
    this.scenes = range;
}

/*
let getScenes = function() {
    return new Promise(function(resolve, reject){
        let arr = [ '25', '25.5', '26', '30', '30.1', '30.2','30.6','40','40.5','40.6', '41' ];
        let start = 0;
        let res = new Array();
        for(var iGetScenes = 0; iGetScenes < arr.length; ++iGetScenes) {
            if (arr[iGetScenes] - arr[iGetScenes - 1] > 1.5) {
                res.push([arr[start] + '-' + arr[iGetScenes - 1]]);
                start = iGetScenes;
            }
            if (iGetScenes == arr.length - 1) {
                res.push([arr[start] + '-' + arr[iGetScenes]]);
            }
        }
        if(iGetScenes == arr.length) {
            resolve(res);
    }})
}
*/

let getScenes = function(arr) {
        let start = 0;
        let res = new Array();
        for(var iGetScenes = 0; iGetScenes < arr.length; ++iGetScenes) {
            if (arr[iGetScenes] - arr[iGetScenes - 1] > 1.5) {
                res.push([arr[start] + '-' + arr[iGetScenes - 1]]);
                start = iGetScenes;
            }
            if (iGetScenes == arr.length - 1) {
                res.push([arr[start] + '-' + arr[iGetScenes]]);
                return res;
            }
        }
}