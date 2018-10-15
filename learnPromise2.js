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
        "5356":[{"labels":{"5":0.9986},"bbox":{"width":0.2365,"top":0,"height":0.8039,"left":0.2436}}],
        "5383.5":[{"labels":{"5":0.9987},"bbox":{"width":0.137,"top":0.1326,"height":0.442,"left":0.2717}}]
    },
    "video_id":"5a3ec65b37939b0013123535",
    "detection_fps":2
}    
// console.log(Object.keys(videoResult['lable_dict']));

let p1 = function(videoResult) {
    return new Promise(function(resolve, reject) {
        if(videoResult != null && videoResult  !== undefined){
            console.log(Object.keys(videoResult[Object.keys(videoResult)[3]]).length);
            resolve();
        }else{
            console.log("no videoResult revieved...");
            reject();
        }
    })
}

p1(videoResult);