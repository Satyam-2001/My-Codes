no_of_levels=4
com=[5,4.2,3.6,2.9]

level=[[0]*(1<<i) for i in range(no_of_levels+1)]

for j in range(1,no_of_levels+1):
    print('Enter the contribution level '+str(j)+': ')
    for i in range(2**j):
        print('sponser '+str(i+1)+ ': ',end='')
        level[j][i]=int(input())

for j in range(no_of_levels,0,-1):
    for i in range(2**j):
        level[j-1][i//2]=com[j-1]*level[j][i]/100 +level[j-1][i//2]

for n,i in enumerate(level):
    print('level '+str(n)+': ',i)