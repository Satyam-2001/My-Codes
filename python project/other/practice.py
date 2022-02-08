import numpy as np
import pytesseract
from PIL import Image

pytesseract.pytesseract.tesseract_cmd=r'C:\Program Files\Tesseract-OCR\tesseract.exe'
img=Image.open('python project/handwritten/images/faltu.jpeg')
boxes=pytesseract.image_to_boxes(img)
arr=np.array(img)
for b in boxes.splitlines() :
   b=b.split()
   print(b)
   x,y,x1,y1=int(b[1]),int(b[2]),int(b[3]),int(b[4])
   arr[img.height-y1:img.height-y,x:x+3]=[255,255,255]
   arr[img.height-y1:img.height-y,x1:x1+3]=[255,255,255]
img=Image.fromarray(arr)
img.show()


