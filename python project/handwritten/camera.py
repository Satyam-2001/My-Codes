#Import required libraries
from PIL import Image
import numpy as np

img=Image.open("python project/handwritten/images/hello.jpg")
a=np.array(img)
flag=0
lx,ly,ux,uy=95,423,182,333
Dict={}
Dict['a']=[]


for i in range(ly,uy,-1):
    m=[]
    for j in range(lx,ux):
        if a[i,j,0]<100 and a[i,j,1]<150 :
            if flag==0:
                m.append(j)
                flag=1
            elif j==ux-1 :
                m.append(j)
                flag=0
        elif flag==1 :
            m.append(j)
            flag=0
    Dict['a'].append(m)

arr = np.zeros([ly-uy,ux-lx,3], dtype=np.uint8)
arr[:,:]=[255,255,255]
y=0
flag=0
ja=None
for i in Dict['a']:
    for j in i:
        if flag==0 :
            ja=j
            flag=1
        else :
            arr[ly-uy-y,ja-lx:j+1-lx]=a[ly-y,ja:j+1]
            flag=0
    y+=1

newimg=Image.fromarray(arr)
newimg.save("python project/handwritten/images/newimg.jpg")

print(Dict)