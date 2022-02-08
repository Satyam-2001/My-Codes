from collections import defaultdict

input_path=r'C:\Users\HP\Downloads\gold_mine_chapter_2_input.txt'
output_path=r"C:\Users\HP\Desktop\C2.txt"
f=open(input_path,'r')
fw=open(output_path,'w')
st=f.readlines()

sc=0

def recurse(root,k,score,locate,visited):
    #print('1',end='')
    no_path=True
    if root == 1:
        global sc
        sc=max(sc,score)
    for i in locate[root]:
        for j in path:
            if set((root,i)) == set(j):
                path.remove(j)
                no_path=False
                if visited[i-1] :
                    recurse(i,k,score,locate,visited)
                else:
                    visited[i-1]=True
                    recurse(i,k,score+gold[i-1],locate,visited)
                    visited[i-1]=False
                path.append(j)
                break

    if no_path and k and sc !=sum(gold):
        for i in range(1,len(gold)+1):
            if i != root:
                if visited[i-1] :
                    recurse(i,k-1,score,locate,visited)
                else:
                    visited[i-1]=True
                    recurse(i,k-1,score+gold[i-1],locate,visited)
                    visited[i-1]=False
        
def solve(num,k,gold,path):
    
    locate=defaultdict(list)
    global sc
    sc=gold[0]
    for i in path:
        locate[i[0]].append(i[1])
        locate[i[1]].append(i[0])
    recurse(1,k,0,locate,[False]*num)
    return sc

i=1
count=1
while i<len(st):
    
    num_k=st[i].split(' ')
    num,k=int(num_k[0]),int(num_k[1])
    gold=[int(j) for j in st[i+1].split(' ')]
    path=[[int(j.split(' ')[0]),int(j.split(' ')[1])] for j in st[i+2:i+num+1]]
    fw.write(f'Case #{count}: {solve(num,k,gold,path)}\n')
    print(f'Case #{count}: {solve(num,k,gold,path)}')
    count+=1
    i+=1+num

f.close()
fw.close()