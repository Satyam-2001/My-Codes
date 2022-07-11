for i in range(int(input())):
    n,m = map(int,input().split(' '))
    A = sorted(list(map(int,input().split(' '))))
    ans = 0
    if m > 1: ans = sum(A[-m + 1:])
    k = n - m + 1
    if k&1: ans += A[k//2]
    else: ans += (A[k//2 - 1] + A[k//2]) / 2
    print(f'Case #{i+1}: {float(ans)}')