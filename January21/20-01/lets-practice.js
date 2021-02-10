// SumOfNumbers.
// Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
const sumOfNumbers = (arr) => {
  var product = 1;
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }
  return `The sum of adding up ${arr} is ${sum}, and the product of multiplying ${arr} is ${product}.`;
};
console.log(sumOfNumbers([1, 2, 3, 4]));

// Add Up.
// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function.
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// Examples:
// sumIntFrom1ToN(4) ➞ 10 sumIntFrom1ToN(13) ➞ 91 sumIntFrom1ToN(600) ➞ 180300
const sumIntFrom1ToN = (int) => {
  var sum = 0;
  for (let i = 0; i <= int; i++) {
    sum += i;
  }
  return `If you add up all numbers up until and including ${int}, you will receive ${sum}`;
};
console.log(sumIntFrom1ToN(4));
console.log(sumIntFrom1ToN(13));
console.log(sumIntFrom1ToN(600));

// String Check.
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// Examples:
// isStrStartOfWord("bu", "button") ➞ true isStrStartOfWord("tri", "triplet") ➞ true isStrStartOfWord("beau", "pastry") ➞ false
const doesStrIncludeWord = (str, word) => {
  let newStr = str.toLowerCase();
  let wordToBeChecked = word.toLowerCase();
  if (wordToBeChecked.includes(newStr)) {
    console.log(`The word ${word} INCLUDES the letters ${str}: TRUE`);
  } else {
    console.log(`The word ${word} INCLUDES the letters ${str}: FALSE`);
  }
};
doesStrIncludeWord("bu", "button");
doesStrIncludeWord("tri", "triplet");
doesStrIncludeWord("beau", "pastry");

const isStrStartOfWordTwo = (str, word) => {
  let lowStr = str.toLowerCase();
  let lowWord = word.toLowerCase();
  if (lowWord.substring(0, lowStr.length) == lowStr) {
    console.log(`The word ${word} STARTS with the letters ${str}: TRUE`);
  } else {
    console.log(`The word ${word} STARTS with the letters ${str}: FALSE`);
  }
};
isStrStartOfWordTwo("bu", "button");
isStrStartOfWordTwo("tri", "triplet");
isStrStartOfWordTwo("beau", "pastry");

// Pie.
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets. Examples:
// isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// isEqualSlices(8, 3, 2) ➞ true
// isEqualSlices(8, 3, 3) ➞ false
// isEqualSlices(24, 12, 2) ➞ true
const pieCalculator = (totalSlices, recipients, singleSlices) => {
  if (recipients * singleSlices <= totalSlices) {
    console.log(
      `${recipients} recipients can eat ${singleSlices} slices each, and stay below the total slice number of ${totalSlices}: TRUE.`
    );
  } else {
    console.log(
      `${recipients} recipients can eat ${singleSlices} slices each, and stay below the total slice number of ${totalSlices}: FALSE. For a fair split, ${
        recipients * singleSlices - totalSlices
      } slice(s) will be left.`
    );
  }
};
pieCalculator(11, 5, 3);
pieCalculator(8, 3, 2);
pieCalculator(8, 3, 3);
pieCalculator(24, 12, 2);

// isPalindrome.
// Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
const isPalindrome = (str) => {
  let strReverseA = str.split("");
  let strReverseB = strReverseA.reverse();
  let strReverseC = strReverseB.join("");
  if (str == strReverseC) {
    console.log(
      `The word ${str} is backwords also ${strReverseC} and therefore it is a palindrome.`
    );
  } else {
    console.log(
      `The word ${str} is backwords ${strReverseC} and therefore it is NOT a palindrome.`
    );
  }
};
isPalindrome("madam");
isPalindrome("tarrattarrat");
isPalindrome("JavaScript");

const isPalindromeTwo = (str) => {
  let wordToArr = str.toLowerCase().split("");
  return str === wordToArr.reverse().join("");
};
console.log(isPalindromeTwo("madam"));
console.log(isPalindromeTwo("tarrattarrat"));
console.log(isPalindromeTwo("JavaScript"));
console.log(isPalindromeTwo("Dario"));
