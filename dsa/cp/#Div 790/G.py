def solve():
    n = int(input())
    a = [0] + list(map(int,input().split(' ')))
    s = input()
    v = [0] * (n+1)
    for i in reversed(range(n)):
        val = 1 if s[i] == 'W' else -1
        v[i+1] += val
        v[a[i]] += v[i+1]
    return v[1:].count(0)

for _ in range(int(input())):
    print(solve())