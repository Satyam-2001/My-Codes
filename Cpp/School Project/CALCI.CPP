#include<iostream.h>
#include<conio.h>
#include<math.h>
#include<graphics.h>
#include<stdio.h>
#include<dos.h>
#include<process.h>
#include<stdlib.h>
#include<limits.h>
char kharab(char ko[9],int o)
{
   {
      if(ko[o]!='0')
      cout<<" kharab";
      else
      cout<<"";
   }
 return 0;
}
char arab(char ao[9],int o)
{
   {
      if(ao[o]!='0')
      cout<<" arab";
      else
      cout<<"";
   }
 return 0;
}
char cror(char co[9],int o)
{
    {
      if(co[o]!='0')
      cout<<" crore";
      else
      cout<<"";
    }
 return 0;
}
 char lakh(char lo[9],int o)
{
   {
    if(lo[o]!='0')
    cout<<" lakh";
    else
    cout<<"";
   }
  return 0;
}
char thous(char to[9],int o)
{
   {
     if(to[o]!='0')
     cout<<" thousand";
     else
     cout<<"";
   }
 return 0;
 }
char hun(char ho[9],int o)
{
    {
     if(ho[o]!='0')
     cout<<" hundred";
     else
     cout<<"";
    }
  return 0;
}
char unit(char u)
{
   switch(u)
   {
    case '0':cout<<"";
	     break;
    case '1':cout<<" One";
	     break;
    case '2':cout<<" Two";
	     break;
    case '3':cout<<" Three";
	     break;
    case '4':cout<<" Four";
	     break;
    case '5':cout<<" Five";
	     break;
    case '6':cout<<" Six";
	     break;
    case '7':cout<<" Seven";
	     break;
    case '8':cout<<" Eight";
	     break;
    case '9':cout<<" Nine";
	     break;
    default:cout<<"";
    }
    return NULL;
    }
char tens2(char t1)
 {switch(t1)

  { case '0':cout<<" Ten";
	     break;
    case '1':cout<<" Eleven";
	     break;
    case '2':cout<<" Twelve";
	     break;
    case '3':cout<<" Thirteen";
	     break;
    case '4':cout<<" Fourteen";
	     break;
    case '5':cout<<" Fifteen";
	     break;
    case '6':cout<<" Sixteen";
	     break;
    case '7':cout<<" Seventeen";
	     break;
    case '8':cout<<" Eighteen";
	     break;
    case '9':cout<<" Nineteen";
	     break;
    default:cout<<"";
  }
  return 0;
  }
char tens(char t)
{
  switch(t)

  { case '1':cout<<" Ten";
	     break;
    case '2':cout<<" Twenty";
	     break;
    case '3':cout<<" Thirty";
	     break;
    case '4':cout<<" Fourty";
	     break;
    case '5':cout<<" Fifty";
	     break;
    case '6':cout<<" Sixty";
	     break;
    case '7':cout<<" Seventy";
	     break;
    case '8':cout<<" Eighty";
	     break;
    case '9':cout<<" Ninty";
	     break;
    default:cout<<"";
 }
 return NULL;
}
 char tenth(int q,char ch[9],int k)
 {
 if((q-k==5)&&(ch[k+3]!='1')&&(ch[k]!='1')&&(ch[k+1]!='0'))
 {
    cout<<unit(ch[k+4])<<tens(ch[k+3])<<hun(ch,k+2)<<unit(ch[k+2])<<thous(ch,k+1)<<unit(ch[k+1])<<tens(ch[k]);
 }
 else if((q-k==5)&&(ch[k+3]!='1')&&(ch[k]=='1')&&(ch[k+1]!='0'))
 {
    cout<<unit(ch[k+4])<<tens(ch[k+3])<<hun(ch,k+2)<<unit(ch[k+2])<<thous(ch,k+1)<<tens2(ch[k+1]);
 }
 else if((q-k==5)&&(ch[k+3]=='1')&&(ch[k]!='1')&&(ch[k+1]!='0'))
 {
    cout<<tens2(ch[k+4])<<hun(ch,k+2)<<unit(ch[k+2])<<thous(ch,k+1)<<unit(ch[k+1])<<tens(ch[k]);
 }
 else if((q-k==5)&&(ch[k+3]=='1')&&(ch[k]=='1')&&(ch[k+1]!='0'))
 {
    cout<<tens2(ch[k+4])<<hun(ch,k+2)<<unit(ch[k+2])<<thous(ch,k+1)<<tens2(ch[k+1]);
 }
 else if((q-k==5)&&(ch[k+3]!='1')&&(ch[k+1]=='0'))
 {
    cout<<unit(ch[k+3])<<tens(ch[k+2])<<hun(ch,k+2)<<unit(ch[k+1])<<thous(ch,k)<<tens(ch[k]);
 }
 else if((q-k==5)&&(ch[k+3]=='1')&&(ch[k+1]=='0'))
 {
    cout<<tens2(ch[k+4])<<hun(ch,k+2)<<unit(ch[k+1])<<thous(ch,k)<<tens(ch[k]);
 }
 return 0;
 }
 char crors(int w,char ca[9],int e)
 {
   if((w==8+e)&&(ca[e+1]=='1'))
   cout<<tenth(w,ca,e+3)<<lakh(ca,e+2)<<tens2(ca[e+2])<<cror(ca,e);
   else if((w==8+e)&&(ca[e+1]!='1'))
   cout<<tenth(w,ca,e+3)<<lakh(ca,e+2)<<unit(ca[e+2])<<tens(ca[e+1])<<cror(ca,e);
   return 0;
 }
 char arabs(int a,char cc[12],int d)
 {
    if((a-d==11)&&(cc[d+2]!='1')&&(cc[d]!='1'))
    cout<<crors(a,cc,3+d)<<unit(cc[d+3])<<tens(cc[d+2])<<arab(cc,d)<<unit(cc[d+1])<<tens(cc[d]);
    else if((a-d==11)&&(cc[d+2]=='1')&&(cc[d]!='1'))
    cout<<crors(a,cc,d+3)<<tens2(cc[d+3])<<arab(cc,d)<<unit(cc[d+1])<<tens(cc[d]);
    else if((a-d==11)&&(cc[d+2]=='1')&&(cc[d]=='1'))
    cout<<crors(a,cc,d+3)<<tens2(cc[d+3])<<arab(cc,d)<<tens2(cc[d+1]);
    else if((a-d==11)&&(cc[d+2]!='1')&&(cc[d]=='1'))
    cout<<crors(a,cc,3+d)<<unit(cc[d+3])<<tens(cc[d+2])<<arab(cc,d)<<tens2(cc[d+1]);
    return 0;
 }
long double factorial(int n)
{
 long double fact=1;
 for(int i=1;i<=n;++i)
  {
     fact=fact*i;
  }
 return fact;
}
void voice()
{
	sound(1000);
	delay(80);
	sound(660);
	delay(80) ;
	nosound();
}
float color(int gd,int gm)
{
	gd=DETECT;
	initgraph(&gd,&gm,"C:\\TC\\BGI");
	setbkcolor(BLUE);
	rectangle(150,10,490,60) ;
	setfillstyle(SOLID_FILL,CYAN);
	floodfill(160,20,WHITE);
	settextstyle(9,0,3);
	return 0;
}
float colors(int gdr,int gmo)
{
	gdr=DETECT;
	initgraph(&gdr,&gmo,"C:\\TC\\BGI");
	setbkcolor(CYAN);
	rectangle(70,10,560,60) ;
	setfillstyle(SOLID_FILL,BLUE);
	floodfill(80,20,WHITE);
	settextstyle(9,0,3);
	return 0;
}
float colour(int gd,int gm)
{
	gd=DETECT;
	initgraph(&gd,&gm,"C:\\TC\\BGI");
	setbkcolor(MAGENTA);
	rectangle(150,10,490,60) ;
	setfillstyle(SOLID_FILL,LIGHTRED);
	floodfill(160,20,WHITE);
	settextstyle(9,0,3);
	return 0;
}

void g(int x,int y)
{if(y==1)
 {rectangle(x,450,x+40,405);
 }
 else if(y==2)
 {rectangle(x,450,x+40,365);
 }
 else if(y==3)
 {rectangle(x,450,x+40,325);
 }
 else if(y==4)
 {rectangle(x,450,x+40,285);
 }
 else if(y==5)
 {rectangle(x,450,x+40,245);
 }
 else if(y==6)
 {rectangle(x,450,x+40,205);
 }
 else if(y==7)
 {rectangle(x,450,x+40,165);
 }
 else if(y==8)
 {rectangle(x,450,x+40,125);
 }
 else
 {rectangle(x,450,x+40,85);
 }
}
void drawg(long int AR[],long int size,int l)
{  int big;
   for(int m=0;m<size;m++)
   {
    big=AR[m];
    for(int n=0;n<size;n++)
    {
       if(AR[n]>big)
       {
	  big=AR[n];
       }
    }
   }
	for(long double k=0;k<size;k++)
	{
	 rectangle(230+(k*400/size),440,230+((k+1)*400/size),440-(400*AR[k]/big));
	 if(AR[k]%8!=0)
	 {setfillstyle(SOLID_FILL,AR[k]);}
	 else
	 {setfillstyle(SOLID_FILL,LIGHTGRAY);}
	 floodfill(231+(k*400/size),439.9,WHITE);
	 if(l==1)
	 {delay(400-(size*2));}
	}
}
void biggest(long int AR[],long int size)
{  int big;
   for(int m=0;m<(size);m++)
   {
    big=AR[m];
    for(int n=0;n<(size);n++)
    {
       if(AR[n]>big)
       {
	  big=AR[n];
       }
    }
   }
}

