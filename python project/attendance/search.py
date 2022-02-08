stud=open('python project/attendance/stud.txt','r')
atten=open('python project/attendance/atten.txt','r')
record=open('python project/attendance/record.txt','w')

p=0

for data in stud:
    s='    Absent\n'
    d=data[:10]
    atten.seek(0)
    for line in atten :
        c=line[:10]
        if c == d:
            s='    Present\n'
            p+=1
            break
    record.write(d+s)
print("No. of present : ", p)

atten.close()
record.close()
stud.close()
        
            
               
            
