from collections import defaultdict

input_path=r'C:\Users\HP\Downloads\fbi.txt'
output_path=r"C:\Users\HP\Desktop\A2.txt"
f=open(input_path,'r')
fw=open(output_path,'w')
st=f.readlines()

def solve(word,change):

    d=defaultdict(list)
    s=defaultdict(set)

    for i in word:
        s[i].add(i)
        d[i].append((i,0))
        recurse(i,i,d,change,0,s)

    j=s[word[0]]
    for k in range(1,len(word)):
        j=j.intersection(s[word[k]])
    
    if not j:
        return -1

    res=float('inf')
    for i in j:
        ans=0
        for k in word:
            for m in d[k]:
                if i == m[0]:
                    ans+=m[1]
                    break
        res=min(res,ans)
    return res
    

def recurse(root,wrd,d,change,step,s):

    for i in change:
        if wrd == i[0]:
            for j in d[root]:
                if j[0] == i[1] :
                    if j[1]>step+1:
                        d[root].remove(j)
                        d[root].append((i[1],step+1))
                        recurse(root,i[1],d,change,step+1,s)
                    break
            else :
                s[root].add(i[1])
                d[root].append((i[1],step+1))
                recurse(root,i[1],d,change,step+1,s)

i=1
count=1
while i < len(st):
    num=int(st[i+1][:-1])
    word=st[i][:-1]
    change=[i[:-1] for i in st[i+2:i+num+2]]
    fw.write(f"Case #{count}: {solve(word,change)}\n")
    count+=1
    i+=num+2

f.close()
fw.close()