for i in range(int(input())):
    n,m,k = map(int,input().split(' '))
    d = [[] for _ in range(n+1)]

    for j in range(m):
        a,b = map(int,input().split(' '))
        d[b].append(a)

    ans = 0
    for j in range(1, n+1):
        if d[j]: ans += 1

    print(f'Case #{i+1}: {ans}')