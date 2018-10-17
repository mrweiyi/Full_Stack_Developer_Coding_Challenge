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

let dataArr = [[],[],[],[],[],[]];


let detections = videoResult[Object.keys(videoResult)[5]];
for(let i in detections) {
    for(let j in detections[i]){
        let key1 = Object.keys(detections[i][j])[0];
        let key2 = Object.keys(detections[i][j][key1])[0]; // Actor/Object lable
        dataArr[key2].push(i);
        console.log(dataArr);
    }
}
