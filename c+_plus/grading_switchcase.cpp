#include <iostream>
using namespace std;

int main() {
    int marks;
    cout << "Enter marks (0-100): ";
    cin >> marks;

    if (marks < 0 || marks > 100) {
        cout << "Invalid marks!";
        return 0;
    }

    switch (marks / 10) {
        case 10:
        case 9: cout << "Grade: A+"; break;
        case 8: cout << "Grade: A"; break;
        case 7: cout << "Grade: B"; break;
        case 6: cout << "Grade: C"; break;
        case 5: cout << "Grade: D"; break;
        default: cout << "Grade: F";
    }

    return 0;
}
