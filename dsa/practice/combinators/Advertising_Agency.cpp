#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define MOD (1e9 + 7)
#define range(i,s,e) for(int i = s ; i < e ; i++)

unsigned long long power(unsigned long long x,int y, int p)
{
	unsigned long long res = 1; 
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


unsigned long long modInverse(unsigned long long n,int p)
{
	return power(n, p - 2, p);
}


unsigned long long nCr(unsigned long long n,int r, int p)
{
	if (n < r)
		return 0;
	if (r == 0)
		return 1;

	unsigned long long fac[n + 1];
	fac[0] = 1;
	for (int i = 1; i <= n; i++)
		fac[i] = (fac[i - 1] * i) % p;

	return (fac[n] * modInverse(fac[r], p) % p * modInverse(fac[n - r], p) % p) % p;
}


void solve() {
    int n,k;
    cin >> n >> k;
    vector<int> a(n);
    for(int& i:a) cin >> i;
    sort(a.begin(),a.end(),greater<>());
    int N = count(a.begin(),a.end(),a[k-1]);
    int R = count(a.begin(),a.begin() + k,a[k-1]);
    cout << nCr(N,R,MOD) << '\n';
}

int main()
{
    int t;
    cin >> t;
    while(t--) solve();
    return 0;
}