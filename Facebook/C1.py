from collections import defaultdict

input_path=r'C:\Users\HP\Downloads\gold_mine_chapter_1_input.txt'
output_path=r"C:\Users\HP\Desktop\C1.txt"
f=open(input_path,'r')
fw=open(output_path,'w')
st=f.readlines()

def recurse(cave,visit,locate,ore):
    m=0
    for i in locate[cave]:
        if visit[i-1]:
            visit[i-1]=False
            m=max(m,recurse(i,visit,locate,ore))
    return m + ore[cave-1]

def solve(s):
    l=s.split('\n')
    ore=[int(i) for i in l[0].split(' ')]
    path=[[int(i.split(' ')[0]),int(i.split(' ')[1])] for i in l[1:]]

    locate=defaultdict(list)
    visited=[False]+[True]*(len(ore)-1)
    for i in path:
        locate[i[0]].append(i[1])
        locate[i[1]].append(i[0])
    res=[]
    for i in locate[1]:
        visited[i-1]=False
        res.append(recurse(i,visited,locate,ore))
        visited[i-1]=True
    if len(locate[1])==0:
        ans=ore[0]
    elif len(locate[1])>1:
        res.sort()
        ans=ore[0]+res[-1]+res[-2]
    else:
        ans=ore[0]+res[0]
    return ans

k=1
count=1
while k < len(st):
    num=int(st[k][:-1])
    s=''
    for i in range(1,num+1):
        s+=st[k+i]
    fw.write(f"Case #{count}: {solve(s[:-1])}\n")
    count+=1
    k+=num+1

f.close()
fw.close()