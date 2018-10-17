function actorAndRange (name,range) {
    this.person = name;
    this.scenes = range;
}

let temp = new actorAndRange("Kerry Wash",["20-15","22-21"]);

let arrOfArr = [ [], [], ['25','25.5','26', '30','30.1','30.2','40','41'], [ '5356' ], [ '5383.5' ], [ '5356', '5383.5' ] ];

let arr = arrOfArr[2];
// console.log(arr);

let computeRange = function (arr) {
    return new Promise(function(resolve, reject) {
        let res = [];
        let start = 0;
        for (let i = 0, p = Promise.resolve(); i < arr.length; ++i) {
            

                    resolve(res); 
        }
    
}

computeRange([ '25', '25.5', '26', '30', '30.1', '30.2', '40', '41' ])
    .then(res => console.log(res))
    .catch(error => console.error('Something happened:', error));

    
    if(arr[i] - arr[i-1] > 1.5) {
        res.push([arr[start],arr[i-1]]);
        start = i;
    }
    


function rangeOfScene() {
    
}