void sort()
{
 setbkcolor(BLUE);
 settextstyle(10,0,4);
 outtextxy(150,140,"BUBBLE SORT");
 outtextxy(115,250,"SELECTION SORT");
 outtextxy(125,360,"INSERTION SORT");
 settextstyle(10,0,6);
 outtextxy(150,3,"SORTING");
 rectangle(20,20,620,460);
 rectangle(100,150,540,210);
 rectangle(100,260,540,320);
 rectangle(100,370,540,430);
 setfillstyle(7,5);
 floodfill(124,154,WHITE);
 floodfill(124,264,WHITE);
 floodfill(124,374,WHITE);
 setfillstyle(5,3);
 floodfill(100,100,WHITE);
 floodfill(230,80,WHITE);
 floodfill(270,60,WHITE);
}
void sorting(int n,int s)
{
 setbkcolor(DARKGRAY);
 settextstyle(6,0,2);
 {outtextxy(40,25,"No. of elements");
 outtextxy(40,90,"Choose any one");
 outtextxy(50,135,"Random Array");
 outtextxy(60,175,"Enter Array");
 outtextxy(40,215,"Decreasing Array");
 outtextxy(65,255,"Sort Array");
 outtextxy(42,295,"Search Element");
 outtextxy(80,335,"Refresh");
 outtextxy(80,375,"Go Back");
 outtextxy(90,415,"Exit");}
 settextstyle(7,0,2);
{ if(s==1)
 { outtextxy(350,13,"BUBBLE SORT");}
 else if(s==2)
 { outtextxy(345,13,"SELECTION SORT");}
 else
 {outtextxy(340,13,"INSERTION SORT");} }
 rectangle(10,20,210,460);
 rectangle(230,40,630,440);
 {rectangle(28,60,192,86);}
 setfillstyle(1,15);
 floodfill(31,61,15);
 setfillstyle(7,7);
 floodfill(1,1,WHITE);
 rectangle(25,130,200,410);
 rectangle(25,250,200,290);
 rectangle(25,330,200,370);
 rectangle(25,410,200,450);
 rectangle(25,170,200,210);
 if(n>0)
 {gotoxy(6,5);
 cout<<n;}
}
void Lsearch(long int AR[],long int size,int s)
{int n;
 gotoxy(6,20);
				      cout<<"Enter Element :";
				      cin>>n;
				      for(int z=0;z<size;z++)
				      {
				       if(AR[z]==n)
				       {cleardevice();
					sorting(size,s);
					drawg(AR,size,0);
					outtextxy(232+(z*400/size),445,"Found");
					for(int j=1;j<=16;j++)
				       {delay(200);
					setfillstyle(SOLID_FILL,j);
				       floodfill(232+(z*400/size),439,WHITE);}
				       }
				      }
				      drawg(AR,size,0);
}
void main()
{ clrscr();
  int gd1=DETECT,gm1;
  initgraph(&gd1,&gm1,"C:\\TC\\BGI");
  setbkcolor(7);
float pi=3.141592654;
long double a,b,s,ar;
int c,ch,n,r,k,x,y,xa=17,ya=17;
char c1,f[9],l,m;
setlinestyle(0,0,2);
circle(320,240,120);
arc(320,240,8,82,140);
arc(320,240,97,172,140);
arc(320,240,188,262,140);
arc(320,240,278,353,140);
arc(320,240,6,84,132);
arc(320,240,95,174,132);
arc(320,240,186,264,132);
arc(320,240,276,355,132);
line(20,220,180,220);
line(460,220,620,220);
line(20,260,180,260);
line(460,260,620,260);
line(20,20,20,220);
line(620,220,620,20);
line(20,20,300,20);
line(340,20,620,20);
line(300,20,300,100);
line(340,20,340,100);
line(300,380,300,460);
line(340,380,340,460);
line(20,260,20,460);
line(620,260,620,460);
line(20,460,300,460);
line(340,460,620,460);
line(12,228,188,228);
line(452,228,628,228);
line(12,252,188,252);
line(452,252,628,252);
line(12,12,12,228);
line(628,228,628,12);
line(12,12,308,12);
line(332,12,628,12);
line(308,12,308,108);
line(332,12,332,108);
line(308,372,308,468);
line(332,372,332,468);
line(12,252,12,468);
line(628,252,628,468);
line(12,468,308,468);
line(332,468,628,468);
setfillstyle(SOLID_FILL,2);
floodfill(321,241,WHITE);
setfillstyle(SOLID_FILL,4);
floodfill(40,40,WHITE);
setfillstyle(SOLID_FILL,1);
floodfill(400,40,WHITE);
setfillstyle(SOLID_FILL,3);
floodfill(40,400,WHITE);
setfillstyle(SOLID_FILL,5);
floodfill(400,400,WHITE);
settextstyle(9,0,3);
outtextxy(230,210,"FEATURES");
settextstyle(3,0,4);
outtextxy(430,50,"SCIENTIFIC");
outtextxy(410,100,"CALCULATOR");
outtextxy(90,70,"GAME");
outtextxy(70,320,"MATRIX");
outtextxy(40,370,"CALCULATOR");
outtextxy(410,360,"MENSURATION");
voice();

int pos=1,t,x1,y1;
while(1)
{ {if(pos==1)
  {xa=17;
  ya=17;}
  else if(pos==2)
  {xa=350;
  ya=17;}
  else if(pos==3)
  {xa=17;
  ya=300;}
  else
  {xa=622;
  ya=300;}}
  {if(t==1)
  {x1=17;
  y1=17;}
  else if(t==2)
  {x1=350;
  y1=17;}
  else if(t==3)
  {x1=17;
  y1=300;}
  else
  {x1=622;
  y1=300;}}
  setfillstyle(1,7);
  floodfill(x1,y1,15);
  setfillstyle(1,8);
  floodfill(xa,ya,15);
 l=getch();
 switch(l)
 {case 0 :{m=getch();
	   switch(m)
	   {case 72:if(pos==1)
		    {pos=3;
		    t=1;}
		    else if(pos==3)
		    {pos=1;
		    t=3;}
		    else if(pos==2)
		    {pos=4;
		    t=2;}
		    else if(pos==4)
		    {pos=2;
		    t=4;}
		    break;
	    case 75:if(pos==1)
		    {pos=2;
		    t=1;}
		    else if(pos==2)
		    {pos=1;
		     t=2;}
		    else if(pos==3)
		    {pos=4;
		    t=3;}
		    else if(pos==4)
		    {pos=3;
		    t=4;}
		    break;
	    case 77:if(pos==1)
		    {pos=2;
		     t=1;}
		    else if(pos==2)
		    {pos=1;
		    t=2;}
		    else if(pos==3)
		    {pos=4;
		    t=3;}
		    else if(pos==4)
		    {pos=3;
		    t=4;}
		    break;
	    case 80:if(pos==1)
		    {pos=3;
		    t=1;}
		    else if(pos==3)
		    {pos=1;
		    t=3;}
		    else if(pos==2)
		    {pos=4;
		    t=2;}
		    else if(pos==4)
		    {pos=2;
		    t=4;}
		    break;
	   }break;
	  }
  case 'x':exit(0);
  case 32: if(pos==1)
	   {
 clrscr();
 int gd12=DETECT,gm12;
 initgraph(&gd12,&gm12,"C:\\TC\\BGI");
 setbkcolor(LIGHTBLUE);
 line(50,430,90,430);
 arc(110,430,0,180,20);
 line(130,430,190,430);
 arc(210,430,0,180,20);
 circle(110,430,17);
 circle(210,430,17);
 line(230,430,280,430);
 line(280,430,280,420);
 line(280,420,240,400);
 circle(310,430,17);
 circle(410,430,17);
 line(310,430,410,430);
 line(310,430,330,400);
 line(410,430,390,400);
 line(330,400,390,400);
 line(390,400,420,370);
}
else if(pos==2)
{do{
clrscr();
color(1,1);
voice();
outtextxy(200,10,"CALCULATOR");
cout<<"\n\n\n\n\nChoose any function";
cout<<"\n1. Addition";
cout<<"\n2. Subtraction";
cout<<"\n3. Multiplication";
cout<<"\n4. Division";
cout<<"\n5. Square Root";
cout<<"\n6. Cube Root";
cout<<"\n7. Square";
cout<<"\n8. Cube";
cout<<"\n9. Power";
cout<<"\n10. log";
cout<<"\n11. Trignometric Function";
cout<<"\n12. Factorial";
cout<<"\n13. Permutation";
cout<<"\n14. Combination";
cout<<"\n15. Convert value in words";
cout<<"\n16. Exit";
cout<<endl;
cin>>ch;
voice();
voice();
switch(ch)
{case 1:clrscr();
	color(1,1);
	outtextxy(240,10,"ADDITION");
	cout<<"\n\n\n\n\n\nEnter two values";
	cout<<"\nFirst Value :";
	cin>>a;
	voice();
	cout<<"Second Value :";
	cin>>b;
	voice();
	cout<<"Result :"<<a+b;
	break;
 case 2:clrscr();
	color(1,1);
	outtextxy(200,10,"SUBTRACTION");
	cout<<"\n\n\n\n\n\nEnter two values";
	cout<<"\nFirst Value :";
	cin>>a;
	voice();
	cout<<"Second Value :";
	cin>>b;
	voice();
	cout<<"Result :"<<a-b;
	break;
 case 3:clrscr();
	color(1,1);
	outtextxy(180,10,"MULTIPLICATION");
	cout<<"\n\n\n\n\n\nEnter two values";
	cout<<"\nFirst Value :";
	cin>>a;
	voice();
	cout<<"Second Value :";
	cin>>b;
	voice();
	cout<<"Result :"<<a*b;
	break;
 case 4:clrscr();
	color(1,1);
	outtextxy(248,10,"DIVISION");
	cout<<"\n\n\n\n\n\nEnter two values";
	cout<<"\nFirst Value :";
	cin>>a;
	voice();
	cout<<"Second Value :";
	cin>>b;
	voice();
	if(b==0)
	cout<<"Math Error";
	else
	cout<<"Result :"<<a/b;
	break;
 case 5:clrscr();
	color(1,1);
	outtextxy(190,10,"SQUARE ROOT");
	cout<<"\n\n\n\n\n\nEnter a value :"<<endl;
	cin>>a;
	voice();
	cout<<"Result :"<<pow(a,0.5);
	break;
 case 6:clrscr();
	color(1,1);
	outtextxy(220,10,"CUBE ROOT");
	cout<<"\n\n\n\n\n\nEnter a value :"<<endl;
	cin>>a;
	voice();
	cout<<"Result :"<<pow(a,0.3333333333334);
	break;
 case 7:clrscr();
	color(1,1);
	outtextxy(250,10,"SQUARE");
	cout<<"\n\n\n\n\n\nEnter a value :"<<endl;
	cin>>a;
	voice();
	cout<<"Result :"<<pow(a,2);
	break;
 case 8:clrscr();
	color(1,1);
	outtextxy(265,10,"CUBE");
	cout<<"\n\n\n\n\n\nEnter a value :"<<endl;
	cin>>a;
	voice();
	cout<<"Result :"<<pow(a,3);
	break;
 case 9:clrscr();
	color(1,1);
	outtextxy(260,10,"POWER");
	cout<<"\n\n\n\n\n\nEnter values :"<<endl;
	cin>>a;
	voice();
	cout<<a<<"^";
	cin>>b;
	voice();
	cout<<"Result :"<<pow(a,b);
	break;
 case 10:clrscr();
	 color(1,1);
	 outtextxy(215,10,"LOGARITHM");
	 cout<<"\n\n\n\n\n\nEnter a value\nlog";
	 cin>>a;
	 voice();
	 cout<<"log "<<a<<" = "<<log(a)/2.302585093;
	 break;
 case 11:clrscr();
	 color(1,1);
	 outtextxy(190,10,"TRIGNOMETRY");
	 cout<<"\n\n\n\n\n\nChoose a trignometric function";
	 cout<<"\n1. sin";
	 cout<<"\n2. cos";
	 cout<<"\n3. tan";
	 cout<<"\n4. cosec";
	 cout<<"\n5. sec";
	 cout<<"\n6. cot"<<endl;
	 cin>>c;
	 voice();
	 cout<<"\nEnter Degree :";
	 switch(c)
	 {
	  case 1:cout<<"sin ";
		 cin>>a;
		 cout<<"\nResult :"<<sin(a*pi/180);
		 break;
	  case 2:cout<<"cos ";
		 cin>>a;
		 cout<<"\nResult :"<<cos(a*pi/180);
		 break;
	  case 3:cout<<"tan ";
		 cin>>a;
		 cout<<"\nResult :"<<tan(a*pi/180);
		 break;
	  case 4:cout<<"cosec ";
		 cin>>a;
		 cout<<"\nResult :"<<1/sin(a*pi/180);
		 break;
	  case 5:cout<<"sec ";
		 cin>>a;
		 cout<<"\nResult :"<<1/cos(a*pi/180);
		 break;
	  case 6:cout<<"cot ";
		 cin>>a;
		 cout<<"\nResult :"<<1/tan(a*pi/180);
		 break;
	  default:voice();
		  cout<<"Wrong Choice";
	 }
	 break;
 case 12:clrscr();
	 color(1,1);
	 outtextxy(220,10,"FACTORIAL");
	 cout<<"\n\n\n\n\n\nEnter a value :"<<endl;
	 cin>>a;
	 voice();
	 cout<<factorial(a) ;
	 break;
 case 13:clrscr();
	 color(1,1);
	 outtextxy(200,10,"PERMUTATION");
	 cout<<"\n\n\n\n\n\nEnter value of n and r"<<endl;
	 cout<<"n :";
	 cin>>n;
	 voice();
	 cout<<"r :";
	 cin>>r;
	 voice();
	 if(r>n)
	 cout<<"Math Error!!!";
	 else
	 cout<<"Result :"<<factorial(n)/factorial(n-r);
	 break;
 case 14:clrscr();
	 color(1,1);
	 outtextxy(200,10,"COMBINATION");
	 cout<<"\n\n\n\n\n\nEnter value of n and r"<<endl;
	 cout<<"n :";
	 cin>>n;
	 voice();
	 cout<<"r :";
	 cin>>r;
	 voice();
	 if(r>n)
	 cout<<"Math Error";
	 else
	 cout<<"Result :"<<factorial(n)/(factorial(r)*factorial(n-r));
	 break;
 case 15:clrscr();
	 color(1,1);
	 char c[14];
	 outtextxy(180,10,"Value to Words");
	 cout<<"\n\n\n\n\n\nEnter a value :";
	 gets(c);
	 voice();
	 for(int i=0;c[i]!=NULL ;i++)
	 {
	 }
	 cout<<"\nValue in words :";
	 if((i==1)&&(c[0]=='0'))
	 cout<<"Zero";
	 else if(i==1)
	 {cout<<unit(c[0]);
	  }
	 else if((i==2)&&(c[0]=='1'))
	 { cout<<tens2(c[1]);
	 }
	 else if((i==2)&&(c[0]>='2')&&(c[1]=='0'))
	 {cout<<tens(c[0]);
	 }
	 else if(i==2&&c[1]!='0')
	 {cout<<unit(c[1])<<tens(c[0]);
	 }
	 else if((i==3)&&(c[1]!='1'))
	 {cout<<unit(c[2])<<tens(c[1])<<hun(c,0)<<unit(c[0]);
	 }
	 else if((i==3)&&(c[1]=='1'))
	 {cout<<tens2(c[2])<<hun(c,0)<<unit(c[0]);
	 }
	 else if((i==4)&&(c[2]!='1')&&(c[1]!='0'))
	 {cout<<unit(c[3])<<tens(c[2])<<hun(c,1)<<unit(c[1])<<thous(c,0)<<unit(c[0]);
	 }
	 else if((i==4)&&(c[2]=='1')&&(c[1]!='0'))
	 {cout<<tens2(c[3])<<hun(c,1)<<unit(c[1])<<thous(c,0)<<unit(c[0]);
	  }
	 else if((i==4)&&(c[2]!='1')&&(c[1]=='0'))
	 {cout<<unit(c[3])<<tens(c[2])<<thous(c,0)<<unit(c[0]);
	 }
	 else if((i==4)&&(c[2]=='1')&&(c[1]=='0'))
	 {cout<<tens2(c[3])<<thous(c,0)<<unit(c[0]);
	 }
	 else if(i==5)
	 {cout<<tenth(i,c,0);}
	 else if(i==6)
	 cout<<tenth(i,c,1)<<lakh(c,0)<<unit(c[0]);
	 else if((i==7)&&c[0]!='1')
	 cout<<tenth(i,c,2)<<lakh(c,0)<<unit(c[1])<<tens(c[0]);
	 else if((i==7)&&(c[0]=='1'))
	 cout<<tenth(i,c,2)<<lakh(c,0)<<tens2(c[1]);
	 else if(i==8)
	 cout<<crors(i,c,0)<<unit(c[0]);
	 else if((i==9)&&(c[0]!='1'))
	 cout<<crors(i,c,1)<<unit(c[1])<<tens(c[0]);
	 else if((i==9)&&(c[0]=='1'))
	 cout<<crors(i,c,1)<<tens2(c[1]);
	 else if((i==10)&&(c[1]!='1'))
	 cout<<crors(i,c,2)<<unit(c[2])<<tens(c[1])<<arab(c,0)<<unit(c[0]);
	 else if((i==10)&&(c[1]=='1'))
	 cout<<crors(i,c,2)<<tens2(c[2])<<arab(c,0)<<unit(c[0]);
	 else if((i==11))
	 cout<<arabs(i,c,0);
	 else if(i==12)
	 cout<<arabs(i,c,1)<<kharab(c,0)<<unit(c[0]);
	 else if((i==13)&&(c[0]!='1'))
	 cout<<arabs(i,c,2)<<kharab(c,0)<<unit(c[1])<<tens(c[0]);
	 else if((i==13)&&(c[0]=='1'))
	 cout<<arabs(i,c,2)<<kharab(c,0)<<tens2(c[1]);
	 break;
 case 16:exit(0);
	 break;
 default:cout<<"Wrong Choice";
}cout<<"\nPress b to go back";
 cout<<"\nPress any key to exit"<<endl;
 c1=getch();
 }while(c1=='b'||c1=='B');
}
else if(pos==3)
{do{      clrscr();
	 colors(1,1);
	 voice();
	 long double m1[5][5],m2[5][5],ro,co,i,j,ro1,ro2,co1,co2,mult[5][5],sum=0,A[3][3];
	 int k;
	 outtextxy(120,10,"MATRIX CALCULATOR");
	 cout<<"\n\n\n\n\n\nChoose any function";
	 cout<<"\n1. Matrix Addition";
	 cout<<"\n2. Matrix Subtraction";
	 cout<<"\n3. Matrix Multiplication";
	 cout<<"\n4. Transpose";
	 cout<<"\n5. Determinant";
	 cout<<"\n6. Adjoint";
	 cout<<"\n7. Inverse Matrix";
	 cout<<"\n8. Exit"<<endl;
	 cin>>k;
	 voice();
	 voice();
	 switch(k)
	 {
	  case 1:clrscr();
		 colors(1,1);
		 outtextxy(160,10,"MATRIX ADDITION");
		 cout<<"\n\n\n\n\n\nNrumber of rows :";
		 cin>>ro;
		 voice();
		 cout<<"Number of columns :";
		 cin>>co;
		 voice();
		 cout<<"\nEnter first matrix:\n";
		 for(i=0;i<ro;i++)
		 {
		     for(j=0;j<co;j++)
		     {
			cin>>m1[i][j];
			voice();
		     }
		 }
		 cout<<"The First Matrix is :\n";
		 for(i=0;i<ro;i++)
		 {
		     for(j=0;j<co;j++)
		     {
			cout<<m1[i][j]<<"  ";
		     }
		     cout<<"\n\n";
		 }
		 voice();
		 cout<<"\nSecond Matrix";
		 cout<<"\nEnter second matrix:\n";
		 for(i=0;i<ro;i++)
		 {
		      for(j=0;j<co;j++)
		      {
			  cin>>m2[i][j];
			  voice();
		      }
		 }
		 voice();
		 cout<<"The Second Matrix is :\n";
		 for(i=0;i<ro;i++)
		 {
		      for(j=0;j<co;j++)
		      {
			  cout<<m2[i][j]<<"  ";
		      }
		       cout<<"\n\n";
		 }
		 voice();
		 cout<<"Result:"<<endl;
		  for(i=0;i<ro;i++)
		  {
			 for(j=0;j<co;j++)
			 {
			      cout<<m1[i][j]+m2[i][j]<<"  ";
			 }
			 cout<<"\n\n";
		  }
		 break;
	  case 2:clrscr();
		 colors(1,1);
		 outtextxy(120,10,"MATRIX SUBTRACTION");
		 cout<<"\n\n\n\n\n\nNrumber of rows :";
		 cin>>ro;
		 voice();
		 cout<<"Number of columns :";
		 cin>>co;
		 voice();
		 cout<<"\nEnter first matrix:\n";
		 for(i=0;i<ro;i++)
		 {
		      for(j=0;j<co;j++)
		      {
			     cin>>m1[i][j];
				  voice();
		      }
		 }
		 voice();
		 cout<<"The First Matrix is :\n";
		 for(i=0;i<ro;i++)
		 {
		      for(j=0;j<co;j++)
		      {
			   cout<<m1[i][j]<<"  ";
		      }
		      cout<<"\n\n";
		 }
		 voice();
		 cout<<"\nSecond Matrix";
		 cout<<"\nEnter second matrix:\n";
		 for(i=0;i<ro;i++)
		 {
		      for(j=0;j<co;j++)
		      {
			  cin>>m2[i][j];
			  voice();
		      }
		 }
		 voice();
		 cout<<"The Second Matrix is :\n";
		 for(i=0;i<ro;i++)
		 {
		       for(j=0;j<co;j++)
		       {
			   cout<<m2[i][j]<<"  ";
		       }
		       cout<<"\n\n";
		 }
		 voice();
		 cout<<"\nResult:"<<endl;
		  for(i=0;i<ro;i++)
		  {
			for(j=0;j<co;j++)
			{
			     cout<<m1[i][j]-m2[i][j]<<"  ";
			}
			cout<<"\n\n";
		  }
		  break;
	  case 3:clrscr();
		 colors(1,1);
		 outtextxy(100,10,"MATRIX MULTIPLICATION");
		 cout<<"\n\n\n\n\n\n FIRST MATRIX";
		 cout<<"\nNrumber of rows :";
		 cin>>ro1;
		 voice();
		 cout<<"Number of columns :";
		 cin>>co1;
		 voice();
		 cout<<"\nEnter first matrix:\n";
		 for(i=0;i<ro1;i++)
		 {for(j=0;j<co1;j++)
		  {cin>>m1[i][j];
		   voice();
		  }
		 }
		 voice();
		 cout<<"The First Matrix is :\n";
		 for(i=0;i<ro1;i++)
		 {for(j=0;j<co1;j++)
		  {cout<<m1[i][j]<<"  ";
		  } cout<<"\n\n";
		 }
		 voice();
		 cout<<"\nSECOND MATRIX";
		 cout<<"\nNrumber of rows :";
		 cin>>ro2;
		 voice();
		 cout<<"Number of columns :";
		 cin>>co2;
		 voice();
		 if(co1!=ro2)
		 {voice();
		  cout<<"\nMATH ERROR";
		 }
		 else
		 cout<<"\nEnter second matrix:\n";
		 for(i=0;i<ro2;i++)
		 {for(j=0;j<co2;j++)
		  {cin>>m2[i][j];
		   voice();
		  }
		 }
		 voice();
		 cout<<"The Second Matrix is :\n";
		 for(i=0;i<ro2;i++)
		 {for(j=0;j<co2;j++)
		  {cout<<m2[i][j]<<"  ";
		  } cout<<"\n\n";
		 }
		 voice();
		 cout<<"\nResult:"<<endl;
		  for(i=0;i<ro1;i++)
		  {   for(j=0;j<co2;j++)
		      {   for(k=0;k<co1;k++)
			  {  sum=sum+m1[i][k]*m2[k][j];
			  }
			  mult[i][j]=sum;
			  sum=0;
		       }
		  }
		   voice();
		   for(i=0;i<ro1;i++)
		   {   for(j=0;j<co2;j++)
		       {cout<<mult[i][j]<<"  ";
			}
			cout<<"\n\n";
		   }
		break;
	 case 4:clrscr();
		colors(1,1);
		outtextxy(140,10,"MATRIX TRANSPOSE");
		 cout<<"\n\n\n\n\n\nNrumber of rows :";
		 cin>>ro;
		 voice();
		 cout<<"Number of columns :";
		 cin>>co;
		 voice();
		 cout<<"\nEnter a matrix:\n";
		 for(i=0;i<ro;i++)
		 {for(j=0;j<co;j++)
		  {       cin>>m1[i][j];
			  voice();
		  }
		 }
		 voice();
		 cout<<"The Matrix is :\n";
		 for(i=0;i<ro;i++)
		 {for(j=0;j<co;j++)
		  {cout<<m1[i][j]<<"  ";
		  } cout<<"\n\n";
		 }
		 voice();
		 cout<<"Transpose Matrix is:\n";
		 for(j=0;j<co;j++)
		  {   for(i=0;i<ro;i++)
		      {cout<<m1[i][j]<<"  ";
		      }cout<<"\n\n";
		  }
		  break;
	 case 5:clrscr();
		colors(1,1);
		int d;
		 outtextxy(160,10,"DETERMINANTS");
		 cout<<"\n\n\n\n\n\nChoose a matrix of:";
		 cout<<"\n1. Size 2 x 2";
		 cout<<"\n2. Size 3 x 3"<<endl;
		 cin>>k;
		 voice();
		 switch(k)
		 {case 1:clrscr();
			 colors(1,1);
			 outtextxy(200,10,"SIZE 2 X 2");
			 cout<<"\n\n\n\n\n\nEnter a matrix:\n";
			 for(i=1;i<=2;i++)
			 {for(j=1;j<=2;j++)
			    {       cin>>m1[i][j];
				    voice();
			    }
			  }
			  voice();
			  cout<<"The Matrix is :\n";
			  for(i=1;i<=2;i++)
			  {for(j=1;j<=2;j++)
			  {cout<<m1[i][j]<<"  ";
			  } cout<<"\n\n";
			  }
			  d=(m1[1][1]*m1[2][2])-(m1[2][1]*m1[1][2]);
			  voice();
			  cout<<"Determinant :"<<d;
			  break;
		 case 2:clrscr();
			 colors(1,1);
			 voice();
			 outtextxy(200,10,"SIZE 3 X 3");
			 cout<<"\n\n\n\n\n\nEnter a matrix:\n";
			 for(i=1;i<=3;i++)
			 {for(j=1;j<=3;j++)
			    {       cin>>m1[i][j];
				    voice();
			    }
			  }
			  voice();
			  cout<<"The Matrix is :\n";
			  for(i=1;i<=3;i++)
			  {for(j=1;j<=3;j++)
			  {cout<<m1[i][j]<<"  ";
			  } cout<<"\n\n";
			  }
			  d=m1[1][1]*(m1[2][2]*m1[3][3]-m1[2][3]*m1[3][2])-m1[1][2]*(m1[2][1]*m1[3][3]-m1[2][3]*m1[3][1])+m1[1][3]*(m1[2][1]*m1[3][2]-m1[3][1]*m1[2][2]);
			  voice();
			  cout<<"Determinant :"<<d;
			  break;
		 default:voice();
			 cout<<"\nWrong Choice" ;
		 }
		 break;
	 case 6:clrscr();
		colors(1,1);
		 outtextxy(260,10,"ADJOINT");
		 cout<<"\n\n\n\n\n\nChoose a matrix of:";
		 cout<<"\n1. Size 2 x 2";
		 cout<<"\n2. Size 3 x 3"<<endl;
		 cin>>k;
		 voice();
		 switch(k)
		 { case 1:clrscr();
			 colors(1,1);
			 voice();
			  outtextxy(200,10,"SIZE 2 X 2");
			 cout<<"\n\n\n\n\n\nEnter a matrix:\n";
			 for(i=1;i<=2;i++)
			 {for(j=1;j<=2;j++)
			    {       cin>>m1[i][j];
				    voice();
			    }
			  }
			  voice();
			  cout<<"The Matrix is :\n";
			  for(i=1;i<=2;i++)
			  {for(j=1;j<=2;j++)
			  {cout<<m1[i][j]<<"  ";
			  } cout<<"\n\n";
			  }
			  A[1][1]=m1[2][2];
			  A[1][2]=-m1[1][2];
			  A[2][1]=-m1[2][1];
			  A[2][2]=m1[1][1];
			  voice();
			  cout<<"\nAdjoint : \n";
			  for(i=1;i<=2;i++)
			  {for(j=1;j<=2;j++)
			  {cout<<A[i][j]<<"  ";
			  } cout<<"\n\n";
			  }
			  break;
		 case 2:clrscr();
			 colors(1,1);
			 voice();
			 outtextxy(200,10,"SIZE 3 X 3");
			 cout<<"\n\n\n\n\n\Enter a matrix:\n";
			 for(i=1;i<=3;i++)
			 {for(j=1;j<=3;j++)
			    {       cin>>m1[i][j];
				    voice();
			    }
			  }
			  voice();
			  cout<<"The Matrix is :\n";
			  for(i=1;i<=3;i++)
			  {for(j=1;j<=3;j++)
			  {cout<<m1[i][j]<<"  ";
			  } cout<<"\n\n";
			  }
			  A[1][1]=m1[2][2]*m1[3][3]-m1[2][3]*m1[3][2];
			  A[2][1]=-m1[2][1]*m1[3][3]+m1[2][3]*m1[3][1];
			  A[3][1]=m1[2][1]*m1[3][2]-m1[2][2]*m1[3][1];
			  A[1][2]=-m1[1][2]*m1[3][3]+m1[1][3]*m1[3][2];
			  A[2][2]=m1[1][1]*m1[3][3]-m1[1][3]*m1[3][1];
			  A[3][2]=-m1[1][1]*m1[3][2]+m1[1][2]*m1[3][1];
			  A[1][3]=m1[2][3]*m1[1][2]-m1[2][2]*m1[1][3];
			  A[2][3]=-m1[1][1]*m1[2][3]+m1[1][3]*m1[2][1];
			  A[3][3]=m1[1][1]*m1[2][2]-m1[1][2]*m1[2][1];
			  voice();
			  cout<<"Adjoint\n";
			  for(i=1;i<=3;i++)
			  {for(j=1;j<=3;j++)
			  {cout<<A[i][j]<<"  ";
			  } cout<<"\n\n";
			  }
			  break;
		 default:voice();
			 cout<<"Wrong Choice";
		 }
		break;
	 case 7:clrscr();
		colors(1,1);
		outtextxy(160,10,"INVERSE MATRIX");
		cout<<"\n\n\n\n\n\nChoose a matrix of:";
		cout<<"\n1. Size 2 x 2";
		cout<<"\n2. Size 3 x 3"<<endl;
		cin>>k;
		voice();
		switch(k)
		{ case 1:clrscr();
			 colors(1,1);
			 voice();
			 outtextxy(210,10,"SIZE 2 X 2");
			 cout<<"\n\n\n\n\n\nEnter a matrix:\n";
			 for(i=1;i<=2;i++)
			 {for(j=1;j<=2;j++)
			    {       cin>>m1[i][j];
				    voice();
			    }
			  }
			  voice();
			  cout<<"The Matrix is :\n";
			  for(i=1;i<=2;i++)
			  {for(j=1;j<=2;j++)
			  {cout<<m1[i][j]<<"  ";
			  } cout<<"\n\n";
			  }
			  A[1][1]=m1[2][2];
			  A[1][2]=-m1[1][2];
			  A[2][1]=-m1[2][1];
			  A[2][2]=m1[1][1];
			   d=(m1[1][1]*m1[2][2])-(m1[2][1]*m1[1][2]);
			   voice();
			  cout<<"\nInverse Matrix : \n";
			  for(i=1;i<=2;i++)
			  {
			       for(j=1;j<=2;j++)
			       {
				   cout<<(A[i][j])/d<<"  ";
			       }
			       cout<<"\n\n";
			  }
			  break;
		  case 2:clrscr();
			 colors(1,1);
			 voice();
			 outtextxy(210,10,"SIZE 3 X 3");
			 cout<<"\n\n\n\n\n\nEnter a matrix:\n";
			 for(i=1;i<=3;i++)
			 {
			  for(j=1;j<=3;j++)
			    {
				    cin>>m1[i][j];
				    voice();
			    }
			  }
			  voice();
			  cout<<"The Matrix is :\n";
			  for(i=1;i<=3;i++)
			  {
			      for(j=1;j<=3;j++)
			      {
				  cout<<m1[i][j]<<"  ";
			      }
			      cout<<"\n\n";
			  }
			  A[1][1]=m1[2][2]*m1[3][3]-m1[2][3]*m1[3][2];
			  A[2][1]=-m1[2][1]*m1[3][3]+m1[2][3]*m1[3][1];
			  A[3][1]=m1[2][1]*m1[3][2]-m1[2][2]*m1[3][1];
			  A[1][2]=-m1[1][2]*m1[3][3]+m1[1][3]*m1[3][2];
			  A[2][2]=m1[1][1]*m1[3][3]-m1[1][3]*m1[3][1];
			  A[3][2]=-m1[1][1]*m1[3][2]+m1[1][2]*m1[3][1];
			  A[1][3]=m1[2][3]*m1[1][2]-m1[2][2]*m1[1][3];
			  A[2][3]=-m1[1][1]*m1[2][3]+m1[1][3]*m1[2][1];
			  A[3][3]=m1[1][1]*m1[2][2]-m1[1][2]*m1[2][1];
			  d=m1[1][1]*(m1[2][2]*m1[3][3]-m1[2][3]*m1[3][2])-m1[1][2]*(m1[2][1]*m1[3][3]-m1[2][3]*m1[3][1])+m1[1][3]*(m1[2][1]*m1[3][2]-m1[3][1]*m1[2][2]);
			  voice();
			  cout<<"Inverse Matrix : \n";
			  for(i=1;i<=3;i++)
			  {
			       for(j=1;j<=3;j++)
			       {
				  cout<<(A[i][j])/d<<"  ";
			       }
				cout<<"\n\n";
			  }
			  break;
		default:voice();
			cout<<"Wrong Choice";
		}
		break;
	 case 8 :exit(0);
		 break;
	 default:cout<<"Wrong Choice";
		}cout<<"\nPress b to go back";
		 c=getch();
		}  while(c=='b'||c=='B');
}
else if(pos==4)
{do{clrscr();
	 colour(1,1);
	 voice();
	 outtextxy(200,10,"MENSURATION");
	 cout<<"\n\n\n\n\n\nChoose a shape :";
	 cout<<"\n1. Square";
	 cout<<"\n2. Rectangle";
	 cout<<"\n3. Triangle";
	 cout<<"\n4. Circle";
	 cout<<"\n5. Cube";
	 cout<<"\n6. Cuboid";
	 cout<<"\n7. Cylinder";
	 cout<<"\n8. Cone";
	 cout<<"\n9. Sphere";
	 cout<<"\n10. Hemisphere";
	 cout<<"\n11. Exit"<<endl;
	 cin>>c;
	 voice();
	 voice();
	 switch(c)
	 {
	   case 1:clrscr();
		  colour(1,1);
		  rectangle(200,100,300,200);
		  outtextxy(240,10,"SQUARE");
		  cout<<"\n\n\n\n\n\nChoose any function";
		  cout<<"\n1. Perimeter ";
		  cout<<"\n2. Area"<<endl;
		  cin>>n;
		  voice();
		  switch(n)
		  {
		   case 1:cout<<"Enter a side;"<<endl;
			  cin>>a;
			  voice();
			  cout<<"\nPerimeter : "<<4*a;
			  break;
		   case 2:cout<<"Enter a side;"<<endl;
			  cin>>a;
			  voice();
			  cout<<"\nArea : "<<a*a;
			  break;
		   default:voice();
			   cout<<"Wrong Choice";
		   }
		  break;
	   case 2:clrscr();
		  colour(1,1);
		  outtextxy(220,10,"RECTANGLE");
		  rectangle(200,100,400,200);
		  cout<<"\n\n\n\n\n\nChoose any function";
		  cout<<"\n1. Perimeter ";
		  cout<<"\n2. Area"<<endl;
		  cin>>n;
		  voice();
		  switch(n)
		  {
		   case 1:cout<<"Enter two sides :"<<endl;
			  cin>>a>>b;
			  voice();
			  cout<<"\nPerimeter : "<<2*(a+b);
			  break;
		   case 2:cout<<"Enter two sides:"<<endl;
			  cin>>a>>b;
			  voice();
			  cout<<"\nArea : "<<a*b;
			  break;
		   default:voice();
			   cout<<"Wrong Choice";
		   }
		  break;
	   case 3:clrscr();
		  colour(1,1);
		  outtextxy(230,10,"TRIANGLE");
		  line(200,300,400,300);
		  line(400,300,300,100);
		  line(300,100,200,300);
		  cout<<"\n\n\n\n\n\nChoose any function";
		  cout<<"\n1. Perimeter ";
		  cout<<"\n2. Area"<<endl;
		  cin>>n;
		  voice();
		  switch(n)
		  {
		   case 1:cout<<"Enter three sides :"<<endl;
			  cin>>a>>b>>c;
			  voice();
			  cout<<"\nPerimeter : "<<a+b+c;
			  break;
		   case 2:cout<<"Enter three sides"<<endl;
			  cout<<"First Side :";
			  cin>>a;
			  voice();
			  cout<<"Second Side :";
			  cin>>b;
			  voice();
			  cout<<"Third Side :";
			  cin>>c;
			  voice();
			  s=(a+b+c)/2;
			  ar=sqrt(s*(s-a)*(s-b)*(s-c));
			  voice();
			  cout<<"\nArea : "<<ar;
			  break;
		   default:voice();
			   cout<<"Wrong Choice";
		   }
		  break;
	   case 4:clrscr();
		  colour(1,1);
		  outtextxy(260,10,"CIRCLE");
		  circle(300,200,100);
		  cout<<"\n\n\n\n\n\nChoose any function";
		  cout<<"\n1. Circumference ";
		  cout<<"\n2. Area"<<endl;
		  cin>>n;
		  voice();
		  switch(n)
		  {
		   case 1:cout<<"Enter radius :"<<endl;
			  cin>>a;
			  voice();
			  cout<<"\nCircumference : "<<2*pi*a;
			  break;
		   case 2:cout<<"Enter radius :"<<endl;
			  cin>>a;
			  voice();
			  cout<<"\nArea : "<<pi*a*a;
			  break;
		   default:voice();
			   cout<<"Wrong Choice";
		   }
		  break;
	   case 5:clrscr();
		  colour(1,1);
		  outtextxy(280,10,"CUBE");
		  rectangle(300,200,500,400);
		  rectangle(200,100,400,300);
		  line(200,300,300,400);
		  line(400,300,500,400);
		  line(400,100,500,200);
		  line(200,100,300,200);
		  cout<<"\n\n\n\n\n\nChoose any function";
		  cout<<"\n1. Total Surface Area ";
		  cout<<"\n2. Volome"<<endl;
		  cin>>n;
		  voice();
		  switch(n)
		  {
		   case 1:cout<<"Enter a side :"<<endl;
			  cin>>a;
			  voice();
			  cout<<"\nTotal Surface Area : "<<6*a*a;
			  break;
		   case 2:cout<<"Enter a side :"<<endl;
			  cin>>a;
			  voice();
			  cout<<"\nVolume : "<<a*a*a;
			  break;
		   default:voice();
			   cout<<"Wrong Choice";
		   }
		  break;
	   case 6:clrscr();
		  colour(1,1);
		  outtextxy(260,10,"CUBOID");
		  rectangle(300,200,600,400);
		  rectangle(200,100,500,300);
		  line(200,300,300,400);
		  line(500,300,600,400);
		  line(500,100,600,200);
		  line(200,100,300,200);
		  cout<<"\n\n\n\n\n\nChoose any function";
		  cout<<"\n1. Total Surface Area ";
		  cout<<"\n2. Volome"<<endl;
		  cin>>n;
		  voice();
		  switch(n)
		  {
		   case 1:cout<<"Enter three sides :"<<endl;
			  cout<<"Length :";
			  cin>>a;
			  voice();
			  cout<<"Breadth :";
			  cin>>b;
			  voice();
			  cout<<"Depth :";
			  cin>>c;
			  voice();
			  cout<<"\nTotal Surface Area : "<<2*((a*b)+(b*c)+(c*a));
			  break;
		   case 2:cout<<"Enter three sides :"<<endl;
			  cout<<"Length :";
			  cin>>a;
			  voice();
			  cout<<"Breadth :";
			  cin>>b;
			  voice();
			  cout<<"Depth :";
			  cin>>c;
			  voice();
			  cout<<"\nVolume : "<<a*b*c;
			  break;
		   default:cout<<"Wrong Choice";
		   }
		  break;
	   case 7:clrscr();
		  colour(1,1);
		  outtextxy(240,10,"CYLINDER");
		  line(300,150,300,400);
		  line(500,150,500,400);
		  fillellipse(400,150,100,40);
		  fillellipse(400,400,100,40);
		  cout<<"\n\n\n\n\n\nChoose any function";
		  cout<<"\n1. Total Surface Area ";
		  cout<<"\n2. Curved Surface Area";
		  cout<<"\n3. Volome"<<endl;
		  cin>>n;
		  switch(n)
		  {
		   case 1:cout<<"Enter radius and height :"<<endl;
			  cout<<"Radius :";
			  cin>>a;
			  voice();
			  cout<<"Height :";
			  cin>>b;
			  voice();
			  cout<<"\nTotal Surface Area : "<<(2*pi*a*a)+(2*pi*a*b);
			  break;
		   case 2:cout<<"Enter radius and height :"<<endl;
			  cout<<"Radius :";
			  cin>>a;
			  voice();
			  cout<<"Height :";
			  cin>>b;
			  voice();
			  cout<<"\nCurved Surface Area : "<<2*pi*a*b;
			  break;
		   case 3:cout<<"Enter radius and height :"<<endl;
			  cout<<"Radius :";
			  cin>>a;
			  voice();
			  cout<<"Height :";
			  cin>>b;
			  voice();
			  cout<<"Volume : "<<pi*a*a*b;
			  break;
		   default:voice();
			   cout<<"Wrong Choice";
		   }
		  break;
	   case 8:clrscr();
		  colour(1,1);
		  outtextxy(280,10,"CONE");
		  line(300,100,400,300);
		  line(300,100,200,300);
		  fillellipse(300,300,100,30);
		  cout<<"\n\n\n\n\n\nChoose any function";
		  cout<<"\n1. Total Surface Area ";
		  cout<<"\n2. Curved Surface Area";
		  cout<<"\n3. Volome"<<endl;
		  cin>>n;
		  voice();
		  switch(n)
		  {
		   case 1:cout<<"Enter radius and height :"<<endl;
			  cout<<"Radius :";
			  cin>>a;
			  voice();
			  cout<<"Height :";
			  cin>>b;
			  voice();
			  cout<<"\nTotal Surface Area : "<<(pi*a*sqrt((a*a)+(b*b)))+(pi*a*a);
			  break;
		   case 2:cout<<"Enter radius and height :"<<endl;
			  cout<<"Radius :";
			  cin>>a;
			  voice();
			  cout<<"Height :";
			  cin>>b;
			  voice();
			  cout<<"\nCurved Surface Area : "<<pi*a*sqrt((a*a)+(b*b));
			  break;
		   case 3:cout<<"Enter radius and height :"<<endl;
			  cout<<"Radius :";
			  cin>>a;
			  voice();
			  cout<<"Height :";
			  cin>>b;
			  voice();
			  cout<<"Volume : "<<(pi*a*a*b)/3;
			  break;
		   default:voice();
			   cout<<"Wrong Choice";
		   }
		  break;
	   case 9:clrscr();
		  colour(1,1);
		  outtextxy(260,10,"SPHERE");
		  circle(300,200,100);
		  line(300,100,300,300);
		  line(200,200,400,200);
		  ellipse(300,200,0,360,100,40);
		  ellipse(300,200,0,360,100,75);
		  ellipse(300,200,0,360,40,100);
		  ellipse(300,200,0,360,75,100);
		  cout<<"\n\n\n\n\n\nChoose any function";
		  cout<<"\n1. Total Surface Area";
		  cout<<"\n2. Volome"<<endl;
		  cin>>n;
		  voice();
		  switch(n)
		  {
		   case 1:cout<<"Enter radius :"<<endl;
			  cin>>a;
			  voice();
			  cout<<"\nTotal Surface Area : "<<4*pi*a*a;
			  break;
		   case 2:cout<<"Enter radius :"<<endl;
			  cin>>a;
			  voice();
			  cout<<"\nVolume : "<<(1.33333333)*pi*a*a;
			  break;
		   default:voice();
			   cout<<"Wrong Choice";
		   }
		  break;
	   case 10:clrscr();
		   colour(1,1);
		   outtextxy(200,10,"HEMISPHERE");
		   ellipse(300,200,0,360,100,40);
		   ellipse(300,200,340,200,40,100);
		   ellipse(300,200,0,180,100,100);
		   ellipse(300,200,344,196,75,100);
		   line(300,100,300,240);
		   cout<<"\n\n\n\n\n\nChoose any function";
		   cout<<"\n1. Total Surface Area ";
		   cout<<"\n2. Curved Surface Area";
		   cout<<"\n3. Volome"<<endl;
		   cin>>n;
		   voice();
		   switch(n)
		   {
		    case 1:cout<<"Enter radius :"<<endl;
			   cin>>a;
			   voice();
			   cout<<"\nTotal Surface Area : "<<pi*a*a*3;
			   break;
		    case 2:cout<<"Enter radius :"<<endl;
			   cin>>a;
			   voice();
			   cout<<"\nCurved Surface Area : "<<pi*a*a*2;
			   break;
		    case 3:cout<<"Enter radius :"<<endl;
			   cin>>a;
			   voice();
			   cout<<"Volume : "<<(pi*a*a*2)/3;
			   break;
		   default:cout<<"Wrong Choice";
		   }
		   break;
	   case 11 :exit(0);
		   break;
	   default :cout<<"Wrong Choice";
	   }
	   cout<<"\nPress b to go back";
	   c=getch();
}  while(c=='b'||c=='B');
}break;

case 'l':
{

 int gd01=DETECT,gm01;
 initgraph(&gd01,&gm01,"C:\\TC\\BGI");
 k:
  cleardevice();
   voice();
    sort();
 char a,b;
 long int s,size,AR[150],c,y=152,z=262,t;
  while(1)
   {

     setfillstyle(1,9);
     floodfill(125,y,15);
     setfillstyle(7,5);
     floodfill(125,z,15);
     a=getch();
     switch(a)
     {  case 0 :{ b=getch();
		  switch(b)
		  {
		    case 72:if(y==152)
			    {z=152;
			    y=372;}
			    else if(y==262)
			    {y=152;
			    z=262;}
			    else if(y==372)
			    {z=372;
			    y=262;}
			    break;
		    case 80:if(y==152)
			    {y=262;
			    z=152;}
			    else if(y==262)
			    {y=372;
			    z=262;}
			    else if(y==372)
			    {y=152;
			    z=372;}
			    break;
		  } break;
		}
	 case 'x':return;
	 case 32 :if(y==152)
		    {
			l:
			cleardevice();
			voice();
			randomize();
			sorting(0,1);
			gotoxy(6,5);
			cin>>size;
			if(size<=0)
			{gotoxy(43,15);
			 cout<<"Invalid No. of Elements !";
			 delay(2000);
			 goto l;
			}
			int x=130;
			char a,b;
			while(1)
			{
			  setfillstyle(6,1);
			  floodfill(26,x+1,15);
			  setfillstyle(1,8);
			  floodfill(26,t+1,15);
			  sorting(size,1);
			  a=getch();
			  switch(a)
			 {  case 0 :
				      b=getch();
				      switch(b)
				     {
					case 72:if(x==130)
						  {x=420;
						  t=130;}
					       else if(x==170)
						  {x=130;
						  t=170;}
						else if(x==210)
						  {x=170;
						  t=210;}
						else if(x==250)
						  {x=210;
						  t=250;}
						else if(x==290)
						  {x=250;
						  t=290;}
						else if(x==340)
						  {x=290;
						   t=340;}
						else if(x==380)
						  {x=340;
						   t=380;}
						else if(x==420)
						  {x=380;
						   t=420;}
						break;
					case 80:if(x==130)
						  {x=170;
						  t=130;}
						else if(x==170)
						  {x=210;
						  t=170;}
						else if(x==210)
						  {x=250;
						  t=210;}
						else if(x==250)
						  {x=290;
						  t=250;}
						else if(x==290)
						  {x=340;
						  t=290;}
						 else if(x==340)
						  {x=380;
						   t=340;}
						 else if(x==380)
						  {x=420;
						   t=380;}
						 else if(x==420)
						  {x=130;
						   t=420;}
						break;
				      } break;

			    case 'x':return;
			    case 32: if(x==420)
				     {exit(0);
				     }
				     else if(x==210)
				     {cleardevice();
				      sorting(size,1);
				      for(int l=0;l<size;l++)
				      {AR[l]=size-l;}
				      drawg(AR,size,1);}
				     else if(x==130)
				     {cleardevice();
				      sorting(size,1);
				      for(int l=0;l<size;l++)
				     {
					  AR[l]=random(size)+1;
					  for(int h=0;h<l;h++)
					  {if(AR[l]==AR[h])
					   {l--;
					   }
					  }
				     }
				      drawg(AR,size,1); }
				     else if(x==170)
				     {cleardevice();
				      sorting(size,1);
				      for(int l=0;l<size;l++)
				     {  cleardevice();
					sorting(size,1);
					gotoxy(45,15);
					cout<<"Enter Element "<<l+1<<": ";
					cin>>AR[l];

				     }
				     cleardevice();
				      sorting(size,1);
				     drawg(AR,size,1);}
				     else if(x==250)
				     {biggest(AR,size);
				      int tmp;
				     for(int i=0;i<size;i++)
				     {
					cleardevice();
					sorting(size,1);
					for(int j=0;j<(size-1-i);j++)
					{
					    if(AR[j]>AR[j+1])
					    {
						tmp=AR[j];
						AR[j]=AR[j+1];
						AR[j+1]=tmp;
					    }
					}
					drawg(AR,size,0);

					delay(1500-(size*8));
					voice();
				      }}
				      else if(x==290)
				     {
				      Lsearch(AR,size,1);
				     }
				      else if(x==340)
				      {goto l;
				      }
				      else if(x==380)
				      {
				       goto k;
				      }
}}}
		 else if(y==262)
		 {      h:
			cleardevice();
			voice();
			randomize();
			sorting(0,2);
			gotoxy(6,5);
			cin>>size;
			if(size<=0)
			{gotoxy(43,15);
			 cout<<"Invalid No. of Elements !";
			 delay(2000);
			 goto h;
			}
			int x=130;
			char a,b;
			while(1)
			{
			  setfillstyle(1,8);
			  floodfill(26,t+1,15);
			  setfillstyle(6,1);
			  floodfill(26,x+1,15);
			  sorting(size,2);
			  a=getch();
			  switch(a)
			 {  case 0 :{
				      b=getch();
				      switch(b)
				     {
					case 72:
						if(x==130)
						  {x=420;
						  t=130;}
					       else if(x==170)
						  {x=130;
						  t=170;}
						else if(x==210)
						  {x=170;
						  t=210;}
						else if(x==250)
						  {x=210;
						  t=250;}
						else if(x==290)
						  {x=250;
						  t=290;}
						else if(x==340)
						  {x=290;
						   t=340;}
						else if(x==380)
						  {x=340;
						   t=380;}
						else if(x==420)
						  {x=380;
						   t=420;}
						break;
					case 80:if(x==130)
						  {x=170;
						  t=130;}
						else if(x==170)
						  {x=210;
						  t=170;}
						else if(x==210)
						  {x=250;
						  t=210;}
						else if(x==250)
						  {x=290;
						  t=250;}
						else if(x==290)
						  {x=340;
						  t=290;}
						 else if(x==340)
						  {x=380;
						   t=340;}
						 else if(x==380)
						  {x=420;
						   t=380;}
						 else if(x==420)
						  {x=130;
						   t=420;}
						break;
				      } break;
				    }
			    case 'x':return;
			    case 32:
				    if(x==420)
				     {exit(0);
				     }
				     else if(x==210)
				     {cleardevice();
				      sorting(size,2);
				      for(int l=0;l<size;l++)
				      {AR[l]=size-l;}
				      drawg(AR,size,1);}
				     else if(x==130)
				     {cleardevice();
				      sorting(size,2);
				      for(int l=0;l<size;l++)
				     {
					  AR[l]=random(size)+1;
					  for(int h=0;h<l;h++)
					  {if(AR[l]==AR[h])
					   {l--;
					   }
					  }
				     }
				      drawg(AR,size,1); }
				     else if(x==170)
				     {cleardevice();
				      sorting(size,2);
				      for(int l=0;l<size;l++)
				     {  cleardevice();
					sorting(size,2);
					gotoxy(45,15);
					cout<<"Enter Element "<<l+1<<": ";
					cin>>AR[l];

				     }
				     cleardevice();
				      sorting(size,2);
				     drawg(AR,size,1);}
				    else if(x==250)
				    {int big,pos,small,tmp;
				    biggest(AR,size);
				    for(int i=0;i<size-1;i++)
				    {
				       cleardevice();
				       sorting(size,2);
				       small=AR[i];
				       pos=i;
				       for(int j=i+1;j<size;j++)
				       {
					  if(AR[j]<small)
					  {
					    small=AR[j];
					    pos=j;
					  }
				       }
					tmp=AR[i];
					AR[i]=AR[pos];
					AR[pos]=tmp;
					drawg(AR,size,0);
					voice();
					delay(1500);}
				     }
				      else if(x==290)
				     {
				      Lsearch(AR,size,2);
				     }
				     else if(x==340)
				      {goto h;
				      }
				      else if(x==380)
				      {
				       goto k;
				      }
				     }
				  }
				    }

		 else if(y==372)
		 {      p:
			AR[-1]=INT_MIN;
			cleardevice();
			voice();
			randomize();
			sorting(0,3);
			gotoxy(6,5);
			cin>>size;
			if(size<=0)
			{gotoxy(43,15);
			 cout<<"Invalid No. of Elements !";
			 delay(2000);
			 goto p;
			}
			int x=130;
			char a,b;
			while(1)
			{
			  setfillstyle(1,8);
			  floodfill(26,t+1,15);
			  setfillstyle(6,1);
			  floodfill(26,x+1,15);
			  sorting(size,3);
			  a=getch();
			  switch(a)
			 {  case 0 :
				      b=getch();
				      switch(b)
				     {
					case 72:if(x==130)
						  {x=420;
						  t=130;}
					       else if(x==170)
						  {x=130;
						  t=170;}
						else if(x==210)
						  {x=170;
						  t=210;}
						else if(x==250)
						  {x=210;
						  t=250;}
						else if(x==290)
						  {x=250;
						  t=290;}
						else if(x==340)
						  {x=290;
						   t=340;}
						else if(x==380)
						  {x=340;
						   t=380;}
						else if(x==420)
						  {x=380;
						   t=420;}
						break;
					case 80:if(x==130)
						  {x=170;
						  t=130;}
						else if(x==170)
						  {x=210;
						  t=170;}
						else if(x==210)
						  {x=250;
						  t=210;}
						else if(x==250)
						  {x=290;
						  t=250;}
						else if(x==290)
						  {x=340;
						  t=290;}
						 else if(x==340)
						  {x=380;
						   t=340;}
						 else if(x==380)
						  {x=420;
						   t=380;}
						 else if(x==420)
						  {x=130;
						   t=420;}
						break;
				      } break;

			    case 'x':return;
			    case 32: if(x==420)
				     {exit(0);
				     }
				     else if(x==210)
				     {cleardevice();
				      sorting(size,3);
				      for(int l=0;l<size;l++)
				      {AR[l]=size-l;}
				      drawg(AR,size,1);}
				     else if(x==130)
				     {cleardevice();
				      sorting(size,3);
				      for(int l=0;l<size;l++)
				     {
					  AR[l]=random(size)+1;
					  for(int h=0;h<l;h++)
					  {if(AR[l]==AR[h])
					   {l--;
					   }
					  }
				     }
				      drawg(AR,size,1); }
				     else if(x==170)
				     {cleardevice();
				      sorting(size,3);
				      for(int l=0;l<size;l++)
				     {  cleardevice();
					sorting(size,3);
					gotoxy(45,15);
					cout<<"Enter Element "<<l+1<<": ";
					cin>>AR[l];

				     }
				     cleardevice();
				      sorting(size,3);
				     drawg(AR,size,1);}
				      else if(x==250)
				      {int big;
				      biggest(AR,size);

				       long int tmp,j,t;
				       for(int i=0;i<size;i++)
				       {
					  cleardevice();
					  sorting(size,3);
					  tmp=AR[i];
					  j=i-1;
					  while(tmp<AR[j])
					  {
					     AR[j+1]=AR[j];
					     j--;
					   }
					   AR[j+1]=tmp;
					   drawg(AR,size,0);
					   voice();
					   delay(1500);}
					}
					 else if(x==290)
				     {
				      Lsearch(AR,size,3);
				     }
				     else if(x==340)
				      {goto p;
				      }
				      else if(x==380)
				      {
				       goto k;
				      }
 }
 }
 }
    }
    }
    }
    }
   }
 if(f[0]=='k')
{
 clrscr();
 voice();
 int gd0=DETECT,gm0;
 initgraph(&gd0,&gm0,"C:\\TC\\BGI");
 randomize();
 int AR[10];
 for(int i=1;i<=9;i++)
 {
   AR[i]=((random(9)+1)*50)+40;
   for(int j=1;j<i;j++)
   {if(AR[i]==AR[j])
    --i;
   }
    g(AR[i],i);
   }
 }

else if(f[0]=='i')
{
 clrscr();
 voice();
 int gd11=DETECT,gm11;
 initgraph(&gd11,&gm11,"C:\\TC\\BGI");
 setfillstyle(1,CYAN);
 {
   floodfill(10,10,WHITE);
 }
 circle(480,405,70);
 circle(480,405,60);
 circle(480,405,8);
 circle(300,435,40);
 circle(160,435,40);
 line(80,395,410,395);
 line(100,375,415,375);
 line(80,395,100,375);
 rectangle(110,250,410,375);
 line(415,375,415,100);
 line(395,100,640,100);
 line(620,100,620,405);
 line(620,405,550,405);
 line(395,100,415,80);
 line(415,80,640,80);
 line(640,100,640,80);
 rectangle(435,120,600,220);
 setfillstyle(1,RED);
 { floodfill(120,260,WHITE);
   floodfill(420,120,WHITE);
 }
 setfillstyle(SOLID_FILL,YELLOW);
 floodfill(480,405,WHITE);
 floodfill(300,435,WHITE);
 floodfill(160,435,WHITE);
}
else if(f[0]=='g')
{ int gd13=DETECT,gm13;
 initgraph(&gd13,&gm13,"C:\\TC\\BGI");
 setbkcolor(BLACK);
 setfillstyle(SOLID_FILL,DARKGRAY);
 floodfill(40,600,WHITE);
 rectangle(630,20,450,460);
 rectangle(10,25,440,455);
 line(225,25,225,455);
 line(10,240,440,240);

 for(int i=0;i<=10;i++)
 {
  line((i*i)+225,240-(i),225+((i*i)+1),240-((i)+1));
 }
}
getch();
closegraph();
}

