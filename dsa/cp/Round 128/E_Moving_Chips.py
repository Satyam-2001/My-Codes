class Solution:

    def solve(self):
        n = int(input())
        a = [input() for _ in range(2)]
        chips = a[0].count('*') + a[1].count('*')
        if chips == 1: return 0
        i = n-1
        while i >= 0 and a[0][i] == '.' and a[1][i] == '.': i -= 1
        self.dp = [[-1] * (i+1) for _ in range(2)]
        def dfs(l,chip,index):
            if chip <= 1 or l < 0: return -1
            if self.dp[index][l] != -1: return self.dp[index][l]
            chip -= (a[0][l] + a[1][l]).count('*')
            self.dp[index][l] = min(dfs(l-1,chip,index) + int(a[index^1][l] == '*'),dfs(l-1,chip,index^1) + 1) + 1
            return self.dp[index][l]
        ans = float('inf')
        if a[0][i] == '*': ans = min(ans,dfs(i,chips+1,0))
        if a[1][i] == '*': ans = min(ans,dfs(i,chips+1,1))
        return ans
        
for _ in range(int(input())):
    print(Solution().solve())