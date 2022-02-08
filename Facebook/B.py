input_path = r'C:\Users\HP\Downloads\xs_and_os_input.txt'
output_path = r"C:\Users\HP\Desktop\B.txt"
f = open(input_path, 'r')
fw = open(output_path, 'w')
st = f.readlines()


def solve(row,num):
    merge = set()
    n = len(row)
    l = []
    col = []
    for i in range(n):
        s = ''
        for j in range(n):
            s += row[j][i]
        col += [s]

    for e,i in enumerate(row):
        if "O" not in i:
            x = i.count('.')
            if x == 1:
                merge.add((e,i.index('.')))
            l.append(x)

    for e,i in enumerate(col):
        if "O" not in i:
            x = i.count('.')
            if x ==1:
                if (i.index('.'),e) in merge:
                    continue
            l.append(x)
    if l:
        fw.write(f"Case #{num}: {min(l)} {l.count(min(l))}\n")
    else:
        fw.write(f"Case #{num}: Impossible\n")


i = 1
count=1
while i < len(st):
    sol = []
    num = int(st[i][:-1])
    for j in range(1, num+1):
        sol += [st[i+j][:-1]]
    solve(sol,count)
    count+=1
    i += num+1

f.close()
fw.close()