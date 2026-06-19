#include <iostream>
using namespace std;

int main() {
    int speed;
    cout << "Enter speed: ";
    cin >> speed;

    switch (speed / 20) {
        case 0: case 1: case 2: case 3:  // 0–60
            cout << "No fine";
            break;
        case 4:                         // 61–80
            cout << "Fine: ₹100";
            break;
        case 5:                         // 81–100
            cout << "Fine: ₹200";
            break;
        default:                        // 101 or above
            cout << "Fine: ₹500";
    }

    return 0;
}
