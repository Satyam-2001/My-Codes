#include <bits/stdc++.h>
using namespace std;
#define ll long long int

ll dfs(ll p, vector<vector<pair<ll,ll>>> &v,vector<bool> &vis ,  ll cost, ll n) {
    if (p == n) {return 0;}
	if (v[p].size() == 0) {return LLONG_MAX;}
    
	ll min_cost = (n - p) * (n - p);
    vis[p] = true;
    
	for (ll i = 0; i < v[p].size(); i++) {
		if (v[p][i].second == -1 && !vis[i]) {
		    ll dist = v[p][i].first - p;
		    v[p][i].second = dfs(v[p][i].first , v , vis , cost + (dist*dist) , n);
		}
		if (v[p][i].second != -1){
		    min_cost = min(v[p][i].second, min_cost);
		}
	}
    return min_cost;
}
ll minCost(ll n, vector<vector<pair<ll,ll>>> &v) {
    vector<bool> vis(n+1,false);
	return dfs(1, v, vis, 0, n);
}
int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(0), cout.tie(0);
	ll t, n, m;
	cin >> t;
	while (t--) {
		cin >> n >> m;
		vector<vector<pair<ll,ll>>> bidir(n + 1);
		for (ll i = 0; i < m; i++) {
			ll a, b;
			cin >> a >> b;
			bidir[a].push_back({b,-1});
			bidir[b].push_back({a,-1});
		}
		cout << minCost(n, bidir) << "\n";
	}

	return 0;
}