import json

i = 1
f = 0.1
s = "Hell"
l = [0, 1, 2]
d = {0:"Zero", 1:"One"}
t = (0, 1, 2)
b = True
n = None


isinstance(i, int)
isinstance(f, float)
# print isinstance(s, str)
isinstance(l, list)
isinstance(d, dict)
isinstance(t, tuple)
isinstance(b, bool)

st = [[], [], [], [ '5356'], [ '5383.5' ], [ '5356', '5383.5' ]]
print json.loads(st)
# print json.dumps([1,2,3,{'4': 5, '6': 7}], separators=(',',':'))
