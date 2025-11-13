#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;        // size of array

    int arr[n];
    int sum = 0;

    // input and sum together
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        sum += arr[i];
    }

    cout << sum;

    return 0;
}
