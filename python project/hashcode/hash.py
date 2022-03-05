class heap:

    def __init__(self,comp):
        self.Heap = []
        self.comp = comp

    def push(self,num):

        self.Heap.append(num)
        index=len(self.Heap)-1
        parent= (index-1)//2

        while parent>=0:
            
            if self.comp(self.Heap[parent],self.Heap[index]):
                self.Heap[parent],self.Heap[index]=self.Heap[index],self.Heap[parent]
                index=parent
                parent=(index-1)//2
            else:
                break

    def pop(self):
    
        poped=self.Heap[0]
        self.Heap[0]=self.Heap[-1]
        self.Heap.pop()
        n=len(self.Heap)
        index=0
        child_1=1
        child_2=2
        while child_1<n:

            if child_2<n:
                greater=(child_1 if self.comp(self.Heap[child_2],self.Heap[child_1]) else child_2)
                if self.comp(self.Heap[index],self.Heap[greater]):
                    self.Heap[greater],self.Heap[index]=self.Heap[index],self.Heap[greater]
                    index=greater
                    child_1 = 2*greater + 1
                    child_2 = child_1 + 1
                else:
                    break
            elif self.comp(self.Heap[index],self.Heap[child_1]):
                self.Heap[child_1],self.Heap[index]=self.Heap[child_1],self.Heap[index]
                break
            else:
                break
        return poped
    
    def isEmpty(self):
        return len(self.Heap) == 0 
    
    def top(self):
        return self.Heap[0].end


class project:
    def __init__(self, name, d, s, b, r) -> None:
        self.d = d; self.s = s; self.b = b; self.r = r
        self.name = name
        self.skills = []
        self.hired = []
        self.end = 0
    def printf(self):
        print(self.d, self.s, self.b, self.r) #C++ 3
        print(self.skills)
    def free(self):
        for i in self.hired:
            i.available = True
        self.hired.clear()


class person:
    def __init__(self,name, n) -> None:
        self.time = 0
        self.name = name
        self.n = n
        self.available = True
        self.skills= []

    def printf(self):
        print(self.time)
        print(self.n)
        print(self.skills)


def Solve(persons, projects, key, comp):
    
    p = len(projects)
    projects = dict(sorted(projects.items() ,key = key))
    present = 0
    score = 0
    Delete = []
    NumProjecctsDone = 0
    runningProjects = heap(comp)
    s = ''

    while NumProjecctsDone != p:

        for k,x in projects.items():
            flag = True
            for i in x.skills:
                skillsFlag = False
                for y in persons.values():
                    if y.available:
                        for j in y.skills:
                            if i[0] == j[0]:
                                if j[1] >= i[1]:
                                    y.available = False
                                    x.hired.append(y)
                                    skillsFlag = True
                                    break
                                # elif i[1] == j[1] - 1:
                                #     for l in x.hired:
                                #         for m in l.skills:
                                #             if m[0] == i[0] and m[1] >= i[1]:
                                #                 j[1] += 1
                                #                 y.available = False
                                #                 x.hired.append(y)
                                #                 skillsFlag = True
                                #                 break
                                #         if skillsFlag: break
                        if skillsFlag : break
                if not skillsFlag: 
                    flag = False
                    break
            if flag:
                s += k + "\n"
                for i in x.hired:
                    s += i.name + " "
                s += "\n"
                x.end = present + x.d
                runningProjects.push(x)
                NumProjecctsDone += 1
                Delete.append(x.name)
            else:
                x.free()

        # print(projects)

        for i in Delete:
            del projects[i]
        Delete.clear()

        if runningProjects.isEmpty(): break

        popped = runningProjects.pop()
        present = popped.end
        popped.free()

        while popped.end == runningProjects.top:
            popped = runningProjects.pop()
            popped.free()

        # for k,v in projects.items():
        #     if v.b + v.s < present + v.d:
        #         Delete.append(k)
        
        # for i in Delete:
        #     del projects[i]
        # Delete.clear()

    return (score,str(NumProjecctsDone) + "\n" + s)


infile = open("c.txt", 'r')
data = infile.read().splitlines()
infile.close()
c, p = map(int, data[0].split()); j = 1
projects = {}
persons = {}
for i in range(c):
    name, n =  map(str, data[j].split()); j += 1
    temp = person(name,n)
    for k in range(int(n)):
        sk, lev = map(str, data[j].split()); j += 1
        temp.skills.append([sk, int(lev)])
    persons[name] = temp

# for x in persons: print(x.skills)

for i in range(p):
    name, a1, a2, a3, a4 = map(str, data[j].split()); j += 1
    temp = project(name, int(a1), int(a2), int(a3), int(a4))
    skills_req = []
    for k in range(int(a4)): 
        skill_name , skill_level = data[j].split(' ')
        skills_req.append([skill_name , int(skill_level)]); j += 1
    temp.skills = skills_req
    projects[name] = temp

# for x in projects: x.printf()


outfile = open("output.txt","w")
ans = 0

def comp(a,b):
    return a.end < b.end

ans,s = Solve(persons, projects , key = lambda p:(p[1].b + p[1].s), comp = comp)

outfile.write(s)

outfile.close()