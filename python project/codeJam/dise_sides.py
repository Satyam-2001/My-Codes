for i in range(int(input())):
    n = int(input())
    s = sorted(list(map(int,input().split())))
    ans = 1
    for j in range(n):
        if s[j] >= ans:
            ans += 1
    print(f'Case #{i+1}: {ans-1}')