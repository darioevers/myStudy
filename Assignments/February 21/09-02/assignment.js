// ___________________________________________________________ASSIGNMENT 1___________________________________________________________:
console.log("__________ASSIGNMENT 1__________");
// Convert keys and values into an array.
// Create a function that converts an object into an array of keys and values.
// Examples:
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// })
// Expected output:
// [["A", 1], ["B", 2], ["C", 3]]

// ___________________________________________________________ASSIGNMENT 2___________________________________________________________:
console.log("__________ASSIGNMENT 2__________");
// objectToArray({
//   cats: 1,
//   dogs: 2,
//   turtles: 4
// })
// Expected output:
// [["cats", 1], ["dogs", 2], ["turtles", 4]]

// ___________________________________________________________ASSIGNMENT 3___________________________________________________________:
console.log("__________ASSIGNMENT 3__________");
// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]
function returnProperties() {
  let student = {
    name: "Mike",
    class: "4A",
    course: "English",
  };
  console.log(Object.keys(student));
}
returnProperties();

// ___________________________________________________________ASSIGNMENT 4___________________________________________________________:
console.log("__________ASSIGNMENT 4__________");
// Merge.
// Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}
