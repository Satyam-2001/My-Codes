def solve():
    n = int(input())
    s = input()
    ans = 0
    for i in range(0,n,2):
        if s[i] != s[i+1]:
            ans += 1
    return ans

for _ in range(int(input())):
    print(solve())