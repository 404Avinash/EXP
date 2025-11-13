#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter how many numbers you want to sort: ";
    cin >> n;

    int arr[n];

    // taking input
    cout << "Enter " << n << " numbers:\n";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    // bubble sort
    for (int i = 0; i < n - 1; i++) {

        // optimization: check if swap happened
        bool swapped = false;

        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {

                // swap adjacent elements
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }

        // if no swap → array already sorted
        if (!swapped) break;
    }

    // output
    cout << "Sorted numbers: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
