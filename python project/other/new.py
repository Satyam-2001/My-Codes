t = int(input())
dp = [False]
while t:
    N = int(input())
    l = len(dp)
    for i in range(l, N+1 ):
        if i % 2 != 0:
            dp += [not dp[i-1]]
        else:
            n = i
            flag = 1
            while n % 2 == 0:
                n = n//2
                if dp[n] == False:
                    dp += [True]
                    flag = 0
                    break
            if flag :
                dp += [False]
            
    print(dp[N])
    t -= 1
