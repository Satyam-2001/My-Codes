class Solution:
    def helper(self,s,x):
        dp = [0] * (x+1)
        l = 0
        for i in s:
            if i == '1':
                l += 1
                dp[l] = dp[l-1]
            else :
                dp[l] += 1
        return dp

    def solve(self):
        s = input()
        n = len(s)
        x = s.count('0')
        ans = min(x,n-x)
        dp_front = self.helper(s,n-x)
        dp_back = self.helper(s[::-1],n-x)
        print(dp_front,dp_back)
        i = 0
        while i < ans:
            j = ans - i - 1
            while j >= 0 and x - (dp_front[i] + dp_back[j]) < ans:
                ans -= 1
                j -= 1
            i += 1
        return ans

for i in range(int(input())):
    print(Solution().solve())