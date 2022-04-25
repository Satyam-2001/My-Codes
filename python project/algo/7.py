import numpy as np
import matplotlib.pyplot as plt

def merge(arr, l, m, r):
    comparisions = 0
    n1 = m - l + 1
    n2 = r - m

    # create temp arrays
    L = [0] * (n1)
    R = [0] * (n2)

    # Copy data to temp arrays L[] and R[]
    for i in range(0, n1):
        L[i] = arr[l + i]

    for j in range(0, n2):
        R[j] = arr[m + 1 + j]

    # Merge the temp arrays back into arr[l..r]
    i = 0	 # Initial index of first subarray
    j = 0	 # Initial index of second subarray
    k = l	 # Initial index of merged subarray

    while i < n1 and j < n2:
        comparisions += 2
        if L[i] <= R[j]:
            comparisions += 1
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1

    # Copy the remaining elements of L[], if there
    # are any
    while i < n1:
        comparisions += 1
        arr[k] = L[i]
        i += 1
        k += 1

    # Copy the remaining elements of R[], if there
    # are any
    while j < n2:
        comparisions += 1
        arr[k] = R[j]
        j += 1
        k += 1
    
    return comparisions

# l is for left index and r is right index of the
# sub-array of arr to be sorted


def mergeSort(arr, l, r):
    comparisions = 1
    if l < r:
        m = l+(r-l)//2

        # Sort first and second halves
        comparisions += mergeSort(arr, l, m)
        comparisions += mergeSort(arr, m+1, r)
        comparisions += merge(arr, l, m, r)

    return comparisions

size = 4
x = list(range(1,size+1))
normal_comparisions = []
uniform_comparisions = []

for i in range(1,size+1):
    n = 2**i
    normal_data_set = np.random.normal(0, 0.1, n)
    uniform_data_set = np.random.uniform(0,n,n)
    comaprisionsNormal = mergeSort(normal_data_set,0,n-1)
    comaprisionsUniform = mergeSort(uniform_data_set,0,n-1)
    normal_comparisions.append(comaprisionsNormal)
    uniform_comparisions.append(comaprisionsUniform)

plt.plot(x,normal_comparisions,'ro-')
plt.plot(x,uniform_comparisions,'go-')

plt.xlabel('size : 2^n')
plt.ylabel('comparisions / swaps')
plt.show()