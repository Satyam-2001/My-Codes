def solve():
    n,m = map(int,input().split(' '))
    grid = [list(map(int,input().split(' '))) for _ in range(n)]
    if m == 1: return '1 1'
    count = 3
    ans = []
    for i in range(1,m):
        for j in range(n):
            if grid[j][i-1] > grid[j][i]:
                count -= 1
                ans.append(i)
                break
        if count == 0: break
    if count == 0: return -1
    if count == 3: return '1 1'
    if count == 2:
        ans = [ans[0],ans[0]]
    for i in range(n):
        grid[i][ans[0]-1],grid[i][ans[1]] = grid[i][ans[1]],grid[i][ans[0]-1]
    for i in (ans[0]-1,ans[0],ans[1],ans[1]+1):
        if i <= 0 or i >= m: continue
        for j in range(n):
            if grid[j][i-1] > grid[j][i]:
                return -1
    return f'{ans[0]} {ans[1] + 1}'

for _ in range(int(input())):
    print(solve())