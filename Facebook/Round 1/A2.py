input_path=r'C:\Users\HP\Downloads\weak_typing_chapter_2_input.txt'
output_path=r"C:\Users\HP\Desktop\A2.txt"
f=open(input_path,'r')
fw=open(output_path,'w')
st=f.readlines()
MOD = 10**9 +7
def sol(s,l):
    ans,f=0,0
    X=False
    for e,i in enumerate(s):
        if i=='F':
            f+=1
        else:
            if (not X and i=='X') or (X and i=='O'):
                ans= (ans + (e-f)*(l-e)) %  MOD
            X=(True if i=='X' else False)
            f=0      
    return ans

for e,k in enumerate(range(2,len(st),2)): 
    ans=sol(st[k][:-1],int(st[k-1]))
    print(f'Case #{e+1}: {ans}')
    fw.write(f'Case #{e+1}: {ans}\n')

f.close()
fw.close()