#include <iostream>
#include <string>
using namespace std;
class Data
{
private:
    string name;
    int age;
    string gender;

public:
    Data()
    {
        name = "";
        age = 0;
        gender = "M";
    }
    void ReadData()
    {
        cout << "Reading data\n";
        cout << "Enter name: ";
        cin >> name;
        cout << "Enter gender: ";
        cin >> gender;
        cout << "Enter age: ";
        cin >> age;
    }

    void PrintData() const
    {
        cout << "Printing data:\n";
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Gender: " << gender << endl;
    }
};
class Student : public Data
{
private:
    string dept;
    int year;

public:
    Student()
    {
        dept = "";
        year = 0;
    }
    void ReadData()
    {
        Data::ReadData();
        cout << "Enter department: ";
        cin >> dept;
        cout << "Enter year: ";
        cin >> year;
    }

    void PrintData() const
    {
        Data::PrintData();
        cout << "Department:" << dept << endl;
        cout << "Year: " << year << endl;
    }
};
class Clerk : public Data
{
private:
    int workload;
    int salary;

public:
    Clerk()
    {
        workload = 0;
        salary = 0;
    }
    void ReadData()
    {
        Data::ReadData();
        cout << "Enter workload: ";
        cin >> workload;
        cout << "Enter salary:  ";
        cin >> salary;
    }

    void PrintData() const
    {
        Data::PrintData();
        cout << "Workload: " << workload << endl;
        cout << "Salary: " << salary << endl;
    }
};
class Professor : public Data
{
private:
    string dept;
    int courseload;
    int salary;

public:
    Professor()
    {
        dept = "";
        courseload = 0;
        salary = 0;
    }
    void ReadData()
    {
        Data::ReadData();
        cout << "Enter Department: ";
        cin >> dept;
        cout << "Enter Courseload: ";
        cin >> courseload;
        cout << "Enter salary: ";
        cin >> salary;
    }

    void PrintData() const
    {
        Data::PrintData();
        cout << "Department: " << dept << endl;
        cout << "Courseload: " << courseload << endl;
        cout << "Salary: " << salary << endl;
    }
};

main()
{
    
    int choice;
    cout << "Enter 1 for Student"<<endl;;
    cout << "Enter 2 for Professor"<<endl;
    cout << "Enter 3 for Clerk"<<endl;
    cin >> choice;
    if (choice == 1)
    {
        Student stud_obj;
        stud_obj.ReadData();
        stud_obj.PrintData();
    }
    else if (choice == 2)
    {
        Professor off_obj;
        off_obj.ReadData();
        off_obj.PrintData();
    }
    else if (choice == 3)
    {
        Clerk clerk_obj;
        clerk_obj.ReadData();
        clerk_obj.PrintData();
    }
    else
    {
        cout << "incorrect choice";
    }
}