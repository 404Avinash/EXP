#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[n];
    bool visited[n];

    // input and initialize visited
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        visited[i] = false;
    }

    // find frequency
    for (int i = 0; i < n; i++) {

        // skip if already counted
        if (visited[i] == true)
            continue;

        int freq = 1;

        // compare with other elements
        for (int j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) {
                freq++;
                visited[j] = true; // mark as counted
            }
        }

        // print current element and its frequency
        cout << arr[i] << "→" << freq << endl;
    }

    return 0;
}
