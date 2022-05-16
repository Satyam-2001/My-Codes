def solve():
    a = sorted(list(map(int,input().split(' '))))
    return 'YES' if a[-1] > a[0] + a[1] else 'NO'

for _ in range(int(input())):
    print(solve())