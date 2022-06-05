from collections import Counter
from math import ceil

def solve():
    n = int(input())
    a = list(map(int,input().split(' ')))
    dp = sorted([i for i in Counter(a).values()])
    ans = 1
    for i in dp:
        ans += 1
        if i > ans:
            ans += ceil((i - ans) / 2)
    print(ans)

for _ in range(int(input())):
    solve()