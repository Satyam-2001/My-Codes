def solve():
    n,k = map(int,input().split(' '))
    a = list(map(int,input().split(' ')))
    ans = sum(a[:n-k])
    v = a[:]
    v.sort()

for _ in range(int(input())):
    solve()