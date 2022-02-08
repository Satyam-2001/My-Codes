from os import error
from PIL import Image
import numpy as np
from docx import Document
from docx.shared import Inches,Pt,RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

page_design=3
line_design=1
page_no=1
left_indent=None
right_indent=None
bold=0


file=Document("handwritten/REPORT.docx")
lines=file.paragraphs

font_dic={}
font = 11
for line in lines:
    for diff in line.runs:
        try:
            font=diff.font.size.pt
        except :
            pass
        if font_dic.get(font,False)==False :
            font_dic[font]=len(diff.text)
        else :
            font_dic[font]+=len(diff.text)
val_list=list(font_dic.values())
key_list=list(font_dic.keys())
position = val_list.index(max(val_list))

basic_font_size=key_list[position]/0.9
new_font_size=basic_font_size
flag=0
up=0
img=Image.open("handwritten/images/real.jpg")
a=np.array(img)

arr = np.zeros([6000, 4500, 3], dtype=np.uint8)

if page_design == 1:
    arr[:,:] = [247,248, 250]
elif page_design == 2:
    arr[:,:]=[214,215,212]
elif page_design == 3:
    bgimage=Image.open("handwritten/images/pages.jpeg")
    bgimage=bgimage.resize((4500,6000))
    arr=np.array(bgimage)
elif page_design == 4:
    arr[:,:]=[255,255,255]
elif page_design == 5:
    arr[:,:]=[230,230,245]
else :
    pass

if line_design==1 :
    ldesign=[100,150,215]
else :
    ldesign=[62,62,62]

# for i in range(32):
#     arr[515+i*170:520+i*170,:]=ldesign
# arr[:,550:560]=[210,45,65]
k=None
num=0
char=0
h=1
superscript=False
Dict={}
for i in lines:
    num+=len(i.text)
