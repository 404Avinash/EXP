#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[n];

    // input array
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int x;
    cin >> x;   // element to search

    bool found = false;

    // linear search
    for (int i = 0; i < n; i++) {
        if (arr[i] == x) {
            found = true;
            break;
        }
    }

    if (found)
        cout << "Found";
    else
        cout << "Not Found";

    return 0;
}
