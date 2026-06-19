let person = {
    name: "Daksh",
    age: 30,
    city: "New York"
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(typeof(person));

//array data type

let numbers = [1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

// array with multiple data types

let mixedArray = [1,"Hello",true,{name:"Alice"},[1,2,3]];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);

//map on array

let num = [1,2,3,4,5];
let squaredarray = num.map(num => num*num);
console.log(squaredarray);
console.log(num);

//funciton with now parameters
function greet(){
    console.log("Hello,World!")
}
greet();

//normal function
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,1.5));

//function expression
//arrow function
const add = (a,b) => a+b;
console.log(add(2,3));

const divide = (a,b) => a/b;
console.log(divide(10,3));

//arrow funciton with single parameter
let square = x => x*x;
console.log(square(4));

//filter on array 
let evenNumbers = [2,3,4,5,1];
let filteredEvenNumbers = evenNumbers.filter(num => num%2===0);
console.log(filteredEvenNumbers);