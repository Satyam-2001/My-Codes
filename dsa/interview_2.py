import string

def isPrime(n):
    if n==2:
        return True
    for i in range(2,n//2):
        if not n%i:
            return False
    return True

n=10
m=30
alpha=string.ascii_lowercase
res=''
for i in range(n+1,m):
    if isPrime(i):
        s=str(i)
        for i in s :
            n=int(i)
            res+=alpha[n-1:2*n-1]
        res+=' ,'

if len(res):
    res=res[:len(res)-2]
print(res)