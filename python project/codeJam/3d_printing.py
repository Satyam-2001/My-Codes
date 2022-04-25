for i in range(int(input())):
    SUM = 1000_000
    CMYK = [SUM] * 4
    for _ in range(3):
        ink = list(map(int,input().split()))
        for j in range(4):
            CMYK[j] = min(CMYK[j],ink[j])
    print(f'Case #{i+1}: ',end='')
    if (sum(CMYK) < SUM):
        print('IMPOSSIBLE',end='')
    else:
        for k in CMYK:
            if SUM == 0: 
                print(0,end=' ')
            elif SUM > k: 
                print(k,end=' ')
                SUM -= k
            else:
                print(SUM,end=' ')
                SUM = 0
    print()