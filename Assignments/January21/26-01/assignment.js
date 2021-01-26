// ___________________________________________________________ASSIGNMENT 1___________________________________________________________:
// Write a function that it returns  “Two for me and one for you” when no arguments are passed
// e.g
// console.log(twofer("Fran")) ---> "Two for me and one for Fran"
// console.log(twofer()) ---> "Two for me and one for you"

const twoFor = (who = "you") => `Two for me and one for ${who}`;
console.log(twoFor("Dario"));
console.log(twoFor());

// ___________________________________________________________ASSIGNMENT 2___________________________________________________________:
// Write a function  that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
// e.g
// console.log(exponent(3, 3)) ---> 27
// console.log(exponent(3)) ---> 9
const exponent = (num, exp = 2) => num ** exp;
console.log(exponent(3, 3));
console.log(exponent(3));

const exponent2 = (num, exp = 2) => Math.pow(num, exp);
console.log(exponent2(3, 3));
console.log(exponent2(3));

const exponent3 = (num, exp = 2) => {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    // 1=1*3
    // 3*3
    result *= num;
  }
  return result;
};
console.log(exponent3(3, 3));
console.log(exponent3(3));

// ___________________________________________________________ASSIGNMENT 3___________________________________________________________:
//Write a function that it returns the total amount of arguments passed to it.
//e.g
//console.log(howManyArgs()) ---> 0
//console.log(howManyArgs(1, false, "hello")) ---> 3
//console.log(howManyArgs("better")) ---> 1

const howManyArgs = (...args) => args.length;
console.log(howManyArgs());
console.log(howManyArgs(1, false, "hello"));
console.log(howManyArgs("better"));

// ___________________________________________________________ASSIGNMENT 4___________________________________________________________:
//Write a function which accepts any amount of numbers and return the sum of their addition
//e.g
//console.log(sum(1)) ---> 1
//console.log(sum(1, 15)) ---> 16
//console.log(sum(25, 25, 20)) ---> 70
const sum = (arr) => {
  var totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  return `The sum of adding up the numbers ${arr} is ${totalSum} in total.`;
};
console.log(sum([1]));
console.log(sum([1, 15]));
console.log(sum([25, 25, 20]));

// ___________________________________________________________ASSIGNMENT 5___________________________________________________________:
//Bonus: Write a function which accepts any amount of numbers and returns the average.
//e.g
//console.log(average(0)) ---> 0
//console.log(average(1, 2)) ---> 1.5
//console.log(average(1, 3, 6, 10)) ---> 5
//console.log(average(12, 14, 16)) ---> 14
/*
const average = (num) => {
  let arr = num.split("");
  var totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr.Math.floor();
  }
  return `The sum of adding up the numbers ${arr} is ${totalSum} in total.`;
};
console.log(average(0));
console.log(average(1, 2));
console.log(average(1, 3, 6, 10));
/*
const average = (num) => {
  let numArr = num.split(", ");
  var n = numArr.Math.floor(num);
  return n;
};
console.log(average(1, 2));
*/
