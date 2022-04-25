import numpy as np
import matplotlib.pyplot as plt

def partition(arr, low, high):
    comparisions = 0
    swaps = 1
    i = (low-1)		 # index of smaller element
    pivot = arr[high]	 # pivot

    for j in range(low, high):

        # If current element is smaller than or
        # equal to pivot
        if arr[j] <= pivot:
            comparisions += 1
            swaps += 1
            # increment index of smaller element
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i+1], arr[high] = arr[high], arr[i+1]
    return [i+1,comparisions,swaps]


def quickSort(arr, low, high):
    
    if len(arr) != 1 and low < high:
        pi,comparisions,swaps = partition(arr, low, high)
        first_half = quickSort(arr, low, pi-1)
        second_half = quickSort(arr, pi+1, high)
        comparisions += first_half['comparisions'] + second_half['comparisions']
        swaps += first_half['swaps'] + second_half['swaps']
        return {'comparisions': comparisions , 'swaps': swaps}
    
    return { 'swaps': 0, 'comparisions': 0}


size = 4
x = []
normal_comparisions = []
normal_swaps = []
uniform_comparisions = []
uniform_swaps = []

for i in range(1,size+1):
    n = 2**i
    normal_data_set = np.random.normal(0, 0.1, n)
    uniform_data_set = np.random.uniform(0,n,n)
    sortedArrNormal = quickSort(normal_data_set,0,n-1)
    sortedArrUniform = quickSort(uniform_data_set,0,n-1)
    x.append(i)
    normal_comparisions.append(sortedArrNormal['comparisions'])
    normal_swaps.append(sortedArrNormal['swaps'])
    uniform_comparisions.append(sortedArrUniform['comparisions'])
    uniform_swaps.append(sortedArrUniform['swaps'])

plt.plot(x,normal_comparisions,'ro--')
plt.plot(x,normal_swaps,'ro-')
plt.plot(x,uniform_comparisions,'go--')
plt.plot(x,uniform_swaps,'go-')

plt.xlabel('size : 2^n')
plt.ylabel('comparisions / swaps')
plt.show()

print(normal_comparisions)
print(normal_swaps)
print(uniform_comparisions)
print(uniform_swaps)