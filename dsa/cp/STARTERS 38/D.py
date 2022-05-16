from collections import defaultdict

def solve():
    n = int(input())
    a = list(map(int,input().split(' ')))
    b = list(map(int,input().split(' ')))
    D = defaultdict(int)
    ans = 0
    for i in range(n):
        D[(b[i],a[i])] += 1
    for i in range(n):
        D[(b[i],a[i])] -= 1
        if D[(a[i],b[i])]:
            ans += D[(a[i],b[i])]
    return ans

for _ in range(int(input())):
    print(solve())