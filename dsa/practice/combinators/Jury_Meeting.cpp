#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define ull unsigned long long
#define range(i, s, e) for (ll i = s; i < e; i++)
const ll MOD = 998244353;

void solve()
{
    ll n;
    cin >> n;
    vector<int> a(n);
    for (int &i : a)
        cin >> i;
    int max = *max_element(a.begin(), a.end());
    int count_1 = count(a.begin(), a.end(), max);
    int count_2 = count(a.begin(), a.end(), max - 1);
    ll ans,res;
    ans = res = 1;
    range(i,2,n+1) {
        ans = (ans * i) % MOD;
        if(i != count_2 + 1) res = (res * i) % MOD;
    }
    if (count_1 == 1) ans = (ans - res + MOD) % MOD;
    cout << ans << '\n';
   
}

int main()
{
    ll t;
    cin >> t;
    while (t--)
        solve();
    return 0;
}