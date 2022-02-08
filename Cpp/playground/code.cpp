#include <bits/stdc++.h>
using namespace std;

void topoSort(vector<vector<pair<int, int>>> graphs, int size)
{
  queue<int> q;
  int indegree[10] = {0};
  for (auto nod : graphs)
  {
    for (auto it : nod)
    {
      indegree[it.first]++;
    }
  }
  for (int i = 0; i < size; i++)
  {
    if (indegree[i] == 0)
      q.push(i);
  }
  while (q.size())
  {
    int node = q.front();
    q.pop();
    cout << node;
    for (auto it : graphs[node])
    {
      indegree[it.first]--;
      if (indegree[it.first] == 0)
        q.push(it.first);
    }
  }
}

int main()
{
  int nodes, edges;
  cout << "start" << endl;
  cin >> nodes >> edges;
  vector<vector<pair<int, int>>> graphs(nodes + 1);
  for (int i = 0; i < edges; i++)
  {
    int firstNode, secondNode, weight;
    cin >> firstNode >> secondNode >> weight;
    graphs[firstNode].push_back({secondNode, weight});
  }
  topoSort(graphs, nodes);
  return 0;
}