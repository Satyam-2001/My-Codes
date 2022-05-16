def solve():
    a = sorted(list(map(int,input().split(' '))))
    n = sorted(a[:2])
    return min(a[1]-a[0],a[0]+a[-1]-a[1])

for _ in range(int(input())):
    print(solve())