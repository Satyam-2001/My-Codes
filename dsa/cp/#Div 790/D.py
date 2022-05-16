def diagonalSum(grid,i,j,n,m):
    ans = grid[i][j]
    for r,c in ((1,1),(-1,-1),(1,-1),(-1,1)):
        ar,ac = i+r,j+c
        while ar >= 0 and ac >= 0 and ar < n and ac < m:
            ans += grid[ar][ac]
            ar,ac = ar+r,ac+c
    return ans

def solve():
    n,m = map(int,input().split(' '))
    grid = [list(map(int,input().split(' '))) for _ in range(n)]
    ans = 0
    for i in range(n):
        for j in range(m):
            ans = max(ans,diagonalSum(grid,i,j,n,m))
    return ans

for _ in range(int(input())):
    print(solve())