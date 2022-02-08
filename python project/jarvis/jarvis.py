import pyttsx3
import datetime
import speech_recognition as sr
import pyaudio
import os
import webbrowser
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume

devices = AudioUtilities.GetSpeakers()
interface = devices.Activate(
    IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume = cast(interface, POINTER(IAudioEndpointVolume))

engine=pyttsx3.init('sapi5')
voices=engine.getProperty('voices')
engine.setProperty('voices',voices[0].id)

def is_int(s):
    try: 
        int(s)
        return True
    except ValueError:
        return False


def speak(audio):
    engine.say(audio)
    engine.runAndWait()

def wishme():
    hour=int(datetime.datetime.now().hour)
    if hour>=0 and hour<12:
        speak('Good Morning sir')
    elif hour>=12 and hour<18:
        speak('Good Afternoon sir')
    else :
        speak('Good Evening sir')
query=''
def takecommand():
    query=''
    r=sr.Recognizer()
    with sr.Microphone() as source:
        print('litsening....')
        r.pause_threshold=0.6
        r.energy_threshold=200
        print('hi')
        audio=r.listen(source)
        print('hello')
    try:
        print('Recognizing...')
        query=r.recognize_google(audio,language="en-in")
        print("Did u say.."+query)
    except Exception as e:
        print(e)
        speak('say that again')
        takecommand()
    return query.lower()

if __name__=="__main__":
    
    wishme()
    speak("jarvis here, how can i help you")
    o=True
    while(o):
        w=False
        v=False
        y=False
        s=False
        s=takecommand()
        st=s.split(' ')
        for i in st:
            if i=='quit' or i=='exit':
                o=False
                speak('good bye sir')
                exit()
                break
            if i=='open':
                w=True
            elif w:    
                webbrowser.open("https://"+i+".com")
                break
            if i=='search' or i=='what' or i=='who':
                s=True
            elif s:    
                if i=='is':
                    continue
                webbrowser.open("https://www.google.com/search?q="+i)
                break
            if i=='goto' or i=='go':
                y=True
            elif y:    
                os.startfile(r'C:\Users\HP\Downloads')
                break
            if i=='volume':
                v=True
                break
            if v and is_int(i):
                vol=int(i)/100
                if vol>1:
                    vol=1
                volume.SetMasterVolumeLevelScalar(vol,None)
                break
        speak('Anything else sir')

            
    print('done')