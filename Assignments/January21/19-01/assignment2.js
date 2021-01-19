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
  const vowels = ["a", "e", "i", "o", "u"];
  const findVowelsNumber = str.split(vowels).length - 1;
  return findVowelsNumber;
};
console.log(findVowels("Hello, how many vowels are here?"));

const findVowels2 = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  var strBreakDown = str.split(vowels).length - 1;
  var allVowels = vowels.includes(strBreakDown);
  return allVowels;
};
console.log(findVowels2("Hello, this is my vowelcheck."));

const findVowels3 = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split(vowels).length - 1;
};
console.log(findVowels3("Hello, how many vowels are here?"));

const findVowels4 = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const strBreakDown = str.split("");
  console.log(strBreakDown);
  //const vowelCount = strBreakDown.split(vowels);
  //return vowelCount;
};
console.log(findVowels4("Hello, this is my vowelcheck."));

/*
No Duplicates!
 A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
[1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
[1, 6, 6, 9, 9] ➞ [1, 6, 9]
[2, 2, 2, 2, 2, 2] ➞ [2]
[5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
*/

/*
Dictionary. (take your time on this pls ) also as tip you can use .includes()
 Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
Notes:
If none of the words match, return an empty array.
Keep the filtered array in the same relative order as the original array of words.
Examples:
dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ []
*/

const dictionary = (str, arr) => {
  let result = [];
  let userInput = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i].toLowerCase();
    if (currentValue.includes(userInput)) {
      result.push(currentValue);
    }
  }
  return result;
};

console.log(dictionary("bo", ["cool", "bool", "nool", "dool"]));
console.log(dictionary("bo", ["cool", "nool", "dool"]));

// second way

const dictionary2 = (str, arr) => {
  let result = [];
  let userInput = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i].toLowerCase();
    let shortStr = currentValue.substring(0, str.length());
    if (currentValue.includes(userInput)) {
      result.push(currentValue);
    }
  }
  return result;
};

console.log(dictionary("bo", ["cool", "bool", "nool", "dool"]));
console.log(dictionary("bo", ["cool", "nool", "doolbo"]));
