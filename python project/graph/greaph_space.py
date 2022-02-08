def hcf(point):
    x_list=[x[0] for x in point]
    m=min(x_list)
    
    for i in range(m,0,-1):
        flag=True
        for x in x_list:
            if(x % i != 0) :
                flag=False
                break
        if flag:
            return i


point=[[5,3],[5,4],[5,1],[7,7],[9,11],[10,13]]
print(hcf(point))