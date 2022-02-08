import cv2
import mediapipe as mp
import time
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume

devices = AudioUtilities.GetSpeakers()
interface = devices.Activate(
    IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume = cast(interface, POINTER(IAudioEndpointVolume))

cap=cv2.VideoCapture(0)
cap.set(3,1300)
cap.set(4,800)
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
                h,w=800,1300
                x,y=int(640*lm.x),int(480*lm.y)
                if id==8 :
                    x8,y8=x,y
                    cv2.circle(img,(x8,y8),50,(255,0,255),cv2.FILLED)
                if id==4 :
                    x4,y4=x,y
                if x8!=None and x4!=None :
                    cv2.line(img,(x4,y4),(x8,y8),(255,0,0),5)

                    dist=((y8-y4)**2+(x8-x4)**2)**0.5
                    vol=int((dist)-25)/400
                    if vol>1.0:
                        vol=1.0
                    elif vol<0.0:
                        vol=0.0
                    volume.SetMasterVolumeLevelScalar(vol,None)
                
            mpDraw.draw_landmarks(img,i,mpHands.HAND_CONNECTIONS) 
    cv2.imshow("Image",img)
    cv2.waitKey(1)
