def solve():
    a = [int(i) for i in input()]
    return 'YES' if sum(a[:3]) == sum(a[3:]) else 'NO'

for _ in range(int(input())):
    print(solve())