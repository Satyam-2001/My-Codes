#include <bits/stdc++.h>
using namespace std;

int partition(vector<int> arr, int i, int j)
{
    int pivot = arr[i];
    while (i < j)
    {
        do
        {
            ++i;
        } while (arr[i] <= pivot);
        do
        {
            --j;
        } while (arr[j] > pivot);
        if (i < j)
        {  
            cout<<arr[i]<<" "<<arr[j]<<"\n";
            swap(arr[i], arr[j]);
            cout<<arr[i]<<" "<<arr[j]<<"\n";
        }
    }
    return j;
}

void quick(vector<int> arr, int l, int h)
{
    if (l < h)
    {   
        int j = partition(arr, l, h);
        quick(arr, l, j);
        quick(arr, j + 1, h);
    }
}
void quick_sort(vector<int> arr)
{
    arr.push_back(INT_MAX);
    quick(arr, 0, arr.size());
    arr.erase(arr.end());
}

int main()
{
    vector<int> arr = {2, 4, 1, 6, 3, 1, 9};
    quick_sort(arr);
    for (auto i : arr)
    {
        cout << i << " ";
    }
    return 0;
}