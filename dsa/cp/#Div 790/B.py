def solve():
    n = int(input())
    a = list(map(int,input().split(' ')))
    return sum(a) - n*min(a)

for _ in range(int(input())):
    print(solve())