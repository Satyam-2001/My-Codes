input_path = r'C:\Users\HP\Downloads\weak_typing_chapter_3_input.txt'
output_path = r"C:\Users\HP\Desktop\A3.txt"
f = open(input_path, 'r')
fw = open(output_path, 'w')
st = f.readlines()
MOD = 10**9 + 7

def sol(s, l):
    ans, f, first, pair, gap = 0, 0, 0, 0, 0
    X, letter = False, False
    for num,i in enumerate(s):
        if i == 'F':
            first += 1
        elif i == '.':
            first *= 2
            first %= MOD
        else:
            X = (True if i == 'X' else False)
            letter = X
            break
    n = first + 1
    for i in s[num + 1:]:

        if i == 'F':
            f += 1
            
        elif i != '.':
            if (not X and i == 'X') or (X and i == 'O'):
                ans += (n-f)*(l-n)
                ans %= MOD
                gap += l-2*n+f
                pair += 1
            X = (True if i == 'X' else False)
            f = 0

        else:
            ans = 2*ans - pair*(n*n) + n*gap
            gap += gap - 2*pair*n
            pair += pair
            if letter != X:
                ans += (n-f)*(l-n-first)
                gap += l-2*n+f-first
                pair += 1
            n *= 2
            n %= MOD
            ans %= MOD
            gap %= MOD
            pair %= MOD
            continue
        n += 1
    return ans

for e, k in enumerate(range(2, len(st), 2)):
    l = 0
    s = st[k][:-1]
    for i in s:
        if i == '.':
            l *= 2
            l %= MOD
        else:
            l += 1
    ans = sol(s, l)
    print(f'Case #{e+1}: {ans}')
    fw.write(f'Case #{e+1}: {ans}\n')

f.close()
fw.close()