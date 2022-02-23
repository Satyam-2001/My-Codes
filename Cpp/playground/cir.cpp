#include<bits/stdc++.h>
using namespace std;

const int TOTAL_ELEMENTS = 5;
const int MAXIMUM = 100;
int main(){

    srand(time(0));
    ofstream outfile;
    outfile.open("data.csv");
    // FILE *fout= fopen("./ASSIGNMENT 1/Prb1/uniform_dist.csv","w");

    for(int i = 0; i < TOTAL_ELEMENTS; i++){
        outfile << i << "\n";
    }
    outfile.close();
    
    ifstream infile;
    infile.open("data.csv");
    // FILE *fout= fopen("./ASSIGNMENT 1/Prb1/uniform_dist.csv","w");
    int data;
    for(int i = 0; i < TOTAL_ELEMENTS; i++){
        infile >> data;
        cout << data;
    }
    infile.close();
    return 0;
}