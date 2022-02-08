def recurse(N,dp):
    
    if dp[N]!=None:
        return dp
    if N%2!=0:
        dp = recurse(N-1,dp)
        dp[N] = not dp[N-1]
    elif N%4 == 0:
        dp[N] = True
    else :
        dp = recurse(N//2,dp)
        dp[N] = not dp[N//2]
    return dp
    
dp = [False]

N = 100
for i in range(1,N+1):
    if i >= len(dp) :
        dp += [None]*(i + 1 - len(dp)) 
    dp = recurse(i,dp)
print(dp)
