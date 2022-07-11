import math
import bisect

class Solution:
    def solve(self, a):
        a.sort()
        n = len(a)
        dp = [False] * n
        X = 1
        ans = 0

        for i in range(n):
            if dp[i]: continue
            while True:
                days = math.ceil(a[i] / X)
                ans += days
                troops = X * days
                j = bisect.bisect_left(a,troops,i,n)
                if j == n: j -= 1
                while j > i and dp[j]: j -= 1
                dp[j] = True
                X += 1
                if i == j: break
        return ans


print(Solution().solve(list(map(int,input().split(' ')))))