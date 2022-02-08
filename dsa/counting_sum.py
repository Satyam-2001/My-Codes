res=[]
def recurse(start, s, combo,target,candidates):

    if s == target:
        res.append(combo)

    if s < target:
        for i in range(start, len(candidates)): # horz
            num = candidates[i]
            print('i ',end='')
            if s+num <= target:
                recurse(i, s+num, combo+[num],target,candidates) 
            else:
                break
    return res

print(recurse(0,0,[],8,[2,3,5]))
