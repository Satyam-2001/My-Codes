input_path = r'C:\Users\HP\Downloads\valet_parking_chapter_1_validation_input.txt'
output_path = r"C:\Users\HP\Desktop\C1.txt"
f = open(input_path, 'r')
fw = open(output_path, 'w')
s = f.readlines()

def Sol(st, R, C, K):

    count = 0
    for i in range(C):
        if st[K-1][i] == 'X':
            count += 1
    if count >= 1:
        return count
    parked = [0]*C
    for i in range(R):
        for num in range(C):
            if st[i][num] == 'X':
                parked[num] += 1
    lower, upper = 0, 0
    for i in parked:
        if i >= K:
            upper += (i-K) + 1
        if i >= R-K+1:
            lower += i-R+K
    return min(lower+1, upper+1, count)

i = 1
count = 1
while(i < len(s)):
    R, C, K = tuple([int(k) for k in s[i].split(' ')])
    ans = Sol(s[i+1:i+R+1], R, C, K)
    print(f"Case #{count}: {ans}")
    fw.write(f"Case #{count}: {ans}\n")
    i += R+1
    count+=1

f.close()
fw.close()