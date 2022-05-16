def pair(n,m):
    ans = 0
    for i in range(len(n)):
        ans += abs(ord(n[i]) - ord(m[i]))
    return ans

def solve():
    n = list(map(int,input().split(' ')))[0]
    a = [input() for _ in range(n)]
    ans = float('+inf')
    for i in range(n):
        for j in range(i+1,n):
            ans = min(ans,pair(a[i],a[j]))
    return ans

for _ in range(int(input())):
    print(solve())