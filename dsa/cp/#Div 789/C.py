def solve():
    n = int(input())
    arr = list(map(int,input().split(' ')))
    f = [0] * n
    ans = 0
    for b in range(1,n-2):
        for d in range(b+1,n):
            if arr[b] > arr[d]:
                f[b] += 1
    for i in range(1,n-2):
        for b in range(2,n-i):
            b = d-i 
            if arr[b] > arr[d]:
                f[b] -= 1
        s = sum(f[1:i+1])
        for c in range(i+1,n-1):
            a = c - i - 1
            if arr[a] < arr[c]:
                # print(f"({a},{a+i+1},{s})",end = " ")
                ans += s
            s += f[c] - f[a]
        print(f)
    return ans

for _ in range(int(input())):
    print(solve())