from PIL import Image
import numpy as np

page_design=1
line_design=1
page_no=1

fp=open('python project/handwritten/atten.txt','r')
lines=fp.readlines()


img=Image.open("python project/handwritten/images/hello.jpg")
a=np.array(img)

arr = np.zeros([6000, 4500, 3], dtype=np.uint8)

if page_design == 1:
    arr[:,:] = [247,248, 250]
elif page_design == 2:
    arr[:,:]=[234,235,232]
elif page_design == 3:
    bgimage=Image.open("python project/handwritten/images/1.jpg")
    bgimage=bgimage.resize((4500,6000))
    arr=np.array(bgimage)
elif page_design == 4:
    arr[:,:]=[255,255,255]
else :
    pass

if line_design==1 :
    ldesign=[100,150,215]
else :
    ldesign=[62,62,62]


for i in range(32):
    arr[515+i*170:520+i*170,:]=ldesign
arr[:,550:560]=[210,45,65]


x,y=600,600

for line in lines:
    x=600
    y+=170
    length=[]
    k=0
    for word in line.split():
        length.append(len(word))
        
    for c in line:
        if c==' ':
             lx,ly,ux,uy=0,1,1,0
             x+=165
             k+=1
        if c!='\n':
            if ((4500-x)-(length[k]*80)) < 0 and c==' ':
                x=600
                y+=170
                if y>5700 :
                    pageimg = Image.fromarray(arr)
                    pageimg.save("python project/handwritten/text_to_writting/page_"+str(page_no)+".jpg")
                    page_no+=1
                    x,y=600,600
                    arr = np.zeros([6000, 4500, 3], dtype=np.uint8)

                    if page_design == 1:
                        arr[:,:] = [247,248, 250]
                    elif page_design == 2:
                        arr[:,:]=[234,235,232]
                    elif page_design == 3:
                        bgimage=Image.open("python project/handwritten/images/1.jpg")
                        bgimage=bgimage.resize((4500,6000))
                        arr=np.array(bgimage)
                    elif page_design == 4:
                        arr[:,:]=[255,255,255]
                    else :
                        pass

                    if line_design==1 :
                        ldesign=[100,150,215]
                    else :
                        ldesign=[62,62,62]

                    for i in range(32):
                        arr[515+i*170:520+i*170,:]=ldesign
                        arr[:,550:560]=[210,45,65]

        if c=='a':
            lx,ly,ux,uy=95,423,182,333
        elif c=='b':
            lx,ly,ux,uy=286,1406,359,1282
        elif c=='c' :
            lx,ly,ux,uy=442,1403,515,1306
        elif c=='d' :
            lx,ly,ux,uy=594,1385,663,1264
        elif c=='e' :
            lx,ly,ux,uy=757,1382,826,1299
        elif c=='f' :
            x-=40
            lx,ly,ux,uy=903,1458,1017,1257
        elif c=='g' :
            lx,ly,ux,uy=955,485,1034,319
        elif c=='h' :
            lx,ly,ux,uy=1131,402,1197,260
        elif c=='i' :
            lx,ly,ux,uy=1273,391,1311,274
        elif c=='j' :
            x-=30
            lx,ly,ux,uy=1329,450,1436,277
        elif c=='k' :
            lx,ly,ux,uy=1516,378,1585,253
        elif c=='l' :
            lx,ly,ux,uy=1668,360,1724,249
        elif c=='m' :
            lx,ly,ux,uy=1841,364,1932,294
        elif c=='n' :
            lx,ly,ux,uy=2281,1337,2351,1254
        elif c=='o' :
            lx,ly,ux,uy=2437,1330,2514,1250
        elif c=='p' :
            lx,ly,ux,uy=2586,1392,2676,1250
        elif c=='q' :
            lx,ly,ux,uy=2749,1382,2829,1237
        elif c=='r' :
            lx,ly,ux,uy=2909,1306,3002,1223
        elif c=='s' :
            lx,ly,ux,uy=3071,1313,3137,1219
        elif c=='t' :
            lx,ly,ux,uy=3203,1302,3272,1178
        elif c=='u' :
            lx,ly,ux,uy=3352,1306,3428,1233
        elif c=='v' :
            lx,ly,ux,uy=3498,1295,3581,1219
        elif c=='w' :
            lx,ly,ux,uy=3394,305,3501,246
        elif c=='x' :
            lx,ly,ux,uy=120,1569,189,1486
        elif c=='y' :
            x-=30
            lx,ly,ux,uy=286,1673,400,1507
        elif c=='z' :
            lx,ly,ux,uy=473,1555,560,1482
        elif c=='A' :
            lx,ly,ux,uy=92,914,168,800
        elif c=='B' :
            lx,ly,ux,uy=272,907,345,786
        elif c=='C' :
            lx,ly,ux,uy=452,897,521,790
        elif c=='D' :
            lx,ly,ux,uy=622,887,695,779
        elif c=='E' :
            lx,ly,ux,uy=771,890,844,772
        elif c=='F' :
            lx,ly,ux,uy=934,887,993,783
        elif c=='G' :
            lx,ly,ux,uy=1090,873,1190,769
        elif c=='H' :
            lx,ly,ux,uy=1277,866,1360,772
        elif c=='I' :
            lx,ly,ux,uy=1433,873,1502,762
        elif c=='J' :
            lx,ly,ux,uy=1578,883,1675,762
        elif c=='K' :
            lx,ly,ux,uy=1769,856,1859,755
        elif c=='L' :
            lx,ly,ux,uy=1945,852,2015,748
        elif c=='M' :
            lx,ly,ux,uy=2091,859,2205,734
        elif c=='N' :
            lx,ly,ux,uy=2278,828,2375,720
        elif c=='O' :
            lx,ly,ux,uy=2448,828,2517,734
        elif c=='P' :
            lx,ly,ux,uy=2621,821,2701,714
        elif c=='Q' :
            lx,ly,ux,uy=2787,838,2867,717
        elif c=='R' :
            lx,ly,ux,uy=2967,811,3033,700
        elif c=='S' :
            lx,ly,ux,uy=3113,804,3179,703
        elif c=='T' :
            lx,ly,ux,uy=3248,817,3331,693
        elif c=='U' :
            lx,ly,ux,uy=3428,800,3498,700
        elif c=='V' :
            lx,ly,ux,uy=3584,793,3671,693
        elif c=='W' :
            lx,ly,ux,uy=3733,793,3851,689
        elif c=='X' :
            lx,ly,ux,uy=88,1084,168,970
        elif c=='Y' :
            lx,ly,ux,uy=286,1070,355,959
        elif c=='Z' :
            lx,ly,ux,uy=438,1067,501,966
        elif c==',' :
            lx,ly,ux,uy=2306,405,2358,371
        elif c=='.' :
            lx,ly,ux,uy=1582,1285,1634,1247
        else:
             lx,ly,ux,uy=0,0,0,0
        
        


        for i in range(uy,ly):
            for j in range(lx,ux):
                if a[i,j,0]<100 and a[i,j,1]<150 :
                    if c=='b' or c=='d' or c=='h'or c=='i'or c=='j'or c=='k'or c=='l' or c=='t' or c=='B' or c=='I'or c=='T'or c=='E'or c=='M' or c=='A' or c=='R' or c=='N' :
                        arr[y-uy+i-30,x-lx+j]=a[i,j]
                    elif c=='u' or c=='w' or c=='p' :
                        arr[y-uy+i+30,x-lx+j]=a[i,j]
                    elif c=='.' :
                        arr[y-uy+i+60,x-lx+j]=a[i,j]
                    elif c==',':
                        arr[y-uy+i+67,x-lx+j]=a[i,j]

                    else:
                        arr[y-uy+i,x-lx+j]=a[i,j]
                    
        x+=ux-lx


pageimg = Image.fromarray(arr)
pageimg.save("python project/handwritten/text_to_writting/page_"+str(page_no)+".jpg")
fp.close()
print('done')
