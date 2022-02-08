class node:
    def __init__(self,val = 0):
        self.head = self
        self.value = val
        self.next = None
        
    def seg01(self):
        curr = self
        while curr.next:
            if curr.next.value == 0:
                temp = curr.next.next
                curr.next.next = self.head
                self.head = curr.next
                curr.next = temp
            curr = curr.next
        
    def print_list(self):
        current = self.head
        while current:
            print(current.value,end=" -> ")
            current = current.next
    
head = node(0)
head.next = node(1)
head.next.next = node(1)
head.next.next.next = node(1)
head.next.next.next.next = node(0)
head.seg01()
head.print_list()
