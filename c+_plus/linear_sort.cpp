#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter how many numbers you want to store: ";
    cin >> n;

    int arr[n];

    // input array
    cout << "Enter " << n << " numbers:\n";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int target;
    cout << "Enter the number you want to search for: ";
    cin >> target;

    // linear search
    int foundIndex = -1;  // -1 means "not found"
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            foundIndex = i;     // store the index
            break;              // mil gaya toh nikal lo loop se
        }
    }

    if (foundIndex != -1) {
        cout << "Number found at index: " << foundIndex << endl;
    } else {
        cout << "Number NOT found." << endl;
    }

    return 0;
}
