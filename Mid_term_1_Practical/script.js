function checkNumber() {
    let n = document.getElementById("num").value;
    let result = "";
    let output = "";

    
    if (n % 2 == 0) {
        result = n + " is Even";
    } else {
        result = n + " is Odd";
    }

    // Print numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        output += i + " ";
    }

    document.getElementById("result").innerHTML = result;
    document.getElementById("numbers").innerHTML = "Numbers: " + output;
}