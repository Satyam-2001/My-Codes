def solve():
    a,b,c = map(int,input().split(' '))
    z = c
    y = z + b
    x = y + a
    print(f'{x} {y} {z}')

for _ in range(int(input())):
    solve()