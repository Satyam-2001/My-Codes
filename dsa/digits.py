def letterCombinations( digits: str) :
    dict={'2':{'a','b','c'},'3':{'f','d','e'},'4':{'g','h','i'},'5':{'j','k','l'}
            ,'6':{'m','n','o'},'7':{'p','q','r','s'},'8':{'t','u','v'},'9':{'w','x','y','z'}}
    l=['']
    f=[]
    

    for e,i in enumerate(digits):
        f=l
        l=[]
        for k in f:
            for j in dict[i]:
                l.append(k+j)
    return l

print(letterCombinations(''))
