from collections import Counter
from heapq import heappush,heappop
l=[1,2,3,4,2,3,1,5,4,7,9,8]
m=dict(Counter(l))
k=[]
for i in m:
    heappush(k,(m[i],i))
res=[]
for i in range(len(k)):
    m,n=heappop(k)
    res+=[n]
print(res[::-1])
