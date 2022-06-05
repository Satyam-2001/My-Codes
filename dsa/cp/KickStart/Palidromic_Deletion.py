from functools import lru_cache

MOD = 1000_000_007

@lru_cache(None)
def modFact(n):
    if n >= MOD:
        return 0   
 
    result = 1
    for i in range(1, n + 1):
        result = (result * i) % MOD
 
    return result

def calculate(p, q):
     
    expo = MOD - 2
    while (expo):
        if (expo & 1):
            p = (p * q) % MOD
        q = (q * q) % MOD
        expo >>= 1
 
    return p
    
@lru_cache(None)
def solve(s):
    n = len(s)
    if n == 1: return 2
    ans = 0
    if s == s[::-1]:
        ans += modFact(n)
    for i in range(n):
        ans = (ans + solve(s[:i] + s[i+1:])) % MOD
    return ans % MOD

for i in range(int(input())):
    print(f'Case #{i+1}:',end=" ")
    n = int(input())
    s = input()
    p = solve(s)
    if s == s[::-1]:
        p -= modFact(n)
    q = modFact(n)
    print(calculate(p,q))