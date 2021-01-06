// Voluntary JavaScript-Math Practice
// Perform Mathematical Tasks with JavaScript. Remember: you must use the Math functions and print all results to the console!
// 1. Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 0, 1, 2, 3, 4));

// 2. Print out the highest number between -1 and 4.
console.log(Math.max(-1, 0, 1, 2, 3, 4))

// 3. Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
console.log(Math.ceil(3321.32321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(43.342));

// 4. Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
console.log(Math.floor(3321.32321));
console.log(Math.floor(326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(-9.78));
console.log(Math.floor(28.329));

// 5. Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let introSentence = 'Hi, my name is Nancy and I am ';
let age = 25;
console.log(introSentence + age);
// Comment: The + operator, in this case, is combining the string introSentence and the string age and prints it into one single row.

// 6. Create a variable with the value of “1005”. Convert it to a number.
var numberOne = '1005';
console.log(Number(numberOne))

// 7. Create a variable with the value of “10.05". Convert it to a number.
var numberTwo = '10.05';
console.log(Number(numberTwo))