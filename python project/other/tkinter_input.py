import pyautogui
import time
from tkinter import *

def printInput():
    time.sleep(5)
    pyautogui.write(inputtxt.get(1.0, "end-1c"), interval = 0)

root = Tk(className='KeyBoard')
root['background']='#0a0a0f'
root.attributes('-topmost', True)
L= Label(root,text='VIRTUAL TYPER',background='#0a0a0f',fg='#ffffff',font=("Times", "40"))
inputtxt = Text(root,background='#242525',fg='#ffffff',font=("Helvetica", "16"),padx=10,pady=5)
B = Button(text='TYPE',height=3,width=8,bg='#242525',fg='#ffffff',command=printInput,borderwidth=12)
L.pack()
inputtxt.pack()
B.pack()

root.mainloop()