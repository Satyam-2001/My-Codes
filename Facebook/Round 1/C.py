from collections import defaultdict
capacity={}

s='''2 1 10
3 1 1
4 1 5'''

id=defaultdict(list)
limit=0
visited=[False]*(len(s)+1)
def recurse(root,minimum,back,cur,sum):
    
    
    if len(id[cur])==1:
        return 
    
    for i in id[cur]:
        if i==back:
            return 
        minimum=min(minimum,capacity.get((i,cur)) or capacity.get((cur,i)))
        capacity[(i,root)]=minimum
        recurse(root,minimum,cur,i,sum)
     


l=[i.split(' ') for i in s.split('\n')]
for i in l:
    capacity[(int(i[0]),int(i[1]))]=int(i[2])
    id[int(i[0])].append(int(i[1]))
    id[int(i[1])].append(int(i[0]))


ans=capacity.get((1,2)) or capacity.get((2,1))
rem=[0]*(len(l)+1)
for i in range(1,len(l)+2):
    for j in id[i]:
        if j>i:
            rem[i-1]=recurse(i,float('inf'),i,0,0)
print(capacity)