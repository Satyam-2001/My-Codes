#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define ull unsigned long long
#define MOD (1e9 + 7)
#define range(i,s,e) for(ll i = s ; i < e ; i++)

void solve() {
    int n;
    cin >> n;
    vector<int> v(n);
    for(int& i:v) cin >> i;
    sort(v.begin(),v.end());
    ull ans = 0;
    for(int l = 0,r = 2 ; r < n ; r++) {
        while(v[r] - v[l] > 2) l++;
        if (r >= l + 2) {
            ull n = r - l - 1;
            ans += (n * (n + 1)) / 2;
        }
    }
    cout << ans << '\n';
}

int main()
{
    int t;
    cin >> t;
    while(t--) solve();
    return 0;
}