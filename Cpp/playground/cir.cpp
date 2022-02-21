#include <iostream>
#include <string.h>
using namespace std;
struct Node
{
    char name[50];  //name of the person that this node represents
    int key;    // an identification key
    Node* next;     // a pointer to another such node
};

// creating a global list with 'head' as the pointer to the first element
// and tail as pointer to the last element that was inserted
Node *head = NULL;
Node *tail = NULL;

Node* createNode(char* name, int key)
{
    // creates a node with required name and key 
    Node *newNode = new Node;
    newNode->key = key;
    strcpy(newNode->name, name);
    return newNode;
}
void append(char* name, int key)
{
    // creates a list and adds it to the end of the list
    Node* n = createNode(name, key);
    // if the list is empty:
    if (head == NULL)
    {
        n->next = n;
        head = tail = n;
        return;
    }
    //otherwise:
    n->next = tail->next;
    tail->next = n;
    tail = n;
}
void print()
{
    // prints the circular list
    Node* current = head;
    int k = 0;
    do
    {
        cout << current->name << " ";
        current = current->next;
    } while (k++ < 100);
}
int main()
{
    append((char *)"A", 1);
    append((char *)"B", 2);
    append((char *)"C", 3);
    append((char *)"D", 4);
    append((char *)"E", 5);
    print();
    return 0;
}