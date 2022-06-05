#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define ull unsigned long long
#define range(i, s, e) for (int i = s; i < e; i++)
const ull MOD = 1e9 + 7;

ull power(ull x, int y, int p)
{
    ull res = 1;
    x = x % p;

    while (y > 0)
    {

        if (y & 1)
            res = (res * x) % p;

        y = y >> 1;
        x = (x * x) % p;
    }
    return res;
}

ull modInverse(ull n, int p)
{
    return power(n, p - 2, p);
}

ull nCr(ull n, int r, int p)
{
    if (n < r)
        return 0;
    if (r == 0)
        return 1;

    ull fac[n + 1];
    fac[0] = 1;
    for (int i = 1; i <= n; i++)
        fac[i] = (fac[i - 1] * i) % p;

    return (fac[n] * modInverse(fac[r], p) % p * modInverse(fac[n - r], p) % p) % p;
}

ull modFact(ull n, ull p)
{
    if (n >= p)
        return 0;

    ull result = 1;
    for (ull i = 1; i <= n; i++)
        result = (result * i) % p;

    return result;
}

void solve()
{
    ull n, x, pos;
    cin >> n >> x >> pos;
    ull small, big;
    ull left, right, middle;
    small = big = 0;
    left = 0;
    right = n;
    while (left < right)
    {
        middle = (left + right) / 2;
        if (pos >= middle)
        {
            if (pos != middle) small++;
            left = middle + 1;
        }
        else
        {
            big++;
            right = middle;
        }
    }
    ull ans = modFact(n - big - small - 1, MOD);
    ans = (((ans * nCr(x - 1, small, MOD)) % MOD) * modFact(small, MOD)) % MOD;
    ans = (((ans * nCr(n - x, big, MOD)) % MOD) * modFact(big, MOD)) % MOD;
    cout << ans;
}

int main()
{
    solve();
    return 0;
}