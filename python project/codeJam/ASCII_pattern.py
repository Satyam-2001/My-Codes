for i in range(int(input())):
    r,c = map(int,input().split())
    upper = '+-' * c + '+\n'
    lower = '|.' * c + '|\n'
    ans = '..' + upper[2:] + '.' + lower[1:] + (upper+lower) * (r-1) + upper
    print(f'Case #{i+1}')
    print(ans,end='')