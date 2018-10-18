#!/usr/bin/env python
# coding: utf-8

import pyjsonrpc
import types
import json

class RequestHandler(pyjsonrpc.HttpRequestHandler):

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


def getScene(arr):
    arr.sort()
    res = []
    start = 0
    length = len(arr)
    for i in range(1, length): 
        if(arr[i] - arr[i-1] > 45):
            if(start == i):
                start = i + 1
            else:
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


