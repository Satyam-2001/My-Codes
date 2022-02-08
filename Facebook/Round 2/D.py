
def recurse(T1,T2,visited,K):
    pass

st = '''6 4
1 4 7 9001 2 150000'''

st = st.split('\n')
l = st[0].split(' ')
N,K = int(l[0]),int(l[1])
Str = [(int(i),n+1) for n,i in enumerate(st[1].split(' '))]
Str.sort(key = lambda x : x[0])
print(Str)

visited = [0]*(N+1)