from pynput.mouse import Button,Controller
import cv2
import mediapipe as mp
import time

mouse=Controller()
#1365,767

cap=cv2.VideoCapture(0)
mpHands=mp.solutions.hands
hands=mpHands.Hands(False,2,0.7,0.5)
mpDraw=mp.solutions.drawing_utils
while True :
    success,img=cap.read()
    imgRGB=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
    results=hands.process(imgRGB)
   
    if results.multi_hand_landmarks:
        for i in results.multi_hand_landmarks:
            x4,x8=None,None
            for id,lm in enumerate(i.landmark): 
                h,w=480,640
                y,x=int(h*lm.y),int(w*lm.x)
                xp,yp=1800-int(x*4)-mouse.position[0],int(y*3)-mouse.position[1]

                if id==8 and xp%1==0 and yp%2==0:
                    mouse.move(1800-int(x*4)-mouse.position[0],int(y*3)-mouse.position[1])
                    x8,y8=x,y
                if id==4 :
                    x4,y4=x,y
                if x8!=None and x4!=None :
                    dist=((y8-y4)**2+(x8-x4)**2)**0.5
                    if dist<25 :
                        mouse.press(Button.left)
                        mouse.release(Button.left)
                
            mpDraw.draw_landmarks(img,i,mpHands.HAND_CONNECTIONS) 
    cv2.imshow("Image",img)
    cv2.waitKey(1)