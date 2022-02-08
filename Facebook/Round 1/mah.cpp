#include<iostream>
using namespace std;
int main()
{
	int t,m;
	cin>>t;
	m=1;
	int sol[t];
	while(m<t)
	{
		int i,j,k=0,n,ans=0;
		cin>>n;
		char s[n+1];
		cin>>s;
        for(i=0;s[i]!='X',s[i]!='O',i<n;i++);
		for(;i<n;++i)
		{
            if(s[i]=='X' || s[i]=='O')
            {
                j+1==2?j=0:j=1;
                ++ans;
            }
			
		}
		sol[m++]=ans;
	}
	for(m=0;m<t;++m)
	printf("Case #%d: %d\n",m+1,sol[m]);
	return 0;
}