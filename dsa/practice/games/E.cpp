#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define ull unsigned long long
#define range(i,s,e) for(ll i = s ; i < e ; i++)

// ll firstMissingPositive(vector<ll>& nums , ll numsSize){
//     for(ll i = 0; i < numsSize; i++){
//         while(nums[i]>0 && nums[i]<numsSize && nums[nums[i]-1] != nums[i]){
//             ll temp = nums[i];
//             nums[i] = nums[temp-1];
//             nums[temp-1] = temp; 
//         }
//     }
//     for(ll i = 0; i < numsSize; i++){
//         if(nums[i] != i+1) return i+1;
//     }
//     return numsSize+1;
// }

// ll countDistinct(vector<ll>& arr, ll n)
// {
//     unordered_set<ll> s;

//     ll res = 0;
//     for (ll i = 0; i < n; i++) {
//         if (s.find(arr[i]) == s.end()) {
//             s.insert(arr[i]);
//             res++;
//         }
//     }
 
//     return res;
// }

void solve() {
    ll n,k;
    cin >> n >> k;
    vector<ll> a(n);
    for(ll& i:a) cin >> i;
    a.sort();
    
}

int main()
{
    ll t;
    cin >> t;
    while(t--) solve();
    return 0;
}