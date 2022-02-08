from array import *
from numpy import *

class human:
    gender='male'
    age=20
    def __init__(self,n,s,c):
        self.name=n
        self.inform=self.info(s,c)
    def show(self):
        print(self.name)
        print(self.gender)
        print(self.age)
        self.inform.show()

        

    class info:
        def __init__(self,s,c):
            self.school=s
            self.colg=c
        def show(self):
            print(self.school)
            print(self.colg) 


Satyam=human('satyam','mps','iiest')
Shivam=human('shivam','dps','mbm')
mahesh=human.info('jpb','jnu')
mahesh.show()
