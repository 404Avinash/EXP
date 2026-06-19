function calculateresult(){
    let n = document.getElementById("subjects").value;
    let total = 0;
    for(let i=1; i<=n; i++){
        let marks = parseFloat(prompt("Enter marks for subject " + i));
        total += marks;
}
let average = total/n;
let grade;
let result;
if(average >= 90){
    grade = "A";
    result = "Pass";
}
else if(average >= 80){
    grade = "B";
    result = "Pass";
}
else if(average >= 70){
    grade = "C";
    result = "Pass";
}
else if(average >= 60){
    grade = "D";
    result = "Pass";
}
else {
    result = "Fail";
}
document.getElementById("result").innerHTML = "Total Marks: " + total + "<br> " + "Average: " + average.toFixed(2) + "<br>" + 
"Grade: " + grade + "<br>" + "Result: " + result;
}