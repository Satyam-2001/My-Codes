#import docx
#import random
import math
import sys
sys.path.insert(1, 'C:\\Users\HP\python\python project')
from writter import *
sys.path.insert(1, 'C:\\Users\HP\python\python project\graph')
from draw import *

def min_max(coordinate):
    x_max=coordinate[0][0]
    x_min=coordinate[0][0]
    y_max=coordinate[0][1]
    y_min=coordinate[0][1]

    for i in coordinate:
        if i[0]>x_max:
            x_max=i[0]
        if i[0]<x_min:
            x_min=i[0]
        if i[1]>y_max:
            y_max=i[1]
        if i[1]<y_min:
            y_min=i[1]
    return x_max,x_min,y_max,y_min
        

def graph_base(linex, liney, colour=[250, 100, 0]):

    linex -= 5
    liney -= 5
    x = linex*200+1400
    y = liney*200+1400
    arr = np.zeros([y, x, 3], dtype=np.uint8)
    arr[:, :] = [255, 255, 255]  # [240, 250, 240]  #230 -> 204 -> 179
    arr[:, :200] = [255, 255, 255]
    arr[:, x-200:] = [255, 255, 255]
    arr[y-200:, :] = [255, 255, 255]
    arr[:200, :] = [255, 255, 255]

    for i in range(1, linex+7):
        arr[200:y-200, i*200-3:i*200+3] = colour
    for i in range(1, liney+7):
        arr[i*200-3:i*200+3, 200:x-200] = colour

    for i in range(2, 2*(linex+5)):
        arr[200:y-200, i*100-1:i*100+2] = colour
    for i in range(2, 2*(liney+5)):
        arr[i*100-1:i*100+2, 200:x-200] = colour

    for i in range(10, 10*(linex+5)+10):
        arr[200:y-200, i*20-1:i*20+1] = colour
    for i in range(10, 10*(liney+5)+10):
        arr[i*20-1:i*20+1, 200:x-200] = colour
    
    return arr

def axis_generator(c,x,y):
    x_max,x_min,y_max,y_min=min_max(c)
    x_add=0
    y_add=0
    n=0
    nx,ny=False,False
    x_graph=0
    y_graph=0
    if x_min<0:
        nx=True
    else:
        x_min=0

    if y_min<0:
        ny=True
    else:
        y_min=0

    if nx and ny:  
        x_start=(y_min//y-1)*200
        y_start=(x_min//x-1)*200
        x_graph=(x_max-x_min)//x+4
        y_graph=(y_max-y_min)//y+4

    elif nx:
        y_start=(x_min//x - 1)*200
        x_start=-400
        y_add=200
        x_graph=(x_max-x_min)//x+2
        y_graph=(y_max)//y+2
    elif ny:
        x_start=(y_min//y - 1)*200
        y_start=-400
        x_add=200
    else:
        x_add=400
        y_add=400
        x_start=-400
        y_start=-400
        n=1
        x_graph=(x_max-x_min)//x+5
        y_graph=(y_max-y_min)//y+5
    if x_graph>20 :
        if y_graph>25:
            arr=graph_base(x_graph,y_graph)
        elif x_graph<=25 and y_graph<=20:
            arr=graph_base(25,20)
        else:
            arr=graph_base(x_graph,25)
            
    elif y_graph>25 :
        arr=graph_base(y_graph,20)

    else:
        arr=graph_base(20,25)
    
    linex=200*((x_max-x_min)//x+2-n)
    liney=200*((y_max-y_min)//y+2-n)
    
    origin_x=400-y_start
    origin_y=5000+x_start
    x_axis_line=400+x_add
    y_axis_line=5000-y_add
    line(arr,x_axis_line, origin_y, x_axis_line+linex, origin_y)   #X-axis
    line(arr,origin_x, y_axis_line, origin_x, y_axis_line-liney)   #Y-axis
    arrow_head(arr,x_axis_line+linex, origin_y, 'hr')
    arrow_head(arr, origin_x, y_axis_line-liney, 'vu')
    
    if nx or ny: 

        arrow_head(arr,x_axis_line, origin_y, 'hl')
        arrow_head(arr, origin_x, y_axis_line, 'vd')


    satyam=writer()

    i=x
    strip_x=600-y_start
    while(x+x_max>i):
        arr[origin_y:5050+x_start, strip_x:strip_x+10] = [82, 83, 84]
        s = str(i)
        l = int(len(s)*40*0.8)
        satyam.write_string(s, arr, strip_x-l,5150+x_start, [82, 83, 84], 2, 0.8)
        i+=x
        strip_x+=200

    i=y
    strip_y=4800+x_start

    while(y+y_max>i):
        arr[ strip_y:strip_y+10, 350-y_start:origin_x] = [82, 83, 84]
        s = str(i)
        l = int(len(s)*40*0.8)
        satyam.write_string(s,arr,310-y_start-l ,strip_y+40, [82, 83, 84], 2, 0.8)
        i+=y
        strip_y-=200

    if nx:
        i=-x
        strip_x=200-y_start
        while(x_min-x<i):
            arr[origin_y:5050+x_start, strip_x:strip_x+10] = [82, 83, 84]
            s = str(i)
            l = int(len(s)*40*0.8)
            satyam.write_string(s, arr, strip_x-l,5150+x_start, [82, 83, 84], 2, 0.8)
            i-=x
            strip_x-=200
    if ny:
        i=-y
        strip_y=5200+x_start
        while(y_min-y<i):
            arr[ strip_y:strip_y+10, 350-y_start:origin_x] = [82, 83, 84]
            s = str(i)
            l = int(len(s)*40*0.8)
            satyam.write_string(s,arr,310-y_start-l ,strip_y+40, [82, 83, 84], 2, 0.8)
            i-=y
            strip_y+=200

    #Point-Marking(dot,circle)

    point_xy=[]
    for i in range(len(c)):

        x1 = int((c[i][0]*200)//x)+origin_x
        y1 = origin_y-int((c[i][1]*200)//y)
        point_xy.append([x1, y1])
        circle(arr,x1,y1)

    curveture(arr,point_xy)
    #curve_line(arr,point_xy)
    
    return arr



def create_graph(coordinate,x_step,y_step,x_cm=1,y_cm=1,x_label='',y_label='',line='normal',point_type=None,x_zigzag=None,y_zigzag=None):

    arr=axis_generator(coordinate,x_step,y_step)
    
    return arr

    
# [0,128,0]
x_label = 'Current (A)'
y_label = 'Voltage (V)'
x = [i*10 for i in range(1, 14)]
y = [i*10 for i in range(1, 15)]
x_space = 1
y_space = 1
point = [[-1,-2],[1, 2], [2, 4],[5,4],[11,5],[12,6]]

arr = create_graph(point,1,1)

satyam = writer()

colour = [250, 100, 0]
colour1 = [0, 128, 0]

linex = 200*(len(x)+1)
liney = 200*(len(y)+1)

#satyam.write_string(x_label, arr, int(1000+linex//2-(len(x_label)*80*0.8)), 5000, [82, 83, 84], 3, 0.8)
#satyam.write_string(y_label, arr, 500, int(4400-liney//2+(len(y_label)*80*0.8)), [82, 83, 84], 5, 0.8, True)

img = Image.fromarray(arr)
img.save("python project/graph/graph_page.jpg")
img.close()
satyam.img.close()