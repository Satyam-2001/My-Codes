class Solution {
    int solver(vector<int>& a) {
        int n = a.size(), ans = 0, X = 1;
        sort(a.begin(),a.end());
        vector<bool> dp(n,false);
        for(int i = 0 ; i < n ; i++) {
            if(dp[i]) continue;
            while(true) {
                int days = ceil(arr[i] / X);
                ans += days;
                int troops = X * days;
                int j = 
            }
        }
    }
}