M = 4
Arr = [0, 1, 2, 2, 3, 5]
ans = 0
MOD = 10**9 + 7


def Child(root):
    child = []
    for i in range(len(Arr)):
        if Arr[i] == root:
            child.append(i+1)
            if len(child) == 2:
                return child
    return child


def recurse(root):
    global ans
    ind = Child(root)
    # print(root,ind)
    if len(ind) == 0:
        return 1
    if len(ind) == 1:
        res = recurse(ind[0])
        if res > 1:
            if res <= 2:
                ans += res - 1
            else:
                ans += res + ((res-1)*(res-2))//2
            ans %= MOD
        return res + 1
    left, right = recurse(ind[0]), recurse(ind[1])
    res = abs(right - left)
    if res > 1:
        if res <= 2:
            ans += res - 1
        else:
            ans += res + ((res-1)*(res-2))//2
        ans %= MOD
    return max(left, right) + 1


recurse(0)
print(ans)
