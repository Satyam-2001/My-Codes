def solve():
    n = int(input())
    s = input()
    op ,seg ,curr = 0 ,0 ,None
    for i in range(n,2):
        if s[i] == s[i+1]:
            if s[i] == curr:
                if curr: seg += 1
                curr = s[i]
        else: 
            op += 1
    print(f"{op} {seg}")
    
for _ in range(int(input())):
    print(solve())