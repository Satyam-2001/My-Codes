def reverse(s):
    return s.replace("1","x").replace("0","1").replace("x","0")

def change(s):
    index = s.find('1')
    if index == -1: index = len(s)
    return (reverse(s[:index]) + '1' + reverse(s[index+1:]),index)

def solve():
    n,k = map(int,input().split(' '))
    s = input()
    ans = [0] * n
    if k&1:
        k -= 1
        s,i = change(s)
        ans[i] = 1
    st = ''
    for i in range(n):
        if s[i] == '1':
            st += '1'
            continue
        if k:
            ans[i] = 1
            k -= 1
            st += '1'
        else:
            st += '0'
    if k&1:
        st = st[:-1] + '0'
    ans[-1] += k 
    print(st)
    print(*ans)

for _ in range(int(input())):
    solve()