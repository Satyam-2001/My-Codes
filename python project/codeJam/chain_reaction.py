class Node:
    def __init__(self,f):
        self.child = set()
        self.fun = f
    def addChild(self,node):
        self.child.add(node)

for i in range(int(input())):
    n = int(input())
    # f = list(map(int,input().split()))
    # p = list(map(int,input().split()))
    P = [Node(fun) for fun in list(map(int,input().split()))]
    absyss = set()
    for j in list(map(int,input().split())):
        if j != 0:
            P[j].addChild(P[j-1])
        else:
            absyss.add(P[j])