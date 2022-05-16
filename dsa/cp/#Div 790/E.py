def BinarySearch(a, x):
    if a[-1] < x: return -1
    l,r = 0,len(a)-1
    while l<r:
        mid = (l + r) // 2
        if a[mid] == x: return mid + 1
        if a[mid] < x: l = mid + 1
        else: r = mid
    return l + 1


def solve():
    n,q = map(int,input().split(' '))
    a = list(map(int,input().split(' ')))
    a.sort(reverse=True)
    for i in range(1,n):
        a[i] += a[i-1]
    for _ in range(q):
        print(BinarySearch(a,int(input())))

for _ in range(int(input())):
    solve()