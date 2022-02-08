from numpy import zeros

input_path=r'C:\Users\HP\Downloads\traffic_control_input.txt'
output_path=r"C:\Users\HP\Desktop\B.txt"
f=open(input_path,'r')
fw=open(output_path,'w')
st=f.readlines()

for k in range(1,len(st)):
    s=st[k]
    N,M,A,B=[int(i) for i in s.split(' ')]
    if N+M-1>min(A,B):
        fw.write(f'Case #{k}: Impossible\n')
        continue
    A,B=A-N-M+2,B-N-M+2
    fw.write(f'Case #{k}: Possible\n')
    s='1 '*(M-1) + '1\n'
    fw.write(f'{A}'+s[1:])
    fw.write(s*(N-2))
    fw.write(f'{B}'+s[1:])
   
f.close()
fw.close()