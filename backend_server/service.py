#!/usr/bin/env python
# coding: utf-8

import pyjsonrpc
import types
import json

class RequestHandler(pyjsonrpc.HttpRequestHandler):

    @pyjsonrpc.rpcmethod
    def add(self, a, b):
        """Test method"""
        c = getC()
        return c

    @pyjsonrpc.rpcmethod
    def getTypes(self, arr1):
        res = []
        res.append(arr1)
        res.append(arr1[3][0])
        res.append(arr1.split(','))
        res.append(isinstance(arr1, int))
        res.append(isinstance(arr1, str))
        res.append(isinstance(arr1, list))
        res.append(isinstance(arr1, dict))
        """
        res.append(isinstance(arr1[3][0], int))
        res.append(isinstance(arr1[3][0], str))
        res.append(isinstance(arr1[3][0], list))
        res.append(isinstance(arr1[3][0], dict))
        res.append(arr1[3][0])
        res.append(float(arr1[3][0]))
        res.append(isinstance(float(arr1[3][0]), float))
        res.append(arr2[0])
        """
        return res
    
    @pyjsonrpc.rpcmethod
    def getValidInput(self, timeArrString):
        timeArr = json.loads(timeArrString)
        print timeArr
        print timeArr[0]
        print timeArr[1]
        print timeArr[0][5]
        print timeArr[0][5][0]
        print timeArr[0][5][0] + timeArr[0][5][0]
        print float(timeArr[0][5][0])
        print float(timeArr[0][5][0]) + float(timeArr[0][5][0])
        print isinstance(timeArr[0][5][0], int)
        print isinstance(timeArr[0][5][0], str)
        print isinstance(timeArr[0][5][0], list)
        print isinstance(timeArr[0][5][0], dict)
        # actorArr = json.loads(actorArrString)
        # print actorArr
        return True

    @pyjsonrpc.rpcmethod
    def getActorsScenes(self, jsonstring):
        print jsonstring
        arr = json.loads(jsonstring)
        print arr
        timeArr = arr[0]
        print timeArr
        actorArr = arr[1]
        print actorArr
        for arr in timeArr :
            if(len(arr) != 0):
                for j in range(0,len(arr)) :
                    arr[j] = float(arr[j])
        print timeArr
        res = {}
        length = len(timeArr)
        for i in range(length):
            if(len(timeArr[i]) != 0):
                res[actorArr[i]] = getScene(timeArr[i])
        print res
        return res;      


def getC():
    c = {'Angelina Jolie': ['25-26', '30-30.2'], 'Michelle Monaghan': ['5383.5-5384'], 'Kerry Washington': ['5356-5357']}
    return c

def getScene(arr):
    res = []
    start = 0
    length = len(arr)
    for i in range(1, length): 
        if(arr[i] - arr[i-1] > 10):
            res.append(str(arr[start]) + '-' + str(arr[i-1]))
            start = i
        if(i == length - 1):
            res.append(str(arr[start]) + '-' + str(arr[i]))
            return res


# Threading HTTP-Server
http_server = pyjsonrpc.ThreadingHttpServer(
    server_address = ('localhost', 4040),
    RequestHandlerClass = RequestHandler
)
print "Starting HTTP server ..."
print "URL: http://localhost:4040"
http_server.serve_forever()


"""
Pased Test Case POST localhost
{
"jsonrpc":"2.0",
"id":132,
"method":"add",
"params":[22,24]
}
"""