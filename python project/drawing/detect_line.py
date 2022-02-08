from PIL import Image
import numpy as np

img=Image.open('python project/drawing/dia.jpg')
arr=np.array(img)

print(img.size)


widt=0
l=False
line_ful=[]
for i in range(img.height):
    line=[]
    l=False
    for j in range(img.width):
        if arr[i,j,0]>100 and arr[i,j,1]>100 :
            arr[i][j]=[255,255,255]
            if l:
                if j-line[-1][1]>10:
                    line.append([i,j])
                else:
                    line.pop(-1)
                l=False

        else:
            #arr[i][j]=[128,0,128]
            if not l:
                line.append([i,j])
                l=True
    if l:
        line.append([i,j])

    line_ful.append(line)

a=np.zeros([img.height,img.width,3],dtype=np.uint8)
for n,i in enumerate(line_ful):
    for j in range(0,len(i),2):
        try:
            print(str(i[j][1])+' -> '+str(i[j+1][1]))
            a[i[0][0],i[j][1]:i[j+1][1]]=[128,0,128]
        except:
            print(n,end=' == ')
            print(i)
            

img=Image.fromarray(a)
img.save("python project/drawing/diagram.jpg")