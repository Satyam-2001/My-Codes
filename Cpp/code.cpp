#include <iostream>
using namespace std;

#define maxStackLimit 10

class GrowingStack
{
	int *stack;
	unsigned size;
	unsigned top;
	const unsigned max_size;

public:
	static unsigned count;

	const unsigned getMaxSize()
	{
		return max_size;
	}

	unsigned currentSize()
	{
		return size;
	}

	unsigned getTop()
	{
		return top;
	}

	int *getStack()
	{
		return stack;
	}

	bool isEmpty()
	{
		return (top == 0);
	}

	~GrowingStack()
	{
		delete[] stack;
		count--;
	}

	GrowingStack(unsigned, const unsigned &);
	GrowingStack(const GrowingStack &);
	GrowingStack operator+(GrowingStack const &obj)
	{
		GrowingStack res(size + obj.size, max_size + obj.max_size);
		for (int i = 0; i < top; i++)
		{
			res.push(stack[i]);
		}
		for (int i = 0; i < obj.top; i++)
		{
			res.push(obj.stack[i]);
		}
		return res;
	}
	GrowingStack operator=(GrowingStack const &obj)
	{
		GrowingStack res(size, max_size);
		for (int i = 0; i < top; i++)
		{
			res.push(stack[i]);
		}
		return res;
	}
	bool push(int &);
	bool pop(int &);
	void inflate();
	void display();
};

GrowingStack::GrowingStack(unsigned size, const unsigned &max_size) : max_size(max_size)
{
	if (maxStackLimit <= count)
	{
		cout << "Maximum Stack Limit Reached!!";
	}
	else
	{
		this->size = size;
		this->top = 0;
		this->stack = new int[size];
		count++;
	}
}

GrowingStack::GrowingStack(const GrowingStack &obj) : max_size(obj.max_size)
{
	if (maxStackLimit <= count)
	{
		cout << "Maximum Stack Limit Reached!!";
	}
	else
	{
		this->size = obj.size;
		this->top = obj.top;
		this->stack = new int[size];
		for (unsigned i = 0; i < obj.top; i++)
		{
			stack[i] = obj.stack[i];
		}
		count++;
	}
}

void GrowingStack::display()
{
	for (unsigned i = 0; i < top; i++)
	{
		cout << stack[i] << " ";
	}
	cout << "\n";
}

bool GrowingStack::push(int &ele)
{
	if (top == max_size)
	{
		return false;
	}
	if (top == size)
	{
		inflate();
	}
	stack[top++] = ele;
	return true;
}

bool GrowingStack::pop(int &ele)
{
	if (isEmpty())
	{
		return false;
	}
	ele = stack[--top];
	return true;
}

unsigned GrowingStack::count = 0;

void GrowingStack::inflate()
{
	unsigned newsize = max(max_size, size + 10);
	int *newstack = new int[newsize];
	for (unsigned i = 0; i < top; i++)
	{
		newstack[i] = stack[i];
	}
	delete[] stack;
	stack = newstack;
}

int main()
{
	GrowingStack stack1(5, 10), stack2(5, 10);
	GrowingStack stack3(5, 10);
	for (int i = 1; i < 5; i++)
	{
		int ele1 = 2 * i, ele2 = 2 * i + 1;
		stack1.push(ele1);
		stack2.push(ele2);
	}
	cout << "stack1 : ";
	stack1.display();
	cout << "stack2 : ";
	stack2.display();
	while (!(stack1.isEmpty() && stack2.isEmpty()))
	{
		int ele;
		if (stack1.pop(ele))
		{
			stack3.push(ele);
		}
		if (stack2.pop(ele))
		{
			stack3.push(ele);
		}
	}
	cout << "stack3 : ";
	stack3.display();

	GrowingStack newStack = stack3;
	cout << "stack created using copy constructor : ";
	newStack.display();

	return 0;
}