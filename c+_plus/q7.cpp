#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int arr1[n];
    int arr2[n];

    // input original array
    for (int i = 0; i < n; i++) {
        cin >> arr1[i];
    }

    // copy elements
    for (int i = 0; i < n; i++) {
        arr2[i] = arr1[i];
    }

    // print copied array
    for (int i = 0; i < n; i++) {
        cout << arr2[i] << " ";
    }

    return 0;
}
