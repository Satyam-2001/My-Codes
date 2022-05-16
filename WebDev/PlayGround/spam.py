import pyautogui
import time

limit = int(input('Enter number of message : '))
msg = input('Enter message : ')

time.sleep(5)

for _ in range(limit):
    pyautogui.typewrite(msg)
    pyautogui.press('Enter')