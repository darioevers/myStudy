// .map
// Converting an array to a different array: Array.prototype.map(<function>)
const books = ["One Day", "One more thing", "Done by me"];

const printLabel = books.map((item, index) => `${index}. Title ${item}`);
console.log(printLabel);
console.log(books);

const numbers = ["1", "2", "3"].map((item) => parseInt(item));
console.log(numbers);

const printMany = ["1", "2", "3"].map((item) => console.log("Hi"));
const printManyTwo = ["1", "2", "3", "Dario"].map((item, index) =>
  console.log(item, index)
);

// .reduce
// Getting a single output value
const reducer = (acc, cur) => acc + cur;
const resultArr = [2, 3, 1, 3].reduce(reducer);
console.log(resultArr);

// .filter
// Getting an array with items that aline with your condition: 'Array.prototype.filter(<function>)
const names = ["Dario", "Mo", "Ercan"];
const filArr = names.filter((name) => name.length >= 3);
console.log(filArr);

//.find
// getting a the first item that aline with your condition: 'Array.prototype.filter(<function>)
