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

    // assume first element is max
    int mx = arr[0];

    // find actual max
    for (int i = 1; i < n; i++) {
        if (arr[i] > mx) {
            mx = arr[i];
        }
    }

    cout << mx;

    return 0;
}
