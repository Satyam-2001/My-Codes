stud=open('python project\\stud.txt','r')
atten=open('python project\\atten.txt','r')
record=open('python project\\record.txt','w')
p=0
line=atten.readlines()
length=len(line)
while(length):
    length-=1
    if line[length][0]!='2':
        line.pop(length)

atten.close()
atten=open('python project\\atten.txt','w')

for i in line:
    atten.write(i[:10])
    atten.write('\n')
del line
atten.close()
atten=open('python project\\atten.txt','r')
line=atten.readlines()

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
    record.write(d)
    record.write(s)
print("No. of present : ", p)

atten.close()
record.close()
stud.close()
        
            
               