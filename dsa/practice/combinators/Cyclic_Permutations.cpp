#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define range(i,s,e) for(ll i = s ; i <= (e) ; i++)

const ll MOD = 1e9+7;

ll factorial(ll n){
    ll ans = 1;
    range(i,2,n) ans = (ans * i) % MOD;
    return ans;
}

ll binpow(ll n){
    ll ans = 1;
    range(i,1,n) ans = (ans << 1) % MOD;
    return ans;
}

int main()
{
    ll n;
    cin >> n;
    ll ans = (factorial(n) - binpow(n-1)) % MOD;
    if (ans < 0) ans += MOD;
    cout << ans;
    return 0;
}