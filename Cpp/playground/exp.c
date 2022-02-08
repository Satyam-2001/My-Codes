#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int compare(char str1[], char str2[])
{
    int i = 0;
    while (str1[i] != 0 && str2[i] != 0 && str1[i] == str2[i])
    {
        i++;
    }
    return str1[i] - str2[i];
}

void insert(char str1[], char str2[])
{
    int i;
    for (i = 0; str2[i] != 0; i++)
    {
        str1[i] = str2[i];
    }
    str1[i] = 0;
}
void swap(char str1[], char str2[])
{
    char a[10];
    insert(a, str1);
    insert(str1, str2);
    insert(str2, a);
}
void enqueue(char Pqueue[][10], char str[], int size)
{
    insert(Pqueue[size], str);
    int child = size, parent = (child - 1) / 2;
    while (parent >= 0)
    {
        if (compare(Pqueue[parent], Pqueue[child]) > 0)
        {
            swap(Pqueue[parent], Pqueue[child]);
            child = parent;
            parent = (child - 1) / 2;
        }
        else
        {
            break;
        }
    }
}
char *extractMin(char Pqueue[][10], int size)
{
    char *pop;
    swap(Pqueue[size - 1], Pqueue[0]);
    pop = Pqueue[size - 1];
    int index = 0, child_1 = 1, child_2 = 2, smaller;
    while (child_1 < size - 1)
    {
        if (child_2 < size - 1)
        {
            smaller = (compare(Pqueue[child_1], Pqueue[child_2]) < 0) ? child_1 : child_2;
            if (compare(Pqueue[smaller], Pqueue[index]) < 0)
            {
                swap(Pqueue[smaller], Pqueue[index]);
                index = smaller;
                child_1 = 2 * index + 1;
                child_2 = child_1 + 1;
            }
            else
            {
                break;
            }
        }
        else
        {
            if (compare(Pqueue[index], Pqueue[child_1]) > 0)
            {
                swap(Pqueue[index], Pqueue[child_1]);
            }
            break;
        }
    }
    return pop;
}
void heapify(char Pqueue[][10], int size)
{
    int index, child_1, child_2, smaller;
    for (int i = size - 1; i >= 0; i--)
    {
        index = i;
        child_1 = 2 * index + 1;
        child_2 = child_1 + 1;
        while (child_1 < size)
        {
            if (child_2 < size)
            {
                smaller = (compare(Pqueue[child_1], Pqueue[child_2]) < 0) ? child_1 : child_2;
                if (compare(Pqueue[smaller], Pqueue[index]) < 0)
                {
                    swap(Pqueue[smaller], Pqueue[index]);
                    index = smaller;
                    child_1 = 2 * index + 1;
                    child_2 = child_1 + 1;
                }
                else
                {
                    break;
                }
            }
            else
            {
                if (compare(Pqueue[index], Pqueue[child_1]) > 0)
                {
                    swap(Pqueue[index], Pqueue[child_1]);
                }
                break;
            }
        }
    }
}
void merge(char MergedQueue[][10], char FirstQueue[][10], char SecondQueue[][10], int size1, int size2)
{
    for (int i = 0; i < size1; i++)
    {
        insert(MergedQueue[i], FirstQueue[i]);
    }
    for (int i = 0; i < size2; i++)
    {
        insert(MergedQueue[i + size1], SecondQueue[i]);
    }
    heapify(MergedQueue, size1 + size2);
}
void display(char Queue[][10],int size){
    for(int i = 0;i<size;i++){
        printf("%s ",Queue[i]);
    }
    printf("\n");
}
int main()
{
    char PriorityQueue[3][10][10], str[10], *pop;
    int n, size[3] = {0}, ind;

    while (1)
    {
        fflush(stdin);
        printf("\nChoose a prority queue for operation :");
        printf("\n1. First Priority Queue");
        printf("\n2. Second Priority Queue");
        printf("\n3. Merged Priority Queue");
        printf("\n4. Exit");
        printf("\nEnter your choice : ");
        scanf("%d", &ind);
        if (ind > 3 || ind < 1)
        {
            break;
        }
        if (ind == 3)
        {
            merge(PriorityQueue[2], PriorityQueue[0], PriorityQueue[1], size[0], size[1]);
            size[2] = size[0] + size[1];
            size[0] = 0;
            size[1] = 0;
        }
        do
        {
            printf("\n\nChoose a option :");
            printf("\n1. Insert (Enqueue)");
            printf("\n2. Remove (Extract Min)");
            printf("\n3. Display Minheap");
            printf("\n4. Go Back");
            printf("\nEnter your choice : ");
            scanf("%d", &n);
            switch (n)
            {
            case 1:
                printf("Elemen to insert : ");
                scanf("%s", str);
                enqueue(PriorityQueue[ind - 1], str, size[ind - 1]);
                size[ind - 1]++;
                break;
            case 2:
                if (size[ind - 1] == 0)
                {
                    printf("Queue is empty!!!");
                }
                else
                {
                    pop = extractMin(PriorityQueue[ind - 1], size[ind - 1]);
                    printf("Popped Element : %s", pop);
                    size[ind - 1]--;
                }
                break;
            case 3:
                display(PriorityQueue[ind - 1], size[ind - 1]);
                break;
            }
        } while (n != 4);
    }
    return 0;
}