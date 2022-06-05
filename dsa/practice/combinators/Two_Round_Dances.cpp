#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define ull unsigned long long
#define range(i, s, e) for (int i = s; i <= e; i++)
const ull MOD = 1e9 + 7;

ull factorial(int n)
{
    ull ans = 1;
    range(i, 2, n) ans *= i;
    return ans;
}

void solve()
{
    ull n, ans;
    cin >> n;
    if (n == 2) cout << 1;
    else cout << (factorial(n - 1) << 1) / n;
}

int main()
{
    solve();
    return 0;
}