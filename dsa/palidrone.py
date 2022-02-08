class Solution:
    def longestPalindrome(self, s: str) -> str:
        max=0
        sol=''
        for i in range(len(s)):
            for j in range(i+1,len(s)+1):
                if Solution().palidrone(s[i:j]):
                    if j-i>=max:
                        max=j-i
                        sol=s[i:j]
        return sol
        
    def palidrone(self, s):
        for i in range((len(s)//2)):
            if s[i]==s[-1-i]:
                print(s[i]+" -> "+s[-1-i])
                continue
            return False
        return True
        
print(Solution().longestPalindrome('bb'))
s='bb'
print(s[0:1])
#print(Solution().palidrone('cbb'))

