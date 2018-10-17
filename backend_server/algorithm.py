a = [ [], [], [], [ '5356' ], [ '5383.5' ], [ '5356', '5383.5' ] ]
b = [ 'Adam Brody', 'Angelina Jolie', 'Brad Pitt', 'Kerry Washington', 'Michelle Monaghan', 'Vince Vaughn' ]
c = [ '25', '25.5', '26', '30', '30.1', '30.2','30.6','40','40.5','40.6', '41' ]
d = [ 25, 25.5, 26, 30, 30.1, 30.2, 30.6, 40, 40.5, 40.6, 41]
e = [ [], [25, 25.5, 26, 30, 30.1, 30.2,], [], [ 5356, 5357 ], [ 5383.5,5384 ], [ ] ]
f = [ [], ['25', '25.5', '26', '30', '30.1', '30.2',], [], [ '5356', '5357' ], [ '5383.5','5384' ], [ ] ]
"""


for idx, val in enumerate(d):
    print(idx, val)
"""

def getActorsScenes(timeArr, actorArr):
    res = {}
    length = len(timeArr)
    for arr in timeArr :
        if(len(arr) != 0):
            for j in range(0,len(arr)) :
                arr[j] = float(arr[j])
    for i in range(length):
        if(len(timeArr[i]) != 0):
            res[actorArr[i]] = getScene(timeArr[i])
    return res;   


def getScenes(arr):
    res = []
    length = len(arr)
    for i in range(length):
        if(len(arr[i]) != 0):
            res.append(getScene(arr[i]))
    return res;    

def getScene(arr):
    res = []
    start = 0
    length = len(arr)
    for i in range(1, length): 
        if(arr[i] - arr[i-1] > 1.5):
            res.append(str(arr[start]) + '-' + str(arr[i-1]))
            start = i
        if(i == length - 1):
            res.append(str(arr[start]) + '-' + str(arr[i]))
            return res

print getActorsScenes(f, b)