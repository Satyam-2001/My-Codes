import cv2
import mediapipe as mp
import time

cap=cv2.VideoCapture(0)
i=1
while True :
    success,img=cap.read()
    cv2.imshow("Image",img)
    cv2.imwrite("python project\cv\camera_clicks\image_"+str(i)+".jpg",img)
    cv2.waitKey(1)
    time.sleep(15)
    i+=1