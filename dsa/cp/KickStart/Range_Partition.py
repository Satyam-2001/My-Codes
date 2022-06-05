def solve():
    n,x,y = map(int,input().split(' '))
    total_sum = (n * (n + 1)) // 2
    if total_sum % (x + y): 
        print('IMPOSSIBLE')
        return
    print('POSSIBLE')
    required_sum = (total_sum * x) // (x + y)
    ans = []
    while required_sum:
        if required_sum <= n:
            ans.append(required_sum)
            break
        required_sum -= n
        ans.append(n)
        n -= 1
    print(len(ans))
    print(*ans)

for i in range(int(input())):
    print(f'Case #{i+1}:',end=" ")
    solve()