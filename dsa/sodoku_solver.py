
def solveSudoku(board) :
    """
    Do not return anything, modify board in-place instead.
    """
    row_candidates = {i:set([str(n) for n in range(1, 10)]) for i in range(9)}
    col_candidates = {i:set([str(n) for n in range(1, 10)]) for i in range(9)}
    square_candidates = {i:set([str(n) for n in range(1, 10)]) for i in range(9)}
    
    missing = []
    for i in range(9):
        for j in range(9):
            if board[i][j] == ".":
                missing.append((i, j))
                continue
            square_idx = (i // 3) * 3 + (j // 3)
            row_candidates[i].remove(board[i][j])
            col_candidates[j].remove(board[i][j])
            square_candidates[square_idx].remove(board[i][j])
    
    # rank missing according to len candidates
    ordered = []
    for i, j in missing:
        square_idx = (i//3) * 3 + (j // 3)
        candidates = row_candidates[i] & col_candidates[j] & square_candidates[square_idx]
        if len(candidates)==1:
            val=next(iter(candidates))
            print(val)
            board[i][j]=val
            row_candidates[i].remove(val)
            col_candidates[j].remove(val)
            square_candidates[(i // 3) * 3 + (j // 3)].remove(val)
            continue
        #print(candidates,row_candidates[i],col_candidates[j])
        ordered.append([candidates, i, j])
    
    
    ordered.sort(key=lambda x:len(x[0]))
    #for i in ordered:
        #print(i)
    print('len ',len(ordered))
    
    def recurse(idx, curr):
        if idx >= len(ordered):
            for val, i, j in curr:
                board[i][j] = val
            return 
        candidates, i, j = ordered[idx]
        s_idx = (i//3) * 3 + (j // 3)
        if not candidates:
            return 
        
        for val in candidates:
            if val in row_candidates[i] and val in col_candidates[j] and val in square_candidates[s_idx]:
                curr.append([val, i, j])
                row_candidates[i].remove(val)
                col_candidates[j].remove(val)
                square_candidates[s_idx].remove(val)
                recurse(idx+1, curr)
                curr.pop()
                row_candidates[i].add(val)
                col_candidates[j].add(val)
                square_candidates[s_idx].add(val)
        #print(curr)
    curr = []
    recurse(0, curr)

inp=[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
solveSudoku(inp)
for i in inp:
    print(i)
