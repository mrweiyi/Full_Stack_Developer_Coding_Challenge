let dataArr = [[],[],[],['40.6', '41'],[ '25', '25.5', '26', '30', '30.1', '30.2','30.6','40','40.5','40.6', '41' ],[]];
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
};  
let computeScenes = function(dataArr, videoResult) {
    return new Promise(function(resolve, reject){
        let label_dict = videoResult[Object.keys(videoResult)[3]];
        let finalResult = new Array();
        let iComputeScenes = 0;
        while(iComputeScenes < dataArr.length){
            console.log(iComputeScenes);
            console.log(dataArr.length);
            if(dataArr[iComputeScenes].length != 0) {
                let start = 0;
                let res = new Array();
                let arr = dataArr[iComputeScenes];
                console.log(arr);
                for(var iGetScenes = 0; iGetScenes < arr.length; ++iGetScenes) {
                    if (arr[iGetScenes] - arr[iGetScenes - 1] > 1.5) {
                        res.push([arr[start] + '-' + arr[iGetScenes - 1]]);
                        start = iGetScenes;
                    }
                    if (iGetScenes == arr.length - 1) {
                        res.push([arr[start] + '-' + arr[iGetScenes]]);
                        iComputeScenes++;
                    }
                }             
                finalResult.push(res);
            }
        }
        if(iComputeScenes == dataArr.length) {
            resolve(finalResult);
        }
    })
}
computeScenes(dataArr, videoResult).then(result => console.log(result));