def toWord(x): 
    return 'YES' if x else 'NO' 

def solve():
    r,c = map(int,input().split(' '))
    s = [input() for _ in range(r)]
    h,v = 0,0
    for i in range(r):
        if 'R' in s[i]: break
        h += 1
    f = True
    for i in range(c):
        for j in range(r):
            if s[j][i] == 'R': 
                f = False
                break
        if not f: break
        v += 1
    return h < r and v < c and s[h][v] == 'R'


for i in range(int(input())):
    print(toWord(solve()))