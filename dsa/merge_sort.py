List=[2,5,3,1,4,7,8,9]

def merge(i,mid,j):
    n=mid+1
    M=[]
    while i<=mid and n<=j:
        if List[i]>List[j]:
            M.append(List[j])
            j+=1
        else :
            M.append(List[i])
            i+=1
        M+=List[i:mid+1]+List[n:j+1]
    return M
def merge_sort(i,j,List):
    if i<j:
        mid=(i+j)//2
        merge_sort(i,mid)
        merge_sort(mid+1,j)
        List=merge(i,mid,j)