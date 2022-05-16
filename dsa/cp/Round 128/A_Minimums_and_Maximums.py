def solve():
    l1,r1,l2,r2 = map(int,input().split(' '))
    if l2 <= l1 <= r2: return l1
    if l1 <= l2 <= r1: return l2
    return l1 + l2


for i in range(int(input())):
    print(solve())