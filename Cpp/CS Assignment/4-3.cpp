#include <iostream>
using namespace std;

class Shape
{
public:
    virtual void readData(){};
    virtual double area(){};
};

class Rectangle : public Shape
{
private:
    double width, height;

public:
    void readData();
    double area();
};

class Triangle : public Shape
{
private:
    double base, height;

public:
    void readData();
    double area();
};

class Circle : public Shape
{
private:
    double radius;

public:
    void readData();
    double area();
};

void Rectangle::readData()
{
    cout << "Enter the width: ";
    cin >> width;
    cout << "Enter height: ";
    cin >> height;
}
void Triangle ::readData()
{
    cout << "Enter the base: ";
    cin >> base;
    cout << "Enter the height: ";
    cin >> height;
}
void Circle::readData()
{
    cout << "Enter the radius: ";
    cin >> radius;
}

double Rectangle::area() { return width * height; }
double Triangle::area() { return 0.5 * base * height; }
double Circle::area() { return (3.14 * radius * radius); }

int main()
{
    double res = 0;
    int i, j, no_of_shapes;
    cout << "Enter number of shapes you want to insert in the plot: ";
    cin >> no_of_shapes;
    Shape *arr[100];

    for (i = 0; i < no_of_shapes; i++)
    {
        int choice;
        cout << "Enter the shape type:" << endl
                 << "    1. Rectangle" << endl
                 << "    2. Triangle" << endl
                 << "    3. Circle: \n"<<endl
                <<"    Enter the choice: ";
        cin >> choice;
        if (choice == 1)
            arr[i] = new Rectangle();

        else if (choice == 2)
            arr[i] = new Triangle();

        else if (choice == 3)
            arr[i] = new Circle();

        arr[i]->readData();
        res += arr[i]->area();
    }
    cout << "\nTotal area of all the shapes: " << res;
  
}