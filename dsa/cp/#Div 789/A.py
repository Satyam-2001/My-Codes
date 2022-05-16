def solve():
    n = int(input())
    a = list(map(int,input().split(' ')))
    c = a.count(0)
    if c: return n - c
    if n != len(set(a)): return n
    return n + 1

for _ in range(int(input())):
    print(solve())