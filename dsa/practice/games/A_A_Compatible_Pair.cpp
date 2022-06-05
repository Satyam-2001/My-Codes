#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define ull unsigned long long
#define range(i, s, e) for (ll i = s; i < e; i++)

int main()
{
    ll n, m;
    cin >> n >> m;
    vector<ll> a(n), b(m);
    for (ll &i : a)
        cin >> i;
    for (ll &i : b)
        cin >> i;
    sort(a.begin(), a.end());
    sort(b.begin(), b.end());
    ll ans;
    if (a[0] >= 0 && b[m - 1] <= 0)
    {
        ans = a[1] * b[m - 1];
    }
    else if (a[n - 1] <= 0 && b[0] >= 0)
    {
        ans = a[n - 2] * b[0];
    }
    else
    {
        if (a[0] * b[0] > a[n - 1] * b[m - 1])
        {
            ans = max(a[1] * b[0], a[n - 1] * b[m - 1]);
        }
        else
        {
            ans = max(a[0] * b[0], a[n - 2] * b[m - 1]);
        }
    }
    cout << ans;
    return 0;
}