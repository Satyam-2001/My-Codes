n,q = map(int,input().split(' '))
a = [(0,0)] + [(i,0) for i in list(map(int,input().split(' ')))]
ans = 0
for i in a:
    ans += i[0]
curr = 0

for _ in range(q):
    Q = list(map(int,input().split(' ')))
    if Q[0] == 1:
        ans += Q[2]
        if a[Q[1]][1] == curr: ans -= a[Q[1]][0]
        else: ans -= a[0][0]
        a[Q[1]] = (Q[2],curr)
    else:
        a[0] = (Q[1],0)
        ans = Q[1] * n
        curr += 1
    print(ans)