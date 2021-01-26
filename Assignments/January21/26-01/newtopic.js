// __________________________________________________________INTRODUCTION___________________________________________________________:
// NEW TOPICS: .MAP, .REDUCE, .FILTER, .FIND
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
// getting the first item that aline with your condition: 'Array.prototype.filter(<function>)
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const biggerThanFive = myNumbers.find((num) => num > 5);
console.log(biggerThanFive);

// ___________________________________________________________ASSIGNMENT 1___________________________________________________________:
console.log("__ASSIGNMENT 1__");
// HACKER SPEAK
const hackSpeak = (str) => {
  return str
    .toLowerCase()
    .split("")
    .map((chr) => {
      switch (chr) {
        case "a":
          return "4";
        case "e":
          return "3";
        case "i":
          return "1";
        case "o":
          return "0";
        case "s":
          return "5";
        default:
          return chr;
      }
    })
    .join("");
};
console.log(
  hackSpeak(
    "Hacker Language means replacing certain characters with similar looking numbers."
  )
);

// ___________________________________________________________ASSIGNMENT 2___________________________________________________________:
console.log("__ASSIGNMENT 2__");
// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
const oddOrEven = (...args) => {
  return args.map((item) => (item % 2 == 0 ? ++item : --item));
};
console.log(oddOrEven(2, 4, 5, 6, 7));

// ___________________________________________________________ASSIGNMENT 3___________________________________________________________
console.log("__ASSIGNMENT 3__");
// how many chr in a str(not case sens)
// howManyStr(“I like pizza”,“p”) -> 1
const howManyStr = (str, occ) => {
  let strArr = str.toLowerCase().split("");
  let search = strArr.filter((words) => words.includes(occ));
  return search.length;
};
console.log(howManyStr("Pizza is nice.", "p"));
console.log(howManyStr("Pizza is nice.", "i"));
console.log(howManyStr("Pizza is nice.", "z"));
