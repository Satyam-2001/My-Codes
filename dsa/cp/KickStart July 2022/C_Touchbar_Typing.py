for a in range(int(input())):
    n = int(input())
    S = list(map(int,input().split(' ')))
    m = int(input())
    K = list(map(int,input().split(' ')))
    dp = [float('inf')] * m
    dp2 = [float('inf')] * m

    for i in range(m):
        if S[0] == K[i]: dp[i] = 0
    
    for i in range(1, n):
        if S[i] == S[i-1]: continue
        for num in (range(m),range(m-1,-1,-1)):
            step = float('inf')
            for j in num:
                step = min(step + 1, dp[j])
                if S[i] == K[j]:
                    dp2[j] = min(dp2[j], step)
        dp = dp2
        dp2 = [float('inf')] * m
    
    print(f'Case #{a+1}: {min(dp)}')