per=79/num
print("PROGRESS : ",end='')
x,y=100,200
underline=False
for line in lines:
    if underline :
        arr[y+10:y+20,underline_x:x]=[0, 45, 179]
    x=100
    y+=170
    k=0
    if line.alignment==None :
        pass
    else :
        align=int(line.alignment)
        if align==1:
            count_word=0
            for i in line.text.split(' ') :
                count_word+=len(i)
            try :
                space=90*count_word*line.runs[0].font.size.pt/basic_font_size
                x+=int((3900-space)//2)
            except :
                pass
    
    length=line.text.split(' ') 
    underline=False
    for diff in line.runs :  
        bold=0
        try:
            Font_size=diff.font.size.pt
        except: 
            pass
        comp=0
        colour=False
        
        if diff.font.bold :
            bold=10 
        if diff.font.color.rgb !=None:
            color=[]
            colour=True
            for i in diff.font.color.rgb:
                color.append(i)
        if underline :
            arr[y+10:y+20,underline_x:x]=[0,45,179]
            underline=False
        if diff.underline!=None:
            underline=True
            underline_x=x
        if superscript:
             superscript=False
             y+=int(80*Font_size/basic_font_size)
        if diff.font.superscript:
            y-=int(80*Font_size//basic_font_size)
            Font_size=Font_size//1.5
            superscript=True

        if diff.font.subscript:
            Font_size=Font_size//1.5

        if diff.font.math!=None:
            print(diff.font.math)

        if diff.font.outline:
            print(diff.font.outline)
        
        for c in diff.text:
            char+=1
            if int(char*per)==h:
                print(u"\u25AE",end='')
                h+=1

            if c==' ':
                lx,ly,ux,uy=0,1,1,0
                x+=165
                k+=1
                if ((4500-x)-(len(length[k])*80)) < 0:
                        if underline :
                            arr[y+10:y+20,underline_x:x]=[0,45,179]
                        underline_x=100
                        x=100
                        y+=170
        
            if y>5785 :
                        if underline :
                            arr[y+10:y+20,underline_x:x]=[0,45,179]
                        underline_x=100
                        pageimg = Image.fromarray(arr)
                        pageimg.save("handwritten/text_to_writting/page_"+str(page_no)+".jpg")
                        page_no+=1
                        x,y=100,200
                        arr = np.zeros([6000, 4500, 3], dtype=np.uint8)

                        if page_design == 1:
                            arr[:,:] = [247,248, 250]
                        elif page_design == 2:
                            arr[:,:]=[234,235,232]
                        elif page_design == 3:
                            bgimage=Image.open("handwritten/images/pages.jpeg")
                            bgimage=bgimage.resize((4500,6000))
                            arr=np.array(bgimage)
                        elif page_design == 4:
                            arr[:,:]=[255,255,255]
                        elif page_design == 5:
                            arr[:,:]=[230,230,245]
                        else :
                            pass

                        if line_design==1 :
                            ldesign=[100,150,215]
                        else :
                            ldesign=[62,62,62]

                        # for i in range(32):
                        #     arr[515+i*170:520+i*170,:]=ldesign
                        # arr[:,550:560]=[210,45,65]
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
                lx,ly,ux,uy=1131,395,1197,260
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
                lx,ly,ux,uy=2091,849,2205,734
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
                lx,ly,ux,uy=3248,807,3331,693
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
            elif c=='0':
                lx,ly,ux,uy=2444,1714,2513,1603
            elif c=='1':
                lx,ly,ux,uy=2444,1561,2510,1475
            elif c=='2':
                lx,ly,ux,uy=2631,1554,2686,1454
            elif c=='3':
                lx,ly,ux,uy=2787,1554,2852,1457
            elif c=='4':
                lx,ly,ux,uy=2970,1544,3039,1447
            elif c=='5':
                lx,ly,ux,uy=3102,1558,3185,1450
            elif c=='6':
                lx,ly,ux,uy=3407,1693,3479,1603
            elif c=='7':
                lx,ly,ux,uy=3386,1551,3466,1444
            elif c=='8':
                lx,ly,ux,uy=3677,1693,3756,1582
            elif c=='9':
                lx,ly,ux,uy=3812,1682,3888,1575
            elif c=='(':
                lx,ly,ux,uy=210,159,286,52
            elif c==')':
                lx,ly,ux,uy=324,152,376,38
            elif c=='[':
                lx,ly,ux,uy=459,152,535,42
            elif c==']':
                lx,ly,ux,uy=715,149,774,42
            elif c=='{':
                lx,ly,ux,uy=888,163,965,42
            elif c=='}':
                lx,ly,ux,uy=1027,152,1096,31
            elif c=='-' or c==':':
                lx,ly,ux,uy=1969,886,2025,827
            elif c=='/':
                x+=20
                lx,ly,ux,uy=3628,789,3693,706
            else:
                continue
            if Font_size  :
                lx,ly,ux,uy=int(lx*Font_size/basic_font_size),int(ly*Font_size/basic_font_size),int(ux*Font_size/basic_font_size),int(uy*Font_size/basic_font_size)
                if Font_size!=new_font_size:
                    new_font_size=Font_size
                    imagesize=Image.fromarray(a)
                    imagesize=imagesize.resize((int(img.width*Font_size/basic_font_size),int(img.height*Font_size/basic_font_size)))
                    ac=np.array(imagesize)
                    a=ac
            
            if Dict.get(c,False)==False or Dict[c].get(Font_size,False)==False:
                 if Dict.get(c,False)==False:
                    Dict[c]={}
                 flag=False
                 Dict[c][Font_size]=[]
                 for i in range(ly,uy,-1):
                    m=[]
                    for j in range(lx,ux):
                        if a[i,j,0]<100 and a[i,j,1]<150 :
                            if flag==False:
                                m.append(j)
                                flag=True
                            elif j==ux-1 :
                                m.append(j)
                                flag=False
                        elif flag==True :
                            m.append(j)
                            flag=False
                    Dict[c][Font_size].append(m)
            
            
            ya=0
            flag=False
            ja=None
            add=0
            if c=='f' or c=='g' or c=='j' or c=='p' or c=='q' or c=='y':
                add=int(85*Font_size/basic_font_size)
            
            for i in Dict[c][Font_size]:
                for j in i:
                    if flag==False :
                        ja=j
                        flag=True
                    elif colour :
                        if x+j-lx+1>4500:
                            x=100
                            y+=170
                        arr[y-ya+add,x+ja-lx:x+j-lx+bold]=color
                        flag=False
                        
                    else :
                        if x+j-lx+1>4500:
                            x=100
                            y+=170
                        arr[y-ya+add,x+ja-lx:x+j-lx+1]=a[ly-ya,ja:j+1]
                        if bold!=0:
                            arr[y-ya+add,x+j-lx:x-lx+bold+j]=a[ly-ya,ja+1]


                        flag=False
                ya+=1
            ya=0
            x+=ux-lx

pageimg = Image.fromarray(arr)
pageimg.save("handwritten/text_to_writting/page_"+str(page_no)+".jpg")
print('Done !!')
pageimg.close()
try:
    imagesize.close()
except:
    pass
img.close()