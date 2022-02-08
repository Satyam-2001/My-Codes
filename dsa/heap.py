class heap:
       
    def heapify(List):
        n=len(List)
        
        for i in range(n-1,-1,-1):
            index=i
            child_1=2*i+1
            child_2=child_1 + 1
            while child_1<n :
                if child_2<n:
                    greater=(child_1 if List[child_1]>List[child_2] else child_2)
                    if List[greater]>List[index]:
                        List[greater],List[index]=List[index],List[greater]
                        index=greater
                        child_1 = 2*greater + 1
                        child_2 = child_1 + 1
                    else:
                        break
                elif List[child_1]>List[index]:
                    List[child_1],List[index]=List[child_1],List[index]
                    break
                else:
                    break

    def heap_push(List,num):

        List.append(num)
        index=len(List)-1
        parent= (index-1)//2

        while parent>=0:
            
            if List[parent]<List[index]:
                List[parent],List[index]=List[index],List[parent]
                index=parent
                parent=(index-1)//2
            else:
                break

    def heap_pop(List):
    
        pop=List[0]
        List[0]=List[-1]
        List.pop()
        n=len(List)
        index=0
        child_1=1
        child_2=2
        while child_1<n:

            if child_2<n:
                greater=(child_1 if List[child_1]>List[child_2] else child_2)
                if List[greater]>List[index]:
                    List[greater],List[index]=List[index],List[greater]
                    index=greater
                    child_1 = 2*greater + 1
                    child_2 = child_1 + 1
                else:
                    break
            elif List[child_1]>List[index]:
                List[child_1],List[index]=List[child_1],List[index]
                break
            else:
                break
        return pop

    def heap_sort(List):
        l=[]
        for i in range(len(List)):
            pop=heap.heap_pop(List)
            l.append(pop)
        for i in l:
            List.insert(0,i)




li = [5, 7, 9, 1, 3]
heap.heapify(li)
heap.heap_push(li,4)
heap.heap_push(li,9)
print(li)
heap.heap_pop(li)
heap.heap_sort(li)
print(li)