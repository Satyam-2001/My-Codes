#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define ull unsigned long long
#define range(i,s,e) for(ll i = s; i < e; i++)
const ll MOD = 1e9 + 7;

ll factorial(ll n)
{
    if (n <= 1) return 1;
    ll ans = 1;
    range(i, 2, n + 1) ans = (ans * i) % MOD;
    return ans;
}

void solve()
{
    ll n;
    cin >> n;
    vector<ll> v(n);
    for (ll& i : v) cin >> i;
    ll res, count;
    res = v[0];
    count = 0;
    range(i, 1, n) res &= v[i];
    range(i, 0, n)
    {
        if (v[i] == res) count++;
    }
    if (count < 2)
    {
        cout << 0 << '\n';
        return;
    }
    ll ans = (count * (count - 1)) % MOD;
    ans = (ans * factorial(n - 2)) % MOD;
    cout << ans << '\n';
}

int main()
{
    ll t;
    cin >> t;
    while (t--) solve();
    return 0;
}