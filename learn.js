
let getScenes = function() {
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
            return console.log(res);
        }
    }
}

getScenes();