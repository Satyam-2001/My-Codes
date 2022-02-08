from PIL import Image
import pytesseract
import numpy as np
import random

pytesseract.pytesseract.tesseract_cmd=r'C:\Program Files\Tesseract-OCR\tesseract.exe'
img=Image.open('python project/drawing/dia.jpg')
img=img.resize((4*img.width,4*img.height))
arr=np.array(img)
a=np.zeros([img.height,img.width,3],dtype=np.uint8)
a[:,:]=[230,230,245]

for i in range(img.height):
    for j in range(img.width):
        if arr[i,j,0]<100 and arr[i,j,1]<100 :
            x=random.randint(0,3)
            if x!=0:
                a[i,j]=[82, 83, 84]

name=pytesseract.image_to_boxes(img)
print(name)
for line in name.splitlines():
    x=line.split(' ')
    if x[0]=='~'  or x[0]=='@' or x[0]=='|':
        continue
    print(x)
    l,t,w,h=int(x[1]),int(x[2]),int(x[3]),int(x[4])
    a[img.height-h:img.height-t,l:w]=[230,230,245]


img=Image.fromarray(a)
img.save("python project/drawing/diagram.jpg")
print(img.height,img.width)