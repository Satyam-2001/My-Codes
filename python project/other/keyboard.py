import pyautogui
import time
from tkinter import *
n=0
def printer(n):
    print(n)

root = Tk(className='KeyBoard')
root['background']='#0a0a0f'
root.geometry("951x348")
#root.maxsize(951,348)

root.attributes('-topmost', True)
for i in range(6):
    for j in range(14):

        B = Button(root, text =str(i),height=3,width=8,bg='#292923'
        ,fg='#ffffff',borderwidth=2,command=lambda :print(B))
        B.grid(row=i,column=j,padx=2.0,pady=2.0)
root.mainloop()
'''
s='hello'
time.sleep(5)
pyautogui.write(s, interval = 0)'''