let dataArr = [ '25', '25.5', '26', '30', '30.1', '30.2','30.6','40','40.5','40.6', '41' ];
let arr = [ '25', '25.5', '26', '30', '30.1', '30.2','30.6','40','40.5','40.6', '41' ];
let start = 0;
let res = new Array();

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

let fname = function() {
    return new Promise(function(resolve, reject){
        let arr = [ '25', '25.5', '26', '30', '30.1', '30.2','30.6','40','40.5','40.6', '41' ];
        let start = 0;
        let res = new Array();
        for(var i = 0; i < arr.length; ++i) {
            if (arr[i] - arr[i - 1] > 1.5) {
                res.push([arr[start] + '-' + arr[i - 1]]);
                start = i;
            }
            if (i == arr.length - 1) {
                res.push([arr[start] + '-' + arr[i]]);
            }
        }
        if(i == arr.length) {
            resolve(console.log(res));
    }})
}
fname();


/*
getScenes();



function getScenes(arr) {
    
    for (let i = 1, p = Promise.resolve(); i < arr.length; i++) {
        p = p.then(_ => new Promise(resolve => setTimeout(function () {
            if (arr[i] - arr[i - 1] > 1.5) {
                res.push([arr[start] + '-' + arr[i - 1]]);
                start = i;
            }
            if (i == arr.length - 1) {
                res.push([arr[start] + '-' + arr[i]]);
            }
            console.log(res);
            resolve(res);
        }, 200)));
    }
}

let computeScenes = function(dataArr, videoResult) {
    return new Promise(function(resolve, reject){
        let label_dict = videoResult[Object.keys(videoResult)[3]];
        let finalResult = new Array();
        for(let i = 0, p = Promise.resolve(); i < dataArr.length; ++i) {
            p = p.then(_ => new Promise(resolve => setTimeout(function (){
                if(dataArr[i].length != 0) {
                    //todo
                    let temp = getScenes(dataArr[i]);
                    //let name = Object.values(label_dict)[i];
                    finalResult.push(temp);
                    console.log();
                } 
                resolve();
            }, 300)))
        }
        resolve(finalResult);
    })
}

;

*/