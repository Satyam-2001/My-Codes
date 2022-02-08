
def rotate(matrix) :
    """
    Do not return anything, modify matrix in-place instead.
    """
    n=len(matrix)
    mat=[]
    for r in range(n):
        l=[]
        for c in range(n):
            l.append(matrix[n-c-1][r])
        mat.append(l)
    for r in range(n):
        for c in range(n):
            matrix[r][c]=mat[r][c]

matrix=[[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)
print(matrix)
