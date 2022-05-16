#include <iostream>
#include <string>
using namespace std;

class Vehicle
{
private:
    string manufacturer;
    int price;

public:
    Vehicle(int p_price, string p_manufacturer)
    {
        manufacturer = p_manufacturer;
        price = p_price;
    }
    Vehicle(const Vehicle &con1)
    {
        cout << "\nCopy constructor2\n";
        manufacturer = con1.manufacturer;
        price = con1.price;
    }

    Vehicle &operator=(const Vehicle &con)
    {
        manufacturer = con.manufacturer;
        price = con.price;
    }
    void ReadData()
    {
        cout << "Reading data: "<<endl;
        cout << "Enter name of manufacturer: ";
        cin >> manufacturer;
        cout << "Enter Price:  ";
        cin >> price;
    }

    void PrintData() const
    {
        cout << "\nPrinting Data: "<<endl;
        cout << "Manufacturer: " << manufacturer << endl;
        cout << "Price:  " << price << endl;
    }
};

class Car : public Vehicle
{
private:
    string color, model;
    int seats;

public:
    Car()
    {
        color = "";
        model = "";
        seats = 10;
    }
    Car(string p_color, int p_seats, string p_model, int p_price, string p_manufacturer) : Vehicle(p_price, p_manufacturer)
    {
        cout << "\nParametrized constructor\n";
        color = p_color;
        seats = p_seats;
        model = p_model;
    }
    Car(const Car &obj) : Vehicle(obj)
    {
        cout << "\nCopy constructor1\n";
        color = obj.color;
        seats = obj.seats;
        model = obj.model;
    }
    Car &operator=(const Car &obj)
    {

        cout << "Here is ()= operator)\n";
        Vehicle::operator=(obj);
        color = obj.color;
        seats = obj.seats;
        model = obj.model;
        return *this;
    }
    void ReadData()
    {
        Vehicle::ReadData();
        cout << "Enter color: ";
        cin >> color;
        cout << "Enter model number : ";
        cin >> model;
        cout << "Enter seats: ";
        cin >> seats;
    }

    void PrintData() const
    {
        Vehicle::PrintData();
        cout << "Color: " << color << endl;
        cout << "Model: " << model << endl;
        cout << "Seats: " << seats << endl;
    }
};

int main()
{
    // Default constructor
     Car obj;
    obj.ReadData();
    obj.PrintData();

    // nParametrized constructor
    Car obj2("Blue", 10, "BMW", 1234, "L.SMOTORS");
    obj2.PrintData();
    cout << "\n........\n";

    // Using Copy constructor
    Car obj3(obj2);
    obj3.PrintData();

    // Using Assignment operator
     Car obj4;
     obj4 = obj2;
     obj4.PrintData();
     return 0;
}