import numpy as np
import math

def slope_line(arr,x1, y1, x2, thick=10, color=[82, 83, 84], slope=0):
    y0 = int(slope*x1)-y1
    for xo in range(x1, x2+1):
        yo = int(slope*xo)-y0
        arr[yo:yo+thick, xo:xo+thick] = color

def line(arr, x1, y1, x2, y2, thick=10, color=[82, 83, 84], type='normal'):

    y = y2-y1
    x = x2-x1

    if type != 'normal':

        if y == 0:
            if x1 > x2:
                x1, x2 = x2, x1
            for x in range(x1, x2, 50):
                arr[y1:y1+thick, x:x+30] = color
            return 0

        elif x == 0:
            if y1 > y2:
                y1, y2 = y2, y1
            for y in range(y1, y2, 50):
                arr[y:y+30, x1:x1+thick] = color
            return 0

        elif x1 > x2:
            x1, x2 = x2, x1
            y1, y2 = y2, y1

        m = y/x
        step = int(50*math.cos(math.atan(m)))
        print(step)
        x_add = int(3*step/5)
        y0 = int(m*x1)-y1
        for x in range(x1, x2, step+1):
            y_add = int(m*x)-y0
            slope_line(arr,x, y_add, x+x_add, thick,color=[82, 83, 84], slope=m)
        return 0

    if y == 0:
        if x1 > x2:
            x1, x2 = x2, x1
        arr[y1:y1+thick, x1:x2+thick] = color
        return 0

    elif x == 0:
        if y1 > y2:
            y1, y2 = y2, y1
        arr[y1:y2+thick, x1:x1+thick] = color
        return 0

    elif x1 > x2:
        x1, x2 = x2, x1
        y1, y2 = y2, y1

    m = y/x
    slope_line(arr,x1, y1, x2, thick, color=[82, 83, 84], slope=m)

def lines(arr, p, thick=10, color=[82, 83, 84], type='normal'):
    for xy in range(len(p)-1):
        line(arr, p[xy][0], p[xy][1], p[xy+1][0], p[xy+1][1], thick, color, type)


def circle(arr, x, y, r=20, color=[82, 83, 84], type='filled', thick=5):
    if type == 'filled':
        for i in range(0, r+1):
            ra = int((r**2-i**2)**0.5)
            arr[y-ra:y+ra, x-i:x+i] = color

    elif type == 'dot-circle':
        circle(arr,x, y)
        circle(arr,x, y, 2*r, type='h')

    else:
        for i in range(0, r+1):
            ra = int((r**2-i**2)**0.5)
            arr[y-ra:y-ra+thick, x-i:x-i+thick] = color
            arr[y+ra:y+ra+thick, x+i:x+i+thick] = color
            arr[y+ra:y+ra+thick, x-i:x-i+thick] = color
            arr[y-ra:y-ra+thick, x+i:x+i+thick] = color


def plus(arr, x, y, r=30, thick=10, color=[82, 83, 84]):
    line(arr,x-r, y, x+r, y, thick, color)
    line(arr,x, y-r, x, y+r, thick, color)

def arrow_head(arr, x, y, orientation='hr'):
    if orientation == 'hr':
        line(arr,x, y, x-50, y-50)
        line(arr,x, y, x-50, y+50)
    elif orientation == 'hl':
        line(arr,x, y, x+50, y-50)
        line(arr,x, y, x+50, y+50)
    elif orientation == 'vu' :
        line(arr,x, y, x-50, y+50)
        line(arr,x, y, x+50, y+50)
    elif orientation == 'vd' :
        line(arr,x, y, x-50, y-50)
        line(arr,x, y, x+50, y-50)


def curve_line(arr, points_xy, thick=10, color=[82, 83, 84]):
        print(points_xy[-1][0]-points_xy[0][0])
        y = [True]*(points_xy[-1][0]-points_xy[0][0])
        for i in range(len(points_xy)-2):
            x1, y1, x2, y2, x3, y3 = points_xy[i][0], points_xy[i][1], points_xy[i + 1][0], points_xy[i+1][1], points_xy[i+2][0], points_xy[i+2][1]
            D = np.linalg.det(np.array([[x1**2, x1, 1],
                                        [x2**2, x2, 1],
                                        [x3**2, x3, 1]]))
            if D==0:
                continue
            Dx = np.linalg.det(np.array([[y1, x1, 1],
                                         [y2, x2, 1],
                                         [y3, x3, 1]]))
            Dy = np.linalg.det(np.array([[x1**2, y1, 1],
                                         [x2**2, y2, 1],
                                         [x3**2, y3, 1]]))
            Dz = np.linalg.det(np.array([[x1**2, x1, y1],
                                         [x2**2, x2, y2],
                                         [x3**2, x3, y3]]))
            a = Dx/D
            b = Dy/D
            c = Dz/D
            print('old',a,b,c)

            if x1 > x2:
                x1, x2 = x2, x1
                y1, y2 = y2, y1
            for x in range(x1, x3):
                yp = int(a*x**2+b*x+c)
                if y[x-points_xy[0][0]] == True:
                    y[x-points_xy[0][0]] = yp
                else:
                    y[x-points_xy[0][0]] = int((yp+y[x-points_xy[0][0]])/2)

        for i in range(points_xy[0][0], points_xy[-1][0]):
            arr[y[i-points_xy[0][0]]:y[i-points_xy[0][0]]+thick, i:i+thick] = color


def curveture(arr, points, thick=10, color=[82, 83, 84]):
    D=[]
    dim=len(points)
    for i in range(dim):
        l=[1]
        for j in range(1,dim):
            l.insert(0,points[i][0]**j)
        D.append(l)
    print('now y:')
    det=np.linalg.det(np.array(D))
    print("DET ",det)
    if det==0:
        print('det is 0')
        return
    x=[]
    
    for i in range(dim):
        Dx = list(map(list, D))
        for j in range(dim):
            Dx[j][i]=points[j][1]
        x.append(np.linalg.det(np.array(Dx))/det)
    for x_point in range(points[0][0],points[-1][0]):
        y=x[-1]
        for n,i in enumerate(range(dim-1,0,-1)):
            y+=x[n]*(x_point**i)
        y=int(y)
        arr[y:y+thick, x_point:x_point+thick] = color