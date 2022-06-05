#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define MOD (1e9 + 7)
#define range(i,s,e) for(ll i = s ; i < e ; i++)

void solve() {
    int A,B,k;
    cin >> A >> B >> k;
    vector<int> a(k),b(k),a_count(A+1,0),b_count(B+1,0);
    for(int& i:a) {
        cin >> i;
        a_count[i]++;
    }
    for(int& i:b) {
        cin >> i;
        b_count[i]++;
    }
    ll ans = 0;
    range(i,0,k) {
        a_count[a[i]]--;
        b_count[b[i]]--;
        ans += k - i - 1 - a_count[a[i]] - b_count[b[i]];
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