st='''3 1
1
2
2
1'''



line = st.split('\n')
M_N = line[0].split(' ')
N,M = int(M_N[0]),int(M_N[1])
print(N,M)
B = [int(i) for i in line[1].split(' ') ]
changed = set(range(1,M+1))
model = []
for i in range(N):
    P = [int(j) for j in line[i+2].split(' ') ]
    for j in B:
        for k in P:
            if j == k:
                
                break