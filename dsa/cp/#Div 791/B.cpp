#include<bits/stdc++.h>
using namespace std;
#define ll long long

int main()
{
    ll n,q,c,ans,r;
    cin >> n >> q;
    c = ans = 0;
    vector<ll> v(n+1),o(n+1,0);
    for(ll i = 1 ; i <= n ; i++) {
        cin >> v[i];
        ans += v[i];
    }
    while(q--) {
        ll t;
        cin >> t;
        if (t == 1) {
            ll a,b;
            cin >> a >> b;
            ans += b;
            if (o[a] == c) ans -= v[a];
            else ans -= r;
            v[a] = b;
            o[a] = c;
        }
        else {
            ll k;
            cin >> k;
            r = k;
            ans = k * n;
            c++;
        }
        cout << ans << '\n';
    }
    return 0;
}