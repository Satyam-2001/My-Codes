from tkinter import Button
from kivy.app import App
from kivymd.app import MDApp
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.gridlayout import GridLayout
from kivymd.uix.button import MDFlatButton,MDRectangleFlatIconButton, MDRectangleFlatButton
from kivy.core.window import Window
from kivy.uix.button import Button
from KivyOnTop import register_topmost, unregister_topmost
import pyautogui
import win32gui
from kivy.config import Config
Config.set('graphics', 'fullscreen', 'fake')
Config.set('graphics', 'position', 'custom')
Config.set('graphics', 'top', '300')
Config.set('graphics', 'left', '300')
Config.set('kivy', 'keyboard_mode', 'systemandmulti')

Window.size=(951,348)


TITLE = 'Virtual Keyboard'


#Window.on_touch_down(False)


class Test(App):
    def on_start(self, *args):
        Window.set_title(TITLE)

        # Register top-most
        register_topmost(Window, TITLE)

        # Unregister top-most (not necessary, only an example)
        
        self.bind(on_stop=lambda *args, w=Window, t=TITLE: unregister_topmost(w, t))
    
    def change(self,instance):
        #self.G.add_widget(Button(text=instance.text))
        #pyautogui.write(instance.text, interval = 0)
        print(win32gui.GetFocus())
        win32gui.SetForegroundWindow(win32gui.GetFocus())

    def build(self):
        
        self.G=GridLayout(rows=6,padding=4,spacing=2)
        for i in range(6):
            for j in range(14):
                self.G.add_widget(Button(text=str(j),on_press=self.change))
        return self.G
        


Test().run()