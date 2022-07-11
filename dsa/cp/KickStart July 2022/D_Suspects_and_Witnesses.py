for i in range(int(input())):
    n,m,k = map(int,input().split(' '))
    d = [[] for _ in range(n+1)]
    vis = [False] * (n+1)
    smp = set()

    def dfs(cs):
        if vis[cs]: return 0
        vis[cs] = True
        smp.add(cs)
        if len(smp) > k: return
        for x in d[cs]:
            dfs(x)
            if len(smp) > k: return
        return

    for j in range(m):
        a,b = map(int,input().split(' '))
        d[b].append(a)

    ans = 0
    for j in range(1, n+1):
        dfs(j)
        if len(smp) > k: ans += 1
        for l in smp:
            vis[l] = False
        smp = set()
    
    print(f'Case #{i+1}: {ans}')