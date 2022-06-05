import numpy as np
n = int(input())
a = list(map(int,input().split(' ')))
dp = [None] * n
ans = ''

def dfs(i):
    if dp[i] != None: return dp[i]
    dp[i] = True
    for j in range(i - a[i],-1,-a[i]):
        if a[j] > a[i] and not dfs(j):
            return True
    for j in range(i + a[i],n,a[i]):
        if a[j] > a[i] and not dfs(j):
            return True
    dp[i] = False
    return False

index = np.argsort(np.array(a))
for i in index: dfs(i)
for i in dp:
    ans += 'A' if i else 'B'

print(ans)