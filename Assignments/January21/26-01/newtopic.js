// .map
// Converting an array to a different array: Array.prototype.map(<function>)
const books = ["One Day", "One more thing", "Done by me"];

const printLabel = books.map((item, index) => `${index}. Title ${item}`);
console.log(printLabel);
console.log(books);

const numbers = ["1", "2", "3"].map((item) => parseInt(item));
console.log(numbers);

const printMany = ["1", "2", "3"].map((item) => console.log("Hi"));
