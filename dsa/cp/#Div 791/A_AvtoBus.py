def solve():
    n = int(input())
    if n & 1 or n < 4: return -1
    n //= 2
    l,h = 0,n // 2
    if n % 3 == 0: l = n//3
    if n % 3 == 1: l = 2 + max(0,(n-4)//3)
    if n % 3 == 2: l = 1 + (n-2)//3
    return f'{l} {h}'

for _ in range(int(input())):
    print(solve())