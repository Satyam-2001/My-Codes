input_path=r'C:\Users\HP\Downloads\weak_typing_chapter_1_input.txt'
output_path=r"C:\Users\HP\Desktop\A1.txt"
f=open(input_path,'r')
fw=open(output_path,'w')
st=f.readlines()

for c,j in enumerate(range(2,len(st),2)):
    X,O=True,True
    step=-1
    for i in st[j]:
        if (i=='X' and O) or (i=='O' and X):
            step+=1
            X,O = ((True,False) if i=='X' else (False,True))
    if step==-1:
        step=0
    fw.write(f"Case #{c+1}: {step}\n")
f.close()
fw.close()