#include <iostream>
using namespace std;

int main() {
    int marks;
    cout << "Enter marks (0-100): ";
    cin >> marks;

    if (marks > 100 || marks < 0) cout << "Invalid marks!";
    else if (marks >= 90) cout << "Grade: A+";
    else if (marks >= 80) cout << "Grade: A";
    else if (marks >= 70) cout << "Grade: B";
    else if (marks >= 60) cout << "Grade: C";
    else if (marks >= 50) cout << "Grade: D";
    else cout << "Grade: F";

    return 0;
}
