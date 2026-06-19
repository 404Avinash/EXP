#include <iostream>
#include <climits>
using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[n];

    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int largest = INT_MIN;
    int secondLargest = INT_MIN;

    // find largest & second largest
    for (int i = 0; i < n; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;  // previous largest becomes second
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }

    cout << secondLargest;

    return 0;
}
