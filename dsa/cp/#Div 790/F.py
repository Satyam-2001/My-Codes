from collections import Counter

def solve():
    n,k = map(int,input().split(' '))
    a = Counter(map(int,input().split(' ')))
    v = sorted([key for key,val in a.items() if val >= k])
    s = len(v)
    if s == 0: return - 1
    l,res = v[0],-1
    ans = [l,l]
    for i in range(1,s):
        if v[i] != v[i-1] + 1: 
            l = v[i]
        elif v[i] - l > res:
            res = v[i] - l
            ans = [l,v[i]]
    return ' '.join(map(str,ans))

for _ in range(int(input())):
    print(solve())