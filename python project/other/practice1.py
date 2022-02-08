#1 2 3 4
#1 2 4 3
#1 3 2 4 
#1 3 4 2 
#1 4 2 3
#1 4 3 2
#2 1 3 4
#2 4 3 1 
#3 1 2 4

l=[1,3,2]
j=len(l)-1
while j :
    print(l)
    j=len(l)-1
    while l[j-1]>=l[j]:
        j-=1
        if j == 0:
            l=l[::-1]
            print(l)
            break
    i=len(l)-1
    while i!=0 and l[j-1]>=l[i]:
        i-=1
    l[i],l[j-1]=l[j-1],l[i]
    l=l[:j]+l[j:][::-1]

m=l.copy()
print(m)