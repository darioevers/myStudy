/*
Repeat it. 
Create a program with two variables: “item” and “times”. 
Create a program that repeats the “item” as many times as specified by “times”. 
The first variable (“item”) is the item that needs repeating while the second argument (“times”) is the number of times the item is to be repeated. Print the result in an array.
(“example”, 3) ➞ [“example”, “example”, “example”]
*/

let item = "example";
let times = 3;
console.log(item.repeat(times));

const repeater = (item, times) => {
  return Array(item) * times;
};
console.log(repeater("example", 3));

// SOLUTION::::
const rep = (itemNew, timesNew) => {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(itemNew);
  }
  return result;
};
console.log(rep("example", 5));

/*
The Greater Numbers.
Create a function which accepts two arguments: 
the first argument being an array of numbers, and the second argument being a number. 
The function should return the elements of the array which are greater than the second argument.
*/

let arr = [1, 2, 3, 4, 5];
let myNum = 3;
