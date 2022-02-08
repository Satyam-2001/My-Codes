max=0
count=0
s="abcadeafj"
A=set()

for i in range(len(s)):
    for j in range(i,len(s)):
        if s[j] in A:
            if count>max:
                max=count
            count=0
            A.clear()
            break
        A.add(s[j])
        count+=1
    
if count>max:
    max=count

print(max)