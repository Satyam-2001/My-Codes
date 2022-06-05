def isspecial(s):
    for i in s:
        if i in '#@*&': return True
    return False

def solve():
    n = int(input())
    s = input()
    if not any(map(str.isdigit, s)):
        s += '1'
    if not any(map(str.islower, s)):
        s += 'a'
    if not any(map(str.isupper, s)):
        s += 'A'
    if not any(map(isspecial, s)):
        s += '#'
    if len(s) < 7:
        s += 'a' * (7-len(s))
    print(s)


for i in range(int(input())):
    print(f'Case #{i+1}:',end=" ")
    solve()