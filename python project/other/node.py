n=1
def recurse(l,j):
    global n
    if len(l) == 0:
        print(n,"  ",j)
        n+=1
    for i in range(len(l)):
        recurse(l[:i]+l[i+1:], j+[l[i]]) 


n=3
l=list(range(1,n+1))
recurse(l,[])