#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[n];

    // input
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    // assume first element is minimum
    int mn = arr[0];

    // find actual minimum
    for (int i = 1; i < n; i++) {
        if (arr[i] < mn) {
            mn = arr[i];
        }
    }

    cout << mn;

    return 0;
}
