def solve():
    n = int(input())
    a = list(map(int,input().split(' ')))
    ans = 0
    for i in range(n):
        for j in range(i+1,n):
            if a[j] <= a[i]:
                ans += 1
    return ans

for _ in range(int(input())):
    print(solve())