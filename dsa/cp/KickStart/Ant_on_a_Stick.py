from functools import cmp_to_key

def solve():
    n,l = map(int,input().split(' '))
    dp = []
    for i in range(1,n+1):
        p,d = map(int,input().split(' '))
        dp.append([p,i,d])
    dp.sort(key = lambda x:x[0])
    for i in range(n-1,-1,-1):
        if dp[i][2] == 0: continue
        for j in range(i+1,n):
            if dp[j][2] == 0:
                dp[i][1],dp[j][1] = dp[j][1],dp[i][1]
    def dist(x):
        if x[2] == 0: return x[0]
        return l - x[0]
    def compare(x,y):
        dist_x = dist(x)
        dist_y = dist(y)
        if dist_x == dist_y:
            return x[1] - y[1]
        return dist_x - dist_y
    ans = sorted(dp,key = cmp_to_key(compare))
    # print(ans)
    for i in ans:
        print(i[1],end = ' ')
    print()



for i in range(int(input())):
    print(f'Case #{i+1}:',end=" ")
    solve()