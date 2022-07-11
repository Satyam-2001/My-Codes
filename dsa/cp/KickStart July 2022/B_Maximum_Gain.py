def help(A, k):
    if k == 0: return 0
    ans = count = sum(A[:k])
    for i in range(k, len(A)):
        count += A[i] - A[i-k]
        ans = min(ans, count)
    return ans

for i in range(int(input())):
    n = int(input())
    A = list(map(int,input().split(' ')))
    m = int(input())
    B = list(map(int,input().split(' ')))
    k = int(input())
    ans, l, csum = 0, n + m - k, sum(A) + sum(B)
    for j in range(max(0, n - k), min(n, l) + 1):
        ans = max(ans, csum - help(A, j) - help(B, l - j))
    print(f'Case #{i+1}: {ans}')