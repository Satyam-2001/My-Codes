#include <bits/stdc++.h>
using namespace std;
#define ll long long

int change(char* s,int n) {
    int i;
    for(i = 0 ; (i < n) && (s[i] != '1') ; i++) s[i] = '1';
    if (i == n) {
        s[n-1] = '0';
        return n-1;
    }
    for(int j = i+1 ; j < n ; j++) {
        if (s[j] == '0') s[j] = '1';
        else s[j] = '0';
    }
    return i;
}

void solve()
{
    int n, k;
    cin >> n >> k;
    char* s = new char[n+1];
    vector<int> ans(n,0);
    cin >> s;
    if(k&1) {
        k--;
        int ind = change(s,n);
        ans[ind] = 1;
    }
    for(int i = 0 ; (i < n) && (k > 0) ; i++) {
        if (s[i] == '1') continue;
        s[i] = '1';
        ans[i] += 1;
        k--;
    }
    if (k&1) {
        s[n-1] = '0';
    }
    ans[n-1] += k;
    cout << s << '\n';
    for(int i = 0 ; i < n ; i++) cout << ans[i] << ' ';
    cout << '\n';
    delete[] s;
}

int main()
{
    ll t;
    cin >> t;
    while (t--) solve();
    return 0;
}