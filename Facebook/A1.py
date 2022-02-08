from collections import defaultdict

input_path=r'C:\Users\HP\Downloads\submit.txt'
output_path=r"C:\Users\HP\Desktop\Solution.txt"
f=open(input_path,'r')
fw=open(output_path,'w')
st=f.readlines()

vowels={"A","E","I","O","U"}

for i in range(1,len(st)):

    s=st[i][:-1]
    inp_vow=defaultdict(int)
    inp_con=defaultdict(int)

    for j in range(len(s)):
        if s[j] in vowels:
            inp_vow[s[j]]+=1
            
        else:
            inp_con[s[j]]+=1
    
    list_vow=list(inp_vow.values())
    list_con=list(inp_con.values())
    dif_vow,dif_con=len(inp_vow),len(inp_con)
    if dif_con==0:
        res=min(sum(list_vow),2*(sum(list_vow)-max(list_vow)))
    elif dif_vow==0:
        res=min(sum(list_con),2*(sum(list_con)-max(list_con)))
    else:
        res=min(2*(sum(list_vow)-max(list_vow))+sum(list_con),2*(sum(list_con)-max(list_con))+sum(list_vow))

    print(res)

    fw.write(f"Case #{i}: {res}\n")

f.close()
fw.close()