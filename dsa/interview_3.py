def gcd(a,b):
    if (b == 0):
         return a
    return gcd(b, a%b)

l=[2,3,4,5,1,6,4,3,2,9]
k=0
round=len(l)//2
while l:
    big=0
    r,c=0,0
    for i in range(len(l)):
        for j in range(i+1,len(l)):
            m=gcd(l[i],l[j])
            if m>big:
                big=m
                r,c=l[i],l[j]
    k+=big*round
    round-=1
    l.remove(r)
    l.remove(c)

print(k)