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
  for (let i = 0; i < timesNew; i++) {
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

// SOLUTION:::
const findGreatest = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
  return result.join(", ");
};
console.log(findGreatest([1, 2, 3, 4, 5, 6], 3));

/* 
AEIOU:
Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
i.e. findVowels(“this is a string”) ➞ 4
*/

const findVowels = (str) => {
  let findVowelsNr = str.split(["a", "e", "i", "o", "u"]).length - 1;
  return findVowelsNr;
};
console.log(findVowels("Hello, how many vowels are here?"));

/*
No Duplicates!
 A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
[1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
[1, 6, 6, 9, 9] ➞ [1, 6, 9]
[2, 2, 2, 2, 2, 2] ➞ [2]
[5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
*/
