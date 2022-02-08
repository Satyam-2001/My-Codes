from PIL import Image
import numpy as np

#10,1080,1468,1345"

img=Image.open(r"C:\Users\HP\python\kivy_venv\images\la1.jpg")
a=np.array(img)
arr = np.zeros([img.height, img.width, 4], dtype=np.uint8)
for n,i in enumerate(a):
    for k,j in enumerate(i):
        if j[0]>150 and j[1]>100 :
            pass
        else:
            arr[n][k]=[j[0],j[1],j[2],255]
            
img=Image.fromarray(arr)
img.save(r"C:\Users\HP\python\kivy_venv\BGimage\5.png")

