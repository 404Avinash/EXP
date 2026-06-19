// Basic JavaScript Console Logging Examples

// Log a simple message
console.log("Hello, World!");

// Log multiple values
console.log("Name:", "John", "Age:", 25);

// Log an object
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
console.log("Person:", person);

// Log an array
const numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

// Warning and Error logging
console.warn("This is a warning!");
console.error("This is an error message!");

// Info logging
console.info("This is information");

// Clear console
// console.clear();

// Group logs
console.group("My Group");
console.log("Item 1");
console.log("Item 2");
console.groupEnd();

// Table format
console.table([
  { name: "Alice", age: 28 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 32 }
]);
